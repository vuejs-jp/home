<template>
  <div class="TheGlobalHeaderNavFlat">
    <ul class="list">
      <li class="item">
        <NuxtLink class="link" :to="localePath('/about')">
          About
        </NuxtLink>
      </li>
      <li class="item">
        <NuxtLink class="link" :to="localePath('/contact')">
          Contact
        </NuxtLink>
      </li>
      <li class="item">
        <NuxtLink class="link" :to="switchLocalePath(switchableLocale.code)">
          {{ switchableLocale.name }}
        </NuxtLink>
      </li>
    </ul>

    <div class="social">
      <SocialLinkGroup />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { LocaleObject } from '@nuxtjs/i18n'
import SocialLinkGroup from './SocialLinkGroup.vue'

export default Vue.extend({
  components: {
    SocialLinkGroup
  },
  computed: {
    switchableLocale() {
      const locales = (this.$i18n.locales as LocaleObject[]).filter((i: LocaleObject) => i.code !== this.$i18n.locale)
      return locales.length !== 0 ? locales[0] : { code: 'ja', name: '日本語' }
    }
  }
})
</script>

<style lang="postcss" scoped>
@import '@/assets/styles/variables';

.TheGlobalHeaderNavFlat {
  display: none;

  @media (min-width: 640px) {
    display: flex;
  }
}

.list {
  display: flex;
}

.item {
  font-family: var(--font-family-en);
  font-weight: 600;
  line-height: 64px;

  & + & {
    padding-left: 24px;
  }
}

.link {
  display: block;
  transition: color 0.25s;

  &:hover,
  &.nuxt-link-active {
    color: var(--c-gray);
  }
}

.social {
  position: relative;
  padding-top: 16px;
  padding-left: 24px;
  margin-left: 24px;

  &::before {
    position: absolute;
    top: 18px;
    left: 0;
    width: 1px;
    height: 32px;
    content: '';
    background-color: var(--c-divider);
  }
}
</style>
