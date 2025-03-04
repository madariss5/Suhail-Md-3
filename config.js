const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "MARTIN";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "4915563151347";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_14_03_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA1NixcbiAgICAgICAgMTYyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDExNixcbiAgICAgICAgNzYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDQ3LFxuICAgICAgICA0NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTE4LFxuICAgICAgICA3MixcbiAgICAgICAgODUsXG4gICAgICAgIDEzNixcbiAgICAgICAgNzQsXG4gICAgICAgIDE3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjE4LFxuICAgICAgICA3NixcbiAgICAgICAgMjExLFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTY3LFxuICAgICAgICA0NixcbiAgICAgICAgNzksXG4gICAgICAgIDE0MixcbiAgICAgICAgMjEsXG4gICAgICAgIDMzLFxuICAgICAgICA0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTEyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDc4LFxuICAgICAgICA3NixcbiAgICAgICAgMjAyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgODUsXG4gICAgICAgIDQyLFxuICAgICAgICAxODAsXG4gICAgICAgIDUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxODksXG4gICAgICAgIDI0NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwNixcbiAgICAgICAgNDAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNTksXG4gICAgICAgIDg2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDM1LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODcsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyLFxuICAgICAgICA1OCxcbiAgICAgICAgMjI1LFxuICAgICAgICA1NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjMwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMzMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMzYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQyLFxuICAgICAgICAyNDksXG4gICAgICAgIDk4LFxuICAgICAgICAyMjksXG4gICAgICAgIDc0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDM5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDM0LFxuICAgICAgICA4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTcwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTksXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDMxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDc3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMCxcbiAgICAgICAgMTM2LFxuICAgICAgICAzNSxcbiAgICAgICAgODAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTQwLFxuICAgICAgICA2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDY3LFxuICAgICAgICAxODgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjMwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDk3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA1MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjIzLFxuICAgICAgICA1NixcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDc0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDMyLFxuICAgICAgICA3MixcbiAgICAgICAgMjksXG4gICAgICAgIDE1NixcbiAgICAgICAgMjMzLFxuICAgICAgICA1NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDksXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDgzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDU2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDY4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTg1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjM1LFxuICAgICAgICA1OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDM2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgODAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzMixcbiAgICAgICAgNTYsXG4gICAgICAgIDYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI0eVBJUHBwQXJwZ0V3Z2RVWWdKc0JsVXhpa0xBM1FyUGZTZ3VzV3UxVFk0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjQ5MTU1NjIzNzgzNDNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkQ4MkJDMjhDMjM5ODM1MTkyQ0VGNkE1QUEwNDI1RUVEXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc0MTEyMjg1MlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjQ5MTU1NjIzNzgzNDNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjE5NTcyQ0IwRUJBNzY1NTZEN0ZEQzI3NDZFNDYwNEEyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc0MTEyMjg1M1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjQ5MTU1NjIzNzgzNDNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkZEQUQyRkU2MzhGRTAxNzJBNDAwRUE3MzlBMENDQUE2XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc0MTEyMjg1N1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJVMlJNWUFyblJVV1dObTFXcXhJN2Z3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjEzZmJiZWQ3LTliMjAtNDdlZC04OThkLTIzZjM0OWVhYTdhMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTYsXG4gICAgICAxMDcsXG4gICAgICAxNzAsXG4gICAgICA4NSxcbiAgICAgIDE5MyxcbiAgICAgIDEyMyxcbiAgICAgIDE5NCxcbiAgICAgIDMyLFxuICAgICAgMTM3LFxuICAgICAgMjE4LFxuICAgICAgMTgsXG4gICAgICAxNTAsXG4gICAgICAyNDAsXG4gICAgICAzNCxcbiAgICAgIDQ1LFxuICAgICAgNzcsXG4gICAgICAxOSxcbiAgICAgIDk4LFxuICAgICAgMjIxLFxuICAgICAgMTcyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4OSxcbiAgICAgIDk3LFxuICAgICAgNDUsXG4gICAgICAxOTYsXG4gICAgICAxNTEsXG4gICAgICAyMjAsXG4gICAgICAzMSxcbiAgICAgIDE4OCxcbiAgICAgIDI0MSxcbiAgICAgIDIwMyxcbiAgICAgIDM2LFxuICAgICAgMTAzLFxuICAgICAgMTA2LFxuICAgICAgMzYsXG4gICAgICAyNTQsXG4gICAgICAyMzMsXG4gICAgICAyMTEsXG4gICAgICAyMDcsXG4gICAgICAxMzMsXG4gICAgICAxNDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTk5LMTIzNlBcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjQ5MTU1NjIzNzgzNDM6ODdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjg3NzEyNDI2MTEwOTg5Ojg3QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIi5cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOUFB5UzBRb05xZHZnWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjcyVjExbEladmFsSnZGMjYyYk1YdzM0bktnUk45S28zQ09ndys0SDRlUnM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZXh4QVNLaDRKZUFlZ2VKKytDZmJuaUdPYlNwdThWa3dmSXRyaFQwWVp3RmRVUi9uLzJ2cDZRdnJzeS9lR2tjRVBiamlzSjk2bFZQYnRXaHg5b21pRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiemR0UzFJMEc0OW41NzdxOW1nU0t6ditDeE4rSWFubzh6Szgxa3V4cDh2WGZyZE91NU9wTWpMb0ZucXpTUDhzazRtaXF2ZytVSE4raGM5NzFWTHBIakE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiNDkxNTU2MjM3ODM0Mzo4N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0MTEyMjg1MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxaVVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTFpVLmpzb24iOiAie1wia2V5RGF0YVwiOlwiYTZKc1hMa2s5Y1gxU3hyQUR5dzlLQTVuVC9aQWtlY0ZkQmxqUUJlNlBXTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5NTU3ODA2NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzQxMTIyODUyOTM5XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "𝔹𝕃𝔸ℂ𝕂𝕊𝕂𝕐-𝕄𝔻",
  ownername:process.env.OWNER_NAME|| "Martin:Shy<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
