import { fileURLToPath, URL } from "node:url";
import vue from "@vitejs/plugin-vue";
import tresTemplateCompilerOptions from "@tresjs/core/template-compiler-options";
import { defineConfig } from "vite-plus";

export default defineConfig({
  plugins: [
    vue({
      template: tresTemplateCompilerOptions.template,
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    transformer: "lightningcss",
  },
  staged: {
    "*": "vp check --fix",
  },
  fmt: {},
  lint: {
    options: {
      typeAware: true,
      typeCheck: true,
    },
  },
});
