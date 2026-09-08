/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Legacy Mappings (to prevent breaks in untouched components)
        navy: { 900: '#0A1424', 800: '#0A1424' },
        primaryRed: '#D00012',
        medicalBlue: '#0A1424',
        charcoal: '#20242B',
        offWhite: '#F3F1EC',
        // New Theme Palette
        primaryNavy: '#0A1424',      // Navy Black
        premiumBlue: '#8F0008',      // Dark Red
        highlightBlue: '#D00012',    // Primary Red
        softBlue: '#FCE8E8',         // Soft Red
        iceWhite: '#F9F9F9',         // Off White
        pureWhite: '#FFFFFF',        // White
        deepSlate: '#111111',        // Very Dark
        coolGrey: '#666666',         // Grey
        lightBlueGrey: '#DDDDDD',    // Light Grey
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 10px 40px -10px rgba(23, 32, 42, 0.1)',
      }
    },
  },
  plugins: [],
}
// Trigger rebuild
