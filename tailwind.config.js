/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#005397',
        secondary: '#4da0e4',
        accent: '#ffcc00',
      },
    },
  },
  plugins: [],
}