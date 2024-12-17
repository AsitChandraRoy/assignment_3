/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Lexend: '"Roboto", sans-serif' },
    },
  },
  plugins: [require("daisyui")],
};
