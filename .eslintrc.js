module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'plugin:@intlify/vue-i18n/recommended',
    'prettier'
  ],
  plugins: [
  ],
  settings: {
    'vue-i18n': {
      localeDir: './locales/*.{json,json5,yaml,yml}',
      messageSyntaxVersion: '^8.25.0'
    }
  },
  // add your custom rules here
  rules: {
    '@intlify/vue-i18n/no-unused-keys': 'warn'
  }
}
