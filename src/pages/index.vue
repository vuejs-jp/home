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

  head: {
    title: 'Vue.js 日本ユーザーグループ',
    titleTemplate: '%s',
    meta: [
      { hid: 'description', name: 'description', content: 'Vue.js 日本ユーザーグループは、年に一度の大規模カンファレンス“Vue Fes Japan”の運営や、Vue.js公式ドキュメントの日本語翻訳をはじめ、日本におけるVue.jsの普及と、Vue.jsエコシステムへの貢献を行っている日本最大のVue.jsコミュニティです。' }
    ]
  }
})
</script>
