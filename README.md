# setouchi(セトウチさん)
<img align="right" width="200" src="https://github.com/jiroshin/slackapp-setouchi/blob/master/setouchi-image.png?raw=true">
ガオガオッ！ガブッ！セトウチさん(SlackApp)の本体。  
セトウチさんはGoogle Apps Scriptで動きます。

# セトウチさんができること
### まずは自分がSlackへ実況投稿
自分が『やっていること,やったこと,プルリクエスト,学び,メモ』をオンタイムでSlackに投稿します。  
※投稿に使うSlackリアクションは`src/config.ts`でカスタマイズできます。  
![image-post](https://github.com/jiroshin/slackapp-setouchi/blob/master/post-example.png?raw=true)  

### 中間報告
トリガーを設定した任意の時間に今日の作業の中間報告をしてくれます。  

### デイリーレポートと月間ログ
1日の最後にはその日のまとめをデイリーレポートとして報告してくれます。  
![image-daily-report](https://github.com/jiroshin/slackapp-setouchi/blob/master/daily-report.png?raw=true)  
デイリーレポートは毎日SpreadSheet(月間ログ)に追記してくれるので過去のデイリーレポートも管理することができます。
![image-monthly-log](https://github.com/jiroshin/slackapp-setouchi/blob/master/monthly-log.png?raw=true)  

# 使い方
## 1. Slack App, GAS, SpreadSheetを準備
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

## 2. Google Apps Scriptをデプロイする

※clasp の準備はこちら
『[GAS用のCLIツール clasp を使ってGASをローカルで開発して実行するの巻。](https://qiita.com/jiroshin/items/dcc398285c652554e66a#%E3%83%AD%E3%83%BC%E3%82%AB%E3%83%AB%E7%92%B0%E5%A2%83%E3%81%A7%E5%BF%AB%E9%81%A9%E3%81%AAgas%E9%96%8B%E7%99%BA%E3%82%92%E8%A1%8C%E3%81%86%E6%89%8B%E9%A0%86)』

はじめだけ下記のコマンドで下準備。
```
$ git clone https://github.com/jiroshin/slackapp-setouchi.git
$ npm init -y
$ npm install -D @google/clasp @types/google-apps-script
```

いざ、デプロイ。
```
$ export $GAS_ID={GASのスクリプトID} && make gas-deploy
```

GASのスクリプトIDはGASエディターを開いた時のURLから確認できます。  
`https://script.google.com/home/projects/xxxxxxxxxxxxxxxxx/edit`
「xxxxxxxxxxxxxxxxx」の部分がスクリプトIDです。  

## 3. Google Apps Scriptのプロパティに値を設定する
GASのプロパティに以下の値をそれぞれセットして下さい。
```
SlackBotUserAccessToken
SlackBotUserID
SlackChannelID
SlackMyUserID
GoogleSpreadSheetID
GoogleSpreadSheetSharingUrl
```

## 4. トリガーをセットする
GASのブラウザエディタから `sendDailyReport()` `sendScrumReport()` の実行トリガーを任意の時間で自由にセットして下さい。
