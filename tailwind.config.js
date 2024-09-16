/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      animation: {
        "ticker": "ticker 10s linear infinite"
      },
      keyframes: {
        ticker: {
          "from": {transform: "translateX(100%)"},
          "to": {transform: "translateX(-170%)"}
        }
      },
      fontFamily: {
        "satoshi": "Satoshi",
        "playfair": "PlayfairDisplay"
      },
      colors: {
        "darkwhite": "#F6F5F4",
        "dark": "#1A1A1A"
      }
    },
  },
  plugins: [],
}