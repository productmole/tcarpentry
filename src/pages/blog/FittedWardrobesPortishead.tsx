import BlogTemplate from './BlogTemplate'

export default function FittedWardrobesPortishead() {
  return (
    <BlogTemplate
      meta={{
        title: 'Fitted Wardrobes: Reclaiming Dead Space | Total Carpentry',
        description:
          'Freestanding wardrobes waste the space around them. Here’s how a built-in run in a Portishead bedroom reclaims eaves, corners and the gap up to the ceiling.',
      }}
      kicker="Fitted wardrobes"
      readTime="4 min"
      h1="Fitted wardrobes: turning dead corners into storage"
      featureImg="/img/fitted-wardrobe-01.jpg"
      featureImgAlt="Built-in bedroom wardrobe with panelled doors by Total Carpentry"
      intro="Stand a shop-bought wardrobe against a wall and count the wasted space: the gap on top, the shadow down the side, the corner it can’t reach. A built-in wardrobe exists to swallow all of it."
      sections={[
        {
          heading: 'Why built-in beats freestanding',
          paragraphs: [
            'The difference is simple: a freestanding unit is a box that happens to be in your room, while a fitted wardrobe is made to the room itself. It runs wall to wall and floor to ceiling, follows the line of a sloping loft ceiling, and turns the awkward corner that catalogue furniture just ignores.',
          ],
          bullets: [
            'Cut to your walls for a flush, built-in look',
            'Internals arranged around your clothes — rails, drawers, shelves, shoe storage',
            'Doors to suit the room: sliding, hinged, mirrored or glazed',
            'Walk-in layouts where a box room or deep recess allows',
            'Your old units removed and taken away',
          ],
        },
        {
          heading: 'How the process runs',
          paragraphs: [
            'It starts with a visit. We measure the space properly, talk through how you use the room and what you need to store, then draw it up. From there we build and fit to a standard that has nothing to do with flat-pack — solid materials, fixed back to the wall, made to stay true.',
            'Being based in Portishead, we can usually move quicker than a national bedroom company, and you’re dealing with the person making it rather than a call centre.',
          ],
        },
        {
          heading: 'Start with a free design visit',
          paragraphs: [
            'If a fitted wardrobe is on your mind, the first step costs nothing. We’ll come and look at the space, tell you honestly what’s possible, and leave you to think it over — no obligation, no hard sell.',
          ],
        },
      ]}
    />
  )
}
