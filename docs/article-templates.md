# 記事のひな形とメタデータ

以下の例をコピーし、`source/_posts/<記事スラッグ>.md` として保存します。
この文書は参照用で、ブログの公開用ディレクトリには出力しません。
`scaffolds/post.md` と `scaffolds/draft.md` にも管理項目を設定しています。

## 自作記事

```markdown
---
title: "記事タイトル"
date: 2026-10-23 13:00
tags:
  - Microsoft 365 Copilot
editorial:
  authors:
    - your-github-handle
  type: original
  version: "1.0.0"
---
記事の本文を記載します。
```

## 抄訳記事

```markdown
---
title: "日本語の記事タイトル"
date: 2026-10-23 13:00
tags:
  - Microsoft 365 Copilot
editorial:
  authors:
    - your-github-handle
  type: translation
  version: "1.0.0"
  source_url: https://example.com/original-article/
---
※ この記事は、[Original article title](https://example.com/original-article/) の抄訳です。最新の情報はリンク先をご確認ください。この記事は Microsoft 365 Copilot および GitHub Copilot を使用して抄訳版の作成が行われています。

原文の意味と構造を維持した日本語本文を記載します。
```

## 各項目のルール

| 項目 | ルール |
|---|---|
| `title` | 空でない日本語タイトル。コロンを含む場合は引用符で囲む |
| `date` | 日本語記事の初回公開日時。新規記事は日本時間の `YYYY-MM-DD HH:mm`。原文の日付をコピーしない |
| `tags` | 単一タグは文字列、複数タグは配列。抄訳記事は必須。自作記事では省略・空欄も許容 |
| `lastupdate` | 更新時だけ追加する日本時間の `YYYY-MM-DD`。新規記事には設定しない |
| `editorial.authors` | 必須。実際の執筆・翻訳担当者の GitHub ハンドル。`@` なし、1 人でも配列、重複不可。チーム共通の識別子も使用可能 |
| `editorial.type` | 必須。自作記事は `original`、抄訳記事は `translation` |
| `editorial.version` | 必須。記事のバージョンを引用符付きの `"MAJOR.MINOR.PATCH"` で記録。初版は `"1.0.0"`。先頭ゼロ・接尾辞は使わない |
| `editorial.source_url` | 抄訳記事のみ必須。確認した正規の HTTP(S) URL。本文冒頭の出典リンクと一致させる。自作記事では項目自体を省略 |

`your-github-handle`、タイトル、日時、タグ、出典の例は実際の値に置き換えてください。
複数人で執筆した場合は `authors` の配列に追加します。
担当者が不明な場合は推測せず確認し、Bot や原文の著者を自動的に日本語記事の著者にしません。
既存記事の更新では既存の著者情報を保持し、担当者が明示された場合のみ追加・変更します。

記事のバージョンは、誤字・リンク修正は PATCH、説明追加は MINOR、大幅な内容刷新は MAJOR を
上げる目安とします。レビューコメントの対応だけを理由に機械的に加算せず、公開する改訂単位で
担当者が決めます。記事更新時は `lastupdate` も更新します。形式の検証は行いますが、
内容に応じた加算の妥当性は PR で確認します。
フロントマター形式や製品のバージョンではありません。

レビュー担当者・承認状態はフロントマターに追加せず、PR の履歴で管理します。

## 公開範囲

`editorial` はページ本文、HTML メタ情報、Atom フィード、サイトマップには出力しません。
ただし公開リポジトリの Markdown からは誰でも読めます。
メールアドレス、社内限定情報、秘密情報は記載しないでください。
抄訳記事の本文冒頭の出典リンクは従来どおり読者に公開します。

## 検証

```powershell
npm.cmd run validate:translations -- --all
npm run test:translation-validation
npm run build
```

Windows PowerShell では引数を確実に渡すため `npm.cmd` を使用しています。
他のシェルでは `npm run validate:translations -- --all` を使用できます。

互換性のためコマンド名は従来のままですが、自作記事もメタデータの検証対象です。
PR では変更された記事について検証します。公開終了案内など `source/_posts` 外の
固定ページは記事用メタデータの必須チェック対象外です。
テストでは独立した一時ディレクトリにサイトを生成し、管理情報が公開出力に含まれないことも確認します。
