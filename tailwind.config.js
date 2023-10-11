/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         fontFamily: {
            sans: ["DM Sans", "sans-serif"],
         },
         colors: {
            dark1: "#2B2D42",
            dark2: "#6C757D",
            primary: "#F25F5C",
         },
      },
   },
   plugins: [],
};
