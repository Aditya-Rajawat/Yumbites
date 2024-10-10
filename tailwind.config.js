/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      xsm: { max: "360px" },
    },
    extend: {
      keyframes: {
        glossy: {
          "0%": { left: "-100%" },
          "100%": { left: "100%" },
        },
      },
      animation: {
        glossy: "glossy 2s linear infinite",
      },
      backgroundImage: ["hover", "focus"],
      fontFamily: {
        OpenSans: ["Open Sans", "sans-serif"],
      },
      zIndex: {
        100: "100",
        200: "200",
        300: "300"
      },
    },
  },
  plugins: [],
};
