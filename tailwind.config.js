const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        tajawal: ['"Tajawal"', ...defaultTheme.fontFamily.sans],
      },
    },
    plugins: [require("tailwindcss-rtl")],
  },
};

//test
