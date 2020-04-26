<template>
  <div class="ImageStackItem">
    <div class="loader" :class="{ loaded }">
      <IconPreloaderDark class="loader-icon" />
    </div>

    <figure class="figure">
      <img class="img" :src="image.src" :alt="image.alt" @load="loaded = true">
    </figure>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import IconPreloaderDark from './icons/IconPreloaderDark.vue'

interface Image {
  src: string
  alt: string
}

export default Vue.extend({
  components: {
    IconPreloaderDark
  },

  props: {
    image: { type: Object, required: true } as PropOptions<Image>
  },

  data () {
    return {
      loaded: false
    }
  },

  mounted () {
    // In case the image load event would not fire, we'll force displaying
    // the image after 3 sec.
    setTimeout(() => { this.loaded = true }, 3000)
  }
})
</script>

<style lang="postcss" scoped>
@import '@/assets/styles/variables';

.loader {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 20;
  background-color: var(--c-white);
  transition: opacity 0.5s;
}

.loader.loaded {
  opacity: 0;
}

.loader-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 48px;
  height: 48px;
  transform: translate(-50%);
}

.figure {
  position: relative;
  z-index: 10;
  filter: blur(0);
  transition: filter 0.75s;
}

.img {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  object-fit: cover;
}
</style>
