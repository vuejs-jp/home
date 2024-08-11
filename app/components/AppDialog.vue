<script setup lang="ts">
import AppModal from "./AppModal.vue";
import { useModalStore } from "~/store";

const { state } = useModalStore();
</script>

<template>
  <AppModal name="dialog">
    <div class="AppDialog">
      <div class="box">
        <p class="title">
          {{ state.data?.title }}
        </p>

        <div class="loader">
          <img
            src="/img/icons/preloader-dark.svg"
            alt="preloader-dark-icon"
            class="loader-icon"
          >
        </div>
      </div>
    </div>
  </AppModal>
</template>

<style lang="postcss" scoped>
@import '@/assets/styles/variables';

.AppDialog {
  margin: 96px 32px;
}

.box {
  max-width: 512px;
  padding: 48px 16px 32px;
  margin: 0 auto;
  background-color: var(--c-white);
  border-radius: 8px;
  box-shadow: var(--shadow-depth-3);
}

.title {
  text-align: center;
}

.loader {
  width: 64px;
  height: 64px;
  margin: 0 auto;
  margin-top: 16px;
}

.loader-icon {
  display: block;
  width: 64px;
  height: 64px;
}
</style>
