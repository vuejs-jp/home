<script lang="ts">
import { defineComponent } from 'vue'
import type { PropOptions } from 'vue'
import ChatStackItem from './ChatStackItem.vue'


interface Chat {
  direction: 'left' | 'right'
  avatar: string
  alt: string
  name: string
  time: string
  body: string
}

export default defineComponent({
  components: {
    ChatStackItem
  },

  props: {
    chats: { type: Array, required: true } as PropOptions<Chat[]>
  }
})
</script>

<template>
  <div class="ChatStack">
    <div v-for="(chat, index) in chats" :key="index" class="chat" :class="chat.direction">
      <ChatStackItem :chat="chat" />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
@import '@/assets/styles/variables';

.chat {
  display: flex;

  & + & {
    padding-top: 48px;
  }

  @media (min-width: 768px) {
    & + & {
      padding-top: 64px;
    }
  }

  @media (min-width: 1056px) {
    & + & {
      padding-top: 80px;
    }
  }
}

.chat.right {
  justify-content: flex-end;
}
</style>
