<template>
  <StyleMount class="TheGlobalFooter" :class="{ transitioning }" tag="footer">
    <div class="container">
      <div class="social">
        <SocialLinkGroup />
      </div>

      <ul class="legal">
        <li class="legal-item">
          <NuxtLink class="legal-link u-link-text" to="/privacy">
            Privacy Policy
          </NuxtLink>
        </li>
        <li class="legal-item">
          <NuxtLink class="legal-link u-link-text" to="/code-of-conduct">
            Code of Conduct
          </NuxtLink>
        </li>
        <li class="legal-item">
          <NuxtLink class="legal-link u-link-text" to="#">
            Site Map
          </NuxtLink>
        </li>
      </ul>

      <div class="copyright">
        <p class="copyright-text">
          &copy; 2019 Vue.js Japan Users Group some rights reserved.
        </p>
        <p class="copyright-text">
          Vue.js artworks by <a class="u-link-text" href="https://github.com/yyx990803" target="_blank" rel="noopener noreferrer">Evan You</a> is licensed under a <a class="u-link-text" href="https://creativecommons.org/licenses/by-sa/4.0/deed.ja" target="_blank" rel="noopener noreferrer">Creative Commons Attribution 4.0 Internatinal Licence.</a>
        </p>
        <p class="copyright-text">
          Proudly created by Vue.js Japan User Group members, powered by <a class="u-link-text" href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">Vue.js</a>
        </p>
      </div>
    </div>
  </StyleMount>
</template>

<script lang="ts">
import Vue from 'vue'
import StyleMount from './StyleMount.vue'
import SocialLinkGroup from './SocialLinkGroup.vue'

export default Vue.extend({
  components: {
    StyleMount,
    SocialLinkGroup
  },

  data () {
    return {
      transitioning: false
    }
  },

  watch: {
    $route () {
      this.transition()
    }
  },

  methods: {
    transition (): void {
      this.transitioning = true

      setTimeout(() => { this.transitioning = false }, 500)
    }
  }
})
</script>

<style lang="postcss" scoped>
@import '@/assets/styles/variables';

.TheGlobalFooter {
  padding: 48px 24px;
  background-color: var(--c-white-soft);

  @media (min-width: 375px) {
    padding: 48px 32px;
  }

  @media (min-width: 768px) {
    padding: 64px 48px 56px;
  }
}

.TheGlobalFooter.mount-active {
  &,
  .container {
    transition: opacity 1s, transform 1s var(--ease-out-quint);;
  }
}

.TheGlobalFooter.mount {
  &,
  .container {
    opacity: 0;
    transform: translateY(8px);
  }

  .container {
    transition-delay: 0.5s;
  }
}

.TheGlobalFooter.transitioning {
  opacity: 0;
  transition: opacity 0.1s, transform 0.1s;
  transform: translateY(4px);
}

.container {
  max-width: 960px;
  margin: 0 auto;
}

.legal {
  display: flex;
  flex-wrap: wrap;
  padding-top: 24px;
}

.legal-item {
  position: relative;
  padding-right: 12px;
  margin-right: 12px;
  font-family: var(--font-family-en);
  font-size: 14px;
  font-weight: 600;
  line-height: 28px;
  white-space: nowrap;

  &::after {
    position: absolute;
    top: 5px;
    right: 0;
    width: 1px;
    height: 16px;
    content: '';
    background-color: var(--c-gray);
  }

  &:last-child {
    padding-right: 0;
    margin-right: 0;

    &::after {
      display: none;
    }
  }
}

.copyright {
  padding-top: 8px;
}

.copyright-text {
  font-family: var(--font-family-en);
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;

  & + & {
    padding-top: 8px;
  }
}
</style>
