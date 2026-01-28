/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#4B70F5',   // The main blue for your name and buttons
          light: '#E8EEFF',  // The light blue background for the "Full-Stack" badge
          dark: '#1A1A1A',   // Deep black/gray for dark text or sections
        },
        accent: {
          blue: '#4B70F5',
          lightblue: '#E8F1FF',
        },
        gray: {
          light: '#F8F9FA',  // Clean background gray
          medium: '#6B7280', // For descriptions and secondary text
          dark: '#374151',   // For main headings
        },
      },
      fontFamily: {
        // Inter is used in the screenshot for that clean, professional look
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem', // Used for those smooth profile image corners
      },
      boxShadow: {
        'soft': '0 2px 15px rgba(0, 0, 0, 0.08)',
        'medium': '0 4px 20px rgba(0, 0, 0, 0.12)',
        'large': '0 10px 40px rgba(0, 0, 0, 0.15)', // Used for the profile photo
      },
    },
  },
  plugins: [],
};