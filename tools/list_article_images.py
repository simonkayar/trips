"""
list_article_images.py — prints candidate picture files so a specific one can be
chosen for fetch_images.py (use "file:<File name>" in TITLES).

    python tools/list_article_images.py "Rock Garden of Chandigarh"       # images used in a Wikipedia article
    python tools/list_article_images.py "commons:Om beach Gokarna"        # top Wikimedia Commons search hits
"""
import json
import sys
import time
import urllib.parse
import urllib.request

UA = {"User-Agent": "TripsFamilySite/1.1 (+https://simonkayar.com/sites/trips; family travel journal)"}


def get(url):
    return json.loads(urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=40).read().decode("utf-8"))


for title in sys.argv[1:]:
    print(f"\n== {title} ==")
    if title.startswith("commons:"):
        q = urllib.parse.urlencode({"action": "query", "generator": "search", "gsrsearch": title[8:] + " filetype:bitmap", "gsrnamespace": 6,
                                    "gsrlimit": 15, "prop": "imageinfo", "iiprop": "size", "format": "json"})
        data = get("https://commons.wikimedia.org/w/api.php?" + q)
        for p in sorted(data.get("query", {}).get("pages", {}).values(), key=lambda p: p.get("index", 99)):
            info = (p.get("imageinfo") or [{}])[0]
            print(f"   {p['title'].replace('File:', '')}   ({info.get('width')}x{info.get('height')})")
    else:
        q = urllib.parse.urlencode({"action": "query", "prop": "images", "imlimit": 50, "titles": title, "redirects": 1, "format": "json"})
        data = get("https://en.wikipedia.org/w/api.php?" + q)
        for p in data.get("query", {}).get("pages", {}).values():
            for im in p.get("images", []):
                if im["title"].lower().endswith((".jpg", ".jpeg", ".png")):
                    print("  ", im["title"])
    time.sleep(1.5)
