import ServiceTemplate from './ServiceTemplate'

export default function WoodFlooring() {
  return (
    <ServiceTemplate
      meta={{
        title: 'Wood Flooring Installation in Portishead | Total Carpentry',
        description:
          'Solid timber and laminate floors supplied and fitted across Portishead. Careful subfloor prep, precise laying and aftercare advice.',
      }}
      label="Wood Flooring Installations"
      heroH1="Timber and laminate floors"
      heroLead="A floor sets the character of a room and takes a daily beating, so it pays to prep the base right and lay it precisely. We fit solid timber and laminate across Portishead and the villages around it."
      heroImg="/img/wood-floor-install-01.jpg"
      heroImgAlt="Newly laid wood flooring in a Portishead room fitted by Total Carpentry"
      atAGlance={['Supply & fit', 'Subfloor prepared properly', 'Pattern work available']}
      sections={[
        {
          heading: 'A floor is only as good as its groundwork',
          paragraphs: [
            'Before a single board goes down we sit down with you, measure up and make sure the plan matches what you are picturing. From there the job runs through a set of steps that decide whether a floor stays flat and quiet or lifts and creaks a year on.',
          ],
          bullets: [
            'Measured survey — accurate quantities so you are not paying for waste',
            'Choosing together — species, grade, board width and finish to suit the room',
            'Subfloor prep — levelling and a damp-proof layer where the base needs it',
            'Laying — set out with care so the pattern runs true and the joints stay tight',
            'Aftercare — plain guidance on keeping the floor looking right',
          ],
          imgSrc: '/img/wood-floor-install-02.jpg',
          imgAlt: 'Wood flooring being laid and set out by Total Carpentry',
          caption: 'The prep nobody sees is what keeps a floor flat and quiet.',
        },
        {
          heading: 'Solid timber',
          paragraphs: ['A real wood floor is the premium choice — warm underfoot, full of grain and character, and able to be sanded back and refinished several times across its life.'],
          bullets: [
            'Genuine grain and warmth that manufactured floors only imitate',
            'Kinder for allergies than carpet, with nowhere for dust to settle in',
            'Looked after, it can outlast the people who laid it',
          ],
          imgSrc: '/img/timber-floor-detail-01.jpg',
          imgAlt: 'Solid timber floor detail showing natural grain',
        },
        {
          heading: 'Laminate',
          paragraphs: ['Laminate gives you the look of timber for a good deal less, and today’s boards are convincing and tough — a sensible pick for busy family rooms and hallways.'],
          bullets: [
            'Far kinder on the budget than solid timber',
            'Shrugs off scratches, spills and daily traffic',
            'A huge spread of tones, plank widths and textures to choose from',
          ],
          imgSrc: '/img/laminate-floor-01.jpg',
          imgAlt: 'Laminate wood-effect flooring fitted by Total Carpentry',
        },
      ]}
      faqHeading="Wood flooring — your questions"
      faqs={[
        {
          q: 'Is my subfloor ready for a wood floor?',
          a: 'Most are, once prepped — but we always look first. A concrete base usually wants a damp-proof membrane; a timber base needs to be sound and level. We flag anything that needs sorting and tell you before we start, not after.',
        },
        {
          q: 'Solid timber or laminate?',
          a: 'Solid timber is the long-term investment you can sand and refresh for decades. Laminate costs less, takes day-to-day knocks well, and comes in a big range of looks. We will talk you through both against your budget and the room during a free visit.',
        },
        {
          q: 'Can it go in a kitchen or bathroom?',
          a: 'Laminate and engineered boards can cope in a kitchen if they are sealed and looked after. Fully solid timber is best kept out of steamy, splash-prone rooms. We will recommend the right option for the specific space.',
        },
        {
          q: 'How long will the floor last?',
          a: 'A solid timber floor can run for decades and be refinished several times along the way. Good laminate typically gives fifteen to twenty-five years of normal household use. Either way, both comfortably outlast carpet.',
        },
      ]}
    />
  )
}
