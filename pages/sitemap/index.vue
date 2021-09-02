<template>
  <AppPage class="Sitemap u-wrapper">
    <StyleMount class="container u-container">
      <h1 class="title">
        Site Map
      </h1>

      <div class="contents">
        <section class="section">
          <h2 class="section-title">
            Vue.js JPについて
          </h2>
          <nav class="nav">
            <ul class="list">
              <li class="item">
                <NuxtLink class="link" to="/">
                  Home
                </NuxtLink>
              </li>
              <li>
                <NuxtLink class="link" to="/about">
                  About
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </section>

        <section class="section">
          <h2 class="section-title">
            お問い合わせ
          </h2>
          <nav class="nav">
            <ul class="list">
              <li class="item">
                <NuxtLink class="link" to="/contact">
                  Contact
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </section>
      </div>
    </StyleMount>
  </AppPage>
</template>

<script lang="ts">
import Vue from 'vue'
import AppPage from '@/components/AppPage.vue'
import StyleMount from '@/components/StyleMount.vue'

export default Vue.extend({
  components: {
    AppPage,
    StyleMount
  },

  head (): object {
    const title = 'Site Map'
    const description = 'Vue.js 日本ユーザーグループの Web サイトのサイトマップを掲載しています。'

    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        { hid: 'og:title', property: 'og:title', content: title },
        { hid: 'og:url', property: 'og:url', content: this.$url() },
        { hid: 'og:description', property: 'og:description', content: description }
      ]
    }
  }
})
</script>

<style lang="postcss" scoped>
@import '@/assets/styles/variables';

.Sitemap {
  padding-top: 16px;
  padding-bottom: 96px;

  @media (min-width: 768px) {
    padding-top: 32px;
    padding-bottom: 128px;
  }

  @media (min-width: 1056px) {
    padding-bottom: 160px;
  }
}

.container.mount-active {
  transition: opacity 0.5s, transform 0.5s;
}

.container.mount {
  opacity: 0;
  transform: translateY(8px);
}

.title {
  padding-bottom: 24px;
  font-size: 32px;
  font-weight: 600;
  line-height: 40px;

  @media (min-width: 768px) {
    padding-bottom: 48px;
  }
}

.contents {
  display: flex;
  flex-wrap: wrap;
  margin: -12px;
}

.section {
  flex-shrink: 0;
  width: 246px;
  padding: 12px;
}

.section-title {
  font-weight: 700;
}

.list {
  padding-top: 8px;
}

.link {
  line-height: 32px;
  color: var(--c-vue-green);
  transition: color 0.25s;

  &:hover {
    color: var(--c-vue-green-dark);
  }
}
</style>
