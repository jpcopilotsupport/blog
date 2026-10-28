---
title: "Teams Phone Agent で顧客の質問に答え、必要なサポートにつなぐ"
date: 2026-10-28 14:07
tags:
  - Copilot in Teams
editorial:
  authors:
    - tyamauch1
  type: translation
  version: "9.0.0"
  source_url: https://techcommunity.microsoft.com/blog/microsoftteamsblog/help-your-customers-get-answers-and-support-with-teams-phone-agent/4560840
---
※ この記事は、[Help your customers get answers and support with Teams Phone Agent](https://techcommunity.microsoft.com/blog/microsoftteamsblog/help-your-customers-get-answers-and-support-with-teams-phone-agent/4560840) の抄訳です。最新の情報はリンク先をご確認ください。この記事は Microsoft 365 Copilot および GitHub Copilot を使用して抄訳版の作成が行われています。

顧客を何よりも大切にし、電話がかかってきたときにはいつでも対応したいと考えるのは自然なことです。ただし、顧客のニーズは予定どおりには発生しません。質問や予約の変更は、最も忙しい時間帯や営業時間外にも寄せられ、顧客はそうしたときでも、迅速で便利なサービスを期待しています。その期待に応えようとすると、従業員は繰り返しの依頼への対応に追われ、人の判断や強い信頼関係が特に重要になる、より価値の高い会話に集中できなくなることがあります。

Teams Phone Agent は、AI を活用して着信に応答する電話受付です。着信が急増したときや通常の営業時間外にも、顧客の依頼に対応できるように規模を拡張します。Teams Phone Agent の一般提供 (GA) に向けた展開が、本日から始まります。

## Teams Phone Agent が顧客からのよくある依頼に対応

Teams Phone Agent は、組織がすでに利用している顧客向けの Teams Phone のサービス用電話回線や通話フローに、対話型 AI を導入します。電話をかけた人は、複雑な音声メニューをたどる代わりに、必要なことを話すだけで済みます。一般提供される Teams Phone Agent の機能は、次のようなシナリオに対応します。

- **質問への回答。** 営業時間、所在地、ポリシー、サービスの詳細などについて、会話を通じて便利に回答します。回答の根拠となるナレッジ ソースは、組織が FAQ ファイルや URL を使って簡単に構成できます。
- **予約をセルフサービスで管理。** 組織が構成した連携を通じて、電話をかけた人が予約の作成、変更、キャンセル、確認を行えるように支援します。
- **会話のコンテキストを添えて転送。** 追加の支援が必要な場合、Teams Phone Agent は、適切な専門担当者や部署の特定、電話の転送、転送先への AI が生成した会話メモの提供を支援できます。これにより、電話を受ける従業員が依頼の内容を理解しやすくなり、電話をかけた人が情報を繰り返し説明する必要を減らせる可能性があります。
- **多言語での電話対応。** [60 を超える対応言語とロケール](https://learn.microsoft.com/microsoftteams/aa-cq-reference-limits-supported-configurations)で自然な会話をサポートし、顧客が希望する言語で組織とやり取りするための、もう 1 つの手段を提供します。
- **営業時間外の顧客対応。** 夜間や週末にもよくある依頼に対応し、通常の営業時間外にサービスを利用するための、もう 1 つの手段を提供します。

## Teams Phone Agent のパフォーマンスをリアルタイムで監視

![Queues アプリでの Teams Phone Agent の概要](queues-app-overview.png)

Teams Phone Agent がより多くの顧客対応を担うようになると、スーパーバイザーは Queues アプリのダッシュボードを使って、エージェントの稼働状況を監視し、サービス用電話回線全体で通話がどのように処理されているかを把握できます。たとえば、通話数や、電話をかけた人が Teams Phone Agent とやり取りする平均時間など、主要なサービス レベルの指標を追跡できます。こうした可視化により、組織が AI を活用した顧客サービスを拡大する際も、状況をより適切に把握・管理できます。

Teams Phone Agent と Queues アプリのスーパーバイザー ダッシュボードの統合は、パブリック プレビューで利用できます。Queues アプリは、Teams Premium に含まれる高度なコラボレーションと保護の機能の一部です。[詳細はこちら](https://learn.microsoft.com/microsoftteams/teams-add-on-licensing/licensing-enhance-teams)を確認してください。

## Copilot Studio で作成したカスタム エージェントで音声体験を拡張: Frontier プレビューで提供

![Teams Phone Agent と Teams Phone に接続するカスタム音声エージェント](custom-voice-agents.png)

組織では、一般的な電話受付の範囲を超えた手続きを、電話をかけた人に完了してもらう必要があることも少なくありません。Microsoft Copilot Studio を使うと、作成者は、発注の状況や請求書の未払い残高の確認など、専門的なワークフローに対応するカスタム音声エージェントを作成し、Teams Phone や Teams Phone Agent に接続できます。

カスタム音声エージェントには、2 つの方法で接続できます。専門的なワークフローが必要な場合、Teams Phone Agent から電話を引き継げます。[詳細はこちら](https://learn.microsoft.com/microsoft-copilot-studio/voice-teams-phone-agent)を確認してください。または、Copilot Studio の音声エージェントを Teams Phone のリソース アカウントに割り当て、電話をかけた人が直接ダイヤルできるようにすることもできます。[詳細はこちら](https://learn.microsoft.com/microsoftteams/aa-cq-direct-mcs)を確認してください。Teams Phone Agent や Teams Phone と Copilot Studio の音声エージェントを連携させる拡張機能は、Frontier で利用できます<sup>1</sup>。

## Teams Phone Agent の活用例

<figure>
<div style="position: relative; padding-top: 56.25%;">
<iframe src="https://medius.microsoft.com/Embed/video-nc/deffc811-1bfc-48de-adc7-13ad5fed1dd8" title="Teams Phone Agent" allowfullscreen="allowfullscreen" allow="fullscreen; picture-in-picture; autoplay 'none'" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" sandbox="allow-scripts allow-same-origin allow-forms"></iframe>
</div>
<figcaption>プレーヤーが読み込まれない場合は、<a href="https://medius.microsoft.com/Embed/video-nc/deffc811-1bfc-48de-adc7-13ad5fed1dd8">新しいウィンドウで動画を開いてください</a>。実際の顧客との会話ではありません。表示されている結果は説明用の例です。</figcaption>
</figure>

次のシナリオは、Teams Phone Agent と Copilot Studio で作成したカスタム音声エージェントを、電話をかけた人のさまざまなニーズにどう活用できるかを示す例です。

- **旅行者がフロントに来る前に質問に回答。** ホテル グループは Teams Phone Agent を使い、チェックイン時刻、駐車場、設備、宿泊施設のポリシーなど、よくある質問に回答できます。従業員が個別の対応を必要とするサービスに取り組む間も、宿泊客が詳しい情報を得るための、もう 1 つの手段を提供できます。
- **顧客と従業員の双方にとって、サービスの予約をより簡単に。** 自動車整備センターは Teams Phone Agent を使い、ドライバーが自然な会話で整備の予約や変更を行い、都合のよい時間を探せるように支援できます。
- **住民を適切な地域のサービスにつなぐ。** 自治体の市役所は Teams Phone Agent を使い、電話をかけた人が許認可、ごみ収集、レクリエーション プログラム、その他の行政サービスのどれについて支援を必要としているかを特定できます。その後、電話を適切な部署に転送し、電話を受ける従業員に AI が生成した会話メモを提供できます。
- **組織固有のワークフローに電話サービスを拡張。** 小売業者は、Copilot Studio で作成したカスタム音声エージェントを Teams Phone に接続し、電話をかけた人が注文状況を確認したり、返品依頼を開始したりできるようにします。Teams Phone Agent からの引き継ぎでも、カスタム エージェントへの直接の電話でも利用できます。

## ライセンスと価格

Teams Phone Agent は、Copilot Credits を使った従量課金です。クレジットの消費量は、通話時間や通話中に呼び出す機能など、実際の利用状況によって異なります。Teams Phone のライセンス、適切に構成された Teams Phone のリソース アカウント、適用される課金ポリシーや支出ポリシー、その他の前提条件が必要になる場合があります。

組織は、[Copilot Credits Guide](https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/microsoft/bade/documents/products-and-services/en-us/ai/Copilot-Credits-Guide.pdf)で現在の価格と課金のガイダンスを確認し、参考用の利用量の見積もりを作成できます。実際の Copilot Credits の消費量は異なる場合があります。

## 利用を開始する

Teams Phone の管理者は、Teams 管理センターで Teams Phone Agent の計画と構成を始められます。電話をかける人に提供する前に、前提条件、ライセンス、サポートされる構成、セットアップのガイダンスを確認してください。

- [Teams Phone Agent を設定する](https://learn.microsoft.com/microsoftteams/aa-cq-setup-teams-phone-agent)
- [Copilot Studio の音声エージェントを Teams Phone Agent と統合する (プレビュー)](https://learn.microsoft.com/microsoft-copilot-studio/voice-teams-phone-agent)
- [直接ダイヤルできる Copilot Studio の音声エージェントを設定する (プレビュー)](https://learn.microsoft.com/microsoftteams/aa-cq-direct-mcs)
- [Frontier プログラムについて](https://www.microsoft.com/en-us/microsoft-365-copilot/frontier-program)

## 注記

<sup>1</sup> カスタムの Copilot Studio 音声エージェントの利用は、適用される Copilot Studio の従量課金モデルに基づいて別途課金されます。料金は、カスタム エージェントに選択した機能やオーケストレーションによって異なります。[詳細はこちら](https://learn.microsoft.com/microsoft-copilot-studio/requirements-messages-management)を確認してください。プレビューの価格、提供状況、サービスの上限は変更される可能性があります。[Frontier に参加](https://www.microsoft.com/en-us/microsoft-365-copilot/frontier-program)して、Microsoft の AI エクスペリエンスを組織で早期に利用するための方法を確認してください。
