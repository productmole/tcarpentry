import Hero from '../components/Hero'
import ContactCTA from '../components/ContactCTA'
import ContactForm from '../components/ContactForm'
import { Phone, MapPin, Mail } from 'lucide-react'

export default function Contact() {
  return (
    <>
      <Hero
        h1="Contact Us"
        intro="Thinking about improving your home? Whether it's bespoke fitted wardrobes, a full renovation or a brand-new kitchen, getting in touch couldn't be simpler."
        imageSrc="/gallery/IMG_0699.jpg"
        imageAlt="Carpentry work by Total Carpentry Services"
      />

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact details */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Reach Out to Discuss Your Next Project</h2>
            <p className="text-[#d1d5db] leading-relaxed mb-6">
              We specialise in renovations, fitted wardrobes, kitchens, wood flooring and smart solutions for awkward spaces and we've built a name for being reliable, creative and easy to work with. Every project starts with a chat about your ideas, then we make them work in a practical, stylish way.
            </p>
            <p className="text-[#d1d5db] leading-relaxed mb-8">
              Choose us and you get a team that cares about the big picture and the small details alike.
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-[#dead1f] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white text-sm mb-1">Phone</div>
                  <a href="tel:01275844094" className="block text-[#d1d5db] hover:text-[#dead1f]">01275 844094</a>
                  <a href="tel:07834772046" className="block text-[#d1d5db] hover:text-[#dead1f]">07834 772046</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-[#dead1f] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white text-sm mb-1">Email</div>
                  <span className="text-[#d1d5db] text-sm italic">Email address to be confirmed please call or use the form</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#dead1f] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white text-sm mb-1">Address</div>
                  <address className="not-italic text-[#d1d5db] text-sm">
                    3 Bunting Ln<br />
                    Portishead<br />
                    Bristol, BS20 7PZ
                  </address>
                </div>
              </li>
            </ul>
          </div>

          {/* Form */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Send Us a Message</h3>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="px-4 pb-0">
        <div className="max-w-6xl mx-auto rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="Total Carpentry Services location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.1!2d-2.766!3d51.486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48718f3b4c6d8c3b%3A0x1234567890!2s3+Bunting+Ln%2C+Portishead%2C+Bristol+BS20+7PZ!5e0!3m2!1sen!2suk!4v1234567890"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <ContactCTA heading="Contacting Your Local Portishead Carpenter" />
    </>
  )
}
