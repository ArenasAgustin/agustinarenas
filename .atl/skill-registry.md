# Skill Registry

**Delegator use only.** Any agent that launches sub-agents reads this registry to resolve compact rules, then injects them directly into sub-agent prompts. Sub-agents do NOT read this registry or individual SKILL.md files.

See `_shared/skill-resolver.md` for the full resolution protocol.

---

## User Skills

| Trigger | Skill | Path |
|---------|-------|------|
| "improve SEO", "optimize for search", "fix meta tags", "add structured data", "sitemap optimization", "search engine optimization" | seo | D:\Programacion\portfolio\.claude\skills\seo\SKILL.md |
| "build web components", "create landing pages", "design dashboards", "style web UI", "frontend design" | frontend-design | D:\Programacion\portfolio\.claude\skills\frontend-design\SKILL.md |
| "improve accessibility", "a11y audit", "WCAG compliance", "screen reader support", "keyboard navigation", "make accessible" | accessibility | D:\Programacion\portfolio\.claude\skills\accessibility\SKILL.md |
| "style with Tailwind", "build responsive layouts", "Tailwind CSS", "design systems" | tailwind-css-patterns | D:\Programacion\portfolio\.claude\skills\tailwind-css-patterns\SKILL.md |
| "work with Astro", ".astro files", "static site generation", "islands architecture", "content collections", "deploy Astro" | astro | D:\Programacion\portfolio\.claude\skills\astro\SKILL.md |
| "TypeScript generics", "conditional types", "mapped types", "template literals", "type-safe utilities" | typescript-advanced-types | D:\Programacion\portfolio\.claude\skills\typescript-advanced-types\SKILL.md |
| "Vite projects", "vite.config.ts", "Vite plugins", "SSR with Vite", "Rolldown migration" | vite | D:\Programacion\portfolio\.claude\skills\vite\SKILL.md |
| "deploy to Vercel", "Vercel deployment", "preview deployment", "Vercel CLI" | deploy-to-vercel | D:\Programacion\portfolio\.claude\skills\deploy-to-vercel\SKILL.md |
| "Node.js backend", "REST APIs", "GraphQL servers", "Express/Fastify", "middleware patterns" | nodejs-backend-patterns | D:\Programacion\portfolio\.claude\skills\nodejs-backend-patterns\SKILL.md |
| "create a pull request", "open a PR", "prepare changes for review" | branch-pr | C:\Users\agusk\.claude\skills\branch-pr\SKILL.md |
| "create a GitHub issue", "report a bug", "request a feature" | issue-creation | C:\Users\agusk\.claude\skills\issue-creation\SKILL.md |
| "judgment day", "adversarial review", "dual review", "doble review" | judgment-day | C:\Users\agusk\.claude\skills\judgment-day\SKILL.md |
| "caveman mode", "less tokens", "be brief", "/caveman" | caveman | C:\Users\agusk\.claude\skills\caveman\SKILL.md |
| "create a new skill", "add agent instructions", "document patterns for AI" | skill-creator | C:\Users\agusk\.claude\skills\skill-creator\SKILL.md |

---

## Compact Rules

Pre-digested rules per skill. Delegators copy matching blocks into sub-agent prompts as `## Project Standards (auto-resolved)`.

---

### seo
- Use **descriptive, unique title tags** (50-60 characters).
- Write **compelling meta descriptions** (150-160 characters).
- Use **semantic heading hierarchy** (`<h1>` to `<h6>`).
- Add **alt text** to all images.
- Use **canonical URLs** to avoid duplicate content.
- Implement **structured data** (JSON-LD) for rich snippets.
- Ensure **mobile responsiveness** (`<meta name="viewport" content="width=device-width, initial-scale=1">`).
- Use **hreflang tags** for multi-language sites.
- Submit **XML sitemaps** to Google Search Console.
- Avoid **blocking resources** in `robots.txt`.
- Use **descriptive anchor text** for internal links.
- Ensure **HTTPS** is enabled for all pages.

---

### frontend-design
- Commit to a **bold aesthetic direction** (e.g., minimalist, maximalist, retro-futuristic).
- Use **distinctive typography** (avoid generic fonts like Arial or Inter).
- Use **cohesive color palettes** with sharp accents.
- Add **motion** for micro-interactions (prefer CSS animations).
- Use **unexpected layouts** (asymmetry, overlap, diagonal flow).
- Add **atmospheric backgrounds** (gradients, noise textures, geometric patterns).
- Avoid **generic AI aesthetics** (purple gradients, cookie-cutter layouts).
- Use **high-quality images** and **custom illustrations**.
- Ensure **visual hierarchy** with typography and spacing.
- Test **dark mode** and **light mode** aesthetics.

---

### accessibility
- Follow **WCAG 2.2** guidelines (A, AA, or AAA).
- Ensure **keyboard navigability** (no keyboard traps).
- Use **semantic HTML** (`<button>`, `<nav>`, `<article>`).
- Add **alt text** to images and **ARIA labels** to icons.
- Ensure **color contrast** (4.5:1 for normal text, 3:1 for large text).
- Use **`:focus-visible`** for keyboard focus styles.
- Implement **skip links** for repetitive navigation.
- Use **`aria-live`** for dynamic content updates.
- Test with **screen readers** (VoiceOver, NVDA).
- Respect **`prefers-reduced-motion`** for animations.
- Ensure **target size** is at least 24×24px for interactive elements.
- Use **`lang` attribute** for multi-language content.

---

### tailwind-css-patterns
- Use **mobile-first** approach (base styles + responsive prefixes).
- Prefer **utility classes** over `@apply` for maintainability.
- Use **design tokens** (spacing, colors, typography).
- Extract **reusable components** for repeated patterns.
- Configure **dark mode** (`dark:` prefix).
- Ensure **accessibility** (focus styles, ARIA labels).
- Use **`scroll-margin-top`** for sticky headers.
- Test **responsive breakpoints** in DevTools.
- Avoid **arbitrary values** (prefer design tokens).
- Use **`min-h-screen`** for full-height layouts.
- Use **`container`** for centered content.

---

### astro
- Use `src/pages/` for routing (filename = route).
- Use `.astro` files for components and pages.
- Configure `astro.config.ts` for site-wide settings.
- Use `npx astro add` to install integrations (e.g., `vercel`, `node`, `cloudflare`).
- Use **content collections** for structured content.
- Deploy with **adapters** for SSR (e.g., `@astrojs/vercel`).
- Use `npx astro check` to catch type errors before building.
- Use `npx astro sync` to generate TypeScript types.
- Use `public/` for static assets (fonts, icons).
- Use `src/components/` for reusable components.
- Use `src/layouts/` for layout components.

---

### typescript-advanced-types
- Use **generics** for reusable, type-flexible components.
- Use **conditional types** for sophisticated type logic.
- Use **mapped types** to transform existing types.
- Use **template literal types** for string manipulation.
- Prefer **`unknown`** over `any` for type safety.
- Use **discriminated unions** for state machines.
- Use **type guards** and **assertion functions** for runtime checks.
- Use **`DeepReadonly`** and **`DeepPartial`** for nested immutability.
- Test types with **type assertions** (`AssertEqual`).
- Avoid **circular type references** and **overly complex types**.
- Use **`const assertions`** to preserve literal types.

---

### vite
- Use TypeScript (`vite.config.ts`) for configuration.
- Always use **ESM**, avoid CommonJS.
- Use `import.meta.glob` for dynamic imports.
- Prefer `defineConfig` for type-safe configuration.
- Use `@vitejs/plugin-react` (or SWC) for React projects.
- For SSR, use `ssrLoadModule` and configure `build.ssr`.
- Use `vercel deploy` for Vercel deployments (prefer git-push for linked projects).
- Always include `.vercel/` in `.gitignore`.
- Use `vite build --ssr` for SSR builds.
- Use `vite preview` to test production builds locally.

---

### deploy-to-vercel
- **Always deploy as preview** unless the user explicitly requests production.
- Check for `.vercel/project.json` or `.vercel/repo.json` to detect linked projects.
- Use `vercel deploy --no-wait` for direct deployments.
- Use `vercel link --repo` for repo-based linking (preferred over `vercel link`).
- Ask for **team selection** if the user belongs to multiple teams.
- Use `--scope <team-slug>` for all CLI commands if a team is selected.
- Fall back to the **no-auth deploy script** if CLI is not authenticated.
- Return both `previewUrl` and `claimUrl` for no-auth deployments.
- Use `vercel inspect <url>` to check deployment status.
- Use `vercel ls --format json` to retrieve preview URLs for git-push deployments.

---

### nodejs-backend-patterns
- Use **layered architecture**: `controllers/`, `services/`, `repositories/`, `models/`.
- Prefer **dependency injection** for services and repositories.
- Use **Zod** or **Joi** for input validation.
- Implement **custom error classes** (`AppError`, `ValidationError`, `NotFoundError`).
- Use **JWT** for authentication with short-lived access tokens and refresh tokens.
- Always hash passwords with `bcrypt`.
- Use **connection pooling** for databases.
- Implement **rate limiting** with Redis.
- Use **structured logging** (Pino or Winston).
- Follow **12-factor app principles** for configuration and environment variables.
- Use **Helmet** for security middleware.
- Use **CORS** with explicit allowed origins.

---

### branch-pr
- Every PR MUST link an approved GitHub issue — no exceptions.
- Every PR MUST have exactly one `type:*` label.
- Automated checks must pass before merge.
- Blank PRs without issue linkage will be blocked by GitHub Actions.

---

### issue-creation
- Use the correct template (bug report or feature request) — blank issues are disabled.
- Every issue gets `status:needs-review` on creation automatically.
- A maintainer MUST add `status:approved` before any PR can be opened.
- Questions go to Discussions, not issues.

---

### judgment-day
- Launch two independent blind judge sub-agents simultaneously.
- Judges review the same target without seeing each other's output.
- Synthesize findings, apply fixes, re-judge until both pass or escalate after 2 iterations.
- Resolve skill registry before launching judges — inject compact rules into each judge prompt.

---

### caveman
- Terse like smart caveman. Full technical substance stays. Only fluff dies.
- Drop: articles, filler words, pleasantries, hedging.
- Fragments OK. Short synonyms preferred.
- Technical terms exact. Code blocks unchanged.
- Default intensity: full. Switch with `/caveman lite|full|ultra`.

---

### skill-creator
- Create a skill only when a pattern is repeated, AI needs guidance, or conventions differ from defaults.
- Skill structure: frontmatter (name, description, triggers), When to Use, Critical Rules, Workflow.
- Place user-level skills in `~/.claude/skills/`, project-level in `.claude/skills/`.
- Each skill needs a SKILL.md with YAML frontmatter.

---

## Project Conventions

| Convention | Detail |
|------------|--------|
| Package manager | pnpm |
| Framework | Astro 5.18.1 (SSR via @astrojs/vercel) |
| Styling | TailwindCSS 3.2.7 + PostCSS + autoprefixer |
| Language | TypeScript 5.9.3 |
| Build tool | Vite 6.4.2 |
| Deployment | Vercel (@astrojs/vercel 10.0.2) |
| Routing | Single page — `src/pages/index.astro` |
| Sections | Hero, About, Experience, Skills, Projects, Contact |
| Source layout | `src/components/`, `src/sections/`, `src/constants/`, `src/layouts/`, `src/utils/` |
| Testing | None — no test framework installed |
| Git branch | `new-design` (active), `master` (main) |
| Strict TDD | Disabled (no test runner) |
