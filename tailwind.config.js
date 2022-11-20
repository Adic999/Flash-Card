/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      sm: "280px",
      md: "390px",
      lg: "820px",
      "2xl": "1080px",
    },
    extend: {},
  },
  plugins: [],
};
