/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",  // Vite's default entry file
    "./src/**/*.{js,jsx,ts,tsx}",  // Path to your source files
  ],
  theme: {
    extend: {
      fontSize: {
        'xxs': "0.6rem"
      },
      colors: {
        'light': '#F7F9FA',
        'dark': '#212B36',
        'light-primary': '#005BB5',
        'dark-primary': '#4C9AFF',
        'light-secondary': '#00C2B7',
        'dark-secondary': '#008C8C',
      }
      ,
      keyframes: {
        cursorBlink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
      },
      animation: {
        cursor: 'cursorBlink 500ms step-start infinite',
      },
    },
    plugins: [],
  },
  darkMode: 'class',

}