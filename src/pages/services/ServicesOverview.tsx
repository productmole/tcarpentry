import { Link } from 'react-router-dom'
import Hero from '../../components/Hero'
import ContactCTA from '../../components/ContactCTA'

const capabilities = [
  '1st & 2nd Fix Carpentry', 'Alcoves', 'Bathroom Upgrades', 'Bespoke Fitted Wardrobes',
  'Carpentry & Joinery', 'Ceilings & Flooring', 'Fitted Wardrobes', 'Kitchen Installations',
  'Laminate Flooring Installation', 'Loft Hatches', 'MDF Works', 'Refurbishments',
  'House Renovations', 'Retrofitting Work', 'Shelving', 'Skirting Boards',
  'Structural Alterations', 'Wood Flooring Installation',
]

const serviceLinks = [
  { label: 'House Renovations', to: '/services/house-renovations' },
  { label: 'Wood Flooring Installations', to: '/services/wood-flooring-installations' },
  { label: 'Fitted Wardrobes', to: '/services/fitted-wardrobes' },
  { label: 'Kitchen Installations', to: '/services/kitchen-installations' },
]

export default function ServicesOverview() {
  return (
    <>
      <Hero
        h1="Our Services"
        intro="Give your home a lift with Total Carpentry Services. As a trusted local carpenter serving Portishead and nearby towns, we bring precise, reliable workmanship to renovations, installations and bespoke designs."
        imageSrc="/gallery/IMG_0663.jpg"
        imageAlt="Carpentry services by Total Carpentry Services"
      />

      {/* Total by Name section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Total by Name, Total by Nature</h2>
            <p className="text-[#d1d5db] leading-relaxed mb-4">
              We're here to help you invest in your home and make it truly your own. Every service below comes with a <strong>1-year workmanship guarantee</strong> and a strong record of happy clients across Portishead and the surrounding area.
            </p>
            <p className="text-[#d1d5db] leading-relaxed mb-6">
              Whether that's reworking your interior or building storage made to measure, always tailored to your property and your vision.
            </p>
            <div className="grid grid-cols-2 gap-2">
              {capabilities.map((c) => (
                <div key={c} className="flex items-center gap-2 text-sm text-[#d1d5db]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#dead1f] shrink-0" />
                  {serviceLinks.find(s => s.label.toLowerCase().includes(c.toLowerCase())) ? (
                    <Link
                      to={serviceLinks.find(s => s.label.toLowerCase().includes(c.toLowerCase()))!.to}
                      className="hover:text-[#dead1f] underline underline-offset-2"
                    >
                      {c}
                    </Link>
                  ) : (
                    <span>{c}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            {serviceLinks.map((s) => (
              <Link
                key={s.to}
                to={s.to}
                className="flex items-center justify-between bg-[#111827] hover:bg-[#03071a] hover:text-white text-white rounded-lg px-5 py-4 transition-colors group border border-[#2d3748]"
              >
                <span className="font-semibold">{s.label}</span>
                <span className="text-[#dead1f] group-hover:text-white transition-colors">→</span>
              </Link>
            ))}
            <Link
              to="/blog"
              className="block text-center text-sm text-[#dead1f] hover:underline mt-4"
            >
              Read our blog for ideas and inspiration →
            </Link>
          </div>
        </div>
      </section>

      {/* Contact line */}
      <section className="bg-[#111827] py-8 px-4 text-center text-sm text-[#d1d5db]">
        For professional carpentry across Portishead and beyond, call your local carpenter on{' '}
        <a href="tel:01275844094" className="font-semibold text-white hover:text-[#dead1f]">01275 844094</a>{' '}
        or{' '}
        <a href="tel:07834772046" className="font-semibold text-white hover:text-[#dead1f]">07834 772046</a>.
        Want to know more? Browse our dedicated pages on{' '}
        {serviceLinks.map((s, i) => (
          <span key={s.to}>
            <Link to={s.to} className="hover:text-[#dead1f] underline">{s.label}</Link>
            {i < serviceLinks.length - 1 ? ', ' : '.'}
          </span>
        ))}
      </section>

      <ContactCTA />
    </>
  )
}
