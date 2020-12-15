import { getProgress } from './get_progress';
import { genDailyReportMessage, genScrumMessage } from './format_message';
import { sendMessage } from './send_message';
import { writeSpreadSheetLog } from './write_spreadsheet';

function sendDailyReport(): void {
  console.info("START: sendDailyReport")
  try {
    const progress = getProgress();
    const msg = genDailyReportMessage(progress);
    sendMessage(msg);
    console.info("SUCCESS: sendDailyReport: " + `message[${msg}]`)
    writeSpreadSheetLog(progress);
  } catch (e) {
    console.error(`ERROR: ${e}`)
  }
}

function sendScrumReport(): void {
  console.info("START: sendScrumReport")
  try {
    const progress = getProgress();
    const msg = genScrumMessage(progress);
    sendMessage(msg);
    console.info("SUCCESS: sendScrumReport: " + `message[${msg}]`)
  } catch (e) {
    console.error(`ERROR: sendScrumReport: ${e}`)
  }
}
