<template>
  <div class="App">
    <Header />
    <div class="content">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<style lang="postcss" scoped>
.App {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex-grow: 1;
}
</style>

<script>
import Vue from 'vue'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default Vue.extend({
  components: {
    Header,
    Footer
  }
})
</script>

