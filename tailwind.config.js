/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: "#1c1c28",
        bgGreen: "#16b57f",
        textPrimary: "#ffffff",
        textSecondary: "#c8c7d8",
        textTertiary: "#a49eba",
        bgSecondary: "#393953",
        bgSecondaryHover: "#4f4c64",
        bgButton: "#6966ff",
        bgButtonHover: "#6c83ff",
      },
      fontFamily: {
        mono: ["var(--font-mono)"],
        inter: ["var(--font-inter)"],
        basker: ["var(--font-basker)"],
      },
    },
  },
  plugins: [],
};
