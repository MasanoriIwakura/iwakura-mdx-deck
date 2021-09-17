# iwakura-mdx-deck

## Introduction

[mdx-deck](https://github.com/jxnblk/mdx-deck) を使用したプレゼンテーションアプリテンプレート

## Getting Started

```sh
yarn start
# open in browser
# http://localhost;8000
```

## Usage

スライドの修正

`index.mdx` を編集することでスライドを更新できる。
構文はMarkdown + JSX

[参考:MDX](https://mdxjs.com/)

### スライドを増やす方法

`---` ハイフン3つで次のページになる

```md
## Test1

---

## Test2
```

### テーマ変更

[参考:Theming](https://github.com/jxnblk/mdx-deck/blob/master/docs/theming.md)

既存テーマを使用する場合
```js
import { themes } from "mdx-deck"

export const theme = themes.dark

## Test1
```
