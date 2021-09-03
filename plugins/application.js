import Vue from 'vue'

// Vue.prototype.$url = function (this: Vue): string {
//   return `https://vuejs-jp.org${this.$route.fullPath}`
// }

Vue.prototype.$url = function () {
  return `https://vuejs-jp.org${this.$route.fullPath}`
}
