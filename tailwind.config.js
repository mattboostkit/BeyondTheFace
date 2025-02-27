/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Sans"', 'sans-serif'],
        serif: ['"Noto Serif Display"', 'serif'],
      },
      colors: {
        sage: {
          600: '#687B70',  // Primary sage green (darker)
          500: '#9FADA5',  // Accent sage green (lighter)
          400: '#B5C0BA',  // Even lighter variant for hover states
        }
      }
    },
  },
  plugins: [],
};