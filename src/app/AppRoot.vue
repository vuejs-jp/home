<script setup lang="ts">
import { computed, watch } from "vue";
import { RouterLink, RouterView, useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import { appLocales, persistLocale, type AppLocale } from "@/app/i18n.ts";

const route = useRoute();
const { locale, t } = useI18n();

const navigationItems = computed(() => [
  { label: t("app.nav.home"), to: "/" },
  { label: t("app.nav.stack"), to: "/stack" },
]);

function isCurrentPath(path: string) {
  return route.path === path;
}

function setLocale(nextLocale: AppLocale) {
  locale.value = nextLocale;
}

watch(
  locale,
  (nextLocale) => {
    persistLocale(nextLocale as AppLocale);
  },
  { immediate: true },
);
</script>

<template>
  <div class="site-shell">
    <header class="site-header">
      <RouterLink class="brand" to="/">
        <span class="brand-mark">{{ t("app.brand") }}</span>
        <span class="brand-copy">{{ t("app.subtitle") }}</span>
      </RouterLink>

      <div class="header-actions">
        <nav class="site-nav" aria-label="Global">
          <RouterLink
            v-for="item in navigationItems"
            :key="item.to"
            :to="item.to"
            class="nav-link"
            :class="{ current: isCurrentPath(item.to) }"
          >
            {{ item.label }}
          </RouterLink>
        </nav>

        <div class="locale-switcher" :aria-label="t('app.locale.label')">
          <button
            v-for="localeName in appLocales"
            :key="localeName"
            type="button"
            class="locale-button"
            :class="{ current: locale === localeName }"
            @click="setLocale(localeName)"
          >
            {{ t(`app.locale.${localeName}`) }}
          </button>
        </div>
      </div>
    </header>

    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.site-shell {
  width: min(720px, calc(100% - 2rem));
  margin: 0 auto;
  padding: 1.5rem 0 4rem;
}

.site-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding-bottom: 1.5rem;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.brand {
  display: inline-flex;
  flex-direction: column;
  gap: 0.2rem;
  color: inherit;
  text-decoration: none;
}

.brand-mark {
  font-size: 1rem;
  font-weight: 600;
}

.brand-copy {
  color: var(--muted);
  font-size: 0.875rem;
}

.site-nav {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.nav-link,
.locale-button {
  padding: 0.45rem 0.75rem;
  border: 1px solid var(--line);
  border-radius: 0.5rem;
  color: var(--muted);
  background: #ffffff;
  text-decoration: none;
}

.nav-link:hover,
.nav-link:focus-visible,
.nav-link.current,
.locale-button:hover,
.locale-button:focus-visible,
.locale-button.current {
  color: var(--ink);
  background: #f8fafc;
}

.locale-switcher {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.locale-button {
  cursor: pointer;
}

@media (max-width: 720px) {
  .site-header {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
