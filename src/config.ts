const getScriptProperty = (key: string): string => {
  const property = PropertiesService.getScriptProperties().getProperty(key);
  if (!property) throw Error("property is not found.");
  return property;
}

// Google Apps Scriptのプロパティに値を設定して下さい
const config = {
  SLACK_BOT_USER_ACCESS_TOKEN: getScriptProperty("SlackBotUserAccessToken"),
  SLACK_BOT_USER_ID: getScriptProperty("SlackBotUserID"),
  SLACK_CHANNEL_ID: getScriptProperty("SlackChannelID"),
  SLACK_MY_USER_ID: getScriptProperty("SlackMyUserID"),
  GOOGLE_SPREAD_SHEET_ID: getScriptProperty("GoogleSpreadSheetID"),
  GOOGLE_SPREAD_SHEET_SHARING_URL: getScriptProperty("GoogleSpreadSheetSharingUrl")
}

// reactionはslack workspaceに合わせて自由に変えて下さい
const reactionMap = {
  done: ":done:",
  doing: ":doing:",
  manabi: ":manabi:",
  memo: ":memo:",
  pr: ":pr:",
  end: ":otsukare:"
}

export {
  config,
  reactionMap,
}
