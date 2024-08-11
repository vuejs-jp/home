<script lang="ts">
import { defineComponent } from "vue";
import IconVuejsJpLogo from "./icons/IconVuejsJpLogo.vue";
import StyleMount from "./StyleMount.vue";
import HamburgerMenu from "./HamburgerMenu.vue";
import TheGlobalHeaderNavFlat from "./TheGlobalHeaderNavFlat.vue";
import TheGlobalHeaderNavScreen from "./TheGlobalHeaderNavScreen.vue";
import { scrollToTop } from "~/_legacy/support/Screen";

export default defineComponent({
  components: {
    IconVuejsJpLogo,
    StyleMount,
    HamburgerMenu,
    TheGlobalHeaderNavFlat,
    TheGlobalHeaderNavScreen
  },

  data() {
    return {
      isMenuOpen: false,
      transitioning: false
    };
  },

  watch: {
    $route() {
      this.transition();
    }
  },

  methods: {
    closeNav(): void {
      this.isMenuOpen = false;
    },

    toggleNav(): void {
      this.isMenuOpen = !this.isMenuOpen;
    },

    transition(): void {
      const header = document.getElementById("header") as HTMLElement;
      const headerHeight = header.offsetHeight;
      const scrollTop = document.documentElement.scrollTop;

      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      scrollTop > headerHeight ? this.performTransition() : scrollToTop();
    },

    performTransition(): void {
      this.transitioning = true;

      setTimeout(() => {
        this.transitioning = false;
      }, 500);
    }
  }
});
</script>

<template>
  <StyleMount
    id="header"
    class="TheGlobalHeader"
    :class="{ transitioning }"
    tag="header"
  >
    <TheGlobalHeaderNavScreen
      :active="isMenuOpen"
      @close="closeNav"
    />

    <div class="container">
      <p class="logo">
        <NuxtLink
          class="logo-link"
          :to="localePath('/')"
        >
          <IconVuejsJpLogo class="logo-icon" /> {{ $t('logo-text') }}
        </NuxtLink>
      </p>

      <div class="hamburger">
        <HamburgerMenu
          :active="isMenuOpen"
          @click="toggleNav"
        />
      </div>

      <TheGlobalHeaderNavFlat />
    </div>
  </StyleMount>
</template>

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

  @media (min-width: 768px) {
    padding: 16px 48px;
  }
}

.TheGlobalHeader.mount-active {
  transition: opacity 1s, transform 1s var(--ease-out-quint);
}

.TheGlobalHeader.mount {
  opacity: 0;
  transform: scale(1.1);
}

.TheGlobalHeader.transitioning {
  opacity: 0;
  transition: opacity 0.1s, transform 0.1s;
  transform: translateY(-4px);
}

.container {
  position: relative;
  display: flex;
  justify-content: space-between;
  max-width: 960px;
  margin: 0 auto;
}

.logo {
  font-family: var(--font-family-dosis);
  font-size: 20px;
  font-weight: 600;
  line-height: 64px;
  letter-spacing: 1.2px;
}

.logo-link {
  display: flex;
  align-items: center;
  transition: opacity 0.25s;

  &:hover {
    opacity: 0.6;
  }
}

.logo-icon {
  width: 32px;
  height: 32px;
  margin-right: 12px;
}

.hamburger {
  transform: translateX(24px);

  @media (min-width: 640px) {
    display: none;
  }
}
</style>
