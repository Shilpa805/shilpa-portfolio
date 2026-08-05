/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#09090b',
        accent: {
          sky: '#38bdf8',
          indigo: '#6366f1',
        }
      },
    },
  },
  plugins: [],
}
