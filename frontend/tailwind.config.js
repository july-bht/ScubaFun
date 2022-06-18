const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'black': '#151515',
      'white': '#FEFEFE',

      primary: '#93c5fd',
      secondary: '#E8E6E5',
      background: '#F5F5F5',
      text: '#747373',
      title: colors.black,
    },
    fontFamily: {},
    extend: {},
  },
  plugins: [],
}