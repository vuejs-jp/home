<template>
  <div class="InputBase" :class="{ 'has-error': error }">
    <label class="label" :for="name">
      {{ label }}
    </label>

    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    name: { type: String, required: true },
    label: { type: String, required: true },
    error: { type: Boolean, default: false }
  }
})
</script>

<style lang="postcss" scoped>
@import '@/assets/styles/variables';

.InputBase.has-error {
  .label {
    color: var(--c-danger);
  }
}

.label {
  padding-bottom: 8px;
  padding-left: 4px;
  font-size: 14px;
  font-weight: 700;
  color: var(--c-gray);
  transition: color 0.25s;
}
</style>
