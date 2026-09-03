"""
shrink_images.py — resizes the downloaded pictures in images/ so the site stays
light (Wikipedia originals are 0.5–2 MB each). Rewrites files in place: they can
always be re-downloaded with tools/fetch_images.py --force.

    py -3.10 tools/shrink_images.py          # all images/*.jpg
    py -3.10 tools/shrink_images.py hampi    # one

Needs Pillow — the machine's Python 3.10 already has it, so no install is needed.
"""
import sys
from pathlib import Path

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent.parent
IMG = ROOT / "images"
MAX_WIDTH = 1200
QUALITY = 78


def main():
    only = sys.argv[1] if len(sys.argv) > 1 else None
    before = after = 0
    for f in sorted(IMG.glob("*.*")):
        if f.suffix.lower() not in {".jpg", ".jpeg", ".png"} or (only and f.stem != only):
            continue
        size0 = f.stat().st_size
        with Image.open(f) as im:
            im = ImageOps.exif_transpose(im).convert("RGB")
            if im.width > MAX_WIDTH:
                im = im.resize((MAX_WIDTH, int(im.height * MAX_WIDTH / im.width)), Image.LANCZOS)
            out = f.with_suffix(".jpg")
            im.save(out, "JPEG", quality=QUALITY, optimize=True, progressive=True)
        if out != f:
            f.unlink()
        before += size0
        after += out.stat().st_size
        print(f"  {out.name:28} {size0 // 1024:5} KB -> {out.stat().st_size // 1024:4} KB")
    print(f"\nTotal {before // 1024 // 1024} MB -> {after // 1024 // 1024} MB")


if __name__ == "__main__":
    main()
