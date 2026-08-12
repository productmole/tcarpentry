import BlogTemplate from './BlogTemplate'

export default function WoodFlooringPortishead() {
  return (
    <BlogTemplate
      meta={{
        title: 'Solid Timber or Laminate? Choosing a Floor | Total Carpentry',
        description:
          'Solid timber or laminate for your Portishead floor? A working joiner compares cost, wear, moisture and lifespan so you can pick the right one for the room.',
      }}
      kicker="Wood flooring"
      readTime="4 min"
      h1="Solid timber or laminate? Choosing a floor that lasts"
      featureImg="/img/wood-floor-install-01.jpg"
      featureImgAlt="Newly laid wood floor in a Portishead room by Total Carpentry"
      intro="There’s no single right answer here, and anyone who gives you one is selling something. The better question is which floor suits this room, this budget and this household — so let’s compare them honestly."
      sections={[
        {
          heading: 'What they share',
          paragraphs: [
            'Whichever way you go, a wood or wood-effect floor beats carpet on the things that tend to matter: it wipes clean, it doesn’t trap dust and allergens, it shrugs off the daily traffic of a family home, and it lifts the look of a room the moment it’s down.',
          ],
        },
        {
          heading: 'Where they differ',
          paragraphs: ['This is the part worth thinking about before you choose:'],
          bullets: [
            'Cost — laminate is markedly cheaper to buy and to fit',
            'Longevity — solid timber can be sanded and refinished for decades',
            'Wear — good laminate resists scratches and scuffs day to day',
            'Moisture — laminate and engineered boards cope better near splashes',
            'Feel — nothing quite matches real timber underfoot and in the grain',
          ],
        },
        {
          heading: 'The bit under the boards',
          paragraphs: [
            'Whatever you lay, the floor is only as good as what’s beneath it. A concrete base usually needs a damp-proof layer; a timber base needs to be sound and level. Skip that and even the best boards will telegraph every dip and lift at the joints within a year. It’s the least glamorous stage and the one that decides everything.',
          ],
        },
        {
          heading: 'Pattern changes the room',
          paragraphs: [
            'Straight planks read calm and modern. Herringbone or parquet brings a period richness and draws the eye. The layout you choose shifts the whole feel of a space as much as the timber does — and we’re glad to show you finished local examples of each before you decide. Ask for a free consultation and we’ll weigh it all up against your room.',
          ],
        },
      ]}
    />
  )
}
