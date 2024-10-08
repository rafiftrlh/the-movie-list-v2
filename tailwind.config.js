/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
      },
      colors: {
        "dark-steel-blue": "#13395c"
      },
      aspectRatio: {
        poster: "2 / 3"
      },
      screens: {
        xs: '450px'
      }
    },
  },
  plugins: [],
}