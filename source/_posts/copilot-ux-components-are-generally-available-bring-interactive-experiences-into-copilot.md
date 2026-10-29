---
title: "Copilot UX components が一般提供に: Copilot に対話型の操作画面を組み込む"
date: 2026-10-29 10:00
tags:
  - Copilot Development
editorial:
  authors:
    - tyamauch1
  type: translation
  version: "1.0.0"
  source_url: https://devblogs.microsoft.com/microsoft365dev/copilot-ux-components-are-generally-available-bring-interactive-experiences-into-copilot/
---
※ この記事は、[Copilot UX components are generally available: bring interactive experiences into Copilot](https://devblogs.microsoft.com/microsoft365dev/copilot-ux-components-are-generally-available-bring-interactive-experiences-into-copilot/) の抄訳です。最新の情報はリンク先をご確認ください。この記事は Microsoft 365 Copilot および GitHub Copilot を使用して抄訳版の作成が行われています。

*Copilot UX components が SharePoint Framework (SPFx) 1.24 で一般提供になりました。対話型のダッシュボード、フォーム、業務操作を、Copilot の会話に直接組み込めます。使い慣れた Web 技術で開発でき、コンポーネントのホスティングは Microsoft 365 が担います。*

![Copilot のエージェント、プラグイン、UX コンポーネント](copilot-agent-plugins-ux-components.webp)

**必要なのは、単なる回答ではありません。その回答をもとに行動するための、わかりやすい手段です。**

Copilot UX components を使うと、組織は、ダッシュボード、フォーム、承認、リアルタイムの業務データなどの**対話型 Web エクスペリエンス**を、**Microsoft Copilot のキャンバスに直接**組み込めます。別のポータルやアプリに利用者を誘導する代わりに、エージェントが、タスクを完了するために必要な情報と操作部品を会話の中に表示できます。

四半期の進捗を尋ねたときに、数値を詳しく調べるためのフィルターを備えた営業ダッシュボードを、会話の中で開けます。休暇申請では、従業員の休暇残日数、希望日、送信ボタンを一緒に表示できます。利用者は詳細を確認し、**依頼のコンテキストを失わずに次のステップへ進めます**。

お客様にとっては、**既存の業務プロセスを、より簡単に見つけて完了できるようにする**機会です。チームは Web 開発のスキル、業務ルール、API を活用して、そうしたプロセスを Copilot に組み込めます。その際も、重要な影響を伴う操作は、人が制御できるようにします。

<div style="position: relative; padding-top: 56.25%;">
<iframe width="560" height="315" title="Real Interactive UI Inside Microsoft Copilot" src="https://www.youtube-nocookie.com/embed/BoPNG32cdoc?feature=oembed&amp;autoplay=0&amp;playsinline=1&amp;controls=1" allow="accelerometer; autoplay 'none'; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe>
</div>

## 長いテキストの羅列から、仕事の完了へ

Microsoft Copilot は、利用者が必要なことを自然言語で表現できるように支援します。ただし、業務タスクを完了するには、文章による回答だけでは足りないこともよくあります。正確なデータ、わかりやすい選択肢、入力の検証、そして変更が行われる前に確認する機会が必要です。

複数のポータルやフォームを案内するテキストの回答だけでは、利用者自身が適切な移動先を見つけ、コンテキストを引き継いで、別の場所でタスクを完了しなければなりません。移動のたびに手間が増え、特に組織全体で使われる日常的なプロセスでは、その負担が大きくなります。

**Copilot UX components は、依頼したその場所に、次のステップを用意します。** エージェントがニーズを特定し、コンポーネントが、**目的に合わせて作られた、すぐに使える操作画面**を表示します。

![テキスト中心の回答と対話型の操作画面の比較](wall-of-text.webp)

## 仕事を進める場所に、対話型の操作画面を

Copilot UX component は、利用者の意図に基づいてエージェントが必要としたときに、Microsoft Copilot のキャンバスに表示される対話型の Web エクスペリエンスです。会話の中で手早く操作するための画面にも、より詳しい作業が必要なタスク向けの広いワークスペースにもできます。**お客様は、固定されたカードにプロセスを合わせるのではなく、プロセスに合わせてインターフェイスを設計できます。**

- **インライン:** 会話の中で、コンテキストに沿って手早く操作する場合に使います。
- **全画面:** ダッシュボード、複数ステップのフォーム、地図、詳細ビューなど、より広い領域が必要な場合に使います。
- エクスペリエンスは開発者が制御できます。各コンポーネントが対応するモードと、それぞれのモードで何を表示するかを決められます。Copilot のライト テーマとダーク テーマに合わせて、コンポーネントを調整することもできます。

どのような React や JavaScript のコンポーネントでも利用できます。グラフ、グリッド、地図、ウィザード、自社のデザイン システム、お気に入りのライブラリなどです。**Web 向けに作れるものなら、Copilot UX components を使って Copilot に組み込めます。**

![インライン表示と全画面表示](inline-full-screen-experiences-new.webp)

## 意図の理解は AI、操作は UX、制御は人

このモデルでは、AI、アプリケーション コード、人の判断、それぞれの強みを分けて活用します。

1. **Copilot が依頼を解釈**し、適切なコンポーネントを表示します。
2. **コンポーネントが提示する**のは、コードと接続先システムで定義された業務データ、選択肢、入力の検証、操作です。
3. レビューと確認のステップは、開発者のコードで定義します。重要な影響を伴う操作では、ソリューションが API を通じて業務システムに変更を送信する前に、**利用者が内容を確認して確定できる**ようにコンポーネントを設計してください。

*Copilot は、適切な進め方を見つけるのを支援します。コンポーネントは、その進め方を実際に使える形にします。制御するのは、引き続き人です。*

<div style="position: relative; padding-top: 56.25%;">
<iframe width="560" height="315" title="Beyond Walls of Text: Interactive UX in Microsoft Copilot" src="https://www.youtube-nocookie.com/embed/3wacPcqFuKw?feature=oembed&amp;autoplay=0&amp;playsinline=1&amp;controls=1" allow="accelerometer; autoplay 'none'; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe>
</div>

## 既存の業務プロセスをモダン化

お客様の多くのプロセスは、すでにポータル、フォーム、ダッシュボード、業務アプリにあります。Copilot UX components は、それらのプロセスの必要な部分を Microsoft Copilot に組み込む方法を提供します。利用者は自然言語で始め、組織のシステムに基づくインターフェイスを使い、キャンバスの中でタスクを完了できます。

日々の仕事のさまざまな場面に、活用の機会があります。

- 業務データ: 営業ダッシュボード、顧客の全体像を把握するビュー、在庫、経費、給与明細。
- 従業員向けサービス: 休暇、ヘルプ デスク、出張予約、オンボーディングのタスク、従業員の表彰。
- 個人向けダッシュボード: 関連ニュース、最新のタスク、1 日の予定の一覧。
- ガバナンスと運用: 管理者が各ステップを確認する、サイトのプロビジョニング、ポリシー チェック、サイト ダッシュボード。

お客様は、これらのプロセスに対するこれまでの投資を捨てる必要はありません。既存の業務ロジック、API、Web 開発のスキルを活用して、従業員が見つけやすく使いやすい、新しい Copilot 内のエクスペリエンスを構築できます。

パートナーは、展開のたびに同じワークフローを作り直すのではなく、繰り返し使える顧客向けのシナリオを、Copilot に対応したパッケージ ソリューションにできます。

これは、ゼロから始める取り組みではありません。**お客様やパートナーが構築した SharePoint Framework ソリューションは、すでに世界中の数万の組織で、毎日数千万人のエンド ユーザーに利用されています。** この世界規模の開発者、パートナー、ソリューションのエコシステムが、Copilot に向けて次の一歩を踏み出せるようになりました。

![業務データや従業員向けサービスなどの活用例](example-business-scenarios.webp)

## 使い慣れた Web 開発のスキルで構築

すでに Web 向けの開発を行っているチームなら、取り組みやすい仕組みです。Copilot UX components は、Model Context Protocol (MCP) Apps モデルと、使い慣れた JavaScript ツールを使用します。

- **業界標準。** コンポーネントは、AI エクスペリエンスで対話型 UI を実現する MCP Apps モデルを実装します。通常必要になるホスティングやルーティングの作業を行わずに、オープンで相互運用可能な基盤を利用できます。
- **使い慣れた Web 技術。** React、TypeScript、標準的な JavaScript ライブラリに対応し、チームが好むフレームワークも利用できます。例の多くでは React を使っていますが、必須ではありません。
- **使い慣れたツール。** スターター テンプレート (Minimal、No framework、React)、npm、好みのエディター、Copilot Workbench を利用できます。Copilot Workbench では、インライン表示と全画面表示、ライト テーマとダーク テーマ、さまざまな入力プロパティを使って、ローカルでデバッグとテストを行えます。
- **1 つのソリューションに複数のコンポーネント。** 1 つの SPFx ソリューションに、エージェントとそのコンポーネントをまとめて含められます。

チームは、すでによく知っている特定のプロセスから始め、既存の Web 開発の専門知識を活用できます。ほかのシナリオへ広げる前に、そのプロセスが Copilot 内でどう機能するかをテストできます。

### エージェントによるコーディングにも対応

コンポーネントは使い慣れた React や JavaScript のプロジェクト構成を使用するため、コーディング アシスタントを使って、ひな形の作成、開発、リファクタリング、トラブルシューティングを行うこともできます。[サンプル](https://aka.ms/spfx/copilot/samples)と[ドキュメント](https://aka.ms/spfx/copilot/docs)を出発点にできますが、エクスペリエンスと、そこで実装する業務上の動作に対する責任は、引き続き開発者が担います。

<div style="position: relative; padding-top: 56.25%;">
<iframe width="560" height="315" title="Announcing the Copilot UX Components Sample Gallery – Explore, Test and Experience" src="https://www.youtube-nocookie.com/embed/nuXGCUpGscU?feature=oembed&amp;autoplay=0&amp;playsinline=1&amp;controls=1" allow="accelerometer; autoplay 'none'; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe>
</div>

## お客様のテナント内に展開

展開モデルは、インターフェイスと同じくらい重要です。顧客向けプロジェクトの進行を遅らせることがある、**ホスティングや ID 管理の追加作業を減らします**。

SPFx は、お客様の Microsoft 365 テナント内に展開するために、エージェントとコンポーネントをパッケージ化します。

- **コンポーネントの自動ホスティング。** ソリューション パッケージを展開すると、プラットフォームがテナント内でコンポーネントの JavaScript と CSS をホストします。チームがコンポーネント用に別の Web サーバーを構築する必要はありません。
- **自動ルーティング。** コンポーネントが Copilot 向けに登録され、それを使うエージェントがテナント内で利用できるようになります。会話の中でコンポーネントが必要になると、Copilot がキャンバスに表示します。エンドポイントを公開したり、接続したりする必要はありません。
- **組み込みのセキュリティとシングル サインオン。** コンポーネントは、組み込みの SSO を通じて、サインイン中の利用者の ID とアクセス許可で動作します。追加のサインイン プロンプトはなく、利用者がすでに持つアクセス許可に従ってアクセスします。
- **使い慣れたガバナンス モデル。** コンポーネントは SPFx の展開・ガバナンス モデルを使用し、外部のコンポーネント ホスティング サービスを別途用意する必要はありません。接続先の業務 API のアクセス許可や同意は、引き続きソリューションの構成の一部として管理します。
- **レビューするインフラストラクチャの要素を削減。** 別のコンポーネント ホスティング サービスや外部に公開するコンポーネントのエンドポイントがないため、チームは、ソリューションと、それが使用する業務 API のレビューに集中できます。

**開発の時間は、別のホスティング層ではなく、お客様に提供するエクスペリエンスに使えます。**

![コンポーネントの自動ホスティングのアーキテクチャ](automatic-hosting-architecture.webp)

### 運用の負担を抑えて MCP Apps モデルを利用

どちらの方法も、対話型 UI に MCP Apps モデルを使用します。外部でホストする MCP App では、チームが Web アプリとエンドポイントをホストし、セキュリティを確保し、運用する必要があります。Copilot UX components では、**SPFx が、お客様のテナント内でコンポーネントのホスティングと登録を処理します。** 運用面の違いを、次の表にまとめます。

| 項目 | **外部でホストする MCP App** | **Copilot UX components** |
|---|---|---|
| **ホスティング** | Azure などのクラウドに Web アプリとエンドポイントを構築・展開し、スケーリングする | お客様の Microsoft 365 テナント内で自動的に実行 |
| **ツールのルーティング** | エンドポイントを公開し、セキュリティを確保し、維持する | コンポーネントの登録とルーティングを自動的に処理 |
| **ID と SSO** | 認証を実装し、維持する | サインイン中の利用者のアクセス許可を使う組み込みの SSO |
| **テナントの承認** | 新しい外部アプリやサービスのレビューと同意が必要 | 既存の SPFx ガバナンスを使用。接続先 API に追加のアクセス許可や同意が必要な場合がある |
| **運用** | パッチ適用、監視、スケーリング、稼働時間の確保を自分たちで担う | 別のコンポーネント ホスティング用インフラストラクチャの運用は不要 |
| **データ** | 要求は外部でホストするサービスを経由する | コンポーネントのアセットは Microsoft 365 でホスト。接続先データ ソースは、引き続きソリューションのアーキテクチャの一部 |
| **複数テナントへの展開** | マルチテナントのインフラストラクチャ、または顧客ごとの展開を運用する | 1 つのパッケージを任意の数のテナントに展開 |

## 1 つのパッケージを複数のテナントで再利用

同じ SPFx ソリューション パッケージを、開発、テスト、本番へと進められます。パートナーは、パッケージ化したソリューションを複数のお客様のテナントに展開することもできます。それぞれのお客様は、自社のガバナンスの下で実行します。

- **開発から本番までのライフサイクルで利用。** 別のホスティング環境を作り直さずに、同じパッケージを開発、テスト、本番のテナントに展開できます。
- **お客様のテナントに展開。** パートナーや ISV は、複数のお客様に向けてソリューションをパッケージ化できます。それぞれの展開は、お客様のテナント内で動作し、そのガバナンスに従います。
- **別のコンポーネント ホスティングを不要に。** SPFx モデルでは、お客様ごとにコンポーネント用の Web サーバーを運用する必要がなくなります。

これにより、実績のある顧客向けシナリオを、個別の実装から**繰り返し提供できるソリューション**へと発展させやすくなります。一般提供では、SharePoint Store で提供される SPFx ソリューションでも、Copilot UX components がサポートされます。

![複数のお客様のテナントへの展開](cross-tenant-support.webp)

## Microsoft 365 全体でエクスペリエンスを再利用

同じ Web コードを、Copilot 以外のエクスペリエンスにも活用できます。お客様のワークフローに合う場合は、SPFx への投資を SharePoint、Teams、Outlook でも利用できます。

- Microsoft Copilot: Copilot UX component として、インラインまたは全画面で表示。
- SharePoint: ページやポータル上の Web パーツとして表示。
- Microsoft Teams: タブとして表示。
- Outlook: 左側のナビゲーションから開くアプリとして、全ページ表示。

お客様は、**既存の Web 開発への投資を再利用**しながら、利用を始める場所を選べます。一般提供によって今すぐ取り組めるのは、Copilot 内のエクスペリエンスです。タスクのきっかけとなった会話の隣に、適切な操作部品を配置できます。

![Copilot、SharePoint、Teams、Outlook での UX の再利用](same-ux-across-surfaces.webp)

## 一般提供時に利用できる機能と今後の予定

**一般提供時に利用できる機能**

- Copilot UX components は、SPFx 1.24 で**世界中で一般提供**されます。
- Copilot で Copilot UX components を利用するには、**利用者に Microsoft Copilot アドオン ライセンスが必要**です。ライセンスがない利用者にはコンポーネントは表示されず、ライセンス要件を説明するメッセージが表示されます。
- **Copilot UX components の利用自体には、従量課金は発生しません。** コンポーネントが Work IQ などの従量課金 API を呼び出す場合、その API の料金が適用される可能性があります。
- 一般提供時の対応クライアント: ブラウザーとデスクトップの Microsoft Copilot。ブラウザーとデスクトップの Microsoft Teams を通じて Copilot を使う場合も、コンポーネントは動作します。
- 一般提供時のパッケージ構成: **宣言型エージェントとその Copilot UX components** を、1 つの SPFx ソリューションにまとめて含めます。すでに SharePoint Store にある SPFx ソリューションでも、Copilot UX components はサポートされます。

**今後の予定**

- Android と iOS の**モバイル対応**。
- 新しい **Copilot プラグイン モデル**で、エージェントとコンポーネントをパッケージ化する機能。組織の構成に応じて、特定のエージェントに切り替えずに、標準の Copilot チャットにコンポーネントを直接表示できるようにします。
- **Copilot Cowork (Cowork)** と、その他の Copilot の利用画面への対応。

## SharePoint Framework 1.24 が一般提供に

SPFx 1.24 では、Copilot UX components を本番環境で利用できるようになり、開発プラットフォームも更新されます。

- **本番環境で利用できる Copilot UX components:** Copilot キャンバスでの予測可能な既定の表示モード、Teams マニフェストのバージョンの自動更新 (コンポーネント更新時のバージョン競合を解消)、ビルド時の宣言型エージェント マニフェストの検証、宣言型エージェント マニフェスト v1.8 を使用した新しいコンポーネントのひな形の作成。
- **React 18:** 新しい SPFx ソリューションは、最初から React 18.x を使用します。
- **Node.js 24** と **Node.js 26:** どちらも SPFx 開発でサポートされます。
- 品質とセキュリティ: プレビューのフィードバックに基づく修正と、npm audit の指摘事項に対応する更新。

1.24 のプレビュー リリースで何かを作成した場合は、一般提供版に更新してください。既存のソリューションを React 18 に移行する場合は、テストを行ってください。一般的なアップグレード方法や、サードパーティ製ライブラリに関する考慮事項は、[React 18 のアップグレード ガイダンス](https://learn.microsoft.com/sharepoint/dev/spfx/react-18-upgrade)を確認してください。すべての詳細は、[SPFx 1.24 のリリース ノート](https://learn.microsoft.com/sharepoint/dev/spfx/release-1.24.0)にあります。

## 今すぐ始める

まずは、そのまま展開できるシナリオ サンプルを、自分のテナントで試してください。サンプルにはソリューション パッケージ、デモ データ、セットアップ手順が含まれます。チームで独自のものを作る前に、Copilot 内で対話型のエクスペリエンスがどのように動作するかを確認できます。

**独自のコンポーネントを作る 4 つのステップ:**

1. SPFx 1.24 をインストールします。

   ```shell
   npm install @microsoft/generator-sharepoint@latest --global
   ```

2. 新しい Copilot UX component のひな形を作成し、Minimal、No framework、React のいずれかのテンプレートを選びます。
3. Copilot Workbench でローカル実行し、テストします。
4. パッケージをテナントに展開し、Copilot に表示します。

最初の Copilot UX component を作成する手順は、[入門チュートリアル](https://learn.microsoft.com/sharepoint/dev/spfx/copilot/get-started/build-your-first-copilot-app)と[動画](https://www.youtube.com/watch?v=1TaK6osdvc0)を確認してください。

<div style="position: relative; padding-top: 56.25%;">
<iframe width="560" height="315" title="Creating your first UX component for Copilot – Tutorial" src="https://www.youtube-nocookie.com/embed/1TaK6osdvc0?feature=oembed&amp;autoplay=0&amp;playsinline=1&amp;controls=1" allow="accelerometer; autoplay 'none'; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe>
</div>

**必要なリソース:**

- 入門: [https://aka.ms/SPFx/Copilot](https://aka.ms/SPFx/Copilot)
- ドキュメント: [https://aka.ms/SPFx/Copilot/docs](https://aka.ms/SPFx/Copilot/docs)
- サンプル ギャラリー: [https://aka.ms/SPFx/Copilot/Samples](https://aka.ms/SPFx/Copilot/Samples)
- 動画: [https://aka.ms/SPFx/Copilot/Videos](https://aka.ms/SPFx/Copilot/videos)
- [SPFx 1.24 のリリース ノート](https://learn.microsoft.com/sharepoint/dev/spfx/release-1.24.0)

## 感謝と今後の展開

サンプルを試し、Issue を報告し、コミュニティ コールやプレビューに参加した皆さま、**ありがとうございます**。皆さまのフィードバックが、今回の一般提供リリースを形作りました。以前の資料では、この機能を SharePoint Copilot Apps や Copilot Components と呼んでいる場合がありますが、現在の名称は Copilot UX components です。

**一般提供リリースは出発点です。** モバイル対応、新しいプラグイン モデル、Cowork、その他の Copilot の利用画面への対応を、今後の取り組みとして予定しています。2026 年 12 月または 2027 年 1 月に予定されている SPFx 1.25 でも、**皆さまのフィードバックや意見**に基づく後続リリースを通じて、このモデルを進化させていきます。新しいビルドで問題が発生した場合は、[aka.ms/spfx/issues](https://aka.ms/spfx/issues) に報告してください。エンジニアリング チームが、できるだけ早く支援できるようにするためです。

[aka.ms/community/calls](https://aka.ms/community/calls) のコミュニティ コールに参加し、[LinkedIn](https://www.linkedin.com/showcase/microsoft365dev) と [X](https://x.com/microsoft365dev) で最新の情報を確認してください。

**どこから始めればよいでしょうか。** 利用者がすでに Copilot に尋ねているものの、完了するには別のポータルやアプリに移動しているタスクを、1 つ選んでください。休暇申請、経費の承認、営業の数値の簡単な確認などです。それを最初の Copilot UX component にしましょう。会話の中にデータと操作を用意し、内容を確認して確定できるようにします。長いテキストの羅列から、仕事の完了へ。🤩

コーディングを楽しんでください! 🧡
