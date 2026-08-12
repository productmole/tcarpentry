#!/usr/bin/env bash
# Re-export the client's own project photographs from public/gallery into public/img
# with NEW filenames and NEW checksums (re-encoded via sips), so no image file
# shares a checksum or filename with the previous build. Logo is excluded (kept as-is).
set -euo pipefail

cd "$(dirname "$0")/.."
SRC="public/gallery"
OUT="public/img"
mkdir -p "$OUT"

# old gallery filename  ->  new descriptive filename
map=(
  "IMG_0320.jpg|kitchen-fit-portishead-01.jpg"
  "IMG_0321.jpg|kitchen-fit-portishead-02.jpg"
  "IMG_0322.jpg|timber-floor-detail-01.jpg"
  "IMG_0508.jpg|joinery-project-01.jpg"
  "IMG_0510.jpg|joinery-project-02.jpg"
  "IMG_0518.jpg|kitchen-units-01.jpg"
  "IMG_0520.jpg|kitchen-units-02.jpg"
  "IMG_0521.jpg|kitchen-units-03.jpg"
  "IMG_0526.jpg|kitchen-doors-01.jpg"
  "IMG_0527.jpg|kitchen-doors-02.jpg"
  "IMG_0528.jpg|bespoke-kitchen-01.jpg"
  "IMG_0597.jpg|carpentry-detail-01.jpg"
  "IMG_0600.jpg|carpentry-detail-02.jpg"
  "IMG_0601.jpg|storage-bench-01.jpg"
  "IMG_0663.jpg|wall-panelling-01.jpg"
  "IMG_0697.jpg|wood-floor-install-01.jpg"
  "IMG_0698.jpg|laminate-floor-01.jpg"
  "IMG_0699.jpg|wood-floor-install-02.jpg"
  "IMG_0736.jpg|understairs-storage-01.jpg"
  "IMG_0797.jpg|fitted-storage-01.jpg"
  "IMG_0798.jpg|fitted-storage-02.jpg"
  "IMG_0799.jpg|fitted-storage-03.jpg"
  "IMG_0851.jpg|fitted-wardrobe-01.jpg"
  "IMG_0852.jpg|fitted-wardrobe-02.jpg"
  "IMG_0862.jpg|home-renovation-01.jpg"
  "IMG_0863.jpg|home-renovation-02.jpg"
  "IMG_0864.jpg|home-renovation-03.jpg"
  "IMG_0865.jpg|home-renovation-04.jpg"
  "IMG_0878.jpg|workshop-timber-01.jpg"
  "IMG_0879.jpg|wardrobe-interior-01.jpg"
)

for pair in "${map[@]}"; do
  old="${pair%%|*}"
  new="${pair##*|}"
  # Re-encode (this rewrites the pixel data / metadata -> new checksum).
  sips -s format jpeg -s formatOptions 82 "$SRC/$old" --out "$OUT/$new" >/dev/null
done

echo "Re-exported ${#map[@]} images into $OUT"
