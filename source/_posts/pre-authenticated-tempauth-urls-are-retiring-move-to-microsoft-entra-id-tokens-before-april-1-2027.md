---
title: "事前認証済み (tempauth) URL の廃止: 2027 年 4 月 1 日より前に Microsoft Entra ID トークンへ移行"
date: 2026-10-26 16:27
tags:
  - Microsoft Graph SharePoint/OneDrive
editorial:
  authors:
    - tyamauch1
  type: translation
  version: "1.0.0"
  source_url: https://devblogs.microsoft.com/microsoft365dev/pre-authenticated-tempauth-urls-are-retiring-move-to-microsoft-entra-id-tokens-before-april-1-2027/
---
※ この記事は、[Pre-authenticated (tempauth) URLs are retiring: move to Microsoft Entra ID tokens before April 1, 2027](https://devblogs.microsoft.com/microsoft365dev/pre-authenticated-tempauth-urls-are-retiring-move-to-microsoft-entra-id-tokens-before-april-1-2027/) の抄訳です。最新の情報はリンク先をご確認ください。この記事は Microsoft 365 Copilot および GitHub Copilot を使用して抄訳版の作成が行われています。

2027 年 4 月 1 日から、SharePoint Online と OneDrive は、事前認証済み URL の廃止を開始します。これは SharePoint が自ら発行したトークンを URL に直接埋め込む仕組みで、通常は `tempauth` クエリ パラメーターとして見られます。この日以降、対象の Microsoft Graph ファイル API が返す URL には、Microsoft Entra ID による認証が必要になります。Microsoft Graph を通じてファイルをダウンロード、アップロード、プレビュー、変換したり、ファイル操作を監視したりするアプリケーションでは、Microsoft Entra ID アクセス トークンへの移行を計画してください。

## 重要なポイント

対象の Microsoft Graph ファイル API が返す URL には、認可情報が埋め込まれなくなります。これまで `Authorization` ヘッダーなしで利用できた URL は、有効な Microsoft Entra ID アクセス トークンを付けて呼び出す必要があります。Microsoft Graph の代替 URL がある場合は、新しいテナント設定で管理者がアプリを対象に指定することで、すでに持っている Graph トークンでアクセスできる Microsoft Graph URL を受け取れるようになります。それ以外の場合は、SharePoint Online 用のトークンを取得して提示します。

## 背景

事前認証済み URL は、より豊かなユーザー エクスペリエンスを支えるために設計されました。SharePoint は、有効期間が短く、単一のアイテムに限定されたトークンを URL に含めて発行します。これにより、クライアントは別途認証のための往復通信を行わずに、コンテンツを取得できます。これらのトークンは短期間のみ有効で、対象も 1 つのアイテムに限定されます。

Microsoft Entra ID が発行する OAuth トークンに標準化し、認証情報を URL から完全に取り除くほうが、安全で予測しやすいモデルになります。URL は、ヘッダーに含まれるベアラー トークンとは異なる形で、ログへの記録、キャッシュ、転送、保存が行われるためです。

押さえておくべき原則は、シンプルです。

> API が返す URL にトークンが埋め込まれていたため、これまで認証なしで利用できていた場合でも、今後はリクエスト時に有効な Microsoft Entra ID アクセス トークンを提示して、その URL にアクセスする必要があります。

つまり、URL 自体は認可情報を持たず、`Authorization` ヘッダーを通じて認可が適用されます。トークンは Microsoft Entra ID によって発行され、適切な対象リソースに限定されます。

## スケジュール

- **現在:** Microsoft Graph URL を受け取るためのオプトイン用テナント設定を利用できます。変更に先立って、新しい動作でアプリを検証できます。
- **2027 年 4 月 1 日:** 動作の変更が始まります。対象 API は、事前認証済み URL への 302 リダイレクトを返さなくなります。また、レスポンス本文で返される SharePoint Online URL には、`tempauth` トークンが含まれなくなります。

## 影響を受けるかどうかを確認する

アプリが次の Microsoft Graph API のいずれかを呼び出している場合は、現在、事前認証済み URL を使用しています。`Authorization` ヘッダーなしで URL を利用できていたため、気付いていないこともあります。

- [ファイルのダウンロード](https://learn.microsoft.com/graph/api/driveitem-get-content)
- [driveItem: createUploadSession](https://learn.microsoft.com/graph/api/driveitem-createuploadsession)
- [長時間実行されるアクションの操作](https://learn.microsoft.com/graph/long-running-actions-overview) (コピーと監視)
- [driveItem: preview](https://learn.microsoft.com/graph/api/driveitem-preview)
- [ファイルまたはフォルダーのサムネイルの取得](https://learn.microsoft.com/graph/api/driveitem-list-thumbnails)
- [ほかの形式への変換](https://learn.microsoft.com/graph/api/driveitem-get-content-format)

典型的な事前認証済み URL は、次のようなものです。

```text
https://<tenant>.sharepoint.com/sites/samplesite/_layouts/15/download.aspx?UniqueId=<id>&tempauth=v1.ey...
```

現在、これらの API には 2 つのパターンがあり、それぞれ動作が異なる形で変わります。

| パターン | 現在の動作 | 変更内容 |
|---|---|---|
| **リダイレクト** | API が、有効期間の短い事前認証済み URL への 302 リダイレクトを返します。この URL には `Authorization` ヘッダーが不要です。 | 302 リダイレクトは返されなくなります。アプリはリダイレクトを捕捉したり、それに依存したりせず、コンテンツを直接受け取る必要があります。 |
| **レスポンス本文に含まれる URL** | API が、有効期間の短い事前認証済み URL をレスポンス本文で返します。この URL は `Authorization` ヘッダーなしで呼び出せます。 | 本文内の SharePoint URL は、事前認証済みではなくなります。SharePoint 用の Microsoft Entra ID アクセス トークンを含む、有効な `Authorization` ヘッダーが必要です。 |

### 監査チェックリスト

コード内で、次のものを探してください。

- Graph のレスポンスから `tempauth=`、`access_token=`、`uploadUrl`、`getUrl`、`@microsoft.graph.downloadUrl`、監視用 URL を読み取り、その後、`Authorization` ヘッダー**なしで**アクセスするコード
- これらの呼び出しで `allowAutoRedirect = false` を設定している HTTP クライアントや、`Location` ヘッダーを調べるロジック
- 返された URL を、長く使えるアクセス手段であるかのように永続化する箇所。キューへの追加、データベースへの保存、メールでの送信、別サービスへの受け渡し、ブラウザーへの引き渡しなどが該当します。

## 今後の対応方法

現在サポートされているアクセス先は 1 つで、もう 1 つの選択肢も近く導入されます。多くのアプリでは、両方を使うことになります。

### 方法 A: Microsoft Entra ID トークンで SharePoint Online を直接呼び出す

Graph の代替 URL がない場合、返されるのはトークンを含まない通常の SharePoint Online URL です。そのホスト用の Microsoft Entra ID アクセス トークンを取得し、`Authorization` ヘッダーで提示します。

多くのフローでは、2 種類のトークンを使うようになります。1 つは、すでに行っている Graph API の呼び出しに使う Microsoft Graph トークンです。もう 1 つは、新たに必要になる、返された SharePoint URL へのアクセス用の SharePoint トークンです。

| 呼び出し先 | 対象リソース (audience) |
|---|---|
| Microsoft Graph API | `https://graph.microsoft.com` |
| SharePoint Online のコンテンツ URL | `https://{tenant}.sharepoint.com` |

ユーザーが開始するシナリオには委任アクセス トークンを、バックグラウンドやサービスのシナリオにはアプリ専用アクセス トークンを使います。Microsoft Entra ID のアプリ登録に、`Files.Read` や `Files.ReadWrite` などの Microsoft Graph のアクセス許可と、同じ操作に対応する SharePoint Online のアクセス許可が含まれていることを確認してください。

### 方法 B: Microsoft Graph URL を引き続き使う (今後の Microsoft SharePoint Online PowerShell バージョンで提供予定)

移行を容易にするために、SharePoint 管理者が特定のアプリケーションを対象に指定し、SharePoint Online やメディア サービスの URL の代わりに Microsoft Graph URL を受け取れるようにする、新しいテナント設定が提供される予定です。この設定が適用される場合、アプリはすでに持っている Microsoft Graph アクセス トークンを使い続けられます。2 つ目のトークンも、新しい対象リソースも必要ありません。

この設定は、SharePoint Online Management Shell の既存の事前認証用コマンドレットを通じて、`-UseGraphUrl*` スイッチ群として公開される予定です。

- **現在の構成を確認します。** [`Get-SPOTenantPreAuthSettings -UseGraphUrlSettings`](https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/get-spotenantpreauthsettings#-usegraphurlsettings) を実行し、機能が有効かどうかと、対象のアプリ ID を確認します。
- **まず、対象を絞ったアプリの一覧で有効にします。** [`Set-SPOTenantPreAuthSettings`](https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-spotenantpreauthsettings) に [`-UseGraphUrlIsEnabled`](https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-spotenantpreauthsettings#-usegraphurlisenabled) と [`-UseGraphUrlAppsList`](https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-spotenantpreauthsettings#-usegraphurlappslist) を指定すると、特定のアプリ ID を対象にできます。対象を広げる前に、互換性を検証できます。アプリの一覧を空にすると、*すべての*サードパーティ アプリに適用されるため、テナントを評価した後にのみ使用してください。
- **無効にします。** `-UseGraphUrlIsEnabled $false` を設定します。

テスト前に、適用範囲と優先順位に関する次のルールを押さえておいてください。

- 設定が適用されるのは、サードパーティ アプリケーションのみです。
- Microsoft Graph URL の代替が**ある**対応 API では、事前認証済みではない Microsoft Graph URL がレスポンスに含まれます。呼び出し元は、Microsoft Graph アクセス トークンを使ってアクセスする必要があります。
- Microsoft Graph URL の代替が**ない** API では、全体的な廃止によってトークンが取り除かれるまでは、事前認証済みの SharePoint Online URL が引き続きレスポンスに含まれます。これらには、方法 A で対応する計画を立ててください。
- Microsoft Graph を経由しないリクエストには、この設定は影響しません。SharePoint (Vroom) API を直接呼び出している場合、このテナント設定は適用されません。Graph URL が返されるのは、元のリクエストが Graph を経由した場合に限られます。

## 具体例

### アップロード セッション

これまでは、`createUploadSession` が `tempauth` トークンを含む `uploadUrl` を返し、チャンクは認可ヘッダーなしでアップロードしていました。

```text
POST /drives/{drive-id}/items/{parent-id}:/{filename}:/createUploadSession
```

```text
{ "uploadUrl": "https://...&tempauth=..." }
```

```text
PUT {uploadUrl}
```

変更後は、同じ呼び出しから通常の SharePoint Online URL が返されます。`uploadUrl` のホスト名用のトークン (例: `https://{tenant}.sharepoint.com`) を取得し、チャンクごとに提示してください。

```text
{ "uploadUrl": "https://{tenant}.sharepoint.com/..." }
```

```text
PUT {uploadUrl}
Authorization: ****** Online access token}
```

### サムネイル

これまでは、サムネイルのコンテンツを要求すると、リダイレクト先 URL に `tempauth=...` を含む HTTP 302 が返され、その後、`Authorization` ヘッダーなしでサムネイルを取得していました。

変更後は、リダイレクトを追跡する必要がなく、同じ Graph トークンを使った 1 回のリクエストでサムネイルを取得できます。

```text
GET /drives/{drive-id}/items/{item-id}/thumbnails/0/{size}/content
Authorization: ****** Graph access token}
```

引き続き Microsoft Graph エンドポイントを使い、リクエストで Microsoft Entra ID トークンを使用していることを確認してください。未認証の URL を前提とする、リダイレクトに依存したアクセスは避けてください。

### プレビュー

これまでは、`preview` が事前認証トークンを含む `getUrl` を返していたため、`Authorization` ヘッダーなしで呼び出していました。

```text
POST /drives/{driveId}/items/{itemId}/preview
```

```text
{
  "getUrl": "https://www.onedrive.com/embed?foo=bar&bar=baz",
  "postParameters": "param1=value&param2=another%20value",
  "postUrl": "https://www.onedrive.com/embed_by_post"
}
```

呼び出しとレスポンスの形式は変わりませんが、`getUrl` は通常の SharePoint URL になり、`Authorization` ヘッダーを付けて呼び出す必要があります。

```text
GET {getUrl}
Authorization: ****** Online access token}
```

### driveItem のダウンロード URL

これまでは、`driveItem` のレスポンスに、事前認証済みの `@content.downloadUrl` が含まれていました。

```text
{
  "@content.downloadUrl": "https://{tenant}.sharepoint.com/...?tempauth=.."
}
```

テナントの SharePoint 管理者が、将来の SharePoint Online PowerShell リリースで Microsoft Graph URL の機能を有効にすると、`@content.downloadUrl` は Microsoft Graph の `contentStream` URL になります。`Authorization` ヘッダーと、Microsoft Graph 用の Microsoft Entra ID アクセス トークンを付けて呼び出します。

```text
GET {@content.downloadUrl}
Authorization: ****** Graph access token}
```

API ごとの動作の対応表 (Graph URL を返す API、SharePoint URL から tempauth トークンを除去する API、302 リダイレクトを返さなくなる API) は、[Set-SPOTenantPreAuthSettings の「Expected API behavior」](https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-spotenantpreauthsettings)で管理される予定です。

## 事前認証全体の制御

Graph URL の設定は、同じコマンドレット群にある既存の事前認証制御と並んで提供される予定です。管理者は、これらの制御を使ってテナント全体の事前認証を無効にし、アプリや機能ごとに細かい例外を設定できます。開発者にとって重要なのは、次の 2 点です。

- **Deny は Allow より優先されます。** アプリが許可リストと拒否リストの両方にある場合は、許可されません。[優先順位](https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-spotenantpreauthsettings#description) (Deny、Allow、IsDisabled の順) を確認してください。
- **例外は機能単位です。** `Download`、`UploadSession`、`Thumbnail` など、機能ごとに事前認証を許可または拒否できます。あるテナントでアプリが動かなくなった場合は、そのアプリ ID について、現在どの機能が許可されているかを管理者に確認してください。多くの場合、それが最も速い原因の切り分けになります。[機能の全一覧](https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-spotenantpreauthsettings#notes)も確認してください。

## 移行方法

アプリケーションの開発者や ISV ソリューションの提供者は、次の対応を行ってください。

1. 上で挙げた 6 系統の API に関係する、すべての呼び出し箇所を洗い出します。
2. 302 リダイレクトに関する前提をすべて取り除きます。リダイレクトの捕捉をやめ、HTTP クライアントがコンテンツを直接受け取れることを確認します。
3. 既存の Graph トークンの取得処理に加えて、SharePoint Online 用のトークン (対象リソースは `https://{tenant}.sharepoint.com`) の取得処理を追加します。アプリ登録にも SharePoint Online のアクセス許可を追加します。
4. 返された URL を、長く使えるアクセス手段として扱わないでください。後でアクセスするために保存、転送、キューへの追加を行わず、代わりに、標準の OAuth ガイダンスに従って Microsoft Entra ID トークンをキャッシュします。
5. 可能な場合は、`driveItem/contentStream` を優先して使います。これは、すでに tempauth やリダイレクトなしでコンテンツを直接返しており、今回の変更による影響を受けません。
6. アプリ ID のみを対象に設定を有効にしたテスト テナントで検証します。
7. 2027 年 4 月 1 日より十分前に、更新後の最小バージョンに関する案内を顧客に公開します。

SharePoint Online テナントの管理者は、次の対応を行ってください。

1. `Get-SPOTenantPreAuthSettings` を実行して、現在の状態を確認します。
2. Microsoft Graph を通じて、ファイル、バージョン、サムネイル、プレビュー、アップロード セッション、コピー操作の URL を取得するアプリケーションを特定します。
3. これらのアプリケーションが、一時的な認証情報を含む URL を調査、保存、または個別に利用していないか確認します。
4. まず、限られたアプリケーション ID を対象に設定を有効にします。
5. アプリケーションの動作と、サインインの失敗を監視します。
6. 検証が完了したら、設定の対象を広げます。

これらの設定は、本番テナントの機能を無効にする可能性があるため、すべての変更を、まずテスト テナントで評価してください。

組織が対象 API を使っていない場合や、アプリケーションがすでに標準の Microsoft Entra ID 認証で Microsoft Graph のコンテンツ エンドポイントに直接アクセスしている場合は、対応は不要です。

## 詳細情報

- [Set-SPOTenantPreAuthSettings](https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-spotenantpreauthsettings)
- [Get-SPOTenantPreAuthSettings](https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/get-spotenantpreauthsettings)
- [Clear-SPOTenantPreAuthSettings](https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/clear-spotenantpreauthsettings)
- [Microsoft ID プラットフォームの OAuth 2.0 と OpenID Connect プロトコル](https://learn.microsoft.com/entra/identity-platform/v2-protocols)
