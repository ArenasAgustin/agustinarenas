import { defineConfig, passthroughImageService } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";
import { shield } from "@kindspells/astro-shield";

// https://astro.build/config
export default defineConfig({
  output: "server",
  site: "https://agustinarenas.vercel.app",
  integrations: [
    tailwind(),
    sitemap(),
    shield({
      securityHeaders: {
        contentSecurityPolicy: {
          contentSecurityPolicy: {
            "default-src": "'self'",
            "style-src": "'self'",
          },
        },
      },
    }),
  ],
  image: {
    service: passthroughImageService(),
  },
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});
