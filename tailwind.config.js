/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      }
    },
    colors: {
      black: '#090e34',
      white: '#ffffff',
      red: '#A62522',
      gray: '#969db2',
      blue: '#4d6df7',
      light_blue: '#f8f9ff',
      dark_blue: '#090e34'
    },
  },
}
