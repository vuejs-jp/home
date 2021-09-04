import type { MetaInfo } from 'vue-meta'

type BasicMetaInfo = {
  title: string
  url: string
  titleTemplate?: string
  description: string
}

export function mergeMeta (basic: BasicMetaInfo, i18nHead: Required<Pick<MetaInfo, 'htmlAttrs' | 'link' | 'meta'>>) {
  const meta: Record<string, any> = {
    title: basic.title,
    htmlAttrs: {
      ...i18nHead.htmlAttrs
    },
    link: [
      ...i18nHead.link
    ],
    meta: [
      { hid: 'description', name: 'description', content: basic.description },
      { hid: 'og:title', property: 'og:title', content: basic.title },
      { hid: 'og:url', property: 'og:url', content: basic.url },
      { hid: 'og:description', property: 'og:description', content: basic.description },
      ...i18nHead.meta
    ]
  }

  if (basic.titleTemplate) {
    meta.titleTemplate = basic.titleTemplate
  }

  return meta
}
