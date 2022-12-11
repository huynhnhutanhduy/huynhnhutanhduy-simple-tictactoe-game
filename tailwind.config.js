/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": `rgba(149, 157, 165, 0.2) 0px 8px 24px`,
      },
      colors: {
        "gray-popup": "rgba(0,0,0,0.5)",
      },
    },
  },
  plugins: [],
};
