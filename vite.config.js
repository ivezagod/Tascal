

import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                about:'about.html',
                app:'app.js',
                aboutUs:'aboutus.js',
                tailwind:'tailwind.config.js',
                commissioning:'commissioning&StartUp.html',
                consulting:'consulting.html',
                installation:'installation.html',
                programing:'programing.html',
                electricalSystemDesign:'electricalSystemDesign.html',
                controlpanelsproduction:'controlPanelsProduction.html',
                references:'references.html',
                gallery:'gallery.html',
                maintenance:'maintenance.html',
                contact:'contact.html',
                anantiResort:'anantiResort.html',
                fourSeason:'fourSeason.html',
                grandHotel:'grandHotel.html',
                greenLevel:'greenLevel.html',
                rigaMall:'rigaMall.html',
                rusnano:'rusnano.html',
                seaFront:'seaFront.html',
                seaStar:'seaStar.html',
                tivatMontenegro:'tivatMontenegro.html',
                unitC:'unitC.html',
                stefanoRicci:'stefanoRicci.html'



            },
        },
    },
});
