---
title: "Microsoft Copilot の新機能: 2026 年 10 月"
date: 2026-11-02 14:03
tags:
  - Microsoft Copilot
cover: image-00.png
cover_alt: "What's New in Copilot"
editorial:
  authors:
    - tyamauch1
  type: translation
  version: "3.0.0"
  source_url: https://techcommunity.microsoft.com/blog/microsoft-copilot-blog/what%e2%80%99s-new-in-microsoft-copilot--october-2026/4568528
---
※ この記事は、[What’s New in Microsoft Copilot | October 2026](https://techcommunity.microsoft.com/blog/microsoft-copilot-blog/what%e2%80%99s-new-in-microsoft-copilot--october-2026/4568528) の抄訳です。最新の情報はリンク先をご確認ください。この記事は Microsoft 365 Copilot および GitHub Copilot を使用して抄訳版の作成が行われています。

Microsoft Copilot の新機能、2026 年 10 月版をお届けします。毎月、新機能や機能強化を取り上げ、Microsoft 365 を利用するお客様に Copilot の最新情報を紹介しています。日々使うアプリで、利用者の皆さまがより生産的かつ効率的に働くために役立つ機能です。

今月の新機能を詳しく見ていきましょう。

**利用者向けの機能:**

- [Copilot のホーム ナビゲーション、プロジェクト、Workspaces、Autopilot の更新](#home)
- [Copilot Cowork (Cowork) の役割別プラグイン、Outlook と Planner の機能強化、タスク カタログ](#cowork)
- [Copilot Workspaces のファイル編集、音声の更新、参照できるコンテンツの拡充](#workspaces)
- [Copilot in OneDrive のプロンプト ギャラリー](#onedrive)
- [SharePoint のナレッジ ベース](#sharepoint)
- [Copilot in Excel の会計スキル、データ クレンジング スキル、対話型キャンバス](#excel)
- [Copilot in PowerPoint のモデル更新、ブランド キットの改善、スキル](#powerpoint)
- [Copilot in Word の法務プラグインと文書の種類に応じたデザイン](#word)
- [Copilot in Microsoft Edge のエクスペリエンスの更新](#edge)
- [Copilot in Teams のインテリジェント リキャップと Queues アプリの更新](#teams)
- [Copilot の新しいライフ サイエンス向けコネクタ](#connectors)
- [政府機関向けクラウドの Copilot 編集機能](#government)

**IT 管理者向けの機能:**

- [Insights Agent と Workforce Insights Agent](#insights)
- [Microsoft Purview Data Loss Prevention の保持設定と Microsoft Cowork への拡張](#purview)

## 利用者向けの機能

<a id="home"></a>

### Copilot にアクセスし、仕事を整理して進めるための新しい方法

**ホーム**は、Copilot アプリで仕事を始める場所です。今回、**Chat と Cowork が 1 か所にまとまり**、新しい**共通のナビゲーション ウィンドウ**も加わります。Chat と Cowork は、仕事を進めるための 2 つの方法を提供します。Microsoft Copilot Chat (Copilot Chat) では、質問への回答、アイデアの検討、操作の実行、下書きの作成ができます。一方、Cowork には、複雑で複数のステップからなるタスクを任せられます。共通のナビゲーション ウィンドウは、次のような新しい構成になります。

- **プラグイン**: エージェント、スキル、コネクタを 1 か所で見つけて利用できます。
- **自動化**: スケジュールに従って、または指定したイベントの発生時に Cowork のタスクを実行します。手動でプロンプトを入力しなくても、定型業務を進められます。
- **Workspaces**: Copilot アプリ内で、継続的な業務を Copilot と一緒に進めるための、チームの共有スペースです。
- **プロジェクト**: 関連するタスク、指示、コンテキストをまとめます。
- **Chat と Cowork の会話履歴**: 両方の履歴をまとめ、検索とフィルターですばやく目的のスレッドに戻れます。

この更新は 10 月に Frontier への展開が進められており、11 月に全世界へ展開されます。

![Chat が選択された Copilot アプリのホーム画面](image-01.jpg)

**プロジェクト**は、関連するチャット、タスク、指示、コンテキストをまとめる専用のスペースです。毎回コンテキストを組み立て直さずに、仕事を再開できます。プロジェクト全体に適用する指示を設定したり、ファイル、会議、チャット、タスクを共通のコンテキストとして追加したりできます。また、プロジェクトのタスクが作成したファイルには、集約された [Outputs] ビューからアクセスできます。各プロジェクトのテーマを絞りながら、継続的な仕事のコンテキストと一貫性を維持できます。詳しくは、[プロジェクトの使い方](https://learn.microsoft.com/copilot/cowork/cowork-projects)をご覧ください。この機能は 10 月に Cowork に展開され、11 月に Copilot Chat への展開が進められます。

![Cowork が選択され、プロジェクトの一覧が表示された Copilot アプリ](image-02.png)

**Autopilot は、クラウドで常時稼働する個人用エージェント**です。利用者がすべての手順を指示しなくても、仕事を引き受けて進めます。利用者が目標を与えることで、Autopilot の役割を定められます。継続して保持されるコンテキストとメモリにより、Microsoft 365 全体で利用者の優先事項に沿って動けます。Autopilot は独自のアカウント、メールボックス、ファイルを持ち、仕事を進められます。有効にした場合はチーム メンバーと協働でき、利用者が普段使う Microsoft 365 のエクスペリエンスからアクセスできます。また、利用者のローカル ファイルと、Autopilot 自身のリモート コンピューターの両方で作業できます。アクセス制御、承認のガードレール、対応する情報保護・コンプライアンス機能により、機密情報を保護し、重要な影響を伴う操作を人が制御できるようにします。Agent 365 を使うと、組織は Autopilot の利用者を把握し、アクセスを管理・統制し、リスクを評価し、導入を進めるための事業価値を測定できます。Autopilot は 11 月に Frontier への展開が進められます。

![Copilot アプリの Autopilot の開始画面](image-03.png)

Word、Excel、PowerPoint の Copilot は、**デザインが刷新**されます。Copilot アプリのデザインにそろえ、一貫した利用体験を提供します。チャットと回答のレイアウトがシンプルになり、ナビゲーションも改善されます。この機能は 10 月に展開されました。

![Excel アプリ内の Copilot の新しいデザイン](image-04.png)

スキルは、ノウハウを Copilot が自動的に適用できる再利用可能な機能に変えます。作業の高速化、結果の一貫性の向上、チーム内での知識共有のしやすさにつながります。**これまで Cowork で利用できたスキルが Copilot Chat にも拡張**され、日々の仕事の流れの中で、再利用可能な専門知識を直接活用できるようになります。利用者は、Copilot Chat で自然言語を使って独自のスキルを作成し、[Plugins] セクションで同僚や組織が共有したスキルを見つけ、ワークフローの中でいつ、どのようにスキルを使うかを選べます。再利用できる指示や専門知識を蓄積することで、チームは Copilot の各エクスペリエンスに一貫した手法を広げられます。この機能は 11 月に展開されます。

![チャットの指示をスキルとして保存するよう Copilot が提案している画面](image-05.png)

<a id="cowork"></a>

### Copilot Cowork の役割別プラグイン、Outlook と Planner の機能強化、タスク カタログ

**Cowork の役割別プラグイン**は、営業、サービス、教育、法務、財務の一般的な業務プロセスに対応した、あらかじめ用意されたスキルを提供します。[Roles & Industry] からアクセスでき、会議の準備、案件のトリアージ、認定審査に必要な証拠資料、プレイブックに照らした契約レビューなどのシナリオに合わせたスキルを利用できます。空のプロンプトから始めるのではなく、定義済みのワークフローで、専門性のある反復的な仕事にすばやく着手できます。詳しくは、[Copilot Cowork で利用可能なプラグイン](https://learn.microsoft.com/microsoft-365/copilot/cowork/cowork-available-plugins)をご覧ください。この機能は 10 月に展開されました。

![Cowork プラグインの Roles & Industry の選択肢](image-06.png)

**Cowork の OneNote と Planner の機能**により、利用者のノート、決定事項、タスク、計画を、Cowork が作業に使うコンテキストに取り込めます。OneNote プラグインを使って、ノートブックの読み取りと更新ができるようになりました。Planner の機能では、自然言語でプラン、バケット、目標、タスクを表示・作成・更新し、そのコンテキストを使って Microsoft 365 全体で関連する仕事を進められます。1 つの会話の中で、仕事の記録や計画から実行へと移れます。進捗は、利用者の承認を得て OneNote と Planner に書き戻されます。これらの機能は [10 月に Frontier に展開され、11 月に全世界への展開が進められます](https://www.microsoft.com/microsoft-365/roadmap?id=567315)。

![Planner のタスクをコンテキストに使い、同じ会話で成果物を作成する Cowork](image-07.png)

**Cowork のタスク カタログ**に、営業、マーケティング、カスタマー サービス、財務の一般的なシナリオ向けのタスク候補が加わりました。利用者はタスクを選び、必要な情報を入力し、Cowork に完了を任せられます。依頼を毎回ゼロから組み立てずに、役割に応じた一般的な仕事を始められます。この機能は 10 月に展開されました。

Cowork では、新しい依頼で**過去の Copilot Chat の会話や Cowork のタスクを参照**できます。コンテキストを設定し直さずに、以前の仕事を土台にできます。ファイルや会議を参照するのと同じように、プロンプトにチャットやタスクをコンテキストとして追加し、過去の決定事項や成果物を新しいタスクに取り込めます。Chat での最初の検討から、より複雑な Cowork のタスクに移ったり、あるタスクの結果を別のタスクの出発点にしたりできます。この機能は 10 月に展開されました。

![過去のチャットを参照する Copilot Cowork のプロンプト](image-08.png)

<a id="workspaces"></a>

### Copilot Workspaces のファイル編集、音声の更新、参照できるコンテンツの拡充

**Copilot Workspaces** は、Copilot アプリ内で、チームが Copilot と一緒に仕事をするための共有スペースです。Copilot Notebooks の進化形として、コンテキスト、チーム メンバー、作業用ファイルをまとめ、継続的な業務の成果物を作成・改善し、仕事を前に進められます。既存のノートブックはワークスペースになり、チームでの共同作業に合わせてエクスペリエンスが更新されます。チームで複数の文書を同時に共同編集し、ライブ カーソルでほかのメンバーの作業状況を確認できます。この変更は 10 月に Frontier に展開されました。

![Copilot Workspaces の文書に表示されたチーム メンバーのライブ カーソル](image-09.png)

**Copilot Workspaces で、Word、Excel、PowerPoint のファイルを直接作成・編集し、共同作業ができる**ようになりました。チャットで Copilot に Office ファイルの作成や編集を依頼し、ノートブックを離れずに Office の機能でファイルを直接操作できます。Copilot との作業から Office ファイルの推敲や共同編集に移る際も、コンテンツとワークフローを 1 か所に保てます。この機能は 10 月に Frontier に展開され、1 月に全世界へ展開されます。

![ワークスペース内で PowerPoint ファイルを直接編集し、共同作業する画面](image-10.png)

**Copilot Workspace の音声概要**に、トピック別のエピソード、秘密度ラベルへの対応、対応するコンテンツの種類の拡充が加わります。長い概要をトピック別のエピソードに分割でき、OneDrive に保存した音声概要は、参照元の秘密度ラベルを引き継ぐようになりました。また、Outlook のメール、Teams の会議やチャット、OneNote と Loop のページ、プレーン テキスト (.txt) ファイルなど、より多くの種類の参照情報を使って推論できます。さらに、「Critique and Debate」などの新しい音声形式も利用できます。この機能は 10 月に Frontier に展開され、11 月に全世界へ展開されます。

![トピック別のエピソードに分割された音声概要](image-11.png)

**Copilot Workspace で、より多くのファイル形式を参照情報として利用できる**ようになりました。JPG、PNG、CSV、TSV などに対応しています。従来の文書に加え、画像、構造化されたリスト、表を、Copilot が回答の根拠に使うコンテキストとしてワークスペースに追加できます。このコンテキストにより、Copilot はより関連性の高いプレゼンテーション、レポート、要約資料を作成できます。この機能は 10 月に展開されました。

<a id="onedrive"></a>

### Copilot in OneDrive のプロンプト ギャラリー

**Copilot in OneDrive の新しいプロンプト ギャラリー**では、ファイルに関する一般的な作業向けに、すぐ使えるプロンプトを利用できます。OneDrive の右下にある Copilot ボタンを選び、[Open Prompt Gallery] を選択すると、[Create]、[Analyze]、[Find]、[Collaborate] などのカテゴリ別にプロンプトを探せます。Copilot で何ができるかを見つけ、より早くその価値を活用するのに役立ちます。この機能は [10 月に展開されました](https://www.microsoft.com/microsoft-365/roadmap?id=571308)。

![Create カテゴリを選択した Copilot in OneDrive のプロンプト ギャラリー](image-12.jpg)

<a id="sharepoint"></a>

### SharePoint のナレッジ ベース

**SharePoint のナレッジ ベース**は、Microsoft 365 全体の情報を、人、Copilot、エージェントが使える共有知識に変えるのに役立ちます。メール、メッセージ、会議、SharePoint のコンテンツから情報を集め、アクセスしやすく最新のナレッジ ベースを作成します。組織の知識を人が見つけやすくなり、Copilot とエージェントも仕事に関連するコンテキストを利用できます。詳しくは、[Copilot とエージェントが整理・管理する、チームのナレッジ ベース](/blog/introducing-a-team-knowledge-base-curated-by-copilot-and-agents/)をご覧ください。この機能は 10 月に Frontier に展開されました。

![SharePoint の ZavaMesh Knowledge Base のページ](image-13.png)

<a id="excel"></a>

### Copilot in Excel の会計スキル、データ クレンジング スキル、対話型キャンバス

**Excel の会計スキル**は、財務に関する推論と Excel 標準の機能を組み合わせ、会計担当者による勘定照合、仕訳の準備、報告に向けた財務実績の分析を支援します。Copilot はブック内で直接作業します。変更内容を確認でき、元に戻せるため、財務の専門家は結果をレビューし、最終判断を自分で行えます。この機能は 10 月に Frontier に展開され、[11 月に全世界へ展開されます](https://www.microsoft.com/microsoft-365/roadmap?id=569424)。

<div style="position: relative; padding-top: 56.25%;">
<iframe src="https://medius.microsoft.com/Embed/video-nc/918abc8b-cbe3-476c-a0c6-1760fc2a8d48?r=258997996487" title="Excel Accounting Skills" allow="autoplay 'none'" allowfullscreen="allowfullscreen" frameborder="0" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" sandbox="allow-scripts allow-same-origin allow-forms"></iframe>
</div>

**Excel のデータ クレンジング スキル**は、見落としやすいデータ品質の問題を見つけるのに役立ちます。Copilot がブックをスキャンし、重複、書式の不統一、誤ったデータ型などの問題を調べ、ファイル内で修正を提案します。すべての変更を利用者が確認して承認するため、組織の分析の土台に、信頼できるデータを使えます。この機能は 10 月に展開されました。

<div style="position: relative; padding-top: 56.25%;">
<iframe src="https://medius.microsoft.com/Embed/video-nc/66c05bb9-763f-4e68-b6ba-745b2842a1d8?r=312004797077" title="Interactive Canvas Demo" allow="autoplay 'none'" allowfullscreen="allowfullscreen" frameborder="0" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" sandbox="allow-scripts allow-same-origin allow-forms"></iframe>
</div>

**Excel の対話型キャンバス**は、Copilot を使って、ブックのデータを主要なビジュアル、指標、インサイトを備えた、見栄えのよいレポートに変えます。元のデータが変わるとキャンバスも自動更新され、Copilot とチャットして変更することもできます。手作業でレポートを作らなくても、チームは最新のデータを共有できる形で確認できます。この機能は 10 月に Insiders に展開され、11 月に全世界へ展開されます。

<div style="position: relative; padding-top: 56.25%;">
<iframe src="https://medius.microsoft.com/Embed/video-nc/ece75f29-e5f0-4afd-a8bd-bd1f53a04717?r=1015626857913" title="Clean Data" allow="autoplay 'none'" allowfullscreen="allowfullscreen" frameborder="0" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" sandbox="allow-scripts allow-same-origin allow-forms"></iframe>
</div>

<a id="powerpoint"></a>

### Copilot in PowerPoint のモデル更新、ブランド キットの改善、スキル

**PowerPoint の Sonnet 5.5** は、より優れたデザインの視点を取り入れ、Copilot で洗練された、視覚的に魅力のあるプレゼンテーションを作るのに役立ちます。アイデアをプレゼンテーションにする際に、スライドのレイアウトを改善し、視覚的な情報の階層を明確にし、テンプレートをより一貫して適用できます。意図が伝わり、まとまりがあり、聴衆を引き付けるプレゼンテーションの作成を支援します。この機能は 10 月に展開されました。

![PowerPoint のモデル選択に Sonnet 5.5 が表示された紹介画像](image-14.png)

**PowerPoint のブランド キットのセットアップが簡単になり**、ブランド管理者がよりすばやくブランド キットを作成・構成できるようになりました。アセット管理の効率化とワークフローの改善により、キットを立ち上げるための手順が減ります。組織は、セットアップの負担を抑えながら、ブランドに沿ったプレゼンテーションの作成環境を大規模に展開できます。詳しくは、[公式ブランド キットの作成と管理](https://support.microsoft.com/microsoft-365-copilot/create-and-manage-official-brand-kits-in-the-microsoft-365-copilot-app)をご覧ください。この機能は 10 月に展開されました。

![PowerPoint のブランド キット作成・管理画面](image-15.png)

ブランド管理者は、**PowerPoint の公式ブランド キットを公開・非公開にできる**ようになりました。専用の公開フローで、利用者がキットを使えるようになるタイミングを管理し、必要に応じて公開を取り下げられます。組織は、従業員や Copilot がプレゼンテーションで使うブランド アセットを、より細かく制御できます。この機能は 10 月に展開されました。

![ブランド キットの作成、共有、公開、公式化の手順](image-16.png)

**対話型スライドの作成**では、簡単なプロンプトや既存のコンテンツから、対話型のスライドを生成できます。ダッシュボードのインサイト、業務プロセス、タイムライン、比較などの情報を、対話型の形式で提示できます。複雑な情報を、聴衆にとって理解しやすく、関心を引き、記憶に残るものにするのに役立ちます。この機能は 10 月に展開されました。

<div style="position: relative; padding-top: 56.25%;">
<iframe src="https://medius.microsoft.com/Embed/video-nc/6cd857bb-cd2c-4b7a-a590-6d3b2a74640c?r=21257866659" title="Interactive Slides" allow="autoplay 'none'" allowfullscreen="allowfullscreen" frameborder="0" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" sandbox="allow-scripts allow-same-origin allow-forms"></iframe>
</div>

**テンプレート評価スキル**は、Copilot が生成するプレゼンテーションに影響する可能性のある問題を見つけ、ブランド キット用の PowerPoint テンプレートの準備を支援します。テンプレートを評価し、ブランド キットを公開する前に、潜在的な問題に対処するための具体的な推奨事項を示します。組織は事前にテンプレートを改善し、問題の可能性を評価済みのブランド キットを使って、Copilot にコンテンツを生成させられます。この機能は 10 月に展開されました。

**スキルの記録**では、繰り返し行うプレゼンテーションの作業を、再利用可能なスキルに変えられます。よく行うタスクを記録し、スキルとして保存して、同じ種類の仕事が必要になったときに再実行できます。毎回ゼロから始めずに、反復的なプレゼンテーションの作業を、より速く、一貫して完了するのに役立ちます。この機能は 10 月に展開されました。

<div style="position: relative; padding-top: 56.25%;">
<iframe src="https://medius.microsoft.com/Embed/video-nc/5aea50ab-9149-4b4b-b46b-164933bfb957?r=37790381475" title="Record Skill" allow="autoplay 'none'" allowfullscreen="allowfullscreen" frameborder="0" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" sandbox="allow-scripts allow-same-origin allow-forms"></iframe>
</div>

<a id="word"></a>

### Copilot in Word の法務プラグインと文書の種類に応じたデザイン

**法務プラグイン**は、これまで Legal Agent として紹介してきた機能を基に、20 を超える法務専用スキルとパートナー製プラグインを Word に直接組み込みます。法務チームは、過去のひな形を基に契約書を起草したり、法務プレイブックに照らして契約をレビューしたり、文書内で直接、精密な編集や変更履歴の記録を行ったりできます。法務に特化した推論と Word 標準の機能を組み合わせ、より複雑な文書ワークフローを Word 内で完了するのに役立ちます。詳しくは、[Microsoft Copilot for legal](/blog/introducing-microsoft-copilot-for-legal/)をご覧ください。この機能は 10 月に展開されました。

<div style="position: relative; padding-top: 56.25%;">
<iframe src="https://medius.microsoft.com/Embed/video-nc/e3683de9-3208-4957-9cda-e003e106e33f?r=380894788255" title="Legal Skills" allow="autoplay 'none'" allowfullscreen="allowfullscreen" frameborder="0" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" sandbox="allow-scripts allow-same-origin allow-forms"></iframe>
</div>

**文書の種類に応じた書式設定とデザイン**は、洗練された、仕事にふさわしい文書の作成を支援します。Copilot は、作成する文書の種類に応じて、構造、レイアウト、書式、視覚的なデザインを自動適用します。書式やレイアウトにかける手間を減らし、白紙の状態から、デザインの整った文書へとすばやく進められます。この機能は 10 月に展開されました。

<div style="position: relative; padding-top: 56.25%;">
<iframe src="https://medius.microsoft.com/Embed/video-nc/527e05c0-f14a-48c6-9f47-fbb3bab0942a?r=791018810717" title="Doc Specific Formatting" allow="autoplay 'none'" allowfullscreen="allowfullscreen" frameborder="0" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" sandbox="allow-scripts allow-same-origin allow-forms"></iframe>
</div>

Word の **Markdown 対応**により、Markdown ベースのワークフローからコンテンツを簡単に取り込み、Word で作業を続けられます。入力時に Markdown のショートカットを使い、書式を保ったまま Word と Markdown の間でコピー・貼り付けができます。また、Web 上で .md と .docx のファイルを相互変換できます。コンテンツを手作業で作り直したり、書式を設定し直したりせずに、Markdown ベースのワークフローと Word の間を、よりスムーズに移れます。この機能は 10 月に展開されました。

![Word での Markdown 操作のデモ](image-17.gif)

<a id="edge"></a>

### Copilot in Microsoft Edge のエクスペリエンスの更新

**Copilot in Microsoft Edge のエクスペリエンスがシンプルになります**。Copilot にアクセスするすべての場所でアイコンが更新され、Copilot のサイド ウィンドウも使いやすくなります。これらは今後数週間で展開される利用体験の変更であり、既存のセキュリティ、コンプライアンス、プライバシー、企業向けの制御は変わりません。組織は現在のガバナンスを維持したまま、利用者はよりすっきりと一貫した方法で Copilot にアクセスできます。この機能は 10 月に展開されました。

![ホームページに Copilot のプロンプトを表示した Microsoft Edge](image-18.png)

<a id="teams"></a>

### Copilot in Teams のインテリジェント リキャップと Queues アプリの更新

**トランスクリプトを保存しないインテリジェント リキャップ**では、会議の開催者が、会議後にトランスクリプトを保持せずに、AI が生成する会議の要約を有効にできます。Copilot ライセンスを持つ開催者は会議前に有効・無効を切り替えられ、会議中はライセンスを持つ開催者と参加者が管理できます。会議後には、主な決定事項、対応項目、重要なポイントをまとめたリキャップを利用できます。トランスクリプトを保持できない組織や、保持しない方針の組織も、プライバシーとコンプライアンスの要件を満たしながら、利用者に会議のリキャップを提供できます。この機能は 5 月にパブリック プレビューに展開され、[10 月に全世界へ展開されました](https://www.microsoft.com/microsoft-365/roadmap?id=558286)。

![保存されたトランスクリプトや録画のない会議の AI 要約](image-19.png)

**Queues アプリのインテリジェントな通話リキャップ**は、録音または文字起こしされたキューの通話について、主な議論のポイントやフォローアップの対応をまとめた AI 生成の要約メモで、内容を把握するのに役立ちます。リキャップを開くには、Queues アプリの通話履歴で通話記録を見つけ、[Recap] を選択します。この機能は [9 月に展開されました](https://www.microsoft.com/microsoft-365/roadmap?id=568933)。

![Queues アプリの共有通話履歴からリキャップを選択する画面](image-20.png)

Teams Phone 向け Queues アプリの**共有通話履歴**で Copilot を使うと、通話キューで処理された通話の内容をすばやく把握し、重要な詳細を見つけられます。録音された通話が完了すると、Copilot を利用できる利用者は共有通話履歴から通話記録を開き、[Recap] タブで Copilot Chat のサイド ウィンドウにアクセスして、通話について質問できます。この機能は [9 月に展開されました](https://www.microsoft.com/microsoft-365/roadmap?id=568933)。

![共有通話履歴の通話について Copilot に質問する画面](image-21.png)

<a id="connectors"></a>

### Copilot の新しいライフ サイエンス向けコネクタ

**新しいライフ サイエンス向けコネクタ**により、Microsoft Copilot のコネクタ エコシステムに、研究者やその他のライフ サイエンス分野の専門家向けの、信頼できる業界固有のリソースが加わります。研究やエビデンス、創薬、研究開発、規制情報、臨床開発などの情報を Copilot に取り込み、利用者が仕事の流れの中で見つけ、推論し、行動に移せるようにします。組織は、より幅広い専門的なライフ サイエンスのワークフローで Copilot を活用できます。[Microsoft Marketplace](https://marketplace.microsoft.com/en-us/) でコネクタ、プラグイン、エージェントを探せます。

- **研究・エビデンス:** Article Galaxy/Research Solutions、bioRxiv、Consensus、PubMed、Scite/Research Solutions、MedlinePlus
- **標的探索・生物学:** Open Targets、Synapse.org/Sage Bionetworks、PopHIVE
- **創薬:** Amass、ChEMBL、CAS、DrugBank、drug data、EDEN Basecamp Research、Inductive Bio
- **研究室・企業の研究開発データ:** SciLeads
- **規制・競合情報:** Cortellis Regulatory Intelligence、NyquistAI、FDA Safety、Clarivate IPOne CompuMark Trademarks
- **臨床開発・医療データ:** ClinicalTrials.gov、NPI Registry、RxNorm、CMS Coverage、ICD-10
- **科学コンテンツの作成:** BioRender

![ソリューションを検索できる Microsoft Marketplace](image-22.png)

<a id="government"></a>

### 政府機関向けクラウドの Copilot 編集機能

**PowerPoint、Word、Excel の Copilot 編集機能が、Government Community Cloud (GCC) に展開されています。** 利用者は Copilot に依頼して、Excel のダッシュボード、PowerPoint の概要スライド、Word の表などのコンテンツを、組織の仕事のコンテキストを根拠に、ファイル内で直接作成・編集できます。この機能は 10 月に展開されました。

## IT 管理者向けの機能

<a id="insights"></a>

### Insights Agent と Workforce Insights Agent

**Insights Agent** では、Copilot 内のエージェントの利用状況について、自然言語で質問できます。日次・週次・月次のアクティブ ユーザー、導入の傾向、エージェント同士の比較などを確認できます。早期アクセス プレビューの Insights Agent V2 (Frontier) では、管理者がフィードバックの共有を有効にすると、エージェントの所有者が、自分のエージェントに送信された高評価・低評価やコメントを確認できます。これらのインサイトは、作成者や管理者が導入状況を評価し、調査すべき点を見つけるための材料になります。この機能は [10 月に展開されました](https://www.microsoft.com/microsoft-365/roadmap?id=561322)。

![エージェントのランキングと利用状況の指標を示す Insights Agent の回答](image-23.png)

**Workforce Insights Agent** は、お客様自身の組織データを基に、信頼でき、コンテキストに即した回答を Copilot で提供します。管理者向けの専用ワークスペースで、組織の定義、データの説明、業務上のコンテキストを設定できます。また、人や組織に関する問い合わせで、AI がそのコンテキストをどのように使って推論するかを検証できます。この機能は 2025 年 12 月にパブリック プレビューに展開され、[11 月に展開されます](https://www.microsoft.com/microsoft-365/roadmap?id=515145)。

![全体管理者向けの Workforce Insights Agent の設定画面](image-24.png)

<a id="purview"></a>

### Microsoft Purview Data Loss Prevention の保持設定と Microsoft Cowork への拡張

管理者は、**Microsoft Purview Data Lifecycle Management で、Microsoft Copilot のメモリの保持を設定できる**ようになりました。Purview の保持ポリシーで保存済みのメモリを保持でき、セキュリティとコンプライアンスのチームは、調査、規制要件、データ ライフサイクルのガバナンスのために変更を把握できます。この機能は [10 月に展開されました](https://www.microsoft.com/microsoft-365/roadmap?id=569612)。

![Microsoft Copilot のメモリに対する Purview Data Lifecycle Management の設定](image-25.png)

**Microsoft Purview Data Loss Prevention (DLP) が Microsoft Cowork に拡張**され、データ セキュリティ管理者は、Microsoft Copilot のチャットと Cowork に単一のポリシーを適用できるようになります。この統合により、秘密度ラベル付きコンテンツの参照の防止、対応する種類の機密データを含むプロンプトのブロック、機密性の高いプロンプトが Web 検索のために Bing に送信されることの防止を制御できます。この機能は [10 月にパブリック プレビューに展開されました](https://www.microsoft.com/microsoft-365/roadmap?filters=&searchterms=570845)。

![Microsoft Cowork に対する Microsoft Purview Data Loss Prevention](image-26.png)

*ご存じですか。[AI at Work Roadmap](https://www.microsoft.com/microsoft-365/roadmap) では、生産性向上アプリやインテリジェント クラウド サービスの最新情報を確認できます。[Microsoft 365 Copilot のリリース ノート](https://learn.microsoft.com/copilot/microsoft-365/release-notes?tabs=all)では、一般提供されている Microsoft 365 Copilot の機能をプラットフォーム別に確認できます。開発中、近日提供予定、一般提供の機能を、定期的にチェックしてください。この記事に記載した日程は暫定的なものであり、変更される可能性があります。*
