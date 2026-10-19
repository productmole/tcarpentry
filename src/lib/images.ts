// Intrinsic pixel sizes of the files in public/img, so every <img> can carry
// width/height that match the real aspect ratio (prevents layout shift).
const SIZES: Record<string, [number, number]> = {
  '/img/accreditation-city-and-guilds.svg': [500, 310],
  '/img/bespoke-kitchen-01.jpg': [768, 1024],
  '/img/carpentry-detail-01.jpg': [768, 1024],
  '/img/carpentry-detail-02.jpg': [768, 1024],
  '/img/fitted-storage-01.jpg': [768, 1024],
  '/img/fitted-storage-02.jpg': [768, 1024],
  '/img/fitted-storage-03.jpg': [768, 1024],
  '/img/fitted-wardrobe-01.jpg': [768, 1024],
  '/img/fitted-wardrobe-02.jpg': [768, 1024],
  '/img/home-renovation-01.jpg': [768, 1024],
  '/img/home-renovation-02.jpg': [768, 1024],
  '/img/home-renovation-03.jpg': [768, 1024],
  '/img/home-renovation-04.jpg': [768, 1024],
  '/img/joinery-project-01.jpg': [768, 1024],
  '/img/joinery-project-02.jpg': [768, 1024],
  '/img/kitchen-doors-01.jpg': [768, 1024],
  '/img/kitchen-doors-02.jpg': [768, 1024],
  '/img/kitchen-fit-portishead-01.jpg': [1024, 768],
  '/img/kitchen-fit-portishead-02.jpg': [1024, 768],
  '/img/kitchen-units-01.jpg': [768, 1024],
  '/img/kitchen-units-02.jpg': [768, 1024],
  '/img/kitchen-units-03.jpg': [768, 1024],
  '/img/laminate-floor-01.jpg': [768, 1024],
  '/img/partner-howdens.svg': [230, 140],
  '/img/partner-quick-step.svg': [864, 285],
  '/img/storage-bench-01.jpg': [768, 1024],
  '/img/timber-floor-detail-01.jpg': [768, 1024],
  '/img/understairs-storage-01.jpg': [768, 1024],
  '/img/wall-panelling-01.jpg': [768, 1024],
  '/img/wardrobe-interior-01.jpg': [768, 1024],
  '/img/wood-floor-install-01.jpg': [768, 1024],
  '/img/wood-floor-install-02.jpg': [768, 1024],
  '/img/workshop-timber-01.jpg': [768, 1024],
}

export function imgSize(src: string): { width?: number; height?: number } {
  const size = SIZES[src]
  return size ? { width: size[0], height: size[1] } : {}
}
