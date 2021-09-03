<template>
  <div class="App">
    <TheGlobalHeader />

    <div class="content">
      <Nuxt />
    </div>

    <TheGlobalFooter />

    <ThePortalModals />

    <CookieAgreementPopup />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TheGlobalHeader from '@/components/TheGlobalHeader.vue'
import TheGlobalFooter from '@/components/TheGlobalFooter.vue'
import ThePortalModals from '@/components/ThePortalModals.vue'
import CookieAgreementPopup from '@/components/CookieAgreementPopup.vue'

export default Vue.extend({
  components: {
    TheGlobalHeader,
    TheGlobalFooter,
    ThePortalModals,
    CookieAgreementPopup
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
