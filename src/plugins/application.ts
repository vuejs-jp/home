import Vue from 'vue'

Vue.prototype.$url = function (this: Vue): string {
  return `https://vuejs.org${this.$route.fullPath}`
}
