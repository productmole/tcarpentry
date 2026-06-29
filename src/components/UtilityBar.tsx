import { Phone } from 'lucide-react'

function FacebookIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export default function UtilityBar() {
  return (
    <div className="bg-[#03071a] text-white text-sm py-2">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-4">
          <a
            href="tel:07834772046"
            className="flex items-center gap-1.5 hover:text-[#dead1f] transition-colors"
          >
            <Phone size={15} />
            <span>07834 772046</span>
          </a>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://www.facebook.com/totalcarpentry"
            className="hover:text-[#dead1f] transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://www.instagram.com/totalcarpentryportishead/"
            className="hover:text-[#dead1f] transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <InstagramIcon />
          </a>
        </div>
      </div>
    </div>
  )
}
