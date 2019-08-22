<template>
  <main>
    <div class="Home" />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  head: {
    title: 'Vue.js 日本ユーザーグループ',
    titleTemplate: '%s'
  }
})
</script>

<style scoped>
main{
  height: 2000px;
  &__container{
    max-width: 980px;
    margin: 0 auto;
  }
}
</style>