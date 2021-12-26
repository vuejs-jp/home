<template>
  <AppPage class="About">
    <AboutHero />
    <AboutDescription />
  </AppPage>
</template>

<script lang="ts">
import Vue from 'vue'
import { mergeMeta } from '../../support/meta'
import AppPage from '@/components/AppPage.vue'
import AboutHero from '@/components/AboutHero.vue'
import AboutDescription from '@/components/AboutDescription.vue'

export default Vue.extend({
  components: {
    AppPage,
    AboutHero,
    AboutDescription
  },

  head (): object {
    const name = this.$i18n.t('vuejs-jp-ug') as string
    const title = this.$i18n.t('menu.about') as string
    const description = this.$i18n.t('pages.about') as string
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })

    return mergeMeta({ name, title, description, url: this.$url() }, i18nHead)
  }
})
</script>
