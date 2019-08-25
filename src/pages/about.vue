<template>
  <div class="about">
    <Hero />
    <Slide />
    <Description />
    <History />
    <Staff /> 
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Slide from '@/components/pages/about/Slide.vue';
import History from '@/components/pages/about/History.vue';
import Hero from '@/components/pages/about/Hero.vue';
import Description from '@/components/pages/about/Description.vue';
import Staff from '@/components/pages/about/Staff.vue';

export default Vue.extend({
  components: {
    Slide,
    Hero,
    History,
    Staff,
    Description
  }
})
</script>
