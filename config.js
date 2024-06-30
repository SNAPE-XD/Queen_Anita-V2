//David Cyril
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUpqVllka3lwMmlrSGdNS1FBc255Y0Y4d3lJT28xb1V0dWR4a1NNOU0wUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib3BNNWd5S1N1clJhSE1icEdrU3d1VFZNdFYyWWdrMkU3NlJKaVVZWk9oWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZQ2FCMVpJUXNHeElkZndhaXRpK05aaThuQTRWZEtaQ2lVK2FDMzM1SkZVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMVDBta3BhcG1OVHlqTlRCQStBTnZ0Z1FWdnNKeU9HakNZOFZIMEJZeG1RPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndKdktVM0JpdllFbWo2Ty9ESHNWcjlDYXN6akpCMzZhQ2dhdFpSVmdSbFU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJiUnI5SXZVV3hHSUJGU1lYQXkvbVNTQUc0ZHlTTnlyZFFhdWdvMjVVMm89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUx0NDJkTFJ6UG1jWWhMTmFKeWVFbmkrdEdxMVEwOVcwWCtCcm9MaTlsWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRTcxY21vMkhHNzMyam1ic3B6ZXVOTmdKVWdJM0JVNHJqU1FMMGpPcXJHbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikt5YkxIcGw5Z3RIU0lCK2RWMlZvTkVleDNLRy81MXFkczJ3Mnc2UmdoZkJIUVBVZ3FPVjlmWlFRSkg0THBZa04zQ00wUUdPUEpncnlwZUVnQzN6VmhRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDgsImFkdlNlY3JldEtleSI6IjhoMFVXZzVjNmdQV2dPQ3ZKb2tsK2QyTjRVanZHeXJ2eWFiK3E4SFlVKzg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMTQyMjEyMzgzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE5RTRCNzY1QUUwNEZFNUNDMzEwRDJEM0NGMjY1QTMxIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTk3MjcxODd9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImpMaEliUEJpUnpHQmdPcHk1SkZ0SWciLCJwaG9uZUlkIjoiYWJiYjMwMTEtYmFmOC00NmVhLThiZjMtMDYxOWI5MDcwMDgxIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InN2LzRPb1ZuNGx0TjhxUkQ2bXNocnlpdmgvZz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTanFlV3dsTi9pTWdlUzZGeDhac2Zhb2JBc0k9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiMzVQRjJKUkciLCJtZSI6eyJpZCI6IjkyMzE0MjIxMjM4MzoyNEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJTbmFwZSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT25aNG8wQ0VNTG9nN1FHR0JzZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiNFhwYncreXEvM3JHaTI4bEpJU0tPOENzdnEyS1hjMVpKVTUwVnJOSmJWdz0iLCJhY2NvdW50U2lnbmF0dXJlIjoicE5hQ1pHSXNsRzdWZDdFVW9CaEU2TVl1N3JjMmpPMC9HOW42VmJYeGpMU1YyWk5XSU9hVEdWdi95b2Fad1R2Sm9McTVDTHVGenhXSHNPU0RTTE02Q0E9PSIsImRldmljZVNpZ25hdHVyZSI6Ik0wQnpSdG1idi8wbVRoSFhnQkRhUjd2cVZBQ3ROdFFRM2dybWQrMWJxNFJFZm9WSC9OMW1xTUhPZ1lEYkxlaVp4MlgycVVzblJaZlhENkV0M1c5MmhRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMTQyMjEyMzgzOjI0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmVGNlc4UHNxdjk2eG90dkpTU0VpanZBckw2dGlsM05XU1ZPZEZhelNXMWMifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTk3MjcxODIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQnJ5In0=";
global.MONGODB = process.env.MONGODB_URI || "";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "null";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "")
  : "+923142212383";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://telegra.ph/file/a512681ac12882566c520.jpg,https://telegra.ph/file/9a860ecce874aff14bab3.jpg,https://telegra.ph/file/d16c8c58e0b0b7a0d027e.jpg,https://telegra.ph/file/ea4516d08cd40e7203075.jpg";
global.userImages =
  process.env.USER_IMAGES ||
  "https://telegra.ph/file/a512681ac12882566c520.jpg,https://telegra.ph/file/9a860ecce874aff14bab3.jpg,https://telegra.ph/file/d16c8c58e0b0b7a0d027e.jpg,https://telegra.ph/file/ea4516d08cd40e7203075.jpg,https://telegra.ph/file/4873657618a81a0daeaf7.mp4";
///===========[global iMPORTS]====================//

module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`©SNAPE-V2`",
  author: process.env.PACK_AUTHER || "SNAPE-V2",
  packname: process.env.PACK_NAME || "S N A P E",
  botname: process.env.BOT_NAME || "SNAPE-V2",
  ownername: process.env.OWNER_NAME || "Tamseel Riaz",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WhatsApp").toUpperCase(),
};
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/QUEEN_ANITA-V2";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "";
global.devs = "2349066528353";
global.msg_style = process.env.STYLE || "4";
global.session_reset = process.env.SS_RESET || "false";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "null";
global.read_status_from = process.env.READ_STATUS_FROM || "null";
global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://mainv2-f66485a0f702.herokuapp.com/";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
