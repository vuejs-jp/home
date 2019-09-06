<template>
  <AppPage class="Home">
    <PageHomeHero />
    <PageHomeEvents />
  </AppPage>
</template>

<script lang="ts">
import Vue from 'vue'
import AppPage from '@/components/AppPage.vue'
import PageHomeHero from '@/components/PageHomeHero.vue'
import PageHomeEvents from '@/components/PageHomeEvents.vue'

export default Vue.extend({
  components: {
    AppPage,
    PageHomeHero,
    PageHomeEvents
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
