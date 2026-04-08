import { ViteSSG } from "vite-ssg";
import AppRoot from "@/app/AppRoot.vue";
import { createAppI18n, persistLocale, resolveInitialLocale } from "@/app/i18n.ts";
import { routes } from "@/app/router.ts";
import "@/app/global.css";

export const createApp = ViteSSG(AppRoot, { routes }, ({ app, isClient }) => {
  const i18n = createAppI18n();

  if (isClient) {
    const locale = resolveInitialLocale();
    i18n.global.locale.value = locale;
    persistLocale(locale);
  }

  app.use(i18n);
});
