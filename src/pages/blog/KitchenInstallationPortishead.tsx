import BlogTemplate from './BlogTemplate'

export default function KitchenInstallationPortishead() {
  return (
    <BlogTemplate
      meta={{
        title: 'What a Local Joiner Brings to a Kitchen Fit | Total Carpentry',
        description:
          'A showroom sells the units; a joiner makes them fit. Here’s what a local Portishead carpenter brings to a kitchen installation that a national supplier can’t.',
      }}
      kicker="Kitchen installation"
      readTime="4 min"
      h1="What a local joiner brings to a kitchen fit"
      featureImg="/img/kitchen-fit-portishead-01.jpg"
      featureImgAlt="Fitted kitchen completed by Total Carpentry in a Portishead home"
      intro="The kitchen you saw in the showroom was assembled on a flat floor between square walls. Yours won’t be. Closing that gap — between the render and the reality — is the whole job."
      sections={[
        {
          heading: 'The units are the easy part',
          paragraphs: [
            'Screwing carcasses together is straightforward. Making a run of them sit dead level against a bowed wall, scribing an end panel to a wonky corner, and lining every door and drawer gap so it reads as one clean face — that’s the craft, and it’s what you notice every day for the next fifteen years.',
          ],
          bullets: [
            'Free quote and a proper measure before anything is ordered',
            'A choice of layouts and door styles to suit your room',
            'Other trades brought in and coordinated around the fit',
            'Site sheeted up and left clean at the end of each day',
          ],
        },
        {
          heading: 'Fitted or bespoke — and where your money goes',
          paragraphs: [
            'We install standard fitted ranges and fully bespoke kitchens alike. A good fitted range, arranged well and installed with care, gets most people exactly where they want to be for a lot less than bespoke. Where a room is genuinely awkward, or you want a size or finish off-catalogue, that’s when made-to-measure earns its cost — and we’ll tell you which camp your kitchen is in.',
            'Already bought your units, or planning to? We’re happy to fit those too, or point you at suppliers whose cabinets play nicely with a careful install.',
          ],
        },
        {
          heading: 'Begin with a free quote',
          paragraphs: [
            'If a new kitchen is on the cards anywhere around Portishead, let’s start with a visit. We’ll measure up, talk it through, and give you a clear, no-obligation price.',
          ],
        },
      ]}
    />
  )
}
