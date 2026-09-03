"""
validate_data.py — sanity-checks the data files without a browser.

    python tools/validate_data.py

Checks: duplicate place ids, parents that don't exist, places missing coordinates
or state, questions with wrong option counts / duplicate ids / unknown places,
trips referring to unknown places, and places with no hand-written questions.
"""
import collections
import glob
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ok = True


def warn(msg):
    global ok
    ok = False
    print("  !", msg)


places = []
for f in sorted(glob.glob(str(ROOT / "data" / "places-*.js"))):
    txt = Path(f).read_text(encoding="utf-8")
    for m in re.finditer(
        r"\{\s*\n\s*id:\s*'([a-z0-9\-]+)',\s*name:\s*'([^']*)',\s*kind:\s*'(\w+)',\s*scope:\s*'(\w+)'(.*?)(?=\n  \},?\n|\n  \}\n\);)",
        txt, re.S,
    ):
        body = m.group(5)
        parent = re.search(r"parent:\s*'([a-z0-9\-]+)'", body)
        lat = re.search(r"lat:\s*(-?[\d.]+)", body)
        lng = re.search(r"lng:\s*(-?[\d.]+)", body)
        state = re.search(r"state:\s*'([^']*)'", body)
        places.append(dict(
            id=m.group(1), name=m.group(2), kind=m.group(3), scope=m.group(4),
            parent=parent.group(1) if parent else None,
            lat=lat and float(lat.group(1)), lng=lng and float(lng.group(1)),
            state=state and state.group(1), file=Path(f).name,
        ))

ids = [p["id"] for p in places]
idset = set(ids)
leaves = [p for p in places if p["kind"] == "place"]
print(f"places parsed: {len(places)}  (leaves {len(leaves)}, hubs {len(places) - len(leaves)})")
for i, c in collections.Counter(ids).items():
    if c > 1:
        warn(f"duplicate place id {i}")
for p in places:
    if p["parent"] and p["parent"] not in idset:
        warn(f"{p['id']}: parent '{p['parent']}' does not exist")
    if p["kind"] == "place" and (p["lat"] is None or p["lng"] is None):
        warn(f"{p['id']}: missing lat/lng")
    if p["scope"] == "domestic" and p["kind"] == "place" and not p["state"]:
        warn(f"{p['id']}: missing state")

qids, qplaces = [], []
for f in sorted(glob.glob(str(ROOT / "data" / "questions-*.js"))):
    txt = Path(f).read_text(encoding="utf-8")
    for m in re.finditer(
        r'id:\s*"([^"]+)",\s*place:\s*"([^"]+)",\s*q:\s*"([^"]*)",\s*a:\s*\[(.*?)\],\s*correct:\s*(\d+)', txt, re.S
    ):
        qids.append(m.group(1))
        qplaces.append(m.group(2))
        opts = re.findall(r'"((?:[^"\\]|\\.)*)"', m.group(4))
        if len(opts) != 4:
            warn(f"question {m.group(1)}: {len(opts)} options (need 4)")
        elif len(set(opts)) != 4:
            warn(f"question {m.group(1)}: duplicate options {opts}")
        if not 0 <= int(m.group(5)) <= 3:
            warn(f"question {m.group(1)}: correct index out of range")
print(f"hand-written questions: {len(qids)}")
for i, c in collections.Counter(qids).items():
    if c > 1:
        warn(f"duplicate question id {i}")
for pid in sorted(set(qplaces) - idset):
    warn(f"questions refer to unknown place '{pid}'")
noq = [p["id"] for p in places if p["id"] not in set(qplaces)]
if noq:
    print("  (info) places without hand-written questions:", ", ".join(noq))

trips = (ROOT / "data" / "trips.js").read_text(encoding="utf-8")
for block in re.findall(r"places:\s*\[(.*?)\]", trips):
    for ref in re.findall(r"'([a-z0-9\-]+)'", block):
        if ref not in idset:
            warn(f"trips.js refers to unknown place '{ref}'")

by_state = collections.Counter(p["state"] for p in leaves if p["scope"] == "domestic")
print("domestic places by state:", ", ".join(f"{k} {v}" for k, v in by_state.items()))
print("international places:", ", ".join(p["id"] for p in leaves if p["scope"] == "international"))
print("\nOK — no problems found." if ok else "\nProblems found — see lines marked '!'.")
