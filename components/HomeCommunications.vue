<template>
  <StyleMount class="HomeCommunications u-wrapper" tag="section">
    <div class="container u-container">
      <div class="content u-section-content">
        <p class="u-section-content__heading">{{ $t('components.HomeCommunications.heading') }}</p>
        <i18n tag="h2" path="components.HomeCommunications.title" class="title u-section-content__title">
          <template #newline><br></template>
          <template #everyone>{{ $t('components.HomeCommunications.everyone') }}</template>
          <template #you>{{ $t('components.HomeCommunications.you') }}</template>
          <template #wait>{{ $t('components.HomeCommunications.wait') }}</template>
          <template #online>{{ $t('components.HomeCommunications.online') }}</template>
        </i18n>
        <p class="u-section-content__body">{{ $t('components.HomeCommunications.body1') }}</p>
        <p class="u-section-content__body">{{ $t('components.HomeCommunications.body2') }}</p>

        <div class="u-section-content__actions">
          <div class="u-section-content__action">
            <ButtonOutline
              tag="a"
              :block="true"
              href="https://join.slack.com/t/vuejs-jp/shared_invite/zt-pcpd1rnq-QTaoQ0U_gRiewCsyO6NH8Q"
              :icon="iconSlack"
              :label="$t('components.HomeCommunications.slack')"
            />
          </div>

          <div class="u-section-content__action">
            <ButtonOutline
              tag="a"
              :block="true"
              href="https://forum.vuejs.org/c/japanese"
              :icon="iconVue"
              :label="$t('components.HomeCommunications.forum')"
            />
          </div>
        </div>
      </div>

      <div class="chat">
        <ChatStack :chats="chats" />
      </div>
    </div>
  </StyleMount>
</template>

<script lang="ts">
import Vue from 'vue'
import IconSlack from './icons/IconSlack.vue'
import IconVue from './icons/IconVue.vue'
import StyleMount from './StyleMount.vue'
import ButtonOutline from './ButtonOutline.vue'
import ChatStack from './ChatStack.vue'

export default Vue.extend({
  components: {
    StyleMount,
    ButtonOutline,
    ChatStack
  },

  data () {
    const $t = this.$t.bind(this)
    return {
      iconSlack: IconSlack,
      iconVue: IconVue,

      chats: [
        {
          direction: 'left',
          avatar: '/img/home/avatar-001.jpg',
          alt: 'Avatar 001',
          name: 'Arisa Miyake',
          time: '3:12 PM',
          body: $t('components.HomeCommunications.chats.user1')
        },
        {
          direction: 'right',
          avatar: '/img/home/avatar-002.jpg',
          alt: 'Avatar 002',
          name: 'Kenji Yamadera',
          time: '3:19 PM',
          body: $t('components.HomeCommunications.chats.user2')
        },
        {
          direction: 'left',
          avatar: '/img/home/avatar-003.jpg',
          alt: 'Avatar 003',
          name: 'Ai Nakagawa',
          time: '3:25 PM',
          body: $t('components.HomeCommunications.chats.user3')
        }
      ]
    }
  }
})
</script>

<style lang="postcss" scoped>
@import '@/assets/styles/variables';

.HomeCommunications {
  padding-top: 32px;
  padding-bottom: 32px;

  @media (min-width: 375px) {
    padding-top: 48px;
    padding-bottom: 48px;
  }

  @media (min-width: 768px) {
    padding-top: 96px;
    padding-bottom: 64px;
  }

  @media (min-width: 1056px) {
    padding-bottom: 96px;
  }
}

.HomeCommunications.mount-active {
  transition: opacity 0.5s, transform 0.5s;
  transition-delay: 0.75s;
}

.HomeCommunications.mount {
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
    width: 50%;
    max-width: 100%;
    padding: 0 24px 0 0;
  }

  @media (min-width: 1056px) {
    padding: 0 24px 32px 0;
  }

  @media (min-width: 1088px) {
    padding: 0 32px 48px 0;
  }
}

.title {
  br { display: none; }

  @media (min-width: 440px) {
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

.chat {
  padding-top: 64px;

  @media (min-width: 560px) {
    padding-top: 96px;
  }

  @media (min-width: 768px) {
    padding-top: 0;
    transform: translateX(24px);
  }

  @media (min-width: 1088px) {
    transform: translateX(32px);
  }
}
</style>
