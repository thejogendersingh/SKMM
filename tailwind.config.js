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
        navy: { 900: '#101C36', 800: '#101C36' },
        primaryRed: '#8F2332',
        medicalBlue: '#101C36',
        charcoal: '#20242B',
        offWhite: '#F3F1EC',
        // New Blue Theme Palette
        primaryNavy: '#0B1F3A',
        premiumBlue: '#1557A6',
        highlightBlue: '#2F80ED',
        softBlue: '#EAF3FF',
        iceWhite: '#F7FAFE',
        pureWhite: '#FFFFFF',
        deepSlate: '#172B3A',
        coolGrey: '#64748B',
        lightBlueGrey: '#DCE8F5',
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
