import pluginVueA11y from "eslint-plugin-vuejs-accessibility";
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
  ignores: ["_legacy/*"]
}).append(
  ...pluginVueA11y.configs["flat/recommended"]
);
