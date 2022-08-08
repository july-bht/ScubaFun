

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
 
    },
    fontFamily: {},
    extend: {},

    screens: {

      'md-lg': '900px',

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }

  },
  plugins: [],
}