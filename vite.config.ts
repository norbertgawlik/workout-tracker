import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@routes": "/src/routes",
      "@contexts": "/src/contexts",
      "@mytypes": "/src/types",
      "@theme": "/src/theme",
      "@assets": "/src/assets",
      "@ui": "/src/components/ui",
      "@icons": "/src/components/icons/",
      "@components": "/src/components",
      "@hooks": "/src/hooks",
      "@constants": "/src/constants",
    },
  },
});
