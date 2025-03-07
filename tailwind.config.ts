import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary_bg: "#1A1A1A",
        primary_text: "#FAFAF6",
        secondary_text: "#a3a3a3",
      },
    },
  },
  plugins: [],
} satisfies Config;
