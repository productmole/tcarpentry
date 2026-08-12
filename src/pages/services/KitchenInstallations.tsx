import ServiceTemplate from './ServiceTemplate'

export default function KitchenInstallations() {
  return (
    <ServiceTemplate
      meta={{
        title: 'Kitchen Installations in Portishead | Total Carpentry',
        description:
          'Portishead joiners fitting kitchens the careful way — layout planning, cabinet building and finishing, trades coordinated.',
      }}
      label="Kitchen Installations"
      heroH1="Kitchens installed professionally, from first cabinet to final trim"
      heroLead="A kitchen is the room a household runs on. We set out the layout, build and hang the units, then chase down every scribe and mitre so the finished room reads tight and works hard for years."
      heroImg="/img/kitchen-fit-portishead-01.jpg"
      heroImgAlt="Fitted kitchen with pale cabinetry completed by Total Carpentry in a Portishead home"
      atAGlance={['Free measure & quote', 'Fitted or fully bespoke', 'Other trades coordinated']}
      sections={[
        {
          heading: 'Made to suit the house you actually have',
          paragraphs: [
            'Whether your home leans modern or period, the units still have to meet real walls, real floors and real ceilings — rarely any of them square. That is where a joiner earns their keep. We handle both slick handleless schemes and softer in-frame looks, packing and scribing each run so it sits flush against what is really there.',
            'Ask and we will point you to finished kitchens nearby, along with the flooring and wider renovation work we often wrap into the same job.',
          ],
          imgSrc: '/img/kitchen-fit-portishead-02.jpg',
          imgAlt: 'Run of fitted kitchen units and worktop installed by Total Carpentry',
          caption: 'A recent Portishead kitchen, set out and installed in-house.',
        },
        {
          heading: 'Settling on a layout',
          paragraphs: [
            'The shape of the room decides most of it. At your free visit we will walk through the options and sketch the one that keeps the cooking, washing and storage within easy reach.',
          ],
          bullets: [
            'Galley — two facing runs; tidy and quick to work in when width is tight',
            'L-shaped — wraps two walls and opens the room up to a table or seating',
            'U-shaped — three sides of worktop and cupboards for cooks who need the space',
            'Peninsula — an island’s sociability without needing the floor an island demands',
            'Island — a central block for prep, seating or a second sink in a larger room',
          ],
        },
        {
          heading: 'Doors set the whole tone',
          paragraphs: [
            'Carcasses are largely hidden; doors are what you see and touch every day. We fit across the full range so the finish matches the room rather than a showroom.',
          ],
          bullets: [
            'Shaker — a simple framed panel at home in a cottage or a new build',
            'Vinyl-wrapped — the widest choice of colours and textures for the money',
            'In-frame — furniture-grade joinery where you want a proper handmade feel',
            'Glazed — light through the upper cabinets, handy for display runs',
          ],
          imgSrc: '/img/kitchen-doors-01.jpg',
          imgAlt: 'Close detail of fitted kitchen cabinet doors and handles',
        },
        {
          heading: 'Fitted or bespoke — the honest answer',
          paragraphs: [
            'A fitted kitchen uses standard cabinet sizes arranged around your room, which keeps the cost sensible and the choice broad. A bespoke kitchen is drawn and made entirely to measure, with the freedom — and the price — that brings.',
            'We do both, and we will tell you plainly where the extra spend earns its place and where it does not. On most jobs a well-specified fitted kitchen, installed with care, is hard to tell from bespoke once the filler panels and end scribes are on.',
          ],
          imgSrc: '/img/bespoke-kitchen-01.jpg',
          imgAlt: 'Bespoke kitchen cabinetry with fitted end panels by Total Carpentry',
        },
      ]}
      faqHeading="Kitchen installations — your questions"
      faqs={[
        {
          q: 'How long will my kitchen take?',
          a: 'Most fits run between three and ten working days. It depends on the size of the room, how much is being replaced and whether walls, plumbing or wiring need to move first. You will get a realistic timeline with your quote, not a hopeful one.',
        },
        {
          q: 'Will you help me plan where everything goes?',
          a: 'Yes — that is part of the job. We keep the sink, hob and fridge within an easy few steps of each other so the room is comfortable to cook in, and we plan around your appliances and how you actually use the space.',
        },
        {
          q: 'Is bespoke worth paying for?',
          a: 'Sometimes. If the room is an awkward shape, you want an unusual size, or a flawless furniture finish is the whole point, bespoke pays off. For most kitchens, a good fitted range installed well gets you there for a lot less.',
        },
        {
          q: 'Do you sort the plumbing and electrics too?',
          a: 'We run the job end to end and bring in trusted local plumbers, gas engineers and electricians where their tickets are needed. You deal with one point of contact rather than juggling five.',
        },
      ]}
    />
  )
}
