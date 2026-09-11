/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Legacy Mappings (preventing breaks)
        navy: { 900: '#193147', 800: '#041C30' },
        primaryRed: '#A51318',
        medicalBlue: '#193147',
        charcoal: '#20252A',
        offWhite: '#FAF7F5',
        // New Theme Palette
        primaryNavy: '#193147',      // Deep Navy
        premiumBlue: '#041C30',      // Dark Navy
        highlightBlue: '#A51318',    // Signature Red
        softBlue: '#FCE8E8',         // Soft Red (unchanged, just named weirdly previously)
        iceWhite: '#FAF7F5',         // Off White
        pureWhite: '#FFFFFF',        // White
        deepSlate: '#20252A',        // Charcoal
        coolGrey: '#666666',         // Grey
        lightBlueGrey: '#DDDDDD',    // Light Grey
        'brand-gold': '#B6834C',
        'brand-red': '#A51318',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        satoshi: ['Satoshi', 'sans-serif'],
        manrope: ['Satoshi', 'sans-serif'], // Map manrope to satoshi temporarily so old classes don't break until we replace them
      },
      boxShadow: {
        'premium': '0 10px 40px -10px rgba(23, 32, 42, 0.1)',
      }
    },
  },
  plugins: [],
}
// Trigger rebuild
