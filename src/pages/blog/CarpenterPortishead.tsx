import BlogTemplate from './BlogTemplate'

export default function CarpenterPortishead() {
  return (
    <BlogTemplate
      h1="Why It Pays to Find the Right Carpenter for Work in Portishead & Its Surrounds"
      heroImg="/gallery/IMG_0851.jpg"
      heroImgAlt="Carpentry work by Total Carpentry Services in Portishead"
      intro="Choosing the right carpenter can be the difference between a home improvement that truly transforms your space and one that disappoints. In and around Portishead, homeowners have come to rely on Total Carpentry Services for quality, reliability and workmanship that stands the test of time."
      secondaryImg="/gallery/IMG_0852.jpg"
      secondaryImgAlt="Carpentry detail by Total Carpentry Services"
      sections={[
        {
          heading: 'The Benefits of Hiring Experienced Carpenters',
          paragraphs: [
            'Skilled carpentry is as much about experience and judgement as it is about tools and materials. Here\'s why hiring a time-served, local carpenter like Total Carpentry Services makes a real difference:',
          ],
        },
        {
          heading: 'How We Can Help',
          paragraphs: ['Our team brings the following advantages to every project:'],
          bullets: [
            'Expert Craftsmanship precision-built results that look superb and last for years',
            'Customised Solutions every job is tailored to your home, your taste and your budget',
            'Increased Property Value well-finished carpentry work consistently adds value at resale',
            'Efficiency and Timeliness we plan carefully and stick to agreed timescales',
            'Safety Considerations all structural work is carried out safely and to building regulations',
            'A Wide Range of Services from skirting boards to full kitchen and wardrobe installations',
          ],
        },
        {
          paragraphs: [
            'As a family-run business established in 2014, we\'ve built a reputation for honest, high-quality work across Portishead, Clevedon, Nailsea and the wider North Somerset area. Every project comes with a 1-year workmanship guarantee and the confidence of over 25 years of combined experience.',
            'If you\'re looking for a reliable, skilled carpenter in Portishead, we\'d love to hear from you. Get in touch for a free estimate.',
          ],
        },
      ]}
    />
  )
}
