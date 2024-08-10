<script setup lang="ts">
import StyleMount from "./StyleMount.vue";
</script>

<template>
  <StyleMount
    class="AboutDescription u-wrapper"
    tag="section"
  >
    <div class="u-container">
      <h2 class="title u-nowrap">
        {{ $t('vuejs-jp-ug') }}
      </h2>

      <div class="row">
        <div class="column">
          <p class="body">
            {{ $t('components.AboutDescription.message1') }}
          </p>
          <p class="body">
            {{ $t('components.AboutDescription.message2') }}
          </p>
        </div>

        <div class="column">
          <p class="body">
            {{ $t('components.AboutDescription.message3') }}
          </p>
          <p class="body">
            {{ $t('components.AboutDescription.message4') }}
          </p>
        </div>
      </div>
    </div>
  </StyleMount>
</template>

<style lang="postcss" scoped>
@import '@/assets/styles/variables';

.AboutDescription {
  padding-bottom: 128px;

  @media (min-width: 768px) {
    padding-bottom: 192px;
  }
}

.AboutDescription.mount-active {
  transition: opacity 0.5s, transform 0.5s;
  transition-delay: 0.75s;
}

.AboutDescription.mount {
  opacity: 0;
  transform: translateY(8px);
}

.title {
  padding-bottom: 32px;
  font-size: 20px;
  font-weight: 700;

  @media (min-width: 375px) {
    font-size: 24px;
    line-height: 32px;
  }

  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 40px;
  }
}

.row {
  @media (min-width: 768px) {
    display: flex;
  }
}

.column {
  & + & {
    padding-top: 28px;
  }

  @media (min-width: 768px) {
    width: 50%;

    &:nth-child(1) { padding-right: 16px; }
    &:nth-child(2) { padding-left: 16px; }

    & + & {
      padding-top: 0;
    }
  }

  @media (min-width: 1056px) {
    &:nth-child(1) { padding-right: 32px; }
    &:nth-child(2) { padding-left: 32px; }
  }
}

.body {
  line-height: 28px;

  & + & {
    padding-top: 28px;
  }
}
</style>
