/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    colors: {
      white: {
        50: "#ffffff", // this is the default
        100: "#efefef",
        200: "#dcdcdc",
        300: "#bdbdbd",
        400: "#989898",
        500: "#7c7c7c",
        600: "#656565",
        700: "#525252",
        800: "#464646",
        900: "#3d3d3d",
        950: "#292929",
      },
      polar: {
        50: "#f0fbfa",
        100: "#e3f6f5", // this is the default
        200: "#b9e8e7",
        300: "#89d7d5",
        400: "#51bfbf",
        500: "#36a3a4",
        600: "#2f868b",
        700: "#2c6d72",
        800: "#2b595f",
        900: "#284c51",
        950: "#163136",
      },
      "bahama-blue": {
        50: "#f3f8fc",
        100: "#e7f1f7",
        200: "#cae0ed",
        300: "#9bc7de",
        400: "#65a9cb",
        500: "#418eb6",
        600: "#2c698d", // this is the default
        700: "#285b7c",
        800: "#244e68",
        900: "#234257",
        950: "#172b3a",
      },
      bunker: {
        50: "#a9d9e0",
        100: "#8fccdb",
        200: "#73bace",
        300: "#429ebd",
        400: "#30697e",
        500: "#1f4a5c",
        600: "#173240",
        700: "#11232c",
        800: "#0d161c",
        900: "#080e11",
        950: "#000000",
      },
    },
  },
  plugins: [],
};
