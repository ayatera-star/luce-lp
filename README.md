# Luce｜サロンLP・Instagram用リンク集 完成版

- `index.html`：サロンLP
- `links.html`：Instagramプロフィール用リンク集
- `config.js`：予約窓口・外部リンク・写真の設定

## 予約とリンク設定

現在の予約窓口はInstagram DMです。`instagramUrl` にLuceのプロフィールURLまたはDMのHTTPS URLを設定してください。未設定の場合は、元のInstagramプロフィールの「メッセージ」から連絡する案内を表示します。無関係なアカウントへは移動しません。

LINE開設後は `lineUrl` を設定し、`bookingChannel` を `'line'` に変更します。施術・セルフケアレッスン・お問い合わせのCTAが両ページとも切り替わります。リンク集の公式LINEカードは `lineUrl` 設定後に有効になります。

`links.selfcare`・`links.aquabank`・`links.sim`・`links.kyosai` に各URLを設定してください。空欄やHTTPS以外のURLは有効化されません。未設定カードは押せない準備中表示です。施術メニューは既存LPの料金表へ移動します。

## 表示

本文18px、補足14〜16pxを基本に調整。既存の配色、写真、全9セクションを維持しています。幅320・390・768・1440pxで横はみ出し、FAQ、DM/LINE切り替え、空URL・不正URLを検証しています。

Sitesの確認用サイトは所有者専用です。このリポジトリへの保存は、Webサイトの一般公開とは別です。一般公開は依頼者の承認後に行ってください。GitHub Pagesや自動デプロイの設定・ワークフローは含めていません。

## 通信費の見直し：紹介URLの変更

`config.js` の `links.sim` のURLだけを変更してください。ご家族の紹介URLを、紹介用パラメータごとそのまま貼り付けます。見出し「通信費の見直し」、リンク集のURL、CSS、項目の順番、他のボタンは変更されません。自動ローテーションはせず、設定した1つのURLを使用します。空欄または不正なURLは準備中になります。

## 含まれるファイル

- `index.html`：全9セクションのサロンLP。施術メニュー・料金・FAQ・セラピスト紹介を含みます。
- `links.html`：Instagramプロフィール用リンク集「Luce | Links」。
- `style.css`・`links.css`：LPとリンク集のデザイン。
- `script.js`・`links.js`：予約導線・外部リンク設定の反映・表示アニメーション。
- `config.js`：Instagram・LINE・外部リンクの設定。紹介パラメータは維持しています。
- `assets/aya-portrait.jpg`：本人プロフィール写真。PC240px・スマホ180pxの円形表示。
- `assets/salon.webp`：サロンのイメージ画像（AI生成）。

GitHubに先にアップロードされた元のJPGも残しています。

## ローカルで確認する

インストールやビルドは不要です。リポジトリをダウンロードして `index.html` または `links.html` をブラウザで開いてください。Pythonが利用できる場合は、プロジェクトのフォルダで次を実行することもできます。

```sh
python3 -m http.server 8080
```

LP：`http://localhost:8080/`、リンク集：`http://localhost:8080/links.html`

## ご注意

共済の登録ボタンは協会倶楽部の登録フォームに移動します。共済契約が直接完了する案内はしていません。紹介リンクの説明をリンク集に掲載しています。LINEは未開設のため準備中です。

完成版はSitesで確認したファイルをそのまま保存しています。外部ページの表示完了については、確認環境の通信制限により未確認のものがあります。
