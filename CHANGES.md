# Total Carpentry — Redesign Change Record

A full redesign of tcarpentry.co.uk: new visual identity, new page structures, and
every piece of copy rewritten from scratch. Business facts, routes, review quotes,
the client's logo and the client's project photographs are unchanged. The contact
form endpoint, DNS and deploy config were not touched.

**Method for all copy (incl. blog):** the original text was read, reduced to a
bullet list of facts, closed, and rewritten fresh from the bullets — never edited
in place.

---

## 1. Visual identity (was → now)

| | Old | New |
|---|---|---|
| Ground | Near-black navy `#03071a` throughout (dark) | Warm light/mixed ground — cream `#FBF7EF`, sand `#F2E9DB`, white cards; espresso `#241C15` used only for the top strip, footer and a couple of accent bands |
| Accent | Single mustard `#dead1f` (failed contrast on white) | Terracotta/rust `#A8461E` primary (AA on white), forest green `#2C5545` secondary, ochre `#C68A2E` for stars/heritage |
| Display type | Poppins (heavy geometric) | **Fraunces** (warm characterful serif) |
| Body type | Inter | **Work Sans** (humanist) |
| Buttons | Flat mustard, white text (contrast fail) | `.btn` system: solid rust/white (AA), outline, on-dark and ghost variants; 44px min height; clear focus |
| Cards | Dark `#111827` panels | White `.card` on warm `#E7DCC9` hairline, soft shadow |
| Tokens | 3 CSS vars | Tailwind v4 `@theme` tokens (in `@layer components` so utilities win) |

The logo (client's own) sits on both grounds: original `tc-logo-light.svg` on the
dark footer, and a new light-ground variant `tc-logo-ink.svg` (white parts remapped
to espresso, mustard retained) in the header.

---

## 2. Structure & layout

- **Killed the universal inner-page template** (dimmed full-bleed photo → centred
  title → two-line intro → centred heading). Each page type now has a distinct
  header: service pages get an asymmetric split with a framed photo + guarantee
  chip; the gallery goes straight to a photo grid; reviews open on a dark
  rating-led panel; areas is map/-chip-forward; blog is editorial; contact leads
  with contact-method cards.
- **Homepage re-sequenced and re-shaped.** Retired the 2×2 glass service-tile panel
  floated over the hero, the four-across service card row, and the alternating
  text-left/image-right blocks. New order: light text-forward hero → espresso
  accreditation strip → **stacked numbered service index** → single feature band →
  gallery mosaic → reviews → "how a job runs" steps → contact CTA.
- **Footer** is no longer three equal Quick-Links/Contact columns — it is four
  horizontal bands (brand + social row, single inline nav row, inline contact
  directory, legal bar).

---

## 3. Page-by-page (was → now)

**Global chrome** — Old: dark utility bar, dark sticky header with mustard "Call Us"
button, dark footer (3 cols), floating WhatsApp bubble that overlapped content at
~400px. New: espresso top strip, light sticky header (accessible Services
disclosure button), four-band footer, skip-link, landmarks, **mobile sticky
call+WhatsApp bar**, WhatsApp bubble now desktop-only so it never overlaps content.

**Home** — Old headline "Carpenter in Portishead & the Surrounding Areas" + "Welcome
to…", "Residential Carpentry", "What We Can Do for You", "Experienced &
Recommended Carpentry Contractors". New: "Kitchens, wardrobes and floors, built by
hand in Portishead" + re-shaped sections listed above; all body copy fresh.

**Services overview** — Old "Total by Name, Total by Nature" + capability grid + link
list. New "Four trades under one roof…" with service cards, a guarantee callout and
a "also on the tools" chip set; all copy fresh.

**Kitchen / Wardrobes / Renovations / Flooring** — Old shared dimmed hero + alternating
blocks + bullet lists (kitchen layouts, door styles, wardrobe styles, etc.). New
split header + numbered "spec-sheet" sections with check-listed bullets; every
heading, paragraph, bullet and FAQ rewritten; all four bullet lists reworded.

**Reviews** — Old "What Our Clients Have to Say". New dark rating-led header "Judged on
the finish, not the pitch". **Review quotes and names are reproduced verbatim.**

**Gallery** — Old "Past Projects" with dimmed hero. New "Recent jobs, photographed on
site" — slim heading strip straight into an accessible lightbox grid; fresh,
specific alt text on every image; below-fold images lazy-loaded.

**Areas We Cover** — Old "A Time Served Carpenter Serving Portishead & All Surrounding
North Somerset Locations" with a stock beach hero. New "Based in Portishead, out
across North Somerset" with a client photo, area chips and the map. Area list
unchanged (required).

**Contact** — Old "Reach Out to Discuss Your Next Project". New "Tell us about the job"
with contact-method cards + the form in a card; map retained; form endpoint
unchanged.

**Blog index** — Old "Blog" generic intro. New "Notes from the workshop" editorial
header; fresh card summaries and titles.

**5 blog posts** — All rewritten from scratch with new titles, structure, section
headings, examples and lengths (URL slugs unchanged):
- `/blog/carpenter-in-portishead` → "Hiring a carpenter in Portishead: what actually matters"
- `/blog/fitted-wardrobes-in-portishead` → "Fitted wardrobes: turning dead corners into storage"
- `/blog/house-renovations-in-portishead` → "Renovating a Portishead home without the chaos"
- `/blog/kitchen-installation-in-portishead` → "What a local joiner brings to a kitchen fit"
- `/blog/wood-flooring-installation-in-portishead` → "Solid timber or laminate? Choosing a floor that lasts"

**404** — New page + catch-all route (`*`) added; fresh copy, links home/services + call.

**Metadata** — Per-route `<title>` and description/OG via a `useDocumentMeta` hook;
`index.html` title, description, OG and a fresh `HomeAndConstructionBusiness`
JSON-LD block all rewritten.

### Client-directed adjustment (during build)
At the client's request, **call-to-action button copy and destinations were kept the
same as the previous site** — "Contact Us", "Our Services", "Our Gallery", "Send
Message", "Call Us 07834 772046", "Read all our reviews on Google" — while using the
new button styling. (This intentionally overrides the brief's "rewrite every button
label" line for CTAs; the labels are short generic phrases and do not affect the
8-word copy check below.)

---

## 4. Accessibility (WCAG 2.2 AA)

- Contrast: every text/background pair verified ≥ 4.5:1 (body) / 3:1 (large & UI),
  including hover/disabled states — see measured ratios below. The old mustard-on-
  white button and grey-on-near-black body are gone.
- One `<h1>` per page; correct heading order; `header`/`nav`/`main`/`footer`
  landmarks; real lists; breadcrumbs.
- Global visible `:focus-visible` outline (forest, 3px) — no `outline:none`
  anywhere. Skip-to-content link.
- Tap targets ≥ 44×44 with spacing; form fields have visible labels, correct
  `type`/`autocomplete`/`inputMode`, errors linked via `aria-describedby` and
  announced via `role="alert"` + `aria-live`.
- Content images have meaningful alt text; decorative SVGs `aria-hidden`.
- `prefers-reduced-motion` respected; 16px body floor, 1.65 line-height.
- Keyboard-only pass done: skip link → header → Services disclosure (Enter/Esc) →
  content → footer; lightbox closes on Esc and arrows navigate.

Measured contrast (ratio): ink/paper 15.7 · ink-soft/paper 7.6 · ink-soft/sand 6.7 ·
rust/paper 5.5 · white/rust 5.9 · white/rust-dark 8.0 · white/forest 8.4 ·
forest/paper 7.9 · ink/ochre 5.7.

---

## 5. Mobile

- Tested 320 / 375 / 390 / 768 — **no horizontal scroll at any width** (verified;
  the review carousel scrolls inside its own container).
- Persistent **sticky call + WhatsApp bar** on mobile (calling is the primary
  action); page content is padded to clear it.
- WhatsApp bubble is desktop-only, so it never covers a button or link.
- Images responsive with reserved aspect ratios; below-fold images `loading="lazy"`.

---

## 6. Asset inventory

| File | Source | Licence | Date obtained |
|---|---|---|---|
| `public/img/*.jpg` (30 photos) | Client's own project photographs, re-exported (re-encoded) from the client's images and renamed | Client-owned, cleared for reuse | 2026-08-05 |
| `public/tc-logo-light.svg` | Client's own logo (unchanged) | Client-owned | retained |
| `public/tc-logo-ink.svg` | Client logo, recoloured for the light ground (white→espresso) | Client-owned (derived) | 2026-08-05 |
| `public/favicon.png`, `favicon.svg` | Client logo-derived favicon, re-exported | Client-owned (derived) | 2026-08-05 |
| `public/img/accreditation-city-and-guilds.svg` | City & Guilds mark — real accreditation, re-serialised + renamed | Trademark of City & Guilds; used to denote affiliation | 2026-08-05 |
| `public/img/partner-howdens.svg` | Howdens mark — real trade partner, re-serialised + renamed | Trademark of Howdens; used to denote affiliation | 2026-08-05 |
| `public/img/partner-quick-step.svg` | Quick-Step mark — real flooring partner, re-serialised + renamed | Trademark of Quick-Step; used to denote affiliation | 2026-08-05 |
| UI + service icons | `lucide-react` (existing dependency) | **ISC** | 2026-08-05 |
| Facebook / Instagram / WhatsApp / Google glyphs | Inline generic SVG paths (standard platform brand marks) | Platform brand marks | — |

**Removed** (agency-sourced / unused): `public/gallery/*` (30 old-checksum copies,
superseded by `public/img/*`); `public/gallery/Depositphotos_11497516_XL-scaled.jpg`
(licensed stock); `public/portishead-beach.jpg` (stock decorative); `public/icons.svg`
(unused agency social sprite); the four hand-embedded agency service-icon SVGs
(replaced by lucide); Vite template leftovers `src/assets/{hero.png,react.svg,vite.svg}`
and `src/App.css`.

No new runtime dependencies were added (lucide-react was already present).

---

## 7. Verification results

Both checks are scripted and repeatable.

### 7.1 Copy — no shared run of 8+ words
`node scripts/verify-copy.mjs`

```
Prose 8-word runs — old: 4703, new: 3383
Shared runs after exclusions: 0
PASS: no run of 8+ words is shared between old and new copy.
```

Compares the previous build (git `HEAD`) with the current tree, over prose only
(long string literals + JSX text). Excludes, as the brief allows, the verbatim
customer review quotes, the areas-covered place names, fixed service names, phone
numbers and the address.

### 7.2 Images — no shared checksum, no reused filename
`node scripts/verify-images.mjs`

```
Old image files: 42 | New image files: 37
(1) Shared checksums (excluding logo): 0
(2) Reused filenames (excluding retained logo/favicon): 0
Retained by design (client logo + favicon, documented): tc-logo-light.svg, favicon.png, favicon.svg
PASS: no image shares a checksum or filename with the previous site (logo/favicon excepted).
```

Every shipped image has a fresh checksum and a fresh filename, except the client's
own logo (`tc-logo-light.svg`, excluded by the brief) and its logo-derived favicon
(`favicon.png`/`.svg`, re-exported to a fresh checksum but keeping their
conventional filenames — noted here as the one documented filename retention).
