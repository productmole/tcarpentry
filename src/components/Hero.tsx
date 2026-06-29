import { Link } from 'react-router-dom'
import { KitchenIcon, WardrobeIcon, HouseIcon, FlooringIcon } from './ServiceIcons'

// Dark stained wood grain background from Unsplash (landscape, close-up grain)
const WOOD_BG = 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=1920&q=80'

const heroServices = [
  { label: 'Kitchen Installations', to: '/services/kitchen-installations', Icon: KitchenIcon },
  { label: 'Fitted Wardrobes', to: '/services/fitted-wardrobes', Icon: WardrobeIcon },
  { label: 'House Renovations', to: '/services/house-renovations', Icon: HouseIcon },
  { label: 'Wood Flooring', to: '/services/wood-flooring-installations', Icon: FlooringIcon },
]

interface HeroProps {
  h1: string
  intro?: string
  primaryCTA?: { label: string; to: string }
  secondaryCTA?: { label: string; to: string }
  imageSrc?: string
  imageAlt?: string
  overlay?: number
}

export default function Hero({
  h1,
  intro,
  primaryCTA,
  secondaryCTA,
  imageSrc,
  imageAlt = '',
  overlay = 0.72,
}: HeroProps) {
  // Home page uses the full two-column layout; other pages use a simpler centred banner
  const isHome = imageSrc === undefined

  if (!isHome) {
    // Simple banner for interior pages
    return (
      <section
        className="relative w-full min-h-[320px] flex items-center justify-center text-white"
        style={{
          backgroundImage: imageSrc ? `url(${imageSrc})` : undefined,
          backgroundColor: !imageSrc ? '#03071a' : undefined,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        role="img"
        aria-label={imageAlt}
      >
        {imageSrc && (
          <div className="absolute inset-0" style={{ background: `rgba(0,0,0,${overlay})` }} />
        )}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center py-16">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">{h1}</h1>
          {intro && <p className="text-lg text-white/85 max-w-2xl mx-auto mb-8">{intro}</p>}
          {(primaryCTA || secondaryCTA) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {primaryCTA && (
                <Link to={primaryCTA.to} className="bg-[#dead1f] hover:bg-[#bd931a] text-white font-semibold px-8 py-3 rounded transition-colors">
                  {primaryCTA.label}
                </Link>
              )}
              {secondaryCTA && (
                <Link to={secondaryCTA.to} className="inline-flex items-center gap-2 text-white/90 hover:text-[#dead1f] font-semibold transition-colors">
                  {secondaryCTA.label}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="18" height="18" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              )}
            </div>
          )}
        </div>
      </section>
    )
  }

  // Home hero full two-column layout matching tcarpentry.co.uk
  return (
    <section
      className="relative w-full flex items-center text-white"
      style={{
        minHeight: '90vh',
        backgroundImage: `url(${WOOD_BG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0" style={{ background: `rgba(3,7,26,${overlay})` }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left text + CTAs */}
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5 text-left">
            {h1}
          </h1>
          {intro && (
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl text-left">{intro}</p>
          )}
          {(primaryCTA || secondaryCTA) && (
            <div className="flex flex-row flex-wrap gap-4 items-center">
              {primaryCTA && (
                <Link
                  to={primaryCTA.to}
                  className="bg-[#dead1f] hover:bg-[#bd931a] text-white font-semibold px-8 py-3 rounded transition-colors"
                >
                  {primaryCTA.label}
                </Link>
              )}
              {secondaryCTA && (
                <Link
                  to={secondaryCTA.to}
                  className="inline-flex items-center gap-2 text-white/90 hover:text-[#dead1f] font-semibold py-3 transition-colors"
                >
                  {secondaryCTA.label}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="18" height="18" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              )}
            </div>
          )}
        </div>

        {/* Right 2×2 service icon grid (glassmorphism card matching original) */}
        <div className="lg:flex lg:justify-end">
          <ul
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-sm shadow-xl overflow-hidden grid grid-cols-2 w-full lg:max-w-[26rem]"
            role="list"
          >
            {heroServices.map(({ label, to, Icon }) => (
              <li key={to} className="border border-white/10">
                <Link
                  to={to}
                  className="flex flex-col items-center gap-3 p-6 text-center hover:bg-white/5 transition-colors group"
                >
                  <Icon size={40} />
                  <span className="text-sm font-semibold text-white group-hover:text-[#dead1f] transition-colors leading-tight">
                    {label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
