"""
deploy_ftp.py — uploads the site to the web host over FTP.

    python tools/deploy_ftp.py              # upload changed files (default)
    python tools/deploy_ftp.py --all        # upload everything, ignore the manifest
    python tools/deploy_ftp.py --dry-run    # show what would be uploaded
    python tools/deploy_ftp.py --list       # list the remote web root and exit
    python tools/deploy_ftp.py --config     # upload the journal config (from ~/.secrets) above the web root

Reads credentials from %USERPROFILE%\.secrets\trips-ftp.txt (outside the
project, so it can never be committed or uploaded by mistake). Remote folder:
REMOTE_DIR below. Uploads only files whose content
hash changed since the last deploy (tracked in .deploy-manifest.json), so a
typical update after adding a place takes seconds. Files/folders in EXCLUDE
never go to the server.
"""
import hashlib
import json
import re
import sys
from ftplib import FTP, FTP_TLS, error_perm
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CREDS = Path.home() / ".secrets" / "trips-ftp.txt"
MANIFEST = ROOT / ".deploy-manifest.json"
REMOTE_DIR = "/domains/simonkayar.com/public_html/sites/trips"     # -> https://simonkayar.com/sites/trips/
EXCLUDE_DIRS = {".git", ".venv", "tools", "photos/_originals", "__pycache__", ".claude",
                "api/journal-data",          # the live journal notes live only on the server — never overwrite
                "journal-backup"}            # local backup of those notes — private, never uploaded
JOURNAL_CONFIG = Path.home() / ".secrets" / "trips-journal-config.php"
JOURNAL_CONFIG_REMOTE = "/domains/simonkayar.com/trips-journal-config.php"   # above the web root
EXCLUDE_FILES = {"ftp.txt", "design.txt", "serve.bat", "CLAUDE.md", "Chat_Summary.txt", "Project_Summary.txt",
                 ".gitignore", ".deploy-manifest.json", "README.md"}


def creds():
    if not CREDS.exists():
        raise SystemExit(f"credentials file not found: {CREDS}\n"
                         "(host/user/password/port lines, same format as the old ftp.txt)")
    cfg = CREDS.read_text(encoding="utf-8")
    host = re.search(r"ftp://([\w.\-]+)", cfg).group(1)
    user = re.search(r"username\s+(\S+)", cfg).group(1)
    pwd = re.search(r"password\s+(\S+)", cfg).group(1)
    port = int((re.search(r"port\s+(\d+)", cfg) or [None, "21"])[1])
    return host, port, user, pwd


def connect():
    host, port, user, pwd = creds()
    last = None
    for cls in (FTP_TLS, FTP):
        try:
            f = cls(timeout=60)
            f.connect(host, port)
            f.login(user, pwd)
            if cls is FTP_TLS:
                f.prot_p()
            f.set_pasv(True)
            print(f"connected to {host} ({cls.__name__})")
            return f
        except Exception as e:  # try plain FTP if TLS is refused
            last = e
    raise SystemExit(f"could not connect: {last}")


def local_files():
    for p in sorted(ROOT.rglob("*")):
        if not p.is_file():
            continue
        rel = p.relative_to(ROOT).as_posix()
        if p.name in EXCLUDE_FILES or p.name.startswith("."):
            continue
        if any(rel == d or rel.startswith(d + "/") for d in EXCLUDE_DIRS):
            continue
        yield rel, p


def sha(p: Path):
    h = hashlib.sha1()
    with open(p, "rb") as fh:
        for chunk in iter(lambda: fh.read(1 << 20), b""):
            h.update(chunk)
    return h.hexdigest()


def ensure_dir(f, path):
    """cd into `path`, creating each segment if needed."""
    f.cwd("/")
    for seg in [s for s in path.split("/") if s]:
        try:
            f.cwd(seg)
        except error_perm:
            f.mkd(seg)
            f.cwd(seg)


def main():
    args = set(sys.argv[1:])
    if "--list" in args:
        f = connect()
        for d in ["/", "/domains/simonkayar.com/public_html", "/domains/simonkayar.com/public_html/sites", REMOTE_DIR]:
            try:
                f.cwd(d)
                print(d, "->", f.nlst())
            except error_perm as e:
                print(d, "MISSING:", e)
        f.quit()
        return

    if "--config" in args:
        if not JOURNAL_CONFIG.exists():
            raise SystemExit(f"missing {JOURNAL_CONFIG}")
        f = connect()
        with open(JOURNAL_CONFIG, "rb") as fh:
            f.storbinary("STOR " + JOURNAL_CONFIG_REMOTE, fh)
        f.quit()
        print(f"uploaded journal config → {JOURNAL_CONFIG_REMOTE}")
        return

    manifest = {} if "--all" in args or not MANIFEST.exists() else json.loads(MANIFEST.read_text())
    todo = []
    current = {}
    for rel, p in local_files():
        h = sha(p)
        current[rel] = h
        if manifest.get(rel) != h:
            todo.append((rel, p))
    stale = [rel for rel in manifest if rel not in current]

    total_kb = sum(p.stat().st_size for _, p in todo) // 1024
    print(f"{len(current)} files in site, {len(todo)} to upload ({total_kb} KB), {len(stale)} to delete remotely")
    if "--dry-run" in args:
        for rel, _ in todo:
            print("  ^", rel)
        for rel in stale:
            print("  x", rel)
        return
    if not todo and not stale:
        print("nothing to do")
        return

    f = connect()
    done_dirs = set()
    for i, (rel, p) in enumerate(todo, 1):
        rdir = REMOTE_DIR + "/" + "/".join(rel.split("/")[:-1])
        rdir = rdir.rstrip("/")
        if rdir not in done_dirs:
            ensure_dir(f, rdir)
            done_dirs.add(rdir)
        else:
            f.cwd(rdir)
        with open(p, "rb") as fh:
            f.storbinary("STOR " + p.name, fh)
        print(f"  [{i}/{len(todo)}] {rel}")
        manifest[rel] = current[rel]
        MANIFEST.write_text(json.dumps(manifest, indent=1, sort_keys=True))   # resumable
    for rel in stale:
        try:
            f.delete(REMOTE_DIR + "/" + rel)
            print("  deleted", rel)
        except error_perm as e:
            print("  could not delete", rel, e)
        manifest.pop(rel, None)
    f.quit()
    MANIFEST.write_text(json.dumps(manifest, indent=1, sort_keys=True))
    print("done → https://simonkayar.com/sites/trips/")


if __name__ == "__main__":
    main()
