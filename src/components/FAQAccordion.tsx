import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

interface FAQ {
  q: string
  a: string
}

export default function FAQAccordion({ faqs, heading }: { faqs: FAQ[]; heading?: string }) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="bg-paper">
      <div className="max-w-3xl mx-auto px-4 py-16 md:py-20">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mb-8">
          {heading ?? 'Questions we get asked'}
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            const panelId = `faq-panel-${i}`
            const btnId = `faq-btn-${i}`
            return (
              <div key={i} className="card overflow-hidden">
                <h3>
                  <button
                    id={btnId}
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-ink hover:bg-sand/60 transition-colors"
                  >
                    <span>{faq.q}</span>
                    {isOpen
                      ? <Minus size={20} className="shrink-0 text-rust" aria-hidden="true" />
                      : <Plus size={20} className="shrink-0 text-rust" aria-hidden="true" />}
                  </button>
                </h3>
                {isOpen && (
                  <div id={panelId} role="region" aria-labelledby={btnId} className="px-5 pb-5 -mt-1 text-ink-soft leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
