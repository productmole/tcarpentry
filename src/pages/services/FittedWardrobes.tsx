import ServiceTemplate from './ServiceTemplate'

export default function FittedWardrobes() {
  return (
    <ServiceTemplate
      meta={{
        title: 'Fitted Wardrobes in Portishead | Total Carpentry',
        description:
          'Built-in wardrobes designed and made to measure in Portishead. Sliding, hinged, walk-in and corner options that use awkward alcoves and eaves.',
      }}
      label="Fitted Wardrobes"
      heroH1="Bedroom storage built into the space you’ve got"
      heroLead="Freestanding furniture leaves gaps; a built-in wardrobe fills them. We design and make wardrobes to the exact run of your wall, tucking into sloping eaves and dead corners so nothing is wasted."
      heroImg="/img/fitted-wardrobe-01.jpg"
      heroImgAlt="Built-in bedroom wardrobe with panelled doors made by Total Carpentry"
      atAGlance={['Free design visit', 'Made to measure', 'Old units cleared away']}
      sections={[
        {
          heading: 'Storage that looks like it was always there',
          paragraphs: [
            'Because each wardrobe is cut to your room rather than a catalogue, it lines up with the skirting, the coving and the ceiling line instead of fighting them. That is what makes a run of doors read as part of the house rather than a box pushed against a wall.',
          ],
          imgSrc: '/img/wardrobe-interior-01.jpg',
          imgAlt: 'Interior of a fitted wardrobe with hanging rails and shelving',
          caption: 'Interiors are planned around what you own, not a standard grid.',
        },
        {
          heading: 'Door styles for the room and the budget',
          paragraphs: ['Five door types cover most bedrooms; we will steer you to the one that suits the space and the way the room is used.'],
          bullets: [
            'Sliding — nothing swings into the room, so ideal where floor space is tight',
            'Hinged — the classic look, with the widest choice of panel and paint finishes',
            'Walk-in — turn a box room or deep alcove into a proper dressing area',
            'Corner — claims the corner that off-the-shelf furniture always leaves empty',
            'Mirrored — bounces light around and makes a smaller room feel bigger',
          ],
          imgSrc: '/img/fitted-wardrobe-02.jpg',
          imgAlt: 'Fitted wardrobe with sliding doors in a Portishead bedroom',
        },
        {
          heading: 'Why handmade outlasts flat-pack',
          paragraphs: ['Everything is built to your measurements from solid materials and fixed back to the wall, so it stays true rather than sagging or drifting out of square after a couple of years.'],
          bullets: [
            'Interiors laid out to your clothes — rails, shelves and drawer runs where you need them',
            'Finishes chosen to sit with the rest of the room',
            'Every inch used, right into the tricky angles under a roof slope',
            'Solid carcass and fixings that hold their line for the long haul',
            'Extras that earn their place — soft lighting, mirrors, pull-outs, shoe racks',
            'A calmer room, because there is finally a home for everything',
          ],
        },
      ]}
      faqHeading="Fitted wardrobes — your questions"
      faqs={[
        {
          q: 'What works best in a small bedroom?',
          a: 'Sliding doors, usually. They need no clearance to open, so you keep the floor free, and they give that clean, unbroken front that makes a compact room feel calmer. They are one of the styles we fit most.',
        },
        {
          q: 'Can I decide how the inside is laid out?',
          a: 'Completely. We plan the internals around your wardrobe — long hanging, double hanging, drawers, shelving, shoe storage, lighting — so the space earns its keep rather than leaving you a single rail and a shelf.',
        },
        {
          q: 'Are they really sturdier than flat-pack?',
          a: 'By a good margin. Ours are cut to the room and screwed back to solid fixings, so they do not shift, sag or pull apart at the joints the way self-assembly units tend to once they have been lived with for a while.',
        },
      ]}
    />
  )
}
