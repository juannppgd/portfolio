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
      }
    },
  },
  plugins: [],
}
