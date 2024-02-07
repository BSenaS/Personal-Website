/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      purple: "#3f3cbb",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
      "color-gray": "#777",
      dark: "#232A3C",
      medium: "#293245",
    },
    extend: {
      aspectRatio: {
        "4/3": "4 / 3",
        "3/2": "3 / 2",
      },
      fontFamily: {
        inter: ["Inter"],
      },
      maxWidth: {
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
      },
    },
  },
  plugins: [],
};
