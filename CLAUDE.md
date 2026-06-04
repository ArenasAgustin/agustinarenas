# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # dev server (localhost:4321)
pnpm build        # astro check + build (type-check runs first)
pnpm preview      # preview production build
```

No test suite. No linting script. Type checking is part of `build`.

## Stack

- **Astro 5** — static output (`output: "static"`), deployed to Vercel; integrations: `@astrojs/sitemap`, `@vercel/analytics`
- **Tailwind CSS v4** — loaded via `@tailwindcss/vite` Vite plugin (no `tailwind.config.*`)
- **TypeScript** — strict mode (`astro/tsconfigs/strict`)
- **pnpm** — package manager; `pnpm.overrides` pins transitive deps

Path alias: `@/*` → `src/*`.

## Architecture

Single-page portfolio. One route (`src/pages/index.astro`) renders all sections in order: Hero → About → Experience → Skills → Projects → Contact. `src/pages/404.astro` is the only other page.

**Layers:**

- `src/layouts/Layout.astro` — root HTML shell with full SEO (OpenGraph, Schema.org JSON-LD, canonical URL, theme detection). Accepts optional `schema` prop to merge page-level Schema.org `@graph` items into the base graph.
- `src/sections/index/` — one `.astro` file per section; imported by `index.astro`
- `src/components/` — reusable components (`Nav`, `Footer`, `Buttons/ToggleTheme`)
- `src/constants/` — all site content as plain TypeScript exports. **Content lives here, not in sections.**
- `src/assets/` — project preview images (`.webp`) imported in `projects.ts` as `ImageMetadata`
- `src/styles/global.css` — design tokens, shared utility classes, reset

**Event management**: `EventController.astro` exposes `window.getController(key)` returning an `AbortController` per key, aborted on `astro:before-swap`. All interactive scripts (Nav, ToggleTheme) call `window.getController(key)` inside `astro:page-load` and pass the signal to event listeners. This prevents listener leaks during View Transitions.

**Scroll reveal**: Add `.reveal` (and optionally `.reveal-delay-{1|2|3}`) to any element. `Layout.astro` wires an `IntersectionObserver` that adds `.visible` on entry. Respects `prefers-reduced-motion`.

## Design System

### Fuente de Verdad Obligatoria: `DESIGN.md`
- **`DESIGN.md` es la ÚNICA fuente de verdad** para estilos, colores, tipografía, componentes y reglas de diseño.
- **ANTES de crear o modificar cualquier componente visual**:
  1. **Consultar `DESIGN.md`** para confirmar tokens, componentes y reglas.
  2. **Verificar `global.css`** para implementación actual.
  3. **No generar código sin validar** contra `DESIGN.md`.

### Tokens CSS
- **Definidos en `src/styles/global.css`** bajo `:root` (modo oscuro) y `[data-theme="light"]` (modo claro).
- **Lista de tokens**: `--bg`, `--bg2`, `--surface`, `--border`, `--border2`, `--accent`, `--accent2`, `--dim`, `--fg`, `--fg2`, `--grid-color`, `--mono`, `--sans`.

> **Nota**: `--accent` y `--accent2` son sobrescritos vía `@supports (color: oklch())` en navegadores que soportan OKLCH.

### Reglas Obligatorias
- **Usar `var(--token)`**: ❌ **Prohibido** hardcodear valores (ej: `#08080e`, `#7c5cbf`).
- **Unidades**: Usar `rem` para tamaños y espaciado (base: `1rem = 16px`).
- **Nuevos colores**: Deben añadirse a **ambos** archivos: `global.css` y `DESIGN.md`.
- **Fuentes**: No añadir nuevas fuentes sin documentarlas en `DESIGN.md`.
- **Componentes**: Usar **exclusivamente** las clases definidas en `DESIGN.md` (ej: `.button-primary`, `.card`).

**Shared utility classes** (defined in `global.css`, use these instead of custom styles):
- Buttons: `.button` + `.button-primary` / `.button-secondary` / `.button-error` / `.button-success`
- Inputs: `.input` (works on `input`, `select`, `textarea`)
- Cards: `.card`
- Sections: `.section`, `.section-header`, `.section-num`, `.section-title`, `.section-line`
- Animations: `.reveal`, `.reveal-delay-{1|2|3}`

**Theme toggle**: reads/writes `localStorage('theme')` and `document.documentElement.dataset.theme`. An inline `<script is:inline>` in `Layout.astro` runs before render to prevent FOUC.

## Accessibility

- All interactive elements must have `hover`, `active`, and `focus-visible` states
- Use `aria-*` attributes for interactive components (see `Nav.astro` for reference)
- Never ignore `prefers-reduced-motion` in animations
- Text contrast must meet WCAG AA (4.5:1 for normal text)

## Content Updates

| What | Where |
|------|-------|
| Projects | `src/constants/projects.ts` — set `featured: true` to surface; add image to `src/assets/` |
| Work experience | `src/constants/works.ts` |
| Skills / technologies | `src/constants/skills.ts`, `src/constants/technologies.ts` |
| Education | `src/constants/educations.ts` |
| Contact info / site URL | `src/constants/contact.ts` |
