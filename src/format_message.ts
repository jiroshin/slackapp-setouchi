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

  return `デイリーレポートの時間だよ！
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

  let doing = progress.doing.join('\n- ')
  let done = progress.done.join('\n- ')
  let doneNum = progress.done.length

  let msg = ""
  if (doneNum > 0) {
    msg = `中間報告だよ！
やっていたこと
\`\`\`
- ${doing}
\`\`\`

今日これまでに完了したこと
\`\`\`
- ${done}
\`\`\``
  } else {
    msg = `中間報告だよ！
やっていたこと
\`\`\`
- ${doing}
\`\`\``
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
