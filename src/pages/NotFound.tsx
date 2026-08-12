import { Link } from 'react-router-dom'
import { Home, ArrowRight, Phone } from 'lucide-react'
import { SITE } from '../lib/site'
import { useDocumentMeta } from '../lib/useDocumentMeta'

export default function NotFound() {
  useDocumentMeta({
    title: 'Page not found | Total Carpentry',
    description: 'That page couldn’t be found. Head back to the Total Carpentry home page or get in touch with the Portishead workshop.',
  })

  return (
    <section className="bg-paper">
      <div className="max-w-2xl mx-auto px-4 py-20 md:py-28 text-center">
        <p className="font-display text-7xl font-semibold text-rust/40 mb-4">404</p>
        <h1 className="font-display text-3xl md:text-4xl font-semibold text-ink mb-4">
          We couldn’t find that page
        </h1>
        <p className="text-lg text-ink-soft leading-relaxed mb-8">
          The link may be old or slightly mistyped. Nothing’s broken at our end — let’s get you back to something useful.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link to="/" className="btn btn-primary w-full sm:w-auto">
            <Home size={18} aria-hidden="true" /> Back to home
          </Link>
          <Link to="/services" className="btn btn-outline w-full sm:w-auto">
            Browse services <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
        <p className="mt-8 text-ink-soft">
          Or call the workshop on{' '}
          <a href={`tel:${SITE.phonePrimary.tel}`} className="inline-flex items-center gap-1.5 font-semibold text-rust hover:underline">
            <Phone size={16} aria-hidden="true" />{SITE.phonePrimary.display}
          </a>.
        </p>
      </div>
    </section>
  )
}
