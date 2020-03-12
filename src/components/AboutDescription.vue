<template>
  <StyleMount class="AboutDescription u-wrapper" tag="section">
    <div class="u-container">
      <h2 class="title u-nowrap">
        Vue.js 日本ユーザーグループ
      </h2>
      <p class="title-en">
        Vue.js Japan User Group
      </p>

      <div class="row">
        <div class="column">
          <p class="body">
            Vue.js 日本ユーザーグループは、2015年5月に kazupon と有志によって立ち上げられました。当時、Vue.js には Nuxt.js や Vuetify といったエコシステムも存在せず、コミュニティもそれほど大きくはありませんでした。それでも、Vue.js のシンプルさと拡張性に未来を感じ、Vue.js コミュニティの立ち上げに至りました。 それから4年、Vue.js の発展とともに当コミュニティも大きく成長してきました。
          </p>

          <p class="body">
            2018年には Vue.js クリエイターである Evan You も来日した日本最大の Vue.js カンファレンス、“Vue Fes Japan”を開催。定期的に行われる Meetup イベントは、いまでは東京だけでなく日本全国で開催されるなど、日本の Vue.js コミュニティはますます盛り上がりを見せてます。
          </p>
        </div>

        <div class="column">
          <p class="body">
            Vue.js コミュニティの活況は日本だけにとどまらず、世界各地でカンファレンスが開催されています。 世界中ではもちろん、日本国内でも、ニュース、EC、広告など、幾多の分野に渡って現場での Vue.js 採用・導入実績が増え続けており、今後も伸びていくと考えています。
          </p>

          <p class="body">
            私たち Vue.js 日本ユーザーグループは、今後も引き続き、Vue.js の発展のために、日本全国、そして世界のために活動を続けていきます。
          </p>
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

.title-en {
  padding-top: 8px;
  padding-bottom: 32px;
  font-family: var(--font-family-en);
  font-size: 20px;
  font-weight: 600;

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 32px;
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
