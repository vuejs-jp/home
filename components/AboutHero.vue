<template>
  <StyleMount class="AboutHero u-wrapper">
    <div class="u-relative u-container">
      <div class="content">
        <i18n tag="h1" path="components.AboutHero.title" class="title">
          <template #newline><br></template>
          <template #vuejs>
            <span class="u-nowrap">{{ $t('components.AboutHero.vuejs') }}</span>
          </template>
        </i18n>
        <i18n tag="p" path="components.AboutHero.text" class="text">
          <template #newline><br></template>
        </i18n>
      </div>

      <div class="image">
        <div class="image-container">
          <ImageStack :images="images" :aspect-ratio="1136 / 2016 * 100" to="bottom" />
        </div>
      </div>
    </div>
  </StyleMount>
</template>

<script lang="ts">
import Vue from 'vue'
import StyleMount from './StyleMount.vue'
import ImageStack from './ImageStack.vue'
import AboutHeroPhotos from '@/data/about_hero_photos'

export default Vue.extend({
  components: {
    StyleMount,
    ImageStack
  },

  data () {
    return {
      images: AboutHeroPhotos
    }
  }
})
</script>

<style lang="postcss" scoped>
@import '@/assets/styles/variables';

.AboutHero {
  padding-top: 32px;
  padding-bottom: 96px;

  @media (min-width: 560px) {
    padding-top: 0;
  }

  @media (min-width: 768px) {
    padding-top: 32px;
    padding-bottom: 128px;
  }

  @media (min-width: 1056px) {
    padding-bottom: 160px;
  }
}

.AboutHero.mount-active {
  .title,
  .text,
  .image {
    transition: opacity 0.5s, transform 0.5s;
  }

  .title  { transition-delay: 0.1s; }
  .text   { transition-delay: 0.2s; }
  .image  { transition-delay: 0.5s; }
}

.AboutHero.mount {
  .title,
  .text,
  .image {
    opacity: 0;
    transform: translateY(8px);
  }
}

.content {
  text-align: center;

  @media (min-width: 560px) {
    padding: 32px 0 0;
  }

  @media (min-width: 768px) {
    padding: 64px 0 0;
  }
}

.title {
  margin: 0 auto;
  font-family: var(--font-family-en);
  font-size: 32px;
  font-weight: 600;
  line-height: 36px;
  letter-spacing: -0.4px;

  @media (min-width: 375px) {
    font-size: 40px;
    line-height: 44px;
  }

  @media (min-width: 560px) {
    font-size: 48px;
    line-height: 56px;
  }

  @media (min-width: 768px) {
    width: 100%;
    font-size: 64px;
    line-height: 68px;
  }
}

.text {
  max-width: 768px;
  padding-top: 16px;
  margin: 0 auto;
  line-height: 28px;
  letter-spacing: -0.4px;

  br { display: none; }

  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 36px;

    br { display: block; }
  }
}

.image {
  padding-top: 32px;

  @media (min-width: 768px) {
    padding-top: 64px;
  }
}

.image-container {
  margin: 0 -16px;

  @media (min-width: 768px) {
    margin: 0 -24px;
  }
}
</style>
