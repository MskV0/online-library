import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import fs from "fs";

// Plugin to copy index.html as 404.html after build
const copy404Plugin = () => {
  return {
    name: 'copy-404',
    closeBundle: () => {
      const indexPath = resolve(__dirname, 'dist/index.html');
      const notFoundPath = resolve(__dirname, 'dist/404.html');
      if (fs.existsSync(indexPath)) {
        fs.copyFileSync(indexPath, notFoundPath);
      }
    }
  };
};

export default defineConfig({
  base: "/online-library/",
  plugins: [react(), copy404Plugin()],
});
