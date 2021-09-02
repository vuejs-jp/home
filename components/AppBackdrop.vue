<template>
  <transition name="fade">
    <div v-if="show" class="AppBackdrop" />
  </transition>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    show: { type: Boolean, default: false }
  }
})
</script>

<style lang="postcss" scoped>
@import '@/assets/styles/variables';

.AppBackdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: var(--z-index-backdrop);
  background-color: rgba(0, 0, 0, 0.8);
  transition: opacity 0.25s;
}

.AppBackdrop.fade-enter,
.AppBackdrop.fade-leave-to {
  opacity: 0;
}
</style>
