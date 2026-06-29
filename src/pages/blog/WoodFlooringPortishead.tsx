import BlogTemplate from './BlogTemplate'

export default function WoodFlooringPortishead() {
  return (
    <BlogTemplate
      h1="Wood Flooring Installation in Portishead Warmth, Character & Lasting Value"
      heroImg="https://images.unsplash.com/photo-1586105251261-72a756497a11?w=1600&q=80"
      heroImgAlt="Wood flooring installation in Portishead"
      intro="Wood flooring is one of the most popular and enduring home improvements and for good reason. It adds warmth, character and real value to any property. Total Carpentry Services fits solid timber and laminate floors across Portishead and North Somerset."
      secondaryImg="https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?w=800&q=80"
      secondaryImgAlt="Solid timber floor detail"
      sections={[
        {
          heading: 'The Benefits of Wood Flooring',
          paragraphs: [
            'Whether you choose solid timber or laminate, wood flooring offers benefits that carpet simply can\'t match:',
          ],
          bullets: [
            'Timeless aesthetic appeal suits any décor, from traditional to ultra-modern',
            'Easy to clean and maintain',
            'Hypoallergenic fewer places for dust and allergens to hide',
            'Durable and long-lasting quality wood floors can last decades',
            'Adds resale value to your property',
          ],
        },
        {
          heading: 'Our Wood Flooring Service',
          paragraphs: [
            'We offer a full supply-and-fit service for both solid timber and laminate floors. Our process starts with a consultation and full measurement, then moves through subfloor preparation, expert installation and aftercare advice.',
            'Not sure which type of flooring is right for you? We\'ll talk you through the options during a free consultation, taking into account your budget, lifestyle and the room in question.',
          ],
        },
        {
          heading: 'Herringbone, Plank and More',
          paragraphs: [
            'We install a wide range of wood flooring styles and patterns, including classic plank, herringbone and parquet. The choice of pattern can dramatically change the feel of a room and we\'re happy to show you examples from completed local projects.',
          ],
        },
      ]}
    />
  )
}
