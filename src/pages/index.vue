<template>
  <AppPage class="Home" />
</template>

<script lang="ts">
import Vue from 'vue'
import AppPage from '@/components/AppPage'

export default Vue.extend({
  components: {
    AppPage
  },

  head: {
    title: 'Vue.js 日本ユーザーグループ',
    titleTemplate: '%s'
  }
})
</script>
