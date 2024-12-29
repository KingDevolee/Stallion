//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "14388159713";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUFzdld0NnYvNi9rOHVkaCtJTTJsRjZIdUx0NENJSlhpRFU0NDJtaHlYOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV2s4NkR5K1Evd2hzaW4yYzZSNFVZN2IwSGQ5WGphZm5rYmNueXd4NU9VWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3QWhRODVmeFVZak4vK3dCUU1WVUNwc3VQTmFaNzBNNU5TZ01GZ3lhMWxrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwZlJzWDUwWmh2YjZsNDFKblVjdjRLTWtadGcrdU9XS1E5a3JrYi9uWW5zPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVETElFbG1qQTJkdXlLSERyVjI3cDFrR01oaFdOcWpaelhlUW44RTFpVWM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFxRTJlcWhoWlJOcmNLaEpUVWxaK1VIc0tBc05yT3JSRnRNTlFEUC8reTg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNk8yR0R1UldMQmJzSi9LNEl3cW1VTTU1dlJCTGwvT1JudnJvbDZrL0gyaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicFZDeENydlBIb2IydDc3NVlsK2FwbS9IV3JYTDkrQkYzK0kya0YrYTFDTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZjUURoYUY2RVpHbE1RVFg2NVRCYjNWQjlndzlTNlk4am5QLzdLVW1uZXVwTkhiMThLRFJta3RBZ2tzeEY4NlBGT04yNHZmejFHcjZZeGRiNGs0ZGpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYzLCJhZHZTZWNyZXRLZXkiOiJWMC9DeDdWd3RHK2FPd0VmRlk2QUNvNDRuSWVWeFFVVkpHb0ZJWkNvaVUwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjE0Mzg4MTU5NzEzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkQ4MDFBNzlDNkYyQ0ZCNDBEMzhCREQ5MjYwNUZDNTAyIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzU1MDY0Nzd9LHsia2V5Ijp7InJlbW90ZUppZCI6IjE0Mzg4MTU5NzEzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkY2OENCNDQ2MDBGNURBOUE3QjE3MUJGMTBCMkQ5OTRGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzU1MDY0Nzh9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ilc5ZXhUdmh2VEdlNUFFZWFvREJHUXciLCJwaG9uZUlkIjoiNGNlMDYwOWQtYzU5Ny00YjA3LThmYTctOWMzNzdjNjVjYjI5IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkV4Zit4ZWg0VkdURnFMTm5zc1ZKenZMMkxPRT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFdUZ4S1ZwY1hDaFU0SXp3cFRxR2tsTm5CNE09In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQTJaOEFCUFEiLCJtZSI6eyJpZCI6IjE0Mzg4MTU5NzEzOjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2RuvCdkbvwnZGo8J2Rs/CdkbPwnZGw8J2RqPCdkbUt8J2SufCdloot4bSs4bS64bS84bS64bWe4bS54bS84bWBy6IifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05QSjVKd0ZFSjMweHJzR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InM3N2Y2UDltU3dsUktiQ0c0ay9TWnpja0k0VjIwVGRiNUZiR2ljV005VUU9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkpuNExaZWlXNUsyTHFMRDR3MjBidmZLZnRJMWh5ZmJ6UzFtenFBQ1lZdmVxS2tsZnRuUzdtbXBabHF4QzRad3Rxb0orTEV3NDM3UUl1VTVZOVlIeUNnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ0TjhNRXYxL1R1ZWVoTE5CbTVJUDh5VmdhNld2cHBlSlJVd0poZjE5SGx2K2MyM0FsY1BBVXEvWDBkZlUxZTJtU2Q5Z081Tlk5c25SMm5qVnMvKzFndz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjE0Mzg4MTU5NzEzOjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYk8rMytqL1prc0pVU213aHVKUDBtYzNKQ09GZHRFM1crUld4b25GalBWQiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczNTUwNjQ3NiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFFVGYifQ==" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`KING_DAVID™`",
  author: process.env.PACK_AUTHER || "KING_DAVID",
  packname: process.env.PACK_NAME || "KING_DAVID",
  botname: process.env.BOT_NAME || "KING_DAVID",
  ownername: process.env.OWNER_NAME || "KING_DAVID",
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
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
