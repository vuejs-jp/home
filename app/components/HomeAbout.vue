<script setup lang="ts">
import ButtonOutline from "./ButtonOutline.vue";
import StyleMount from "./StyleMount.vue";
</script>

<template>
  <StyleMount
    class="HomeAbout u-wrapper"
    tag="section"
  >
    <div class="container u-container">
      <div class="content u-section-content u-section-content--center">
        <p class="u-section-content__heading">
          {{ $t('components.HomeAbout.heading') }}
        </p>
        <i18n
          tag="p"
          path="components.HomeAbout.title"
          class="title u-section-content__title"
        >
          <template #newline>
            <br>
          </template>
          <template #nowrap>
            <span class="u-nowrap">{{ $t('components.HomeAbout.title_nowrap') }}</span>
          </template>
        </i18n>

        <p class="u-section-content__body">
          {{ $t('components.HomeAbout.body1') }}
        </p>
        <p class="u-section-content__body">
          {{ $t('components.HomeAbout.body2') }}
        </p>

        <div class="u-section-content__actions">
          <div class="u-section-content__action">
            <ButtonOutline
              tag="nuxt-link"
              :block="true"
              :href="localePath('/about')"
              :label="$t('components.HomeAbout.vuejs-jp')"
            />
          </div>

          <div class="u-section-content__action">
            <ButtonOutline
              tag="nuxt-link"
              :block="true"
              :href="localePath('/code-of-conduct')"
              :label="$t('components.HomeAbout.code-of-conduct')"
            />
          </div>
        </div>
      </div>

      <div class="illust">
        <figure class="figure">
          <img
            class="img"
            src="/img/home/hold-hands.svg"
            alt="仲間"
          >
          <i18n
            tag="figcaption"
            path="components.HomeAbout.copyright"
            class="copyright"
          >
            <template #author>
              <a
                class="copyright-link"
                href="https://www.linustock.com"
                target="_blank"
              >{{ $t('components.HomeAbout.author') }}</a>
            </template>
          </i18n>
        </figure>
      </div>
    </div>
  </StyleMount>
</template>

<style lang="postcss" scoped>
@import '@/assets/styles/variables';

.HomeAbout {
  padding-top: 80px;
  padding-bottom: 64px;

  @media (min-width: 375px) {
    padding-bottom: 96px;
  }

  @media (min-width: 768px) {
    padding-top: 128px;
    padding-bottom: 160px;
  }

  @media (min-width: 1056px) {
    padding-top: 96px;
    padding-bottom: 192px;
  }
}

.HomeAbout.mount-active {
  transition: opacity 0.5s, transform 0.5s;
  transition-delay: 0.75s;
}

.HomeAbout.mount {
  opacity: 0;
  transform: translateY(8px);
}

.container {
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
}

.content {
  max-width: 560px;
  margin: 0 auto;

  @media (min-width: 768px) {
    flex-shrink: 0;
    order: 2;
    width: 50%;
    max-width: 100%;
    padding: 0 0 0 24px;
  }
}

.title {
  br { display: none; }

  @media (min-width: 420px) {
    br { display: block; }
  }

  @media (min-width: 768px) {
    br { display: none; }
  }

  @media (min-width: 1056px) {
    white-space: nowrap;

    br { display: block; }
  }
}

.illust {
  padding-top: 48px;

  @media (min-width: 768px) {
    flex-shrink: 0;
    order: 1;
    width: 50%;
  }
}

.figure {
  padding-top: 8px;
  margin: 0 -32px;

  @media (min-width: 768px) {
    padding-top: 0;
    margin: 0 -128px;
    transform: translateX(-32px);
  }
}

.img {
  display: block;
  width: 100%;
  max-width: 392px;
  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: 100%;
  }
}

.copyright {
  padding-top: 4px;
  font-family: var(--font-family-en);
  font-size: 12px;
  font-weight: 400;
  color: var(--c-vue-green);
  text-align: center;
  transition: color 0.25s;

  @media (min-width: 768px) {
    padding-top: 8px;
  }
}

.copyright-link {
  transition: color 0.25s;

  &:hover {
    color: var(--c-vue-green-darker);
  }
}
</style>
