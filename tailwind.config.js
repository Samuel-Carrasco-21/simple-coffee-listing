/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'principal-bg': "url('/src/assets/bg-cafe.jpg')",
        'header-bg': "url('/src/assets/vector.svg')",
      },
    },
    fontFamily: {
      'dm-sans': ['DM Sans', 'sans-serif'],
    },
  },
  plugins: [],
}

