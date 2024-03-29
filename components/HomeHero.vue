<template>
  <StyleMount class="HomeHero u-wrapper">
    <div class="u-relative u-container">
      <div class="content">
        <i18n tag="h1" path="components.HomeHero.title" class="title">
          <template #newline><br></template>
          <template #welcome>{{ $t('components.HomeHero.welcome') }}</template>
          <template #japan>{{ $t('components.HomeHero.japan') }}</template>
          <template #community>{{ $t('components.HomeHero.community') }}</template>
        </i18n>
        <i18n tag="p" path="components.HomeHero.text" class="text">
          <template #newline><br></template>
          <template #vuefes>
            <span class="marker marker-1">
              {{ $t('components.HomeHero.vuefes') }}
            </span>
          </template>
          <template #docs>
            <span class="marker marker-2">
              {{ $t('components.HomeHero.docs') }}
            </span>
          </template>
          <template #largest-community>
            <span class="marker marker-3">
              {{ $t('components.HomeHero.largest-community') }}
            </span>
          </template>
        </i18n>
      </div>

      <div class="image">
        <div class="image-container">
          <figure class="image-figure">
            <img class="image-src" src="/img/home/tokyo-tower-with-sun.png" alt="Tokyo tower with sun">
          </figure>
        </div>
      </div>
    </div>
  </StyleMount>
</template>

<script lang="ts">
import Vue from 'vue'
import StyleMount from './StyleMount.vue'

export default Vue.extend({
  components: {
    StyleMount
  }
})
</script>

<style lang="postcss" scoped>
@import '@/assets/styles/variables';

.HomeHero {
  padding-top: 32px;
  padding-bottom: 32px;

  @media (min-width: 375px) {
    padding: 32px;
  }

  @media (min-width: 560px) {
    padding-top: 0;
    padding-bottom: 160px;
  }

  @media (min-width: 768px) {
    padding-bottom: 192px;
  }

  @media (min-width: 1056px) {
    padding-top: 32px;
    padding-bottom: 224px;
  }
}

.HomeHero.mount-active {
  .title,
  .text,
  .image {
    transition: opacity 0.5s, transform 0.5s;
  }

  .marker {
    transition: background-size 1s var(--ease-out-quint);
  }

  .title  { transition-delay: 0.1s; }
  .text   { transition-delay: 0.2s; }
  .image  { transition-delay: 0.5s; }

  .marker-1 { transition-delay: 0.8s; }
  .marker-2 { transition-delay: 0.9s; }
  .marker-3 { transition-delay: 1s; }
}

.HomeHero.mount {
  .title,
  .text,
  .image {
    opacity: 0;
    transform: translateY(8px);
  }

  .marker {
    background-size: 0 8px;
  }
}

.content {
  @media (min-width: 560px) {
    padding: 64px 0 32px;
  }

  @media (min-width: 768px) {
    padding: 96px 0 56px;
  }
}

.title {
  font-family: var(--font-family-en);
  font-size: 32px;
  font-weight: 600;
  line-height: 36px;
  text-align: center;
  letter-spacing: -0.4px;

  @media (min-width: 375px) {
    font-size: 40px;
    line-height: 44px;
  }

  @media (min-width: 560px) {
    width: 392px;
    font-size: 48px;
    line-height: 56px;
    text-align: left;
  }

  @media (min-width: 768px) {
    width: 512px;
    font-size: 64px;
    line-height: 68px;
  }
}

.text {
  padding-top: 16px;
  line-height: 28px;
  text-align: center;

  br { display: none; }

  @media (min-width: 560px) {
    width: 360px;
    text-align: left;
  }

  @media (min-width: 768px) {
    width: 100%;
    font-size: 20px;
    line-height: 36px;

    br { display: block; }
  }
}

.marker {
  position: relative;
  background: linear-gradient(var(--c-vue-green-lighter), var(--c-vue-green-lighter));
  background-repeat: no-repeat;
  background-position: 0 100%;
  background-size: 100% 8px;

  @media (min-width: 768px) {
    padding-bottom: 2px;
    background-size: 100% 12px;
  }
}

.image {
  padding-top: 56px;
  margin: 0 -24px;
  text-align: center;

  @media (min-width: 375px) {
    margin: 0 -32px;
  }

  @media (min-width: 560px) {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    padding-top: 0;
    padding-left: calc((100% / 3) * 2);
    margin: 0;
  }

  @media (min-width: 960px) {
    padding-left: calc((100% / 2));
  }
}

.image-container {
  position: relative;
}

.image-figure {
  @media (min-width: 560px) {
    position: absolute;
    left: 50%;
    width: 640px;
    transform: translateX(-50%);
  }

  @media (min-width: 768px) {
    width: 800px;
  }
}
</style>
