---
title: "SharePoint tools in Work IQ の紹介"
date: 2026-11-11 15:50
tags:
  - Work IQ
editorial:
  authors:
    - tyamauch1
  type: translation
  version: "1.0.0"
  source_url: https://techcommunity.microsoft.com/blog/spblog/introducing-sharepoint-tools-in-work-iq/4569917
---
※ この記事は、[Introducing SharePoint tools in Work IQ](https://techcommunity.microsoft.com/blog/spblog/introducing-sharepoint-tools-in-work-iq/4569917) の抄訳です。最新の情報はリンク先をご確認ください。この記事は Microsoft 365 Copilot および GitHub Copilot を使用して抄訳版の作成が行われています。

## すべてのエージェントに SharePoint の専門知識を、パブリック プレビューで提供開始

**SharePoint tools in Work IQ がパブリック プレビューに入りました**。エージェントが、より高い成功率と少ないトークン数で、より多くの SharePoint の作業を完了できるように支援します。このプレビューでは、Work IQ MCP サーバーを通じて、60 を超える SharePoint ネイティブの操作が追加されます。Work IQ が備える幅広い Microsoft 365 の機能を拡張し、Copilot やエージェントが SharePoint コンテンツを検索、理解、作成、整理、共有できるようにします。

9 月には、[Copilot in SharePoint の一般提供](https://techcommunity.microsoft.com/blog/spblog/sharepoint-ai-innovations-hit-ga-powering-new-copilot-app-and-agents/4555724)を発表しました。**Copilot in SharePoint を支えるものと同じツールを、Work IQ 経由で自分のエージェントからも利用できるようになりました**。これらのツールは Microsoft Copilot Studio にも順次展開されており、ローコード、本格的な開発、作成者向けのさまざまなシナリオに対応します。社内評価では、SharePoint tools in Work IQ の追加によって、Work IQ のタスク合格率が 70.1% から 84.6% に向上し、テストでのトークン使用量は 16% 減少しました。Graph に直接アクセスする場合と比べると、タスクによっては成功率が最大 77% 向上しています。より少ないコストで、より多くの SharePoint の作業を完了できます。

3 月に SharePoint の 25 周年を祝った際、大きなテーマとなったのは、ナレッジを活用することでした。コンテンツをライブラリに置いたままにするのではなく、Copilot やエージェントが仕事に生かすという考え方です。その後、お客様やパートナーとの会話も、さらに変化してきました。エージェントにコンテンツについて質問するだけではなくなっています。管理用のリストを作成する、リストを更新する、ポリシー ライブラリに基づいて回答する、ドキュメント ライブラリ全体から成果物を作成するなど、実際の作業を任せるようになっています。

そこで、シンプルな問いを立てました。**SharePoint の専門知識を、プロンプトではなくツールに持たせたらどうでしょうか?**

![SharePoint のコンテンツの理解、検索、自動化などの機能を、Work IQ 経由で Copilot やエージェントに提供する構成図](sharepoint-tools.png)

## SharePoint tools in Work IQ とは

SharePoint tools in Work IQ は、25 年にわたるコンテンツ管理のノウハウを、エージェント専用の操作にまとめたものです。**Microsoft 365 Copilot とエージェントを支えるインテリジェンス レイヤー**である Work IQ を通じて提供されます。Copilot in SharePoint、Copilot Cowork (Cowork)、Microsoft 365 Copilot Chat (Copilot Chat)、または進化を続けるさまざまな AI 機能を使ったことがあれば、これらのツールが動作する様子をすでに目にしているはずです。同じツールを、**GitHub Copilot CLI、VS Code、自作のエージェントなど、あらゆるエージェントから利用できるようになりました**。

![Copilot エージェントと独自のエージェントが、MCP エンドポイント、ID、ポリシー、使用量計測を担う Work IQ を通じて、SharePoint の理解と操作の AI 機能を利用する構成図](work-iq-sharepoint-architecture.png)

プレビューには、リストとライブラリ、ファイルとフォルダー、検索、承認、ルール、クイック操作、ごみ箱、バージョン管理にわたる、60 を超える SharePoint の操作が含まれます。主なものを紹介します。

- **力任せに処理せず、コンテンツを見つけて理解する。** エージェントはサイトを検索し、ファイルやフォルダーのメタデータを取得して、タスクに必要なものだけをモデルのコンテキストに取り込めます。
- **エンタープライズ規模のリストを扱う。** エージェントはリストとそのスキーマを見つけ、大規模なリストにクエリを実行し (自然言語によるクエリも含む)、アイテムを追加、更新、削除できます。
- **意図を、完成した作業につなげる。** エージェントはリストや列の作成・更新、ビューの定義、列やビューの書式設定を行えます。利用者が得られるのは手順書ではなく、実際に使える管理用のリストです。
- **ガバナンスの下でプロセスを進める。** エージェントは、コンテンツがある場所で、承認、電子署名の要求、クイック操作、共有、バージョン履歴、ごみ箱を扱えます。

## エージェントのための設計

**これらのツールは、汎用 API を薄く包むだけのものではありません**。それぞれに SharePoint の専門知識が組み込まれているため、モデルがすべての操作の実行方法を自力で考える必要はありません。また、「ツールを少なく、パスを多く」という Work IQ の設計原則に従っています。

SharePoint の操作は、何十もの個別のツールとしてコンテキストに読み込まれるのではありません。エージェントがすでに使用している少数の Work IQ の操作ツールを通じて、`/sharepoint/` パスとして公開されます。実行時にエージェントが利用可能なパスを見つけ、そのスキーマを調べて呼び出します。Work IQ は、途中に別のモデルを挟まず、1 回のホップでリクエストを SharePoint にルーティングし、構造化された結果を返します。

この設計は、プラットフォーム機能の提供方法における重要な変化を反映しています。ツールと API では、約束する内容が異なります。API は、決定論的なコードのために、安定した、バージョン管理された契約を開発者に提供します。一方、ツールはエージェント向けに最適化されており、エージェントの動作や評価結果が改善されるにつれて、そのインターフェイスも進化できます。

## 設計段階からのセキュリティ

エージェントがコンテンツを読むだけでなく、操作するようになると、その影響も大きくなります。そのため、**設計段階からセキュリティを組み込んだガバナンス**は、すべての Copilot やエージェントの展開で前提となるものであり、後付けで考えるものではありません。SharePoint tools in Work IQ は、次の 3 層の制御を基盤にしています。

- **すべての呼び出しは、サインインしている利用者として実行されます。** 委任されたアクセス許可を使うため、エージェントが SharePoint で参照・実行できるのは、その利用者にすでに許可されていることだけです。
- **2 つの新しいスコープが、最小特権のアクセスを支援します。** SharePoint コンテンツの検索、読み取り、要約だけが必要な場合は、WorkIQ.Read を付与します。コンテンツの作成、更新、移動が必要な場合は、WorkIQ.Act を追加します。SharePoint tools in Work IQ は、これらのアクセス許可に対応する初めての Work IQ プロバイダーです。
- **管理者が制御を維持します。** 管理者がテナントで Work IQ を有効にし、アプリへの同意を行い、Work IQ のテナント ポリシーを使って、許可する SharePoint のパスとアクションを具体的に選びます。

プレビューに参加するには、エージェントに WorkIQ.Read または WorkIQ.Act を追加します。SharePoint tools in Work IQ は新しいスコープを使用する初めての Work IQ プロバイダーであるため、既存の WorkIQAgent.Ask アクセス許可だけを使用するエージェントには、SharePoint のパスは表示されません。

## 今すぐ始める

テナントの構成から、効果を測定しながら SharePoint tools in Work IQ を展開するまで、次の 4 つのステップで進めます。

1. **テナントを準備する。** 管理者が Work IQ を有効にし、アプリに対して WorkIQ.Read (アクションを実行する場合は WorkIQ.Act も) に同意し、テナント ポリシーで必要な SharePoint アクションを許可します。
2. **エージェントを接続する。** 任意の MCP クライアントの接続先を https://workiq.svc.cloud.microsoft/mcp に設定するか、GitHub Copilot CLI 用の Work IQ プラグインをインストールします。
3. **エージェントに検出と操作を任せる。** エージェントは実行時に SharePoint のパスを見つけ、スキーマを確認して呼び出します。Work IQ スキルが、ツールの選択を支援します。
4. **シナリオの評価結果を測定する。** 展開前に結果を比較し、わかったことをお知らせください。

料金についても、よく質問が寄せられます。SharePoint tools in Work IQ は、Microsoft 365 Copilot のライセンスとは独立して、Copilot Credits を使った従量課金モデルで、Work IQ を通じて課金されます。管理者は Microsoft 365 管理センターで、支払い方法の接続、支出ポリシーの設定、使用量の監視を行えます。最新の詳細は、[Copilot Credits の従量課金とコスト管理](https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-overview-copilot-credits)を参照してください。

### 詳細情報

- [Work IQ MCP の概要](https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/overview)
- [GitHub の Work IQ プラグインとスキル](https://github.com/microsoft/work-iq)
- [SharePoint tools in Work IQ のドキュメント](https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/sharepoint-iq)

## 今後の予定

チームは開発を進めており、**今後も多くの機能を予定しています**。目指している方向性は次のとおりです (いつものように、詳細は変更される可能性があります)。

- SharePoint tools in Work IQ に含まれるツールを、より多く、より速く提供する。
- 一般的な SharePoint のシナリオでエージェントが適切なツールを選べるように、スキルとガイダンスを充実させる。
- MCP クライアントが大きなファイルを移動するための、標準に基づく方法を提供する。MCP コミュニティとともに取り組んでいます。
- SharePoint tools in Work IQ の同じツールセットを、より多くの Copilot やエージェントの機能で利用できるようにする。

この進化し続けるロードマップの詳細は、2026 年 11 月 17 日から 20 日にサンフランシスコで開催される Microsoft Ignite でお伝えします。会場でお会いできることを楽しみにしています。

**SharePoint で実際の仕事をこなすエージェントへ、さらに進んでいきましょう!**
