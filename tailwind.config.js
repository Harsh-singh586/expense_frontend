/** @type {import('tailwindcss').Config} */
import percentageWidth from 'tailwindcss-percentage-width';

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [percentageWidth,]
}