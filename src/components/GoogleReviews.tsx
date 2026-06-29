// TODO: replace hardcoded data with Google Places API call once API key and Place ID are confirmed with Dave.

import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

// replace with Dave's Google Business Profile URL
const GOOGLE_REVIEWS_URL = 'https://g.page/r/PLACEHOLDER/review'

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

function StarRating({ count, size = 16 }: { count: number; size?: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 20 20"
          fill={i < count ? '#dead1f' : 'none'}
          stroke="#dead1f"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function ReviewCard({ review }: { review: Review }) {
  const [expanded, setExpanded] = useState(false)
  const isLong = review.text.length > 200
  const displayText = isLong && !expanded ? review.text.slice(0, 200) + '…' : review.text

  return (
    <article className="bg-[#111827] border border-[#2d3748] rounded-xl p-6 flex flex-col gap-3 min-w-[280px] max-w-[360px] shrink-0 snap-start">
      <StarRating count={review.stars} size={18} />
      <p className="text-[#d1d5db] text-sm leading-relaxed flex-1">
        "{displayText}"
        {isLong && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="ml-1 text-[#dead1f] hover:underline text-xs font-medium"
          >
            {expanded ? 'Show less' : 'Read more'}
          </button>
        )}
      </p>
      <div className="flex items-center justify-between mt-auto pt-3 border-t border-[#2d3748]">
        <div>
          <div className="font-semibold text-white text-sm">{review.name}</div>
          <div className="text-[#6b7280] text-xs">{review.date}</div>
        </div>
        <svg width="20" height="20" viewBox="0 0 24 24" aria-label="Google" role="img">
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
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({ left: dir === 'right' ? 340 : -340, behavior: 'smooth' })
  }

  return (
    <section className="py-16 px-4 bg-[#111827]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-widest text-[#dead1f] font-semibold mb-2">Reviews</p>
          <h2 className="text-3xl font-bold text-white mb-3">Our Latest Reviews</h2>
          <div className="flex items-center justify-center gap-3 mb-1">
            <span className="text-5xl font-bold text-white">{overallRating.toFixed(1)}</span>
            <div className="flex flex-col items-start gap-1">
              <StarRating count={5} size={24} />
              <span className="text-[#d1d5db] text-sm">{totalReviews} Google reviews</span>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-[#1e2538] border border-[#2d3748] rounded-full p-2 text-white hover:text-[#dead1f] hover:border-[#dead1f] transition-colors hidden md:flex"
            aria-label="Scroll left"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </button>

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {reviews.map((review) => (
              <ReviewCard key={review.name} review={review} />
            ))}
          </div>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-[#1e2538] border border-[#2d3748] rounded-full p-2 text-white hover:text-[#dead1f] hover:border-[#dead1f] transition-colors hidden md:flex"
            aria-label="Scroll right"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#dead1f] hover:bg-[#bd931a] text-white font-semibold px-6 py-2.5 rounded transition-colors text-sm"
          >
            Read all our reviews on Google
            <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
