import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Breadcrumbs from '../../components/Breadcrumbs'
import { useDocumentMeta } from '../../lib/useDocumentMeta'

export const posts = [
  {
    title: 'Hiring a carpenter in Portishead: what actually matters',
    slug: '/blog/carpenter-in-portishead',
    img: '/img/carpentry-detail-01.jpg',
    imgAlt: 'Close carpentry detail on a completed Total Carpentry project',
    readTime: '4 min',
    excerpt: 'Trade cards and nice photos only tell you so much. Here’s what to look for when you’re trusting someone with work in your home.',
  },
  {
    title: 'Fitted wardrobes: turning dead corners into storage',
    slug: '/blog/fitted-wardrobes-in-portishead',
    img: '/img/fitted-wardrobe-01.jpg',
    imgAlt: 'Built-in bedroom wardrobe made by Total Carpentry',
    readTime: '4 min',
    excerpt: 'The gaps around freestanding furniture add up. A built-in run reclaims them — eaves, corners and all.',
  },
  {
    title: 'Renovating a Portishead home without the chaos',
    slug: '/blog/house-renovations-in-portishead',
    img: '/img/home-renovation-01.jpg',
    imgAlt: 'Room part-way through a renovation by Total Carpentry',
    readTime: '5 min',
    excerpt: 'A good renovation is as much about sequencing and dust control as it is about the joinery. Here’s how we run one.',
  },
  {
    title: 'What a local joiner brings to a kitchen fit',
    slug: '/blog/kitchen-installation-in-portishead',
    img: '/img/kitchen-fit-portishead-01.jpg',
    imgAlt: 'Fitted kitchen completed by Total Carpentry in Portishead',
    readTime: '4 min',
    excerpt: 'Showrooms sell the units. Someone still has to make them meet your out-of-square walls. That’s the part that shows.',
  },
  {
    title: 'Solid timber or laminate? Choosing a floor that lasts',
    slug: '/blog/wood-flooring-installation-in-portishead',
    img: '/img/wood-floor-install-01.jpg',
    imgAlt: 'Newly laid wood floor by Total Carpentry',
    readTime: '4 min',
    excerpt: 'Both have their place. The right answer depends on the room, the budget and how hard the floor has to work.',
  },
]

export default function BlogIndex() {
  useDocumentMeta({
    title: 'Blog | Total Carpentry, Portishead',
    description:
      'Practical notes on kitchens, fitted wardrobes, flooring and renovations from Total Carpentry — a working joiner’s take, written for Portishead homeowners.',
  })

  return (
    <>
      <section className="bg-paper border-b border-line">
        <div className="max-w-6xl mx-auto px-4 pt-10 pb-10">
          <Breadcrumbs trail={[{ label: 'Home', to: '/' }, { label: 'Blog' }]} />
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-ink leading-[1.08] mb-4">
              Notes from the workshop
            </h1>
            <p className="text-lg text-ink-soft leading-relaxed">
              No filler — just the things we find ourselves explaining to customers, written down. Planning a job in or
              around Portishead? These should help you ask the right questions.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link to={post.slug} className="card group h-full flex flex-col overflow-hidden hover:border-rust transition-colors">
                  <div className="overflow-hidden aspect-[16/10]">
                    <img src={post.img} alt={post.imgAlt} loading="lazy" width="512" height="320"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <span className="text-xs font-semibold uppercase tracking-wide text-rust mb-2">{post.readTime} read</span>
                    <h2 className="font-display text-xl font-semibold text-ink mb-2 leading-snug group-hover:text-rust transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-ink-soft text-[15px] leading-relaxed flex-1">{post.excerpt}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 font-semibold text-rust">
                      Read <ArrowRight size={16} aria-hidden="true" className="group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
