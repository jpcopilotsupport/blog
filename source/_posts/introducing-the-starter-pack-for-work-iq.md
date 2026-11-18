---
title: "Work IQ Starter Pack でデモ環境を準備する"
date: 2026-11-18 17:09
tags:
  - Work IQ
editorial:
  authors:
    - tyamauch1
  type: translation
  version: "1.0.0"
  source_url: https://devblogs.microsoft.com/microsoft365dev/introducing-the-starter-pack-for-work-iq/
---
※ この記事は、[Introducing the Starter Pack for Work IQ](https://devblogs.microsoft.com/microsoft365dev/introducing-the-starter-pack-for-work-iq/) の抄訳です。最新の情報はリンク先をご確認ください。この記事は Microsoft 365 Copilot および GitHub Copilot を使用して抄訳版の作成が行われています。

Copilot のデモを準備したり、実際の業務データを使わずに Copilot と Work IQ を試したりしたことがある方なら、対象テナントにデモやテスト用のコンテンツがないことが大きな課題だとご存じでしょう。要約するメールも、振り返る会議も、エージェントが推論に使うドキュメントや業務記録もありません。

## Work IQ Starter Pack の提供開始

今回、デモまたは開発者テナントに、統一感のある現実的な (ただし完全に架空の) ユーザー、コンテンツ、業務データを用意できるオープンソース プロジェクト、[Work IQ Starter Pack](https://github.com/microsoft/Work-IQ-Starter-Pack) の提供を開始します。これを使えば、何日もかけずに数分で Work IQ を試し始められます。

**動画を見る: 「Introducing the Starter Pack for Work IQ」**

Work IQ Starter Pack の動作を確認できます。

<div class="video-container"><iframe width="560" height="315" title="Introducing the Starter Pack for Work IQ" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; web-share; autoplay 'none'" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/HdAQtYuHz7Q?si=CX4ujoc5C-R8Emot&amp;autoplay=0&amp;controls=1"></iframe></div>

## Work IQ Starter Pack とは

Work IQ Starter Pack は、PowerShell スクリプトをまとめたもので、対象のデモまたは開発者テナントに、デモ ユーザー、コンテンツ、業務データを自動で用意します。Work IQ を調べたり試したりするための一貫したナレッジ ベースを提供し、イベント、顧客、チームを通じて一貫性のあるデモを実施できるようにします。

すべてのコンテンツは、Microsoft がデモ用の架空企業として使用している Caldova Pharmaceuticals を中心に構成されています。Exchange Online、SharePoint Online、Microsoft Teams に加え、Dynamics 365 Sales、Customer Service、Finance and Operations に、Caldova の世界を構築します。メール、Teams の会話、ドキュメント、会議の文字起こし、業務記録が、同じ製品、サプライヤー、顧客、人物を参照する一貫したストーリーになります。

ストーリーの中心となるのは、シナリオ内の役割を担う 5 人のデモ ユーザーです。

| 役割 | ユーザー | 役職 |
|---|---|---|
| マーケティング | Serena Ribeiro | 市場調査アナリスト |
| 財務 | Babak Shammas | 財務照合リード |
| セキュリティ / ガバナンス | Cassandra Dunn | コンプライアンス マネージャー |
| 財務 | Charlotte Waltson | 調達担当バイス プレジデント |
| 営業 | David Power | 営業ディレクター |

必要であれば、この 5 つの役割を既存のユーザーに割り当てることもできます。インストーラーが Microsoft Entra ID でユーザーを検索し、コンテンツ内のデモ名とメール アドレスを既存ユーザーの情報に置き換えます。

以下は、デモ ユーザーのメールボックスに用意される架空のメール スレッドの例です。Caldova の製品の 1 つである ALLER の発売日を前倒しするかどうかを、チームが話し合っています。

![ALLER の発売日を話し合う架空のメールのスクリーンショット](screenshot-emails.webp)

このほか、Microsoft 365 Copilot Chat (Copilot Chat)、Copilot Cowork (Cowork)、Copilot Studio で Work IQ ができることを紹介する、データを利用した 4 つのハンズオン ラボが付属します。詳細は後述します。

## 用意されるデータと選択肢

このパックには、Microsoft 365 と Dynamics 365 のコンテンツを扱うインストーラーとクリーンアップ スクリプトが 1 つずつ含まれています。インストーラーでは、展開するコンテンツ パックとして、Microsoft 365 コンテンツ、Dynamics 365 Sales と Customer Service のコンテンツ、Dynamics 365 Finance and Operations のコンテンツ、またはその組み合わせを選択できます。少なくとも 1 つのパックを選択する必要があります。Dynamics のパックは、Microsoft 365 のコンテンツがなくてもインストールできます。

Microsoft 365 コンテンツ パックでは、PnP PowerShell と Microsoft Graph を使い、Microsoft Teams にチャットや会議の文字起こしを含むチームとチャネルを用意します。また、ユーザーのメールボックスにメールを追加し、SharePoint Online にファイルやアイテムのリストを用意します。

![デモ用の Teams チャットのスクリーンショット](screenshot-teams-chat.webp)

Dynamics 365 Sales と Customer Service のパックは、Caldova Field Engagement のマネージド ソリューションをインストールします。さらに、Dataverse にリード、取引先企業、取引先担当者、価格表、製品、営業案件、見積もり、受注、請求書、ケース、メール、フィールド エンゲージメントを作成し、カスタム Power App も用意します。必要に応じて、Dynamics 365 の取引先企業レコードに関連付けられた SharePoint ドキュメントも展開できます。

Finance and Operations のパックは、既存の Finance and Operations 環境に、デモ用の顧客、リリース済み製品、受注を作成します。他のパックとは独立して選択できます。

![Finance and Operations のデモ用製品のスクリーンショット](screenshot-fo-products.webp)

## すぐに始められる 4 つのハンズオン ラボ

データを用意するだけではありません。Work IQ Starter Pack には、組織のナレッジ、エージェントの連携、エンタープライズ アクション、業務データを Work IQ がどのようにつなげるかを示す、互いに独立した 4 つのラボが含まれています。それぞれにシナリオ、前提条件、ガイド付きの演習、証跡の確認項目があり、どのラボからでも始められます。

### ラボ 1: 組織のインテリジェンスを活用する

Serena Ribeiro が ALLER の発売準備状況をまとめるブリーフを作成します。Copilot Chat と用意されたプロンプトを使い、メール、Teams の会話、ドキュメント、会議の文字起こしをまとめて、情報源に基づくブリーフを作成します。カスタム エージェントは不要で、所要時間は約 15～20 分です。

### ラボ 2: インテリジェントな調査

Babak Shammas が、Cassandra Dunn の確認用に、争点となっているサプライヤーの請求明細を調査します。Copilot Studio でオーケストレーター エージェントを構築し、Work IQ MCP サーバーから証拠を取得します。公開済みで接続された 2 つの専門エージェントを連携させ、エスカレーション用資料のドラフトを作成します。所要時間は 90～120 分です。

### ラボ 3: 分析結果からアクションへ

Charlotte Waltson が、サプライヤーの生産能力を確認するレビューを計画します。Cowork でカスタム スキルを作成し、サプライヤーを調査して、利用者の確認後にレビュー会議を作成します。分析結果をアクションにつなげるラボで、所要時間は約 60～75 分です。

### ラボ 4: 業務データを統合したビュー

David Power が、顧客である Meridian Health Alliance の全体像を把握できるビューを準備します。Copilot Studio で読み取り専用エージェントを構築し、Sales、Customer Service、Field Engagement、Microsoft 365 のコンテキストを組み合わせます。利用可能な場合は、Work IQ Business apps (プレビュー) を使って Finance and Operations のデータも含めます。所要時間は 60～90 分です。

ラボ 1～3 には Microsoft 365 コンテンツ パックだけが必要です。ラボ 4 では Dynamics 365 のコンテンツも必要で、Finance and Operations の内容を扱う場合は同パックも必要です。

## 重要: デモおよび開発者テナント専用

Work IQ Starter Pack は、デモおよび開発者テナント専用に設計されています。**本番テナントでは使用しないでください。**

インストーラーはユーザー、チーム、SharePoint サイトを作成し、ユーザーのメールボックスに直接メールを書き込み、Teams チャネルにチャット メッセージを取り込み、ドキュメントをアップロードします。また、Dynamics 365 に業務データを書き込むこともあります。グローバル管理者アカウントが必要で、デモ ユーザーには Office と Copilot のライセンスが割り当てられます。実際の業務を行う人がいるテナントで、これらの操作を行うべきではありません。

このパックに含まれる人物、組織、製品、ドキュメント、コミュニケーション、業務記録はすべて架空です。実際の業務活動を表すものではなく、医療、金融、規制、商取引に関する意思決定には使用しないでください。

## 試して、フィードバックを共有し、Microsoft Ignite でお会いしましょう

Work IQ Starter Pack はすぐに利用できます。デモまたは開発者テナントを用意し、インストーラーを実行して必要なコンテンツ パックを選び、ラボに取り組んでみてください。さらに、自分のプロンプトを試したり、新しいシナリオを探したり、Caldova Pharmaceuticals のデータを使って対象者に合わせたデモを構築したりできます。

このプロジェクトはオープンソースであり、皆さまからの意見や参加によって改善されていきます。試してみて、うまくいく点や改善が必要な点をお知らせください。GitHub の [Work IQ Starter Pack](https://github.com/microsoft/Work-IQ-Starter-Pack) で Issue を作成したり、アイデアや貢献を共有したりできます。

デモをお楽しみください。
