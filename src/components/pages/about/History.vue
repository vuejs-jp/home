<template>
  <div class="about__history">
    <div class="history">
      <div class="history-navigation">
        <div class="history-navigation-prev">
          <button @click="Prev">Prev</button>
        </div>
        <div class="history-navigation-next">
          <button @click="Next">Next</button>
        </div>
      </div>
      <div class="history-container">
        <div
          v-for="(year, i) in history"
          :key="i"
          :class="[
            `history-year-${year.label}`,
            { 'active': active === i }
          ]"
        >
          <h2>{{ year.label }}</h2>
          <ul>
            <li
              v-for="(item, j) in year.list"
              :key="j"
              :class="`item-${j}-${year.label}`"
            >
              <template v-if="item.href">
                <a
                  :href="item.href"
                  :title="item.title"
                  :class="{ 'bold': item.bold }"
                >
                  {{ item.title }}
                </a>
              </template>
              <template v-else>
                <span :class="{ 'bold': item.bold }">
                  {{ item.title }}
                </span>
              </template>
            </li>
          </ul>
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
    history() {
      // TODO: mock
      return [
        { 
          label: '2019',
          list : [
            {
              date: '',
              title: 'Lorem ipsum dolor sit',
              href: 'https://example.com',
              bold: true
            },
            {
              date: '',
              title: 'Lorem ipsum dolor sit',
              href: 'https://example.com',
            },
            {
              date: '',
              title: 'Lorem ipsum dolor sit. - Lorem ipsum dolor sit amet.',
              href: 'https://example.com',
            },
            {
              date: '',
              title: 'Lorem ipsum dolor sit',
              href: 'https://example.com',
            },
            {
              date: '',
              title: 'Lorem ipsum dolor sit',
              info: 'https://example.com',
            },
            {
              date: '',
              title: 'Lorem ipsum dolor sit',
              info: 'https://example.com',
              bold: true
            }
          ]
        },
        { 
          label: '2018',
          list : [
            {
              date: '',
              title: 'Lorem ipsum dolor sit',
              href: 'https://example.com',
              bold: true
            },
            {
              date: '',
              title: 'Lorem ipsum dolor sit',
              href: 'https://example.com',
            },
            {
              date: '',
              title: 'Lorem ipsum dolor sit',
              href: 'https://example.com',
            }
          ]
        },
        { 
          label: '2017',
          list : [
            {
              date: '',
              title: 'Lorem ipsum dolor sit',
              href: 'https://example.com',
              bold: true
            },
            {
              date: '',
              title: 'Lorem ipsum dolor sit',
              href: 'https://example.com',
            }
          ]
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
.history {
  &-navigation {
  }
  &-container {
    display: flex;
    h2 {}
    ul {
      columns: 12em;
      column-gap: 2em;
      .active {}
    }
  }
}
</style>
