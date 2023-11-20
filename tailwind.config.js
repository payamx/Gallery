/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    // colors:{'button':'#007FFF' ,'grey':'#767676',},
  },
  plugins: [    require('tailwind-scrollbar-hide')
  ],
}