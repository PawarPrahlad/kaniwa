const { lightblue } = require('color-name');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        '60': ['60px','60px'],
        '52': ['3.25rem','3.875rem'],
        'base': ['16px','24px'],
        '56' : ['56px', '56px'],
       },
      colors:{
        wdark: '#00194C',
        wblue: '#08509D',
        lightblue: '#6A8EA7',
        wgray: '#687799',
      },
      fontFamily: {
        'rob': ['Roboto', 'sans-serif'],
        'pop': ['Poppins', 'sans-serif'],
        'urb': ['Urbanist', 'sans-serif'],
      },
      boxShadow: {
        'one': '0 2px 50px 0px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}