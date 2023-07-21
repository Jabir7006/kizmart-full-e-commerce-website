/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
      },
      backgroundColor: {
        'black-opacity': 'rgba(0, 0, 0, 0.5)', 
       },
    },
  },
  plugins: [],
}