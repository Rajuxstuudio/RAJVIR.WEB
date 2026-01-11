import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  // 👇 This must match your GitHub Pages repo subpath
  base: '/active/',
  build: {
    outDir: 'dist', // default is fine, but make sure you're deploying this folder
  },

  server: {
    host: "localhost", // "::" can cause issues on some systems
    port: 8080,
  },

  plugins: [
    react(),
    mode === "development" && componentTagger()
  ].filter(Boolean),



  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));