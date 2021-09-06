<template>
  <AppPage class="Contact u-wrapper">
    <StyleMount class="container u-container">
      <div class="info">
        <i18n tag="h1" path="pages.contact.title" class="title">
          <template #newline><br></template>
          <template #from>
            <span class="u-nowrap">{{ $t('pages.contact.from') }}</span>
          </template>
        </i18n>
        <i18n tag="p" path="pages.contact.lead" class="lead">
          <template #newline><br></template>
        </i18n>

        <section class="social">
          <h2 class="social-title">{{ $t('pages.contact.social.title') }}</h2>
          <p class="social-lead">{{ $t('pages.contact.social.lead') }}</p>

          <ul class="actions">
            <li class="action">
              <a class="action-link" href="https://join.slack.com/t/vuejs-jp/shared_invite/zt-pcpd1rnq-QTaoQ0U_gRiewCsyO6NH8Q" target="_blank" rel="noopener noreferrer">
                <IconSlack class="action-icon slack" />
                {{ $t('pages.contact.social.slack') }}
                <IconChevronRight class="action-chevron" />
              </a>
            </li>
            <li class="action">
              <a class="action-link" href="https://twitter.com/vuefes" target="_blank" rel="noopener noreferrer">
                <IconTwitter class="action-icon twitter" />
                {{ $t('pages.contact.social.twitter') }}
                <IconChevronRight class="action-chevron" />
              </a>
            </li>
          </ul>
        </section>
      </div>

      <div class="form">
        <div class="form-container">
          <ContactForm />
        </div>
      </div>
    </StyleMount>
  </AppPage>
</template>

<script lang="ts">
import Vue from 'vue'
import { mergeMeta } from '../../support/meta'
import IconChevronRight from '@/components/icons/IconChevronRight.vue'
import IconSlack from '@/components/icons/IconSlack.vue'
import IconTwitter from '@/components/icons/IconTwitter.vue'
import AppPage from '@/components/AppPage.vue'
import StyleMount from '@/components/StyleMount.vue'
import ContactForm from '@/components/ContactForm.vue'

export default Vue.extend({
  components: {
    IconChevronRight,
    IconSlack,
    IconTwitter,
    AppPage,
    StyleMount,
    ContactForm
  },

  head (): object {
    const name = this.$i18n.t('vuejs-jp-ug') as string
    const title = this.$i18n.t('menu.contact') as string
    const description = this.$i18n.t('pages.contact.head') as string
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })

    return mergeMeta({ name, title, description, url: this.$url() }, i18nHead)
  }
})
</script>

<style lang="postcss" scoped>
@import '@/assets/styles/variables';

.Contact {
  padding-top: 32px;
  padding-bottom: 128px;

  @media (min-width: 768px) {
    padding-top: 48px;
    padding-bottom: 192px;
  }

  @media (min-width: 1056px) {
    padding-top: 64px;
  }
}

.container {
  @media (min-width: 1056px) {
    display: flex;
  }
}

.container.mount-active {
  .title,
  .lead,
  .social,
  .form {
    transition: opacity 0.5s, transform 0.5s;
  }

  .title  { transition-delay: 0.1s; }
  .lead   { transition-delay: 0.2s; }
  .social { transition-delay: 0.3s; }
  .form   { transition-delay: 0.5s; }
}

.container.mount {
  .title,
  .lead,
  .social,
  .form {
    opacity: 0;
    transform: translateY(8px);
  }
}

.info {
  br { display: none; }

  @media (min-width: 440px) {
    text-align: center;
  }

  @media (min-width: 1056px) {
    width: calc((100% / 5) * 2);
    padding-right: 32px;
    text-align: left;

    br { display: block; }
  }
}

.title {
  font-family: var(--font-family-en);
  font-size: 32px;
  font-weight: 600;
  line-height: 36px;

  @media (min-width: 560px) {
    font-size: 48px;
    line-height: 56px;
  }
}

.lead {
  max-width: 404px;
  padding-top: 16px;
  margin: 0 auto;
  line-height: 28px;

  br { display: none; }

  @media (min-width: 560px) {
    max-width: 504px;
    font-size: 20px;
    line-height: 32px;
  }

  @media (min-width: 1056px) {
    br { display: block; }
  }
}

.social {
  padding-top: 40px;

  @media (min-width: 1056px) {
    padding-top: 64px;
  }
}

.social-title {
  font-size: 20px;
  font-weight: 700;
}

.social-lead {
  max-width: 404px;
  padding-top: 16px;
  padding-bottom: 32px;
  margin: 0 auto;

  @media (min-width: 1056px) {
    max-width: 360px;
    margin: 0;
  }
}

.actions {
  display: flex;
  flex-direction: column;
  margin: -8px -16px;

  @media (min-width: 440px) {
    flex-direction: row;
    justify-content: center;
  }

  @media (min-width: 1056px) {
    flex-direction: column;
    flex-direction: flex-start;
  }
}

.action {
  padding: 8px 16px;

  @media (min-width: 440px) {
    display: flex;
    justify-content: center;
  }

  @media (min-width: 1056px) {
    justify-content: flex-start;
  }
}

.action-link {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: var(--c-vue-green);
  transition: color 0.25s;

  &:hover {
    color: var(--c-vue-green-dark);
  }
}

.action-icon {
  width: 24px;
  height: 24px;
  margin-right: 16px;
}

.action-icon.twitter { fill: #1da1f2; }

.action-chevron {
  width: 12px;
  height: 12px;
  margin-left: 8px;
  fill: currentColor;
}

.form {
  padding-top: 64px;
  margin: 0 -16px;

  @media (min-width: 375px) {
    margin: 0 -24px;
  }

  @media (min-width: 560px) {
    margin: 0;
  }

  @media (min-width: 1056px) {
    width: calc((100% / 5) * 3);
    padding-top: 0;
    margin: 0;
  }
}

.form-container {
  max-width: 640px;
  margin: 0 auto;

  @media (min-width: 1056px) {
    max-width: 100%;
    transform: translate(16px, -24px);
  }
}
</style>
