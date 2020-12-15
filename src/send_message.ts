import { config } from './config';

const sendMessage = (text: string): void => {
  if (text == "") {
    return
  }
  const payload = {
    token: config.SLACK_BOT_USER_ACCESS_TOKEN,
    channel: config.SLACK_CHANNEL_ID,
    text: text,
  }
  UrlFetchApp.fetch("https://slack.com/api/chat.postMessage", {
    payload,
    method: "post",
  })
}

export {
  sendMessage,
}
