/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
      }
    },
    colors: {
      black: '#000000',
      white: '#ffffff',
      red: '#A62522',
      gray: '#999999',
      blue: '#5373f7',
      light_blue: '#f8f9ff',
      dark_blue: '#090e34'
    },
  },
}
