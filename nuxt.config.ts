// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: { compatibilityVersion: 4 },
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  imports: { autoImport: false },
  modules: ["@nuxt/eslint"],
  eslint: {
    config: {
      stylistic: {
        indent: 2,
        semi: true,
        quotes: "double",
        commaDangle: "never",
      },
    },
  },
});
