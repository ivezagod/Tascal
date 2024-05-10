

import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                about:'about.html',
                app:'app.js',
                aboutus:'aboutus.js',
                tailwind:'tailwind.config.js',
                commisioning:'commissioning&StartUp.html',
                consultiong:'conuslting.html',
                installation:'installation.html',
                programing:'ptrograming.html',
                electricalSystemDesign:'electricalSystemDesign.html',
                controlpanelsproduction:'controlpanelsproduction.html',



            },
        },
    },
});
