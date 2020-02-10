<template>
  <AppPage class="About">
    <AboutHero />
    <AboutDescription />
  </AppPage>
</template>

<script lang="ts">
import Vue from 'vue'
import AppPage from '@/components/AppPage.vue'
import AboutHero from '@/components/AboutHero.vue'
import AboutDescription from '@/components/AboutDescription.vue'

export default Vue.extend({
  components: {
    AppPage,
    AboutHero,
    AboutDescription
  },

  head: {
    title: 'About | Vue.js 日本ユーザーグループ',
    meta: [
      { hid: 'description', name: 'description', content: 'Vue.js Vue.js 日本ユーザーグループは、Vue.js を愛するあらゆる人々を支援する、日本最大の Vue.js コミュニティです。各地でのイベントサポートやドキュメントの翻訳プロジェクトを通じて、日本中に Vue.js を普及させるとともに、世界中の Vue.js エコシステム発展に貢献します。' }
    ]
  }
})
</script>
