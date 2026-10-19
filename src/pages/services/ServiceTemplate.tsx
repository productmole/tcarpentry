import { Link } from 'react-router-dom'
import { Phone, Check, ArrowRight } from 'lucide-react'
import FAQAccordion from '../../components/FAQAccordion'
import ContactCTA from '../../components/ContactCTA'
import Breadcrumbs from '../../components/Breadcrumbs'
import { SITE } from '../../lib/site'
import { useDocumentMeta } from '../../lib/useDocumentMeta'
import { imgSize } from '../../lib/images'

export interface BodySection {
  heading: string
  paragraphs: string[]
  bullets?: string[]
  imgSrc?: string
  imgAlt?: string
  caption?: string
}

interface FAQ { q: string; a: string }

interface ServicePageProps {
  meta: { title: string; description: string }
  label: string
  heroH1: string
  heroLead: string
  heroImg: string
  heroImgAlt: string
  atAGlance: string[]
  sections: BodySection[]
  faqs: FAQ[]
  faqHeading: string
}

export default function ServiceTemplate(props: ServicePageProps) {
  useDocumentMeta(props.meta)
  const { label, heroH1, heroLead, heroImg, heroImgAlt, atAGlance, sections, faqs, faqHeading } = props

  return (
    <>
      {/* Header — asymmetric split, no dimmed full-bleed photo */}
      <section className="bg-sand">
        <div className="max-w-6xl mx-auto px-4 pt-10 pb-14 md:py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <Breadcrumbs trail={[{ label: 'Home', to: '/' }, { label: 'Services', to: '/services' }, { label }]} />
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-ink leading-[1.08] mb-4">{heroH1}</h1>
            <p className="text-lg text-ink-soft leading-relaxed mb-6">{heroLead}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/contact" className="btn btn-primary">
                Contact Us <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <a href={`tel:${SITE.phonePrimary.tel}`} className="btn btn-outline">
                <Phone size={18} aria-hidden="true" /> {SITE.phonePrimary.display}
              </a>
            </div>
            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-soft">
              {atAGlance.map((item) => (
                <li key={item} className="inline-flex items-center gap-1.5">
                  <Check size={16} className="text-ochre" aria-hidden="true" />{item}
                </li>
              ))}
            </ul>
          </div>
          <figure className="relative">
            <img
              src={heroImg}
              alt={heroImgAlt}
              {...imgSize(heroImg)}
              className="w-full aspect-[4/3] object-cover rounded-2xl border border-line shadow-lg"
            />
          </figure>
        </div>
      </section>

      {/* Body — numbered spec-sheet sections */}
      {sections.map((section, i) => (
        <section key={i} className={i % 2 === 0 ? 'bg-paper' : 'bg-sand'}>
          <div className="max-w-6xl mx-auto px-4 py-14 md:py-16">
            <div className="grid md:grid-cols-12 gap-8 md:gap-10">
              <div className="md:col-span-4">
                <span className="font-display text-5xl font-semibold text-rust/35 leading-none">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink mt-2">{section.heading}</h2>
              </div>
              <div className="md:col-span-8">
                {section.paragraphs.map((p, j) => (
                  <p key={j} className="text-ink-soft leading-relaxed mb-4 last:mb-0">{p}</p>
                ))}
                {section.bullets && (
                  <ul className="mt-5 grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                    {section.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-ink">
                        <Check size={18} className="text-rust shrink-0 mt-1" aria-hidden="true" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.imgSrc && (
                  <figure className="mt-8">
                    <img src={section.imgSrc} alt={section.imgAlt ?? ''} loading="lazy"
                      {...imgSize(section.imgSrc)}
                      className="w-full aspect-[16/9] object-cover rounded-xl border border-line" />
                    {section.caption && <figcaption className="mt-2 text-sm text-ink-soft">{section.caption}</figcaption>}
                  </figure>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      <FAQAccordion faqs={faqs} heading={faqHeading} />
      <ContactCTA />
    </>
  )
}
