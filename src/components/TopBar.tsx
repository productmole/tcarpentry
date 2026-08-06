import { Phone, Mail } from 'lucide-react'
import { SITE } from '../lib/site'

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}
function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** Slim espresso utility strip above the light header (mixed-ground design). */
export default function TopBar() {
  return (
    <div className="bg-forest text-ink text-sm">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between gap-4 h-10">
        <div className="flex items-center gap-4 min-w-0">
          <a href={`tel:${SITE.phonePrimary.tel}`} className="flex items-center gap-1.5 hover:text-ochre transition-colors">
            <Phone size={15} aria-hidden="true" />
            <span className="font-medium">{SITE.phonePrimary.display}</span>
          </a>
          <a href={`mailto:${SITE.email}`} className="hidden sm:flex items-center gap-1.5 hover:text-ochre transition-colors wrap-anywhere">
            <Mail size={15} aria-hidden="true" />
            <span>{SITE.email}</span>
          </a>
        </div>
        <div className="flex items-center gap-1">
          <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" aria-label="Total Carpentry on Facebook"
             className="inline-flex items-center justify-center w-9 h-9 rounded-md hover:text-ochre hover:bg-white/5 transition-colors">
            <FacebookIcon />
          </a>
          <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" aria-label="Total Carpentry on Instagram"
             className="inline-flex items-center justify-center w-9 h-9 rounded-md hover:text-ochre hover:bg-white/5 transition-colors">
            <InstagramIcon />
          </a>
        </div>
      </div>
    </div>
  )
}
