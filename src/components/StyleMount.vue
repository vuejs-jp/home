<template>
  <Component :is="tag" class="AppMount mount-active" :class="{ mount }">
    <slot />
  </Component>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    tag: { type: String, default: 'div' }
  },

  data () {
    return {
      mount: true
    }
  },

  mounted () {
    setTimeout(() => { this.mount = false }, 100)
  }
})
</script>
