/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{css,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ff6b00',
          dark: '#cc5500',
          light: '#ff8533',
        },
        dark: {
          DEFAULT: '#1a1a1a',
          lighter: '#2d2d2d',
          light: '#404040',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};