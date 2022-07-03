/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  important: true,
  theme: {
    extend: {
      colors: {
        primary: "#48A3E7",
        orange: "#F08A34",
        darkblue: "#0B1030",
        redbutton: "#F05E8C",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
