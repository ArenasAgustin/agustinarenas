const { defineConfig } = require("astro/config");
const sitemap = require("@astrojs/sitemap");

// https://astro.build/config
module.exports = defineConfig({
  output: "static",
  site: "https://agustinarenas.vercel.app",
  vite: {
    css: {
      postcss: {
        plugins: [
          require("postcss-import"),
          require("tailwindcss")({
            config: require.resolve("./tailwind.config.cjs"),
          }),
          require("autoprefixer"),
        ],
      },
    },
  },
  integrations: [
    sitemap.default({
      filter: (page) => !page.endsWith('/404'),
      changefreq: 'weekly',
      priority: 0.7,
    }),
  ],
});