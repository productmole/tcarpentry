import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import ContactForm from '../components/ContactForm'
import GoogleReviews from '../components/GoogleReviews'

const capabilities = [
  '1st & 2nd Fix Carpentry', 'Alcoves', 'Bathroom Upgrades', 'Bespoke Fitted Wardrobes',
  'Carpentry & Joinery', 'Ceilings & Flooring', 'Kitchen Installations',
  'Laminate Flooring Installation', 'Loft Hatches', 'MDF Works', 'Refurbishments',
  'House Renovations', 'Shelving', 'Skirting Boards', 'Structural Alterations', 'Wood Flooring Installation',
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Hero
        h1="Carpenter in Portishead & the Surrounding Areas"
        intro="House Renovations & Bespoke Carpentry by Total Carpentry Services"
        primaryCTA={{ label: 'Contact Us', to: '/contact' }}
        secondaryCTA={{ label: 'Our Services', to: '/services' }}
      />

      {/* Welcome / What we do */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#dead1f] font-semibold mb-2">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Welcome to Total Carpentry Services
            </h2>
            <p className="text-[#d1d5db] leading-relaxed mb-6">
              Founded in 2014, Total Carpentry Services has spent more than a decade transforming and refurbishing homes across Portishead and the wider area. We believe a home should lift your spirits as well as work hard for you balancing comfort, beauty and everyday practicality. Our qualified, experienced team has built its reputation on going the extra mile to deliver home improvements done properly.
            </p>
            <p className="text-[#d1d5db] leading-relaxed mb-6">
              For dependable, skilled and imaginative carpentry in North Somerset, talk to us. We specialise in new kitchen installations, value-adding home renovations and a wide choice of laminate and wood flooring, and we design and build fitted wardrobes to suit any bedroom and any taste.
            </p>
            <div className="flex flex-wrap items-center gap-8 mb-6">
              {[
                { src: '/City-and-Guilds.svg', alt: 'City & Guilds' },
                { src: '/howdens.svg', alt: 'Howdens' },
                { src: '/quick-step-light.svg', alt: 'Quick-Step' },
              ].map(({ src, alt }) => (
                <div key={alt} className="h-10 flex items-center">
                  <img src={src} alt={alt} className="max-h-full w-auto object-contain" />
                </div>
              ))}
            </div>
            <Link
              to="/contact"
              className="inline-block bg-[#dead1f] hover:bg-[#bd931a] text-white font-semibold px-6 py-2.5 rounded transition-colors text-sm"
            >
              Contact Us
            </Link>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src="/gallery/IMG_0320.jpg"
              alt="Kitchen installation by Total Carpentry Services"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>
      </section>

      {/* About / Residential Carpentry */}
      <section className="py-16 px-4 bg-[#111827]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80"
              alt="Residential carpentry work"
              className="w-full h-80 object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="text-xs uppercase tracking-widest text-[#dead1f] font-semibold mb-2">About Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Residential Carpentry
            </h2>
            <p className="text-[#d1d5db] leading-relaxed mb-4">
              As a family-run local carpenter, we focus on shaping interiors and integrating new features seamlessly. With over 25 years of combined experience and trade know-how behind us, we've become one of the area's most highly rated home-improvement specialists.
            </p>
            <ul className="grid grid-cols-2 gap-1.5 text-sm text-[#d1d5db]">
              {capabilities.map((c) => (
                <li key={c} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#dead1f] shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Service cards */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-[#dead1f] font-semibold mb-2 text-center">Our Work</p>
          <h2 className="text-3xl font-bold text-white mb-8 text-center">What We Can Do for You</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: 'Fitted Wardrobes', to: '/services/fitted-wardrobes', img: '/gallery/IMG_0518.jpg' },
              { label: 'House Renovations', to: '/services/house-renovations', img: '/gallery/IMG_0862.jpg' },
              { label: 'Wood Flooring', to: '/services/wood-flooring-installations', img: '/gallery/IMG_0736.jpg' },
            ].map((card) => (
              <Link
                key={card.to}
                to={card.to}
                className="group rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="overflow-hidden h-52">
                  <img
                    src={card.img}
                    alt={card.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="bg-[#111827] text-white px-4 py-3 text-center font-semibold group-hover:bg-[#dead1f] transition-colors">
                  {card.label}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Kitchen feature */}
      <section className="py-16 px-4 bg-[#03071a] text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#dead1f] font-semibold mb-2">The Complete Experience</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">New Kitchen Installations</h2>
            <p className="text-[#d1d5db] leading-relaxed mb-4">
              A new kitchen does more than look good it transforms how a space works. Our cabinetry and clever storage maximise every inch and cut the clutter, while considered lighting and bespoke touches make the room feel genuinely welcoming. Energy-efficient appliances and thoughtful material choices help too.
            </p>
            <p className="text-[#d1d5db] leading-relaxed mb-6">
              A stylish, modern kitchen can also add real value to your Portishead home. We turn tired kitchens into the heart of the house practical, beautiful, and finished with that all-important wow factor.
            </p>
            <Link
              to="/services/kitchen-installations"
              className="inline-block border-2 border-[#dead1f] text-[#dead1f] hover:bg-[#dead1f] hover:text-white font-semibold px-6 py-2.5 rounded transition-colors text-sm"
            >
              Kitchen Installations
            </Link>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src="/gallery/IMG_0321.jpg"
              alt="Kitchen installation by Total Carpentry Services"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Gallery promo */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src="/gallery/IMG_0663.jpg"
              alt="Recent carpentry project by Total Carpentry Services"
              className="w-full h-80 object-cover"
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-[#dead1f] font-semibold mb-2">Portfolio</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Visit Our Gallery</h2>
            <p className="text-[#d1d5db] leading-relaxed mb-6">
              Take a look through our gallery to see recent projects near you and the way our designs bring a home together. We're also happy to point you to finished work locally many clients are proud to show off their new wardrobes, kitchens, flooring and renovations.
            </p>
            <Link
              to="/gallery"
              className="inline-block bg-[#dead1f] hover:bg-[#bd931a] text-white font-semibold px-6 py-2.5 rounded transition-colors text-sm"
            >
              Our Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <GoogleReviews />

      {/* Final CTA + contact form */}
      <section className="py-16 px-4 bg-[#03071a]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#dead1f] font-semibold mb-2">Get Started</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Experienced & Recommended Carpentry Contractors
            </h2>
            <p className="text-[#d1d5db] leading-relaxed mb-4">
              From kitchen installations and fitted wardrobes to house renovations and wood flooring, we're Portishead's trusted local carpentry team. Get in touch for your free estimate.
            </p>
            <ul className="space-y-2 text-sm text-[#d1d5db]">
              {['Kitchen Installations', 'Fitted Wardrobes', 'House Renovations', 'Wood Flooring'].map((s) => (
                <li key={s} className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#dead1f]" />{s}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
