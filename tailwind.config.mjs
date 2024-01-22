/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    colors: {
      martinique: {
        50: "#f1f3fc",
        100: "#e6e9f9",
        200: "#d1d6f4",
        300: "#b5baec",
        400: "#9799e2",
        500: "#817dd7",
        600: "#7063c8",
        700: "#6052b0",
        800: "#4e458e",
        900: "#433d72",
        950: "#272341", // bg
      },
      "curious-blue": {
        50: "#f0faff",
        100: "#e0f4fe",
        200: "#b9eafe",
        300: "#7cdafd",
        400: "#36c8fa",
        500: "#0cb1eb",
        600: "#0091cc", // accent
        700: "#0171a3",
        800: "#066086",
        900: "#0b4f6f",
        950: "#07324a",
      },
      turquoise: {
        50: "#eefffc",
        100: "#c6fff8",
        200: "#8efff3",
        300: "#4dfbec",
        400: "#19e8dc",
        500: "#00d8cf", // accent
        600: "#00a4a1",
        700: "#028382",
        800: "#086767",
        900: "#0c5555",
        950: "#003134",
      },
    },
  },
  plugins: [],
};
