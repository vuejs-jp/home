<template>
  <AppPage class="Contact" />
</template>

<script lang="ts">
import Vue from 'vue'
import AppPage from '@/components/AppPage.vue'

export default Vue.extend({
  components: {
    AppPage
  },

  head: {
    title: 'Contact',
    meta: [
      { hid: 'description', name: 'description', content: 'Vue.js 日本ユーザーグループへのご質問・ご相談は、フォームよりお気軽にお問い合わせください。' }
    ]
  }
})
</script>
