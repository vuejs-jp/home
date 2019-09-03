import { Configuration } from '@nuxt/types'

const config: Configuration = {
  mode: 'universal',

  srcDir: 'src/',

  build: {
    postcss: {
      plugins: {
        'postcss-nested': {},
        'postcss-css-variables': {}
      }
    }
  },

  buildModules: ['@nuxt/typescript-build'],

  head: {
    htmlAttrs: {
      lang: 'ja'
    },

    titleTemplate: '%s | Vue.js 日本ユーザーグループ',

    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],

    link: [
      { rel: 'icon', href: '/favicon-32.png', sizes: '32x32' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: 'rgb(0, 0, 0)' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,500,700|Roboto:400,500,700|Source+Sans+Pro:400,600,700|Inconsolata&display=swap' }
    ]
  },

  css: [
    'normalize.css',
    '@/assets/styles/bootstrap.css'
  ]
}

export default config
