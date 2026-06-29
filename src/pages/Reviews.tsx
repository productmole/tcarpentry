import Hero from '../components/Hero'
import ContactCTA from '../components/ContactCTA'
import GoogleReviews from '../components/GoogleReviews'

export default function Reviews() {
  return (
    <>
      <Hero
        h1="Reviews"
        intro="We love hearing from the people we work for their words tell our story better than we can."
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
      </section>

      <GoogleReviews />

      <ContactCTA heading="Get in Contact With Our Friendly Team" />
    </>
  )
}
