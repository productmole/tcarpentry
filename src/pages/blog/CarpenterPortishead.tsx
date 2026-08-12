import BlogTemplate from './BlogTemplate'

export default function CarpenterPortishead() {
  return (
    <BlogTemplate
      meta={{
        title: 'Hiring a Carpenter in Portishead: What Matters | Total Carpentry',
        description:
          'Choosing a carpenter for work in your Portishead home? Here’s what separates a good one from a cheap one — and the questions worth asking before you book.',
      }}
      kicker="Hiring a carpenter"
      readTime="4 min"
      h1="Hiring a carpenter in Portishead: what actually matters"
      featureImg="/img/carpentry-detail-01.jpg"
      featureImgAlt="Close detail of finished carpentry on a Total Carpentry project"
      intro="Anyone can own a nail gun. The gap between a tidy, lasting job and one you quietly regret comes down to judgement — and judgement is hard to spot from a quote. Here’s how to read it."
      sections={[
        {
          heading: 'Photos show the good days',
          paragraphs: [
            'A gallery is a highlight reel. What it can’t show is how someone deals with a wall that turns out to be 15mm off across three metres, or a floor that dips in the middle of the run. That is where experience actually lives — in the scribing, packing and problem-solving nobody photographs.',
            'So when you look at a carpenter’s work, look past the finished shot and ask how they got there. A confident answer tells you more than the picture does.',
          ],
        },
        {
          heading: 'Five things worth checking',
          paragraphs: ['None of these are hard to ask. The way they’re answered is the useful part.'],
          bullets: [
            'Will the same person who quotes actually do the work?',
            'Who handles the plumbing, gas or wiring, and are they properly ticketed?',
            'What happens if something isn’t right once you’re living with it?',
            'Can they point you to a finished job nearby you could look at?',
            'Is the price a fixed quote or a hopeful estimate?',
          ],
        },
        {
          heading: 'Local isn’t just a nice idea',
          paragraphs: [
            'A carpenter who works within a few miles of you has skin in the game. Word gets around a town like Portishead, so the incentive to leave every customer happy is baked in. It also means that if a door drops or a drawer sticks a month later, sorting it is a short drive, not a negotiation.',
            'We’ve built here since 2014, across everything from harbourside flats to older village houses, and most of our work now comes from people who were recommended by someone we worked for previously.',
          ],
        },
        {
          heading: 'The guarantee behind it',
          paragraphs: [
            'Every job we complete carries a guarantee. It’s not a marketing line — it’s the natural consequence of standing behind what you make. If you’re weighing up a carpenter in Portishead or the villages nearby, ask us for a free look at the job; we’ll give you a straight price and an honest view of what it needs.',
          ],
        },
      ]}
    />
  )
}
