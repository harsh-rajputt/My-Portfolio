/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyber-dark': '#0a0a0f',
        'cyber-surface': '#13131a',
        'cyber-accent': '#ff3366',
        'cyber-accent-dim': '#cc2952',
        'cyber-secondary': '#00ffcc',
        'cyber-text': '#e8e8ea',
        'cyber-text-dim': '#a0a0b0',
        'cyber-border': '#2a2a35',
      },
      fontFamily: {
        'display': ['Audiowide', 'cursive'],
        'body': ['Crimson Pro', 'serif'],
      },
      boxShadow: {
        'glow': '0 0 30px rgba(255, 51, 102, 0.3)',
        'glow-secondary': '0 0 30px rgba(0, 255, 204, 0.3)',
        'glow-strong': '0 0 40px rgba(255, 51, 102, 0.5)',
      },
      animation: {
        'fadeInUp': 'fadeInUp 0.8s ease forwards',
        'slideInLeft': 'slideInLeft 0.8s ease forwards',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'scrollDown': 'scrollDown 2s ease-in-out infinite',
        'glitch': 'glitch 1s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scrollDown: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '1' },
          '50%': { transform: 'translateY(10px)', opacity: '0.3' },
        },
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
      },
    },
  },
  plugins: [],
}