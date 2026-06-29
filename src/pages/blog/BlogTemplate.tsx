import { Link } from 'react-router-dom'
import Hero from '../../components/Hero'
import ContactCTA from '../../components/ContactCTA'
import StockImage from '../../components/StockImage'
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
  secondaryImgIsStock?: boolean
  sections: Section[]
}

export default function BlogTemplate({ h1, heroImg, heroImgAlt, intro, secondaryImg, secondaryImgAlt, secondaryImgIsStock, sections }: BlogPostProps) {
  return (
    <>
      <Hero h1={h1} imageSrc={heroImg} imageAlt={heroImgAlt} />

      <article className="py-16 px-4">
        <div className="max-w-3xl mx-auto prose prose-gray">
          <p className="text-[#d1d5db] text-lg leading-relaxed mb-8">{intro}</p>

          {secondaryImg && (
            <div className="rounded-xl overflow-hidden shadow-lg mb-10">
              {secondaryImgIsStock ? (
                <StockImage src={secondaryImg} alt={secondaryImgAlt ?? ''} className="w-full h-72 object-cover" />
              ) : (
                <img src={secondaryImg} alt={secondaryImgAlt ?? ''} className="w-full h-72 object-cover" />
              )}
            </div>
          )}

          {sections.map((s, i) => (
            <div key={i} className="mb-8">
              {s.heading && (
                <h2 className="text-2xl font-bold text-white mb-3 font-['Poppins']">{s.heading}</h2>
              )}
              {s.paragraphs.map((p, j) => (
                <p key={j} className="text-[#d1d5db] leading-relaxed mb-3">{p}</p>
              ))}
              {s.bullets && (
                <ul className="space-y-2 mt-2 mb-3">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-[#d1d5db] text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#dead1f] mt-2 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <div className="bg-[#111827] rounded-xl p-6 mt-10 text-center border border-[#2d3748]">
            <h3 className="text-xl font-bold text-white mb-2 font-['Poppins']">
              Contact Our Carpenters in Portishead Today
            </h3>
            <p className="text-[#d1d5db] text-sm mb-4">
              Ready to get started? Call us for a free estimate or{' '}
              <Link to="/contact" className="text-[#dead1f] hover:underline">send us a message</Link>.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:01275844094" className="flex items-center justify-center gap-2 font-semibold text-white hover:text-[#dead1f]">
                <Phone size={16} />01275 844094
              </a>
              <a href="tel:07834772046" className="flex items-center justify-center gap-2 font-semibold text-white hover:text-[#dead1f]">
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
