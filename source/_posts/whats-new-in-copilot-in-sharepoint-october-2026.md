---
title: "Copilot in SharePoint の新機能: 2026 年 10 月"
date: 2026-10-28 13:53
tags:
  - Copilot in SharePoint
editorial:
  authors:
    - tyamauch1
  type: translation
  version: "3.0.0"
  source_url: https://techcommunity.microsoft.com/blog/spblog/what%e2%80%99s-new-in-copilot-in-sharepoint-october-2026/4535423
---
※ この記事は、[What’s new in Copilot in SharePoint: October 2026](https://techcommunity.microsoft.com/blog/spblog/what%e2%80%99s-new-in-copilot-in-sharepoint-october-2026/4535423) の抄訳です。最新の情報はリンク先をご確認ください。この記事は Microsoft 365 Copilot および GitHub Copilot を使用して抄訳版の作成が行われています。

## Copilot in SharePoint の新機能を毎月まとめて紹介

Copilot in SharePoint の一般提供に向けた展開が 9 月 30 日に始まりました。詳細は[発表ブログ](https://aka.ms/copilotinsp/blog/ga)を確認してください。

ただし、一般提供はゴールではありません。今月のリリースは、そのことをよく表しています。10 月の焦点は、Copilot が何かを作成した後の作業です。レビューし、構成を見直し、公開して、対応が必要な人に届けます。ドキュメントや画像を編集し、生成した HTML をレビュー・公開して、その結果をサイトから離れずに送る、新しい方法が加わります。ほかの業務システムにアクセスするプラグイン、1 文で説明して作成できるワークフロー、質問するだけで得られる分析もそろい、今月の方向性はシンプルです。仕事を終えるために SharePoint の外へ移動する回数を減らします。

これらの機能の多くは、Microsoft 365 Copilot ライセンスに含まれます。画像の生成と編集、高度な自動入力、サイト分析には Copilot Credits を使用します。Copilot Credits は、一般提供の一環として展開が始まっています。

## コンテンツの作成と調整

### SharePoint から離れずに PDF を分割・結合・並べ替え

**新機能:** Copilot in SharePoint が PDF をページやセクション単位で扱えるようになりました。セクションの抽出、添付ファイルの挿入、ページの並べ替え、ドキュメントの複数ファイルへの分割が可能です。

**ここが便利:** SharePoint から離れずに、レビュー担当者や対象読者に合わせて大きなドキュメントを再構成できます。

<figure>
<div style="position: relative; padding-top: 56.25%;">
<iframe src="https://medius.microsoft.com/Embed/video-nc/e3b009d8-b59c-4e6d-ac49-f4dc3c560cea" title="Edit PDF's" allowfullscreen="allowfullscreen" allow="fullscreen; picture-in-picture; autoplay 'none'" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" sandbox="allow-scripts allow-same-origin allow-forms"></iframe>
</div>
<figcaption>プレーヤーが読み込まれない場合は、<a href="https://medius.microsoft.com/Embed/video-nc/e3b009d8-b59c-4e6d-ac49-f4dc3c560cea">新しいウィンドウで動画を開いてください</a>。</figcaption>
</figure>

**活用例:**

- RFP への回答資料から価格のセクションを取り出し、レビュー担当者に渡します。
- 後から届いた添付ファイルを指定の位置に挿入したり、必要な構成に合わせて資料の順序を並べ替えたりします。
- 1 つのドキュメントを分割し、対象読者ごとに別のコピーを作成します。

**プロンプト例:** 「回答資料から価格のセクションを取り出し、独立した PDF にしてください。」

**提供条件:** Microsoft 365 Copilot ライセンスに含まれます。

### ファイルの以前のバージョンを確認・復元

**新機能:** Copilot にバージョン履歴を読み取らせ、変更内容の説明を求められます。意図しない編集を取り消す必要があるときは、以前のバージョンに戻せます。

**ここが便利:** 複数のバージョンを手動で開いて比較する代わりに、会話を通じて変更を調査し、元に戻せます。

**活用例:** コンテンツの所有者が誤操作による編集後の変更内容を確認し、最後に承認されたバージョンに復元します。

**プロンプト例:**

- このファイルの最新バージョンと 1 つ前のバージョンを比較し、変更点をまとめてください。私が承認した場合は、以前のバージョンに戻してください。
- このアイテムのバージョン履歴を表示し、各バージョンで何が変わったかをまとめてください。
- このドキュメントをバージョン 2.0 に戻してください。

**提供条件:** Microsoft 365 Copilot ライセンスに含まれます。

### ライブラリ内で画像を作成・編集

**新機能:** Copilot in SharePoint で画像を新たに生成したり、既存の画像を編集したりできます。結果は Copilot ウィンドウにプレビュー表示されます。

**ここが便利:** コンテンツが保存されている場所で、スキャンしたドキュメントや現場の写真を扱えます。また、「PII」などの企業固有の用語を定義したカスタム スキルと、画像編集を組み合わせられます。

**活用例:** 自社の PII の基準を定義したカスタム スキルを使い、現場の写真から該当情報を墨消しするよう依頼します。結果をプレビューし、別のコピーとして保存します。

**プロンプト例:** 「この画像の PII をすべて墨消しし、結果を新しいコピーとして保存してください。」

**提供条件:** Copilot ライセンスと Copilot Credits で利用できます。Copilot Credits は今月展開されています。

## ファイルの整理と構造化

### ほぼリアルタイムでメタデータを自動入力

**新機能:** 自動入力は、ドキュメント ライブラリを、構造化されたフィルター可能なデータに変えます。必要な列を説明すると、Copilot が各ファイルを読み取り、値を入力します。Copilot in SharePoint のプレビューで提供されていた既存の自動入力は、引き続き Copilot ライセンスで利用できます。これに加えて、高度な自動入力 (Advanced Autofill) という新機能を追加します。高度な自動入力では、Copilot Credits が有効なサイトの処理に、より高速な処理キューを使用します。ほとんどのファイルは数分で処理が完了しますが、サービスが特に混雑している場合は最大で約 1 時間かかることがあります。

**ここが便利:** 高度な自動入力によって、構造化・整理されたライブラリをより早く用意できます。優先度の高いドキュメントに便利です。

**活用例:**

- **顧客のフィードバックを作業項目として整理:** 顧客との通話、アンケートのエクスポート、エスカレーションのメモをチームが保存しているライブラリを Copilot に指定し、製品分野、センチメント、要望されている変更、重大度の列を追加します。新しいファイルは保存されるたびに分類されるため、未整理のフィードバックも、読まれるのを待つことなく、作業項目として振り分ける準備が整います。
- **例外事項をリストで追跡:** 契約書、発注書、ポリシー ドキュメントに、標準外の条件、承認状況、所有者の列を追加します。高度な自動入力がライブラリ全体の例外事項をすばやく示すため、チームはすべてのファイルを開くのではなく、標準から外れた少数のファイルを確認できます。
- **支援の依頼を課題リストに変換:** サポート依頼、受付フォーム、IT チケットがドキュメントとして保存されている場合は、依頼の種類、影響を受けるチーム、緊急度、次のアクションの列を自動入力します。手動でタグを付けなくても、ライブラリを、並べ替え、絞り込み、担当者の割り当てができる実用的な課題リストとして使えます。

**プロンプト例:** 「このライブラリに、各ドキュメントの依頼の種類、影響を受けるチーム、緊急度、推奨される次のアクションを記録する自動入力列を作成してください。」

**詳細:** [高度な自動入力](https://learn.microsoft.com/sharepoint/copilot-in-sharepoint-create-autofill-columns#advanced-autofill)

**提供条件:** Copilot ライセンスと Copilot Credits で利用できます。Copilot Credits は今月展開されています。

## SharePoint で HTML を扱う

### コメントを使って生成された HTML をレビュー・更新

**新機能:** AI が生成した HTML を、Word ドキュメントと同じようにレビューできます。変更したい箇所にコメントを残すと、Copilot が、その背後にある HTML、CSS、レイアウトを編集します。

**ここが便利:** フィードバックが、対象のコンテンツと正確に結び付きます。Copilot が言及されていない箇所をすべて維持するため、レビュー担当者は望む結果に集中できます。

**活用例:** プロジェクト リーダーが、生成された進捗ダッシュボードにコメントを残し、グラフの簡素化、セクション名の変更、アラートの明確化を依頼します。技術的な編集プロンプトを書く必要はありません。

<figure>
<div style="position: relative; padding-top: 56.25%;">
<iframe src="https://medius.microsoft.com/Embed/video-nc/ad75ba4d-b11e-46dc-a616-1bb766f350ee" title="Fix issues in comments on HTML" allowfullscreen="allowfullscreen" allow="fullscreen; picture-in-picture; autoplay 'none'" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" sandbox="allow-scripts allow-same-origin allow-forms"></iframe>
</div>
<figcaption>プレーヤーが読み込まれない場合は、<a href="https://medius.microsoft.com/Embed/video-nc/ad75ba4d-b11e-46dc-a616-1bb766f350ee">新しいウィンドウで動画を開いてください</a>。</figcaption>
</figure>

**HTML ページにコメントを残した後のプロンプト例:** 「コメントで指摘した問題を修正し、更新版を表示してください。」

**デモ動画:** https://www.youtube.com/watch?v=f6o8iz9b4WY

**提供条件:** Microsoft 365 Copilot ライセンスに含まれます。

### HTML を SharePoint ページとして表示

**新機能:** Copilot in SharePoint で HTML を作成するか、ほかのソースから HTML をアップロードし、ページ ライブラリに保存できます。SharePoint ページとして表示し、追加で編集したり、対象読者と共有したりできます。

**ここが便利:** HTML は、既存の ASPX ページに加えて、コンテンツを表示するもう 1 つの方法になります。

**活用例:** プロジェクトの概要、チーム メンバー、直近のチーム会議での決定事項とアクション アイテムをまとめた、プロジェクトのニュースレターを作成します。

<figure>
<div style="position: relative; padding-top: 56.25%;">
<iframe src="https://medius.microsoft.com/Embed/video-nc/bee91ede-38d1-44ec-a6c5-01e102057eba" title="HTML Newsletter" allowfullscreen="allowfullscreen" allow="fullscreen; picture-in-picture; autoplay 'none'" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" sandbox="allow-scripts allow-same-origin allow-forms"></iframe>
</div>
<figcaption>プレーヤーが読み込まれない場合は、<a href="https://medius.microsoft.com/Embed/video-nc/bee91ede-38d1-44ec-a6c5-01e102057eba">新しいウィンドウで動画を開いてください</a>。</figcaption>
</figure>

**プロンプト例:** 「Project Alpha についての HTML ニュースレターを作成してください。プロジェクトの概要、参加しているチーム メンバー、直近の週次チーム会議での決定事項とアクション アイテムを含めてください。」

**提供条件:** Microsoft 365 Copilot ライセンスに含まれます。

## コンテンツの共有

### Copilot からメールを送信

**新機能:** Copilot in SharePoint が、利用者に代わってメールを送信できるようになりました。HTML レポート、要約、計画の更新情報などの作成を依頼し、送信先を伝えると、Copilot がコンテンツを生成します。指定した受信者を特定し (「私の上司」「私の部下」などの表現にも対応)、レポートを添付ファイルではなくメール本文として送信します。1 つのプロンプトで、依頼から配信まで進められます。

**ここが便利:** レポートは、完成しただけでは仕事が終わりません。適切な人が読んで初めて完了します。レポートがメール本文に届くため、受信者はメッセージを開いたその場で読めます。ダウンロードも添付ファイルも不要で、「これはどのバージョンだろう」と迷うこともありません。また、普段の呼び方から Copilot が相手を特定するため、作業を止めて送信先を調べる必要もありません。送信内容を管理するのは利用者です。Copilot は、送信前にメッセージを表示します。

**活用例:**

- **月次計画を上司などに共有:** サイトのコンテンツからチームの計画レポートを生成し、直属の上司に直接送信して、部下を CC に入れます。全員が同じ計画を同時に確認できます。
- **サイトから離れずに進捗を報告:** 今週ライブラリやリストで何が変わったかをまとめ、関係者にメールで送ります。Outlook にコピーして貼り付ける必要はありません。
- **必要な人に報告を配信:** 一連のドキュメントを、書式を整えた要約にしてプロジェクト チームに送ります。コンテンツをメール本文に入れるため、どのデバイスからでも読めます。

**プロンプト例:** 「チームの来月の計画について HTML レポートを作成し、私の上司に送信して、私の部下を CC に入れてください。」

**提供条件:** Microsoft 365 Copilot ライセンスに含まれます。

## コンテンツと業務システムの接続

### ほかのシステムを Copilot in SharePoint に接続

**新機能:** プラグインにより、Copilot in SharePoint が GitHub、CRM システム、公開プラットフォーム、社内ツールなどと連携できます。読み取りと書き込みの両方に対応し、一括操作には人による承認を伴います。

**ここが便利:** Microsoft 365 を通じてプラグインを一度インストールすれば、チームのドキュメントが保存されている SharePoint サイトで利用できます。IT 部門は、ガバナンスと、各プラグインにアクセスできる利用者の制御を維持できます。

<figure>
<div style="position: relative; padding-top: 56.25%;">
<iframe src="https://medius.microsoft.com/Embed/video-nc/f9508c4d-b8ce-4f6b-9b22-c08502cb4f39" title="Plugins" allowfullscreen="allowfullscreen" allow="fullscreen; picture-in-picture; autoplay 'none'" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" sandbox="allow-scripts allow-same-origin allow-forms"></iframe>
</div>
<figcaption>プレーヤーが読み込まれない場合は、<a href="https://medius.microsoft.com/Embed/video-nc/f9508c4d-b8ce-4f6b-9b22-c08502cb4f39">新しいウィンドウで動画を開いてください</a>。</figcaption>
</figure>

**活用例:** SharePoint の営業案件のレビューを Dynamics 365 と照合し、成約予定日が変更された案件を特定して、フォローアップ タスクを作成します。

**プロンプト例:** 「このサイトの第 3 四半期の営業案件レビューにある顧客を Dynamics 365 と照合してください。成約予定日が後ろにずれた案件を示し、それぞれにフォローアップ タスクを登録してください。」

**提供条件:** Microsoft 365 Copilot ライセンスに含まれます。

## シンプルなワークフローの自動化

### Teams のリッチな書式を使い、ファイルやリストのワークフローを自動化

**新機能:** 重要なファイルの変更やメタデータの更新があったときに、チャットやチャネルで共同作業するための簡単なワークフローを、Copilot で作成できます。トリガーやアクション、自分で Power Automate フローを設定することを心配する必要はありません。ワークフローが SharePoint のコンテキストを使い、自動通知の作成を支援します。チャットやチャネルへの投稿でアダプティブ カードがサポートされるようになったため、含めるメタデータ フィールドと、希望する書式を Copilot に伝えるだけで済みます。代わりにメールを送りたい場合も、Copilot に依頼すれば、簡単なプロンプトでワークフローのアクションを切り替えられます。

単純なテキストでの更新通知にとどまらず、Copilot と SharePoint で、情報が充実した見やすいアダプティブ カードを作成できます。便利なボタンや、SharePoint に戻るリンクも含められます。

![SharePoint のコンテキストを使ったワークフロー通知の例](workflow-notification.png)

**ここが便利:** コラボレーションは Teams やメールで行われます。コンテンツはドキュメント ライブラリやリストに置いたまま、新しいファイルが追加されたときや、メタデータが指定の条件を満たしたときに、重要な更新を投稿できます。SharePoint で自分に割り当てられたファイルの更新を促す、定期的なリマインダーも送れます。

![Teams に投稿するアダプティブ カードの例](workflow-adaptive-card.png)

**活用例:**

- **高額な請求書を上司などのレビューに回付:** 50 万ドルを超える請求書を受け取ったら、上司などとのチャットに例外通知を投稿し、意見を集め、支払いを処理する前に重要な内容を確認します。
- **契約の更新を案件用の共同作業スペースに通知:** Contracts ライブラリのファイルが更新されたら、バージョン、所有者、SharePoint に戻るリンクを含むカードを案件のチャネルに投稿し、チームが最新のコピーを確認できるようにします。
- **RFP をレビュー:** 新しい RFP ドキュメントが届くたびに入札のチャネルにメッセージを投稿し、割り当てられたレビュー担当者にも個別に通知して、回答に取りかかるのが遅れないようにします。

**プロンプト例:** 新しいファイルが追加されたら、ファイルの主な情報とファイルを開くボタンを含む、見やすい要約カードを私の Teams チャネルに投稿してください。

**提供条件:** Microsoft 365 Copilot ライセンスに含まれます。Power Automate へのアクセスが必要です。

## コンテンツのパフォーマンスを把握

### サイトやコンテンツの利用状況を質問

**新機能:** サイト所有者は、サイト、ページ、ニュース、ドキュメントの利用状況について自然言語で質問し、数値を 1 か所に集め、その結果を共有用のカスタム HTML レポートにできます。

**ここが便利:** 別々の場所から分析情報を集めたり、固定されたレポート期間に合わせて工夫したりする代わりに、必要な切り口に合わせて指標を調整できます。

**活用例:** ページ、ニュース、ドキュメントを対象としたレポートを作成し、今週サイトでどのコンテンツの人気が高いかを確認します。

<figure>
<div style="position: relative; padding-top: 56.25%;">
<iframe src="https://medius.microsoft.com/Embed/video-nc/0a5e044a-e2b1-4560-acd6-5bba3ffed7ed" title="Site analytics" allowfullscreen="allowfullscreen" allow="fullscreen; picture-in-picture; autoplay 'none'" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" sandbox="allow-scripts allow-same-origin allow-forms"></iframe>
</div>
<figcaption>プレーヤーが読み込まれない場合は、<a href="https://medius.microsoft.com/Embed/video-nc/0a5e044a-e2b1-4560-acd6-5bba3ffed7ed">新しいウィンドウで動画を開いてください</a>。</figcaption>
</figure>

**プロンプト例:**

- 「このサイトで、閲覧数とユニーク訪問者数が最も多いページはどれですか。」
- 「今月のサイトの利用状況はどうなっていますか。」
- 「このサイトで、最も多く閲覧されているドキュメントはどれですか。」
- 「人気の高いページの平均滞在時間をまとめ、目立つ点を教えてください。」
- 「最後に投稿したニュースの利用状況は、その前の投稿と比べてどうでしたか。」
- 「このサイトのページ、ニュース、ドキュメントを対象としたカスタム分析レポートを作成し、今週人気のコンテンツを強調してください。」

**提供条件:** Copilot ライセンスと Copilot Credits で利用できます。Copilot Credits は今月展開されています。

## 改善を続けるチャット エクスペリエンス

今月は、**提案チップ**を追加しました。Copilot が応答すると、回答のすぐ下に、文脈に沿った次の質問や操作の候補が表示されます。結果を調整したり、さらに詳しく調べたり、次のアクションに進んだりできるため、空のプロンプト ボックスを前に、次に何を聞くか迷う必要がありません。また、ファイル、人、会議にアクセスする方法と同じように、**スキルにすばやくアクセスするオプション**も追加しました。必要なときに、適切なスキルを見つけて追加できます。これらの機能により、Copilot in SharePoint を使い始めやすく、使い続けやすくなります。

![次の質問や操作の候補とスキルへのクイック アクセス](chat-suggestions-and-skills.png)

## 今すぐ試す

[Copilot in SharePoint の導入支援サイト](https://adoption.microsoft.com/copilot-in-sharepoint/)と[スタート ガイド・プロンプト ライブラリ](https://adoption.microsoft.com/files/sharepoint/GettingStartedGuidePromptLibrary.pdf)で、そのまま使えるプロンプトや、手順に沿ったガイダンスを確認できます。

[新機能の情報](https://aka.ms/CopilotinSP/WhatsNew)で最新の情報を確認し、[YouTube チャネル](https://www.youtube.com/@ZRosenfield)でさらに多くのデモをご覧ください。

来月も、新しい情報をお届けします。
