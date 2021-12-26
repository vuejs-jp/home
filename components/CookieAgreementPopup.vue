<template>
  <transition name="fade">
    <div v-if="show" class="CookieAgreementPopup">
      <div class="container">
        <p class="body">{{ $t('components.CookieAgreementPopup.message') }}</p>

        <i18n tag="p" path="components.CookieAgreementPopup.format" class="note">
          <template #privacy>
            <NuxtLink class="link" :to="localePath('/privacy')" @click.native="hide">{{ $t('menu.privacy') }}</NuxtLink>
          </template>
        </i18n>

        <button class="button" @click="hide">{{ $t('components.CookieAgreementPopup.ok') }}</button>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      show: false
    }
  },

  mounted () {
    const agreed = this.$cookies.get('agreed_on_cookie_usage')

    if (!agreed) {
      setTimeout(() => { this.show = true }, 1000)
    }
  },

  methods: {
    hide (): void {
      this.$cookies.set('agreed_on_cookie_usage', true, {
        maxAge: 60 * 60 * 24 * 30 // About 1 month.
      })

      this.show = false
    }
  }
})
</script>

<style lang="postcss" scoped>
@import '@/assets/styles/variables';

.CookieAgreementPopup {
  position: fixed;
  right: 0;
  bottom: 0;
  max-width: 480px;
  padding: 8px;
  transition: opacity 0.5s, transform 0.5s;
}

.CookieAgreementPopup.fade-enter,
.CookieAgreementPopup.fade-leave-to {
  opacity: 0;
  transform: translateY(8px);
}

.container {
  padding: 16px;
  background-color: rgba(0, 0, 0, 0.9);
  border-radius: 8px;
}

.body {
  font-size: 12px;
  line-height: 20px;
  color: var(--c-white);
}

.note {
  padding-top: 8px;
  font-size: 12px;
  line-height: 20px;
  color: var(--c-white);
}

.link {
  color: var(--c-vue-green);
  transition: color 0.25s;

  &:hover {
    color: var(--c-vue-green-dark);
  }
}

.button {
  width: 96px;
  margin-top: 16px;
  font-size: 14px;
  line-height: 32px;
  color: var(--c-white);
  background-color: var(--c-vue-green);
  border-radius: 4px;
}
</style>
