/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'nutri-navy': '#1E2A38',
        'nutri-green': '#BFD98B',
        'nutri-deep': '#0F6B4F',
        'nutri-orange': '#FF9F1C'
      },
      borderRadius: {
        'pill': '9999px'
      }
    },
  },
  plugins: [],
}