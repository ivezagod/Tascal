

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



            },
        },
    },
});
