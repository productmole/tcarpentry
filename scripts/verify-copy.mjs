#!/usr/bin/env node
// Verification: no run of 8+ consecutive words appears in BOTH the old and new
// copy — excluding proper nouns, addresses, phone numbers, service names and the
// customer review quotes. Compares the previous build (git HEAD, before this
// session's changes) with the current working tree.
//
// To keep the comparison to *prose* (not React/JSX code), we only extract:
//   1. string-literal values containing 4+ words, and
//   2. JSX text nodes containing 4+ words.
import { execSync } from 'node:child_process'
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'

const N = 8

function listFiles(dir) {
  const out = []
  for (const e of readdirSync(dir)) {
    const p = join(dir, e)
    if (statSync(p).isDirectory()) out.push(...listFiles(p))
    else if (/\.(tsx|ts|html)$/.test(e)) out.push(p)
  }
  return out
}

function norm(s) {
  return s
    .replace(/&amp;/g, ' and ').replace(/&[a-z]+;/g, ' ')
    .replace(/https?:\/\/\S+/g, ' ')
    .toLowerCase()
    .replace(/\\'/g, "'").replace(/\\/g, ' ')
    .replace(/[’]/g, "'")
    .replace(/'(s|t|ve|re|m|ll|d)\b/g, '$1')
    .replace(/[^a-z0-9'\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

const wordCount = (s) => (s.trim() ? s.trim().split(/\s+/).length : 0)

// Pull prose out of a source file: long string literals + JSX text runs.
function extractProse(raw) {
  const pieces = []

  // string literals: '...'  "..."  `...`
  const strRe = /'((?:[^'\\]|\\.){12,}?)'|"((?:[^"\\]|\\.){12,}?)"|`((?:[^`\\]|\\.){12,}?)`/g
  let m
  while ((m = strRe.exec(raw))) {
    const val = (m[1] || m[2] || m[3] || '').replace(/\\'/g, "'").replace(/\\"/g, '"')
    if (/[a-z].*\s.*[a-z]/i.test(val) && !/[{}<>]|=>|className|http/.test(val)) {
      if (wordCount(norm(val)) >= 4) pieces.push(norm(val))
    }
  }

  // JSX text nodes: text between >...<  (strip nested braces expressions)
  const noTags = raw.replace(/<[^>]+>/g, '\n')
  for (let line of noTags.split('\n')) {
    line = line.replace(/\{[^}]*\}/g, ' ')
    const t = norm(line)
    if (wordCount(t) >= 4 && /[a-z]/.test(t)) pieces.push(t)
  }
  return pieces
}

function ngramsFrom(pieces, exclude) {
  const set = new Set()
  for (let piece of pieces) {
    for (const ex of exclude) piece = piece.split(ex).join(' | ')
    for (const chunk of piece.split('|')) {
      const w = chunk.split(/\s+/).filter(Boolean)
      for (let i = 0; i + N <= w.length; i++) set.add(w.slice(i, i + N).join(' '))
    }
  }
  return set
}

// Build the exclusion list: review quotes (verbatim & immutable) + fixed nouns.
function reviewQuotes() {
  const src = readFileSync('src/components/GoogleReviews.tsx', 'utf8')
  const out = []
  const re = /text:\s*'((?:[^'\\]|\\.)*)'/g
  let m
  while ((m = re.exec(src))) out.push(norm(m[1].replace(/\\'/g, "'")))
  return out
}

// Areas-covered list is a fixed set of place names (proper nouns, and required
// to stay identical) — exclude the whole normalised sequence + each name.
function areaNames() {
  const src = readFileSync('src/lib/site.ts', 'utf8')
  const block = src.match(/AREAS[^\[]*\[([^\]]*)\]/)?.[1] || ''
  const names = [...block.matchAll(/'([^']+)'/g)].map((m) => norm(m[1]))
  return [names.join(' '), ...names]
}

const EXCLUDE = [
  ...reviewQuotes(),
  ...areaNames(),
  'total carpentry services', 'total carpentry',
  'kitchen installations', 'fitted wardrobes', 'house renovations',
  'wood flooring installations', 'wood flooring installation', 'wood flooring',
  'portishead', 'north somerset', 'clevedon', 'nailsea',
  'portishead north somerset',
]

const oldFiles = execSync('git ls-tree -r --name-only HEAD -- src index.html', { encoding: 'utf8' })
  .split('\n').filter(Boolean)
const newFiles = ['index.html', ...listFiles('src')]

const oldPieces = []
for (const f of oldFiles) {
  try { oldPieces.push(...extractProse(execSync(`git show HEAD:"${f}"`, { encoding: 'utf8' }))) } catch { /* absent */ }
}
const newPieces = []
for (const f of newFiles) newPieces.push(...extractProse(readFileSync(f, 'utf8')))

const oldGrams = ngramsFrom(oldPieces, EXCLUDE)
const newGrams = ngramsFrom(newPieces, EXCLUDE)

// Post-filter: drop any run that is wholly inside an excluded phrase (review
// quotes / nouns) and any that is clearly leaked markup rather than prose.
const excludedBlob = ' ' + EXCLUDE.join('  ') + ' '
const isNoise = (g) => /\b(classname|flex|items|justify|grid|gap|rounded|px|py|max|mx|md|sm|lg|text|bg|border|absolute|relative|translate|top|bottom|left|right|w full|h full|inset|z)\b/.test(g)
const shared = [...newGrams]
  .filter((g) => oldGrams.has(g))
  .filter((g) => !excludedBlob.includes(g))
  .filter((g) => !isNoise(g))

console.log(`Prose ${N}-word runs — old: ${oldGrams.size}, new: ${newGrams.size}`)
console.log(`Shared runs after exclusions: ${shared.length}`)
if (shared.length) {
  console.log('\n--- shared 8-word runs to review ---')
  for (const s of shared) console.log('  •', s)
  process.exitCode = 1
} else {
  console.log('\nPASS: no run of 8+ words is shared between old and new copy.')
}
