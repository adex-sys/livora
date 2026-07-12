/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: {
          50: '#f5effa',
          100: '#e6d7f4',
          200: '#cdb0e8',
          300: '#b084db',
          400: '#8f57c1',
          500: '#7a3dab',
          600: '#662f95',
          700: '#5b2a86',
          800: '#4a226c',
          900: '#341a4d',
          DEFAULT: '#5b2a86',
        },
        gold: {
          300: '#e9d0a1',
          400: '#d6b16f',
          500: '#c8a96b',
          600: '#b08d4f',
          DEFAULT: '#c8a96b',
        },
        ivory: {
          50: '#f7f1e8',
          DEFAULT: '#f7f1e8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 20px 50px rgba(91, 42, 134, 0.18)',
      },
    },
  },
  plugins: [],
};
