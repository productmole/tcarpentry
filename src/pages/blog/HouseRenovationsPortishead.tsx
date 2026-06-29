import BlogTemplate from './BlogTemplate'

export default function HouseRenovationsPortishead() {
  return (
    <BlogTemplate
      h1="House Renovations in Portishead Making Your Home Work Harder for You"
      heroImg="/gallery/IMG_0862.jpg"
      heroImgAlt="House renovation in Portishead by Total Carpentry Services"
      intro="Whether you're opening up a ground floor, refreshing tired finishes or adding bespoke storage throughout, a well-executed renovation can completely transform how you live. Total Carpentry Services delivers thoughtful house renovations across Portishead and North Somerset."
      secondaryImg="/gallery/IMG_0864.jpg"
      secondaryImgAlt="Renovation carpentry work by Total Carpentry Services"
      sections={[
        {
          heading: 'What Does a House Renovation Involve?',
          paragraphs: [
            'A house renovation can mean many things from a single room refresh to a whole-home transformation. At Total Carpentry Services, we handle all internal carpentry aspects of renovation projects.',
          ],
          bullets: [
            'Custom built-in shelving and alcove units',
            'New skirting boards and architraves',
            'Door hanging and door frame replacement',
            'Staircase refurbishment (treads, risers, balustrades)',
            'Partition and stud wall construction',
            'New wood or laminate flooring throughout',
          ],
        },
        {
          heading: 'Adding Value Through Renovation',
          paragraphs: [
            'A well-planned renovation doesn\'t just make your home more enjoyable to live in it can significantly increase its market value. Kitchens, flooring and bespoke storage are among the improvements that consistently deliver a strong return on investment.',
            'We\'ve completed renovation projects ranging from single-room refreshes to whole-home overhauls across Portishead, Clevedon, Nailsea and the wider North Somerset area.',
          ],
        },
        {
          heading: 'Free Estimates for Portishead Renovations',
          paragraphs: [
            'Every renovation starts with a free estimate. We\'ll visit your property, discuss your ideas, and provide clear, honest pricing with no hidden surprises. All renovation work comes with our 1-year workmanship guarantee.',
          ],
        },
      ]}
    />
  )
}
