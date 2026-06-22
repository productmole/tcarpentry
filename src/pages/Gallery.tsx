import { useState } from 'react'
import Hero from '../components/Hero'
import ContactCTA from '../components/ContactCTA'
import { X } from 'lucide-react'

const kitchenPhotos = [
  { src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80', alt: 'Modern dark fitted kitchen' },
  { src: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80', alt: 'White shaker kitchen' },
  { src: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80', alt: 'Kitchen installation detail' },
  { src: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80', alt: 'Open kitchen with island' },
]

const staircasePhotos = [
  { src: 'https://images.unsplash.com/photo-1565538810643-b5bdb0cc31b1?w=800&q=80', alt: 'Staircase refurbishment' },
  { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', alt: 'Custom joinery work' },
  { src: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80', alt: 'Fitted wardrobe build' },
]

const extensionPhotos = [
  { src: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=80', alt: 'Extension framing work' },
  { src: 'https://images.unsplash.com/photo-1593696140826-c58b021acf8b?w=800&q=80', alt: 'Carpentry in progress' },
  { src: 'https://images.unsplash.com/photo-1586105251261-72a756497a11?w=800&q=80', alt: 'Wood flooring installation' },
]

interface Photo {
  src: string
  alt: string
}

function PhotoGrid({ photos, onOpen }: { photos: Photo[]; onOpen: (p: Photo) => void }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {photos.map((p, i) => (
        <button
          key={i}
          onClick={() => onOpen(p)}
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
  )
}

export default function Gallery() {
  const [lightbox, setLightbox] = useState<Photo | null>(null)

  return (
    <>
      <Hero
        h1="Gallery"
        intro="Wondering what we can do? The gallery is the best place to see projects we've completed across Portishead and beyond."
        imageSrc="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&q=80"
        imageAlt="White kitchen gallery hero"
      />

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1E2A24] mb-4">Past Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              From bespoke wardrobes to full renovations, extensions, kitchens and flooring, each project reflects our carpenters' craft and our commitment to a great result.
            </p>
          </div>

          <h3 className="text-xl font-bold text-[#1E2A24] mb-4">Kitchen &amp; General Carpentry</h3>
          <PhotoGrid photos={kitchenPhotos} onOpen={setLightbox} />

          <h3 className="text-xl font-bold text-[#1E2A24] mt-12 mb-4">Staircases &amp; Custom Joinery</h3>
          <PhotoGrid photos={staircasePhotos} onOpen={setLightbox} />

          <h3 className="text-xl font-bold text-[#1E2A24] mt-12 mb-4">Extension &amp; Framing Work</h3>
          <PhotoGrid photos={extensionPhotos} onOpen={setLightbox} />
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 text-white hover:text-[#B07A3C]"
            aria-label="Close"
          >
            <X size={32} />
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <ContactCTA />
    </>
  )
}
