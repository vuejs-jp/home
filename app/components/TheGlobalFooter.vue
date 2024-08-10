<script lang="ts">
import { defineComponent } from "vue";
import StyleMount from "./StyleMount.vue";
import SocialLinkGroup from "./SocialLinkGroup.vue";

export default defineComponent({
  components: {
    StyleMount,
    SocialLinkGroup
  },

  data() {
    return {
      transitioning: false
    };
  },

  watch: {
    $route() {
      this.transition();
    }
  },

  methods: {
    transition(): void {
      this.transitioning = true;

      setTimeout(() => { this.transitioning = false; }, 500);
    }
  }
});
</script>

<template>
  <StyleMount
    class="TheGlobalFooter"
    :class="{ transitioning }"
    tag="footer"
  >
    <div class="container">
      <div class="social">
        <SocialLinkGroup />
      </div>

      <ul class="legal">
        <li class="legal-item">
          <NuxtLink
            class="legal-link u-link-text"
            :to="localePath('/privacy')"
          >
            {{ $t('menu.privacy') }}
          </NuxtLink>
        </li>
        <li class="legal-item">
          <NuxtLink
            class="legal-link u-link-text"
            :to="localePath('/code-of-conduct')"
          >
            {{ $t('menu.code-of-conduct') }}
          </NuxtLink>
        </li>
        <li class="legal-item">
          <NuxtLink
            class="legal-link u-link-text"
            :to="localePath('/sitemap')"
          >
            {{ $t('menu.sitemap') }}
          </NuxtLink>
        </li>
      </ul>

      <div class="copyright">
        <p class="copyright-text">
          {{ $t('footer.copyright') }}
        </p>
        <i18n
          tag="p"
          path="footer.license-text"
          class="copyright-text"
        >
          <template #license>
            <!-- eslint-disable-next-line @intlify/vue-i18n/no-raw-text NOTE: ライセンス表記は英語表記が一般的なので ignore -->
            <a
              class="u-link-text"
              href="https://opensource.org/licenses/MIT"
              target="_blank"
              rel="noopener noreferrer"
            >MIT License</a>.
          </template>
        </i18n>
        <i18n
          tag="p"
          path="footer.author-text"
          class="copyright-text"
        >
          <template #author>
            <!-- eslint-disable-next-line @intlify/vue-i18n/no-raw-text NOTE: 名前表記はそのままにするため ignore -->
            <a
              class="u-link-text"
              href="https://github.com/yyx990803"
              target="_blank"
              rel="noopener noreferrer"
            >Evan You</a>
          </template>
          <template #license>
            <!-- eslint-disable-next-line @intlify/vue-i18n/no-raw-text NOTE: ライセンス表記は英語表記が一般的なので ignore -->
            <a
              class="u-link-text"
              href="https://creativecommons.org/licenses/by-sa/4.0/deed.ja"
              target="_blank"
              rel="noopener noreferrer"
            >Creative Commons Attribution 4.0 Internatinal Licence.</a>
          </template>
        </i18n>
        <i18n
          tag="p"
          path="footer.site-text"
          class="copyright-text"
        >
          <template #powered>
            <!-- eslint-disable-next-line @intlify/vue-i18n/no-raw-text NOTE: 固有名で英語以外でもそのまま使うので ignore -->
            <a
              class="u-link-text"
              href="https://vuejs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >Vue.js</a>
          </template>
        </i18n>

        <div class="copyright-badge">
          <a
            href="https://www.netlify.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://www.netlify.com/img/global/badges/netlify-color-bg.svg"
              :alt="$t('footer.deploy')"
            >
          </a>
        </div>
      </div>
    </div>
  </StyleMount>
</template>

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
  padding-top: 16px;
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
  padding-top: 6px;
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

.copyright-badge {
  padding-top: 16px;
}
</style>
