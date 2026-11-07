/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#1a1412',     // Deep dark brown/black
          gold: '#d4af37',     // Metallic gold
          'gold-light': '#f3e5ab', // Light gold accent
          cream: '#fdfbf7',    // Ivory/cream
          maroon: '#601a1c',   // Deep maroon
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
