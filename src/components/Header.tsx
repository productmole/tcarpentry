import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ChevronDown, ChevronLeft, Phone } from 'lucide-react'

const services = [
  { label: 'House Renovations', to: '/services/house-renovations' },
  { label: 'Wood Flooring Installations', to: '/services/wood-flooring-installations' },
  { label: 'Fitted Wardrobes', to: '/services/fitted-wardrobes' },
  { label: 'Kitchen Installations', to: '/services/kitchen-installations' },
  { label: 'Our Services', to: '/services' },
]

const navLinks = [
  { label: 'Our Services', to: '/services', hasDropdown: true },
  { label: 'Reviews', to: '/reviews' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Areas We Cover', to: '/areas-we-cover' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact Us', to: '/contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false)

  return (
    <header className="bg-[#03071a] sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0">
          <img src="/tc-logo-light.svg" alt="Total Carpentry Services" className="h-10 md:h-12 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6 text-sm text-white/90">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div
                key={link.to}
                className="relative"
                onMouseEnter={() => setDesktopDropdownOpen(true)}
                onMouseLeave={() => setDesktopDropdownOpen(false)}
              >
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `flex items-center gap-1 hover:text-[#dead1f] transition-colors py-1 ${isActive ? 'text-[#dead1f]' : ''}`
                  }
                >
                  {link.label}
                  <ChevronDown size={14} />
                </NavLink>
                {desktopDropdownOpen && (
                  <div className="absolute top-full left-0 bg-[#111827] text-white shadow-xl rounded-b-lg min-w-[220px] py-2 z-50">
                    {services.map((s) => (
                      <Link
                        key={s.to}
                        to={s.to}
                        onClick={() => setDesktopDropdownOpen(false)}
                        className="block px-4 py-2.5 hover:bg-[#1e2538] hover:text-[#dead1f] text-sm transition-colors"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `hover:text-[#dead1f] transition-colors ${isActive ? 'text-[#dead1f]' : ''}`
                }
              >
                {link.label}
              </NavLink>
            )
          )}
        </nav>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="tel:07834772046"
            className="hidden md:flex items-center gap-2 bg-[#dead1f] hover:bg-[#bd931a] text-white text-sm font-semibold px-4 py-2 rounded transition-colors"
          >
            <Phone size={14} />
            Call Us 07834 772046
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile slide-out menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#03071a] border-t border-white/10">
          {mobileServicesOpen ? (
            <div>
              <button
                onClick={() => setMobileServicesOpen(false)}
                className="flex items-center gap-2 text-white/80 px-4 py-3 text-sm w-full hover:text-[#dead1f]"
              >
                <ChevronLeft size={16} />
                Back
              </button>
              {services.map((s) => (
                <Link
                  key={s.to}
                  to={s.to}
                  onClick={() => { setMobileOpen(false); setMobileServicesOpen(false) }}
                  className="block text-white px-6 py-3 text-sm border-t border-white/10 hover:text-[#dead1f]"
                >
                  {s.label}
                </Link>
              ))}
            </div>
          ) : (
            <div>
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <button
                    key={link.to}
                    onClick={() => setMobileServicesOpen(true)}
                    className="flex items-center justify-between w-full text-white px-4 py-3 text-sm border-t border-white/10 hover:text-[#dead1f]"
                  >
                    {link.label}
                    <ChevronDown size={14} />
                  </button>
                ) : (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className="block text-white px-4 py-3 text-sm border-t border-white/10 hover:text-[#dead1f]"
                  >
                    {link.label}
                  </Link>
                )
              )}
              <div className="px-4 py-4 border-t border-white/10">
                <a
                  href="tel:07834772046"
                  className="flex items-center justify-center gap-2 bg-[#dead1f] text-white text-sm font-semibold px-4 py-3 rounded w-full"
                >
                  <Phone size={14} />
                  Call Us 07834 772046
                </a>
              </div>
            </div>
          )}
        </div>
      )}
    </header>
  )
}
