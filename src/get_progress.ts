import { config, reactionMap } from './config';

type progress = {
  doing: string[];
  done: string[];
  manabi: string[];
  memo: string[];
  pr: string[];
}

const getProgress = (): progress => {
  const payload = {
    token: config.SLACK_BOT_USER_ACCESS_TOKEN,
    channel: config.SLACK_CHANNEL_ID, limit: "400" }

  const res = UrlFetchApp.fetch("https://slack.com/api/conversations.history", {
    payload,
    method: "get",
  })

  const resJson = JSON.parse(res.getContentText())
  const messages = resJson.messages

  let progress: progress = {doing: [], done: [], manabi: [], memo: [], pr: []};
  for (let i = 0; i < messages.length; i++) {
    const msg = messages[i]
    if (msg.user == config.SLACK_BOT_USER_ID && msg.text.includes(reactionMap.end)) {
      break;
    }
    if (msg.user != config.SLACK_MY_USER_ID) {
      continue;
    }
    for (let key in reactionMap) {
      if (msg.text.includes(reactionMap[key])) {
        if (key == "end") {
          continue;
        }
        progress[key].push(msg.text.replace(`${reactionMap[key]}`, ''))
      }
    }
  }
  return progress
}

export {
  progress,
  getProgress,
}
