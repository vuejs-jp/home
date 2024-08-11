<script setup lang="ts">
import AppBackdrop from "./AppBackdrop.vue";
import AppDialog from "./AppDialog.vue";
import AppAlert from "./AppAlert.vue";
import { useBackDropStore } from "~/store";

const { isShowed } = useBackDropStore();
</script>

<template>
  <div class="ThePortalModals">
    <AppBackdrop :show="isShowed" />

    <AppDialog />
    <AppAlert />

    <PortalTarget
      name="modal"
      multiple
    />
  </div>
</template>
