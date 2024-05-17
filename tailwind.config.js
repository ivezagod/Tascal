/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
      "about.html",
      "commissioning&startup.html",
      "consulting.html",
      "controlPanelsProduction.html",
      "electricalSystemDesign.html",
      "installation.html",
      "maintenance.html",
      "programing.html",
      "app.js",
      "aboutus.js",
    "{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'logo': "url('./media/logo/Tascal-Logo@4x.png')",
        'hero':"url('./media/random/slika.png')"

      },
      colors: {
        'dark-blue': '#000000',

      },
      maxWidth:{
        container: "1440px",
        picture: "1170px",
      },
      fontFamily:{
        'main':['montserrat']
      }
    },
  },
  plugins: [],
}

