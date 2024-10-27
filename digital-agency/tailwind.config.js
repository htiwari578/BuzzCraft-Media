/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        limegreen: '#c9f31d'
      },

      fontFamily : {
        ubuntu:  ['Ubuntu Sans' , 'sans-serif']
      }
    },
  },
  plugins: [],
}
