---
title: "Copilot Managed Runtime が一般提供に: 新たなプレビュー機能も追加"
date: 2026-11-19 13:52
tags:
  - Copilot Development
editorial:
  authors:
    - tyamauch1
  type: translation
  version: "1.0.0"
  source_url: https://techcommunity.microsoft.com/blog/copilot-managed-runtime-blog/copilot-managed-runtime-is-now-generally-available-with-additional-new-preview-f/4571846
---
※ この記事は、[Copilot Managed Runtime is now generally available, with additional new preview features](https://techcommunity.microsoft.com/blog/copilot-managed-runtime-blog/copilot-managed-runtime-is-now-generally-available-with-additional-new-preview-f/4571846) の抄訳です。最新の情報はリンク先をご確認ください。この記事は Microsoft 365 Copilot および GitHub Copilot を使用して抄訳版の作成が行われています。

AI により、Copilot Cowork (Cowork)、Copilot Code、Copilot Studio、そして普段使っている開発ツールで、アイデアを実際に動くアプリにしやすくなっています。ただし、それらのアプリを業務で運用するには、引き続きセキュリティ、ガバナンス、継続的な運用が必要です。こうした要件をまとめて満たすため、9 月に Microsoft Copilot Managed Runtime をパブリック プレビューとして発表しました。

本日の Microsoft Ignite で、Microsoft Copilot Managed Runtime の一般提供と、テナントへの展開開始を発表しました。Copilot Managed Runtime は、Microsoft が運用するホスティングに、ID、ガバナンスに沿ったデータ アクセス、アプリのライフサイクル管理を組み合わせます。チームが作成したアプリを、企業の業務に利用でき、IT 部門も信頼できる管理されたアプリにするための基盤を提供します。

<div style="position: relative; padding-top: 56.25%;">
<iframe src="https://medius.microsoft.com/Embed/video-nc/ed46d25a-8c6b-4237-9f10-7a16c8b4bbc6?r=1071188016137&amp;autoplay=0&amp;mute=1" title="CMR Build Anywhere" allowfullscreen="allowfullscreen" allow="autoplay 'none'; fullscreen" frameborder="0" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" sandbox="allow-scripts allow-same-origin allow-forms"></iframe>
</div>

## チームに合ったツールで作成

作成者は、Copilot Code、Cowork、Copilot Studio、GitHub Copilot、VS Code、サードパーティの開発プラットフォームやツールから始められます。Copilot Managed Runtime は、どの方法で作成した場合でも、公開したアプリに Microsoft が管理するホスティングと実行環境を提供します。チームは作成方法を選べるようになり、製品をまたいだ共同作業の機会も広がります。公開したアプリは、共通の運用基盤にまとめられます。

> 「AI エージェントは、企業のチームが必要とする Web アプリの多くを作成できるようになりました。多くの組織は、そうしたアプリを自分たちの環境で実行したいと考えています。Copilot Managed Runtime を使うと、Manus で作成したアプリは組織自身の Microsoft 環境で実行され、既存のセキュリティ ポリシーとコンプライアンス ポリシーを自動的に引き継ぎます。チームは、企業向けの制御を維持しながら、AI エージェントの能力とスピードを活用できます。」
>
> **Tao Zhang、Manus 共同創業者兼最高製品責任者**

プラットフォームは Microsoft が運用し、ホスティング、スケーリング、可用性も管理します。クラウド サービスを構成する必要がないため、チームはアプリと、そのアプリで行う業務に集中できます。Microsoft Entra のサインインと共有により、同僚にアプリを届けやすくなります。ガバナンスに沿った接続により、アプリは IT 部門が定めた範囲内で、必要な組織のデータやサービスにアクセスできます。プラットフォームに備わるガバナンスの制御により、IT 部門は、自らの方針のもとで開発と運用を分散させ、規模を拡大できます。

Copilot でもサードパーティのツールでも、どこから始めたかに関係なく、コードは編集可能な状態に保たれ、Git で管理されます。作成者は、公開済みのアプリの稼働を維持したまま改善を続け、準備ができた段階で変更を公開版に反映できます。GitHub Enterprise を利用する組織は、自分たちのリポジトリを接続できます。アプリにも、ほかのソフトウェアと同じブランチ、レビュー、リリースの手順を適用できます。

<div style="position: relative; padding-top: 56.25%;">
<iframe src="https://medius.microsoft.com/Embed/video-nc/e24fb5e0-b370-473b-b7a2-8847f356fdf0?r=696689451538&amp;autoplay=0&amp;mute=1" title="CMR Architecture" allowfullscreen="allowfullscreen" allow="autoplay 'none'; fullscreen" frameborder="0" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" sandbox="allow-scripts allow-same-origin allow-forms"></iframe>
</div>

## IT 部門がすべてのアプリを 1 か所で確認・管理

Copilot Managed Runtime 上のアプリでは、Microsoft Entra の ID、共有、アクセスとともに、ポリシーの適用と監査ログを利用できます。コネクタ、データ、エンドポイントへのアクセスは、組織のポリシーで管理されます。これらの機能は、アプリの運用要件を管理基盤に組み込みます。作成者と IT 部門は、同じ制約のもとで作業できます。

Microsoft 365 管理センターのアプリ インベントリと監視機能により、管理者はチームが公開したアプリを一元的に確認できます。IT 部門は、作成に使ったツールごとにインベントリを整理しなくても、さまざまなツールで作成されたアプリを把握できます。作成者は作成方法を柔軟に選べる一方、管理者は共通の場所でアプリを確認・管理できます。

## アプリ固有の業務レコードを保存

ここからはプレビュー機能を紹介します。アプリによっては、チームのローンチ管理に使う担当者、日付、ステータスの更新など、アプリ固有のデータを保存する必要もあります。Microsoft Fabric 統合の新しい Frontier パブリック プレビューでは、こうした業務レコードに対し、すぐに使える永続的なアプリ ストレージとバックエンド機能の選択肢が加わります。これは、既存の SharePoint や Dataverse との接続に追加されるものです。チームは、Copilot Managed Runtime が提供するホスティングと実行環境に加え、アプリで必要になったときにこのデータ層を選べます。

![Copilot Managed Runtime のデータ ストレージの選択肢となる Fabric](fabric-storage.png)

## エージェントと、さらに多様な成果物にも対応

#### Copilot Studio のエージェントとワークフローをローカルで作成

現在パブリック プレビューの Copilot Managed Runtime 開発ツールでは、カスタムの Copilot Studio エージェントとワークフローをローカルで作成し、好みの開発ツールで変更してから、CLI を使って Copilot Studio に公開できるようになります。これにより、Copilot Studio の作成者や開発者は、ブラウザーの画面を使うメンバーや、自分のマシンでローカルに作業するメンバーと共同作業を進めやすくなります。

開発者は、使い慣れた開発ツールを使い続け、自分のマシンから直接変更をプッシュできます。GitHub などの既存のバージョン管理プラットフォームと統合された、単一の正となるソースを共有して作業できます。Qualcomm のような組織では、この方法によって、使い慣れた開発ワークフローと、エージェントを作成・管理する新しい方法が結び付きます。

> 「CLI に期待しているのは、Copilot Studio にコード ファーストの開発を取り入れられることです。Qualcomm の利用者やエンジニアにとって、CLI とコーディング エージェントの組み合わせは、エージェントをすばやく自然な方法で作成・テストする手段になります。同時に、より成熟した ALM の実践を支え、Copilot Studio の UI を使った体験を補完します。これらの方法を組み合わせることで、チームは自分たちに最も合った方法でエージェントを作成・管理する柔軟性を得られます。」
>
> **Paulo Joaquim、IT Architect, Principal、Qualcomm Incorporated**

CLI を使い始めるには、[https://aka.ms/msagent-cli](https://aka.ms/msagent-cli) を参照してください。

#### コードでカスタム エージェントを作成

コードで直接エージェントを作成したい作成者や開発者に向けて、Code Agents の早期アクセス プレビューを紹介します。利用には申し込みと承認が必要です。近日提供予定のこのカスタム エージェントは、Copilot Managed Runtime 上で作成・ホストされます。プレビューでサポートされる範囲内で、モデル、オーケストレーター、ハーネスを選べます。チームは既存の AI スタック、開発ツール、ワークフローを再利用できます。一方、Microsoft はホスティング、Microsoft Entra の ID、チャネル、監視、ライフサイクル管理を提供します。お客様とパートナーは、[aka.ms/cmrcodeagents-signup](https://aka.ms/cmrcodeagents-signup) から申し込めます。

## アイデアから展示会場へ

イベント チームが Cowork で展示会場の運営アプリを作成する場面を考えてみましょう。この例では、対話型の 3D マップに、ブースの準備状況や未対応の支援依頼が表示されます。チームはアプリをレビューし、同僚向けに公開します。Microsoft Entra の ID によるアクセス、ガバナンスに沿った接続、IT 部門の制御、ホスティングは、すべて Copilot Managed Runtime を通じて提供されます。

チームは、アプリのレコードを保存するため、新しい Fabric 統合を選びます。開発者は、同僚が公開済みアプリを使い続けている間に、Git でコードをローカルに複製し、好みのツールで改善できます。

エージェントのプロジェクトでは、開発者は Copilot Studio のエージェント定義をローカルで編集し、変更をソース管理に保持できます。更新したプロジェクトを Copilot Studio にプッシュして戻すことで、エージェントと関連するワークフローをまとめて管理できます。

こうした方法により、チームがソリューションを作成、公開、保守する際に、Copilot Code、Cowork、Copilot Studio、サードパーティのツールをまたいだ共同作業が可能になります。

<div style="position: relative; padding-top: 56.25%;">
<iframe src="https://medius.microsoft.com/Embed/video-nc/0678b5de-ee3a-42d3-a6cc-4dc832d5b869?r=1028370705065&amp;autoplay=0&amp;mute=1" title="App Example" allowfullscreen="allowfullscreen" allow="autoplay 'none'; fullscreen" frameborder="0" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" sandbox="allow-scripts allow-same-origin allow-forms"></iframe>
</div>

## チームが今必要とする成果物から始める

チームで改善したい業務プロセスから始めてみましょう。その成果物を誰が使うのか、どのような情報が必要か、チームでどう保守するのかを考えます。業務に合った作成環境を選び、Copilot Managed Runtime を使って成果を同僚に届けましょう。時間をかけて、より連携したソリューションを作っていくための基盤にもなります。

すでに作成したアプリを、企業の業務で使いたいと考えていますか。Copilot Managed Runtime を利用し、まずは Copilot Managed Runtime CLI を確認してください: [https://aka.ms/cmrrepo](https://aka.ms/cmrrepo)

一般提供により、Copilot Managed Runtime は、チームが業務に活用するアプリの基盤となります。新しいプレビューでは、ローカルでのエージェント開発と、アプリ固有のデータを扱う選択肢が広がります。これらにより、作成者は便利なツールを作成する方法を増やし、これまで以上に共同作業を進められます。同時に、企業のアプリとエージェントの運用に、セキュリティとガバナンスを維持できます。
