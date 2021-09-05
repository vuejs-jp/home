<template>
  <AppPage class="Home">
    <HomeHero />
    <HomeEvents />
    <HomeCommunications />
    <HomeProjects />
    <HomeNews />
    <HomeAbout />
    <HomeSponsors />
  </AppPage>
</template>

<script lang="ts">
import Vue from 'vue'
import { mergeMeta } from '../support/meta'
import AppPage from '@/components/AppPage.vue'
import HomeHero from '@/components/HomeHero.vue'
import HomeEvents from '@/components/HomeEvents.vue'
import HomeCommunications from '@/components/HomeCommunications.vue'
import HomeProjects from '@/components/HomeProjects.vue'
import HomeNews from '@/components/HomeNews.vue'
import HomeAbout from '@/components/HomeAbout.vue'
import HomeSponsors from '@/components/HomeSponsors.vue'

export default Vue.extend({
  components: {
    AppPage,
    HomeHero,
    HomeEvents,
    HomeCommunications,
    HomeProjects,
    HomeNews,
    HomeAbout,
    HomeSponsors
  },

  head (): object {
    const name = this.$i18n.t('vuejs-jp-ug') as string
    const title = this.$i18n.t('vuejs-jp-ug') as string
    const titleTemplate = '%s'
    const description = this.$i18n.t('pages.top') as string
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })

    return mergeMeta({ name, title, description, url: this.$url(), titleTemplate }, i18nHead)
  }
})
</script>
