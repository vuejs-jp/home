<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    tag: { type: String, default: "div" }
  },

  data() {
    return {
      mount: true
    };
  },

  mounted() {
    setTimeout(() => { this.mount = false; }, 100);
  }
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
