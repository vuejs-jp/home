<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useHead } from "@unhead/vue";
import { RouterLink, useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import HeroScene from "./HeroScene.vue";
import { parseHomeQuery } from "./homeQuery.ts";

const route = useRoute();
const isSceneReady = ref(false);
const { t } = useI18n();

const greetingState = computed(() => parseHomeQuery(route.query));

const stackPreviewKeys = ["vue", "i18n", "vite", "vize", "routing", "extras"] as const;

const greeting = computed(() => {
  if (greetingState.value.status === "invalid") {
    return {
      title: t("home.greeting.invalidTitle"),
      note: t("home.greeting.invalidNote"),
      reason: t("home.greeting.invalidReason"),
    };
  }

  if (greetingState.value.status === "personalized") {
    return {
      title: t("home.greeting.personalizedTitle", { name: greetingState.value.name }),
      note: t("home.greeting.personalizedNote"),
      reason: "",
    };
  }

  return {
    title: t("home.greeting.defaultTitle"),
    note: t("home.greeting.defaultNote"),
    reason: "",
  };
});

onMounted(() => {
  isSceneReady.value = true;
});

useHead(() => ({
  title: `${greeting.value.title} | Vue.js Japan`,
  meta: [
    {
      name: "description",
      content: t("home.metaDescription"),
    },
  ],
}));
</script>

<template>
  <section class="page">
    <p class="label">{{ t("home.label") }}</p>
    <h1>{{ greeting.title }}</h1>
    <p class="message">{{ greeting.note }}</p>
    <p v-if="greetingState.status === 'invalid'" class="warning">{{ greeting.reason }}</p>

    <div class="links">
      <a href="/?name=Vue.js%20Japan">{{ t("home.links.valibot") }}</a>
      <RouterLink to="/stack">{{ t("home.links.stack") }}</RouterLink>
    </div>

    <div class="scene">
      <HeroScene v-if="isSceneReady" />
      <div v-else class="scene-placeholder">{{ t("home.scenePlaceholder") }}</div>
    </div>

    <ul class="stack">
      <li v-for="item in stackPreviewKeys" :key="item">
        {{ t(`home.stackPreview.${item}`) }}
      </li>
    </ul>
  </section>
</template>

<style scoped>
.page {
  display: grid;
  gap: 1rem;
}

.label,
.message,
.warning {
  margin: 0;
  color: var(--muted);
}

h1 {
  margin: 0;
  font-size: clamp(2.25rem, 8vw, 4rem);
  line-height: 1.05;
}

.message,
.warning {
  line-height: 1.6;
}

.warning {
  color: #b45309;
}

.links {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.links a {
  padding: 0.5rem 0.75rem;
  border: 1px solid var(--line);
  border-radius: 0.5rem;
  text-decoration: none;
}

.scene {
  min-height: 280px;
  border: 1px solid var(--line);
  border-radius: 0.75rem;
  background: #f8fafc;
  overflow: hidden;
}

.scene-placeholder {
  height: 100%;
  display: grid;
  place-items: center;
  color: var(--muted);
}

.stack {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.5rem;
}

.stack li {
  padding: 0.75rem;
  border: 1px solid var(--line);
  border-radius: 0.5rem;
}
</style>
