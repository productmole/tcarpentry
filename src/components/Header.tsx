import { useState, useRef, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'
import { SITE, SERVICES } from '../lib/site'

const navLinks = [
  { label: 'Services', to: '/services', hasDropdown: true },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Reviews', to: '/reviews' },
  { label: 'Areas We Cover', to: '/areas-we-cover' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

const linkBase =
  'px-1 py-2 font-medium text-ink hover:text-rust transition-colors border-b-2 border-transparent'
const linkActive = 'text-rust border-rust'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close the desktop dropdown on Escape or outside click/focus.
  useEffect(() => {
    if (!servicesOpen) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setServicesOpen(false)
    }
    function onOutside(e: Event) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onOutside)
    document.addEventListener('focusin', onOutside)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onOutside)
      document.removeEventListener('focusin', onOutside)
    }
  }, [servicesOpen])

  return (
    <header className="bg-paper/95 backdrop-blur border-b border-line sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16 md:h-20 gap-4">
        <Link to="/" className="flex items-center shrink-0 rounded-sm" aria-label="Total Carpentry — home">
          <img src="/tc-logo-light.svg" alt="Total Carpentry" className="h-9 md:h-11 w-auto" width="220" height="76" />
        </Link>

        <nav aria-label="Primary" className="hidden lg:flex items-center gap-7 text-[15px]">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div
                key={link.to}
                ref={dropdownRef}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  type="button"
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                  onClick={() => setServicesOpen((o) => !o)}
                  className={`${linkBase} inline-flex items-center gap-1`}
                >
                  {link.label}
                  <ChevronDown size={15} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-0 pt-2">
                    <ul className="card p-2 min-w-[260px]">
                      <li>
                        <Link to="/services" onClick={() => setServicesOpen(false)}
                          className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-ink hover:bg-sand hover:text-rust transition-colors">
                          All services overview
                        </Link>
                      </li>
                      {SERVICES.map((s) => (
                        <li key={s.to}>
                          <Link to={s.to} onClick={() => setServicesOpen(false)}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-ink hover:bg-sand hover:text-rust transition-colors">
                            <s.Icon size={18} className="text-rust" aria-hidden="true" />
                            {s.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <NavLink key={link.to} to={link.to}
                className={({ isActive }) => `${linkBase} ${isActive ? linkActive : ''}`}>
                {link.label}
              </NavLink>
            )
          )}
        </nav>

        <div className="flex items-center gap-2">
          <a href={`tel:${SITE.phonePrimary.tel}`} className="hidden md:inline-flex btn btn-primary text-[15px] px-4 py-2.5">
            <Phone size={16} aria-hidden="true" />
            Call Us {SITE.phonePrimary.display}
          </a>
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg text-ink hover:bg-sand"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav id="mobile-menu" aria-label="Primary" className="lg:hidden border-t border-line bg-paper">
          <ul className="max-w-6xl mx-auto px-2 py-2">
            <li>
              <Link to="/services" onClick={() => setMobileOpen(false)}
                className="block px-3 py-3 rounded-lg font-semibold text-ink hover:bg-sand">
                Services overview
              </Link>
            </li>
            {SERVICES.map((s) => (
              <li key={s.to}>
                <Link to={s.to} onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 pl-6 pr-3 py-3 rounded-lg text-ink hover:bg-sand">
                  <s.Icon size={18} className="text-rust" aria-hidden="true" />
                  {s.label}
                </Link>
              </li>
            ))}
            {navLinks.filter((l) => !l.hasDropdown).map((link) => (
              <li key={link.to}>
                <Link to={link.to} onClick={() => setMobileOpen(false)}
                  className="block px-3 py-3 rounded-lg font-semibold text-ink hover:bg-sand">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
