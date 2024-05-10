/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'logo': "url('/media/logo/Tascal-Logo@4x.png')",
        'hero':"url('../media/random/slika.png')"

      },
      colors: {
        'dark-blue': '#000000',

      },
      maxWidth:{
        container: "1440px"
      },
      fontFamily: {
        'main': ['montserrat']
      }
    }
  },
  plugins: [],
}

