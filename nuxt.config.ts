// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: { compatibilityVersion: 4 },
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  imports: { autoImport: false },
  modules: ["@nuxt/eslint", "@nuxtjs/i18n"],
  eslint: {
    config: {
      typescript: true,
      stylistic: {
        indent: 2,
        semi: true,
        quotes: "double",
        commaDangle: "never"
      }
    }
  },
  i18n: {
    locales: [
      { code: "en", iso: "en-US", name: "English", file: "en-US.json" },
      { code: "ja", iso: "ja-JP", name: "日本語", file: "ja-JP.json" }
    ],
    lazy: true,
    skipSettingLocaleOnNavigate: true,
    langDir: "locales/",
    defaultLocale: "ja"
  },

  app: {
    head: {
      htmlAttrs: { lang: "ja" },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "og:type", property: "og:type", content: "website" },
        { hid: "og:image", property: "og:image", content: "https://vuejs-jp.org/img/og/og-default.png" },
        { hid: "og:image:width", property: "og:image:width", content: "1200" },
        { hid: "og:image:height", property: "og:image:height", content: "630" }
      ],
      link: [
        { rel: "icon", href: "/favicon.png", sizes: "32x32" },
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
        { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "rgb(0, 0, 0)" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,500,700|Roboto:400,500,700|Source+Sans+Pro:400,600,700|Dosis:600|Inconsolata&display=swap" }
      ]
    }
  },
  css: [
    "~/assets/styles/bootstrap.css"
  ],
  postcss: {
    plugins: {
      "postcss-custom-properties": {},
      "postcss-nested": {}
    }
  }
});
