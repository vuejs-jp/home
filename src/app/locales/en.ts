import type { AppMessages } from "./ja.ts";

export const en = {
  app: {
    brand: "Vue.js JP",
    subtitle: "Renewal hello world",
    nav: {
      home: "Hello",
      stack: "Stack",
    },
    locale: {
      label: "Language",
      ja: "日本語",
      en: "English",
    },
  },
  home: {
    metaDescription:
      "Vue.js Japan website renewal hello world with Vue I18n, Vize, vite-ssg, valibot, and TresJS.",
    label: "Hello world",
    links: {
      valibot: "Try valibot",
      stack: "Stack",
    },
    scenePlaceholder: "TresJS",
    greeting: {
      defaultTitle: "Hello world.",
      defaultNote:
        "Vue 3.6, Vue I18n, Vite 8, Vite+, Vize, Vue Router, vite-ssg, valibot, and TresJS are wired up.",
      personalizedTitle: "Hello, {name}.",
      personalizedNote: "A small Vue Router + valibot + Vue I18n flow is already working.",
      invalidTitle: "Hello world.",
      invalidNote: "Query values are validated with valibot before the page reacts to them.",
      invalidReason: "Unsupported `name` values were ignored safely.",
    },
    stackPreview: {
      vue: "Vue 3.6",
      i18n: "Vue I18n",
      vite: "Vite 8 + Vite+",
      vize: "Vize + Lightning CSS",
      routing: "Vue Router + vite-ssg",
      extras: "valibot + TresJS",
    },
  },
  stack: {
    metaDescription: "Stack notes for the Vue.js Japan website renewal prototype.",
    label: "Stack",
    title: "Current hello world selection",
    items: {
      vue: {
        name: "Vue 3.6",
        summary: "Core UI runtime.",
      },
      i18n: {
        name: "Vue I18n",
        summary: "Japanese and English UI strings are handled through vue-i18n.",
      },
      typescript: {
        name: "TypeScript 6",
        summary: "Strict mode with `verbatimModuleSyntax` and `noUncheckedIndexedAccess`.",
      },
      vite: {
        name: "Vite 8 + Vite+",
        summary: "Vite handles the app, and `vp` stays the main entrypoint.",
      },
      vize: {
        name: "Vize",
        summary: "Vize handles SFC lint and type checking.",
      },
      lightningCss: {
        name: "Lightning CSS",
        summary: "CSS transformation uses Lightning CSS.",
      },
      router: {
        name: "Vue Router + vite-ssg",
        summary: "Routing stays explicit while SSG pre-renders the pages.",
      },
      valibot: {
        name: "valibot",
        summary: "Route query input is validated at the boundary.",
      },
      tres: {
        name: "TresJS",
        summary: "A small 3D scene is embedded in the hello world page.",
      },
      infra: {
        name: "Terraform + Netlify",
        summary: "Netlify build settings live under `infra/terraform/netlify`.",
      },
    },
  },
} as const satisfies AppMessages;
