<script setup lang="ts">
import IconTwitter from "./icons/IconTwitter.vue";
import IconNote from "./icons/IconNote.vue";
import IconYouTube from "./icons/IconYouTube.vue";
import IconGitHub from "./icons/IconGitHub.vue";
</script>

<template>
  <ul class="SocialLinkGroup">
    <li class="item item-twitter">
      <a
        class="link link-twitter"
        href="https://twitter.com/vuefes"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconTwitter class="icon icon-twitter" />
      </a>
    </li>
    <li class="item item-note">
      <a
        class="link link-note"
        href="https://note.mu/vuejs_jp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconNote class="icon icon-note" />
      </a>
    </li>
    <li class="item item-youtube">
      <a
        class="link link-youtube"
        href="https://www.youtube.com/channel/UC6KPwA1kZJtQYdlh8_2hxCA"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconYouTube class="icon icon-youtube" />
      </a>
    </li>
    <li class="item item-github">
      <a
        class="link link-github"
        href="https://github.com/vuejs-jp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconGitHub class="icon icon-github" />
      </a>
    </li>
  </ul>
</template>

<style lang="postcss" scoped>
@import '@/assets/styles/variables';

.SocialLinkGroup {
  display: flex;
}

.item-twitter { padding-left: 0; }
.item-note    { padding-left: 16px; }
.item-youtube { padding-left: 20px; }
.item-github  { padding-left: 20px; }

.link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;

  &:hover .icon {
    fill: var(--c-gray);
  }
}

.icon {
  display: block;
  fill: var(--c-black);
  transition: fill 0.25s;
}

.icon-twitter { width: 24px; height: 24px; }
.icon-note    { width: 32px; height: 32px; transform: scale(1.2); }
.icon-youtube { width: 28px; height: 28px; }
.icon-github  { width: 24px; height: 24px; }
</style>
