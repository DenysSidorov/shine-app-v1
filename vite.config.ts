// import { defineConfig } from "vite";
import { defineConfig } from "vitest/config";
import dotenv from "dotenv";
import path from "path";
import react from "@vitejs/plugin-react-swc";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import eslint from "vite-plugin-eslint";

dotenv.config();
export default defineConfig({
  plugins: [react(), eslint()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/tests/vitest-setup.ts",
  },
  define: {
    "process.env": process.env,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    port: Number(process.env.PORT),
  },
});
