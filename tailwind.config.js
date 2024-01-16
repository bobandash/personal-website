/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#292929",
        secondary: "#C5C6D0",
      },
      screens: {
        xs: "350px",
      },
    },
  },
  plugins: [],
};
