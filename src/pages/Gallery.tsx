import { useState } from 'react'
import Hero from '../components/Hero'
import ContactCTA from '../components/ContactCTA'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface Photo {
  src: string
  alt: string
}

const allPhotos: Photo[] = [
  { src: '/gallery/IMG_0320.jpg', alt: 'Carpentry project' },
  { src: '/gallery/IMG_0321.jpg', alt: 'Carpentry project' },
  { src: '/gallery/IMG_0322.jpg', alt: 'Carpentry project' },
  { src: '/gallery/IMG_0508.jpg', alt: 'Carpentry project' },
  { src: '/gallery/IMG_0510.jpg', alt: 'Carpentry project' },
  { src: '/gallery/IMG_0518.jpg', alt: 'Fitted wardrobe' },
  { src: '/gallery/IMG_0520.jpg', alt: 'Fitted wardrobe' },
  { src: '/gallery/IMG_0521.jpg', alt: 'Fitted wardrobe' },
  { src: '/gallery/IMG_0526.jpg', alt: 'Fitted wardrobe' },
  { src: '/gallery/IMG_0527.jpg', alt: 'Fitted wardrobe' },
  { src: '/gallery/IMG_0528.jpg', alt: 'Fitted wardrobe' },
  { src: '/gallery/IMG_0597.jpg', alt: 'Carpentry project' },
  { src: '/gallery/IMG_0600.jpg', alt: 'Carpentry project' },
  { src: '/gallery/IMG_0601.jpg', alt: 'Carpentry project' },
  { src: '/gallery/IMG_0663.jpg', alt: 'Carpentry project' },
  { src: '/gallery/IMG_0697.jpg', alt: 'Carpentry project' },
  { src: '/gallery/IMG_0698.jpg', alt: 'Carpentry project' },
  { src: '/gallery/IMG_0699.jpg', alt: 'Carpentry project' },
  { src: '/gallery/IMG_0736.jpg', alt: 'Wood flooring installation' },
  { src: '/gallery/IMG_0797.jpg', alt: 'Carpentry project' },
  { src: '/gallery/IMG_0798.jpg', alt: 'Carpentry project' },
  { src: '/gallery/IMG_0799.jpg', alt: 'Carpentry project' },
  { src: '/gallery/IMG_0851.jpg', alt: 'Carpentry project' },
  { src: '/gallery/IMG_0852.jpg', alt: 'Carpentry project' },
  { src: '/gallery/IMG_0862.jpg', alt: 'House renovation' },
  { src: '/gallery/IMG_0863.jpg', alt: 'House renovation' },
  { src: '/gallery/IMG_0864.jpg', alt: 'House renovation' },
  { src: '/gallery/IMG_0865.jpg', alt: 'House renovation' },
  { src: '/gallery/IMG_0878.jpg', alt: 'Carpentry project' },
  { src: '/gallery/IMG_0879.jpg', alt: 'Carpentry project' },
]

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  function prev() {
    setLightboxIndex((i) => (i === null ? 0 : (i - 1 + allPhotos.length) % allPhotos.length))
  }
  function next() {
    setLightboxIndex((i) => (i === null ? 0 : (i + 1) % allPhotos.length))
  }

  return (
    <>
      <Hero
        h1="Gallery"
        intro="Wondering what we can do? The gallery is the best place to see projects we've completed across Portishead and beyond."
        imageSrc="/gallery/IMG_0320.jpg"
        imageAlt="Kitchen installation by Total Carpentry Services"
      />

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Past Projects</h2>
            <p className="text-[#d1d5db] max-w-2xl mx-auto leading-relaxed">
              From bespoke wardrobes to full renovations, kitchens and flooring, each project reflects our carpenters' craft and our commitment to a great result.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {allPhotos.map((p, i) => (
              <button
                key={i}
                onClick={() => setLightboxIndex(i)}
                className="overflow-hidden rounded-lg aspect-square group cursor-zoom-in"
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 text-white hover:text-[#dead1f] z-10"
            aria-label="Close"
          >
            <X size={32} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev() }}
            className="absolute left-4 text-white hover:text-[#dead1f] z-10 p-2"
            aria-label="Previous"
          >
            <ChevronLeft size={40} />
          </button>
          <img
            src={allPhotos[lightboxIndex].src}
            alt={allPhotos[lightboxIndex].alt}
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={(e) => { e.stopPropagation(); next() }}
            className="absolute right-4 text-white hover:text-[#dead1f] z-10 p-2"
            aria-label="Next"
          >
            <ChevronRight size={40} />
          </button>
          <span className="absolute bottom-4 text-white/60 text-sm">
            {lightboxIndex + 1} / {allPhotos.length}
          </span>
        </div>
      )}

      <ContactCTA />
    </>
  )
}
