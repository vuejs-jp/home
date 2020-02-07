<template>
  <StyleMount class="HomeProjects u-wrapper" tag="section">
    <div class="u-container">
      <div class="content u-section-content u-section-content--center">
        <p class="u-section-content__heading">
          PROJECTS
        </p>
        <h2 class="title u-section-content__title">
          誰でも、Vue.js エコシステムの<br>発展に貢献できます。
        </h2>

        <p class="u-section-content__body">
          Vue.js 日本ユーザーグループでは、Vue.js 公式ドキュメントの翻訳活動をはじめ、様々なプロジェクトを通じて Vue.js エコシステムへの貢献を行っています。Vue.js をもっと素晴らしいものにするために、あなたにしかできないことがきっとあるはず<span class="u-nowrap">です。</span>どんなに小さなことでも、みんなにとって大きな助けになります。
        </p>
      </div>

      <div class="projects">
        <div class="projects-container">
          <a class="project" href="https://github.com/vuejs/jp.vuejs.org" target="_blank">
            <article class="project-box">
              <i class="project-type">
                <IconEdit3 class="project-icon" />
              </i>
              <h3 class="project-title">Vue.js<br><span class="u-nowrap">公式ドキュメント翻訳</span></h3>
              <p class="project-body">日々アップデートされる Vue.js 公式ドキュメントの翻訳は、Vue.js 日本ユーザーグループの中で最も重要な役割の1つです。</p>
              <p class="project-link">
                翻訳に協力する
                <IconChevronRight class="project-link-chevron" />
              </p>
            </article>
          </a>

          <a class="project" href="https://github.com/vuejs-jp/ja.docs.nuxtjs" target="_blank">
            <article class="project-box">
              <i class="project-type">
                <IconEdit3 class="project-icon" />
              </i>
              <h3 class="project-title">Nuxt.js<br><span class="u-nowrap">公式ドキュメント翻訳</span></h3>
              <p class="project-body">ますまず注目を集める Nuxt.js。最先端のフロントエンドフレームワークを日本中に届けるお手伝いをしませんか？</p>
              <p class="project-link">
                翻訳に協力する
                <IconChevronRight class="project-link-chevron" />
              </p>
            </article>
          </a>

          <a class="project" href="https://github.com/vuejs-jp/home" target="_blank">
            <article class="project-box">
              <i class="project-type">
                <IconTerminal class="project-icon" />
              </i>
              <h3 class="project-title">Vue.js JP<br><span class="u-nowrap">公式ウェブサイト開発</span></h3>
              <p class="project-body">このウェブサイトも、コミュニティメンバーの協力によって開発されています。 良いアイディアがありますか？ GitHub でお待ちしています。</p>
              <p class="project-link">
                開発に協力する
                <IconChevronRight class="project-link-chevron" />
              </p>
            </article>
          </a>
        </div>
      </div>
    </div>
  </StyleMount>
</template>

<script lang="ts">
import Vue from 'vue'
import IconChevronRight from './icons/IconChevronRight.vue'
import IconEdit3 from './icons/IconEdit3.vue'
import IconTerminal from './icons/IconTerminal.vue'
import StyleMount from './StyleMount.vue'

export default Vue.extend({
  components: {
    IconChevronRight,
    IconEdit3,
    IconTerminal,
    StyleMount
  }
})
</script>

<style lang="postcss" scoped>
@import '@/assets/styles/variables';

.HomeProjects {
  padding-top: 32px;
  padding-bottom: 32px;

  @media (min-width: 375px) {
    padding-top: 48px;
    padding-bottom: 48px;
  }

  @media (min-width: 768px) {
    padding-top: 96px;
    padding-bottom: 96px;
  }
}

.HomeProjects.mount-active {
  transition: opacity 0.5s, transform 0.5s;
  transition-delay: 0.75s;
}

.HomeProjects.mount {
  opacity: 0;
  transform: translateY(8px);
}

.content {
  max-width: 560px;
  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: 640px;
    text-align: center;
  }
}

.title {
  br { display: none; }

  @media (min-width: 420px) {
    br { display: block; }
  }
}

.projects {
  max-width: 560px;
  padding-top: 48px;
  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: 960px;
    padding-top: 64px;
  }

  @media (min-width: 960px) {
    padding-top: 64px;
  }
}

.projects-container {
  display: flex;
  flex-wrap: wrap;
  margin: -24px;

  @media (min-width: 1056px) {
    margin: -32px;
  }
}

.project {
  display: block;
  padding: 24px;

  &:hover {
    .project-icon  { fill: var(--c-vue-green); }
    .project-title { color: var(--c-vue-green); }
  }

  @media (min-width: 768px) {
    width: calc(100% / 3);
  }

  @media (min-width: 1056px) {
    padding: 32px;
  }
}

.project-icon {
  width: 24px;
  height: 24px;
  fill: var(--c-black);
  transition: fill 0.25s;
}

.project-title {
  padding-top: 8px;
  font-size: 20px;
  font-weight: 700;
  line-height: 32px;
  transition: color 0.25s;
}

.project-body {
  padding-top: 12px;
  line-height: 28px;
}

.project-link {
  display: flex;
  align-items: center;
  padding-top: 16px;
  font-size: 14px;
  color: var(--c-vue-green);
  transition: color 0.25s;
}

.project-link-chevron {
  width: 12px;
  margin-left: 8px;
  fill: currentColor;
}
</style>
