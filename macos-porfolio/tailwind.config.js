/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#e5e7eb', // Add your custom text color here
      },
      fontFamily: {
        avenir: ['Avenir Next Demi', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

