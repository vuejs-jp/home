<template>
  <AppPage class="SiteMap">
    <LegalMedium title-ja="サイトマップ" title-en="Site Map">
      <p>Vue.js 日本ユーザーグループの Web サイトのサイトマップを掲載しています。</p>

      <h2>Vue.js 日本ユーザーグループについて</h2>
      <nav>
        <ul>
          <li>
            <NuxtLink class="u-link-text" to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink class="u-link-text" to="/about">About</NuxtLink>
          </li>
        </ul>
      </nav>

      <h2>お問い合わせ</h2>
      <nav>
        <ul>
          <li>
            <NuxtLink class="u-link-text" to="/contact">Contact</NuxtLink>
          </li>
        </ul>
      </nav>
    </LegalMedium>
  </AppPage>
</template>

<script lang="ts">
import Vue from 'vue'
import AppPage from '@/components/AppPage.vue'
import LegalMedium from '@/components/LegalMedium.vue'

export default Vue.extend({
  components: {
    AppPage,
    LegalMedium
  },

  head: {
    title: 'Site Map',
    meta: [
      { hid: 'description', name: 'description', content: 'Vue.js 日本ユーザーグループの Web サイトのサイトマップを掲載しています。' }
    ]
  }
})
</script>
