/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  important: true,
  theme: {
    extend: {
      colors: {
        primary: "#715BED",
        orange: "#F08A34",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
