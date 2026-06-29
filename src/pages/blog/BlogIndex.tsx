import { Link } from 'react-router-dom'
import Hero from '../../components/Hero'

const posts = [
  {
    title: 'Why It Pays to Find the Right Carpenter for Work in Portishead',
    slug: '/blog/carpenter-in-portishead',
    img: '/gallery/IMG_0851.jpg',
    excerpt: 'Choosing the right carpenter can be the difference between a home improvement that truly transforms your space and one that disappoints.',
  },
  {
    title: 'Fitted Wardrobes in Portishead Transform Your Bedroom Storage',
    slug: '/blog/fitted-wardrobes-in-portishead',
    img: '/gallery/IMG_0518.jpg',
    excerpt: 'A well-designed fitted wardrobe transforms how your bedroom feels and functions. Discover our bespoke design and install service.',
  },
  {
    title: 'House Renovations in Portishead Making Your Home Work Harder for You',
    slug: '/blog/house-renovations-in-portishead',
    img: '/gallery/IMG_0862.jpg',
    excerpt: 'A well-executed renovation can completely transform how you live. See what\'s involved and how we can help.',
  },
  {
    title: 'Kitchen Installation in Portishead Creating the Heart of Your Home',
    slug: '/blog/kitchen-installation-in-portishead',
    img: '/gallery/IMG_0320.jpg',
    excerpt: 'A well-designed kitchen installation transforms daily life. Find out why a local Portishead carpenter is the best choice.',
  },
  {
    title: 'Wood Flooring Installation in Portishead Warmth, Character & Lasting Value',
    slug: '/blog/wood-flooring-installation-in-portishead',
    img: '/gallery/IMG_0736.jpg',
    excerpt: 'Wood flooring adds warmth, character and real value to any property. Learn about solid timber and laminate options.',
  },
]

export default function BlogIndex() {
  return (
    <>
      <Hero
        h1="Blog"
        intro="Ideas, insights and inspiration for your home improvement projects in Portishead and beyond."
        imageSrc="/gallery/IMG_0528.jpg"
        imageAlt="Carpentry projects blog by Total Carpentry Services"
      />

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#d1d5db] leading-relaxed mb-4 max-w-3xl">
            At Total Carpentry Services we take pride in high-quality home improvements that bring any vision to life whether you're upgrading a kitchen, laying new flooring, refreshing a tired interior or solving a bedroom storage headache.
          </p>
          <p className="text-[#d1d5db] leading-relaxed mb-12 max-w-3xl">
            In this series of posts we explore the benefits of our services and share ideas to help you create the home you want. If you're in or around Portishead, <Link to="/contact" className="text-[#dead1f] hover:underline">get in touch</Link> and let's get started.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                to={post.slug}
                className="group bg-[#111827] border border-[#2d3748] rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="overflow-hidden h-48">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <h2 className="font-bold text-white text-base mb-2 group-hover:text-[#dead1f] transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
