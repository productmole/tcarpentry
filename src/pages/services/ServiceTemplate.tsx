import Hero from '../../components/Hero'
import FAQAccordion from '../../components/FAQAccordion'
import ContactCTA from '../../components/ContactCTA'

interface BodySection {
  heading: string
  paragraphs: string[]
  bullets?: string[]
  imgSrc?: string
  imgAlt?: string
  imgRight?: boolean
}

interface FAQ {
  q: string
  a: string
}

interface ServicePageProps {
  heroH1: string
  heroIntro: string
  heroImg: string
  heroImgAlt: string
  sections: BodySection[]
  faqs: FAQ[]
  faqHeading: string
}

export default function ServiceTemplate({
  heroH1,
  heroIntro,
  heroImg,
  heroImgAlt,
  sections,
  faqs,
  faqHeading,
}: ServicePageProps) {
  return (
    <>
      <Hero h1={heroH1} intro={heroIntro} imageSrc={heroImg} imageAlt={heroImgAlt} />

      {sections.map((section, i) => (
        <section key={i} className={`py-16 px-4 ${i % 2 === 1 ? 'bg-[#111827]' : 'bg-[#03071a]'}`}>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className={section.imgRight ? 'order-1' : 'order-1 md:order-2'}>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{section.heading}</h2>
              {section.paragraphs.map((p, j) => (
                <p key={j} className="text-[#d1d5db] leading-relaxed mb-4">{p}</p>
              ))}
              {section.bullets && (
                <ul className="space-y-2 text-sm text-[#d1d5db] mt-4">
                  {section.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#dead1f] mt-2 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {section.imgSrc && (
              <div className={`rounded-xl overflow-hidden shadow-lg ${section.imgRight ? 'order-2' : 'order-2 md:order-1'}`}>
                <img
                  src={section.imgSrc}
                  alt={section.imgAlt ?? section.heading}
                  className="w-full h-80 object-cover"
                />
              </div>
            )}
          </div>
        </section>
      ))}

      <FAQAccordion faqs={faqs} heading={faqHeading} />
      <ContactCTA />
    </>
  )
}
