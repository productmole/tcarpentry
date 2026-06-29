import ServiceTemplate from './ServiceTemplate'

export default function FittedWardrobes() {
  return (
    <ServiceTemplate
      heroH1="Fitted Wardrobes in Portishead"
      heroIntro="Fitted wardrobes turn awkward, wasted corners into stylish, hard-working storage. Total Carpentry Services designs and builds bespoke wardrobes across Portishead, tailoring every detail to your room and your décor from sleek sliding doors to generous walk-ins for durable, elegant storage that makes the most of your space."
      heroImg="/gallery/IMG_0518.jpg"
      heroImgAlt="Fitted wardrobe by Total Carpentry Services"
      sections={[
        {
          heading: 'Practical & Elegant Storage Solutions',
          paragraphs: [
            'Our fitted wardrobes are built to slot seamlessly into a specific space, rather than stand alone. Because they\'re made to your room\'s dimensions and style, they look cohesive and tidy and they handle tricky spots like sloping ceilings and loft alcoves beautifully.',
            'We offer a complete design-and-install service for handmade wardrobes at a fraction of the price of the big national firms, and we\'ll remove and dispose of your old units too.',
          ],
          imgSrc: '/gallery/IMG_0520.jpg',
          imgAlt: 'Fitted wardrobe interior by Total Carpentry Services',
          imgRight: false,
        },
        {
          heading: 'Wardrobe Designs to Suit Your Property',
          paragraphs: ['We offer five wardrobe styles to suit any bedroom and any budget:'],
          bullets: [
            'Sliding Door space-saving and sleek, ideal for smaller bedrooms',
            'Hinged Door classic and versatile, with a wide choice of panel styles',
            'Walk-In a dressing-room feel, maximising a larger room or alcove',
            'Corner makes clever use of corner spaces that standard furniture ignores',
            'Mirrored adds light and the illusion of space; particularly popular in smaller rooms',
          ],
          imgSrc: '/gallery/IMG_0521.jpg',
          imgAlt: 'Walk-in wardrobe design by Total Carpentry Services',
          imgRight: true,
        },
        {
          heading: 'The Advantages of Our Handmade Wardrobes',
          paragraphs: ['Every wardrobe we build is made to measure, using quality materials and craftsmanship that outlasts flat-pack alternatives.'],
          bullets: [
            'Improved Organisation custom internal layouts tailored to your wardrobe',
            'Aesthetic Appeal finishes and styles that complement your room perfectly',
            'Space-Saving Design built to fill every inch, including difficult alcoves',
            'Durability and Quality robust construction that stands the test of time',
            'Custom Features lighting, mirrors, pull-out drawers, shoe racks and more',
            'Reduced Clutter everything in its place for a calm, tidy bedroom',
          ],
          imgSrc: '/gallery/IMG_0526.jpg',
          imgAlt: 'Wardrobe interior details by Total Carpentry Services',
          imgRight: false,
        },
      ]}
      faqHeading="Fitted Wardrobes – FAQ"
      faqs={[
        {
          q: 'Which door type is best for a small bedroom?',
          a: 'Sliding doors are generally the best choice for smaller rooms, as they require no clearance in front of the wardrobe to open. They\'re also one of our most popular styles for a clean, contemporary look.',
        },
        {
          q: 'Can the internal layout be customised?',
          a: 'Absolutely. We design the internal layout around your wardrobe hanging rails, shelving, drawers, shoe storage, lighting and more so every centimetre works as hard as possible.',
        },
        {
          q: 'How durable are fitted wardrobes compared to flat-pack?',
          a: 'Significantly more so. Our wardrobes are built to the dimensions of your room using quality materials and solid fixing points. They don\'t shift, sag or deteriorate the way flat-pack units often do after a few years.',
        },
      ]}
    />
  )
}
