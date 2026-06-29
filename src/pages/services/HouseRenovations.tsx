import ServiceTemplate from './ServiceTemplate'

export default function HouseRenovations() {
  return (
    <ServiceTemplate
      heroH1="House Renovations in Portishead"
      heroIntro="A well-planned renovation can completely reshape how you live. Total Carpentry Services delivers considered upgrades that improve comfort, function and style from structural changes to the finest finishing details always working to your vision while adding lasting value to your Portishead home."
      heroImg="/gallery/IMG_0862.jpg"
      heroImgAlt="House renovation by Total Carpentry Services"
      sections={[
        {
          heading: 'Reimagining Homes Through Thoughtful Home Renovation',
          paragraphs: [
            'Home renovations are one of our specialities. From new kitchens to bespoke wardrobes, we focus on creating the right interior for your home. As a trusted local carpenter we\'re set on getting the result you want making spaces more usable and more comfortable.',
            'We\'re also experienced flooring fitters, and beautiful wood floors top many local renovation wish lists, bringing warmth and character to any room.',
          ],
          imgSrc: '/gallery/IMG_0863.jpg',
          imgAlt: 'Renovation work by Total Carpentry Services',
          imgRight: false,
        },
        {
          heading: 'Renovations',
          paragraphs: ['We handle all aspects of internal renovation carpentry, from the first fix through to the finest finishing details. Every project is planned carefully to minimise disruption and deliver a lasting result.'],
          bullets: [
            'Custom built-in shelving',
            'Window & door replacement',
            'Skirting boards & architraves',
            'Flooring installation',
            'Staircase refurbishment (treads, risers, balustrades, handrails)',
            'Partition / stud walls',
            'Kitchen cabinetry',
          ],
          imgSrc: '/gallery/IMG_0864.jpg',
          imgAlt: 'Renovation carpentry details by Total Carpentry Services',
          imgRight: true,
        },
        {
          heading: 'Alterations',
          paragraphs: ['Opening up a space or reconfiguring a layout can make a huge difference to how a home feels and functions. We handle structural alterations with care, always advising on structural requirements before work begins.'],
          bullets: [
            'Open-plan conversions (removing non-load-bearing walls)',
            'Wardrobe installations',
            'Door replacements & new door frames',
            'Loft hatch installation',
          ],
          imgSrc: '/gallery/IMG_0865.jpg',
          imgAlt: 'Structural alteration work by Total Carpentry Services',
          imgRight: false,
        },
      ]}
      faqHeading="House Renovations – FAQ"
      faqs={[
        {
          q: 'What\'s the difference between a renovation and an alteration?',
          a: 'A renovation typically refreshes or improves an existing space new flooring, updated joinery, fresh skirting boards and so on. An alteration changes the structure or layout, such as removing a partition wall to create an open-plan space. We handle both.',
        },
        {
          q: 'Do you manage structural work safely?',
          a: 'Yes. Before any wall is removed we advise on whether it is load-bearing and what structural support (e.g. a steel RSJ) is required. We work alongside structural engineers and builders when needed.',
        },
        {
          q: 'Will a renovation add value to my home?',
          a: 'Generally, yes. Kitchen, bathroom and flooring upgrades consistently rank among the best-value home improvements. A well-finished renovation can meaningfully increase a property\'s market value and saleability.',
        },
        {
          q: 'How disruptive will the work be?',
          a: 'We plan every project to minimise disruption. For most renovation work you can remain in your home. We\'ll talk through the schedule with you in advance and keep dust and mess as contained as possible.',
        },
      ]}
    />
  )
}
