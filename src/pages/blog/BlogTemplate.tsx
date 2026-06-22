import { Link } from 'react-router-dom'
import Hero from '../../components/Hero'
import ContactCTA from '../../components/ContactCTA'
import { Phone } from 'lucide-react'

interface Section {
  heading?: string
  paragraphs: string[]
  bullets?: string[]
}

interface BlogPostProps {
  h1: string
  heroImg: string
  heroImgAlt: string
  intro: string
  secondaryImg?: string
  secondaryImgAlt?: string
  sections: Section[]
}

export default function BlogTemplate({ h1, heroImg, heroImgAlt, intro, secondaryImg, secondaryImgAlt, sections }: BlogPostProps) {
  return (
    <>
      <Hero h1={h1} imageSrc={heroImg} imageAlt={heroImgAlt} />

      <article className="py-16 px-4">
        <div className="max-w-3xl mx-auto prose prose-gray">
          <p className="text-gray-600 text-lg leading-relaxed mb-8">{intro}</p>

          {secondaryImg && (
            <div className="rounded-xl overflow-hidden shadow-lg mb-10">
              <img src={secondaryImg} alt={secondaryImgAlt ?? ''} className="w-full h-72 object-cover" />
            </div>
          )}

          {sections.map((s, i) => (
            <div key={i} className="mb-8">
              {s.heading && (
                <h2 className="text-2xl font-bold text-[#1E2A24] mb-3 font-['Poppins']">{s.heading}</h2>
              )}
              {s.paragraphs.map((p, j) => (
                <p key={j} className="text-gray-600 leading-relaxed mb-3">{p}</p>
              ))}
              {s.bullets && (
                <ul className="space-y-2 mt-2 mb-3">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-gray-600 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B07A3C] mt-2 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <div className="bg-[#F5F5F3] rounded-xl p-6 mt-10 text-center border border-[#E5E5E5]">
            <h3 className="text-xl font-bold text-[#1E2A24] mb-2 font-['Poppins']">
              Contact Our Carpenters in Portishead Today
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Ready to get started? Call us for a free estimate or{' '}
              <Link to="/contact" className="text-[#B07A3C] hover:underline">send us a message</Link>.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:01275844094" className="flex items-center justify-center gap-2 font-semibold text-[#1E2A24] hover:text-[#B07A3C]">
                <Phone size={16} />01275 844094
              </a>
              <a href="tel:07834772046" className="flex items-center justify-center gap-2 font-semibold text-[#1E2A24] hover:text-[#B07A3C]">
                <Phone size={16} />07834 772046
              </a>
            </div>
          </div>
        </div>
      </article>

      <ContactCTA />
    </>
  )
}
