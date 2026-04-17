import { resolve } from "node:path";
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { shield } from "@kindspells/astro-shield";

const rootDir = new URL(".", import.meta.url).pathname;
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
            "img-src": "'self'",
            "font-src": "'self'",
            "connect-src": "'self' https://vitals.vercel-insights.com",
          },
        },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
