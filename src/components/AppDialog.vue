<template>
  <AppModal name="dialog">
    <div class="AppDialog">
      <div class="box">
        <p class="title">
          {{ title }}
        </p>

        <div class="loader">
          <IconPreloaderDark class="loader-icon" />
        </div>
      </div>
    </div>
  </AppModal>
</template>

<script lang="ts">
import Vue from 'vue'
import IconPreloaderDark from './icons/IconPreloaderDark.vue'
import AppModal from './AppModal.vue'

export default Vue.extend({
  components: {
    IconPreloaderDark,
    AppModal
  },

  computed: {
    title (): string {
      return this.$store.state.modal.data.title
    }
  }
})
</script>

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
