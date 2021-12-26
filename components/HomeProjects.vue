<template>
  <StyleMount class="HomeProjects u-wrapper" tag="section">
    <div class="u-container">
      <div class="content u-section-content u-section-content--center">
        <p class="u-section-content__heading">{{ $t('components.HomeProjects.heading') }}</p>
        <i18n tag="h2" path="components.HomeProjects.title" class="title u-section-content__title">
          <template #newline><br></template>
        </i18n>

        <i18n tag="p" path="components.HomeProjects.body" class="u-section-content__body">
          <template #nowrap>{{ $t('components.HomeProjects.nowrap') }}</template>
        </i18n>
      </div>

      <div class="projects">
        <div class="projects-container">
          <a class="project" href="https://github.com/vuejs-jp/ja.vuejs.org" target="_blank">
            <article class="project-box">
              <i class="project-type">
                <IconEdit3 class="project-icon" />
              </i>
              <i18n tag="h3" path="components.HomeProjects.projects.vue.title" class="project-title">
                <template #newline><br></template>
                <template #nowrap>
                  <span class="u-nowrap">{{ $t('components.HomeProjects.projects.vue.official') }}</span>
                </template>
              </i18n>
              <p class="project-body">{{ $t('components.HomeProjects.projects.vue.body') }}</p>
              <p class="project-link">
                {{ $t('components.HomeProjects.projects.vue.link') }}
                <IconChevronRight class="project-link-chevron" />
              </p>
            </article>
          </a>

          <a class="project" href="https://github.com/vuejs-jp/ja.nuxtjs.org/wiki" target="_blank">
            <article class="project-box">
              <i class="project-type">
                <IconEdit3 class="project-icon" />
              </i>
              <i18n tag="h3" path="components.HomeProjects.projects.nuxt.title" class="project-title">
                <template #newline><br></template>
                <template #nowrap>
                  <span class="u-nowrap">{{ $t('components.HomeProjects.projects.nuxt.official') }}</span>
                </template>
              </i18n>
              <p class="project-body">{{ $t('components.HomeProjects.projects.nuxt.body') }}</p>
              <p class="project-link">
                {{ $t('components.HomeProjects.projects.nuxt.link') }}
                <IconChevronRight class="project-link-chevron" />
              </p>
            </article>
          </a>

          <a class="project" href="https://github.com/vuejs-jp/home" target="_blank">
            <article class="project-box">
              <i class="project-type">
                <IconTerminal class="project-icon" />
              </i>
              <i18n tag="h3" path="components.HomeProjects.projects.vuejsjp.title" class="project-title">
                <template #newline><br></template>
                <template #nowrap>
                  <span class="u-nowrap">{{ $t('components.HomeProjects.projects.vuejsjp.official') }}</span>
                </template>
              </i18n>
              <p class="project-body">{{ $t('components.HomeProjects.projects.vuejsjp.body') }}</p>
              <p class="project-link">
                {{ $t('components.HomeProjects.projects.vuejsjp.link') }}
                <IconChevronRight class="project-link-chevron" />
              </p>
            </article>
          </a>
        </div>
      </div>
    </div>
  </StyleMount>
</template>

<script lang="ts">
import Vue from 'vue'
import IconChevronRight from './icons/IconChevronRight.vue'
import IconEdit3 from './icons/IconEdit3.vue'
import IconTerminal from './icons/IconTerminal.vue'
import StyleMount from './StyleMount.vue'

export default Vue.extend({
  components: {
    IconChevronRight,
    IconEdit3,
    IconTerminal,
    StyleMount
  }
})
</script>

<style lang="postcss" scoped>
@import '@/assets/styles/variables';

.HomeProjects {
  padding-top: 32px;
  padding-bottom: 64px;

  @media (min-width: 375px) {
    padding-top: 48px;
    padding-bottom: 96px;
  }

  @media (min-width: 768px) {
    padding-top: 96px;
    padding-bottom: 160px;
  }

  @media (min-width: 1056px) {
    padding-bottom: 256px;
  }
}

.HomeProjects.mount-active {
  transition: opacity 0.5s, transform 0.5s;
  transition-delay: 0.75s;
}

.HomeProjects.mount {
  opacity: 0;
  transform: translateY(8px);
}

.content {
  max-width: 560px;
  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: 640px;
    text-align: center;
  }
}

.title {
  br { display: none; }

  @media (min-width: 420px) {
    br { display: block; }
  }
}

.projects {
  max-width: 560px;
  padding-top: 48px;
  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: 960px;
    padding-top: 64px;
  }

  @media (min-width: 960px) {
    padding-top: 64px;
  }
}

.projects-container {
  display: flex;
  flex-wrap: wrap;
  margin: -24px;

  @media (min-width: 1056px) {
    margin: -32px;
  }
}

.project {
  display: block;
  padding: 24px;

  &:hover {
    .project-icon  { fill: var(--c-vue-green); }
    .project-title { color: var(--c-vue-green); }
  }

  @media (min-width: 768px) {
    width: calc(100% / 3);
  }

  @media (min-width: 1056px) {
    padding: 32px;
  }
}

.project-icon {
  width: 24px;
  height: 24px;
  fill: var(--c-black);
  transition: fill 0.25s;
}

.project-title {
  padding-top: 8px;
  font-size: 20px;
  font-weight: 700;
  line-height: 32px;
  transition: color 0.25s;
}

.project-body {
  padding-top: 12px;
  line-height: 28px;
}

.project-link {
  display: flex;
  align-items: center;
  padding-top: 16px;
  font-size: 14px;
  color: var(--c-vue-green);
  transition: color 0.25s;
}

.project-link-chevron {
  width: 12px;
  margin-left: 8px;
  fill: currentColor;
}
</style>
