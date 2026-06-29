import Hero from '../components/Hero'
import ContactCTA from '../components/ContactCTA'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah M.',
    location: 'Portishead',
    text: 'Dave fitted a stunning fitted wardrobe in our master bedroom. The quality is exceptional — it looks like it was always part of the house. Would absolutely recommend.',
    stars: 5,
  },
  {
    name: 'James T.',
    location: 'Clevedon',
    text: 'Excellent work on our kitchen installation. Professional, tidy and the attention to detail was second to none. The whole process was stress-free.',
    stars: 5,
  },
  {
    name: 'Rachel H.',
    location: 'Nailsea',
    text: 'We had wood flooring fitted throughout the ground floor. The finish is beautiful and the team was incredibly tidy and efficient. Very happy customers!',
    stars: 5,
  },
  {
    name: 'Mike D.',
    location: 'Long Ashton',
    text: 'Full house renovation including new skirting, doors and a staircase refurb. Everything was done to a very high standard. Couldn\'t be happier.',
    stars: 5,
  },
  {
    name: 'Claire B.',
    location: 'Portishead',
    text: 'Such a friendly, reliable team. They transformed our alcoves with custom shelving and the result is gorgeous. Great value too.',
    stars: 5,
  },
  {
    name: 'Tom W.',
    location: 'Backwell',
    text: 'Walk-in wardrobe designed and built from scratch. The internal layout is perfect and the finish is immaculate. Exactly what we asked for.',
    stars: 5,
  },
]

export default function Reviews() {
  return (
    <>
      <Hero
        h1="Reviews"
        intro="We love hearing from the people we work for — their words tell our story better than we can."
        imageSrc="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&q=80"
        imageAlt="Beautiful kitchen we installed"
      />

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">What Our Clients Have to Say</h2>
          <p className="text-[#d1d5db] leading-relaxed">
            At Total Carpentry Services, reviews are how we measure success, and they reflect the trust local homeowners place in us. The same themes come up again and again: attention to detail, friendly service, and turning ideas into reality.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-[#111827] border border-[#2d3748] rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex mb-3">
                {[...Array(t.stars)].map((_, j) => (
                  <Star key={j} size={16} className="text-[#dead1f] fill-[#dead1f]" />
                ))}
              </div>
              <p className="text-[#d1d5db] text-sm leading-relaxed mb-4">"{t.text}"</p>
              <div className="text-white font-semibold text-sm">{t.name}</div>
              <div className="text-gray-400 text-xs">{t.location}</div>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto text-center mt-12 p-6 bg-[#111827] rounded-xl">
          <p className="text-[#d1d5db] text-sm">
            We're proud to be highly rated on Google. To see all our reviews or leave your own,{' '}
            <a
              href="https://www.google.com/search?q=Total+Carpentry+Services+Portishead"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#dead1f] hover:underline font-medium"
            >
              find us on Google
            </a>.
          </p>
        </div>
      </section>

      <ContactCTA heading="Get in Contact With Our Friendly Team" />
    </>
  )
}
