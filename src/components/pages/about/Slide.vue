<template>
  <div class="about__slider">
    <div class="slider">
      <div class="slider-container">
        <div
          v-for="(slide, i) in slides"
          :key="i"
          :class="[
            `slide-${i}`,
            { 'active': active === i }
          ]"
        >
          <img
            class="slide-image"
            :src="slide.src"
            :srcset="slide.srcset"
            :alt="slide.label"
          />
          <div  
            class="slide-label"
            v-html="slide.label"
          />
        </div>
      </div>
      <div class="slider-navigation">
        <div class="slider-navigation-bullet">
          <div
            v-for="(slide, j) in slides"
            :key="j"
            v-html="j+1"
          />
        </div>
        <div class="slider-navigation-prev">
          <button @click="Prev">Prev</button>
        </div>
        <div class="slider-navigation-next">
          <button @click="Next">Next</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      active: 0
    }
  },
  computed: {
    slides() {
      // TODO: mock
      return [
        {
          src: 'http://placehold.jp/800x600.png',
          srcset: 'http://placehold.jp/800x600.png 1x, http://placehold.jp/1600x1200.png 2x',
          label: 'Lorem ipsum dolor sit. - Lorem ipsum dolor sit amet.'
        },
        {
          src: 'http://placehold.jp/800x600.png',
          srcset: 'http://placehold.jp/800x600.png 1x, http://placehold.jp/1600x1200.png 2x',
          label: 'Lorem ipsum dolor sit. - Lorem ipsum dolor sit amet.'
        },
        {
          src: 'http://placehold.jp/800x600.png',
          srcset: 'http://placehold.jp/800x600.png 1x, http://placehold.jp/1600x1200.png 2x',
          label: 'Lorem ipsum dolor sit. - Lorem ipsum dolor sit amet.'
        },
        {
          src: 'http://placehold.jp/800x600.png',
          srcset: 'http://placehold.jp/800x600.png 1x, http://placehold.jp/1600x1200.png 2x',
          label: 'Lorem ipsum dolor sit. - Lorem ipsum dolor sit amet.'
        },
        {
          src: 'http://placehold.jp/800x600.png',
          srcset: 'http://placehold.jp/800x600.png 1x, http://placehold.jp/1600x1200.png 2x',
          label: 'Lorem ipsum dolor sit. - Lorem ipsum dolor sit amet.'
        }
      ]
    }
  },
  methods: {
    Prev() {
      // TODO: mock
      alert('mockPrev')
    },
    Next() {
      // TODO: mock
      alert('mockNext')
    }
  }
})
</script>

<style lang="postcss" sscoped>
.slider {
  &-container {
    .active {}
  }
  &-navigation {
  }
}
</style>
