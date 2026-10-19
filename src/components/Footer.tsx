import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, ArrowUp, ExternalLink } from 'lucide-react'
import { SITE } from '../lib/site'

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}
function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

const footerNav = [
  ['Home', '/'],
  ['Services', '/services'],
  ['Gallery', '/gallery'],
  ['Reviews', '/reviews'],
  ['Areas We Cover', '/areas-we-cover'],
  ['Blog', '/blog'],
  ['Contact', '/contact'],
]

export default function Footer() {
  return (
    <footer className="bg-forest text-ink/85">
      {/* Three columns — brand left, quick links centre, contact right */}
      <div className="max-w-6xl mx-auto px-4 pt-14 pb-10 grid gap-10 md:grid-cols-3">
        {/* Col 1 — brand + blurb + social */}
        <div className="max-w-sm">
          <img src="/tc-logo-light.svg" alt="Total Carpentry" className="h-11 w-auto mb-4" width="220" height="76" />
          <p className="text-ink/70 leading-relaxed mb-5">
            Joinery and home improvements, made and fitted in Portishead since {SITE.established}.
          </p>
          <div className="flex items-center gap-3">
            <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" aria-label="Total Carpentry on Facebook"
               className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-white/15 hover:border-ochre hover:text-ochre transition-colors">
              <FacebookIcon />
            </a>
            <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" aria-label="Total Carpentry on Instagram"
               className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-white/15 hover:border-ochre hover:text-ochre transition-colors">
              <InstagramIcon />
            </a>
          </div>
        </div>

        {/* Col 2 — quick links */}
        <nav aria-label="Footer">
          <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-ochre mb-4">Quick links</h2>
          <ul className="space-y-2 text-sm">
            {footerNav.map(([label, to]) => (
              <li key={to}>
                <Link to={to} className="inline-block py-1 text-ink/80 hover:text-ochre transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Col 3 — contact details */}
        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-ochre mb-4">Get in touch</h2>
          <ul className="space-y-3 text-sm">
            <li>
              <a href={`tel:${SITE.phonePrimary.tel}`} className="inline-flex items-center gap-2 hover:text-ochre transition-colors">
                <Phone size={15} aria-hidden="true" className="shrink-0" />{SITE.phonePrimary.display}
              </a>
            </li>
            <li>
              <a href={`tel:${SITE.phoneSecondary.tel}`} className="inline-flex items-center gap-2 hover:text-ochre transition-colors">
                <Phone size={15} aria-hidden="true" className="shrink-0" />{SITE.phoneSecondary.display}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-2 hover:text-ochre transition-colors wrap-anywhere">
                <Mail size={15} aria-hidden="true" className="shrink-0" />{SITE.email}
              </a>
            </li>
            <li>
              <address className="flex items-start gap-2 not-italic text-ink/80">
                <MapPin size={15} aria-hidden="true" className="shrink-0 mt-0.5" />
                <span>{SITE.address.town}, {SITE.address.region}</span>
              </address>
            </li>
            <li>
              <a href={SITE.googleMaps} target="_blank" rel="noopener" className="inline-flex items-center gap-2 hover:text-ochre transition-colors">
                <ExternalLink size={15} aria-hidden="true" className="shrink-0" />Find us on Google
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar — legal + back to top */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-ink/55">
          <p>
            © {new Date().getFullYear()} Total Carpentry Services. This site uses reCAPTCHA; the Google{' '}
            <a href="https://policies.google.com/privacy" className="underline hover:text-ink/80" target="_blank" rel="noopener noreferrer">Privacy Policy</a>{' '}and{' '}
            <a href="https://policies.google.com/terms" className="underline hover:text-ink/80" target="_blank" rel="noopener noreferrer">Terms</a>{' '}apply.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-1.5 py-1 hover:text-ink transition-colors self-start"
          >
            <ArrowUp size={14} aria-hidden="true" />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  )
}
