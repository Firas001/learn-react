const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1.5rem",
        // lg: '3rem',
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      fontFamily: {
        tajawal: ['"Tajawal"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#23262F",
        accent: "#286F6C",
        grey: {
          DEFAULT: "#919297",
          1: "#D9D9D9",
          2: "#E7E9EB",
          3: "#F5F5F5",
        },
        white: "#fff",
        pink: "pink",
      },
      backgroundImage: {
        hero: 'url("/src/assets/img/hero-bg.png")',
        newsletter: 'url("/src/assets/img/newsletter.png")',
      },
      dropShadow: {
        primary: "0px 4px 10px rgba(15, 27, 51, 0.05);",
      },
    },
    plugins: [require("tailwindcss-rtl")],
  },
};
