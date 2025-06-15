
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./index.html", "./src/**/*.{js,jsx,ts,tsx}" ],
  theme: {
    extend: {
      colors: {
        orange: {
          600: "#ea580c",
          700: "#c2410c",
          100: "#ffedd5",
          50: "#fff7ed"
        }
      }
    }
  },
  plugins: []
}
