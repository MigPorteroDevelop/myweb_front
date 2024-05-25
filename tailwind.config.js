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
      dark_blue: '#090e34',

      grey: '#f2f2f2',
      beige: '#f5f5dc',
      softPink: '#f9c4d2',
      softBlue: '#c4d8e2',
      softGreen: '#d6e9d4',
      blueGrey: '#a8b8c8'
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
}
