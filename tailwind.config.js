/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        colorChange: {
          '0%': { color: '#fbbf24' }, // amber-400
          '33%': { color: '#ffffff' }, // white
          '67%': { color: '#8D8BB3' }, // indigo-400
          '100%': { color: '#fbbf24' }, // amber-400
        },
      },
      animation: {
        colorChange: 'colorChange 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}