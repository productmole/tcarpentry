import { Link } from 'react-router-dom'
import { Phone, Check, ArrowLeft } from 'lucide-react'
import ContactCTA from '../../components/ContactCTA'
import Breadcrumbs from '../../components/Breadcrumbs'
import { SITE } from '../../lib/site'
import { useDocumentMeta } from '../../lib/useDocumentMeta'
import { imgSize } from '../../lib/images'

interface Section {
  heading?: string
  paragraphs: string[]
  bullets?: string[]
}

interface BlogPostProps {
  meta: { title: string; description: string }
  h1: string
  kicker: string
  readTime: string
  featureImg: string
  featureImgAlt: string
  intro: string
  sections: Section[]
}

export default function BlogTemplate(props: BlogPostProps) {
  useDocumentMeta(props.meta)
  const { h1, kicker, readTime, featureImg, featureImgAlt, intro, sections } = props

  return (
    <>
      <article>
        {/* Editorial header — no dimmed photo hero */}
        <header className="bg-paper border-b border-line">
          <div className="max-w-3xl mx-auto px-4 pt-10 pb-8">
            <Breadcrumbs trail={[{ label: 'Home', to: '/' }, { label: 'Blog', to: '/blog' }, { label: kicker }]} />
            <p className="kicker mb-3">{readTime} read</p>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-ink leading-[1.1]">{h1}</h1>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-4 py-10 md:py-12">
          <figure className="mb-10">
            <img src={featureImg} alt={featureImgAlt} {...imgSize(featureImg)}
              className="w-full aspect-[16/9] object-cover rounded-2xl border border-line shadow-sm" />
          </figure>

          <p className="text-xl text-ink leading-relaxed mb-8 font-medium">{intro}</p>

          {sections.map((s, i) => (
            <section key={i} className="mb-8">
              {s.heading && <h2 className="font-display text-2xl font-semibold text-ink mb-3">{s.heading}</h2>}
              {s.paragraphs.map((p, j) => (
                <p key={j} className="text-ink-soft leading-relaxed mb-4">{p}</p>
              ))}
              {s.bullets && (
                <ul className="mt-3 space-y-2.5">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-ink">
                      <Check size={18} className="text-rust shrink-0 mt-1" aria-hidden="true" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {/* Inline call-to-action */}
          <div className="card p-6 mt-10">
            <h2 className="font-display text-xl font-semibold text-ink mb-2">Thinking about a project like this?</h2>
            <p className="text-ink-soft mb-4">
              We’re a Portishead workshop — happy to visit, measure up and price it honestly.{' '}
              <Link to="/contact" className="text-rust font-semibold hover:underline">send us a message</Link> or call:
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href={`tel:${SITE.phonePrimary.tel}`} className="btn btn-primary">
                <Phone size={18} aria-hidden="true" /> {SITE.phonePrimary.display}
              </a>
              <a href={`tel:${SITE.phoneSecondary.tel}`} className="btn btn-outline">
                <Phone size={18} aria-hidden="true" /> {SITE.phoneSecondary.display}
              </a>
            </div>
          </div>

          <div className="mt-8">
            <Link to="/blog" className="inline-flex items-center gap-2 text-rust font-semibold hover:underline">
              <ArrowLeft size={18} aria-hidden="true" /> All articles
            </Link>
          </div>
        </div>
      </article>

      <ContactCTA />
    </>
  )
}
