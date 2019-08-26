<template>
  <footer class="footer">
    <div class="footer__container">
      <share-button-group />
      <div class="footer__menu">
        <a href="">
          <span>Privacy Policy</span>
        </a>
        |
        <a href="">
          <span>Code of Conduct</span>
        </a>
        |
        <a href="">
          <span>Site Map</span>
        </a>
      </div>
      <div class="footer__text">
        <small>
          &copy; 2018-2019 Vue.js Japan Users Group some rights reserved.<br />
          Vue.js artworks by <a href="">Evan You</a> is licensed under a <a href="">Creative Commons Attribution 4.0 Internatinal Licence.</a><br />
          Proudly created by Vue.js Japan User Group members, powered by <a href="">Vue.js</a>
        </small>
      </div>
    </div>
  </footer>
</template>

<script>
import Vue from 'vue'
import ShareButtonGroup from '@/components/ShareButtonGroup'

export default Vue.extend({
  components: {
    ShareButtonGroup
  }
})
</script>

<style lang="postcss" scoped>
.footer{
  padding: 80px 0 60px 20px;
  background-color: #FCFBFC;
  a{
    text-decoration: underline;
  }
  &__menu{
    font-size: 0.9em;
    margin-top: 40px;
  }
  &__text{
    margin-top: 4px;
    small{
      line-height: 1.8;
    }
  }
}
</style>