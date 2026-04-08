import { defineConfig } from "vize";

export default defineConfig({
  linter: {
    enabled: true,
    preset: "happy-path",
  },
  typeChecker: {
    enabled: true,
    strict: true,
  },
});
