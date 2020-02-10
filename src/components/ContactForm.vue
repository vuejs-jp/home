<template>
  <div class="ContactForm" />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  components: {

  }
})
</script>

<style lang="postcss" scoped>
@import '@/assets/styles/variables';

.ContactForm {
  padding: 128px 48px;
  background-color: var(--c-white);
  border-radius: 8px;
  box-shadow: var(--shadow-depth-3);
}
</style>
