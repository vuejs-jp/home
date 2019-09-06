<template>
  <div class="TheGlobalHeaderNavFlat">
    <ul class="list">
      <li class="item">
        <a class="link" href="/">About</a>
      </li>
      <li class="item">
        <a class="link" href="/">Contact</a>
      </li>
    </ul>

    <div class="social">
      <SocialLinkGroup />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SocialLinkGroup from './SocialLinkGroup.vue'

export default Vue.extend({
  components: {
    SocialLinkGroup
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

  &:hover {
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
