import colors from "./src/config/colors.js";
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00548f",
        primaryDark: "#1A1A1D",
        sucessColor: "#22C55E",
        infoColor: colors.infoColor,
        errorColor: colors.errorColor,
        warningColor: colors.warningColor,
      },
    },
  },
  plugins: [],
};
