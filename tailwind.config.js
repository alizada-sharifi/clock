/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        dark: "#282828",
      },
      colors: {
        gray: "#747474",
      },
      spacing: {
        lg: "350px",
        md: "230px",
      },
      boxShadow: {
        clockShadow:
          "inset 10px 10px 15px #202020,inset -10px -10px 15px #202020",
      },
    },
  },
  plugins: [],
};
