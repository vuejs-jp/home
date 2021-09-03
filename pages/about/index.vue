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

  head (): object {
    const title = 'About'
    const description = 'Vue.js Vue.js 日本ユーザーグループは、Vue.js を愛するあらゆる人々を支援する、日本最大の Vue.js コミュニティです。各地でのイベントサポートやドキュメントの翻訳プロジェクトを通じて、日本中に Vue.js を普及させるとともに、世界中の Vue.js エコシステム発展に貢献します。'

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
