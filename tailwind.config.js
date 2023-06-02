/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      backgroundImage: {
        headline: "url('/media/noise.png')",
      },
      fontFamily: {
        primary: "Mont",
        secondary: "MontSec",
        bolds: "MontBold",
        semis: "SemiBold",
      },
      rotate: {
        17: "-90deg",
      },
    },
  },
  plugins: [],
};
