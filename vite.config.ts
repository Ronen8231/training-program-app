import { defineConfig } from "vite";
import { fileURLToPath } from "url";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    base: "/training-program-app/",
    plugins: [react()],
    build: {
        outDir: "dist",

        rollupOptions: {
            input: {
                index: fileURLToPath(new URL("index.html", import.meta.url)),
                videos: fileURLToPath(new URL("videos.html", import.meta.url)),
                training_program: fileURLToPath(new URL("training_program.html", import.meta.url)),
            },
        },
    },
});
