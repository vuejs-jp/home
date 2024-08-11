<script setup lang="ts">
import { computed } from "vue";
import { useModalStore } from "~/store";

const props = defineProps<{ name: string }>();
const { state } = useModalStore();
const isShowed = computed(() => state.value.data?.name === props.name);
</script>

<template>
  <portal to="modal">
    <transition name="fade">
      <div
        v-if="isShowed"
        class="AppModal"
      >
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
