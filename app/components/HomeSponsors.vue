<script setup lang="ts">
import StyleMount from "./StyleMount.vue";
</script>

<template>
  <StyleMount
    class="HomeSponsors u-wrapper"
    tag="section"
  >
    <div class="u-container">
      <div class="content u-section-content u-section-content--center">
        <p class="u-section-content__heading">
          {{ $t('components.HomeSponsors.heading') }}
        </p>
        <h2 class="title u-section-content__title">
          {{ $t('components.HomeSponsors.title') }}
        </h2>
        <p class="u-section-content__body">
          {{ $t('components.HomeSponsors.body') }}
        </p>
      </div>

      <ul class="sponsors">
        <li class="sponsor">
          <a
            class="sponsor-link"
            href="https://docs.esa.io/posts/239/"
            target="_blank"
          >
            <img
              class="sponsor-logo"
              src="/img/common/logo-esa.png"
              alt="esa"
            >
          </a>
        </li>
        <li class="sponsor">
          <a
            class="sponsor-link"
            href="https://slack.com"
            target="_blank"
          >
            <img
              class="sponsor-logo"
              src="/img/common/logo-slack.png"
              alt="Slack"
            >
          </a>
        </li>
      </ul>
    </div>
  </StyleMount>
</template>

<style lang="postcss" scoped>
@import '@/assets/styles/variables';

.HomeSponsors {
  padding-top: 64px;
  padding-bottom: 64px;
  border-top: 1px solid var(--c-divider);

  @media (min-width: 375px) {
    padding-top: 96px;
    padding-bottom: 96px;
  }

  @media (min-width: 768px) {
    padding-top: 128px;
    padding-bottom: 128px;
  }
}

.HomeSponsors.mount-active {
  transition: opacity 0.5s, transform 0.5s;
  transition-delay: 0.75s;
}

.HomeSponsors.mount {
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
  max-width: 328px;

  @media (min-width: 768px) {
    max-width: 420px;
    margin: 0 auto;
  }
}

.sponsors {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 32px;
}

.sponsor {
  width: 50%;
  max-width: 160px;

  @media (min-width: 768px) {
    max-width: 192px;
  }
}

.sponsor-link {
  display: block;
  transition: opacity 0.25s;

  &:hover {
    opacity: 0.6;
  }
}

.sponsor-img {
  width: 100%;
}
</style>
