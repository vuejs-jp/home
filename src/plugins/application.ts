import Vue from 'vue'

Vue.prototype.$url = function (this: Vue): string {
  return `https://vuejs-jp.org${this.$route.fullPath}`
}
