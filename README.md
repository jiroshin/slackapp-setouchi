# setouchi
<img align="right" width="200" src="">
ガオガオッ！ガブッ！セトウチさん(SlackApp)の本体。
セトウチさんはGoogle Apps Scriptで動きます。

# できること

# 使い方
## 1. Slack AppとGoogle Apps Scriptプロジェクトを準備
### Slack App
下記の権限を付与したSlack Appを作成して任意のワークスペースにインストールして下さい。
```
channels:history
chat:write
```
次に、ワークスペースにインストールしたSlack Appを任意のチャンネルに追加して下さい。

### Google Apps Scriptプロジェクトを準備
ブラウザでポチポチと新しいGASプロジェクトを作って下さい。

### Google Spread Sheetを準備
ブラウザでポチポチと新しいSpread Sheetを作って下さい。

## 2. Google Apps Scriptのプロパティに値を設定する
GASのプロパティに以下の値をそれぞれセットして下さい。
```
SlackBotUserAccessToken
SlackBotUserID
SlackChannelID
SlackMyUserID
GoogleSpreadSheetID
GoogleSpreadSheetSharingUrl
```

## 3. Google Apps Scriptをデプロイする
はじめだけ下記のコマンドで下準備。
```
$ npm init -y
$ npm install -D @google/clasp @types/google-apps-script
```

いざ、デプロイ。
```
$ export $GAS_ID={GASのスクリプトID} && make gas-deploy
```

## 4. トリガーをセットする
GASのオンラインエディタから `sendDailyReport()` `sendScrumReport()` の実行トリガーを自由にセットして下さい。
