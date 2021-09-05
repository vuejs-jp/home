<template>
  <AppPage class="Privacy">
    <LegalMedium title-ja="プライバシーポリシー" title-en="Privacy Policy">
      <nuxt-content :document="page" />
    </LegalMedium>
  </AppPage>
</template>

<script lang="ts">
import Vue from 'vue'
import { mergeMeta } from '../../support/meta'
import AppPage from '@/components/AppPage.vue'
import LegalMedium from '@/components/LegalMedium.vue'

export default Vue.extend({
  components: {
    AppPage,
    LegalMedium
  },

  async asyncData ({ $content, app }) {
    const page = await $content(`${app.i18n.locale}/privacy`).fetch()
    return { page }
  },

  head (): object {
    const name = this.$i18n.t('vuejs-jp-ug') as string
    const title = this.$i18n.t('pages.privacy.title') as string
    const description = this.$i18n.t('pages.privacy.description') as string
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })

    return mergeMeta({ name, title, description, url: this.$url() }, i18nHead)
  }
})
</script>
