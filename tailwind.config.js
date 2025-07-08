/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Vite's default entry file
    "./src/**/*.{js,jsx,ts,tsx}", // Path to your source files
  ],
  theme: {
    extend: {
      fontSize: {
        xxs: "0.6rem",
      },
      keyframes: {
        cursorBlink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
      },
      animation: {
        cursor: "cursorBlink 500ms step-start infinite",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        spacemono: ['"Space Mono"', "monospace"],
      },
    },
    plugins: [],
  },
  darkMode: "class",
};
