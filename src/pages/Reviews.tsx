import { Star } from 'lucide-react'
import ContactCTA from '../components/ContactCTA'
import GoogleReviews from '../components/GoogleReviews'
import Breadcrumbs from '../components/Breadcrumbs'
import { useDocumentMeta } from '../lib/useDocumentMeta'

export default function Reviews() {
  useDocumentMeta({
    title: 'Reviews | Total Carpentry, Portishead',
    description:
      'Read what Portishead homeowners say about Total Carpentry — nine Google reviews, all five stars, praising tidy, precise, reliable joinery. See them in their own words.',
  })

  return (
    <>
      {/* Dark rating-led header — no photo */}
      <section className="bg-forest text-ink">
        <div className="max-w-6xl mx-auto px-4 pt-10 pb-14 md:py-16">
          <Breadcrumbs trail={[{ label: 'Home', to: '/' }, { label: 'Reviews' }]} tone="dark" />
          <div className="grid md:grid-cols-2 gap-8 md:items-end">
            <div>
              <p className="kicker-ondark mb-3">In their words</p>
              <h1 className="font-display text-4xl md:text-5xl font-medium leading-[1.08] mb-4">
                Judged on the finish, not the pitch
              </h1>
              <p className="text-lg text-ink/75 leading-relaxed">
                The same notes come up again and again: tidy work, a clean site, and a job done when it was
                promised. Here is every review, exactly as it was left.
              </p>
            </div>
            <div className="flex items-center gap-4 md:justify-end">
              <span className="font-display text-6xl font-semibold">5.0</span>
              <div className="flex flex-col gap-1">
                <div className="flex gap-0.5" role="img" aria-label="Rated 5 out of 5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={24} className="text-gold-mid" fill="#9a7a33" strokeWidth={1.5} aria-hidden="true" />
                  ))}
                </div>
                <span className="text-ink/70 text-sm">Nine Google reviews</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GoogleReviews />

      <ContactCTA heading="Want to be the tenth?" subtext="Tell us about your project and we’ll give you a straight price and a start date you can rely on." />
    </>
  )
}
