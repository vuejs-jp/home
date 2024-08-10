<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    name: { type: String, required: true }
  },

  computed: {
    show(): boolean {
      return (this.$store as any).state.modal.name === this.name
    }
  }
})
</script>

<template>
  <portal to="modal">
    <transition name="fade">
      <div v-if="show" class="AppModal">
        <slot />
      </div>
    </transition>
  </portal>
</template>



<style lang="postcss" scoped>
@import '@/assets/styles/variables';

.AppModal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: var(--z-index-modal);
  height: 100%;
  transition: opacity 0.25s, transform 0.25s;
}

.AppModal.fade-enter,
.AppModal.fade-leave-to {
  opacity: 0;
  transform: translateY(8px);
}
</style>
