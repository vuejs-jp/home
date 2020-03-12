<template>
  <div class="ThePortalModals">
    <AppBackdrop :show="showBackdrop" />

    <AppDialog />
    <AppAlert />

    <PortalTarget name="modal" multiple />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AppBackdrop from './AppBackdrop.vue'
import AppDialog from './AppDialog.vue'
import AppAlert from './AppAlert.vue'

export default Vue.extend({
  components: {
    AppBackdrop,
    AppDialog,
    AppAlert
  },

  computed: {
    showBackdrop () {
      return this.$store.state.backdrop.show
    }
  }
})
</script>
