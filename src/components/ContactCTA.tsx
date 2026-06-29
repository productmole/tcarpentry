import { Link } from 'react-router-dom'
import { Phone } from 'lucide-react'

interface Props {
  heading?: string
  subtext?: string
}

export default function ContactCTA({
  heading = 'Get in Touch With Our Friendly Team',
  subtext = 'Ready to transform your home? Call us for a free estimate or send us a message — we\'d love to hear from you.',
}: Props) {
  return (
    <section className="bg-[#03071a] text-white py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{heading}</h2>
        <p className="text-white/70 mb-8 text-lg">{subtext}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <a
            href="tel:01275844094"
            className="flex items-center gap-2 text-lg font-semibold hover:text-[#dead1f] transition-colors"
          >
            <Phone size={18} />01275 844094
          </a>
          <span className="hidden sm:block text-white/30">|</span>
          <a
            href="tel:07834772046"
            className="flex items-center gap-2 text-lg font-semibold hover:text-[#dead1f] transition-colors"
          >
            <Phone size={18} />07834 772046
          </a>
        </div>
        <Link
          to="/contact"
          className="inline-block bg-[#dead1f] hover:bg-[#bd931a] text-white font-semibold px-8 py-3 rounded transition-colors"
        >
          Contact Us
        </Link>
      </div>
    </section>
  )
}
