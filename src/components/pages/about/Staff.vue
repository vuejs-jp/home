<template>
  <section class="about__staff">
    <h2 class="about__staff-title">Core Sraff</h2>
    <div class="about__staff-description">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui quaerat nesciunt ullam atque tenetur excepturi sapiente nisi, maiores, quia, reprehenderit non vero? Dolor voluptates praesentium dolorum quaerat ducimus est nobis.
    </div>
    <div
      v-for="area in areas"
      :key="area.type"
      :class="`about__staff-${area.type}`"
    >
      <h3 :class="`about__staff-${area.type}-title`" v-html="area.title" />
      <div :class="`about__staff-${area.type}-description`" v-html="area.discription" />
      <div :class="`about__staff-${area.type}-group`">
        <div
          v-for="item in area.list"
          :key="item.name"
          class="u-card"
        >
          <div class="avatar">
            <img :src="item.avatar" :alt="item.name">
          </div>
          <div class="name">
            {{ item.name }}
          </div>
          <div class="label" v-html="item.label" />
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
              <template v-if="key==='Twitter'"><ShareButtonTwitter /></template>
              <template v-if="key==='Github'"><ShareButtonGithub /></template>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import Vue from 'vue';
import ShareButtonGithub from '@/components/ShareButtonGithub'
import ShareButtonTwitter from '@/components/ShareButtonTwitter'

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
  components: {
    ShareButtonTwitter,
    ShareButtonGithub
  },
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
          avatar: 'http://placehold.jp/100x100.png',
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
          avatar: 'http://placehold.jp/100x100.png',
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
          avatar: 'http://placehold.jp/100x100.png',
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
          avatar: 'http://placehold.jp/100x100.png',
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

<style lang="postcss" scoped>
@import '@/assets/styles/variables.css';

.about__staff {
  max-width: var(--width-container-size);
  padding: 0 20px;
  margin: 0 auto;
  color: var(--c-black);
  &-title {
    margin-bottom: var(--gap-3);
    font-size: var(--font-size-section-title);
    font-weight: bold;
  }
  &-description {
    margin-bottom: var(--gap-6);
    font-size: var(--font-size-section-description);
  }
  &-events,
  &-core {
    padding-top: var(--gap-4);
    border-top-color: var(--c-divider);
    border-top-style: solid;
    border-top-width: 1px;
    &-title {
      margin-bottom: var(--gap-1);
      font-size: var(--font-size-area-title);
    }
    &-description {
      margin-bottom: var(--gap-5);
      font-size: var(--font-size-area-description);
      color: var(--c-gray);
    }
    &-group {
      display: flex;
      justify-content: space-between;
      margin-bottom: var(--gap-6);
      .u-card {
        display: flex;
        flex-basis: 31%;
        flex-direction: column;
        justify-content: space-between;
        height: 448px;
        margin-bottom: var(--gap-3);
        .avatar {
          width: 100px;
          height: 100px;
          margin-bottom: var(--gap-3);
          overflow: hidden;
          border-radius: 50%;
        }
        .name {
          margin-bottom: var(--gap-1);
          font-size: var(--font-size-area-title);
        }
        .label {
          margin-bottom: var(--gap-3);
          font-size: var(--font-size-s);
          a {
            color: var(--c-vue-green);
          }
        }
        .introduction {}
        .socials {
          margin-top: auto;
          a {
            margin-right: var(--gap-2);
          }
        }
      } 
    }
  }
}
</style>
