import ServiceTemplate from './ServiceTemplate'

export default function KitchenInstallations() {
  return (
    <ServiceTemplate
      heroH1="Kitchen Installations in Portishead"
      heroIntro="A thoughtfully designed kitchen changes daily life for the better. As your local Portishead carpenter, Total Carpentry Services builds tailored installations that pair smart layouts with fine craftsmanship — clever storage, seamless finishes, and a precise result that suits your home and how you live."
      heroImg="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&q=80"
      heroImgAlt="Modern fitted kitchen installation"
      sections={[
        {
          heading: 'Stunning Spaces for All Property Styles',
          paragraphs: [
            'When it comes to the heart of the home, a skilled carpenter makes all the difference. Whether you picture a modern fitted kitchen or a traditional bespoke layout built around your needs, we can make it happen — and we\'re happy to share examples of local projects, plus the flooring and wider renovations we\'ve completed alongside them.',
          ],
          imgSrc: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
          imgAlt: 'Fitted kitchen',
          imgRight: false,
        },
        {
          heading: 'Kitchen Designs & Layouts',
          paragraphs: ['We work with a range of kitchen layouts to suit every home and cooking style. During your free consultation we\'ll help you find the best configuration for your space.'],
          bullets: [
            'Galley — efficient and streamlined, ideal for narrower kitchens',
            'L-Shaped — versatile and sociable, works well in open-plan spaces',
            'U-Shaped — maximum worktop and storage, perfect for keen cooks',
            'Peninsula — a practical compromise between island and standard layouts',
            'Island — the statement centrepiece; ideal for larger open-plan kitchens',
          ],
          imgSrc: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80',
          imgAlt: 'Kitchen layout options',
          imgRight: true,
        },
        {
          heading: 'Kitchen Doors',
          paragraphs: ['The door style sets the whole tone of a kitchen. We offer a wide range of door designs to suit traditional, contemporary or transitional schemes.'],
          bullets: [
            'Shaker — a timeless choice; clean lines that suit both modern and classic kitchens',
            'Vinyl-Wrapped — budget-friendly, available in hundreds of colours and effects',
            'In-Frame — a premium, furniture-grade look for a truly bespoke feel',
            'Glass-Front — adds light and visual interest; ideal for display units',
          ],
          imgSrc: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80',
          imgAlt: 'Kitchen door styles',
          imgRight: false,
        },
        {
          heading: 'Fitted Kitchen Installation vs Bespoke Kitchens',
          paragraphs: [
            'A fitted kitchen uses a combination of standard-sized units arranged to suit your space — a cost-effective approach with a wide range of styles and finishes. A bespoke kitchen is built entirely to measure, offering unlimited design freedom at a higher price point.',
            'We offer both options and will help you find the right balance of budget, style and practicality. Many of our clients find that a well-specified fitted kitchen, installed by an expert, is indistinguishable from bespoke at a fraction of the cost.',
          ],
          imgSrc: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80',
          imgAlt: 'Bespoke kitchen installation',
          imgRight: true,
        },
      ]}
      faqHeading="Kitchen Installations – FAQ"
      faqs={[
        {
          q: 'How long does a kitchen installation take?',
          a: 'Most kitchen installations take between 3 and 10 working days depending on the complexity of the project, the size of the kitchen, and whether any structural changes are required. We\'ll give you a clear timeline during your free estimate.',
        },
        {
          q: 'Can you advise on kitchen layout and the work triangle?',
          a: 'Yes. The kitchen work triangle (cooker, sink, fridge) is a key principle we apply to every layout to ensure the kitchen is efficient and comfortable to use. We\'ll discuss the best configuration for your space during consultation.',
        },
        {
          q: 'Is a bespoke kitchen worth the extra cost?',
          a: 'For kitchens with unusual dimensions, very specific requirements, or where a premium finish is paramount, bespoke is often worth the investment. For most projects, however, a quality fitted kitchen installed by an experienced carpenter delivers outstanding results.',
        },
        {
          q: 'Do you handle plumbing and electrics?',
          a: 'We coordinate all aspects of a kitchen installation. Where specialist trades are required (plumbing, gas, electrics), we work with trusted local tradespeople. One point of contact for the whole job.',
        },
      ]}
    />
  )
}
