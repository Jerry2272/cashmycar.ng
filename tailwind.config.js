/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
     navColor: '#020101',
     activeColor: '#0A1A3C',
     textColor: '#565656',
     bgBackground: '#FFF7F6',
     footerColor: '#F5F5F5',
       primary: "#0A1A3C",
      accent: "#C6FF5E",
      whiteSoft: "#FFFFFF",
      },
      fontFamily:{
        manRope: ['Manrope', 'sans-serif'],
        spaceGrotesk: ['Space Grotesk', 'sans-serif'], // Add this line
      }
      
    },
  },
  plugins: [],
}
