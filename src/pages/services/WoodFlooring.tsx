import ServiceTemplate from './ServiceTemplate'

export default function WoodFlooring() {
  return (
    <ServiceTemplate
      heroH1="Wood Flooring Installation in Portishead"
      heroIntro="Wood flooring is more than a surface — it sets the character of a room. At Total Carpentry Services we fit solid timber and laminate floors with care and precision for a result that's both hard-wearing and elegant. Serving Portishead and the surrounding area, we create spaces where practicality meets timeless design."
      heroImg="https://images.unsplash.com/photo-1586105251261-72a756497a11?w=1600&q=80"
      heroImgAlt="Wood flooring installation"
      sections={[
        {
          heading: 'Expertly Installing Attractive, Long-lasting Wood Floors',
          paragraphs: [
            'Before we begin, your Total carpenter arranges a thorough consultation so we know exactly what you want and that you\'ll be completely happy with the finished floor. Our full service covers all the key steps from measurement through to aftercare advice.',
          ],
          bullets: [
            'Full Measurement Service — precise surveying to minimise waste and cost',
            'Consultation and Selection — help choosing the right species, grade and finish',
            'Subfloor Preparation — levelling and moisture-proofing for a lasting result',
            'Installation — expert fitting with close attention to pattern and finish',
            'Aftercare and Maintenance Advice — guidance on keeping your floor in perfect condition',
          ],
          imgSrc: 'https://images.unsplash.com/photo-1588854337236-6889d631faa8?w=800&q=80',
          imgAlt: 'Wood floor installation process',
          imgRight: false,
        },
        {
          heading: 'Solid Timber Floors',
          paragraphs: ['Solid timber flooring is a premium, long-lasting choice that adds natural beauty and character to any room. It can be sanded and refinished multiple times over its lifetime.'],
          bullets: [
            'Aesthetic Appeal — natural grain, warmth, and timeless good looks',
            'Hypoallergenic Properties — easier to keep dust and allergen-free than carpet',
            'Durability and Longevity — properly maintained, solid timber floors can last for generations',
          ],
          imgSrc: 'https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?w=800&q=80',
          imgAlt: 'Solid timber floor',
          imgRight: true,
        },
        {
          heading: 'Laminate Floors',
          paragraphs: ['Laminate offers the look of real wood at a more accessible price point. Modern laminate is highly realistic and far more resilient than older generations of the product.'],
          bullets: [
            'Cost-Effectiveness — beautiful results at a fraction of the price of solid timber',
            'Durability — scratch and stain resistant; ideal for busy households',
            'Versatility in Design — wide range of styles, colours and plank widths',
          ],
          imgSrc: 'https://images.unsplash.com/photo-1615971677499-5467cbab01d0?w=800&q=80',
          imgAlt: 'Laminate floor installation',
          imgRight: false,
        },
      ]}
      faqHeading="Wood Flooring – FAQ"
      faqs={[
        {
          q: 'Is my subfloor suitable for wood flooring?',
          a: 'Most subfloors can be prepared for wood flooring, but we always inspect first. Concrete subfloors need a damp-proof membrane; timber subfloors need to be level and secure. We\'ll identify any issues and advise before work starts.',
        },
        {
          q: 'Should I choose solid timber or laminate?',
          a: 'Solid timber is a premium investment that can be sanded and refinished repeatedly. Laminate is more budget-friendly, harder-wearing day-to-day, and comes in a huge range of styles. We\'re happy to walk you through the options during a free consultation.',
        },
        {
          q: 'Can wood flooring be fitted in kitchens and bathrooms?',
          a: 'Laminate and engineered wood can be suitable in kitchens with proper sealing and care. Fully solid timber is generally better avoided in high-moisture areas. We\'ll advise on the best choice for your specific room.',
        },
        {
          q: 'How long do wood floors last?',
          a: 'Solid timber floors can last decades and be refinished several times over their life. Quality laminate typically lasts 15–25 years with normal household use. Both are significantly more durable than carpet.',
        },
      ]}
    />
  )
}
