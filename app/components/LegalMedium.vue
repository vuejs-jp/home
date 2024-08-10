<script setup lang="ts">
import StyleMount from "./StyleMount.vue";
defineProps<{ title: string }>();
</script>

<template>
  <StyleMount class="LegalMedium">
    <div class="container">
      <h1 class="title">
        {{ title }}
      </h1>
      <div class="body u-medium">
        <slot />
      </div>
    </div>
  </StyleMount>
</template>

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
  .title,
  .body {
    transition: opacity 0.5s, transform 0.5s;
  }

  .title { transition-delay: 0s; }
  .title { transition-delay: 0.1s; }
  .body     { transition-delay: 0.2s; }
}

.LegalMedium.mount {
  .title,
  .body {
    opacity: 0;
    transform: translateY(8px);
  }
}

.container {
  max-width: 640px;
  margin: 0 auto;
}

.title {
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
