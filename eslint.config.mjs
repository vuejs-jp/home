// @ts-check

import antfu from "@antfu/eslint-config";
import pluginVueA11y from "eslint-plugin-vuejs-accessibility";
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  antfu({
    vue: true,
    typescript: true,
    stylistic: {
      quotes: "double",
      semi: true,
    },
  }),
  ...pluginVueA11y.configs["flat/recommended"],
);
