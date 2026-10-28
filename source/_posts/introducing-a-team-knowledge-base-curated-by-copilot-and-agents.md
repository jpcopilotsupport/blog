---
title: "Copilot とエージェントが整理・管理する、チームのナレッジ ベース"
date: 2026-10-28 13:45
tags:
  - Copilot in SharePoint
editorial:
  authors:
    - tyamauch1
  type: translation
  version: "5.0.0"
  source_url: https://techcommunity.microsoft.com/blog/spblog/introducing-a-team-knowledge-base-curated-by-copilot-and-agents/4564203
---
※ この記事は、[Introducing a team knowledge base, curated by Copilot and agents](https://techcommunity.microsoft.com/blog/spblog/introducing-a-team-knowledge-base-curated-by-copilot-and-agents/4564203) の抄訳です。最新の情報はリンク先をご確認ください。この記事は Microsoft 365 Copilot および GitHub Copilot を使用して抄訳版の作成が行われています。

人とエージェントがチームとして協力し、より多くの仕事を進めるようになり、コラボレーションのあり方も変わりつつあります。こうしたチームを支えるため、Copilot も進化してきました。先月には、Teams の [Copilot](https://techcommunity.microsoft.com/users/copilot/2890747)、[デジタルなチームメイトとしての Autopilot](https://blogs.microsoft.com/blog/2026/09/25/introducing-the-new-copilot-with-home-code-and-autopilot/)、[チームのコンテンツ ワークフローを管理する Copilot の新しいツール](https://blogs.microsoft.com/blog/2026/09/25/introducing-the-new-copilot-with-home-code-and-autopilot/)を発表しました。

今回は、人とエージェントによるチームのコラボレーションを、さらに一歩進めます。情報が分散し、古くなってしまう問題に対処し、チームメイトであるエージェントがタスクの実行や質問への回答に必要なチームのコンテキストを得られるようにするための取り組みです。Frontier プレビューでは、新たに発表された Copilot アプリ、Teams、SharePoint の Copilot とエージェントが、SharePoint 上にあるチームのナレッジ ベースを作成し、コンテンツを追加し、整理・管理し、参照できるようになります。

<figure>
<div style="position: relative; padding-top: 56.25%;">
<iframe src="https://medius.microsoft.com/Embed/video-nc/abe8f099-790a-4100-b7fe-cf0c33af5702" title="Create Knowledge Base" allowfullscreen="allowfullscreen" allow="fullscreen; picture-in-picture; autoplay 'none'" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" sandbox="allow-scripts allow-same-origin allow-forms"></iframe>
</div>
<figcaption>プレーヤーが読み込まれない場合は、<a href="https://medius.microsoft.com/Embed/video-nc/abe8f099-790a-4100-b7fe-cf0c33af5702">新しいウィンドウで動画を開いてください</a>。</figcaption>
</figure>

ナレッジ ベースは、人とエージェントが力を発揮するために必要なコンテキストを集約し、チームのさまざまなニーズを支えます。先進的なチームと進めている活用例をいくつか紹介します。

- **法務:** メール、ファイル、個人のメモに分散した知識を集め、合意書や契約書を作成する際に、エージェントが関連するコンテキストを参照できるようにします。
- **エンジニアリング:** 技術仕様、利用者のフィードバック、市場調査、製品の履歴をまとめ、コーディング エージェントにプロジェクトのコンテキストを提供するとともに、新しいエンジニアのオンボーディングを支援します。
- **営業:** 顧客に関する知識や取引の履歴を整理し、営業エージェントが適切な次のアクションを提案したり、顧客の概況をすばやく示したりできるようにします。

チーム メンバーは、メール、メッセージ、会議、普段利用している SharePoint サイト内のコンテンツなどを、明示的に追加できます。Copilot は、これらの情報をチームの最新のナレッジ ベースとして整理します。人が読んで理解できるだけでなく、チームと連携するあらゆるエージェントのグラウンディングにも使えます。

## 元のコンテンツを統合された知識へ

ナレッジ ベースの中核は、相互にリンクされた、**エージェントが扱いやすい Markdown ファイル**の専用ライブラリです。Copilot が **Work IQ** に組み込まれたナレッジ コンパイル エンジンを使って作成します。このコンテンツ処理プラットフォームは、チームのコンテンツをエージェントが利用できる知識へと変換し、エージェントのパフォーマンスと結果の改善に役立ちます。初期の社内テストでは、質問への回答やチームのタスク実行に必要なコンテンツを取得する際、ナレッジ ベースを利用すると、エージェントの応答速度が最大 4 倍になり、トークン効率が 30% 向上しました<sup>1</sup>。

![ナレッジ ベースの処理パイプライン](knowledge-base-pipeline.png)

**図 1: ナレッジ ベースのパイプライン**

Work IQ のナレッジ コンパイル エンジンの活用は、人とエージェントによるチームの協働のあり方を変える第一歩になると考えています。研究の進展に伴い、エンジンも改善されます。コンテンツ処理の進歩と、Applied Science 研究チームによる最新のコーパス拡充技術を組み合わせ、企業のコンテンツを活用できる知識に変換する方法を継続的に改善しています。これまでに得られた結果は有望です。たとえば、[最近の論文](https://arxiv.org/pdf/2609.37226)では、複数のドキュメントにまたがる情報を結び付ける必要がある複雑な質問への回答タスクで、エージェントを評価しました。元のドキュメントや他の拡充手法を使う従来のエージェントと比較して、コスト効率と品質の両方に大きな改善が見られました。

![ナレッジ ベースのコーパス マップを使用した場合の検索品質とコストの改善](retrieval-quality-and-cost.png)

**図 2: ナレッジ ベースのコーパス マップを使用した場合の検索品質とコストの改善。**

*注: 結果は合成テスト環境で得られたもので、[公開研究論文](https://arxiv.org/pdf/2609.37226)に掲載されています。*

お客様は毎日数百万ものサイトを作成しており、SharePoint はチームのコンテンツと知識の拠点として重要な役割を担っています。ページ、ファイル、リストを備えた活発なサイトとしても、Teams チャネルや Modern Group を支えるコンテンツ ストアとしても利用されています。ナレッジ ベースを加えることで、SharePoint サイトは単なるコンテンツの提供元から、人、Copilot、エージェントが共に利用・参照できる、チームのコンテキスト レイヤーへと進化します。

## 現在利用できる機能

Frontier プレビューのテナントへの展開が始まっています。Teams チャネルや Microsoft 365 グループを支えるサイトを含め、任意の SharePoint サイトにナレッジ ベースを追加して使い始められます。さらに、Copilot in SharePoint と、Copilot アプリで[新たに発表された Autopilot](https://blogs.microsoft.com/blog/2026/09/25/introducing-the-new-copilot-with-home-code-and-autopilot/)を使って、ナレッジ ベースを作成、整理・管理、利用できます。Autopilot を利用すれば、Teams 内から直接、またはメールから (自分の Autopilot にメールを送ることで)、ナレッジ ベースを利用することもできます。

<figure>
<div style="position: relative; padding-top: 56.25%;">
<iframe src="https://medius.microsoft.com/Embed/video-nc/cc30a3cf-93d0-4062-856d-8ece2ec6ae02" title="Knowledge Base Autopilot" allowfullscreen="allowfullscreen" allow="fullscreen; picture-in-picture; autoplay 'none'" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" sandbox="allow-scripts allow-same-origin allow-forms"></iframe>
</div>
<figcaption>プレーヤーが読み込まれない場合は、<a href="https://medius.microsoft.com/Embed/video-nc/cc30a3cf-93d0-4062-856d-8ece2ec6ae02">新しいウィンドウで動画を開いてください</a>。</figcaption>
</figure>

*注: ナレッジ ベースとそのツールは Frontier のパブリック プレビューで利用できますが、Autopilot との統合には Autopilot へのアクセスが必要です。Autopilot は別のスケジュールで展開されています。*

現在、ナレッジ ベースを利用できるのは、従量課金が有効になっている利用者のみです。管理者は Microsoft 365 管理センターでアクセスと支出を管理できます。[従量課金](https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-manage-copilot-credits)で有効になる AI エクスペリエンスの管理と、組織に合ったポリシーの作成方法については、リンク先を確認してください。ナレッジ ベースの機能は現在プレビュー段階のため、一般提供までに課金条件が変更される可能性があります。

## 今後提供予定の機能

今後のロードマップには、次の項目が含まれます。

- **より多くの仕事の場でナレッジ ベースを利用:** Copilot Cowork (Cowork) や Copilot in Teams のツール、Microsoft Copilot Studio で作成したカスタム エージェントなどが対象です。
- **Microsoft 365 グループとの統合を強化:** 既存の情報源 (チャネル、メール) から、ナレッジ ベースをより簡単に構築できるようにします。
- **継続的な整理・管理を自動化:** Microsoft Copilot Studio のエージェント フローを活用し、組織のコンテンツが変化しても、ナレッジ ベースを最新の状態に保てるようにします。
- **より大規模なコンテンツに対応:** コーパス マップのアプローチを発展させ、より大量のコンテンツを、より高い品質と低いコストで扱えるようにします。
- **Work IQ を介して CLI やコーディング エージェントと統合:** より幅広いエージェントが、ナレッジ ベースにコンテンツを追加し、利用できるようにします。

<figure>
<div style="position: relative; padding-top: 56.25%;">
<iframe src="https://medius.microsoft.com/Embed/video-nc/b24a9c9d-698f-4cd5-8f44-6003d2dcda15" title="Knowledge Base Cowork" allowfullscreen="allowfullscreen" allow="fullscreen; picture-in-picture; autoplay 'none'" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" sandbox="allow-scripts allow-same-origin allow-forms"></iframe>
</div>
<figcaption>プレーヤーが読み込まれない場合は、<a href="https://medius.microsoft.com/Embed/video-nc/b24a9c9d-698f-4cd5-8f44-6003d2dcda15">新しいウィンドウで動画を開いてください</a>。</figcaption>
</figure>

## Copilot エコシステム全体で進む、コンテンツ AI のさらなる革新

コンテンツ AI の戦略では、組織のコンテンツを、人とエージェントが仕事の流れの中で使える知識へと変換することを重視しています。SharePoint のナレッジ ベースを通じて、Microsoft 365 と Copilot のエコシステム全体で、この戦略を形にしていきます。取り組みはこれからも続きます。

コンテンツ AI 分野の最近の更新を、さらにいくつか紹介します。

- **Work IQ の SharePoint ツールを近日提供予定。** [先月](https://aka.ms/CopilotinSP/blog/GA)、Work IQ を通じて、新しい Copilot アプリに SharePoint ツールを提供する予定であることを発表しました。
- **Copilot in SharePoint は一般提供を開始。** 組織のコンテンツが置かれている場所で、Copilot を直接利用できます。AI を使って、コンテンツの理解、作成、整理、コンテンツに対する操作を支援します。詳細は[先月のブログ](https://aka.ms/CopilotinSP/blog/GA)を確認してください。
- **AI を支えるコンテンツを管理する新機能。** Copilot とエージェントは、適切に管理されたコンテンツで最も力を発揮します。
  - [SharePoint Admin Agent](https://learn.microsoft.com/sharepoint/content-governance-agent) は、そのための新機能の中核です。管理者は自然言語を使い、アクセス許可、コンテンツのライフサイクル、ストレージ、設定について、テナント レベルの分析と、ガイドに沿った問題の是正を行えます。地域間のコンテンツ移動の監視も可能です (プレビュー)。
  - [カタログ管理](https://learn.microsoft.com/sharepoint/catalog-management)は、拡大したテナントを、構造化された管理しやすいコンテンツのクラスターに整理します。これにより、管理者はサイトの構成証明、アクセス レビュー、Restricted Content Discovery などの操作を大規模に実施し、組織の働き方により合った展開計画を立てられます。
  - 詳細な[ファイル レベルの EEEU アクセス許可レポート](https://learn.microsoft.com/sharepoint/content-governance-agent)により、対象を絞ったクリーンアップが可能になります。[エージェントのアクセスに関する分析情報](https://learn.microsoft.com/sharepoint/insights-on-agent-access)では、どのエージェントが SharePoint と OneDrive のコンテンツにアクセスしているかを確認でき、Governance Hub はサイト所有者による割り当て済みアクションの実施を支援します。

今回のプレビューは、まだ最初の一歩です。皆さまと一緒に発展させていくことを楽しみにしています。[チームでナレッジ ベースをいち早く活用する方法](https://aka.ms/KB/Support)を確認し、フィードバックを共有して、今後の機能づくりに参加してください。Copilot in SharePoint や Autopilot の製品内からフィードバックを送ることも、[こちら](https://aka.ms/KB/join)から登録して、取り組みにより深く参加する機会を得ることもできます。

**参考情報:**

1. 結果は、2026 年 10 月に実施した Microsoft の社内テストに基づきます。
