/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyber-dark': 'var(--cyber-dark)',
        'cyber-surface': '#13131a',
        'cyber-accent': 'var(--cyber-accent)',
        'cyber-accent-dim': '#cc2952',
        'cyber-secondary': 'var(--cyber-secondary)',
        'cyber-text': 'var(--cyber-text)',
        'cyber-text-dim': '#a0a0b0',
        'cyber-border': '#2a2a35',
      },
      fontFamily: {
        'display': ['Audiowide', 'cursive'],
        'body': ['Crimson Pro', 'serif'],
      },
      // ... keep your existing boxShadow, animation, and keyframes here
    },
  },
  plugins: [],
}