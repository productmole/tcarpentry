import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export interface Crumb {
  label: string
  to?: string
}

export default function Breadcrumbs({ trail, tone = 'light' }: { trail: Crumb[]; tone?: 'light' | 'dark' }) {
  const muted = tone === 'dark' ? 'text-ink/60' : 'text-ink-soft'
  const link = tone === 'dark' ? 'text-ink/80 hover:text-ink' : 'text-ink hover:text-rust'
  return (
    <nav aria-label="Breadcrumb" className="mb-5">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm">
        {trail.map((c, i) => {
          const last = i === trail.length - 1
          return (
            <li key={i} className="flex items-center gap-1.5">
              {c.to && !last ? (
                <Link to={c.to} className={`${link} underline-offset-2 hover:underline`}>{c.label}</Link>
              ) : (
                <span className={last ? `font-medium ${tone === 'dark' ? 'text-ink' : 'text-ink'}` : muted} aria-current={last ? 'page' : undefined}>
                  {c.label}
                </span>
              )}
              {!last && <ChevronRight size={14} className={muted} aria-hidden="true" />}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
