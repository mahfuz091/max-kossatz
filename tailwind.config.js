/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      manrope: ["Manrope"],
      inter: ["Inter"],
      poppins: ["Poppins"],
    },
    extend: {},
  },
  plugins: [],
};
