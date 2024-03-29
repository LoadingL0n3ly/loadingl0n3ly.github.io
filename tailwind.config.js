const colors = require('tailwindcss/colors')

module.exports = {
  enabled: true,
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      fontWeight: {
      },
      colors: {
      },
      spacing: {
      },
      fontFamily: {
      }
    },
  },
  variants: {},
  plugins: [],
};
