"""
pull_journal.py — downloads the family's live journal notes into
journal-backup/notes.json as a local backup. The folder is git-ignored (the
GitHub repo is public and the notes are private), never deployed, and not
loaded by the site. Needs the admin passphrase, read from the config in ~/.secrets.

    python tools/pull_journal.py
"""
import json
import re
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
API = "https://simonkayar.com/sites/trips/api/journal.php"
OUT = ROOT / "journal-backup" / "notes.json"

cfg = (Path.home() / ".secrets" / "trips-journal-config.php").read_text(encoding="utf-8")
admin_pass = re.search(r"'admin_pass_hash'\s*=>\s*hash\('sha256',\s*'([^']+)'\)", cfg).group(1)


def call(action, body):
    req = urllib.request.Request(f"{API}?action={action}", data=json.dumps(body).encode("utf-8"), method="POST",
                                 headers={"Content-Type": "application/json", "User-Agent": "TripsFamilySite/backup"})
    with urllib.request.urlopen(req, timeout=40) as r:
        return json.loads(r.read().decode("utf-8"))


tok = call("unlock", {"pass": admin_pass})["token"]
notes = call("list", {"token": tok})["notes"]
OUT.parent.mkdir(exist_ok=True)
OUT.write_text(json.dumps(notes, indent=2, ensure_ascii=False), encoding="utf-8")
print(f"wrote {OUT.relative_to(ROOT)} — {len(notes)} note(s)")
