"""Create web assets from the client's local originals (never commits originals)."""
from pathlib import Path
import argparse
from PIL import Image, ImageOps

parser = argparse.ArgumentParser()
parser.add_argument("source", type=Path)
args = parser.parse_args()
target = Path(__file__).resolve().parents[1] / "assets"
target.mkdir(exist_ok=True)
images = {
    "retrato": "12.25.11.jpeg",
    "sobre": "16.01.00 (2).jpeg",
    "atendimento": "16.00.59.jpeg",
    "acupuntura": "16.00.59 (1).jpeg",
    "auriculoterapia": "16.00.59 (2).jpeg",
    "florais": "16.01.00 (1).jpeg",
    "ventosas": "16.01.00.jpeg",
    "mesa-dourada": "12.25.12 (1).jpeg",
    "mesa-azul": "12.25.12.jpeg",
    "frascos": "12.25.11 (1).jpeg",
}
for name, suffix in images.items():
    source = args.source / ("WhatsApp Image 2026-11-01 at " + suffix)
    with Image.open(source) as original:
        photo = ImageOps.exif_transpose(original).convert("RGB")
        for width in (480, 960):
            result = photo.copy()
            result.thumbnail((width, 1600), Image.Resampling.LANCZOS)
            result.save(target / f"{name}-{width}.webp", "WEBP", quality=82, method=6)
print(f"Prepared {len(images) * 2} assets in {target}")
