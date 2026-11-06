# Feature: content-cleanup-i18n

**Objective:** Tighten portfolio content (projects, skills, contact) and add English/Spanish i18n.

**Why:** Duplicate project entries and outdated skills dilute the profile; a public phone number invites spam; the audience is both local (ES) and remote (EN).

**Scope:** `src/constants/*`, sections, layout/nav for i18n, Astro i18n config. Out of scope: Hero copy rewrite (pending decision), case-study pages, CI/tests.

**Constraints:** follow `DESIGN.md` tokens and classes; content lives in `src/constants/`; `pnpm build` must pass.

**Delivery strategy:** ask-on-risk. Forecast ~600+ authored lines (mostly translations in T3).

## Tasks

- [x] T1 — Merge "Brain Games API" into "Brain Games"; drop Bootstrap from skills; add Astro to skills. Route: inline (mechanical constants edits).
- [x] T2 — Contact: remove WhatsApp; show Email, LinkedIn, GitHub. Route: inline (one component + constants).
- [x] T3 — i18n EN (default, `/`) + ES (`/es/`): Astro i18n config, UI dictionary, localized content, language switcher, `lang`/hreflang/og:locale, sitemap i18n. Route: delegated writer (2+ non-trivial files).

## Checks
- `pnpm build` (astro check + build).

## Progress
- T1/T2: `pnpm build` exit 0, 0 errors. Solidity kept in Black Paradox project stack (factual), not in skills.
- T3: `pnpm build` exit 0, astro check 0 errors / 0 warnings. `dist/index.html` `lang="en"`, `dist/es/index.html` `lang="es"` with Spanish copy; both emit `hreflang` en/es/x-default + `og:locale`/`og:locale:alternate`; sitemap has `xhtml:link` alternates (es-AR). Content approach: `Localized` `{ en, es }` fields in constants; UI strings in `src/i18n/ui.ts`; pages moved to shared `src/components/pages/*` with thin `src/pages/` and `src/pages/es/` wrappers. 404 English-only (`translatable={false}`).
- RDD: off (global), no review.

## Next step
- All tasks done. Next: user review, then push/PR (user decision).
