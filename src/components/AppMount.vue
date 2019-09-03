<template>
  <div class="AppMount mount-active" :class="{ 'mount-on': mounted }">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      mounted: false
    }
  },

  mounted () {
    setTimeout(() => { this.mounted = true }, 100)
  }
})
</script>
