/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#1e1e1e",
        lightblack: "#343434",
        white: "#ffffff",
        purple: "#654898",
        yellow: "#fff5c6",
        red: "#ffd7d6",
        blue: "#d3f6ff",
        gray: "#909090"
      }
    },
  },
  plugins: [],
}

