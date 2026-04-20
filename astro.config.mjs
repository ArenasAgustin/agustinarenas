import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { shield } from "@kindspells/astro-shield";

const rootDir = fileURLToPath(new URL(".", import.meta.url));
const modulePath = resolve(rootDir, "src", "generated", "sriHashes.mjs");

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: "https://agustinarenas.vercel.app",
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith('/404'),
      changefreq: 'weekly',
      priority: 0.7,
    }),
    shield({
      sri: {
        hashesModule: modulePath,
      },
      securityHeaders: {
        enableOnStaticPages: { provider: "vercel" },
        contentSecurityPolicy: {
          cspDirectives: {
            "default-src": "'self'",
            "base-uri": "'self'",
            "form-action": "'self'",
            "object-src": "'none'",
            "img-src": "'self' https://vitals.vercel-insights.com",
            "style-src": "'self' https://fonts.googleapis.com",
            "font-src": "'self' https://fonts.gstatic.com",
            "connect-src": "'self' https://vitals.vercel-insights.com",
            // script-src is intentionally omitted here — @kindspells/astro-shield
            // automatically injects per-page script hashes at build time, producing
            // a strict script-src with only the required nonces/hashes per page.
          },
        },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
