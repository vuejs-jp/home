<template>
  <StyleMount class="HomeEvents u-wrapper" tag="section">
    <div class="container u-container">
      <div class="content u-section-content">
        <p class="u-section-content__heading">
          EVENTS
        </p>
        <h2 class="title u-section-content__title">
          日本中のVue.jsコミュニティが、あなたに会えるのを楽しみに<br>しています。
        </h2>

        <p class="u-section-content__body">
          Vue.jsの作者であるEvan Youも参加する日本最大のカンファレンス“Vue Fes Japan”、定期的に開催されVue.jsユーザーの人気を集める勉強会“v-tokyo Meetup”をはじめ、日本各地で多くのイベントを運営しています。
        </p>

        <p class="u-section-content__body">
          Vue.js 3.0を含む最新のVue.js情報から、日々の開発をもっと楽しくする驚きのTips、美味しい食事と楽しいお酒で大盛り上がりのDrink Up Partyまで。さぁ、最高峰のメンバー達と繋がる準備はできましたか？
        </p>

        <div class="u-section-content__actions">
          <div class="u-section-content__action">
            <ButtonOutline
              tag="a"
              :block="true"
              href="https://vuejs-meetup.connpass.com/"
              :icon="iconConnpass"
              label="直近のイベントをみる"
            />
          </div>
        </div>
      </div>

      <div class="image">
        <div class="image-container">
          <ImageStack :images="images" :aspect-ratio="1440 / 944 * 100" :to="stackImageTo" />
        </div>
      </div>
    </div>
  </StyleMount>
</template>

<script lang="ts">
import Vue from 'vue'
import IconConnpass from './icons/IconConnpass.vue'
import StyleMount from './StyleMount.vue'
import ButtonOutline from './ButtonOutline.vue'
import ImageStack from './ImageStack.vue'

export default Vue.extend({
  components: {
    StyleMount,
    ButtonOutline,
    ImageStack
  },

  data () {
    return {
      iconConnpass: IconConnpass,

      stackImageTo: 'right',

      images: [
        { src: '/img/home/event-image-001.jpg', alt: 'Example alt description for image 001.' },
        { src: '/img/home/event-image-002.jpg', alt: 'Example alt description for image 002 With long text that break the line.' },
        { src: '/img/home/event-image-003.jpg', alt: 'Example alt description for image 003.' },
        { src: '/img/home/event-image-004.jpg', alt: 'Example alt description for image 004.' },
        { src: '/img/home/event-image-005.jpg', alt: 'Example alt description for image 005.' },
        { src: '/img/home/event-image-006.jpg', alt: 'Example alt description for image 006.' }
      ]
    }
  },

  mounted () {
    this.refreshImageStackDirection()

    window.addEventListener('resize', this.refreshImageStackDirection)
  },

  methods: {
    refreshImageStackDirection (): void {
      this.stackImageTo = window.innerWidth >= 768 ? 'left' : 'right'
    }
  }
})
</script>

<style lang="postcss" scoped>
@import '@/assets/styles/variables';

.HomeEvents {
  padding-top: 32px;
  padding-bottom: 32px;

  @media (min-width: 375px) {
    padding-top: 48px;
    padding-bottom: 48px;
  }

  @media (min-width: 768px) {
    padding-top: 96px;
    padding-bottom: 64px;
  }

  @media (min-width: 1088px) {
    padding-bottom: 96px;
  }
}

.HomeEvents.mount-active {
  transition: opacity 0.5s, transform 0.5s;
  transition-delay: 0.75s;
}

.HomeEvents.mount {
  opacity: 0;
  transform: translateY(8px);
}

.container {
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
}

.content {
  max-width: 560px;
  margin: 0 auto;

  @media (min-width: 768px) {
    flex-shrink: 0;
    order: 2;
    width: 50%;
    max-width: 100%;
    padding: 0 0 0 24px;
  }

  @media (min-width: 1056px) {
    padding: 0 0 48px 24px;
  }

  @media (min-width: 1088px) {
    padding: 0 0 48px 32px;
  }
}

.title {
  @media (min-width: 1056px) {
    margin-right: -16px;
  }
}

.image {
  max-width: 384px;
  padding: 64px 0 0;
  margin: 0 auto;
  transform: translateX(-8px);

  @media (min-width: 768px) {
    flex-shrink: 0;
    order: 1;
    width: 50%;
    max-width: 100%;
    padding: 0 24px 0 0;
    transform: translateX(0);
  }

  @media (min-width: 1088px) {
    padding: 0 32px 0 0;
  }
}

.image-container {
  @media (min-width: 1088px) {
    margin-left: -24px;
  }
}
</style>
