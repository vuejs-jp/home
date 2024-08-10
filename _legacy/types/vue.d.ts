import Vue from 'vue' // eslint-disable-line @typescript-eslint/no-unused-vars

declare module 'vue/types/vue' {
  interface Vue {
    $url (): string
  }
}
