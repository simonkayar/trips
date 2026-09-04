"""
pull_journal.py — downloads the family's live journal notes from the site and
writes them into data/notes.js, so git always has a backup (and the notes still
show if the PHP API is ever unavailable). The site de-duplicates by id, so a
note that is both in notes.js and on the server appears once.

    python tools/pull_journal.py
"""
import json
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
URL = "https://simonkayar.com/trips/api/journal.php?action=list"
OUT = ROOT / "data" / "notes.js"

req = urllib.request.Request(URL, headers={"User-Agent": "TripsFamilySite/1.1 backup"})
data = json.loads(urllib.request.urlopen(req, timeout=40).read().decode("utf-8"))
notes = data.get("notes", [])
body = ",\n".join("  " + json.dumps({k: n.get(k) for k in ("id", "place", "who", "date", "title", "text")}, ensure_ascii=False) for n in notes)
OUT.write_text(
    "/* ------------------------------------------------------------------\n"
    "   notes.js — backup of the family journal, written by tools/pull_journal.py\n"
    "   from the live API (api/journal.php). Entries: {id, place, who, date, title, text}.\n"
    "   Notes are normally posted on the Journal page itself; re-run the script to\n"
    "   refresh this backup. Hand-written entries without an id are fine too.\n"
    "   ------------------------------------------------------------------ */\n"
    "TRIPS.notes.push(\n" + body + "\n);\n",
    encoding="utf-8",
)
print(f"wrote {OUT.relative_to(ROOT)} — {len(notes)} note(s)")
