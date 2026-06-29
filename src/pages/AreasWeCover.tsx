import Hero from '../components/Hero'
import ContactCTA from '../components/ContactCTA'
import { MapPin } from 'lucide-react'

const areas = [
  'Portishead', 'Abbots Leigh', 'Avonmouth', 'Backwell', 'Clapton-in-Gordano',
  'Clevedon', 'Easton-in-Gordano', 'Failand', 'Ham Green', 'Leigh Woods',
  'Long Ashton', 'Nailsea', 'Pill', 'Portbury', 'Redcliff Bay',
  'Shirehampton', 'Tickenham', 'Walton-in-Gordano',
]

export default function AreasWeCover() {
  return (
    <>
      <Hero
        h1="Areas We Cover"
        intro="Wherever you are in and around Portishead, Total Carpentry Services brings skilled craftsmanship to your door."
        imageSrc="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80"
        imageAlt="Portishead lighthouse and marina"
      />

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">
            A Time Served Carpenter Serving Portishead &amp; All Surrounding North Somerset Locations
          </h2>
          <p className="text-[#d1d5db] text-center leading-relaxed mb-10">
            From kitchens and flooring to bespoke storage and full renovations, we're proud to serve homes right across North Somerset — local, reliable, and tailored to your property.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-12">
            {areas.map((area) => (
              <div
                key={area}
                className="flex items-center gap-2 bg-[#111827] border border-[#2d3748] rounded-lg px-3 py-2.5 text-sm text-white"
              >
                <MapPin size={12} className="text-[#dead1f] shrink-0" />
                {area}
              </div>
            ))}
          </div>

          {/* Google Map embed placeholder */}
          <div className="rounded-xl overflow-hidden shadow-lg border border-[#2d3748]">
            <iframe
              title="Total Carpentry Services location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.1!2d-2.766!3d51.486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48718f3b4c6d8c3b%3A0x1234567890!2s3+Bunting+Ln%2C+Portishead%2C+Bristol+BS20+7PZ!5e0!3m2!1sen!2suk!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="text-xs text-gray-400 text-center mt-2">3 Bunting Ln, Portishead, Bristol, BS20 7PZ</p>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
