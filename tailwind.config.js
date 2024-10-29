/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html,vue}",
    "./public/index.html",
    "./*.html"
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.8)', opacity: '0.5' },
          '100%': { transform: 'scale(1.2)', opacity: '0' }
        }
      },
      animation: {
        'fade-in': 'fade-in 0.2s ease-out',
        'pulse-ring': 'pulse-ring 2s infinite'
      }
    }
  },
  plugins: [],
}
