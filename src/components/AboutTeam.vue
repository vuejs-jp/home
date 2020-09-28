<template>
  <div class="team-area">
    <div class="main-title">
      Founder & Representatives
    </div>
    <div class="sub-title">
      コミュニティーの立ち上げと統括を行っています
    </div>

    <div class="container">
      <div v-for="member in team" :key="member.id" style="display: inline-block;">
        <figure class="avatar">
          <img class="avatar-img" :src="member.icon" alt="">
        </figure>
        <div class="member-name">
          {{ member.name }}
        </div>
        <div class="work-for" v-html=" member.workFor " />
        <div class="desc" v-html="member.desc" />

        <a class="social-github" :href="member.github" target="_blank"><img class="social-icon" src="https://user-images.githubusercontent.com/12625278/94401123-10526900-01a5-11eb-9701-9d68b4e698ce.png" alt="github"></a>
        <a class="social-twitter" :href="member.twitter" target="_blank"><img class="social-icon" src="https://user-images.githubusercontent.com/12625278/94402630-41339d80-01a7-11eb-9540-65cd5700eb02.png" alt="twitter"></a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AboutTeam from '@/data/about_team_list'

export default Vue.extend({
  data () {
    return {
      team: AboutTeam
    }
  }
})
</script>

<style lang="postcss" scoped>
  @import '@/assets/styles/variables';

  .avatar {
    flex-shrink: 0;
    width: 48px;
    height: 48px;
    transform: translateY(-16px);

    @media (min-width: 560px) {
      width: 64px;
      height: 64px;
      transform: translateY(-24px);
    }
  }

  .team-area{
    margin-bottom: 150px;
    margin-left: 21%;
  }

  .main-title{
    font-size: 20px;
    font-weight: bold;
    color: black;
  }

  .sub-title{
    margin-top: 10px;
    margin-bottom: 50px;
    font-size: 12px;
    color: grey;
  }

  .container{
    position: relative;
    width: 300px;
    height: 450px;
    padding: 40px;
    background: white;
    box-shadow: 1px 1px 1px 1px lightgrey;
  }

  .avatar-img {
    width: 100%;
    border-radius: 50%;
    box-shadow: var(--shadow-depth-3);
  }

  .social-github{
    position: absolute;
    bottom: 40px;
    left: 30px;
  }

  .social-twitter{
    position: absolute;
    bottom: 40px;
    left: 80px;
  }

  .social-icon{
    width: 24px;
    height: 24px;
    margin: 0 15px;

  }

  .member-name{
    margin: 10px 0;
    font-size: 25px;
    font-weight: bold;
  }

  .work-for{
  }

  .desc {
    margin: 30px 0;
  }

</style>
