---
title: "Microsoft Copilot for legal が登場: 法務向けスキルとプラグインを一般提供"
date: 2026-10-26 15:15
cover: cover.png
tags:
  - Copilot for Office
editorial:
  authors:
    - tyamauch1
  type: translation
  version: "3.0.0"
  source_url: https://techcommunity.microsoft.com/blog/microsoft-copilot-blog/introducing-microsoft-copilot-for-legal/4564246
---
※ この記事は、[Introducing Microsoft Copilot for legal](https://techcommunity.microsoft.com/blog/microsoft-copilot-blog/introducing-microsoft-copilot-for-legal/4564246) の抄訳です。最新の情報はリンク先をご確認ください。この記事は Microsoft 365 Copilot および GitHub Copilot を使用して抄訳版の作成が行われています。

法務の仕事では、答えが 1 か所にまとまっていることはめったにありません。過去の先例、組織の基準、あるいは分析全体を左右する規制上の考慮事項によって、答えが変わることがあります。汎用的な AI だけでは十分でない場合があります。法務担当者は、答えの根拠を理解し、裏付けとなる資料を確認してから、自らの判断を下す必要があるためです。Copilot は、こうした作業をより多くまとめて進められるよう支援しながら、法務担当者だけが下せる判断は、その担当者自身に委ねます。

本日、法務向けに特化した 20 種類を超えるスキルと、新しいパートナー製プラグインの一般提供を発表します。法務固有の機能と信頼できる情報源を、Microsoft Copilot に直接取り込みます。[以前 Legal Agent として紹介した機能](https://techcommunity.microsoft.com/blog/microsoft365copilotblog/word-legal-agent-in-frontier/4516218)を基に、これらの機能が Copilot の法務向けプラグインとしてまとまりました。単なるプロンプトにとどまらず、Word での踏み込んだ文書作業、Copilot Cowork (Cowork) での複数のファイルや手順にまたがる作業、そして法務チームが頼りにしているシステムや情報源との接続を支援します。

<div style="position: relative; width: 100%; padding-top: 56.25%;"><iframe src="https://medius.microsoft.com/MMRProxy.html?target=https%3A%2F%2Fmedius-vnet-a3eab5cshpd2brfx.z01.azurefd.net%2FEmbed%2Fvideo-nc%2F21842e69-d010-492d-a3b1-4a5490dc3116" title="Introducing Copilot for Legal" allow="autoplay 'none'" allowfullscreen="allowfullscreen" frameborder="0" class="embeddedVideoIframe" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" sandbox="allow-scripts allow-same-origin allow-forms"></iframe></div>

#### 法務の仕事に特化した設計

法務の仕事では、厳密さが求められます。そのため、実務の法的基準、慣行、ワークフローを機能に落とし込む役割を担う[リーガル エンジニアと協力して](https://www.microsoft.com/en-us/worklab/ai-at-work-what-will-human-employees-do-now?msockid=293fa81079e96b453b9bbeff78a76a78)、これらの機能を開発しました。

これらは、汎用モデルにプロンプトを重ねただけのものではありません。各スキルは、法務固有の推論と Microsoft 365 の標準機能を組み合わせ、法務チームが必要とする形式で成果物を作成します。たとえば、契約書に修正を入れる際には、Copilot が条項をどう変更すべきかを判断し、Word が文書の書式を維持したまま、標準の変更履歴として編集を反映できます。同様に、新しい契約書のドラフトを作成する際には、Copilot が SharePoint 内の承認済みの先例を参照し、Word 標準のコンテンツ コントロールを使って、文書全体で編集可能かつ一貫性のある構造化されたプレースホルダーを作成できます。

Word では、文書に直接組み込まれた機能によって、法務担当者が内容を確認・改善し、必要な対応を進められるよう、踏み込んだ文書作業を支援します。Cowork では、契約書、メール、会議、ファイルにまたがる、より広範で複数の手順を伴う作業を委任できます。たとえば、複数の契約にわたる義務や期限の追跡、契約間の主要な条項の比較、案件の時系列の作成などです。

Work IQ は、Copilot とエージェントを、組織のリアルタイムの知識、コンテキスト、人、業務につなぐインテリジェンス レイヤーです。目の前の文書だけでなく、その業務の背景にある案件、基準、情報も含みます。

法務チームは、これらの機能によって日々の作業を効率化できます。

- **ドラフト作成と準備を迅速に**: 承認済みの先例やテンプレートから、新しい契約書や構造化された法務メモを作成します。
- **確信を持ってレビュー・交渉**: プレイブックに照らして契約書を確認し、注意が必要な条項の特定を支援して、変更履歴付きの修正案を提示します。
- **義務を把握**: 約束事項、期限、発動条件を抽出し、関連する契約をたどって、どの条項が引き続き有効かを判断します。
- **調査を指針に**: 資料や要件を比較し、潜在的な不足を特定して、分析結果を構造化された指針にまとめます。
- **案件を前に進める**: 案件の時系列を作成し、重要な日付や未解決の論点を明らかにして、会議の記録から正式な議事録や決議を作成します。

これらの一般提供される機能に加え、今月後半にプレビュー提供を予定している Word の新機能では、文書内の定義された用語とその定義の間を移動しやすくなります。

Copilot は、これらのワークフロー全体で、法務チームが一貫したアプローチを適用できるよう支援します。その間も、各段階での主導権は法務チームが保持します。

#### 法務システムやデータを横断して接続

法務チームは、Microsoft 365 以外の専門的な情報源やシステムも利用しています。新しいパートナー製プラグインは、法務調査、文書・案件・取引管理、契約・電子署名、法務 AI、電子情報開示 (e-discovery) にわたる、これらのシステムや情報源を Copilot に取り込みます。本日から、Microsoft プラグイン レジストリを通じて、パートナー製の法務向けプラグインの展開が順次始まり、今後さらに多くのプラグインが利用できるようになります。

- **法務調査**: Bloomberg Law、Trellis、Descrybe Legal Engine、Legal Data Hunter、Courtroom5、Lawstronaut
- **文書・案件・取引管理**: iManage Work、NetDocuments、Box、Litera、HighQ from Thomson Reuters、LegalZoom、Solve Intelligence
- **契約・電子署名**: Docusign、Juro、Adobe Acrobat Sign、LawVu、SignatureAPI、Dropbox Sign、PandaDoc
- **専門的な法務 AI**: Harvey、Legora、DeepJudge
- **電子情報開示・リーガル インテリジェンス**: Everlaw、Relativity

これらのプラグインによって、法務チームが信頼する専門ツールや情報源が Copilot の利用環境に取り込まれます。

#### 法務チームによる Copilot の活用

法務担当者は、すでにこれらの機能を業務で活用しています。4 月の Frontier リリース以降、1,800 人を超える利用者が 10 万件近い編集を生成し、提案のおよそ 7 割を採用しています。社内評価でも、編集自体の品質について、流暢さは 90% 超、簡潔さは 95% 超、関連性は 85% 超という高い結果が示されています。最終的な表現の決定権を法務担当者が保持したまま、複雑な文書の作業をよりすばやく進められるよう設計された編集体験です。

Microsoft の法務部門は、これらの機能をいち早く検証する場となっています。また、Microsoft 社外の法務チームとも協力し、現在の法務実務に即した機能へと磨き上げています。

> 「私にとって Copilot の本当の利点は、仕事の進め方を変えなくてよいことです。契約交渉ではもともと Word を使っており、今では Copilot に最初の確認を手伝ってもらい、提案された修正を文書内でそのまま確認できます。実際の文言を文脈の中で確認できることには、大きな意味があります。最初の確認に 1 時間かかっていたものが、数分で済むこともよくあります。その分、実質的な論点にすばやく取りかかり、法的判断、交渉戦略、クライアントへの助言により多くの時間を使えます。」
>
> — Aneesh Mehta、Microsoft、Senior Corporate Counsel

> 「この 1 年、当事務所では、弁護士やビジネス担当者の日常のワークフローに Microsoft Copilot を組み込むため、計画的に取り組んできました。プレミアム機能とエンタープライズ機能を、法務に特化して事務所内で開発した、増え続けるエージェント群と組み合わせています。導入率は現在 90% に近づき、利用量と活用度も毎月伸び続けています。Legal Agent や Copilot Cowork から、今後登場する Legal Skills 機能に至るまで、Microsoft の AI プラットフォームの急速な進化により、AI が法務サービスの提供方法の中核になるという確信が強まりました。その確信を基に、次の段階として全職員にプレミアムの Copilot ライセンスを提供し、Clyde & Co を真の Frontier Firm とすることにしました。高度な AI 機能を全員が使えるようにすることで、イノベーションを加速し、生産性をさらに高め、最終的にはクライアントによりよい成果を届けられます。」
>
> — Matt Simpkin、Clyde & Co、Chief Information Officer

> 「Compass Programme を通じた Legal Agent のテストへの参加は、興味深く進化を続ける製品について、貴重な知見を得る機会になりました。特に、Microsoft チームとの率直で建設的な意見交換が印象に残っています。そのおかげで、テストは興味深く、有意義なものになりました。Copilot で Legal Agent の機能を使うことを楽しみにしており、さまざまな法務タスクの改善に役立つ可能性を感じています。」
>
> — Gunilla Schütz-Wicher、Uniper Global Commodities SE、Senior Legal Counsel

#### 機密性の高い法務業務でも信頼できる仕組み

法務チームには、確立された基準の範囲内で機能し、変更の主導権を自分たちで保持できるソリューションが必要です。Word では、Copilot が確認用の編集案を提示し、利用者が承認した場合にのみ適用します。承認済みのテンプレートと再利用可能なプレイブックによって、法務チームは確立された基準に沿って作業できます。同時に、Copilot は [エンタープライズ データ保護](https://learn.microsoft.com/microsoft-365/copilot/enterprise-data-protection)の下で、Microsoft 365 のサービス境界内でプロンプトと応答を処理します。Copilot は各利用者がアクセスできるコンテンツだけを扱い、秘密度ラベルを尊重し、プロンプト、応答、文書を基盤モデルのトレーニングに使用しません。

#### 今すぐ使い始める

Copilot の新しい法務向け機能は、本日、世界中の Microsoft Copilot のお客様に一般提供されます。[新しい法務向け機能を確認し](https://support.microsoft.com/en-us/word/get-started-with-copilot-for-legal)、組織での利用の始め方をご覧ください。

10 月 22 日の Microsoft Copilot in Word ウェビナーでは、新しい法務向けスキルの実際の動作を紹介します。登録するには、[Microsoft Discovery Sessions カタログ](https://events.microsoft.com/flow/microsoft/microsoftds/catalog/page/unauthsession?tab.deliverymethod=deliverymethod_live)で「REGISTER」を選択し、「Microsoft Copilot in Word: Turn a blank page into a polished draft」を検索して、セッションを選択してください。登録後、確認メールが届きます。
