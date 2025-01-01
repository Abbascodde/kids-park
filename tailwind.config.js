/** @type {import('tailwindcss').Config} */    module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      '-2xl': {max:'1535px'},
      // => @media (min-width: 1535px) { ... }

      '-xl': {max:'1279px'},
      // => @media (min-width: 1279px) { ... }

      '-lg': {max:'1023px'}, 
      // => @media (min-width: 1023px) { ... }

      '-md': {max:'767px'},
      // => @media (min-width: 767px) { ... }

      '-sm': {max:'576px'},
      // => @media (min-width: 576px) { ... }
    },
  },
  plugins: [],
}