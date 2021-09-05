<template>
  <AppPage class="Sitemap u-wrapper">
    <StyleMount class="container u-container">
      <h1 class="title">{{ $t('menu.sitemap') }}</h1>

      <div class="contents">
        <section class="section">
          <h2 class="section-title">{{ $t('sitemap.about') }}</h2>
          <nav class="nav">
            <ul class="list">
              <li class="item">
                <NuxtLink class="link" :to="localePath('/')">{{ $t('menu.home') }}</NuxtLink>
              </li>
              <li>
                <NuxtLink class="link" :to="localePath('/about')">{{ $t('menu.about') }}</NuxtLink>
              </li>
            </ul>
          </nav>
        </section>

        <section class="section">
          <h2 class="section-title">{{ $t('sitemap.contact') }}</h2>
          <nav class="nav">
            <ul class="list">
              <li class="item">
                <NuxtLink class="link" :to="localePath('/contact')">{{ $t('menu.contact') }}</NuxtLink>
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
import { mergeMeta } from '../../support/meta'
import AppPage from '@/components/AppPage.vue'
import StyleMount from '@/components/StyleMount.vue'

export default Vue.extend({
  components: {
    AppPage,
    StyleMount
  },

  head (): object {
    const name = this.$i18n.t('vuejs-jp-ug') as string
    const title = this.$i18n.t('menu.sitemap') as string
    const description = this.$i18n.t('pages.sitemap') as string
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })

    return mergeMeta({ name, title, description, url: this.$url() }, i18nHead)
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
