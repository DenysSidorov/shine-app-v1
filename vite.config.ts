import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react-swc";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import eslint from "vite-plugin-eslint";

export default defineConfig({
  plugins: [react(), eslint()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
