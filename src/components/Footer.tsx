import { Link } from 'react-router-dom'
import { Phone, MapPin, ArrowUp } from 'lucide-react'

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

export default function Footer() {
  return (
    <footer className="bg-[#1E2A24] text-white/80 text-sm">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <img src="/tc-logo-light.svg" alt="Total Carpentry Services" className="h-10 w-auto mb-3" />
          <p className="text-white/60 text-sm leading-relaxed mb-4">
            Established 2014. Trusted local carpentry across Portishead &amp; North Somerset.
          </p>
          <div className="flex gap-3">
            <a
              href="https://www.facebook.com/totalcarpentry"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#B07A3C] transition-colors"
              aria-label="Facebook"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://www.instagram.com/totalcarpentryportishead/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#B07A3C] transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>

        {/* Nav */}
        <div>
          <div className="text-white font-semibold mb-3">Quick Links</div>
          <ul className="space-y-2">
            {[
              ['Home', '/'],
              ['Our Services', '/services'],
              ['Reviews', '/reviews'],
              ['Gallery', '/gallery'],
              ['Areas We Cover', '/areas-we-cover'],
              ['Blog', '/blog'],
              ['Contact Us', '/contact'],
            ].map(([label, to]) => (
              <li key={to}>
                <Link to={to} className="hover:text-[#B07A3C] transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div className="text-white font-semibold mb-3">Contact</div>
          <ul className="space-y-2">
            <li>
              <a href="tel:01275844094" className="flex items-center gap-2 hover:text-[#B07A3C] transition-colors">
                <Phone size={14} />01275 844094
              </a>
            </li>
            <li>
              <a href="tel:07834772046" className="flex items-center gap-2 hover:text-[#B07A3C] transition-colors">
                <Phone size={14} />07834 772046
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={14} className="shrink-0 mt-0.5" />
              <span>3 Bunting Ln, Portishead, Bristol, BS20 7PZ</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between text-white/40 text-xs">
          <p>
            This site is protected by reCAPTCHA and the Google{' '}
            <a href="https://policies.google.com/privacy" className="underline hover:text-white/60" target="_blank" rel="noopener noreferrer">Privacy Policy</a>{' '}
            and{' '}
            <a href="https://policies.google.com/terms" className="underline hover:text-white/60" target="_blank" rel="noopener noreferrer">Terms of Service</a>{' '}
            apply.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-1 hover:text-white/80 transition-colors"
          >
            <ArrowUp size={12} />
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  )
}
