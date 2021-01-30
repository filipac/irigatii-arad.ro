const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      green: colors.green,
      lime: colors.lime,
      blue: colors.blue,
      brown: {
        900: '#483b33',
      },
    },
    extend: {
      zIndex: {
        '-10': '-10',
      },
      maxWidth: {
        poza: '10rem',
        fit: 'fit-content',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
