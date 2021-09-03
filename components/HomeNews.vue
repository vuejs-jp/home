<template>
  <StyleMount class="HomeNews u-wrapper" tag="section">
    <div class="container u-container">
      <div class="content u-section-content">
        <p class="u-section-content__heading">
          NEWS
        </p>
        <h2 class="title u-section-content__title">
          もっとも身近な Vue.js <span class="u-nowrap">情報</span>を<br><span class="u-nowrap">どうか、</span>お見逃し<span class="u-nowrap">なく。</span>
        </h2>

        <p class="u-section-content__body">
          Vue.js の最新情報や、各種イベント情報、Vue.js 日本ユーザーグループの活動状況に関するニュースをSNSやブログを通じて発信しています。いますぐフォローして、日本の Vue.js 事情を追いかけよう！
        </p>

        <div class="actions">
          <a class="action" href="https://twitter.com/vuefes" target="_blank" rel="noopener noreferrer">
            <IconTwitter class="icon twitter" />
            Vue.js JP 公式 Twitter
          </a>
          <a class="action" href="https://note.com/vuejs_jp" target="_blank" rel="noopener noreferrer">
            <IconNote class="icon note" />
            Vue.js JP 公式 Note
          </a>
        </div>
      </div>
    </div>
  </StyleMount>
</template>

<script lang="ts">
import Vue from 'vue'
import IconTwitter from './icons/IconTwitter.vue'
import IconNote from './icons/IconNote.vue'
import StyleMount from './StyleMount.vue'

export default Vue.extend({
  components: {
    StyleMount,
    IconTwitter,
    IconNote
  }
})
</script>

<style lang="postcss" scoped>
@import '@/assets/styles/variables';

.HomeNews {
  padding-top: 64px;
  padding-bottom: 96px;
  background-color: var(--c-white-soft);
  background-image: url('/img/home/japan-map.svg');
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 512px;

  @media (min-width: 375px) {
    padding-top: 96px;
    padding-bottom: 96px;
    background-position: 50% 50%;
    background-size: 512px;
  }

  @media (min-width: 768px) {
    padding-top: 160px;
    padding-bottom: 160px;
    background-position: 95% 65%;
  }

  @media (min-width: 1056px) {
    padding-bottom: 96px;
    background-image: none;
  }
}

.HomeNews.mount-active {
  transition: opacity 0.5s, transform 0.5s;
  transition-delay: 0.75s;
}

.HomeNews.mount {
  opacity: 0;
  transform: translateY(8px);
}

.container {
  @media (min-width: 1056px) {
    padding-top: 24px;
    padding-bottom: 128px;
    background-image: url('/img/home/japan-map.svg');
    background-repeat: no-repeat;
    background-position: 100% 0;
    background-size: 544px;
  }
}

.content {
  max-width: 560px;
  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: 448px;
    margin: 0;
  }
}

.title {
  br { display: none; }

  @media (min-width: 440px) {
    br { display: block; }
  }

  @media (min-width: 768px) {
    br { display: none; }
  }

  @media (min-width: 1056px) {
    white-space: nowrap;

    br { display: block; }
  }
}

.actions {
  padding-top: 32px;
}

.action {
  position: relative;
  display: flex;
  align-items: center;
  max-width: 392px;
  padding-left: 62px;
  font-size: 14px;
  font-weight: 700;
  line-height: 62px;
  background-color: var(--c-white);
  border: 1px solid transparent;
  border-radius: 4px;
  box-shadow: var(--shadow-depth-3);
  transition: border-color 0.25s, box-shadow 0.25s;

  &:hover {
    border-color: var(--c-vue-green);
    box-shadow: var(--shadow-depth-5);
  }

  & + & {
    margin-top: 16px;
  }

  @media (min-width: 768px) {
    max-width: 100%;
    padding-left: 68px;
    line-height: 70px;

    & + & {
      margin-top: 24px;
    }
  }
}

.icon {
  position: absolute;
}

.icon.twitter {
  top: 18px;
  left: 20px;
  width: 26px;
  height: 26px;
  fill: #1da1f2;

  @media (min-width: 768px) {
    top: 22px;
    left: 24px;
  }
}

.icon.note {
  top: 11px;
  left: 12px;
  width: 40px;
  height: 40px;
  fill: #68c6b4;

  @media (min-width: 768px) {
    top: 15px;
    left: 16px;
  }
}
</style>
