import { config } from './config';
import { progress } from './get_progress';
import { genLog } from './format_message';
import { sendMessage } from './send_message';
import { getYearMonth, getMonthDate } from './util';

const writeSpreadSheetLog = (progress: progress):void => {
  try {
    console.info("START: writeSpreadSheetLog")
    const ssApp = SpreadsheetApp.openById(config.GOOGLE_SPREAD_SHEET_ID);
    const targetSheetName = getYearMonth()
    let sheet = ssApp.getSheetByName(targetSheetName)
    if (!sheet) {
      sheet = ssApp.insertSheet(targetSheetName, 0,{ template: ssApp.getSheetByName("log_sheet_template") })
    }
    const targetColumnName = getMonthDate()
    const lastColumn = sheet.getLastColumn()
    const log = genLog(progress)
    if (log == "") {
      console.info("SUCCESS: writeSpreadSheetLog: Log is Empty.")
      return
    }
    sheet.getRange(1, lastColumn+1).setValue(targetColumnName);
    sheet.getRange(2, lastColumn+1).setValue(log);
    const shareUrl = config.GOOGLE_SPREAD_SHEET_SHARING_URL
    sendMessage(`月間ログも追記しておいたよ！
${shareUrl}
`);
    console.info("SUCCESS: writeSpreadSheetLog: " + `log[${log}]`)
  } catch (e) {
    console.error(`ERROR: writeSpreadSheetLog: ${e}`)
  }
}

export {
  writeSpreadSheetLog,
}
