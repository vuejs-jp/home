<script setup lang="ts">
import AppModal from "./AppModal.vue";
import { useModalStore } from "~/store/index";

const { state, close } = useModalStore();
</script>

<template>
  <AppModal name="alert">
    <div
      class="AppAlert"
      :class="{
        success: state.data?.type === 'success',
        error: state.data?.type === 'error'
      }"
    >
      <div class="box">
        <div class="status">
          <img
            v-if="state.data?.type === 'success'"
            src="/img/icons/check-circle.svg"
            alt="check-circle-icon"
            class="status-icon"
          >
          <img
            v-else
            src="/img/icons/x-circle.svg"
            alt="x-circle-icon"
            class="status-icon"
          >
        </div>

        <div class="body">
          <p class="title">
            {{ state.data?.title }}
          </p>
          <p class="text">
            {{ state.data?.text }}
          </p>
        </div>

        <div class="action">
          <button
            class="button"
            @click="close"
          >
            {{ $t('components.AppAlert.close') }}
          </button>
        </div>
      </div>
    </div>
  </AppModal>
</template>

<style lang="postcss" scoped>
@import '@/assets/styles/variables';

.AppAlert {
  margin-top: 64px;
  margin-right: 12px;
  margin-bottom: 96px;
  margin-left: 12px;

  @media (min-width: 375px) {
    margin-right: 16px;
    margin-left: 16px;
  }

  @media (min-width: 560px) {
    margin-right: 32px;
    margin-left: 32px;
  }
}

.AppAlert.success {
  .status-icon { fill: var(--c-vue-green); }
}

.AppAlert.error {
  .status-icon { fill: var(--c-danger); }
}

.box {
  max-width: 640px;
  padding: 48px 16px;
  margin: 0 auto;
  background-color: var(--c-white);
  border-radius: 8px;
  box-shadow: var(--shadow-depth-3);

  @media (min-width: 560px) {
    padding: 64px 48px 48px;
  }
}

.status {
  width: 48px;
  height: 48px;
  margin: 0 auto;
}

.status-icon {
  width: 48px;
  height: 48px;
}

.body {
  padding: 24px 8px 0;
}

.title {
  font-size: 20px;
  line-height: 32px;
  text-align: center;
}

.text {
  padding-top: 12px;
  text-align: center;
}

.action {
  padding-top: 48px;
  text-align: center;
}

.button {
  min-width: 128px;
  font-size: 14px;
  line-height: 48px;
  line-height: 48px;
  background-color: var(--c-white-mute);
  border-radius: 4px;
  transition: background-color 0.25s;

  &:hover {
    background-color: var(--c-gray-lighter);
  }
}
</style>
