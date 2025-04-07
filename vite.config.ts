import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@ui": "/src/components/ui",
      "@routes": "/src/routes",
      "@contexts": "/src/contexts",
      "@mytypes": "/src/types",
      "@components": "/src/components",
      "@theme": "/src/theme/theme.ts",
      "@assets": "/src/assets",
    },
  },
});
