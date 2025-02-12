/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        primary_bg: "#1A1A1A",
        primary_text: "#FFFFFF",
        secondary_text: "#A6A6A6",
      },
    },
  },
  plugins: [],
};
