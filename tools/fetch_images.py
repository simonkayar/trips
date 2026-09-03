"""
fetch_images.py — downloads one "realistic" picture per destination from Wikipedia
(the article's lead image) into images/<place-id>.jpg, plus country flags into
images/flags/<iso>.png, and writes data/images.js with credits.

    python tools/fetch_images.py            # everything missing
    python tools/fetch_images.py hampi      # just one place (re-download)
    python tools/fetch_images.py --force    # re-download all

Images are only fetched when missing (or with --force), so re-running is cheap.
To swap a picture: put your own images/<id>.jpg in place — the script never
overwrites an existing file unless --force. Credits go to data/images.js.
Wikipedia lead images are free-licensed (CC BY-SA / public domain); the credit
line keeps the file name + article so the source is always traceable.

Wikimedia asks bots to identify themselves and go slowly, so the script waits
between requests and backs off on HTTP 429.
"""
import json
import re
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
IMG = ROOT / "images"
FLAGS = IMG / "flags"
OUT = ROOT / "data" / "images.js"
UA = {"User-Agent": "TripsFamilySite/1.1 (+https://simonkayar.com/sites/trips; family travel journal, one-off image fetch)"}
WIDTH = 1400
PAUSE = 1.5            # seconds between requests
BAD_FILE = re.compile(r"\.svg$|flag|map|locator|emblem|seal|logo|coat_of_arms|collage|montage", re.I)

# place id -> Wikipedia article(s) to try, in order, for a usable lead image
TITLES = {
    # international
    "singapore": ["Marina Bay Sands", "Gardens by the Bay", "Merlion"],
    "thailand": ["Wat Arun"], "bangkok": ["Bangkok", "Grand Palace"], "phuket": ["Phuket province", "Phang Nga Bay"],
    "indonesia": ["Mount Bromo"], "borobudur": ["Borobudur"], "prambanan": ["Prambanan"], "bali": ["Tanah Lot", "Uluwatu Temple"],
    "switzerland": ["Matterhorn"], "zurich": ["Zürich", "Grossmünster"], "lucerne": ["Lucerne", "Kapellbrücke"],
    "interlaken": ["Interlaken", "Jungfraujoch"], "france": ["Mont-Saint-Michel"], "paris": ["Eiffel Tower"],
    # karnataka
    "karnataka": ["Jog Falls"], "hampi": ["Hampi", "Vittala Temple"], "nandi-hills": ["Nandi Hills, India", "Nandi Hills"],
    "mangalore": ["Mangalore", "Panambur Beach"], "udupi": ["Udupi Sri Krishna Matha", "Udupi"],
    "gokarna": ["Om Beach", "Mahabaleshwar Temple, Gokarna", "Gokarna, Karnataka"], "coorg": ["Abbey Falls", "Kodagu district"],
    "mysuru": ["Mysore Palace"], "dandeli": ["Kali River (Karnataka)", "Syntheri Rocks", "Dandeli"], "chitradurga": ["Chitradurga Fort"],
    "bhoga-nandeeshwara": ["Bhoga Nandeeshwara Temple"], "shravanabelagola": ["Gommateshwara statue", "Shravanabelagola"],
    "melukote": ["Melukote", "Cheluvanarayana Swamy Temple"], "ramanagara": ["Ramanagara", "Ramadevarabetta"],
    "srirangapatna": ["Daria Daulat Bagh", "Srirangapatna"], "shivanasamudra": ["Shivanasamudra Falls"],
    "kukke-subramanya": ["Kukke Subramanya Temple"], "belur": ["Chennakeshava Temple, Belur"],
    "halebidu": ["Hoysaleswara Temple"], "chikkamagaluru": ["Mullayanagiri", "Chikkamagaluru"],
    "sringeri": ["Sringeri Sharada Peetham", "Vidyashankara Temple"],
    # tamil nadu & puducherry
    "tamilnadu": ["Brihadisvara Temple, Thanjavur"], "ooty": ["Nilgiri Mountain Railway", "Ooty"],
    "kodaikanal": ["Kodaikanal", "Kodaikanal Lake"], "madurai": ["Meenakshi Temple"],
    "kanyakumari": ["Vivekananda Rock Memorial", "Kanyakumari"], "rameswaram": ["Ramanathaswamy Temple", "Pamban Bridge"],
    "dhanushkodi": ["Dhanushkodi"], "palani": ["Palani Murugan Temple", "Palani"],
    "thiruparankundram": ["Thiruparankundram Murugan Temple", "Thiruparankundram", "Tirupparankunram"], "tiruchendur": ["Tiruchendur Murugan Temple"],
    "swamimalai": ["Swamimalai Murugan Temple"], "thiruthani": ["Thiruthani Murugan Temple"],
    "pazhamudircholai": ["Pazhamudircholai Murugan Temple", "Alagar Koyil"],
    "trichy": ["Rockfort", "Ranganathaswamy Temple, Srirangam"], "thanjavur": ["Brihadisvara Temple, Thanjavur"],
    "velankanni": ["Basilica of Our Lady of Good Health"], "pondicherry": ["Pondicherry", "Promenade Beach"],
    "puducherry": ["Promenade Beach", "Pondicherry"], "mahabalipuram": ["Shore Temple"],
    "vellore": ["Vellore Fort"], "kanchipuram": ["Kailasanathar Temple, Kanchipuram", "Ekambareswarar Temple"],
    "yelagiri": ["Yelagiri"], "yercaud": ["Yercaud", "Yercaud Lake"],
    # kerala, ap, ts
    "kerala": ["Kerala backwaters"], "kochi": ["Fort Kochi", "Kochi", "Santa Cruz Cathedral Basilica, Kochi"], "alleppey": ["Alappuzha", "Kerala backwaters"],
    "munnar": ["Munnar"], "wayanad": ["Edakkal Caves", "Wayanad district"],
    "andhrapradesh": ["Venkateswara Temple, Tirumala"], "lepakshi": ["Veerabhadra Temple, Lepakshi", "Lepakshi"],
    "anantapur": ["Thimmamma Marrimanu", "Penukonda Fort"], "tirupati": ["Venkateswara Temple, Tirumala"],
    "telangana": ["Charminar"], "hyderabad": ["Charminar"],
    # others
    "india": ["Taj Mahal"], "maharashtra": ["Gateway of India"], "mumbai": ["Gateway of India", "Marine Drive, Mumbai"],
    "lonavala": ["Karla Caves", "Bhaja Caves", "Lonavla"], "ellora": ["Kailasa Temple, Ellora", "Ellora Caves"], "ajanta": ["Ajanta Caves"],
    "aurangabad": ["Bibi Ka Maqbara"], "shirdi": ["Shirdi Sai Baba Temple", "Shri Saibaba Sansthan Trust", "Shirdi"],
    "madhyapradesh": ["Khajuraho Group of Monuments"], "bhopal": ["Taj-ul-Masajid", "Bhopal"],
    "bhimbetka": ["Bhimbetka rock shelters"], "sanchi": ["Sanchi", "Great Stupa"],
    "rajasthan": ["Amber Fort"], "jaipur": ["Hawa Mahal"], "udaipur": ["Lake Palace", "Udaipur"], "kumbhalgarh": ["Kumbhalgarh"],
    "odisha": ["Konark Sun Temple"], "chilika": ["Chilika Lake"], "puri": ["Jagannath Temple, Puri"], "konark": ["Konark Sun Temple"],
    "bhubaneswar": ["Lingaraja Temple"], "uttarpradesh": ["Agra Fort"], "agra": ["Taj Mahal"],
    "delhi-nct": ["Rashtrapati Bhavan"], "delhi": ["Humayun's Tomb", "India Gate"], "uttarakhand": ["Kedarnath Temple"],
    "rishikesh": ["Lakshman Jhula", "Rishikesh"], "mussoorie": ["Mussoorie"],
    "dehradun": ["Forest Research Institute", "Dehradun", "Mindrolling Monastery", "Tapkeshwar Temple"],
    "himachal": ["Rohtang Pass"], "shimla": ["Shimla", "Christ Church, Shimla"],
    "kufri": ["Kufri", "Himalayan Nature Park", "Fagu, Himachal Pradesh", "Shimla district"],
    "manali": ["Manali, Himachal Pradesh", "Hidimba Devi Temple"],
    "chandigarh-ut": ["Open Hand Monument"], "chandigarh": ["Rock Garden of Chandigarh"],
}

# country hubs (and India) -> ISO code for the flag image
FLAG_ISO = {"singapore": "sg", "thailand": "th", "indonesia": "id", "switzerland": "ch", "france": "fr", "india": "in"}


def fetch(url, binary=False):
    """GET with retries and backoff for 429 / transient errors."""
    delay = 8
    for attempt in range(5):
        try:
            req = urllib.request.Request(url, headers=UA)
            with urllib.request.urlopen(req, timeout=60) as r:
                data = r.read()
                return data if binary else json.loads(data.decode("utf-8"))
        except urllib.error.HTTPError as e:
            if e.code == 429 and attempt < 4:
                print(f"    (429 — waiting {delay}s)")
                time.sleep(delay)
                delay *= 2
                continue
            raise
    raise RuntimeError("gave up")


def lead_image(title):
    """Returns (thumb_url, file_name, page_url) for the article's lead image, or None."""
    q = urllib.parse.urlencode({
        "action": "query", "prop": "pageimages", "piprop": "thumbnail|name", "pithumbsize": WIDTH,
        "titles": title, "redirects": 1, "format": "json",
    })
    data = fetch("https://en.wikipedia.org/w/api.php?" + q)
    for p in data.get("query", {}).get("pages", {}).values():
        if "thumbnail" in p:
            page_url = "https://en.wikipedia.org/wiki/" + urllib.parse.quote(p["title"].replace(" ", "_"))
            return p["thumbnail"]["source"], p.get("pageimage", ""), page_url
    return None


def main():
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    force = "--force" in sys.argv
    IMG.mkdir(exist_ok=True)
    FLAGS.mkdir(exist_ok=True)
    credits = {}
    if OUT.exists():
        m = re.search(r"TRIPS\.images\s*=\s*(\{.*?\});", OUT.read_text(encoding="utf-8"), re.S)
        if m:
            credits = json.loads(m.group(1))

    def save():
        body = json.dumps(credits, indent=2, ensure_ascii=False)
        OUT.write_text(
            "/* AUTO-GENERATED by tools/fetch_images.py — one representative picture per place.\n"
            "   Replace images/<id>.jpg with your own picture if you prefer; keep the entry here. */\n"
            f"TRIPS.images = {body};\n"
            "TRIPS.flags = " + json.dumps({k: f"images/flags/{v}.png" for k, v in FLAG_ISO.items()}) + ";\n",
            encoding="utf-8",
        )

    ids = args or list(TITLES)
    for pid in ids:
        titles = TITLES.get(pid)
        if not titles:
            print(f"  ! no Wikipedia title mapped for {pid}")
            continue
        dest = IMG / f"{pid}.jpg"
        if dest.exists() and not force and pid in credits and not BAD_FILE.search(credits[pid].get("file", "")):
            continue
        got = False
        for title in titles:
            try:
                info = lead_image(title)
            except Exception as e:
                print(f"  ! {pid}: lookup '{title}' failed ({e})")
                time.sleep(PAUSE)
                continue
            time.sleep(PAUSE)
            if not info:
                print(f"    {pid}: '{title}' has no lead image")
                continue
            url, fname, page = info
            if BAD_FILE.search(fname):
                print(f"    {pid}: '{title}' lead image is {fname} — skipped")
                continue
            try:
                dest.write_bytes(fetch(url, binary=True))
            except Exception as e:
                print(f"  ! {pid}: download failed ({e})")
                time.sleep(PAUSE)
                continue
            credits[pid] = {"src": f"images/{pid}.jpg", "file": fname, "page": page}
            print(f"  {pid:22} <- {fname}  ({dest.stat().st_size // 1024} KB)")
            got = True
            save()
            time.sleep(PAUSE)
            break
        if not got:
            print(f"  ! {pid}: no usable picture found")

    for pid, iso in FLAG_ISO.items():
        dest = FLAGS / f"{iso}.png"
        if dest.exists() and not force:
            continue
        try:
            dest.write_bytes(fetch(f"https://flagcdn.com/w320/{iso}.png", binary=True))
            print(f"  flag {iso} ({dest.stat().st_size} bytes)")
        except Exception as e:
            print(f"  ! flag {iso}: {e}")

    save()
    print(f"\nWrote {OUT.relative_to(ROOT)} — {len(credits)} images.")


if __name__ == "__main__":
    main()
