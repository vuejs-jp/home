<template>
  <div class="App">
    <TheGlobalHeader />

    <div class="content">
      <Nuxt />
    </div>

    <TheGlobalFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TheGlobalHeader from '@/components/TheGlobalHeader.vue'
import TheGlobalFooter from '@/components/TheGlobalFooter.vue'

export default Vue.extend({
  components: {
    TheGlobalHeader,
    TheGlobalFooter
  }
})
</script>

<style lang="postcss" scoped>
.App {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex-grow: 1;
}
</style>
