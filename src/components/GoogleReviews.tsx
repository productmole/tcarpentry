// Review text and customer names are reproduced verbatim and must not change.
import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Star, ArrowUpRight } from 'lucide-react'
import { SITE } from '../lib/site'

interface Review {
  name: string
  stars: number
  date: string
  text: string
}

const overallRating = 5.0
const totalReviews = 9

const reviews: Review[] = [
  {
    name: 'Family Oates',
    stars: 5,
    date: '2 months ago',
    text: 'Brill service from Dave - fitted 4 doors into an older property - he\'s very knowledgeable and gets the job done - super dooper neat as well! We recommend Total Carpentry to everyone.',
  },
  {
    name: 'Gurdy Vilkhu',
    stars: 5,
    date: '10 months ago',
    text: 'Dave did an excellent job with fitting shelves and doors for me. His workmanship is top quality, and everything was finished to a really high standard. He was reliable, professional, and easy to communicate with throughout the process. The project was completed on time, and he left the space clean and tidy! I\'m really happy with the results and wouldn\'t hesitate to recommend him to anyone looking for a skilled carpenter.',
  },
  {
    name: 'Abi Carter',
    stars: 5,
    date: '10 months ago',
    text: 'Would highly recommend Dave and his professional team for any job. He\'s extremely skilled, very polite and keeps the job space clean and organised. He\'s also a very nice man and goes out of his way to assist to make everything run smoothly.',
  },
  {
    name: 'Maxine Havens',
    stars: 5,
    date: '11 months ago',
    text: 'Dave has just fitted 7 internal oak doors, which we are extremely pleased with. His work is 1st class, clean, fast and very professional. Would highly recommend.',
  },
  {
    name: 'Peter Stringer',
    stars: 5,
    date: 'a year ago',
    text: 'We\'ve had Dave complete a number of jobs for us, including bespoke wardrobe builds, panelling and general carpentry. His workmanship is 1st class, nothing is too much trouble and happy to work with.',
  },
  {
    name: 'Alex Mckie',
    stars: 5,
    date: 'a year ago',
    text: 'Dave spent two weeks installing our new kitchen, and has done an incredible job. The attention to detail really shows and I would have no doubt about getting him back for any other carpentry jobs in my house.',
  },
  {
    name: 'Abel Woodley',
    stars: 5,
    date: 'a year ago',
    text: 'Total Carpentry did a fantastic job on our project. Dave was professional, skilled, and detail-oriented, delivering quality craftsmanship on time. Highly recommend for reliable, top-notch carpentry!',
  },
  {
    name: 'Stephen Clarke',
    stars: 5,
    date: 'a year ago',
    text: 'Dave is a very professional carpenter who has worked on three houses for me and always done a great job! His kitchen fitting skills are top class!',
  },
  {
    name: 'DogLover737',
    stars: 5,
    date: 'a year ago',
    text: 'There\'s nothing that Dave can\'t do; we have had doors hung, wonderful bespoke cupboards fitted, floorboards replaced and fixed, all manner of works in both a fairly modern home and a very old property. He is punctual, professional and a pleasure to have in your home.',
  },
]

function Stars({ count, size = 16 }: { count: number; size?: number }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label={`Rated ${count} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={size} className="text-gold-mid" fill={i < count ? '#dead1f' : 'none'} strokeWidth={1.5} aria-hidden="true" />
      ))}
    </div>
  )
}

function ReviewCard({ review }: { review: Review }) {
  const [expanded, setExpanded] = useState(false)
  const isLong = review.text.length > 210
  const displayText = isLong && !expanded ? review.text.slice(0, 210).trimEnd() + '…' : review.text

  return (
    <article className="card p-6 flex flex-col gap-3 min-w-[280px] max-w-[360px] shrink-0 snap-start">
      <Stars count={review.stars} size={18} />
      <blockquote className="text-ink leading-relaxed flex-1">
        “{displayText}”
        {isLong && (
          <button onClick={() => setExpanded((v) => !v)} className="ml-1 text-rust hover:underline text-sm font-semibold">
            {expanded ? 'Show less' : 'Read more'}
          </button>
        )}
      </blockquote>
      <div className="flex items-center justify-between mt-auto pt-3 border-t border-line">
        <div>
          <div className="font-semibold text-ink">{review.name}</div>
          <div className="text-ink-soft text-sm">{review.date}</div>
        </div>
        <svg width="20" height="20" viewBox="0 0 24 24" aria-label="Posted on Google" role="img">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
      </div>
    </article>
  )
}

export default function GoogleReviews() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const scroll = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({ left: dir === 'right' ? 344 : -344, behavior: 'smooth' })
  }

  return (
    <section className="bg-sand">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <p className="kicker mb-3">Straight from customers</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">Reviewed five out of five</h2>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-display text-5xl font-semibold text-ink">{overallRating.toFixed(1)}</span>
            <div className="flex flex-col gap-1">
              <Stars count={5} size={22} />
              <span className="text-ink-soft text-sm">Across {totalReviews} Google reviews</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <button onClick={() => scroll('left')} aria-label="Show previous reviews"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10 hidden md:inline-flex items-center justify-center w-11 h-11 rounded-full bg-shell border border-line text-ink hover:text-rust hover:border-rust transition-colors">
            <ChevronLeft size={22} aria-hidden="true" />
          </button>

          <div ref={scrollRef} className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scroll-smooth" style={{ scrollbarWidth: 'none' }}>
            {reviews.map((review) => <ReviewCard key={review.name} review={review} />)}
          </div>

          <button onClick={() => scroll('right')} aria-label="Show more reviews"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-10 hidden md:inline-flex items-center justify-center w-11 h-11 rounded-full bg-shell border border-line text-ink hover:text-rust hover:border-rust transition-colors">
            <ChevronRight size={22} aria-hidden="true" />
          </button>
        </div>

        <div className="mt-8">
          <a href={SITE.googleReviews} target="_blank" rel="noopener noreferrer" className="btn btn-ghost-onlight">
            Read all our reviews on Google
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
