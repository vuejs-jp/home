<script setup lang="ts">
import { ref, onMounted } from "vue";

withDefaults(defineProps<{ tag?: string }>(), { tag: "div" });

const mount = ref(true);

onMounted(() => {
  setTimeout(() => {
    mount.value = false;
  }, 100);
});
</script>

<template>
  <Component
    :is="tag"
    class="AppMount mount-active"
    :class="{ mount }"
  >
    <slot />
  </Component>
</template>
