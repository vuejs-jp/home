<script setup lang="ts">
defineProps<{
  chat: {
    direction: "left" | "right";
    avatar: string;
    alt: string;
    name: string;
    time: string;
    body: string;
  };
}>();
</script>

<template>
  <div
    class="ChatStackItem"
    :class="chat.direction"
  >
    <figure class="avatar">
      <img
        class="avatar-img"
        :src="chat.avatar"
        :alt="chat.alt"
      >
    </figure>

    <div class="box">
      <div class="header">
        <p class="name">
          {{ chat.name }}
        </p>
        <p class="time">
          {{ chat.time }}
        </p>
      </div>

      <p class="body">
        {{ chat.body }}
      </p>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
@import '@/assets/styles/variables';

.ChatStackItem {
  display: flex;
}

.ChatStackItem.right {
  .avatar {
    order: 2;
  }

  .box {
    order: 1;
    margin-right: -16px;
    margin-left: 0;
  }

  @media (min-width: 560px) {
    .box {
      margin-right: 16px;
    }
  }
}

.avatar {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  transform: translateY(-16px);

  @media (min-width: 560px) {
    width: 64px;
    height: 64px;
    transform: translateY(-24px);
  }
}

.avatar-img {
  width: 100%;
  border-radius: 50%;
  box-shadow: var(--shadow-depth-3);
}

.box {
  max-width: 384px;
  padding: 16px;
  margin-left: -16px;
  background-color: var(--c-black);
  border-radius: 8px;
  box-shadow: var(--shadow-depth-3);

  @media (min-width: 560px) {
    margin-left: 16px;
  }

  @media (min-width: 1056px) {
    padding: 24px;
  }
}

.header {
  display: flex;
}

.name {
  font-family: var(--font-family-en);
  font-weight: 700;
  line-height: 20px;
  color: var(--c-white);
  white-space: nowrap;
}

.time {
  padding-left: 16px;
  font-family: var(--font-family-en);
  font-size: 14px;
  line-height: 20px;
  color: var(--c-gray-light);
  white-space: nowrap;
}

.body {
  padding-top: 8px;
  font-size: 14px;
  line-height: 24px;
  color: var(--c-white);
}
</style>
