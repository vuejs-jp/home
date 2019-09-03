<template>
  <AppMount class="LegalMedium">
    <div class="container">
      <p class="title-ja">
        {{ titleJa }}
      </p>
      <h1 class="title-en">
        {{ titleEn }}
      </h1>

      <div class="body u-medium">
        <slot />
      </div>
    </div>
  </AppMount>
</template>

<script lang="ts">
import Vue from 'vue'
import AppMount from './AppMount'

export default Vue.extend({
  components: {
    AppMount
  },

  props: {
    titleJa: { type: String, required: true },
    titleEn: { type: String, required: true }
  }
})
</script>

<style lang="postcss" scoped>
@import '@/assets/styles/variables';

.LegalMedium {
  padding: 32px 24px 96px;

  @media (min-width: 375px) {
    padding: 32px 32px 96px;
  }

  @media (min-width: 768px) {
    padding: 48px 48px 128px;
  }
}

.LegalMedium.mount-active {
  .title-ja,
  .title-en,
  .body {
    opacity: 0;
    transition: opacity 0.5s, transform 0.5s;
    transform: translateY(8px);
  }

  .title-ja { transition-delay: 0s; }
  .title-en { transition-delay: 0.1s; }
  .body     { transition-delay: 0.2s; }
}

.LegalMedium.mount-on {
  .title-ja,
  .title-en,
  .body {
    opacity: 1;
    transform: translateY(0);
  }
}

.container {
  max-width: 640px;
  margin: 0 auto;
}

.title-ja {
  padding-bottom: 8px;
  color: var(--c-gray);

  @media (min-width: 640px) {
    font-size: 20px;
  }
}

.title-en {
  font-family: var(--font-family-en);
  font-size: 32px;
  font-weight: 600;
  line-height: 40px;

  @media (min-width: 640px) {
    font-size: 48px;
    line-height: 56px;
  }
}
</style>
