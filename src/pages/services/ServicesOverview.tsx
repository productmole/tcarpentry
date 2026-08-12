import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import ContactCTA from '../../components/ContactCTA'
import Breadcrumbs from '../../components/Breadcrumbs'
import { SITE, SERVICES } from '../../lib/site'
import { useDocumentMeta } from '../../lib/useDocumentMeta'

const alsoOnTheTools = [
  'First & second fix', 'Alcoves & shelving', 'Internal doors', 'Skirting & architrave',
  'MDF work', 'Loft hatches', 'Partition walls', 'Bathroom joinery',
  'Staircases', 'Structural alterations', 'Refurbishments', 'Retrofit joinery',
]

export default function ServicesOverview() {
  useDocumentMeta({
    title: 'Our Services | Total Carpentry, Portishead',
    description:
      'Kitchens, fitted wardrobes, house renovations and wood flooring from a Portishead workshop — plus the everyday joinery in between.',
  })

  return (
    <>
      <section className="bg-sand">
        <div className="max-w-6xl mx-auto px-4 pt-10 pb-14 md:py-16">
          <Breadcrumbs trail={[{ label: 'Home', to: '/' }, { label: 'Services' }]} />
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-ink leading-[1.08] mb-4">
              Four trades under one roof — and the joinery in between
            </h1>
            <p className="text-lg text-ink-soft leading-relaxed">
              Most of our work falls into four areas. Because the same joiner sees each job from measure to finish,
              the parts line up.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="max-w-6xl mx-auto px-4 py-14 md:py-16">
          <ul className="grid sm:grid-cols-2 gap-5">
            {SERVICES.map((s) => (
              <li key={s.to}>
                <Link to={s.to} className="card group h-full p-6 flex flex-col hover:border-rust transition-colors">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-sand text-rust mb-4">
                    <s.Icon size={24} aria-hidden="true" />
                  </span>
                  <h2 className="font-display text-2xl font-semibold text-ink mb-2 group-hover:text-rust transition-colors">
                    {s.label}
                  </h2>
                  <p className="text-ink-soft leading-relaxed flex-1">{s.tagline}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 font-semibold text-rust">
                    See the detail <ArrowRight size={17} aria-hidden="true" className="group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Broader capabilities */}
      <section className="bg-sand">
        <div className="max-w-6xl mx-auto px-4 py-14 md:py-16">
          <div>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Also on the tools</h2>
            <ul className="flex flex-wrap gap-2">
              {alsoOnTheTools.map((c) => (
                <li key={c} className="rounded-full border border-line bg-shell px-3.5 py-1.5 text-sm text-ink">
                  {c}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-ink-soft">
              Not sure it fits a box? Call{' '}
              <a href={`tel:${SITE.phonePrimary.tel}`} className="font-semibold text-rust hover:underline">{SITE.phonePrimary.display}</a>{' '}
              or{' '}
              <a href={`tel:${SITE.phoneSecondary.tel}`} className="font-semibold text-rust hover:underline">{SITE.phoneSecondary.display}</a>{' '}
              and ask.
            </p>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
