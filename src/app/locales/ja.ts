export const ja = {
  app: {
    brand: "Vue.js JP",
    subtitle: "リニューアル Hello world",
    nav: {
      home: "ホーム",
      stack: "スタック",
    },
    locale: {
      label: "言語",
      ja: "日本語",
      en: "English",
    },
  },
  home: {
    metaDescription:
      "Vue I18n、Vize、vite-ssg、valibot、TresJS を使った Vue.js Japan リニューアル用の Hello world です。",
    label: "Hello world",
    links: {
      valibot: "valibot を試す",
      stack: "スタック",
    },
    scenePlaceholder: "TresJS",
    greeting: {
      defaultTitle: "Hello world.",
      defaultNote:
        "Vue 3.6、Vue I18n、Vite 8、Vite+、Vize、Vue Router、vite-ssg、valibot、TresJS を組み込んでいます。",
      personalizedTitle: "Hello, {name}.",
      personalizedNote: "Vue Router、valibot、Vue I18n を使った最小フローが動いています。",
      invalidTitle: "Hello world.",
      invalidNote: "ページが反応する前に、query 値を valibot で検証しています。",
      invalidReason: "サポート外の `name` 値は安全に無視されました。",
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
    metaDescription: "Vue.js Japan リニューアル試作の技術メモです。",
    label: "スタック",
    title: "現在の Hello world 構成",
    items: {
      vue: {
        name: "Vue 3.6",
        summary: "UI の中核となるランタイムです。",
      },
      i18n: {
        name: "Vue I18n",
        summary: "日本語と英語の UI 文言を vue-i18n で管理します。",
      },
      typescript: {
        name: "TypeScript 6",
        summary: "`verbatimModuleSyntax` と `noUncheckedIndexedAccess` を含む strict 構成です。",
      },
      vite: {
        name: "Vite 8 + Vite+",
        summary: "アプリ本体は Vite、入口は `vp` に揃えています。",
      },
      vize: {
        name: "Vize",
        summary: "SFC の lint と typecheck を Vize で扱います。",
      },
      lightningCss: {
        name: "Lightning CSS",
        summary: "CSS 変換には Lightning CSS を使います。",
      },
      router: {
        name: "Vue Router + vite-ssg",
        summary: "Routing を明示したまま、SSG で事前描画します。",
      },
      valibot: {
        name: "valibot",
        summary: "route query の入力を境界で検証します。",
      },
      tres: {
        name: "TresJS",
        summary: "Hello world ページに小さな 3D シーンを埋め込んでいます。",
      },
      infra: {
        name: "Terraform + Netlify",
        summary: "Netlify の build 設定は `infra/terraform/netlify` で管理します。",
      },
    },
  },
} as const;

type WidenLocaleMessages<T> = T extends string
  ? string
  : T extends readonly unknown[]
    ? { [K in keyof T]: WidenLocaleMessages<T[K]> }
    : T extends Record<string, unknown>
      ? { [K in keyof T]: WidenLocaleMessages<T[K]> }
      : T;

export type AppMessages = WidenLocaleMessages<typeof ja>;
