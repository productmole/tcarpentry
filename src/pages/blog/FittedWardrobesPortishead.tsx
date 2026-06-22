import BlogTemplate from './BlogTemplate'

export default function FittedWardrobesPortishead() {
  return (
    <BlogTemplate
      h1="Fitted Wardrobes in Portishead — Transform Your Bedroom Storage"
      heroImg="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80"
      heroImgAlt="Fitted wardrobes in a bedroom"
      intro="A well-designed fitted wardrobe doesn't just store your clothes — it transforms how your bedroom feels and functions. Total Carpentry Services designs and installs bespoke fitted wardrobes for homeowners across Portishead and North Somerset."
      secondaryImg="https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80"
      secondaryImgAlt="Walk-in wardrobe interior"
      sections={[
        {
          heading: 'Why Choose Fitted Wardrobes?',
          paragraphs: [
            'Unlike freestanding furniture, fitted wardrobes are built to the exact dimensions of your room — making the most of every centimetre, including awkward alcoves, sloping ceilings and tight corners.',
          ],
          bullets: [
            'Made-to-measure for a seamless, built-in look',
            'Customisable internal layouts — hanging rails, shelves, drawers, shoe racks, lighting',
            'Wide choice of door styles — sliding, hinged, mirrored, glass-front',
            'Walk-in designs available for larger rooms',
            'Removes and disposes of existing units',
          ],
        },
        {
          heading: 'Our Fitted Wardrobe Service in Portishead',
          paragraphs: [
            'We offer a complete design-and-install service from initial consultation through to the finished wardrobe. We\'ll visit your home, take measurements, discuss your style preferences and internal storage requirements, then build and fit everything to the highest standard.',
            'Our fitted wardrobes are built to last, using quality materials and solid construction methods — far removed from flat-pack alternatives. And because we\'re a local Portishead business, we can often turn projects around faster than national firms.',
          ],
        },
        {
          heading: 'Get a Free Design Consultation',
          paragraphs: [
            'If you\'re considering fitted wardrobes in your Portishead home, the first step is a free consultation. We\'ll come to you, take a look at the space and discuss what\'s possible — with no obligation.',
          ],
        },
      ]}
    />
  )
}
