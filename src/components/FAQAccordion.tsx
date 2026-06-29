import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQ {
  q: string
  a: string
}

export default function FAQAccordion({ faqs, heading }: { faqs: FAQ[]; heading?: string }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-16 px-4 bg-[#111827]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          {heading ?? 'Frequently Asked Questions'}
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-[#111827] rounded shadow-sm border border-[#2d3748]">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left text-white font-medium text-sm md:text-base"
                aria-expanded={open === i}
              >
                <em className="not-italic">{faq.q}</em>
                <ChevronDown
                  size={18}
                  className={`shrink-0 ml-3 transition-transform ${open === i ? 'rotate-180' : ''}`}
                />
              </button>
              {open === i && (
                <div className="px-5 pb-4 text-sm text-[#d1d5db] leading-relaxed">
                  <em className="not-italic">{faq.a}</em>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
