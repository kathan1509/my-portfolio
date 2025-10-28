import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
    minify: "esbuild",
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          motion: ["framer-motion"],
          icons: ["lucide-react"],
          calcom: ["@calcom/embed-react"],
        },
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  define: {
    // Suppress Cal.com development warnings
    __DEV__: false,
  },
  optimizeDeps: {
    exclude: ["@calcom/embed-react"],
    include: ["react", "react-dom", "framer-motion", "lucide-react"],
  },
});
