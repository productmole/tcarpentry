import BlogTemplate from './BlogTemplate'

export default function HouseRenovationsPortishead() {
  return (
    <BlogTemplate
      meta={{
        title: 'Renovating a Portishead Home Without the Chaos | Total Carpentry',
        description:
          'A renovation is as much about sequencing and dust control as joinery. Here’s how Total Carpentry runs internal renovation work in Portishead homes, room by room.',
      }}
      kicker="House renovations"
      readTime="5 min"
      h1="Renovating a Portishead home without the chaos"
      featureImg="/img/home-renovation-01.jpg"
      featureImgAlt="Room part-way through a renovation with new joinery by Total Carpentry"
      intro="The dread of renovating usually isn’t the result — it’s the mess, the noise and the not-knowing-what-happens-next. Most of that is a planning problem, and planning is the part we take seriously."
      sections={[
        {
          heading: 'It’s the order of things that keeps it calm',
          paragraphs: [
            'A renovation goes sideways when trades trip over each other and nobody owns the sequence. Because one carpenter runs our jobs from first fix to final trim, the steps line up: structure and framing first, floors and units next, trim and finishing last, with the messy work grouped so you’re not living in a building site for a fortnight longer than you need to.',
          ],
        },
        {
          heading: 'The carpentry that pulls a room together',
          paragraphs: ['A refurbished room only feels finished when the joinery is right. This is the work that does it:'],
          bullets: [
            'Built-in shelving and cupboards in the alcoves',
            'Fresh skirting and architrave throughout',
            'Doors hung true, with new linings where needed',
            'Staircase work — treads, risers and spindles',
            'Stud walls to divide or reshape a space',
            'New timber or laminate flooring across the floor',
          ],
        },
        {
          heading: 'Taking a wall out — carefully',
          paragraphs: [
            'Opening two rooms into one can change a house completely, but it’s not a job to guess at. We establish whether a wall is load-bearing before anything moves, and where it is, an engineer specifies the support and a builder puts the beam in. Only then does the fun part — the joinery — begin.',
          ],
        },
        {
          heading: 'Value that stays in the house',
          paragraphs: [
            'Kitchens, flooring and well-made storage are the improvements that tend to hold their value at sale time, and a tidy, considered home simply shows better. We’ve done everything from a single tired room to a whole-house overhaul across Portishead and the surrounding villages, always with a free quote to begin with.',
          ],
        },
      ]}
    />
  )
}
