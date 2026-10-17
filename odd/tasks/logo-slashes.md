# Feature: logo-slashes

**Objective:** Replace the faceted "A" mark with the chosen "Slashes" concept (`/` `-` `\` typed A) and roll it out across favicon, icons and nav.

**Why:** Current mark loses its cuts at small sizes and does not relate to the site's code aesthetic.

**Scope:** brand masters (`brand/`), favicon + PNG icon set (`public/`), nav logo, short usage guide. Out of scope: OG images, CV.

**Constraints:** colours from `global.css` tokens; no live `<text>` in master marks; `prefers-reduced-motion` respected.

**Delivery strategy:** single-pr (small, mostly binary assets).

## Tasks

- [x] T1 — Refine master SVGs (symbol, tile, small-size cut) and render-check. Route: inline (mechanical SVG).
- [x] T2 — Export favicon.svg + PNG icon set with existing filenames; fix browserconfig paths. Route: inline (script).
- [x] T3 — Inline mark in `Nav.astro`, theme-aware via tokens. Route: inline (one file).
- [x] T4 — Usage guide `brand/README.md`; remove `public/icons/sample/`. Route: inline.

## Checks
- Render previews at 512/64/32/16 px and inspect.
- `pnpm build` (astro check + build).

## Progress
- T1: masters in `brand/`, angles snapped to 75°, svg_audit 100/100, preview sheet inspected (96/32 px, one-colour, reversed OK).
- T2: PNG set regenerated under existing filenames, `favicon.ico` added, `browserconfig.xml` paths fixed (were missing `/icons/`).
- T3: inline SVG in `Nav.astro`; dash blinks on hover/focus, static colour change under reduced motion.
- T4: `brand/README.md`; `public/icons/sample/` removed.
- Check: `pnpm build` exit 0 (only pre-existing warnings). Nav not checked visually in browser.
- RDD: not run (assets + one component; passive/low).
