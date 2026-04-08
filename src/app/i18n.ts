import { createI18n } from "vue-i18n";
import { en } from "@/app/locales/en.ts";
import { ja } from "@/app/locales/ja.ts";

export const appLocales = ["ja", "en"] as const;
export type AppLocale = (typeof appLocales)[number];

export const defaultLocale: AppLocale = "ja";
export const localeStorageKey = "vuejs-jp-home-locale";

export const messages = { ja, en } as const;

export function isAppLocale(value: string): value is AppLocale {
  return appLocales.includes(value as AppLocale);
}

export function resolveInitialLocale() {
  if (typeof window === "undefined") {
    return defaultLocale;
  }

  const storedLocale = window.localStorage.getItem(localeStorageKey);
  if (storedLocale && isAppLocale(storedLocale)) {
    return storedLocale;
  }

  const browserLocale = window.navigator.language.toLowerCase();
  if (browserLocale.startsWith("ja")) {
    return "ja";
  }

  return "en";
}

export function persistLocale(locale: AppLocale) {
  if (typeof document !== "undefined") {
    document.documentElement.lang = locale;
  }

  if (typeof window !== "undefined") {
    window.localStorage.setItem(localeStorageKey, locale);
  }
}

export function createAppI18n() {
  return createI18n({
    legacy: false,
    locale: defaultLocale,
    fallbackLocale: defaultLocale,
    availableLocales: [...appLocales],
    messages,
  });
}
