import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Load environment variables
const API_URL = process.env.VITE_API_URL;
const PORT = process.env.VITE_PORT;

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: API_URL,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
    host: "0.0.0.0",
    port: PORT,
  },
});
