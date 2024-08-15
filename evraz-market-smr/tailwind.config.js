/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        noah: ["Noah", "sans-serif"],
      },
    },
    colors: {
      black: "#000000",
      grey: "#fffbf2",
      bgcard: "#fffaf2",
      greyforabout: "#e3e5e3",
      greyHover: "#fcf5e8",
      superGrey: "#868786",
      greyBg: "#868786",
      white: "#ffffff",
      green: "#5EC401",
      grenborder: "#42A948",
      red: "#FC0E0E",
      orange: "#ff9036  ",
      orangHover: "#f7862a",
      backgr: "#ffffff"

    },
    screens: {
      tel: {min: "350px", max: "450px"},
      sm: { min: "640px", max: "767px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: "768px", max: "1023px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: "1024px", max: "1279px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { min: "1280px", max: "1535px" },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      "2xl": { min: "1536px" },
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
