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
      fontFamily: {
        big: ["Zilla Slab", "Times New Roman", "Sans Serif"],
        small: ["Solway", "Times New Roman", "Sans Serif"],
        // Add more custom font families as needed
      },
    },
  },
  plugins: [],
};
