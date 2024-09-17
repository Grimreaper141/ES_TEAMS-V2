//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "examsolutionteam@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://whatsapp.com/channel/0029Vaj1vKSK5cDDT4tVvY1y";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vaj1vKSK5cDDT4tVvY1y";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vaj1vKSK5cDDT4tVvY1y";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/ec33ecf51f928d0a89a1b.jpg";
global.devs = "https://t.me/examsolutionteam";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "+2348059149474";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/a81247659e996130a88ea.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://whatsapp.com/channel/0029Vaj1vKSK5cDDT4tVvY1y";
global.scan = "https://whatsapp.com/channel/0029Vaj1vKSK5cDDT4tVvY1y";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0FoNXd5QTlzdlFzM3FQMmpWTWdoajZHMW53MHF3dGpxN1hBRXBJQzZVND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQU9VVHJQTFEvRUVNRDBzM2pHMXlXQ1NUS01XK2h3MHdRblVUc1dReGZnST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2T1N5ckhva2c2T2QzTEgvWjNGejJDUVJaTDFZS1NTTWg0UXRtL2lJazFRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNL09ubzF6N3g1MnJqTnpCSmJGZWp2YUROeWhCMWVzZTNJeGZkMmhxOFVrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlOV2IzdmkrV2c2RytXNUdYdEF2K0kvbDl1YVZxb3VoaUZJYjIzNS8xa1U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InViNGRlZVhNcEp6OENSRGNkTUVPaEUyeFVTVmEwbnJITWZmUWFKcG91Unc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEhkcGgrM253S1VuRkJYMitmZGxvVW5YTFdpQ3ZNM3ZyVy9XQWk5Q2FYUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid3h3azRibFNGZjUxWDVENEI5WUZsZDd3THJKUU1SdjUzUldWdG9tM2oxbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFjR0NlU3RhWnNkSHluYjNkUy8xL25ZbHRNSWdGbFhVdVBJaHdmQTh2TGNsUG04RStCT04xV3JSSHUxcGhqajljTFVPNGlSY1BXN3FmQWx2ZzdPb2lRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA0LCJhZHZTZWNyZXRLZXkiOiJxU0NjWSs5aGNvSXhmL0xaU1pJYjE5UldrdFo4SU1LUGVhQk1OMmU0SnZBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDgwNTkxNDk0NzRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNDNEMTYxNkIzRThEQTQ0RTBDQ0FCMzJGMEE0OTMwOUYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNjU4NjQzMH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiekt2Tk96Z2xTdEtScGJKemQwTGhVQSIsInBob25lSWQiOiJjMjliOTAyYi1jNTVlLTQzNzQtODFlYi05OGZjOTdlN2Y5YTYiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia1dTbk5BQ3JRY2lPWFlIS2gvWUI3bmRaQ2YwPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBDQU1DbkU5MEhDdkErempuazZPamYvaVV1TT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiIzTUEzMzVGOSIsIm1lIjp7ImlkIjoiMjM0ODA1OTE0OTQ3NDo1QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKUEd6TnNHRUt5OHByY0dHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ0aVhvbjJlKytISStkVEY5YSswdTZyRlZNbXZEcEJ6MTlUL2N4bndqT1RvPSIsImFjY291bnRTaWduYXR1cmUiOiJSYmZPanVKMk52U0p1RWRaWHJGN1htenBFcUg3NWg0bE4vdzVFSld4OWxRZjcybExiSUV0QkdoaDdGN1gzcHg0MW5STkNES2ZoL3p0eG41TXRDb05EZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoidThwQ0VkTHhCaXQzOHFqT3VOZUVRcTQ0Y3NGa3N1c1JmUE8xR3RtdWlpdkdvWUlNQ1FXYzlJZWdwRmZVbzFmeFY2SEd3aW1oQXlrS2pvZmRBRmRoaEE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MDU5MTQ5NDc0OjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYllsNko5bnZ2aHlQblV4Zld2dEx1cXhWVEpydzZRYzlmVS8zTVo4SXprNiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNjU4NjQyNSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFFalkifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "ℙ𝕆𝕎𝔼ℝ𝔼𝔻 𝔹𝕐 𝔼𝕊 𝕋𝔼𝔸𝕄𝕊-𝕍2👑",
  author: process.env.PACK_AUTHER || "ES TEAMS-V2",
  packname: process.env.PACK_NAME || "ES TEAMS",
  botname: process.env.BOT_NAME || "𝔼𝕊 𝕋𝔼𝔸𝕄𝕊-𝕍2👑",
  ownername: process.env.OWNER_NAME || "𝔼𝕊 𝕋𝔼𝔸𝕄𝕊-𝕋𝔼ℂℍ👑",
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "ES TEAMS").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
