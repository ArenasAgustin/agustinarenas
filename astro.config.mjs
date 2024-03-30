import { defineConfig, squooshImageService } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: "server",
  site: "https://agustinarenas.vercel.app",
  integrations: [tailwind(), sitemap()],
  image: {
    service: squooshImageService()
  },
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  })
});