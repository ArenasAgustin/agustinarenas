# Skill Registry

**Delegator use only.** Any agent that launches sub-agents reads this registry to resolve compact rules, then injects them directly into sub-agent prompts. Sub-agents do NOT read this registry or individual SKILL.md files.

See `_shared/skill-resolver.md` for the full resolution protocol.

## User Skills

| Trigger | Skill | Path |
|---------|-------|------|
| "improve SEO", "optimize for search", "fix meta tags", "add structured data", "sitemap optimization", "search engine optimization" | seo | D:\Programacion\portfolio\.agents\skills\seo\SKILL.md |
| build web components, pages, artifacts, posters, or applications; "build", "create UI", "frontend", "landing page", "dashboard", "React component", "HTML/CSS layout", "styling/beautifying web UI" | frontend-design | D:\Programacion\portfolio\.agents\skills\frontend-design\SKILL.md |
| "improve accessibility", "a11y audit", "WCAG compliance", "screen reader support", "keyboard navigation", "make accessible" | accessibility | D:\Programacion\portfolio\.agents\skills\accessibility\SKILL.md |
| styling React/Vue/Svelte components, building responsive layouts, implementing design systems, "Tailwind", "dark mode" | tailwind-css-patterns | D:\Programacion\portfolio\.agents\skills\tailwind-css-patterns\SKILL.md |
| work with Astro, .astro files, static site generation, islands architecture, content collections, "Astro", "SSG" | astro | D:\Programacion\portfolio\.agents\skills\astro\SKILL.md |
| complex type logic, reusable type utilities, compile-time type safety, "generics", "conditional types", "mapped types", "TypeScript advanced" | typescript-advanced-types | D:\Programacion\portfolio\.agents\skills\typescript-advanced-types\SKILL.md |
| Android Kotlin development, "Kotlin", "Jetpack Compose", "Hilt", "Coroutines" | android-kotlin | C:/Users/agusk/.config/opencode/skills/android-kotlin/SKILL.md |
| Go testing, "Go test", "teatest", "bubbletea TUI testing" | go-testing | C:/Users/agusk/.config/opencode/skills/go-testing/SKILL.md |
| React/Next.js performance, "Next.js performance", "bundle optimization", "React optimization", "Vercel best practices" | vercel-react-best-practices | C:/Users/agusk/.config/opencode/skills/vercel-react-best-practices/SKILL.md |

## Compact Rules

Pre-digested rules per skill. Delegators copy matching blocks into sub-agent prompts as `## Project Standards (auto-resolved)`.

### seo
- Use semantic HTML and proper heading hierarchy (h1 → h2 → h3)
- Include unique title tags (<60 chars) and meta descriptions (<160 chars)
- Add structured data (JSON-LD) for rich search results
- Create XML sitemap with max 50K URLs, submit to Google Search Console
- Use canonical URLs to prevent duplicate content issues
- Ensure HTTPS always, use hyphens in URLs, keep under 75 chars
- Add alt text to all images, use aria-labels for icon buttons

### frontend-design
- Choose bold aesthetic direction before coding: minimalist, maximalist, retro-futuristic, brutalist, luxury, etc.
- Pick distinctive fonts—avoid Inter, Roboto, Arial, system fonts; pair display + body fonts
- Use CSS variables for cohesive theming; commit to dominant colors with sharp accents
- Prioritize CSS-only animations for HTML, use Motion library for React
- Create unexpected layouts: asymmetry, overlap, diagonal flow, grid-breaking elements
- Add atmospheric backgrounds: gradient meshes, noise textures, geometric patterns, grain overlays
- NEVER use generic "AI slop" aesthetics—purple gradients on white, predictable layouts, cookie-cutter designs

### accessibility
- All images need alt text (or alt="" for decorative with role="presentation")
- Icon buttons need aria-label or visually hidden text; add aria-hidden to SVG
- Color contrast: 4.5:1 for normal text (AA), 7:1 (AAA); 3:1 for UI components
- Focus states MUST have visible outline with 2px offset
- Don't rely on color alone—add icons and text for error states
- Use semantic HTML: buttons for actions, links for navigation
- Add lang attribute to html tag, use skip links for keyboard navigation
- Video needs captions (track element), audio needs transcript

### tailwind-css-patterns
- Mobile-first: base styles for mobile, add sm:/md:/lg:/xl:/2xl: prefixes
- Compose utilities for complex styles, extract repeated patterns into components
- Use dark: modifier with class-based dark mode, toggle via document.documentElement.classList
- Content paths must include all template files or classes get purged
- Responsive order matters: md:flex NOT flex md:flex (mobile-first)
- Use design tokens (spacing scale 4/8/12/16, color palette) for consistency
- Include focus rings, ARIA labels, and respect prefers-reduced-motion

### astro
- Pages go in src/pages/ (filename becomes route), components in src/components/
- Use npx astro add [adapter] for deployment (vercel, node, cloudflare, netlify)
- Run npx astro sync after adding/changing plugins for TypeScript types
- Set site config to your deployed URL for sitemaps and canonical URLs
- Islands architecture: hydrate interactive components with client: directives
- Use content collections (src/content/) for type-safe markdown/MDX

### typescript-advanced-types
- Use generics with constraints (extends) for reusable type-safe components
- Conditional types: T extends string ? true : false for type-level logic
- Mapped types: { [P in keyof T]: T[P] } for transforming existing types
- Template literal types for string manipulation: `${Capitalize<T>}` 
- Utility types: Partial, Required, Pick, Omit, Record, ReturnType, Parameters
- Use infer in conditional types to extract types: T extends (...args: any[]) => infer R ? R : never
- Distributive conditional types automatically union: ToArray<string | number> = string[] | number[]

### android-kotlin
- Use Kotlin Coroutines for async operations; prefer viewModelScope for ViewModel
- Jetpack Compose: use @Composable functions, remember + mutableStateOf for state
- Hilt: @AndroidEntryPoint for Activities/Fragments, @HiltViewModel for ViewModels
- Use MockK for testing with mockkVerifications, coroutinesTestScope
- Navigation: NavHost with composable destinations

### go-testing
- Use standard Go testing package (testing.T)
- For TUI/Bubbletea: use teatest library for interactive testing
- Table-driven tests preferred for multiple scenarios
- Use t.Run() to structure test cases, t.Cleanup() for cleanup
- Mock interfaces, avoid testing external services directly
- goroutines leak detection with goleak (optional)

### vercel-react-best-practices
- Server Components by default, add 'use client' only for interactivity/hooks
- Use use() hook for promises/context, replaces useEffect for data fetching
- No useMemo/useCallback—React Compiler handles memoization automatically
- ref is a regular prop—no forwardRef needed
- Actions: use useActionState for form mutations, useOptimistic for optimistic UI
- Metadata: export metadata object from page/layout, no <Head> component
- Prefer React Server Actions over API routes for mutations
- Use Suspense for streaming, no need for full-page loading states

## Project Conventions

| File | Path | Notes |
|------|------|-------|
| No convention files found | — | No AGENTS.md, CLAUDE.md, .cursorrules, or GEMINI.md in project |

Read the convention files listed above for project-specific patterns and rules. All referenced paths have been extracted — no need to read index files to discover more.
