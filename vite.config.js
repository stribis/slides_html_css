import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        resources: resolve(__dirname, "resources/index.html"),
        lesson01: resolve(__dirname, "lesson-01/index.html"),
        lesson02: resolve(__dirname, "lesson-02/index.html"),
        lesson03: resolve(__dirname, "lesson-03/index.html"),
        lesson04: resolve(__dirname, "lesson-04/index.html"),
        lesson05: resolve(__dirname, "lesson-05/index.html"),
        lesson06: resolve(__dirname, "lesson-06/index.html"),
        lesson07: resolve(__dirname, "lesson-07/index.html"),
        lesson08: resolve(__dirname, "lesson-08/index.html"),
        lesson09: resolve(__dirname, "lesson-09/index.html"),
        lesson10: resolve(__dirname, "lesson-10/index.html"),
      },
    },
  },
});
