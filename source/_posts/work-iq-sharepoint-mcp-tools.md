---
title: "Work IQ の SharePoint MCP ツール: 独自のアプリやエージェントからコンテンツを検索・操作"
date: 2026-11-12 11:24
tags:
  - Work IQ
editorial:
  authors:
    - tyamauch1
  type: translation
  version: "1.0.0"
  source_url: https://devblogs.microsoft.com/microsoft365dev/work-iq-sharepoint-mcp-tools/
---
※ この記事は、[Work IQ: SharePoint Tools](https://devblogs.microsoft.com/microsoft365dev/work-iq-sharepoint-mcp-tools/) の抄訳です。最新の情報はリンク先をご確認ください。この記事は Microsoft 365 Copilot および GitHub Copilot を使用して抄訳版の作成が行われています。

## Work IQ API で独自のアプリやエージェントに SharePoint を組み込む

Work IQ API に新しい SharePoint ツールが加わります。Microsoft Copilot を支えるものと同じ業務のインテリジェンス レイヤーを通じて、独自のアプリやエージェントから SharePoint のコンテンツやアクションを利用できるようになります。Work IQ は AI を組織の知識、人、ワークフローにつなぎ、コンテキスト、メモリ、スキルを組み合わせることで、エージェントが業務を理解して行動できるように支援します。これらの新しいツールを使うと、開発者はファイルの検索、リストやライブラリの管理、承認の処理を行うエージェントを構築できます。いずれも、サインインしている利用者の既存のアクセス許可の範囲内で実行されます。適切な操作とその要件を動的に見つけることで、エージェントは質問に答えるだけでなく、SharePoint のタスクをより確実に完了できるようになります。アクションごとに個別の連携を実装する必要はありません。

## Work IQ の新しい SharePoint MCP ツール

先日[発表した](https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/sharepoint-iq)とおり、SharePoint MCP (現在プレビュー中) は、SharePoint がホストする認証付き MCP エンドポイントを通じて、SharePoint の専門知識を Work IQ に提供します。対象には、リストとライブラリ、リスト アイテム、ファイルとフォルダー、検索、承認、ルール、クイック操作、ごみ箱、バージョン管理が含まれます。カタログには 60 を超える SharePoint の操作が含まれていますが、エージェントがすべての操作を個別のツールとして登録したり公開したりする必要はありません。Work IQ は固定された呼び出し形式の汎用ツールを提供し、必要な SharePoint のパスを実行時に見つけます。基本となる流れは、`search_paths` で対応する操作を探し、`get_schema` で引数を調べ、`do_action` で返されたパスをリクエスト本文とともに呼び出すというものです。この実行時の検出により、エージェントが扱うツールを少数に保ちながら、その背後で利用可能な SharePoint の機能を拡張できます。SharePoint プロバイダーは、登録済みの `sharepoint/` プレフィックス配下のパスを処理します。呼び出しは、サインインしている呼び出し元の SharePoint ID で実行されるため、**エージェントが読み取りや変更を行えるのは、その利用者がすでにアクセスを許可されているものだけです**。サイトを認識する操作では、通常、サイトの URL をそのまま使うのではなく、不透明なキーである `siteKey` を使用します。エージェントは対象サイトに対して `get_site_key` を 1 回呼び出し、返されたキーを変更せずに後続の操作に渡せます。書き込み操作では SharePoint の内部フィールド名を使用するため、表示名が受け付けられると想定せず、スキーマに従ってユーザー、参照、分類の値を解決してください。

**ライブ デモを見る: 「Work IQ: SharePoint MCP tools」**

エージェントとの対話パターンを通じて SharePoint Online のリストを作成する、Work IQ の SharePoint MCP ツールの動作をご覧ください。

<div class="video-container"><iframe loading="lazy" title="Work IQ: SharePoint Tools" src="https://www.youtube.com/embed/9RN7lsKIbc0?si=w4aSCkNG2Usg6Iw3&amp;autoplay=0&amp;controls=1" width="560" height="315" frameborder="0" allow="autoplay 'none'" allowfullscreen="allowfullscreen"></iframe></div>

### エージェントと Work IQ の SharePoint MCP ツールのやり取り

実際の利用では、エージェントはまずサイトのコンテキストを確立し、次に検索やリストの操作を見つけて、目的に合ったドキュメントやコンテンツを探せます。具体的なパスと引数は実際の処理フローによって異なりますが、次は仮のフローです。

```text
1. get_site_key(siteUrl: "https://contoso.sharepoint.com/sites/project")
   → keep the returned siteKey for this site

2. search_paths(...)
   → discover the SharePoint path for the needed operation

3. get_schema(path: "<path returned by search_paths>")
   → inspect the required arguments and their types

4. do_action(
     "<discovered SharePoint path>",
     body: {
       siteKey: "<opaque key from get_site_key>",
       ...arguments shaped by get_schema...
     }
   )
```

エージェントは、`get_schema` が返すスキーマを使って、`do_action` リクエストの `body` を組み立てられます。省略可能なフィールドを推測したり、表示ラベルを内部値に変換したりする必要はありません。Work IQ の汎用ツールの契約では、`items`、`folders`、`viewIds` などの引数が、入れ子のオブジェクトではなく、JSON でエンコードされた文字列として表される場合があります。エージェントは、返されたスキーマに動的かつ正確に従い、サイト キーを発行先のサイトだけで使用できます。

返されるデータは、選択した操作によって異なります。たとえば検索操作では、一致するページ、ファイル、リスト アイテム、その他の SharePoint リソースとともに、後続の呼び出しで使える識別子や URL が返される場合があります。

## Work IQ の SharePoint MCP ツールのセキュリティ モデル

セキュリティは、あらゆるソフトウェア アーキテクチャの基本となる要素です。Work IQ では、アクセス許可をより細かく調整できるように、`WorkIQ.Read` と `WorkIQ.Act` という 2 つの新しいアクセス許可スコープを導入します。Work IQ の SharePoint ツールのプロバイダーは、これらの新しいスコープに対応しています。そのため、エージェントが Work IQ の SharePoint ツールにアクセスするには、`WorkIQ.Read` または `WorkIQ.Act` のいずれかが**必須です**。

`WorkIQ.Read` アクセス許可スコープだけを持つエージェントには、変更を行わない操作に対応する、限定されたトップレベルの Work IQ 操作ツールが提供されます。対象は `fetch`、`call_function`、`get_schema`、`search_paths` です。`WorkIQ.Act` アクセス許可スコープを持つエージェントには、すべてのツールが提供されます。

どちらも委任されたアクセス許可スコープです。Work IQ のセキュリティ モデルに従い、すべての操作は利用者の代理として実行されるため、その利用者がすでに許可されているアクションに限定されます。

## Work IQ でインテリジェントなエージェントを構築する

エージェントがサイトのコンテンツや操作を扱う必要があるときは、SharePoint の操作を検出して実行するフローを試してください。実際に試し、返されるスキーマやデータを確認して、これらの新しいツールがより強力なエージェントの構築にどう役立つかを確かめてみてください。

Work IQ についてさらに知るには、**2026 年 11 月 17 日から 20 日にサンフランシスコで開催される Microsoft Ignite** にご参加ください。[Microsoft Ignite のサイト](https://ignite.microsoft.com/)でイベントの詳細やロードマップの更新を確認し、Work IQ の今後についての質問をお寄せください。

## 参考リンク

関連するリンクを紹介します。

- [**SharePoint Tools for Work IQ | Microsoft Learn**](https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/sharepoint-iq)
- [**Microsoft Ignite の詳細**](https://ignite.microsoft.com/)
