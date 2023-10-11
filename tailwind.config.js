/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
         sans: ['DM Sans', "sans-serif"],
      },
      colors: {
         primary: "#5D5A88",
      }
   },
  },
  plugins: [],
}

