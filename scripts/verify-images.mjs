#!/usr/bin/env node
// Verification:
//  (1) No image file shares a checksum with any file from the previous site,
//      excluding the logo (tc-logo-light.svg).
//  (2) No filename is reused (excluding the retained logo + favicon, which are
//      the client's own logo-derived marks and are called out in CHANGES.md).
import { execSync } from 'node:child_process'
import { readFileSync, existsSync } from 'node:fs'
import { createHash } from 'node:crypto'
import { basename } from 'node:path'

const IMG = /\.(jpe?g|png|svg|webp|gif|avif|ico)$/i
const sha = (buf) => createHash('sha256').update(buf).digest('hex')

// Retained by design (documented): the client's own logo and its favicon.
const LOGO = 'tc-logo-light.svg'
const RETAINED_NAMES = new Set([LOGO, 'favicon.png', 'favicon.svg'])

// OLD images = tracked image files at git HEAD (the previous build).
const oldPaths = execSync('git ls-tree -r --name-only HEAD', { encoding: 'utf8' })
  .split('\n').filter((f) => IMG.test(f) && (f.startsWith('public/') || f.startsWith('src/')))

const oldByName = new Map()   // basename -> sha
const oldShas = new Map()     // sha -> path
for (const p of oldPaths) {
  const buf = execSync(`git show HEAD:"${p}"`, { encoding: 'buffer', maxBuffer: 64 * 1024 * 1024 })
  oldByName.set(basename(p), sha(buf))
  oldShas.set(sha(buf), p)
}

// NEW images = current working-tree image files under public/ (tracked or not).
const newPaths = execSync('git ls-files --cached --others --exclude-standard', { encoding: 'utf8' })
  .split('\n')
  .filter((f) => IMG.test(f) && f.startsWith('public/') && existsSync(f))

const checksumHits = []   // [newPath, oldPath]
const filenameHits = []   // basenames reused (excluding retained)
for (const p of newPaths) {
  const name = basename(p)
  const s = sha(readFileSync(p))
  if (name !== LOGO && oldShas.has(s)) checksumHits.push([p, oldShas.get(s)])
  if (!RETAINED_NAMES.has(name) && oldByName.has(name)) filenameHits.push(name)
}

console.log(`Old image files: ${oldPaths.length} | New image files: ${newPaths.length}`)
console.log(`\n(1) Shared checksums (excluding logo): ${checksumHits.length}`)
for (const [n, o] of checksumHits) console.log(`   ! ${n}  ==  ${o}`)
console.log(`\n(2) Reused filenames (excluding retained logo/favicon): ${filenameHits.length}`)
for (const n of filenameHits) console.log(`   ! ${n}`)

const retainedShared = [...RETAINED_NAMES].filter((n) => newPaths.some((p) => basename(p) === n))
console.log(`\nRetained by design (client logo + favicon, documented): ${retainedShared.join(', ') || 'none'}`)

if (checksumHits.length === 0 && filenameHits.length === 0) {
  console.log('\nPASS: no image shares a checksum or filename with the previous site (logo/favicon excepted).')
} else {
  process.exitCode = 1
}
