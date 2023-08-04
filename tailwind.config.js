/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        textPrimary: "#ffffff",
        textSecondary: "#c8c7d8",
        textTertiary: "#a49eba",
        bgSecondary: "#393953",
        bgSecondaryHover: "#4f4c64",
        bgButton: "#6966ff",
        bgButtonHover: "#6c83ff",
      },
    },
  },
  plugins: [],
};
