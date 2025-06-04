import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/", // Base URL for GitHub Pages
  build: {
    outDir: "build", // Output directory for the build
    emptyOutDir: true,
    sourcemap: false,
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./client/src"),
      "@components": resolve(__dirname, "./client/src/components"),
      "@lib": resolve(__dirname, "./client/src/lib"),
      "@hooks": resolve(__dirname, "./client/src/hooks"),
      "@pages": resolve(__dirname, "./client/src/pages"),
      "@styles": resolve(__dirname, "./client/src/styles"),
      "@assets": resolve(__dirname, "./client/src/assets"),
      "@data": resolve(__dirname, "./client/src/data"),
    },
  },
  // Specify the correct entry point
  root: "./client",
});
