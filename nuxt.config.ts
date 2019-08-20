import { Configuration } from '@nuxt/types'

const config: Configuration = {
  mode: 'universal',

  srcDir: 'src/',

  dir: {
    assets: 'assets',
    layouts: 'layouts',
    middleware: 'middleware',
    pages: 'pages',
    static: 'static',
    store: 'store'
  },

  head: {
    titleTemplate: '%s | Vue.js 日本ユーザーグループ',

    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  },

  buildModules: ['@nuxt/typescript-build']
}

export default config
