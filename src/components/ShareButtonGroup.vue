<template>
  <div class="sns-share-button">
    <div class="sns-share-button__item">
      <ShareButtonTwitter />
      <ShareButtonNote />
      <ShareButtonYoutube />
      <ShareButtonGithub />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import ShareButtonTwitter from '@/components/ShareButtonTwitter'
import ShareButtonNote from '@/components/ShareButtonNote'
import ShareButtonYoutube from '@/components/ShareButtonYoutube'
import ShareButtonGithub from '@/components/ShareButtonGithub'

export default Vue.extend({
  components: {
    ShareButtonTwitter,
    ShareButtonNote,
    ShareButtonYoutube,
    ShareButtonGithub
  }
})
</script>

<style lang="postcss" scoped>
.sns-share-button{
  width: 160px;
  &__item{
    display: flex;
    justify-content: space-between;
    align-items: center;
    &--twitter, &--note, &--youtube, &--github {
      fill: #242426;
    }
  }
}
</style>
