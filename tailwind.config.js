/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f9f7f5',
          100: '#f0ebe7',
          200: '#e2d9d1',
          300: '#d1c5b9',
          400: '#BEB2A2', // Main color
          500: '#ac9d8a',
          600: '#9c8b77',
          700: '#8a7a68',
          800: '#766959',
          900: '#64584c',
        },
        secondary: {
          50: '#f5f7f9',
          100: '#e7ebf0',
          200: '#d1d9e2',
          300: '#b9c5d1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        }
      },
      fontFamily: {
        'serif': ['"Noto Serif Display"', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(to right, rgba(190, 178, 162, 0.9), rgba(154, 142, 126, 0.7))',
        'card-gradient': 'linear-gradient(135deg, #f9f7f5 0%, #e2d9d1 100%)',
        'button-gradient': 'linear-gradient(135deg, #BEB2A2 0%, #9c8b77 100%)',
        'section-gradient': 'linear-gradient(135deg, #f9f7f5 0%, #f0ebe7 100%)',
        'glass-gradient': 'linear-gradient(to right, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.3))',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
};