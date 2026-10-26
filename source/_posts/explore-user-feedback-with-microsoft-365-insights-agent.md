---
title: "Microsoft 365 Insights Agent で利用者のフィードバックを確認する"
date: 2026-10-26 16:00
cover: cover.png
tags:
  - Agent
editorial:
  authors:
    - tyamauch1
  type: translation
  version: "1.0.0"
  source_url: https://techcommunity.microsoft.com/blog/microsoft-copilot-blog/explore-user-feedback-with-microsoft-365-insights-agent/4565981
---
※ この記事は、[Explore user feedback with Microsoft 365 Insights Agent](https://techcommunity.microsoft.com/blog/microsoft-copilot-blog/explore-user-feedback-with-microsoft-365-insights-agent/4565981) の抄訳です。最新の情報はリンク先をご確認ください。この記事は Microsoft 365 Copilot および GitHub Copilot を使用して抄訳版の作成が行われています。

作成したエージェントが使われ始めると、利用者の体験が、次に何をするかを考える重要な手がかりになります。利用状況から、エージェントの利用が広がっているかはわかりますが、改善方法を決めるには、アクティブ ユーザー数だけでは不十分です。利用者が何を便利だと感じ、どの点を変えてほしいと考えているのかを理解する必要があります。

そこで役立つのがフィードバックです。**高評価**や**低評価**は手がかりとなり、**自由記述コメント**はその背景を補ってくれます。寄せられた回答をまとめて確認することで、変更する箇所を選び、テストし、その後の利用者の声から学べます。こうした取り組みを、**エージェントを継続的に改善する**方法の一部として続けることに価値があります。

**Microsoft 365 Insights Agent** は、送信されたフィードバックを Microsoft 365 Copilot Chat (Copilot Chat) の会話で確認できるようにします。エージェントの所有者は、評価や自由記述コメントについて質問したり、繰り返し現れるテーマを調べたりできます。ここで紹介するフィードバック機能は、既存の利用状況分析のリリースではなく、早期アクセス プレビューである **Insights Agent V2 (Frontier)** の一部です。

Frontier の機能は変更される可能性があり、利用できるかどうかは、組織の構成と機能の要件によって決まります。プレビューを試す前に、管理者と一緒に [Microsoft Frontier プログラムの要件](https://learn.microsoft.com/microsoft-365/admin/manage/get-started-frontier?view=o365-worldwide)を確認してください。

## 管理者の制御の下で、作成者にフィードバックを共有

この改善サイクルを機能させるには、作成者が自分のエージェントに関するフィードバックにアクセスできる必要があります。IT 管理者は、フィードバック共有を有効にし、対象となるエージェントを決めることで、これを可能にします。

Microsoft 365 管理センターで、**Agents > Settings > Agent feedback sharing** に移動します。組織の要件に合わせて共有を許可する場合は **All agents** または **Selected agents** を、共有を無効にする場合は **No agents** を選択します。**Selected agents** を選んだ場合は、フィードバックを共有するエージェントを選択します。**Save** を選択すると、設定が適用されます。

[エージェントのフィードバック共有に関するガイダンス](https://learn.microsoft.com/microsoft-365/admin/manage/agent-settings?view=o365-worldwide#agent-feedback-sharing)で、設定の適用範囲と、利用者による評価や自由記述コメントの送信との関係を確認してください。

## 利用者の声を出発点に

Frontier プレビューにアクセスでき、所有しているエージェントについて管理者が共有を有効にしている場合は、Copilot Chat を開きます。エージェントの選択画面で **Insights Agent V2 (Frontier)** を検索し、**Add** を選択します。

まず、所有しているエージェントへの自由記述コメントを確認します。次のプロンプト例では、[Agent Name] を、そのエージェントの名前に置き換えてください。

*[Agent Name] に寄せられた最近の自由記述コメントを表示してください。*

次に、特定の期間の評価について質問します。

*今週、[Agent Name] には高評価と低評価がそれぞれ何件寄せられましたか?*

Insights Agent は回答件数と対象期間を示すため、表示された内容の背景を把握できます。フィードバック全体で繰り返し現れる指摘を探すには、次のように質問します。

*[Agent Name] のフィードバックのテーマを要約してください。*

要約を出発点にしつつ、何を変更するかを決める前に、元の自由記述コメントもあわせて確認してください。テーマの要約は AI が生成したまとめであり、フィードバックそのものを読む代わりにはなりません。

たとえば、複数の自由記述コメントで回答がわかりにくいと指摘されている場合は、関連する指示やナレッジを見直し、変更を加えて結果をテストできます。

![Contoso HR Agent のフィードバック 26 件について、評価、製品に関するテーマ、改善の推奨事項を Insights Agent が要約している Microsoft 365 Copilot Chat の画面](feedback-summary.png)

## 利用の広がりを把握

フィードバックからは、利用者が共有することを選んだ内容がわかります。利用状況分析では、どのエージェントが使われ、テナント全体で利用の広がりがどう変化しているかという、別の視点が得られます。

まずは全体を見渡す質問から始めます。

*今週、最もよく使われているエージェントはどれですか?*

![エージェントのパフォーマンス、利用状況、利用の広がりの傾向について、自然言語のプロンプト候補を示す Insights Agent のチャット画面](usage-prompts.png)

次に、あるエージェントの傾向を調べたり、別のエージェントと比較したりします。[Agent Name]、[Agent A]、[Agent B] は、アクセスできるエージェントの名前に置き換えてください。

*[Agent Name] の週次アクティブ ユーザー数は、どのように推移していますか?*

*[Agent A] と [Agent B] の利用の広がりを比較してください。*

Insights Agent は、対応する指標を根拠となる数値とともに返します。日次、週次、月次のアクティブ ユーザー数、ユニーク ユーザー数の推移、利用の拡大、エージェント間の比較などが含まれます。また、日次アクティブ ユーザー数を月次アクティブ ユーザー数で割った、定着度についても質問できます。

![週ごとの上位エージェントのランキングと、あるエージェントの WAU、会話数、クエリ数、DAU、MAU などの詳細な利用指標を示す Insights Agent の 2 つの回答](agent-usage-metrics.png)

管理者は、利用の広がりを評価したり、展開を検討したりする際に、これらの手がかりを、組織のほかの根拠や要件とあわせて判断材料の 1 つにできます。

ここで紹介した利用状況の質問は、アクティブ ユーザー数と利用の広がりの傾向に焦点を当てています。利用状況だけを品質や事業上の価値の尺度とせず、フィードバックとあわせて読み取ってください。

![ユーザーあたりのクエリ数、ユーザーあたりの会話数、会話あたりのクエリ数、DAU・WAU・MAU の比較から、利用の深さを示す Insights Agent の 2 つの分析](engagement-analysis.png)

セットアップと利用例は、[Microsoft 365 Insights Agent のクイックスタート](https://learn.microsoft.com/microsoft-365/copilot/extensibility/insights-agent-quickstart)をご覧ください。

## 次の改善にフィードバックを取り入れる

**IT 管理者:** [Microsoft Frontier プログラムの要件](https://learn.microsoft.com/microsoft-365/admin/manage/get-started-frontier?view=o365-worldwide)と、組織のフィードバック共有ポリシーを確認し、適切なエージェントで Agent feedback sharing を有効にしてください。

![Microsoft 365 管理センターを開き、Agents、Settings、Agent feedback sharing、All agents、Save の順に選択して、すべてのエージェントのフィードバック共有を有効にする 6 段階の手順](feedback-sharing-settings.png)

![Agent feedback sharing の変更が正常に保存されたことを示す Microsoft 365 管理センターの確認メッセージ](feedback-sharing-saved.png)

**作成者とエージェントの所有者:** プレビューの利用条件を満たしている場合は、管理者と調整し、Insights Agent V2 (Frontier) を追加して、所有するエージェントのフィードバックを調べてください。調べる領域を 1 つ選び、変更をテストし、その後のフィードバックを確認します。Agent Builder を使っている場合は、[エージェントの作成と改善に関するガイド](https://learn.microsoft.com/microsoft-365/copilot/extensibility/agent-builder-build-agents)で、指示やナレッジを更新して変更を試す方法を確認できます。

利用状況分析については、[Insights Agent のドキュメント](https://aka.ms/insights-agent-docs)をご覧ください。フィードバック機能は、**変更される可能性がある、早期アクセスの Frontier プレビュー**です。アクセスできるかどうかは、組織の構成と機能の要件によって決まります。[https://aka.ms/InsightsAgentFrontier](https://aka.ms/InsightsAgentFrontier) は、自分がプレビューの利用条件を満たしていることと、リンク先がここで紹介したプレビュー リリースであることを管理者が確認した後にのみ利用してください。問題を見つけた場合は、[課題トラッカー](https://aka.ms/insights-agent-issue-tracker)で報告してください。
