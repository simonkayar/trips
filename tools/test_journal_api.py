"""
test_journal_api.py — exercises the live journal API end to end:
list → spam rejections → a real post → list shows it → delete (admin key) → gone.
Needs the admin key from ~/.secrets/trips-journal-config.php. Sends one real
notification email (the test note), then deletes the note.

    python tools/test_journal_api.py
"""
import json
import re
import urllib.error
import urllib.request
from pathlib import Path

API = "https://simonkayar.com/trips/api/journal.php"
cfg = (Path.home() / ".secrets" / "trips-journal-config.php").read_text(encoding="utf-8")
ADMIN = re.search(r"'admin_key'\s*=>\s*'([^']+)'", cfg).group(1)


def call(method, url, body=None):
    data = json.dumps(body).encode("utf-8") if body is not None else None
    req = urllib.request.Request(url, data=data, method=method, headers={"Content-Type": "application/json", "User-Agent": "TripsFamilySite/test"})
    try:
        with urllib.request.urlopen(req, timeout=40) as r:
            return r.status, r.read().decode("utf-8")
    except urllib.error.HTTPError as e:
        return e.code, e.read().decode("utf-8", "replace")


def show(label, res):
    print(f"{label:22} {res[0]}  {res[1][:160]}")


ok = True
r = call("GET", API + "?action=list"); show("list", r); ok &= r[0] == 200 and '"ok":true' in r[1]
base = {"place": "hampi", "who": "Simon", "date": "2019-07-15", "title": "API test note", "text": "Posted by the deployment test — deleted right away.", "website": ""}
r = call("POST", API + "?action=post", dict(base, **{"pass": "nope"})); show("wrong passphrase", r); ok &= r[0] == 403
r = call("POST", API + "?action=post", dict(base, website="spam", **{"pass": "SKS"})); show("honeypot", r); ok &= r[0] == 400
r = call("POST", API + "?action=post", dict(base, who="Nobody", **{"pass": "SKS"})); show("unknown name", r); ok &= r[0] == 400
r = call("POST", API + "?action=post", dict(base, title="", **{"pass": "SKS"})); show("empty title", r); ok &= r[0] == 400
r = call("POST", API + "?action=post", dict(base, **{"pass": "sks"})); show("valid post", r); ok &= r[0] == 200
note_id = json.loads(r[1]).get("note", {}).get("id") if r[0] == 200 else None
r = call("GET", API + "?action=list"); listed = bool(note_id) and note_id in r[1]; print(f"{'listed after post':22} {listed}"); ok &= listed
r = call("GET", "https://simonkayar.com/trips/api/journal-data/notes.json"); print(f"{'raw data blocked':22} {r[0] in (403, 404)}"); ok &= r[0] in (403, 404)
if note_id:
    r = call("POST", f"{API}?action=delete&id={note_id}&key={ADMIN}"); show("delete (admin)", r); ok &= r[0] == 200
    r = call("POST", f"{API}?action=delete&id={note_id}&key=wrong"); show("delete (bad key)", r); ok &= r[0] in (403, 404)
    r = call("GET", API + "?action=list"); gone = note_id not in r[1]; print(f"{'gone after delete':22} {gone}"); ok &= gone
print("\nALL GOOD" if ok else "\nSOMETHING FAILED — see above")
