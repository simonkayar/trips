"""
test_journal_api.py — exercises the live journal API end to end:
locked list → bad/unlock → family & admin tokens → spam rejections → a real post →
listed → family cannot delete → admin deletes → gone. Sends one real notification
email (the test note), then deletes the note. Passphrases come from ~/.secrets.

    python tools/test_journal_api.py
"""
import json
import re
import urllib.error
import urllib.request
from pathlib import Path

API = "https://simonkayar.com/trips/api/journal.php"
cfg = (Path.home() / ".secrets" / "trips-journal-config.php").read_text(encoding="utf-8")
FAMILY = re.search(r"'pass_hash'\s*=>\s*hash\('sha256',\s*'([^']+)'\)", cfg).group(1)
ADMIN = re.search(r"'admin_pass_hash'\s*=>\s*hash\('sha256',\s*'([^']+)'\)", cfg).group(1)


def call(action, body):
    req = urllib.request.Request(f"{API}?action={action}", data=json.dumps(body).encode("utf-8"), method="POST",
                                 headers={"Content-Type": "application/json", "User-Agent": "TripsFamilySite/test"})
    try:
        with urllib.request.urlopen(req, timeout=40) as r:
            return r.status, json.loads(r.read().decode("utf-8"))
    except urllib.error.HTTPError as e:
        try: return e.code, json.loads(e.read().decode("utf-8", "replace"))
        except Exception: return e.code, {}


def show(label, res, expect):
    good = res[0] == expect
    print(f"{'OK ' if good else 'BAD'} {label:28} {res[0]}  {json.dumps(res[1], ensure_ascii=False)[:110]}")
    return good


ok = True
ok &= show("list without token", call("list", {}), 401)
ok &= show("unlock wrong pass", call("unlock", {"pass": "nope"}), 403)
fam = call("unlock", {"pass": FAMILY.upper()}); ok &= show("unlock family (any case)", fam, 200) and fam[1].get("role") == "family"
adm = call("unlock", {"pass": ADMIN}); ok &= show("unlock admin", adm, 200) and adm[1].get("role") == "admin"
ft, at = fam[1].get("token"), adm[1].get("token")
ok &= show("list with family token", call("list", {"token": ft}), 200)
ok &= show("list with forged token", call("list", {"token": "admin.9999999999.abc"}), 401)
base = {"token": ft, "place": "hampi", "who": "Simon", "date": "2019-07-15", "title": "API test note", "text": "Posted by the deployment test — deleted right away.", "website": ""}
ok &= show("honeypot", call("post", dict(base, website="spam")), 400)
ok &= show("unknown name", call("post", dict(base, who="Nobody")), 400)
ok &= show("empty title", call("post", dict(base, title="")), 400)
r = call("post", base); ok &= show("valid post (family)", r, 200)
note_id = r[1].get("note", {}).get("id")
r = call("list", {"token": ft}); listed = any(n.get("id") == note_id for n in r[1].get("notes", [])); print(f"{'OK ' if listed else 'BAD'} listed after post"); ok &= listed
edit = dict(base, token=at, id=note_id, title="API test note (edited)")
ok &= show("family cannot edit", call("edit", dict(edit, token=ft)), 403)
r = call("edit", edit); ok &= show("admin edits", r, 200) and r[1].get("note", {}).get("title") == "API test note (edited)" and bool(r[1].get("note", {}).get("edited"))
ok &= show("family cannot delete", call("delete", {"token": ft, "id": note_id}), 403)
ok &= show("admin deletes", call("delete", {"token": at, "id": note_id}), 200)
r = call("list", {"token": at}); gone = not any(n.get("id") == note_id for n in r[1].get("notes", [])); print(f"{'OK ' if gone else 'BAD'} gone after delete"); ok &= gone
try:
    urllib.request.urlopen("https://simonkayar.com/trips/api/journal-data/notes.json", timeout=40); print("BAD raw data readable"); ok = False
except urllib.error.HTTPError as e:
    print(f"OK  raw data blocked ({e.code})")
print("\nALL GOOD" if ok else "\nSOMETHING FAILED — see above")
