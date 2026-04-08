<script setup lang="ts">
import { useHead } from "@unhead/vue";
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const appStackIds = [
  "vue",
  "i18n",
  "typescript",
  "vite",
  "vize",
  "lightningCss",
  "router",
  "valibot",
  "tres",
  "infra",
] as const;

const appStack = computed(() =>
  appStackIds.map((id) => ({
    name: t(`stack.items.${id}.name`),
    summary: t(`stack.items.${id}.summary`),
  })),
);

useHead(() => ({
  title: `${t("stack.title")} | Vue.js Japan`,
  meta: [
    {
      name: "description",
      content: t("stack.metaDescription"),
    },
  ],
}));
</script>

<template>
  <section class="stack-page">
    <p class="label">{{ t("stack.label") }}</p>
    <h1>{{ t("stack.title") }}</h1>

    <ul class="stack-list">
      <li v-for="item in appStack" :key="item.name" class="stack-item">
        <strong>{{ item.name }}</strong>
        <span>{{ item.summary }}</span>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.stack-page {
  display: grid;
  gap: 1rem;
}

.label {
  margin: 0;
  color: var(--muted);
}

h1 {
  margin: 0;
  font-size: clamp(2rem, 6vw, 3rem);
  line-height: 1.1;
}

.stack-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.75rem;
}

.stack-item {
  display: grid;
  gap: 0.35rem;
  padding: 0.9rem;
  border: 1px solid var(--line);
  border-radius: 0.5rem;
}

.stack-item span {
  color: var(--muted);
  line-height: 1.5;
}
</style>
