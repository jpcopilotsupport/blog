---
title: "Microsoft 365 Developer Program の更新: 新しいサンドボックスの選択肢とレガシ サンドボックスの提供終了"
date: 2026-11-17 11:44
tags:
  - General
editorial:
  authors:
    - tyamauch1
  type: translation
  version: "1.0.0"
  source_url: https://devblogs.microsoft.com/microsoft365dev/microsoft-365-developer-program-updates-new-sandbox-options-and-retirement-of-legacy-sandboxes/
---
※ この記事は、[Microsoft 365 Developer Program updates: new sandbox options and retirement of legacy sandboxes](https://devblogs.microsoft.com/microsoft365dev/microsoft-365-developer-program-updates-new-sandbox-options-and-retirement-of-legacy-sandboxes/) の抄訳です。最新の情報はリンク先をご確認ください。この記事は Microsoft 365 Copilot および GitHub Copilot を使用して抄訳版の作成が行われています。

[Microsoft 365 Developer Program](https://learn.microsoft.com/office/developer-program/microsoft-365-developer-program) では、利用資格のある開発者に、本番環境とは別にソリューションを構築・テストするための Microsoft 365 E5 サンドボックスを無料で提供しています。Microsoft 365 Copilot などのアドオンを追加する選択肢を含め、機能と柔軟性を高めた新しいサンドボックスの**モデル**への移行が進められています。この変更の一環として、また Microsoft 全体のサブスクリプション ポリシーに従い、レガシ サンドボックスの提供を終了します。

現在 Developer Program のサンドボックスを利用している場合は、[Developer Program ダッシュボード](https://developer.microsoft.com/microsoft-365/profile)で「Legacy sandbox」というラベルが付いているかを確認してください。ラベルが付いている場合は、新しいサンドボックスに移行する必要があります。

次の点は変わりません。

- 利用資格のある開発者向けの**開発者用サンドボックスは引き続き無料**です。
- 今回の更新によって**利用資格の要件は変わりません**。
- サンドボックスの用途は、引き続き**開発とテストのみ**です。

移行には時間がかかります。**引き続き利用資格がある場合**は、新しいサンドボックスのセットアップと作業の移行のために、新旧のサンドボックスを併用できる期間が設けられます。

**利用資格のルール**については、Microsoft Learn の「[**Microsoft 365 開発者プログラムへようこそ**](https://learn.microsoft.com/office/developer-program/microsoft-365-developer-program)」をご覧ください。

## 開発環境の柔軟性を向上

新しいサンドボックスでは、Microsoft 365 Copilot や Copilot Credits など、オプションの有料アドオンを利用できます。後に Developer Program の対象外でそのテナントを利用する場合は、利用するサービスに適した Microsoft 365 のサブスクリプションとライセンスを購入する必要があります。

**Microsoft 365 E5 開発者用サンドボックスは引き続き無料です。** セットアップ時には確認のために[課金アカウント](https://learn.microsoft.com/office/developer-program/microsoft-365-developer-program-get-started#step-2-configure-billing-details)が必要ですが、開発者用サンドボックスの料金は発生しません。有料のアドオンやサブスクリプションの購入を選択した場合にのみ、料金が発生します。新しい開発者用サンドボックスは、条件を満たす開発アクティビティに基づき、60 日ごとの更新の対象になります。

開発目的に限定するポリシーも引き続き適用されます。

> Microsoft 365 E5 開発者用サブスクリプションは開発目的専用です。開発以外の目的で利用した場合は、取り消されることがあります。詳しくは、[Microsoft 365 Developer Program の使用条件](https://learn.microsoft.com/office/developer-program/terms-and-conditions)をご覧ください。

アドオンを購入しても、無料の E5 開発者用サブスクリプションに適用されるこれらの条件は変わりません。

## 影響を受けるか確認する

影響を受けるかを確認するには、プログラムへの参加に使ったアカウントで [Developer Program ダッシュボード](https://developer.microsoft.com/microsoft-365/profile)にサインインし、**Legacy sandbox** のラベルを探してください。このラベルが付いたサブスクリプションは、Visual Studio に関連付けられているものも含め、提供終了の対象です。アドオンの購入が有効なサンドボックスは影響を受けません。Developer Program のメンバーシップも変わりません。

![Developer Program ダッシュボードの Legacy sandbox ラベル](legacy-sandbox-label.png)

*ダッシュボードのラベルで、レガシ サンドボックスとアドオンの購入が有効なサンドボックスを区別できます。*

- **引き続き利用資格がある場合:** レガシ サブスクリプションには、最後の更新として **60 日間の延長**が適用されます。適用時にはメールで通知されます。この期間中に、代わりのサンドボックスを作成する選択肢が表示され次第、できるだけ早く作成し、有効期限が切れる前に作業を移行してください。
- **利用資格がなくなった場合:** レガシ サブスクリプションは更新されず、現在の有効期間の終了時に期限切れになります。

有効期限はダッシュボードで、削除日は通知メールで確認してください。有効期限が切れると、サブスクリプションは読み取り専用になり、データ復旧のためのアクセスは管理者のみに制限されます。その後、サブスクリプションはデータとともに完全に削除され、復元できなくなります。

> **レガシ サブスクリプションを変換したり、再度延長したりすることはできません。**
>
> 代わりのサンドボックスは、新しいドメインとテナント ID を持つ新しいテナントです。レガシ サンドボックスの内容は、自動では何も移行されません。必要なものをバックアップし、レガシ サンドボックスの有効期限が切れる前に、アプリの再デプロイと必要な構成の再作成を行う計画を立ててください。

## 開発を続けるための選択肢

利用資格のある開発者は、引き続きプログラムに参加し、サンドボックスを申請できます。利用資格の要件については、「[Microsoft 365 Developer Program FAQ](https://learn.microsoft.com/office/developer-program/microsoft-365-developer-program-faq)」をご覧ください。利用資格を満たさない場合は、Microsoft 365 の試用版や[ビジネス プラン](https://www.microsoft.com/en-us/microsoft-365/business/microsoft-365-plans-and-pricing)を利用すると、ソリューションに必要なライセンスとアドオンを選択できます。

**まず、[Developer Program ダッシュボード](https://developer.microsoft.com/microsoft-365/profile)を確認してください。** サブスクリプションに **Legacy sandbox** のラベルが付いている場合は、[提供終了に関する FAQ](https://learn.microsoft.com/office/developer-program/legacy-subscription-retirement-faq)を確認し、代わりのサンドボックスの準備と移行に着手してください。
