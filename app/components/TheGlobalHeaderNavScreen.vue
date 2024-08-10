<script lang="ts">
import { defineComponent } from 'vue'
import SocialLinkGroup from './SocialLinkGroup.vue'

export default defineComponent({
  components: {
    SocialLinkGroup
  },

  props: {
    active: { type: Boolean, required: true }
  },

  methods: {
    jump (path: string): void {
      this.$router.push(path)

      this.$emit('close')
    }
  }
})
</script>

<template>
  <transition name="fade">
    <div v-if="active" class="TheGlobalHeaderNavScreen">
      <div class="container">
        <ul class="list">
          <li class="item">
            <a class="link" :href="localePath('/about')" @click.prevent="jump('/about')">{{ $t('menu.about') }}</a>
          </li>
          <li class="item">
            <a class="link" :href="localePath('/contact')" @click.prevent="jump('/contact')">{{ $t('menu.contact') }}</a>
          </li>
        </ul>

        <div class="social">
          <SocialLinkGroup />
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="postcss" scoped>
@import '@/assets/styles/variables';

.TheGlobalHeaderNavScreen {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: var(--c-white);

  @media (min-width: 640px) {
    display: none;
  }
}

.TheGlobalHeaderNavScreen.fade-enter-active {
  transition: opacity 0.5s;

  .item,
  .social {
    transition: opacity 0.5s, transform 0.5s;
  }

  .item {
    &:nth-child(1) { transition-delay: 0s; }
    &:nth-child(2) { transition-delay: 0.1s; }
  }

  .social {
    transition-delay: 0.2s;
  }
}

.TheGlobalHeaderNavScreen.fade-enter,
.TheGlobalHeaderNavScreen.fade-leave-to {
  opacity: 0;

  .item,
  .social {
    opacity: 0;
  }
}

.TheGlobalHeaderNavScreen.fade-enter {
  .item,
  .social {
    transform: translateY(8px);
  }
}

.TheGlobalHeaderNavScreen.fade-leave-active {
  transition: opacity 0.25s;

  .item,
  .social {
    transition: opacity 0.25s, transform 0.25s;
  }
}

.container {
  padding: 96px 24px 64px;

  @media (min-width: 375px) {
    padding: 96px 32px 64px;
  }
}

.item {
  font-family: var(--font-family-en);
  font-size: 32px;
  font-weight: 600;
  line-height: 56px;
  transition: color 0.25s;

  &:hover {
    color: var(--c-gray);
  }
}

.social {
  padding-top: 24px;
  margin-top: 48px;
  border-top: 1px solid var(--c-divider);
}
</style>
