/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF9500',
          dark: '#CC7600',
        },
        dark: {
          DEFAULT: '#0A0A0A',
          lighter: '#1A1A1A',
        }
      },
      fontFamily: {
        heading: ['Robus', 'sans-serif'],
        accent: ['GreatsRacing', 'cursive'],
        sans: ['Outfit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
