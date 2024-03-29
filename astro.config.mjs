import { defineConfig, squooshImageService } from "astro/config";

import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  output: "server",
  integrations: [tailwind()],
  image: {
    service: squooshImageService(),
  },
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
});
