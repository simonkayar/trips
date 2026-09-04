"""
list_article_images.py — prints the image files used in Wikipedia articles, so a
specific one can be chosen for fetch_images.py (use "file:<File name>" in TITLES).

    python tools/list_article_images.py "Rock Garden of Chandigarh" "Yelagiri"
"""
import sys
import time
import urllib.parse
import urllib.request
import json

UA = {"User-Agent": "TripsFamilySite/1.1 (+https://simonkayar.com/sites/trips; family travel journal)"}

for title in sys.argv[1:]:
    q = urllib.parse.urlencode({"action": "query", "prop": "images", "imlimit": 50, "titles": title, "redirects": 1, "format": "json"})
    req = urllib.request.Request("https://en.wikipedia.org/w/api.php?" + q, headers=UA)
    data = json.loads(urllib.request.urlopen(req, timeout=40).read().decode("utf-8"))
    for p in data.get("query", {}).get("pages", {}).values():
        print(f"\n== {p.get('title')} ==")
        for im in p.get("images", []):
            name = im["title"]
            if name.lower().endswith((".jpg", ".jpeg", ".png")):
                print("  ", name)
    time.sleep(1.5)
