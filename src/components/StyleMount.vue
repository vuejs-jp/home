<template>
  <div class="AppMount mount-active" :class="{ mount }">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
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
