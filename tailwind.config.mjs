/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      tradewind: {
        50: "#ffffff",
        100: "#eafbfa",
        200: "#baf2ef",
        300: "#83e2e0",
        400: "#43c4c7",
        500: "#29bcc2",
        600: "#209ba2",
        700: "#1f7d84",
        800: "#1f6b70",
        900: "#205b60",
        950: "#0d3e45",
      },
      "mine-shaft": {
        50: "#f6f6f6",
        100: "#e7e7e7",
        200: "#d1d1d1",
        300: "#b0b0b0",
        400: "#888888",
        500: "#6d6d6d",
        600: "#5d5d5d",
        700: "#4f4f4f",
        800: "#454545",
        900: "#333333",
        950: "#262626",
      },
    },
    fontFamily: {
      junction: ["Junction", "sans-serif"],
    },
    animation: {
      scroll: "scroll 1s ease-in-out infinite",
    },
    extend: {
      keyframes: {
        scroll: {
          "0%": { transform: "translate(-50%, 0)", opacity: 1 },
          "100%": { transform: "translate(-50%, 300%)", opacity: 0.1 },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
  darkMode: "class",
};
