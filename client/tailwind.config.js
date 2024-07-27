/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        green: "#0ACF83",
        darkGreen: "#09BA75",
        black: "#000000",
        white: "#FFFFFF",
        grey: "#F3F3F3",
      },
    },
  },
  plugins: [],
};
