import BlogTemplate from './BlogTemplate'

export default function KitchenInstallationPortishead() {
  return (
    <BlogTemplate
      h1="Kitchen Installation in Portishead Creating the Heart of Your Home"
      heroImg="/gallery/IMG_0320.jpg"
      heroImgAlt="Kitchen installation in Portishead by Total Carpentry Services"
      intro="The kitchen is the most-used room in most homes, and a well-designed installation can transform daily life. Total Carpentry Services provides expert kitchen installations for homeowners across Portishead, Clevedon, Nailsea and the wider North Somerset area."
      secondaryImg="/gallery/IMG_0322.jpg"
      secondaryImgAlt="Fitted kitchen detail by Total Carpentry Services"
      sections={[
        {
          heading: 'Why Hire a Local Portishead Carpenter for Your Kitchen?',
          paragraphs: [
            'A national kitchen company might promise a slick showroom experience, but a skilled local carpenter delivers something far more personal attention to detail, a genuine interest in your project, and the flexibility to solve problems as they arise.',
          ],
          bullets: [
            'Free estimates and consultations',
            'Wide choice of door styles and layouts',
            'Coordinated installation including all trades',
            'Careful site protection and tidy working',
            '1-year workmanship guarantee on every kitchen',
          ],
        },
        {
          heading: 'Fitted Kitchens and Bespoke Kitchens',
          paragraphs: [
            'We install both fitted kitchens (using quality, standard-sized units arranged to suit your space) and fully bespoke kitchens built to your exact measurements and specifications. Most clients find that a well-specified fitted kitchen, expertly installed, is hard to distinguish from bespoke at a much lower cost.',
            'We\'re happy to work with kitchen units you\'ve already purchased, or we can advise on quality suppliers who work well with our installation methods.',
          ],
        },
        {
          heading: 'Start With a Free Estimate',
          paragraphs: [
            'If you\'re planning a kitchen in Portishead or the surrounding area, we\'d love to help. Get in touch to arrange a free, no-obligation visit and estimate.',
          ],
        },
      ]}
    />
  )
}
