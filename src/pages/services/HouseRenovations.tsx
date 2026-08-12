import ServiceTemplate from './ServiceTemplate'

export default function HouseRenovations() {
  return (
    <ServiceTemplate
      meta={{
        title: 'House Renovations in Portishead | Total Carpentry',
        description:
          'Internal renovation carpentry in Portishead — from first fix to finishing joinery, plus non-structural alterations planned with the right advice.',
      }}
      label="House Renovations"
      heroH1="Reworking rooms so the whole house earns its keep"
      heroLead="Some homes just need the layout rethought and the joinery brought up to scratch. We take renovations from first fix through to the last bit of trim."
      heroImg="/img/home-renovation-01.jpg"
      heroImgAlt="Interior mid-renovation with new joinery by Total Carpentry in Portishead"
      atAGlance={['First fix to finish', 'Structural advice first', 'One trusted point of contact']}
      sections={[
        {
          heading: 'A joiner’s approach to the whole room',
          paragraphs: [
            'Renovation work is where we spend most of our time. New kitchens, built-in storage, fresh trim and better-planned rooms all pull together when one carpenter is thinking about how each part meets the next. The goal is simple: a home that is easier and nicer to live in.',
            'We fit floors as part of that too — a good timber or laminate floor tends to sit near the top of most renovation wish lists, and it changes the feel of a room more than almost anything else.',
          ],
          imgSrc: '/img/home-renovation-02.jpg',
          imgAlt: 'Renovated room with new skirting and joinery by Total Carpentry',
          caption: 'One trade thinking about how every part meets the next.',
        },
        {
          heading: 'The finishing carpentry',
          paragraphs: ['This is the joinery that makes a refurbished room feel finished rather than merely painted. We plan each job to keep the mess down and the timeline honest.'],
          bullets: [
            'Alcove shelving and built-in cupboards',
            'Replacement windows and doors',
            'Skirting, architrave and other trim',
            'Timber and laminate flooring',
            'Staircase work — treads, risers, spindles and handrails',
            'Stud and partition walls',
            'Kitchen cabinetry',
          ],
          imgSrc: '/img/home-renovation-03.jpg',
          imgAlt: 'Detail of finishing carpentry during a house renovation',
        },
        {
          heading: 'Changing the layout',
          paragraphs: ['Taking a wall out or reworking how rooms connect can transform how a home feels day to day. We handle non-structural changes ourselves and bring in an engineer and builder the moment anything load-bearing is involved — never the other way round.'],
          bullets: [
            'Opening up rooms where the wall is non-structural',
            'Fitting wardrobes and built-in storage into the new layout',
            'New door openings, linings and frames',
            'Loft hatches, including drop-down ladders',
          ],
        },
      ]}
      faqHeading="House renovations — your questions"
      faqs={[
        {
          q: 'Renovation or alteration — what’s the difference?',
          a: 'A renovation freshens and upgrades what is already there: new flooring, replaced joinery, tidier trim. An alteration changes the layout or structure, like removing a wall to open two rooms into one. We take on both, and we are clear about which one your job is.',
        },
        {
          q: 'How do you handle structural work safely?',
          a: 'Before a single wall comes down we establish whether it is load-bearing and what support — a steel beam, say — needs to go in. Where that is the case we work alongside a structural engineer and builder so it is signed off properly.',
        },
        {
          q: 'Will the work add value?',
          a: 'Usually. Kitchens, flooring and well-made built-in storage are among the improvements that reliably pay back at sale time, and a tidy, well-finished home simply shows better to buyers.',
        },
        {
          q: 'How much upheaval should I expect?',
          a: 'We plan around keeping you in the house wherever we can, sequence the work to limit the disruption, and sheet up and contain dust as we go. You will know the schedule before we start, not as we go along.',
        },
      ]}
    />
  )
}
