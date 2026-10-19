import { Link } from 'react-router-dom'
import { Star, ShieldCheck, ArrowRight, PhoneCall, PencilRuler, Hammer } from 'lucide-react'
import GoogleReviews from '../components/GoogleReviews'
import ContactCTA from '../components/ContactCTA'
import { SERVICES } from '../lib/site'
import { useDocumentMeta } from '../lib/useDocumentMeta'
import { imgSize } from '../lib/images'

const accreditations = [
  { src: '/img/accreditation-city-and-guilds.svg', alt: 'City & Guilds qualified' },
  { src: '/img/partner-howdens.svg', alt: 'Howdens trade partner' },
  { src: '/img/partner-quick-step.svg', alt: 'Quick-Step flooring installer' },
]

const mosaic = [
  { src: '/img/kitchen-fit-portishead-02.jpg', alt: 'Fitted kitchen units and worktop in a Portishead home', span: true },
  { src: '/img/fitted-wardrobe-02.jpg', alt: 'Fitted wardrobe with sliding doors' },
  { src: '/img/wall-panelling-01.jpg', alt: 'Bespoke wall panelling in a hallway' },
  { src: '/img/timber-floor-detail-01.jpg', alt: 'Solid timber floor showing its grain' },
  { src: '/img/understairs-storage-01.jpg', alt: 'Bespoke understairs storage' },
  { src: '/img/home-renovation-02.jpg', alt: 'Renovated room with new skirting and trim' },
]

const steps = [
  { Icon: PhoneCall, title: 'Get in touch', body: 'Call, WhatsApp or send the form with a rough idea of the job. No detail is too small to start with.' },
  { Icon: PencilRuler, title: 'We visit and quote', body: 'We come and measure up, talk through options, and give you a clear, fixed price — free, with no pressure.' },
  { Icon: Hammer, title: 'We build and guarantee', body: 'We do the work tidily, keep you posted, and guarantee all of it.' },
]

export default function Home() {
  useDocumentMeta({
    title: 'Total Carpentry — Joinery & Home Improvements in Portishead',
    description:
      'Family-run Portishead carpenters since 2014. Kitchens, fitted wardrobes, wood flooring and home renovations across North Somerset. Free quotes.',
  })

  return (
    <>
      {/* HERO — dark navy with a dimmed project photo behind; copy + CTA pair
          left, a 2x2 service icon-card grid right */}
      <section className="relative overflow-hidden bg-paper">
        {/* Background photo, held back by a heavy navy overlay so text stays legible */}
        <img
          src="/img/kitchen-fit-portishead-01.jpg"
          alt="" aria-hidden="true" fetchPriority="high" width="1024" height="768"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(3,7,26,0.86) 0%, rgba(3,7,26,0.93) 100%)' }}
        />

        <div className="relative max-w-6xl mx-auto px-4 pt-10 pb-14 md:pt-16 md:pb-20 grid lg:grid-cols-2 gap-x-12 gap-y-10 lg:items-center">
          {/* Copy + CTAs */}
          <div className="order-1">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-ink leading-[1.05] mb-5">
              Carpenter in Portishead and the Surrounding Areas
            </h1>
            <p className="text-lg text-ink-soft leading-relaxed max-w-xl mb-7">
              Total Carpentry: Portishead’s 5-star rated carpenters and joiners.
            </p>
            <div id="hero-ctas" className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-7">
              <Link to="/contact" className="btn btn-primary">
                Contact Us
              </Link>
              <Link to="/services" className="inline-flex items-center gap-1.5 font-semibold text-ochre hover:gap-2.5 transition-all">
                Our Services <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-ink/75">
              <span className="inline-flex items-center gap-1.5">
                <span className="flex" role="img" aria-label="Rated 5 out of 5 on Google">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} className="text-ochre" fill="#dead1f" strokeWidth={1.5} aria-hidden="true" />
                  ))}
                </span>
                5.0 across 9 Google reviews
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck size={16} className="text-ochre" aria-hidden="true" /> All work guaranteed
              </span>
            </div>
          </div>

          {/* 2x2 service icon-card grid */}
          <ul className="order-2 grid grid-cols-2 gap-3 sm:gap-4">
            {SERVICES.map((s) => (
              <li key={s.to}>
                <Link
                  to={s.to}
                  className="group card h-full p-4 sm:p-5 flex flex-col gap-3 hover:border-ochre transition-colors"
                >
                  <span className="inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-ochre/10 text-ochre shrink-0">
                    <s.Icon size={26} aria-hidden="true" />
                  </span>
                  <span className="font-display text-base sm:text-lg font-semibold text-ink leading-tight group-hover:text-ochre transition-colors">
                    {s.label}
                  </span>
                  <span className="hidden sm:block text-sm text-ink-soft leading-snug">
                    {s.tagline}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ACCREDITATION STRIP — deeper navy so the white brand marks read + tonal shift */}
      <section className="bg-forest">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-center gap-x-10 gap-y-4">
          <span className="text-ink/60 text-sm uppercase tracking-wide">Trained &amp; trade-backed</span>
          <ul className="flex flex-wrap items-center justify-center gap-8">
            {accreditations.map((a) => (
              <li key={a.alt} className="flex items-center">
                <img src={a.src} alt={a.alt} {...imgSize(a.src)} className="h-8 w-auto object-contain" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SERVICES — a stacked index (not a card row, not a tile panel) */}
      <section className="bg-paper">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">Our services</h2>
            </div>
            <Link to="/services" className="inline-flex items-center gap-1.5 font-semibold text-rust hover:underline self-start md:self-auto">
              All services <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
          <ul className="divide-y divide-line border-y border-line">
            {SERVICES.map((s, i) => (
              <li key={s.to}>
                <Link to={s.to} className="group flex items-center gap-4 sm:gap-6 py-5 sm:py-6">
                  <span className="font-display text-2xl font-semibold text-rust/40 w-8 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-sand text-rust shrink-0">
                    <s.Icon size={24} aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-xl sm:text-2xl font-semibold text-ink group-hover:text-rust transition-colors">{s.label}</span>
                    <span className="block text-ink-soft text-sm sm:text-base truncate">{s.tagline}</span>
                  </span>
                  <ArrowRight size={20} className="text-ink-soft group-hover:text-rust group-hover:translate-x-1 transition-all shrink-0" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FEATURE BAND — a single story block */}
      <section className="bg-sand">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-20 grid md:grid-cols-2 gap-10 lg:gap-14 items-center">
          <figure className="order-1 md:order-none">
            <img src="/img/wall-panelling-01.jpg" alt="Bespoke wall panelling built and fitted by Total Carpentry"
              loading="lazy" width="768" height="1024"
              className="w-full aspect-[4/3] object-cover rounded-2xl border border-line shadow-lg" />
          </figure>
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mb-4">One workshop, start to finish</h2>
            <p className="text-ink-soft leading-relaxed mb-4">
              Being family-run means the person who quotes your job is the person who does it — and the one you ring if
              anything needs a second look. There’s no handover, no call centre, and no crew you’ve never met turning up
              at the door.
            </p>
            <p className="text-ink-soft leading-relaxed mb-6">
              With more than twenty-five years of combined experience on the tools, we’ve become one of the most
              recommended carpentry outfits around Portishead — most of our work now comes by word of mouth.
            </p>
            <Link to="/reviews" className="btn btn-ghost-onlight">
              Read the reviews <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* GALLERY MOSAIC */}
      <section className="bg-paper">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">Recent jobs, no stock photos</h2>
            </div>
            <Link to="/gallery" className="inline-flex items-center gap-1.5 font-semibold text-rust hover:underline self-start md:self-auto">
              Our Gallery <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {mosaic.map((m) => (
              <li key={m.src} className={m.span ? 'col-span-2 row-span-2' : ''}>
                <Link to="/gallery" className="block w-full h-full overflow-hidden rounded-xl border border-line group">
                  <img src={m.src} alt={m.alt} loading="lazy" {...imgSize(m.src)}
                    className={`w-full object-cover group-hover:scale-105 transition-transform duration-300 ${m.span ? 'aspect-square md:aspect-auto md:h-full' : 'aspect-square'}`} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <GoogleReviews />

      {/* HOW IT WORKS */}
      <section className="bg-paper">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
          <div className="max-w-2xl mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">How we work</h2>
          </div>
          <ol className="grid md:grid-cols-3 gap-5">
            {steps.map((step, i) => (
              <li key={step.title} className="card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-sand text-rust shrink-0">
                    <step.Icon size={22} aria-hidden="true" />
                  </span>
                  <span className="font-display text-xl font-semibold text-rust/40">Step {i + 1}</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-ink mb-2">{step.title}</h3>
                <p className="text-ink-soft leading-relaxed">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
