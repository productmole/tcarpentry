import { useRef, useState } from 'react'
import { SITE } from '../lib/site'

interface Props {
  formId?: string
}

type Status = 'idle' | 'sending' | 'success' | 'error'
type Errors = Partial<Record<'name' | 'email' | 'message', string>>

const fieldClass =
  'w-full rounded border bg-shell text-ink placeholder-ink-soft/60 px-3.5 py-2.5 text-[15px] ' +
  'focus-visible:ring-2 focus-visible:ring-ochre focus-visible:border-ochre transition'

export default function ContactForm({ formId = 'xpqvaqrl' }: Props) {
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<Errors>({})
  const formRef = useRef<HTMLFormElement>(null)

  function validate(data: FormData): Errors {
    const next: Errors = {}
    const name = String(data.get('name') || '').trim()
    const email = String(data.get('email') || '').trim()
    const message = String(data.get('message') || '').trim()
    if (!name) next.name = 'Please tell us your name.'
    if (!email) next.email = 'We need an email address to reply.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = 'That email address doesn’t look right.'
    if (!message) next.message = 'Let us know what you’d like doing.'
    return next
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const found = validate(data)
    setErrors(found)
    if (Object.keys(found).length > 0) {
      const first = Object.keys(found)[0]
      form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus()
      return
    }
    setStatus('sending')
    try {
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="card p-6" role="status">
        <p className="font-display text-xl font-semibold text-ochre mb-1">Message on its way</p>
        <p className="text-ink-soft">
          Thanks — your details have reached us and we’ll come back to you within a working day. In a hurry?
          Call {SITE.phonePrimary.display}.
        </p>
      </div>
    )
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold mb-1.5">Your name</label>
          <input
            id="name" name="name" type="text" autoComplete="name" required
            aria-required="true"
            aria-invalid={errors.name ? 'true' : undefined}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={`${fieldClass} ${errors.name ? 'border-rust' : 'border-line'}`}
          />
          {errors.name && <p id="name-error" role="alert" className="mt-1.5 text-sm text-rust">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold mb-1.5">Email address</label>
          <input
            id="email" name="email" type="email" autoComplete="email" inputMode="email" required
            aria-required="true"
            aria-invalid={errors.email ? 'true' : undefined}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={`${fieldClass} ${errors.email ? 'border-rust' : 'border-line'}`}
          />
          {errors.email && <p id="email-error" role="alert" className="mt-1.5 text-sm text-rust">{errors.email}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-semibold mb-1.5">
          Phone number <span className="font-normal text-ink-soft">(optional)</span>
        </label>
        <input
          id="phone" name="phone" type="tel" autoComplete="tel" inputMode="tel"
          className={`${fieldClass} border-line`}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold mb-1.5">What can we help with?</label>
        <textarea
          id="message" name="message" rows={5} required
          aria-required="true"
          aria-invalid={errors.message ? 'true' : undefined}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={`${fieldClass} resize-y ${errors.message ? 'border-rust' : 'border-line'}`}
        />
        {errors.message && <p id="message-error" role="alert" className="mt-1.5 text-sm text-rust">{errors.message}</p>}
      </div>

      <button type="submit" disabled={status === 'sending'} className="btn btn-primary w-full sm:w-auto">
        {status === 'sending' ? 'Sending…' : 'Send Message'}
      </button>

      <div aria-live="assertive">
        {status === 'error' && (
          <p role="alert" className="text-rust font-medium">
            That didn’t send. Please try again, or call us on {SITE.phonePrimary.display}.
          </p>
        )}
      </div>
    </form>
  )
}
