<template>
  <div class="team-area">
    <div class="main-title">
      Founder & Representatives
    </div>
    <div class="sub-title">
      コミュニティーの立ち上げと統括を行っています
    </div>

    <div class="container">
      <div v-for="member in team" :key="member.id" class="member-card">
        <div class="avatar">
          <img class="avatar-img" :src="`https://github.com/${member.github}.png`" alt="">
        </div>
        <div class="member-name">
          {{ member.name }}
        </div>

        <!--  core focus   -->
        <div class="core-focus" v-if="member.reposOfficial">
          CORE FOCUS
          <span v-for="focus in member.reposOfficial">
            <span class="focus-item">{{focus}}</span>
          </span>
        </div>

        <!--  personal  project    -->
        <div v-if=" member.reposPersonal">
          ECOSYSTEM
          <span v-for="focus in member.reposPersonal">
            <span class="focus-item">{{focus}}</span>
          </span>
        </div>

        <!--  work  -->
        <div v-if="member.work">
          <div v-if="member.work.orgUrl">
            <div><font-awesome-icon icon = "briefcase" />{{member.work.role}}
              <a class="member-org" :href="member.work.orgUrl" target="_blank">@{{member.work.org}}</a>
            </div>
          </div>
          <div v-else>
            <span><font-awesome-icon icon = "briefcase" />{{member.work.role}}</span>
            <span v-if="member.work.org">@</span>
            <span>{{member.work.org}}</span>
          </div>
        </div>

        <!--  language    -->
        <div v-if=" member.languages">
          <font-awesome-icon icon = "globe" />
          <span class="lang" v-for="lang in member.languages">
            <span v-if="lang==='en'">English</span>
            <span v-else-if="lang==='zh'">中文</span>
            <span v-else-if="lang==='jp'">日本語</span>
            <span v-else-if="lang==='fr'">Français</span>
            <span v-else-if="lang==='es'">Español</span>
          </span>
        </div>

        <!--    location    -->
        <div v-if=" member.city">
          <font-awesome-icon icon = "map-marker" />
          <span v-for="city in member.city">
            <span class="city">{{city}}</span>
          </span>
        </div>

        <!--   link    -->
        <div v-if=" member.links">
          <font-awesome-icon icon = "link" />
          <span v-for="link in member.links">
            <span class="link"><a :href="link" target="_blank">{{link}}</a></span>
          </span>
        </div>

        <a class="social-github" :href="`https://github.com/${member.github}`" target="_blank"><img class="social-icon" src="https://user-images.githubusercontent.com/12625278/94401123-10526900-01a5-11eb-9701-9d68b4e698ce.png" alt="github"></a>
        <a class="social-twitter" :href="`https://twitter.com/${member.twitter}`" target="_blank"><img class="social-icon" src="https://user-images.githubusercontent.com/12625278/94402630-41339d80-01a7-11eb-9540-65cd5700eb02.png" alt="twitter"></a>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import team from '@/data/about_team_list'


export default Vue.extend({
  data () {
    return {
      team: team
    }
  }
})
</script>

<style lang="postcss" scoped>
  @import '@/assets/styles/variables';

  .avatar {
    flex-shrink: 0;
    margin: 10px;
    width: 48px;
    height: 48px;
    transform: translateY(-16px);
  }

  .avatar-img {
    width: 100%;
    border-radius: 50%;
    box-shadow: var(--shadow-depth-3);
  }

  .member-name{
    font-size: 24px;
    font-weight: bold;
    margin:  10px 0;
  }

  .team-area{
    margin-left: 480px;
    margin-top: 50px;
  }

  .container{
    margin-top: 50px;
  }

  .member-card{
    border-bottom: 1px dotted #ddd;
    padding-bottom: 40px;
    margin-bottom: 40px;
  }

  .focus-item{
    color: #41b983;
    padding-left: 5px;
  }
  .member-org{
    color: #41b983;
  }
  .link{
    color: #41b983;
  }

  .social-icon{
    width: 24px;
    height: 24px;
    margin: 20px 5px;

  }

  .lang{
    margin-right: 5px;
  }

  svg{
    margin:  0 6px 0 0;
  }

</style>
