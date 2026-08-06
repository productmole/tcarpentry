import { useEffect, useRef, useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import ContactCTA from '../components/ContactCTA'
import Breadcrumbs from '../components/Breadcrumbs'
import { useDocumentMeta } from '../lib/useDocumentMeta'

interface Photo { src: string; alt: string }

const photos: Photo[] = [
  { src: '/img/kitchen-fit-portishead-01.jpg', alt: 'Fitted kitchen with pale units in a Portishead home' },
  { src: '/img/fitted-wardrobe-01.jpg', alt: 'Built-in bedroom wardrobe with panelled doors' },
  { src: '/img/home-renovation-01.jpg', alt: 'Room mid-renovation with new joinery going in' },
  { src: '/img/wood-floor-install-01.jpg', alt: 'Newly laid wood floor in a renovated room' },
  { src: '/img/kitchen-fit-portishead-02.jpg', alt: 'Run of fitted kitchen cabinets and worktop' },
  { src: '/img/wardrobe-interior-01.jpg', alt: 'Fitted wardrobe interior with hanging rails and shelving' },
  { src: '/img/wall-panelling-01.jpg', alt: 'Bespoke wall panelling in a hallway' },
  { src: '/img/timber-floor-detail-01.jpg', alt: 'Solid timber floor showing its natural grain' },
  { src: '/img/bespoke-kitchen-01.jpg', alt: 'Bespoke kitchen with fitted end panels' },
  { src: '/img/kitchen-units-01.jpg', alt: 'Fitted kitchen wall and base units' },
  { src: '/img/understairs-storage-01.jpg', alt: 'Bespoke pull-out storage built under a staircase' },
  { src: '/img/fitted-storage-01.jpg', alt: 'Built-in storage cupboards in an alcove' },
  { src: '/img/kitchen-doors-01.jpg', alt: 'Close detail of kitchen cabinet doors and handles' },
  { src: '/img/home-renovation-02.jpg', alt: 'Renovated room with new skirting and trim' },
  { src: '/img/storage-bench-01.jpg', alt: 'Bespoke fitted storage bench' },
  { src: '/img/fitted-wardrobe-02.jpg', alt: 'Fitted wardrobe with sliding doors' },
  { src: '/img/laminate-floor-01.jpg', alt: 'Laminate wood-effect floor freshly fitted' },
  { src: '/img/kitchen-units-02.jpg', alt: 'Fitted kitchen cabinetry and worktop run' },
  { src: '/img/carpentry-detail-01.jpg', alt: 'Close carpentry and joinery detail' },
  { src: '/img/home-renovation-03.jpg', alt: 'Finishing carpentry during a house renovation' },
  { src: '/img/fitted-storage-02.jpg', alt: 'Fitted cupboards with panelled doors' },
  { src: '/img/wood-floor-install-02.jpg', alt: 'Wood flooring being set out and laid' },
  { src: '/img/kitchen-doors-02.jpg', alt: 'Kitchen door and drawer fronts' },
  { src: '/img/home-renovation-04.jpg', alt: 'Completed room after a full renovation' },
  { src: '/img/joinery-project-01.jpg', alt: 'Finished bespoke joinery project' },
  { src: '/img/fitted-storage-03.jpg', alt: 'Fitted alcove shelving and storage' },
  { src: '/img/kitchen-units-03.jpg', alt: 'Kitchen units with integrated storage' },
  { src: '/img/carpentry-detail-02.jpg', alt: 'Detail of hand-finished carpentry' },
  { src: '/img/joinery-project-02.jpg', alt: 'Completed carpentry and joinery work' },
  { src: '/img/workshop-timber-01.jpg', alt: 'Timber prepared for a project in the workshop' },
]

export default function Gallery() {
  useDocumentMeta({
    title: 'Gallery | Total Carpentry, Portishead',
    description:
      'A look at recent Total Carpentry work across Portishead and North Somerset — kitchens, fitted wardrobes, wood floors, storage and full renovations, all our own.',
  })

  const [index, setIndex] = useState<number | null>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const open = index !== null

  const move = (delta: number) =>
    setIndex((i) => (i === null ? 0 : (i + delta + photos.length) % photos.length))

  useEffect(() => {
    if (!open) return
    closeRef.current?.focus()
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setIndex(null)
      else if (e.key === 'ArrowRight') move(1)
      else if (e.key === 'ArrowLeft') move(-1)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      {/* Photo-forward: a slim heading strip, then straight into the grid */}
      <section className="bg-paper border-b border-line">
        <div className="max-w-6xl mx-auto px-4 pt-10 pb-8">
          <Breadcrumbs trail={[{ label: 'Home', to: '/' }, { label: 'Gallery' }]} />
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
            <div>
              <p className="kicker mb-3">Our own work</p>
              <h1 className="font-display text-4xl md:text-5xl font-semibold text-ink leading-[1.08]">
                Recent jobs, photographed on site
              </h1>
            </div>
            <p className="text-ink-soft max-w-md">
              Every photo here is a project we built and fitted ourselves — no stock, no borrowed shots. Tap any image
              to see it larger.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-12">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {photos.map((p, i) => (
              <li key={p.src}>
                <button
                  onClick={() => setIndex(i)}
                  className="group card overflow-hidden w-full text-left cursor-zoom-in hover:border-ochre transition-colors"
                  aria-label={`Enlarge photo: ${p.alt}`}
                >
                  <span className="block overflow-hidden aspect-[4/3]">
                    <img
                      src={p.src}
                      alt={p.alt}
                      loading={i < 3 ? 'eager' : 'lazy'}
                      width="512" height="384"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </span>
                  {/* Dark caption bar */}
                  <span className="block px-4 py-3 border-t border-line text-sm text-ink-soft leading-snug group-hover:text-ink transition-colors">
                    {p.alt}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {open && index !== null && (
        <div
          role="dialog" aria-modal="true" aria-label={`Photo ${index + 1} of ${photos.length}: ${photos[index].alt}`}
          className="fixed inset-0 bg-paper/95 z-[60] flex items-center justify-center p-4"
          onClick={() => setIndex(null)}
        >
          <button ref={closeRef} onClick={() => setIndex(null)} aria-label="Close"
            className="absolute top-4 right-4 inline-flex items-center justify-center w-11 h-11 rounded-full text-ink hover:text-ochre">
            <X size={28} aria-hidden="true" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); move(-1) }} aria-label="Previous photo"
            className="absolute left-2 sm:left-4 inline-flex items-center justify-center w-11 h-11 rounded-full text-ink hover:text-ochre">
            <ChevronLeft size={36} aria-hidden="true" />
          </button>
          <figure onClick={(e) => e.stopPropagation()} className="max-w-full">
            <img src={photos[index].src} alt={photos[index].alt} className="max-w-full max-h-[80vh] rounded-xl shadow-2xl" />
            <figcaption className="text-center text-ink/80 text-sm mt-3">{photos[index].alt}</figcaption>
          </figure>
          <button onClick={(e) => { e.stopPropagation(); move(1) }} aria-label="Next photo"
            className="absolute right-2 sm:right-4 inline-flex items-center justify-center w-11 h-11 rounded-full text-ink hover:text-ochre">
            <ChevronRight size={36} aria-hidden="true" />
          </button>
          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-ink/60 text-sm">{index + 1} / {photos.length}</span>
        </div>
      )}

      <ContactCTA />
    </>
  )
}
