<script lang="ts">
import { defineComponent } from "vue";
import AppBackdrop from "./AppBackdrop.vue";
import AppDialog from "./AppDialog.vue";
import AppAlert from "./AppAlert.vue";

export default defineComponent({
  components: {
    AppBackdrop,
    AppDialog,
    AppAlert
  },

  computed: {
    showBackdrop() {
      return this.$store.state.backdrop.show;
    }
  }
});
</script>

<template>
  <div class="ThePortalModals">
    <AppBackdrop :show="showBackdrop" />

    <AppDialog />
    <AppAlert />

    <PortalTarget
      name="modal"
      multiple
    />
  </div>
</template>
