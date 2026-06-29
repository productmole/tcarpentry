import { useState } from 'react'

interface Props {
  formId?: string
}

export default function ContactForm({ formId = 'YOUR_FORMSPREE_ID' }: Props) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = new FormData(form)
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

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="name">Name *</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full bg-[#111827] border border-[#2d3748] text-white placeholder-gray-500 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#dead1f]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="email">Email address *</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full bg-[#111827] border border-[#2d3748] text-white placeholder-gray-500 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#dead1f]"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="phone">Phone number</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="w-full bg-[#111827] border border-[#2d3748] text-white placeholder-gray-500 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#dead1f]"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="message">Message *</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full bg-[#111827] border border-[#2d3748] text-white placeholder-gray-500 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#dead1f] resize-y"
        />
      </div>
      <button
        type="submit"
        disabled={status === 'sending'}
        className="bg-[#dead1f] hover:bg-[#bd931a] disabled:opacity-60 text-white font-semibold px-8 py-3 rounded transition-colors w-full sm:w-auto"
      >
        {status === 'sending' ? 'Sending…' : 'Send Message'}
      </button>
      {status === 'success' && (
        <p className="text-green-700 font-medium">Thank you — we'll be in touch shortly!</p>
      )}
      {status === 'error' && (
        <p className="text-red-600">Something went wrong. Please call us on 07834 772046.</p>
      )}
    </form>
  )
}
