module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        accent: 'var(--accent)',
        fg: 'var(--fg)',
        fg2: 'var(--fg2)',
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        border: 'var(--border)',
        border2: 'var(--border2)',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};