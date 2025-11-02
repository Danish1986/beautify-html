import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  // CRITICAL FIX: Base path for GitHub Pages
  base: '/beautify-html/', 
  
  plugins: [react()],
  
  // You might not need these paths in a simple build
  // If the build succeeds, we can add them back one by one.
  // resolve: {
  //   alias: {
  //     "@": path.resolve(__dirname, "./src"),
  //   },
  // },
});
