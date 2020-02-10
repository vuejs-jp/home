<template>
  <StyleMount class="AboutHero u-wrapper">
    <div class="u-relative u-container">
      <div class="content">
        <h1 class="title">
          <span class="u-nowrap">Enrich Vue.js</span> ecosystem for everyone, all over Japan.
        </h1>
        <p class="text">
          Vue.js 日本ユーザーグループは、Vue.js を愛するあらゆる人々を支援する、<br>日本最大の Vue.js コミュニティです。各地でのイベントサポートや<br>ドキュメントの翻訳プロジェクトを通じて、日本中に Vue.js を<br>普及させると共に、世界中の Vue.js エコシステム発展に貢献します。
        </p>
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

export default Vue.extend({
  components: {
    StyleMount,
    ImageStack
  },

  data () {
    return {
      images: [
        { src: '/img/about/about-image-001.jpg', alt: 'Example alt description for image 001.' },
        { src: '/img/about/about-image-002.jpg', alt: 'Example alt description for image 002 With long text that break the line.' },
        { src: '/img/about/about-image-003.jpg', alt: 'Example alt description for image 003.' },
        { src: '/img/about/about-image-004.jpg', alt: 'Example alt description for image 004.' },
        { src: '/img/about/about-image-005.jpg', alt: 'Example alt description for image 005.' },
        { src: '/img/about/about-image-006.jpg', alt: 'Example alt description for image 006.' }
      ]
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
