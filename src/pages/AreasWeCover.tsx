import { MapPin } from 'lucide-react'
import ContactCTA from '../components/ContactCTA'
import Breadcrumbs from '../components/Breadcrumbs'
import { SITE, AREAS } from '../lib/site'
import { useDocumentMeta } from '../lib/useDocumentMeta'

const mapSrc =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.1!2d-2.766!3d51.486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48718f3b4c6d8c3b%3A0x1234567890!2s3+Bunting+Ln%2C+Portishead%2C+Bristol+BS20+7PZ!5e0!3m2!1sen!2suk!4v1234567890'

export default function AreasWeCover() {
  useDocumentMeta({
    title: 'Areas We Cover | Total Carpentry, Portishead',
    description:
      'Total Carpentry works out of Portishead and covers the North Somerset villages nearby — Clevedon, Nailsea, Pill, Portbury, Long Ashton and more. Find your town.',
  })

  return (
    <>
      <section className="bg-sand">
        <div className="max-w-6xl mx-auto px-4 pt-10 pb-14 md:py-16">
          <Breadcrumbs trail={[{ label: 'Home', to: '/' }, { label: 'Areas We Cover' }]} />
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="font-display text-4xl md:text-5xl font-semibold text-ink leading-[1.08] mb-4">
                Based in Portishead, out across North Somerset
              </h1>
              <p className="text-lg text-ink-soft leading-relaxed">
                We are a local outfit by choice — close enough to pop back if you ever need us, and familiar with the
                housing stock around here, from harbourside new-builds to older village cottages.
              </p>
            </div>
            <figure>
              <img src="/img/home-renovation-04.jpg" alt="Completed renovation in a North Somerset home by Total Carpentry"
                width="1024" height="768"
                className="w-full aspect-[4/3] object-cover rounded-2xl border border-line shadow-lg" />
            </figure>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="max-w-6xl mx-auto px-4 py-14 md:py-16">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink mb-6">Towns and villages we cover</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {AREAS.map((area) => (
              <li key={area} className="flex items-center gap-2 rounded-xl border border-line bg-shell px-3.5 py-3 text-ink">
                <MapPin size={16} className="text-rust shrink-0" aria-hidden="true" />
                {area}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-ink-soft">
            Just outside the list? It is worth a call on{' '}
            <a href={`tel:${SITE.phonePrimary.tel}`} className="font-semibold text-rust hover:underline">{SITE.phonePrimary.display}</a>{' '}— we often travel a little further for the right job.
          </p>
        </div>
      </section>

      <section className="bg-sand">
        <div className="max-w-6xl mx-auto px-4 py-14 md:py-16">
          <div className="rounded-2xl overflow-hidden border border-line shadow-sm">
            <iframe
              title="Map showing Total Carpentry at 3 Bunting Lane, Portishead"
              src={mapSrc}
              width="100%" height="420" style={{ border: 0 }}
              allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="mt-3 text-sm text-ink-soft">
            {SITE.address.street}, {SITE.address.town}, {SITE.address.city}, {SITE.address.postcode}
          </p>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
