import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'
import ContactForm from '../components/ContactForm'
import Breadcrumbs from '../components/Breadcrumbs'
import { SITE } from '../lib/site'
import { useDocumentMeta } from '../lib/useDocumentMeta'

const mapSrc =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.1!2d-2.766!3d51.486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48718f3b4c6d8c3b%3A0x1234567890!2s3+Bunting+Ln%2C+Portishead%2C+Bristol+BS20+7PZ!5e0!3m2!1sen!2suk!4v1234567890'

export default function Contact() {
  useDocumentMeta({
    title: 'Contact | Total Carpentry, Portishead',
    description:
      'Get in touch with Total Carpentry in Portishead — call, WhatsApp, email or send the enquiry form. Free, no-obligation quotes across North Somerset.',
  })

  return (
    <>
      <section className="bg-sand">
        <div className="max-w-6xl mx-auto px-4 pt-10 pb-14 md:py-16">
          <Breadcrumbs trail={[{ label: 'Home', to: '/' }, { label: 'Contact' }]} />
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-ink leading-[1.08] mb-4">
              Tell us about the job
            </h1>
            <p className="text-lg text-ink-soft leading-relaxed">
              A rough idea is plenty to start with. Send the details, or pick up the phone, and we’ll arrange to come
              and look. Quotes are free and there’s no pressure to go ahead.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="max-w-6xl mx-auto px-4 py-14 md:py-16 grid lg:grid-cols-5 gap-10">
          {/* Contact methods */}
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl font-semibold text-ink mb-5">Reach us directly</h2>
            <ul className="space-y-3">
              <li>
                <a href={`tel:${SITE.phonePrimary.tel}`} className="card p-4 flex items-center gap-3 hover:border-rust transition-colors">
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-sand text-rust shrink-0"><Phone size={20} aria-hidden="true" /></span>
                  <span><span className="block text-sm text-ink-soft">Call the mobile</span><span className="font-semibold text-ink">{SITE.phonePrimary.display}</span></span>
                </a>
              </li>
              <li>
                <a href={`tel:${SITE.phoneSecondary.tel}`} className="card p-4 flex items-center gap-3 hover:border-rust transition-colors">
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-sand text-rust shrink-0"><Phone size={20} aria-hidden="true" /></span>
                  <span><span className="block text-sm text-ink-soft">Or the landline</span><span className="font-semibold text-ink">{SITE.phoneSecondary.display}</span></span>
                </a>
              </li>
              <li>
                <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="card p-4 flex items-center gap-3 hover:border-rust transition-colors">
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-sand text-rust shrink-0"><MessageCircle size={20} aria-hidden="true" /></span>
                  <span><span className="block text-sm text-ink-soft">Message on</span><span className="font-semibold text-ink">WhatsApp</span></span>
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="card p-4 flex items-center gap-3 hover:border-rust transition-colors">
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-sand text-rust shrink-0"><Mail size={20} aria-hidden="true" /></span>
                  <span className="min-w-0"><span className="block text-sm text-ink-soft">Email</span><span className="font-semibold text-ink wrap-anywhere">{SITE.email}</span></span>
                </a>
              </li>
              <li className="card p-4 flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-sand text-rust shrink-0"><MapPin size={20} aria-hidden="true" /></span>
                <span><span className="block text-sm text-ink-soft">Workshop address</span>
                  <address className="not-italic font-semibold text-ink">
                    {SITE.address.street}, {SITE.address.town}, {SITE.address.city}, {SITE.address.postcode}
                  </address>
                </span>
              </li>
            </ul>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="card p-6 md:p-8">
              <h2 className="font-display text-2xl font-semibold text-ink mb-1">Send an enquiry</h2>
              <p className="text-ink-soft mb-6">Fields marked with a note are optional; the rest help us reply usefully.</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sand">
        <div className="max-w-6xl mx-auto px-4 py-14 md:py-16">
          <div className="rounded-2xl overflow-hidden border border-line shadow-sm">
            <iframe
              title="Map showing Total Carpentry at 3 Bunting Lane, Portishead"
              src={mapSrc}
              width="100%" height="420" style={{ border: 0 }}
              allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  )
}
