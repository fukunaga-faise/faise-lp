# 配布用URL（流入元の計測用）

/clinic や トップを人に送るときは、下のURLを使う。GA4 の「トラフィック獲得」で
「セッションの参照元 / メディア」「セッションのキャンペーン」に、どこから来たかが分かれて表示される。

- 印を付けずに送ったURLは、ほとんどが「(direct) / (none)」になり、どこから来たか分からなくなる。
- 新しい配布先を足すときは、`utm_source`（どこで）と `utm_medium`（どんな手段で）だけ変える。小文字・英数字・ハイフンで統一する。
- 美容クリニック向けは `utm_campaign=clinic`、会社紹介は `utm_campaign=company`。

## 美容クリニックの集客支援（/clinic）

| 配布先 | URL |
|---|---|
| 営業資料（PDF・スライド） | https://www.faise-inc.com/clinic?utm_source=sales-deck&utm_medium=document&utm_campaign=clinic |
| メール（営業・フォローアップ） | https://www.faise-inc.com/clinic?utm_source=email&utm_medium=email&utm_campaign=clinic |
| メール署名 | https://www.faise-inc.com/clinic?utm_source=email-signature&utm_medium=email&utm_campaign=clinic |
| LINE（個別に送る） | https://www.faise-inc.com/clinic?utm_source=line&utm_medium=social&utm_campaign=clinic |
| Instagram プロフィールのリンク | https://www.faise-inc.com/clinic?utm_source=instagram&utm_medium=social&utm_campaign=clinic |
| Instagram DM | https://www.faise-inc.com/clinic?utm_source=instagram-dm&utm_medium=social&utm_campaign=clinic |
| Facebook | https://www.faise-inc.com/clinic?utm_source=facebook&utm_medium=social&utm_campaign=clinic |
| LinkedIn | https://www.faise-inc.com/clinic?utm_source=linkedin&utm_medium=social&utm_campaign=clinic |
| X（旧Twitter） | https://www.faise-inc.com/clinic?utm_source=x&utm_medium=social&utm_campaign=clinic |
| PR TIMES のリリース本文 | https://www.faise-inc.com/clinic?utm_source=prtimes&utm_medium=pr&utm_campaign=clinic |
| 名刺・チラシの QR コード | https://www.faise-inc.com/clinic?utm_source=qr&utm_medium=offline&utm_campaign=clinic |

## 会社紹介（トップ）

| 配布先 | URL |
|---|---|
| 営業資料（PDF・スライド） | https://www.faise-inc.com/?utm_source=sales-deck&utm_medium=document&utm_campaign=company |
| メール署名 | https://www.faise-inc.com/?utm_source=email-signature&utm_medium=email&utm_campaign=company |
| LINE | https://www.faise-inc.com/?utm_source=line&utm_medium=social&utm_campaign=company |
| Instagram プロフィールのリンク | https://www.faise-inc.com/?utm_source=instagram&utm_medium=social&utm_campaign=company |
| PR TIMES のリリース本文 | https://www.faise-inc.com/?utm_source=prtimes&utm_medium=pr&utm_campaign=company |
| 名刺・チラシの QR コード | https://www.faise-inc.com/?utm_source=qr&utm_medium=offline&utm_campaign=company |

## フォームを直接開くURL

`#contact-form` を最後に付けると、ページを開いた瞬間に問い合わせフォームが開く。
例: https://www.faise-inc.com/clinic?utm_source=line&utm_medium=social&utm_campaign=clinic#contact-form

## 見方（GA4）

レポート → 集客 → トラフィック獲得 → 表のディメンションを「セッションの参照元 / メディア」または「セッションのキャンペーン」に切り替える。
問い合わせ件数は、キーイベント `generate_lead` の列で見る（2026-11-05 のテスト送信1件は除外する）。
