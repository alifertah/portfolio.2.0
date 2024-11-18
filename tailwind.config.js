/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-hero': 'linear-gradient(180deg, #1a1a1a, #121212)', // Dark gradient
      },
      colors: {
        accent: '#303030', // Vibrant accent for buttons
        grayLight: '#d1d5db', // Softer gray for text
        grayDark: '#1f2937', // Darker gray for background
      },
    },
  },
  plugins: [],
}

