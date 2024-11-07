import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
    server: {
        hmr: {
            overlay: false,  // Disables the HMR error overlay
        },
    },
    plugins: [
        laravel({
            input: ['./resources/js/app.jsx'],
            refresh: true,
        }),
        react({
            babel: false, // Disable Babel if not needed
            // babel: { presets: ["@babel/preset-react"] },
        }),

    ],
    optimizeDeps: {
        esbuildOptions: {
            loader: {
                '.js': 'jsx',
                '.jsx': 'jsx',
            },

        },
    },

});