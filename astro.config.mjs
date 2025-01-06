import { defineConfig, passthroughImageService } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  output: "server",
  site: "https://agustinarenas.vercel.app",
  integrations: [tailwind(), sitemap()],
  image: {
    service: passthroughImageService(),
  },
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});
