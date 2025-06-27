import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    build: {
        outDir: "../backend-ocms/public/react",
        emptyOutDir: true,
    },
    server: {
        port: 5173,
        proxy: {
            // všetky volania na /api budú preposielané na backend
            '/api': {
                target: 'http://127.0.0.1:8000',
                changeOrigin: true,
                rewrite: path => path.replace(/^\/api/, ''),
            },
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'), // ⬅️ alias @ bude smerovať na ./src
            },
        },
    },
});
