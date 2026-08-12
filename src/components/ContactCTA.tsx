import { Link } from 'react-router-dom'
import { Phone, ArrowRight } from 'lucide-react'
import { SITE } from '../lib/site'

interface Props {
  heading?: string
  subtext?: string
}

export default function ContactCTA({
  heading = 'Let’s talk through your project',
  subtext = 'Tell us what you have in mind and we’ll arrange a visit, measure up, and give you a straight, no-obligation price.',
}: Props) {
  return (
    <section className="bg-forest text-ink">
      <div className="max-w-4xl mx-auto px-4 py-16 md:py-20 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-medium mb-4">{heading}</h2>
        <p className="text-ink/80 text-lg max-w-2xl mx-auto mb-8">{subtext}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link to="/contact" className="btn btn-primary w-full sm:w-auto">
            Contact Us
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <a href={`tel:${SITE.phonePrimary.tel}`} className="btn btn-outline-light w-full sm:w-auto">
            <Phone size={18} aria-hidden="true" />
            {SITE.phonePrimary.display}
          </a>
        </div>
        <p className="mt-6 text-ink/70 text-sm">
          Prefer to ring the landline? Call{' '}
          <a href={`tel:${SITE.phoneSecondary.tel}`} className="underline underline-offset-2 hover:text-ink">
            {SITE.phoneSecondary.display}
          </a>.
        </p>
      </div>
    </section>
  )
}
