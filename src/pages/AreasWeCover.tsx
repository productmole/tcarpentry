import { MapPin } from 'lucide-react'
import ContactCTA from '../components/ContactCTA'
import Breadcrumbs from '../components/Breadcrumbs'
import { SITE, AREAS } from '../lib/site'
import { useDocumentMeta } from '../lib/useDocumentMeta'

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
                width="768" height="1024"
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
              title="Map of Portishead, North Somerset"
              src={SITE.mapEmbed}
              width="100%" height="420" style={{ border: 0 }}
              allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="mt-3 text-sm text-ink-soft">
            Based in {SITE.address.town}, {SITE.address.region}
          </p>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
