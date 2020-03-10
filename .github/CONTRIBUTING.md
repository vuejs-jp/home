# コントリビューションガイド

Vue.js 日本ユーザーグループのウェブサイト開発に興味を持っていただき、ありがとうございます。実際に開発に参加いただく前に、以下のガイドラインをご確認ください。

## Issue レポート

公式ウェブサイトのバグ報告、新規コンテンツの要望やご提案など、[当リポジトリのIssue](https://github.com/vuejs-jp/home/issues)をご活用ください。

## Pull Request

全ての新規実装・修正は、個別のブランチを切って作業してください。原則、PRは`master`ブランチを対象としてください。

## 環境セットアップ

当ウェブサイトは [Nuxt.js](https://nuxtjs.org/) で開発されています。ローカル環境で開発を行うには、以下のステップを踏んでください。

```bash
# 依存パッケージのインストール。
$ yarn install

# 開発用ウェブサーバの起動。
$ yarn dev
```

このあと、http://localhost:3000 にアクセスできます。

### NPM スクリプト

以下のコマンドが用意されています。

```bash
# 開発用ウェブサーバを起動。
$ yarn dev

# eslint、stylelintの実行。
$ yarn lint

# Jestによるユニットテストの実行。
$ yarn test
```

## コーディングガイドライン

コーディングにあたり以下のガイドラインに則って開発を行ってください。原則として、本プロジェクトでは可能な限りスタンダードに沿った形での実装を行います。例えば CSS においては SASS などのフレームワークではなく PostCSS を採用し、可能な限り純粋な CSS を用います。

なお、効率や可読性のために必要最低限のライブラリ、例えば PostCSS のプラグインなどを採用することも可能です。ただし、どのようなライブラリを使用する場合においても、単に便利になるということ以上に、本当に必要かどうか検討し、コミュニティメンバーと相談してください。

### TypeScript & Vue

[Vue.js のスタイルガイド](https://jp.vuejs.org/v2/style-guide/index.html)に従ってコーディングしてください。

### CSS

本プロジェクトでは、PostCSS を用いて CSS を記述しています。また、以下の PostCSS プラグインを用いています。

- [postcss-custom-properties](https://github.com/postcss/postcss-custom-properties)
- [postcss-nested](https://github.com/postcss/postcss-nested)

なお、Nuxt.js により、デフォルトで Autoprefixer、Import などのプラグインもインストールされています。

#### 変数の利用

CSS Variablesを用いて、重要な定義について変数を定義しています。各種ブラウザへの対応のため、変数はRootレベルで定義してください。また、名前の衝突を避けるため、変数の分類に合わせたプリフィックスを用います。

```postcss
:root {
  /**
   * Colors
   * ---------------------------------------------------------------- */

   --c-black: #000000;
   --c-white: #ffffff;
   --c-danger: #ed3c50;

  /**
   * Z Indexes
   * ---------------------------------------------------------------- */

  --z-index-header: 1000;
  --z-index-backdrop: 2000;
  --z-index-modal: 3000;
}
```

#### グローバル CSS

共通のスタイルについてはグローバルに定義できます。SFC 内の Class との名前衝突を避けるため、グローバル Class は必ず `u-` プリフィックスを付与してください。コーディングルールとして [BEM](http://getbem.com/)を用い、1ファイル、1モジュールで記述してください。

```postcss
/* File name: u-card.css */

.u-card {
  border-radius: 8px;
  background-color: var(--c-white);

  &__header {
    padding: 24px;
  }
}
```

#### SFC での CSS

SFCでは `scoped` CSSを使用してください。また、以下のルールを厳守してください。

- トップレベルのクラス名はコンポーネント名に沿った CapitalCase を使用してください。
  - これは親・子のコンポーネントでの不意な衝突を避けるためです。例えば `container` などありふれた名前を利用すると、思わぬところで衝突する可能性があります。
- グローバル CSS と異なり、BEM スタイルは必要ありません。ただし、トップレベル以外のクラス名は全て小文字、ハイフンつなぎとしてください。

```vue
<template>
  <div class="TheHeader">
    <div class="container">
      <h1 class="title">さぁ、チャンスはいま。</h1>

      <button class="button button-secondary">もっと詳しく</button>
      <button class="button button-primary">いますぐ申し込む</button>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
@import "@/assets/styles/variables";

.TheHeader {
  padding: 16px 24px;

  @media (min-width: 768px) {
    padding: 24px 48px;
  }
}

.container {
  margin: 0 auto;
  max-width: 960px;
}

.button {
  border-radius: 4px;
}

.button-primary {
  background-color: var(--c-primary);
}

.button-secondary {
  background-color: var(--c-secondary);
}
</style>
```
