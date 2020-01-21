<template>
  <div class="AppPage">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})

</script>

<style lang="postcss" scoped>
  .AppPage.page-leave-active {
    transition: opacity 0.25s, transform 0.25s;
  }

  .AppPage.page-leave-to {
    opacity: 0;
    transform: translateY(-4px);
  }
</style>
