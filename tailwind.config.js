/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0f172a',
          card: 'rgba(255, 255, 255, 0.05)',
          primary: '#ffffff',
          secondary: '#cbd5e1',
          border: 'rgba(255, 255, 255, 0.1)'
        },
        light: {
          bg: '#f9fafb',
          card: 'rgba(0, 0, 0, 0.04)',
          primary: '#1f2937',
          secondary: '#8b5cf6',
          border: 'rgba(0, 0, 0, 0.08)'
        }
      },
      screens: {
        'mobile-nav': '1025px',
      },
      animation: {
        'bounce-optimized': 'bounce-optimized 1s infinite',
        'pulse-optimized': 'pulse-optimized 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient-optimized': 'gradient-optimized 8s ease infinite',
      },
      keyframes: {
        'bounce-optimized': {
          '0%, 100%': { transform: 'translateY(0)', willChange: 'transform' },
          '50%': { transform: 'translateY(-0.5rem)' },
        },
        'pulse-optimized': {
          '0%, 100%': { opacity: '1', willChange: 'opacity' },
          '50%': { opacity: '.7' },
        },
        'gradient-optimized': {
          '0%, 100%': { backgroundPosition: '0% 50%', willChange: 'background-position' },
          '50%': { backgroundPosition: '100% 50%' },
        }
      }
    },
  },
  plugins: [],
}
