---
title: "Work IQ の新しい retrieve ツール: 回答の根拠となる業務情報を取得"
date: 2026-10-26 16:36
tags:
  - Work IQ
editorial:
  authors:
    - tyamauch1
  type: translation
  version: "1.0.0"
  source_url: https://devblogs.microsoft.com/microsoft365dev/work-iq-retrieve-october-2026/
---
※ この記事は、[Work IQ: the new retrieve tool](https://devblogs.microsoft.com/microsoft365dev/work-iq-retrieve-october-2026/) の抄訳です。最新の情報はリンク先をご確認ください。この記事は Microsoft 365 Copilot および GitHub Copilot を使用して抄訳版の作成が行われています。

新しい Work IQ Retrieve ツールは、エージェントの推論や回答を業務のコンテキストに基づかせ、適切な情報に基づく推論と、より関連性が高く信頼できる回答を支援します。業務上の情報源を横断する 1 つの取得レイヤーを使うことで、開発者は個別の検索システムを構築せずに、より豊かな組織のコンテキストをエージェントに与えられます。

## Retrieve: 業務上の情報源を横断し、根拠のある回答を支える

`retrieve` という名前の新しい MCP ツールは、メール、ファイル、会議、Teams メッセージ、人物情報に加え、接続された企業内の情報源など、利用者の業務データを検索します。Work IQ が提供するほかのツールと同様に、各利用者が情報を取得できるのは、アクセスを許可された業務上の情報源に限られます。Work IQ で組織の情報を活用する際は、セキュリティとアクセス制御が常に優先されます。

**ライブ デモを見る: 「Work IQ: MCP Retrieve Tool」**

Work IQ Retrieve ツールの動作を対話的に紹介する、短いデモ動画をご覧ください。

<div class="video-container"><iframe width="560" height="315" title="Play" allow="accelerometer; autoplay 'none'; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/mwl4fev1hDI?si=G6xtLFIWMNQh3PI2&amp;autoplay=0&amp;controls=1&amp;playsinline=1"></iframe></div>

この新しい MCP ツールは、[Copilot Retrieval API を発展させ](https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/migrate-retrieval-api)、エージェントが利用するための情報取得を再構成します。エージェント向けに最適化されており、業務のコンテキストに基づいて判断するエージェントの拡大に対応できるよう設計されています。

ツールが返す主な要素は 2 つです。情報源ごとの生の検索結果と、モデルが扱いやすい、インライン引用付きのグラウンディング用 Markdown です。各検索結果には、URL や秘密度ラベルといった構造化メタデータが付いています。回答の根拠には、`markdown` フィールドを使ってください。

これは、文書を順位付けした一覧にとどまりません。レスポンスには、読みやすい根拠情報と、構造化された検索結果のレコードの両方が含まれます。`markdown` は、回答を作成する際に使う、モデル向けのコンテキストです。そのインライン引用 ID は、個々の検索結果に対応します。検索結果のフィールドには、`id`、`resourceId`、`webUrl`、`entityUrl`、`entityType`、`contentProtection`、`resourceMetadata`、`sensitivityLabel` が含まれる場合があります。要約時にも引用を保持し、元の情報源へのリンクや、情報源に応じた処理がアプリケーションで必要な場合は、検索結果のメタデータを使ってください。

情報の取得と、タスクの委任は別々の操作です。現在のエージェントに関連するコンテキストを集めるには `retrieve` を使います。別のエージェントにタスクを委任する場合は、必要に応じて対象のエージェント ID を選び、`ask` または `do_action` を使います。これにより、取得クエリが暗黙のうちに作業の振り分けを行うのではなく、根拠となる情報の探索に集中できます。

### ツールのパラメーターを詳しく見る

このツールは、データの場所について何がわかっているかに応じて選ぶ、`strategy` 設定に対応しています。既定の `copilot` は、幅広く検索する選択肢です。インデックスに登録された Microsoft 365 コンテンツに加え、フェデレーション コネクタ、外部データ ソース、MCP ツールも検索できます。Microsoft 365 のインデックスだけで回答できる要求には、`grounding` を使います。インデックスに登録された SharePoint、OneDrive、Teams、Outlook のコンテンツを検索します。`copilot` と `grounding` 以外の値は拒否されます。

情報源をさらに絞り込む必要があるアプリケーションでは、`capabilities` パラメーターも使えます。宣言型エージェントの機能定義の形式に従った、任意の許可リストを受け取ります。`Email`、`TeamsMessages`、`OneDriveAndSharePoint` などの機能群に取得対象を制限し、対応している場合は機能ごとのスコープ フィールドも指定できます。特定の SharePoint サイト、OneDrive の場所、SharePoint Embedded コンテナー、共有メールボックスや特定のメール フォルダー、単一のフェデレーション コネクタを対象にすることもできます。リストを省略するか、空のリストを渡した場合は、選択したエージェントが利用できるすべての情報源が対象になります。

| パラメーター | 制御する内容 |
|---|---|
| `query` | 必須です。探したいものを自然言語で記述します。空の入力や、空白だけの入力は無効です。 |
| `includeDeveloperCard` | バックエンドからの任意のオーケストレーション診断情報です。エージェントのメタデータ、ツール呼び出しの詳細、取得結果の概要などが含まれます。既定値は `false` です。 |
| `agentId` | カスタム Copilot エージェント (`bizchat-as-gpt-scenario`) を対象にします。ID がリクエストに含まれます。 |
| `strategy` | `copilot` (既定値) は、インデックスに登録された Microsoft 365 コンテンツに加え、フェデレーション コネクタ、外部の情報源、MCP ツールを検索します。場所が不明な場合や、インデックスの外にある可能性がある場合に使います。`grounding` は、インデックスに登録された SharePoint、OneDrive、Teams、Outlook のコンテンツに取得対象を限定します。ほかの値は拒否されます。 |
| `capabilities` | 宣言型エージェントの機能について、機能ごとのスコープを含めて指定できる、任意の許可リストです。`People`、`Meetings`、`OneDriveAndSharePoint`、`Email`、`TeamsMessages`、`Dataverse`、`GraphConnectors` を指定できます。省略するか、空のリストを渡すと、選択したエージェントが利用できるすべての情報源を検索します。既定以外の `agentId` とは併用できません。また、`Dataverse` と `GraphConnectors` は `grounding` と併用できません。 |

### Interactive Demo で試す

[Interactive Demo](https://aka.ms/copilot.dev) を開き、Work IQ の MCP ツールを試してください。業務で扱うさまざまな情報を横断するクエリを使うと、幅広い取得と、インデックスだけを対象にした取得の違いが具体的にわかります。たとえば、次の概念的なリクエストは、幅広く検索する既定の戦略を使い、対象の情報源は選択したエージェントに委ねています。

```json
{
  "query": "Find the latest launch decision, who owns the follow-up, and the meeting or document it came from",
  "strategy": "copilot",
  "includeDeveloperCard": false
}
```

![Interactive Demo で Work IQ の retrieve ツールを選択し、リクエストのパラメーターを設定している画面](interactive-demo-retrieve.webp)

クエリの対象を Microsoft 365 のインデックスに限定するには、`"strategy": "grounding"` を設定します。さらに絞り込むには、機能オブジェクトの JSON 配列として `capabilities` を指定します。たとえば、対応するスコープ フィールドを持つ `Email` 機能を指定できます。機能のリストを既定以外の `agentId` と組み合わせたり、`grounding` 戦略に `Dataverse` や `GraphConnectors` を含めたりしないでください。オーケストレーションをデバッグする際は、`includeDeveloperCard: true` でバックエンドの診断情報を要求し、通常の取得処理では `false` のままにします。

レスポンスでは、`markdown` を回答の根拠にし、そのインライン引用 ID を `retrievalHits` と照合します。ペイロードの名前空間は `application/vnd.ms-workiq.retrieval` です。次の省略した例は、その構造を示しています。実際のレスポンスには、より多くの検索結果や、リソースごとのより豊かなメタデータが含まれる場合があります。

```json
{
  "application/vnd.ms-workiq.retrieval": {
    "markdown": "## Files\n- **Launch decision** [^h1]\n\n## Meetings\n- **Follow-up owner** [^h2]",
    "retrievalHits": [
      {
        "id": "h1",
        "webUrl": "https://example.com/sites/project/decision",
        "entityType": "Files",
        "sensitivityLabel": {}
      },
      {
        "id": "h2",
        "webUrl": "https://example.com/meetings/project/recap",
        "entityType": "Meetings",
        "sensitivityLabel": {}
      }
    ],
    "resultCount": 2,
    "stoppedReason": "completed"
  }
}
```

## Work IQ でインテリジェントなエージェントを構築する

Interactive Demo で、このパターンを試してください。業務上の情報源を横断して、引用付きのコンテキストが必要なエージェントには、`retrieve` を使います。戦略と情報源を意識して選び、返された根拠情報やメタデータを確認しながら、情報源に応じた取得が、自分のエージェントのアーキテクチャにどう生かせるかを試してください。

Work IQ についてさらに知るには、**2026 年 11 月 17 日から 20 日にサンフランシスコで開催される Microsoft Ignite** にご参加ください。[Microsoft Ignite のサイト](https://ignite.microsoft.com/)でイベントの詳細やロードマップの更新を確認し、Work IQ の今後についての質問をお寄せください。

## 関連リンク

役立つリンクを紹介します。

- [Work IQ MCP で retrieve ツールを使う](https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/retrieve)
- [エージェントの情報取得ワークフローを Work IQ MCP に移行する](https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/migrate-retrieval-api)
- [Interactive Demo を試す](https://aka.ms/copilot.dev)
- [Microsoft Ignite の詳細](https://ignite.microsoft.com/)
