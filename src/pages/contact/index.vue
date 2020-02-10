<template>
  <AppPage class="Contact u-wrapper">
    <div class="u-container">
      <div class="info">
        <h1 class="title">
          We’d loved to hear <span class="u-nowrap">from you.</span>
        </h1>
        <p class="lead">
          Vue.js 日本ユーザーグループへのご質問・ご相談は、フォームよりお気軽にお問い合わせください。
        </p>

        <section class="social">
          <h2 class="social-title">
            もっと気軽に相談する
          </h2>
          <p class="social-lead">
            SlackやTwitterからもお問い合わせを受けつけています。気になることや、ちょっとしたご質問がある場合には、遠慮なくご連絡ください。
          </p>

          <ul class="actions">
            <li class="action">
              <a class="action-link" href="#" target="_blank">
                <IconSlack class="action-icon slack" />
                Slackで質問する
                <IconChevronRight class="action-chevron" />
              </a>
            </li>
            <li class="action">
              <a class="action-link" href="#" target="_blank">
                <IconTwitter class="action-icon twitter" />
                Twitterで質問する
                <IconChevronRight class="action-chevron" />
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </AppPage>
</template>

<script lang="ts">
import Vue from 'vue'
import IconChevronRight from '@/components/icons/IconChevronRight.vue'
import IconSlack from '@/components/icons/IconSlack.vue'
import IconTwitter from '@/components/icons/IconTwitter.vue'
import AppPage from '@/components/AppPage.vue'

export default Vue.extend({
  components: {
    AppPage,
    IconChevronRight,
    IconSlack,
    IconTwitter
  },

  head: {
    title: 'Contact',
    meta: [
      { hid: 'description', name: 'description', content: 'Vue.js 日本ユーザーグループへのご質問・ご相談は、フォームよりお気軽にお問い合わせください。' }
    ]
  }
})
</script>

<style lang="postcss" scoped>
@import '@/assets/styles/variables';

.Contact {
  padding-top: 32px;

  @media (min-width: 768px) {
    padding-top: 48px;
  }
}

.info {
  @media (min-width: 440px) {
    text-align: center;
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
  margin: 0 auto;
  line-height: 28px;

  @media (min-width: 560px) {
    max-width: 504px;
    font-size: 20px;
    line-height: 32px;
  }
}

.social {
  padding-top: 40px;
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
}

.actions {
  display: flex;
  flex-direction: column;
  margin: -8px -16px;

  @media (min-width: 440px) {
    flex-direction: row;
    justify-content: center;
  }
}

.action {
  padding: 8px 16px;

  @media (min-width: 440px) {
    display: flex;
    justify-content: center;
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
</style>
