import { Link } from 'react-router-dom'

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
  overlay = 0.55,
}: HeroProps) {
  return (
    <section
      className="relative w-full min-h-[420px] md:min-h-[520px] flex items-center justify-center text-white"
      style={{
        backgroundImage: imageSrc ? `url(${imageSrc})` : undefined,
        backgroundColor: !imageSrc ? '#1E2A24' : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      role="img"
      aria-label={imageAlt}
    >
      {imageSrc && (
        <div
          className="absolute inset-0"
          style={{ background: `rgba(0,0,0,${overlay})` }}
        />
      )}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center py-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">{h1}</h1>
        {intro && (
          <p className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto mb-8">{intro}</p>
        )}
        {(primaryCTA || secondaryCTA) && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {primaryCTA && (
              <Link
                to={primaryCTA.to}
                className="bg-[#B07A3C] hover:bg-[#8a5e2a] text-white font-semibold px-8 py-3 rounded transition-colors"
              >
                {primaryCTA.label}
              </Link>
            )}
            {secondaryCTA && (
              <Link
                to={secondaryCTA.to}
                className="border-2 border-white text-white hover:bg-white hover:text-[#1E2A24] font-semibold px-8 py-3 rounded transition-colors"
              >
                {secondaryCTA.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
