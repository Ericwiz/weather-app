/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line no-unused-vars
const daisyui = require('daisyui');
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg-image': "url('/src/assets/cloud-background.jpg')"
      },
      screens: {
        'mx-md': {'max': '767px'},
        'lg-xl': {'min': '1024px', 'max': '1279px'},
        'mx-xs': {'max': '479px'},
      }
    },
  },
  plugins: [
    require('daisyui')
  ],
}


