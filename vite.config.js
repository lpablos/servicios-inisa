import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/sass/app.scss", "resources/js/app.jsx"],
            refresh: true,
        }),
        react({
            babel: { presets: ["@babel/preset-react"] },
        }),
    ],
    resolve: {
        alias: {
            "@horizon": path.resolve(__dirname, "resources/js/horizon-ui"),
            "components": path.resolve(__dirname, "resources/js/horizon-ui"),
            "contexts": path.resolve(__dirname, "resources/js/horizon-ui"),
            "routes": path.resolve(__dirname, "resources/js/horizon-ui"),
            "assets": path.resolve(__dirname, "resources/js/horizon-ui"),
            "views": path.resolve(__dirname, "resources/js/horizon-ui"),
            "variables": path.resolve(__dirname, "resources/js/horizon-ui"),
            "layouts": path.resolve(__dirname, "resources/js/horizon-ui"),
        },
    },

    optimizeDeps: {
        esbuildOptions: {
            loader: {
                ".js": "jsx",
                ".jsx": "jsx",
            },
        },
    },
});
