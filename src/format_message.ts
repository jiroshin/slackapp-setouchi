import { progress } from './get_progress';
import { reactionMap } from './config';

const genDailyReportMessage = (progress:progress): string => {
  if (progress.doing.length == 0 && 
      progress.done.length == 0 && 
      progress.manabi.length == 0 && 
      progress.memo.length == 0 && 
      progress.pr.length == 0
     ) { return "" }

  let doing = progress.doing.join('\n- ')
  let done = progress.done.join('\n- ')
  let manabi = progress.manabi.join('\n- ')
  let memo = progress.memo.join('\n- ')
  let prs = progress.pr.join('\n- ')

  return `うぉおお！ガブッ！デイリーレポートの時間だよ (･ω･っ)З
${reactionMap.doing} 今日進めたタスク
- ${doing}
${reactionMap.done}今日完了したタスク
- ${done}
${reactionMap.pr} Pull Requests
- ${prs}
${reactionMap.manabi} 今日の学び
- ${manabi}
${reactionMap.memo} メモ・リマインド・あしたのTodo
- ${memo}
今日も一日 ${reactionMap.end} (･ω･っ)З
`
}

const genScrumMessage = (progress:progress): string => {
  if (progress.doing.length == 0 && 
      progress.done.length == 0 && 
      progress.manabi.length == 0 && 
      progress.memo.length == 0 && 
      progress.pr.length == 0
     ) { return "" }

  let doing = progress.doing.join(' と ')
  let done = progress.done.join(' と ')
  let doneNum = progress.done.length
  let manabi = progress.manabi.join(' と ')
  let manabiNum = progress.manabi.length
  let memo = progress.memo.join('\n- ')
  let memoNum = progress.memo.length

  let msg = ""
  if (doneNum > 0 && manabiNum > 0) {
    msg = `|ω・）3 チラッ！ もうすぐDSだよ！！
今日のDSではこれを言えば良さそう
(^o^)/ < 今日は「${doing}」をやってました。「${done}」は終わったので良かったです。あ、そういえば今日は「${manabi}」という学びもありました！
`
  } else if (doneNum > 0) {
    msg = `|ω・）3 チラッ！ もうすぐDSだよ〜〜
今日のDSではこれ言っとこう!
(-o-)/ < 今日は「${doing}」をやってました。「${done}」は終わったので良かったです。
`
  } else {
    msg = `|ω・）3 チラッ！ もうすぐDSだよ〜
今日のDSではこれ言っとこう!
(-m-)/ < 今日は「${doing}」をやってました。
`
  }

  if (memoNum > 0) {
    msg = msg + `
↓これも必要あれば言っとこう。
- ${memo}
`
  }

  return msg
}

const genLog = (progress:progress): string => {
  if (progress.doing.length == 0 && 
      progress.done.length == 0 && 
      progress.manabi.length == 0 && 
      progress.memo.length == 0 && 
      progress.pr.length == 0
     ) { return "" }

  let doing = progress.doing.join('\n- ')
  let done = progress.done.join('\n- ')
  let manabi = progress.manabi.join('\n- ')
  let memo = progress.memo.join('\n- ')
  let prs = progress.pr.join('\n- ')

  return `
# 着手したタスク
- ${doing}
# 完了したタスク
- ${done}
# Pull Requests
- ${prs}
# 今日の学び
- ${manabi}
# メモ・リマインド・あしたのTodo
- ${memo}
`
}

export {
  genDailyReportMessage,
  genScrumMessage,
  genLog,
}
