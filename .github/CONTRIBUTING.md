# コントリビューションガイド

Vue.js 日本ユーザーグループのウェブサイト開発に興味を持っていただき、ありがとうございます。実際に開発に参加いただく前に、以下のガイドラインをご確認ください。

## Issue

公式ウェブサイトのバグ報告、新規コンテンツの要望やご提案など、[当リポジトリのIssue](https://github.com/vuejs-jp/home/issues)をご活用ください。

## Pull Request

全ての新規実装・修正は、個別のブランチを切って作業してください。原則、PRは`develop`ブランチを対象としてください。

## 環境セットアップ

Coming soon...

## プロジェクト構成

Coming soon...

## コーディングガイドライン

コーディングにあたり以下のガイドラインに則って開発を行ってください。原則として、本プロジェクトでは可能な限りスタンダードに沿った形での実装を行います。例えばCSSにおいてはSASSなどのフレームワークではなくPostCSSを採用し、可能な限り純粋なCSSを用います。

なお、効率や可読性のために必要最低限のライブラリ、例えばPostCSSのプラグインなどを採用することも可能です。ただし、どのようなライブラリを使用する場合においても、単に便利になるということ以上に、本当に必要かどうか検討し、コミュニティメンバーと相談してください。

### CSS

本プロジェクトでは、PostCSSを用いてCSSを記述しています。また、以下のPostCSSプラグインを用いています。

- [postcss-nested](https://github.com/postcss/postcss-nested)
- [postcss-css-variables](https://github.com/MadLittleMods/postcss-css-variables)

なお、Nuxt.jsにより、デフォルトでAutoprefixer、Importなどのプラグインもインストールされています。

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

#### グローバルCSS

共通のスタイルについてはグローバルに定義できます。SFC内のClassとの名前衝突を避けるため、グローバルClassは必ず`u-`プリフィックスを付与してください。コーディングルールとして[BEM](http://getbem.com/)を用い、1ファイル、1モジュールで記述してください。

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

#### SFCでのCSS

SFCでは `scoped` CSSを使用してください。また、以下のルールを厳守してください。

- トップレベルのクラス名はコンポーネント名に沿ったCapitalCaseを使用してください。
  - これは親・子のコンポーネントでの不意な衝突を避けるためです。例えば `container` などありふれた名前を利用すると、思わぬところで衝突する可能性があります。
- グローバルCSSと同じくBEMを用いますが、トップレベルクラス名のプリフィックスは省いてください。
  - 名前衝突の問題はSFCのScoped CSSによって解決されているからです。

```vue
<template>
  <div class="TheHeader">
    <div class="container">
      <h1 class="title">さぁ、チャンスはいま。</h1>

      <button class="button button--secondary">もっと詳しく</button>
      <button class="button button--primary">いますぐ申し込む</button>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
@import "@assets/styles/variables";

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

  &--primary {
    background-color: var(--c-primary);
  }

  &--secondary {
    background-color: var(--c-secondary);
  }
}
</style>
```
