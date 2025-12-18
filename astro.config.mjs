import { defineConfig, passthroughImageService } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  output: "server",
  site: "https://agustinarenas.vercel.app",
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      changefreq: 'weekly',
      priority: 0.7,
      customPages: [
        'https://agustinarenas.vercel.app/',
        'https://agustinarenas.vercel.app/about',
        'https://agustinarenas.vercel.app/projects',
      ],
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
  vite: {
    plugins: [tailwindcss()],
  },
});
