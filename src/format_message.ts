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

  return `デイリーレポートです。
${reactionMap.doing} 進めたタスク
- ${doing}
${reactionMap.done} 完了したタスク
- ${done}
${reactionMap.pr} プルリク 
- ${prs}
${reactionMap.manabi} 学びや発見
- ${manabi}
${reactionMap.memo} メモ
- ${memo}
今日も一日お疲れさまでした ${reactionMap.end}
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
    msg = `中間報告です。
やっていたこと
\`\`\`
- ${doing}
\`\`\`

今日これまでに完了したこと
\`\`\`
- ${done}
\`\`\``
  } else {
    msg = `中間報告です。
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
# 進めたタスク
- ${doing}
# 完了したタスク
- ${done}
# プルリク
- ${prs}
# 学びや発見
- ${manabi}
# メモ
- ${memo}
`
}

export {
  genDailyReportMessage,
  genScrumMessage,
  genLog,
}
