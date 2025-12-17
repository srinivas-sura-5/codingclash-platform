/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#22d3ee',   // cyan
        dark: '#020617',      // bg
        card: '#020617',
        border: '#1e293b'
      }
    }
  },
  plugins: []
}
