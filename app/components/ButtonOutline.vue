<script lang="ts">
import { defineComponent } from 'vue'
import { isExternalLink } from '~/_legacy/support/Url'

export default defineComponent({
  props: {
    tag: { type: String, default: 'button' },
    block: { type: Boolean, default: false },
    icon: { type: Object, default: null },
    label: { type: String, required: true },
    to: { type: String, default: null },
    href: { type: String, default: null }
  },

  computed: {
    link (): string | null {
      return this.href || this.to
    },

    isExternalLink (): boolean {
      return this.link ? isExternalLink(this.link) : false
    },

    target (): string {
      return this.isExternalLink ? '_blank' : '_self'
    }
  }
})
</script>

<template>
  <div class="ButtonOutline" role="button" :class="{ block }" @click="$emit('click')">
    <Component :is="tag" class="button" :to="href" :href="href" :target="target">
      <Component :is="icon" v-if="icon" class="icon" />
      <span class="label">{{ label }}</span>
    </Component>
  </div>
</template>

<style lang="postcss" scoped>
@import '@/assets/styles/variables';

.ButtonOutline {
  position: relative;
}

.ButtonOutline:hover {
  .button {
    color: var(--c-vue-green-dark);
    border-color: var(--c-vue-green-dark);
  }
}

.ButtonOutline:active {
  .button {
    color: var(--c-vue-green-darker);
    border-color: var(--c-vue-green-darker);
    transition: border-color 0.1s, color 0.1s;
  }
}

.ButtonOutline.block .button {
  display: block;
  width: 100%;
}

.button {
  display: inline-block;
  padding: 0 16px;
  font-size: 14px;
  line-height: 46px;
  color: var(--c-vue-green);
  text-align: center;
  letter-spacing: 0;
  white-space: nowrap;
  border: 1px solid var(--c-vue-green);
  border-radius: 24px;
  transition: border-color 0.25s, color 0.25s;
}

.icon {
  display: inline-block;
  width: 24px;
  height: 24px;
  margin-right: 8px;
  transform: translateY(6px);
}
</style>
