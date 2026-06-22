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
        imageSrc="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&q=80"
        imageAlt="Modern kitchen — services overview"
      />

      {/* Total by Name section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-[#1E2A24] mb-4">Total by Name, Total by Nature</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We're here to help you invest in your home and make it truly your own. Every service below comes with a <strong>1-year workmanship guarantee</strong> and a strong record of happy clients across Portishead and the surrounding area.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Whether that's reworking your interior or building storage made to measure, always tailored to your property and your vision.
            </p>
            <div className="grid grid-cols-2 gap-2">
              {capabilities.map((c) => (
                <div key={c} className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B07A3C] shrink-0" />
                  {serviceLinks.find(s => s.label.toLowerCase().includes(c.toLowerCase())) ? (
                    <Link
                      to={serviceLinks.find(s => s.label.toLowerCase().includes(c.toLowerCase()))!.to}
                      className="hover:text-[#B07A3C] underline underline-offset-2"
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
                className="flex items-center justify-between bg-[#F5F5F3] hover:bg-[#1E2A24] hover:text-white text-[#1E2A24] rounded-lg px-5 py-4 transition-colors group border border-[#E5E5E5]"
              >
                <span className="font-semibold">{s.label}</span>
                <span className="text-[#B07A3C] group-hover:text-white transition-colors">→</span>
              </Link>
            ))}
            <Link
              to="/blog"
              className="block text-center text-sm text-[#B07A3C] hover:underline mt-4"
            >
              Read our blog for ideas and inspiration →
            </Link>
          </div>
        </div>
      </section>

      {/* Contact line */}
      <section className="bg-[#F5F5F3] py-8 px-4 text-center text-sm text-gray-600">
        For professional carpentry across Portishead and beyond, call your local carpenter on{' '}
        <a href="tel:01275844094" className="font-semibold text-[#1E2A24] hover:text-[#B07A3C]">01275 844094</a>{' '}
        or{' '}
        <a href="tel:07834772046" className="font-semibold text-[#1E2A24] hover:text-[#B07A3C]">07834 772046</a>.
        Want to know more? Browse our dedicated pages on{' '}
        {serviceLinks.map((s, i) => (
          <span key={s.to}>
            <Link to={s.to} className="hover:text-[#B07A3C] underline">{s.label}</Link>
            {i < serviceLinks.length - 1 ? ', ' : '.'}
          </span>
        ))}
      </section>

      <ContactCTA />
    </>
  )
}
