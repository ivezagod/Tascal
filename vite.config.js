

import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                about:'about.html',
                app:'app.js',
                aboutus:'aboutus.js',
                tailwind:'tailwind.config.js'


            },
        },
    },
});
