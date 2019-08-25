<template>
  <div class="about__staff">
    <div
      v-for="area in areas"
      :key="area.type"
      :class="`about__staff-${area.type}`"
    >
      <h2 class="about__staff-title">
        <span v-html="area.title" />
        <small v-html="area.discription" />
      </h2>
      <div class="about__staff-container">
        <div
          v-for="item in area.list"
          :key="item.name"
          class="u-card"
        >
          <div class="avatar">
            <img :src="item.avatar" :alt="item.name">
          </div>
          <div class="name">
            <h2>{{ item.name }}</h2>
          </div>
          <div class="label">
            <span v-html="item.label" />
          </div>
          <div class="introduction">
            <span v-html="item.introduction" />
          </div>
          <div
            v-if="item.socials"
            class="socials"
          >
            <a
              v-for="(link, key, i) in item.socials"
              :key="i"
              :href="link"
              :title="`${item.name} ${key}`"
            >
              {{ key }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
interface Staff {
  type: string
  name: string
  avatar: string
  label: string
  introduction: string
  socials: { key: string }
}
interface Area {
  type: string
  title: string
  discription: string
  list: any | Staff
}
interface Areas {
  [key: string] : Area;
}
export default Vue.extend({
  computed: {
    area() {
      return [
        {
          type: 'core',
          title: 'Lorem ipsum dolor sit amet.',
          discription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        {
          type: 'events',
          title: 'Lorem ipsum dolor sit amet.',
          discription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        }
      ]
    },
    staff() {
      return [
        {
          type: 'core',
          name: 'Lorem',
          avatar: 'http://placehold.jp/150x150.png',
          label: 'Lorem ipsum dolor sit0 <a href="https://example.com">amet consectetur</a>.',
          introduction: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, placeat.',
          socials: {
            Twitter: 'https://example.com',
            Github: 'https://example.com'
          }
        },
        {
          type: 'events',
          name: 'Lorem ipsum',
          avatar: 'http://placehold.jp/150x150.png',
          label: 'Lorem ipsum dolor sit amet consectetur.',
          introduction: 'Lorem ipsum dolor sit amet <a href="https://example.com">consectetur</a> adipisicing elit. Consequuntur, placeat.',
          socials: {
            Twitter: 'https://example.com',
            Github: 'https://example.com'
          }
        },
        {
          type: 'events',
          name: 'Lorem ipsum dolor',
          avatar: 'http://placehold.jp/150x150.png',
          label: 'Lorem ipsum dolor sit.',
          introduction: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad aperiam delectus iusto! Mollitia, natus saepe.',
          socials: {
            Twitter: 'https://example.com',
            Github: 'https://example.com'
          }
        },
        {
          type: 'events',
          name: 'amet consectetur',
          avatar: 'http://placehold.jp/150x150.png',
          label: 'Lorem ipsum dolor sit amet consectetur.',
          introduction: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
          socials: {
            Twitter: 'https://example.com',
            Github: 'https://example.com'
          }
        }
      ]
    },
    areas() {
      const Areas : Areas  = {}
      this.area.forEach(element => {
        Areas[element.type] = element
        Areas[element.type].list = []
      });
      this.staff.forEach(element => {
        Areas[element.type].list.push(element)
      });
      return Areas
    }
  }
})
</script>

<style lang="postcss" sscoped>
.about__staff {
  &-container {
    .u-card {
      .avatar {}
      .name {}
      .label {}
      .introduction {}
      .socials {}
    } 
  }
  &-title {
  }
}
</style>
