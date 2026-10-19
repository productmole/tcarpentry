import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ORIGIN = 'https://tcarpentry.co.uk'

interface Meta {
  title: string
  description: string
  /** Set false on pages that shouldn't declare a canonical URL (the 404). */
  canonical?: boolean
}

function upsertMeta(selector: string, attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

// Canonical form: root keeps its slash, every other path has none.
function canonicalUrl(pathname: string) {
  const path = pathname.replace(/\/+$/, '')
  return path ? ORIGIN + path : ORIGIN + '/'
}

function setCanonical(href: string | null) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!href) {
    el?.remove()
    return
  }
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

/**
 * Sets the document <title>, description / Open Graph tags and canonical link per route.
 * The SPA ships one static <title>; this keeps each page's metadata fresh.
 */
export function useDocumentMeta({ title, description, canonical = true }: Meta) {
  const { pathname } = useLocation()
  useEffect(() => {
    document.title = title
    upsertMeta('meta[name="description"]', 'name', 'description', description)
    upsertMeta('meta[property="og:title"]', 'property', 'og:title', title)
    upsertMeta('meta[property="og:description"]', 'property', 'og:description', description)
    setCanonical(canonical ? canonicalUrl(pathname) : null)
  }, [title, description, canonical, pathname])
}
