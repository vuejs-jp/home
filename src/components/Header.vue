<template>
  <header class="header">
    <div class="header__container">
      <div class="header__item">
        <svg class="header__item--logo" version="1.1" viewBox="0 0 261.76 226.69" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
          <g transform="matrix(1.3333 0 0 -1.3333 -76.311 313.34)">
            <g transform="translate(178.06 235.01)">
              <path d="m0 0-22.669-39.264-22.669 39.264h-75.491l98.16-170.02 98.16 170.02z" fill="#41b883"/>
            </g>
            <g transform="translate(178.06 235.01)">
              <path d="m0 0-22.669-39.264-22.669 39.264h-36.227l58.896-102.01 58.896 102.01z" fill="#34495e"/>
            </g>
          </g>
        </svg>
        <h1>Vue.js Japan User Group</h1>
      </div>
      <div class="header__item">
        <div class="header__item--menu">
          <a class="header__item--menu-about" href="">
            <span>About</span>
          </a>
          <a class="header__item--menu-contact" href="">
            <span>Contact</span>
          </a>
          <div class="header__item--separator"></div>
          <share-button-group />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import ShareButtonGroup from '@/components/ShareButtonGroup'
export default {
  components: {
    ShareButtonGroup
  }
}
</script>

<style scoped>
.header{
  padding-top: 24px;
  padding-left: 20px;
  &__container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 32px;
  }
  &__item{
    display: flex;
    align-items: center;
    &--logo{
      margin-right: 10px;
    }
    &--menu{
      display: flex;
      align-items: center;
      justify-content: start;
      width: 370px;
      font-size: 1.0em;
      letter-spacing: 1px;
    }
    &--menu-about, &--menu-contact, &--separator{
      margin-right: 28px
    }
    &--separator{
      height: 32px;
      border-right: 2px solid #F2F2F2;
    }
  }
}
</style>