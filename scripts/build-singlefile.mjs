#!/usr/bin/env node
// Turns the Vite `dist/` build into ONE self-contained .html file: the JS and CSS
// are inlined, and every image/logo/favicon it references is embedded as a data:
// URI. The result opens straight from a file:// with no server and works offline
// (the only things that still need internet are Google Fonts, the embedded Google
// Map, and the contact-form submit — all noted for the tester).
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs'
import { join, extname, relative } from 'node:path'

const DIST = 'dist'
const OUT = process.argv[2] || 'tcarpentry-preview.html'

const MIME = {
  '.js': 'text/javascript', '.css': 'text/css',
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png',
  '.svg': 'image/svg+xml', '.webp': 'image/webp', '.gif': 'image/gif',
  '.ico': 'image/x-icon', '.woff2': 'font/woff2', '.woff': 'font/woff',
}

function walk(dir) {
  const out = []
  for (const e of readdirSync(dir)) {
    const p = join(dir, e)
    if (statSync(p).isDirectory()) out.push(...walk(p))
    else out.push(p)
  }
  return out
}

function dataUri(path) {
  const mime = MIME[extname(path).toLowerCase()] || 'application/octet-stream'
  return `data:${mime};base64,${readFileSync(path).toString('base64')}`
}

// Every emitted asset -> its web path variants -> a data URI.
const assets = walk(DIST).filter((p) => !p.endsWith('index.html'))
const webPaths = assets.map((p) => {
  const rel = relative(DIST, p).split('\\').join('/')
  return { file: p, rel, uri: dataUri(p) }
})
// Replace longest paths first so no path is a prefix of another mid-replace.
webPaths.sort((a, b) => b.rel.length - a.rel.length)

let html = readFileSync(join(DIST, 'index.html'), 'utf8')

// 1) inline the module script and stylesheet, then drop their tags.
const jsMatch = html.match(/<script[^>]*type="module"[^>]*src="([^"]+)"[^>]*><\/script>/)
const cssMatch = html.match(/<link[^>]*rel="stylesheet"[^>]*href="([^"]+)"[^>]*>/)
const jsRel = jsMatch && jsMatch[1].replace(/^\.?\//, '')
const cssRel = cssMatch && cssMatch[1].replace(/^\.?\//, '')

let js = jsRel ? readFileSync(join(DIST, jsRel), 'utf8') : ''
let css = cssRel ? readFileSync(join(DIST, cssRel), 'utf8') : ''

// 2) swap asset URLs -> data URIs inside JS and CSS (skip the inlined js/css files).
function embed(text) {
  for (const { rel, uri } of webPaths) {
    if (rel === jsRel || rel === cssRel) continue
    for (const form of ['/' + rel, './' + rel, rel]) {
      if (text.includes(form)) text = text.split(form).join(uri)
    }
  }
  return text
}
js = embed(js)
css = embed(css)

// Escape closing tags that would prematurely terminate the inline <script>/<style>.
js = js.replace(/<\/script/gi, '<\\/script')
css = css.replace(/<\/style/gi, '<\\/style')

// 3) rebuild the HTML: remove original tags, inject inline style + script,
//    and point the favicon at a data URI.
// Use function replacers so `$` sequences inside the bundle are NOT interpreted
// as replacement patterns (that would splice surrounding HTML into the script).
if (cssMatch) html = html.replace(cssMatch[0], () => `<style>${css}</style>`)
if (jsMatch) html = html.replace(jsMatch[0], () => `<script type="module">${js}</script>`)
html = embed(html)

writeFileSync(OUT, html)
const kb = (Buffer.byteLength(html) / 1024).toFixed(0)
console.log(`Wrote ${OUT} (${kb} KB), ${webPaths.length} assets embedded.`)
