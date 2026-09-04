"""
shrink_photos.py — resizes big camera/phone photos in photos/ so the website
stays fast. Originals are NOT touched: it only rewrites files wider than
MAX_WIDTH, and keeps a copy of the original in photos/_originals/<place>/.

Usage:
    py -3.10 tools/shrink_photos.py            # all folders
    py -3.10 tools/shrink_photos.py hampi      # one place

Needs Pillow — the machine's Python 3.10 already has it, so no install is needed.
"""
import sys
from pathlib import Path

try:
    from PIL import Image, ImageOps
except ImportError:
    print("Pillow is not installed for this interpreter. Run with:  py -3.10 tools/shrink_photos.py")
    sys.exit(1)

ROOT = Path(__file__).resolve().parent.parent
PHOTOS = ROOT / "photos"
ORIG = PHOTOS / "_originals"
MAX_WIDTH = 1600
QUALITY = 82
EXTS = {".jpg", ".jpeg", ".png", ".webp"}


def shrink(folder: Path):
    n = 0
    for f in sorted(folder.iterdir()):
        if f.suffix.lower() not in EXTS:
            continue
        try:
            n += shrink_one(folder, f)
        except PermissionError:
            print(f"  ! {folder.name}/{f.name} is open in another program — close it and re-run")
        except Exception as e:  # keep going with the rest
            print(f"  ! {folder.name}/{f.name}: {e}")
    return n


def shrink_one(folder: Path, f: Path) -> int:
    if True:
        with Image.open(f) as im:
            im = ImageOps.exif_transpose(im)  # respect phone rotation
            if im.width <= MAX_WIDTH and f.stat().st_size < 600 * 1024:
                return 0                       # already small enough
            backup = ORIG / folder.name / f.name
            backup.parent.mkdir(parents=True, exist_ok=True)
            if not backup.exists():
                f.replace(backup)
            if im.width > MAX_WIDTH:
                ratio = MAX_WIDTH / im.width
                im = im.resize((MAX_WIDTH, int(im.height * ratio)), Image.LANCZOS)
            if f.suffix.lower() in {".jpg", ".jpeg"}:
                im = im.convert("RGB")
                im.save(f, quality=QUALITY, optimize=True)
            else:
                im.save(f, optimize=True)
            print(f"  shrunk {folder.name}/{f.name}")
            return 1


def main():
    only = sys.argv[1] if len(sys.argv) > 1 else None
    total = 0
    for folder in sorted(p for p in PHOTOS.iterdir() if p.is_dir() and p.name != "_originals"):
        if only and folder.name != only:
            continue
        total += shrink(folder)
    print(f"\nDone — {total} photo(s) resized. Originals kept in photos/_originals/. Now run scan_photos.py.")


if __name__ == "__main__":
    main()
