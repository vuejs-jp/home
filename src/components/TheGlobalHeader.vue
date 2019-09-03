<template>
  <header class="TheGlobalHeader">
    <TheGlobalHeaderNavScreen :active="isMenuOpen" @close="closeNav" />

    <div class="container">
      <p class="logo">
        <NuxtLink class="logo-link" to="/">
          Vue.js JP
        </NuxtLink>
      </p>

      <div class="hamburger">
        <HamburgerMenu :active="isMenuOpen" @click="toggleNav" />
      </div>

      <TheGlobalHeaderNavFlat />
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import HamburgerMenu from './HamburgerMenu'
import TheGlobalHeaderNavFlat from './TheGlobalHeaderNavFlat'
import TheGlobalHeaderNavScreen from './TheGlobalHeaderNavScreen'

export default Vue.extend({
  components: {
    HamburgerMenu,
    TheGlobalHeaderNavFlat,
    TheGlobalHeaderNavScreen
  },

  data () {
    return {
      isMenuOpen: false
    }
  },

  methods: {
    closeNav (): void {
      this.isMenuOpen = false
    },

    toggleNav (): void {
      this.isMenuOpen = !this.isMenuOpen
    }
  }
})
</script>

<style lang="postcss" scoped>
@import '@/assets/styles/variables';

.TheGlobalHeader {
  position: relative;
  z-index: var(--z-index-header);
  padding: 0 24px;

  @media (min-width: 375px) {
    padding: 0 32px;
  }

  @media (min-width: 640px) {
    padding: 16px 32px;
  }
}

.container {
  position: relative;
  display: flex;
  justify-content: space-between;
  max-width: 960px;
  margin: 0 auto;
}

.logo {
  font-family: var(--font-family-en);
  font-size: 20px;
  font-weight: 600;
  line-height: 64px;
}

.hamburger {
  transform: translateX(24px);

  @media (min-width: 640px) {
    display: none;
  }
}
</style>
