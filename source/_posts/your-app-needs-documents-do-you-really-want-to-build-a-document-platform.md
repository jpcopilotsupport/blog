---
title: "アプリの文書管理基盤を自作する前に: SharePoint Embedded という選択肢"
date: 2026-11-11 14:00
tags:
  - SharePoint Embedded
editorial:
  authors:
    - tyamauch1
  type: translation
  version: "1.0.0"
  source_url: https://devblogs.microsoft.com/microsoft365dev/your-app-needs-documents-do-you-really-want-to-build-a-document-platform/
---
※ この記事は、[Your app needs documents. Do you really want to build a document platform?](https://devblogs.microsoft.com/microsoft365dev/your-app-needs-documents-do-you-really-want-to-build-a-document-platform/) の抄訳です。最新の情報はリンク先をご確認ください。この記事は Microsoft 365 Copilot および GitHub Copilot を使用して抄訳版の作成が行われています。

## ファイルの保存だけでは終わらない文書管理

契約管理アプリなどに文書機能を追加すると、保存や取得だけでなく、共同作業、認証、アクセス許可、ガバナンス、運用管理も必要になります。

[SharePoint Embedded](https://learn.microsoft.com/sharepoint/dev/embedded/overview?WT.mc_id=MTC-blogA-202611) は、Microsoft 365 を基盤とする API のみのクラウド サービスです。文書をお客様の Microsoft 365 テナントに保持し、アプリから Microsoft Graph でアクセスできます。開発チームは、文書管理の基盤ではなく、アプリの UI と業務ロジックに取り組めます。

### 「文書機能の追加」に潜む開発範囲

独自実装で対応する範囲は、次のように広がります。

- **コンテンツ管理:** ファイル、フォルダー、メタデータ、検索、バージョン管理、復元など。
- **アクセス:** 認証、認可、共有、テナントの分離、アクセス許可。
- **共同作業:** Office ファイルの表示・編集、共同編集、自動保存、バージョン履歴。
- **Copilot とエージェント:** コンテンツの取り込み、インデックス作成、アクセス許可、ガバナンス。
- **ガバナンス:** 監査、保持、電子情報開示、データ損失防止。
- **企業向けの運用:** 拡張性、監視、管理、Microsoft 365 環境との統合。

これらの基盤の開発・保守は、アプリ独自の価値を高める開発に使える時間にも影響します。

### SharePoint Embedded で文書管理基盤を組み込む

コンテンツ管理、共同作業、コンプライアンスの仕組みを別途構築する負担を抑え、業務アプリやマルチテナント SaaS の開発に注力できます。原文では、次の 4 つの観点を紹介しています。

- 共同作業の基盤を自作せずに機能を追加する。
- ガバナンスが適用されたコンテンツをエージェントで活用する。
- コンテンツをお客様のテナント内に保持する。
- アプリ独自の価値を生む開発に集中する。

### 共同作業の基盤を自作せずに機能を追加する

管理者は、一貫したセキュリティ モデルを期待しています。コンテナーに保存したファイルを Microsoft 365 の Office サービスで開き、共同編集などを業務プロセスに組み込めます。外部ユーザーは、[Microsoft 365 ライセンスなしでもブラウザーで共同編集できます](https://learn.microsoft.com/sharepoint/dev/embedded/build/open-office-files#support-sharing-and-coauthoring)。アプリ内には[読み取り専用プレビュー](https://learn.microsoft.com/sharepoint/dev/embedded/build/preview-files?WT.mc_id=MTC-blogA-202611)を埋め込み、編集時には Office を起動する構成も可能です。

詳細は、[Office の共同編集機能の活用](https://learn.microsoft.com/sharepoint/dev/embedded/plan/office-collaboration-instead-of-building?WT.mc_id=MTC-blogA-202611)と[アプリから Office ファイルを開く方法](https://learn.microsoft.com/sharepoint/dev/embedded/build/open-office-files?WT.mc_id=MTC-blogA-202611)を参照してください。

### ガバナンスが適用されたコンテンツをエージェントで活用する

アプリのコンテンツとコンプライアンス制御をテナント内に保ちながら、Microsoft 365 Copilot からの検出や Microsoft Search による検索に対応できます。アプリ側が UI を制御しつつ、契約のレビューや案件への回答、プロジェクトの要約などを支援するエージェントを構築できます。

詳細は、[外部ベクトル データベースを使わない AI のグラウンディング](https://learn.microsoft.com/sharepoint/dev/embedded/plan/ground-ai-without-a-vector-db?WT.mc_id=MTC-blogA-202611)と[Microsoft 365 Copilot およびエージェント機能の追加](https://learn.microsoft.com/sharepoint/dev/embedded/build/agent-experiences?WT.mc_id=MTC-blogA-202611)を参照してください。

### コンテンツをお客様のテナント内に保持する

コンテンツには、お客様のテナント設定が適用されます。Microsoft Purview の監査、電子情報開示、保持、データ損失防止、秘密度ラベルに加え、条件付きアクセスも活用できます。**各機能の利用可否と適用は、テナントの構成とライセンスによって異なります。** コンプライアンス基盤を別途構築する必要性を減らせます。また、お客様のデータをアプリ提供側で預からずに済む構成を取れます。

設計時は、[アプリとテナントのアーキテクチャ](https://learn.microsoft.com/sharepoint/dev/embedded/plan/app-tenant-architecture?WT.mc_id=MTC-blogA-202611)と[セキュリティ、コンプライアンス、ガバナンスの計画](https://learn.microsoft.com/sharepoint/dev/embedded/plan/security-compliance-governance?WT.mc_id=MTC-blogA-202611)を確認してください。

### アプリ独自の価値を生む開発に集中する

文書管理が必須でも差別化要因ではない場合、基盤を SharePoint Embedded に任せることで、次の点に注力できます。

- **差別化:** 業務固有のワークフロー、自動化、分析、AI への投資。
- **企業向けの対応:** 既存の Microsoft 365 のストレージ、共同作業、AI、セキュリティ、コンプライアンス機能の活用。
- **一貫した操作体験:** 別の文書ポータルに移動させず、UI と業務ロジックをアプリで制御。
- **複数のアプリ形態:** 社内業務アプリや、各お客様のテナントにコンテンツを保持するマルチテナント SaaS への対応。
- **長期的な負担の軽減:** 文書の表示品質、共同作業、ガバナンス、ライフサイクル関連機能の開発・保守負担を軽減。

### アプリの開発を始める

対応する機能の範囲では、文書管理基盤やコンプライアンス基盤、ベクトル データベース、個別の検索インデックスを自作する必要性を減らせます。料金は、事前の利用コミットメントではなく、利用量に応じた従量課金です。

[SharePoint Embedded MCP server (プレビュー)](https://learn.microsoft.com/sharepoint/dev/embedded/build/sharepoint-embedded-mcp-server?WT.mc_id=MTC-blogA-202611)では、コーディング アシスタントから自然言語でリソースを作成・管理できます。原文で紹介されている起動コマンドは `npx @microsoft/spe-mcp` です ([GitHub リポジトリ](https://github.com/microsoft/SharePoint-Embedded-MCP-Server))。起動後、プロジェクトとファイルをアップロードできるサンプル アプリの作成を依頼します。

画面に沿って進める場合は、[SharePoint Embedded Visual Studio Code 拡張機能](https://marketplace.visualstudio.com/items?itemName=SharepointEmbedded.ms-sharepoint-embedded-vscode-extension)から、コンテナーの種類の作成・登録、所有元アプリと課金の設定、コンテナーの作成、サンプル アプリの読み込みを行えます。

全体像や用途との適合性は、[ドキュメント ハブ](https://learn.microsoft.com/sharepoint/dev/embedded/sharepoint-embedded-documentation?WT.mc_id=MTC-blogA-202611)と[シナリオとユース ケース](https://learn.microsoft.com/sharepoint/dev/embedded/scenarios-and-use-cases?WT.mc_id=MTC-blogA-202611)で確認できます。
