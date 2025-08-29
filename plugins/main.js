const config = require("../config");
const os = require('os');
const axios = require("axios");
const fs = require('fs');
const path = require("path");
const {
  generateForwardMessageContent,
  prepareWAMessageFromContent,
  generateWAMessageContent,
  generateWAMessageFromContent
} = require("@whiskeysockets/baileys");
const {
  cmd,
  commands
} = require("../command");
const {
  getBuffer,
  getGroupAdmins,
  getRandom,
  h2k,
  isUrl,
  Json,
  runtime,
  sleep,
  fetchJson
} = require("../lib/functions");
const {
  URL
} = require("url");
cmd({
  'pattern': "alive",
  'react': '👩‍💻',
  'alias': ['online', "test", 'bot'],
  'desc': "Check if bot is online.",
  'category': 'main',
  'use': ".alive",
  'filename': __filename
}, async (_0x1c9913, _0x288583, _0x59c7db, _0x2acf28) => {
  const {
    from: _0x5c2f1b,
    prefix: _0x6271b3,
    pushname: _0x4bc6d9,
    reply: _0x598e55,
    l: _0x4b1499
  } = _0x2acf28;
  try {
    const _0x298ad1 = os.hostname().length;
    let _0x5b7cd9 = 'Unknown';
    switch (_0x298ad1) {
      case 0xc:
        _0x5b7cd9 = "Replit";
        break;
      case 0x24:
        _0x5b7cd9 = 'Heroku';
        break;
      case 0x8:
        _0x5b7cd9 = 'Koyeb';
        break;
      default:
        _0x5b7cd9 = os.hostname();
    }
    const _0x1af2e5 = [{
      'buttonId': _0x6271b3 + "menu",
      'buttonText': {
        'displayText': "COMMAND MENU"
      },
      'type': 0x1
    }, {
      'buttonId': _0x6271b3 + "ping",
      'buttonText': {
        'displayText': "BOT SPEED"
      },
      'type': 0x1
    }];
    const _0x862ce8 = {
      'title': "Command Menu",
      'sections': [{
        'title': "Main Commands",
        'rows': [{
          'title': "Command Menu",
          'description': "Show command menu",
          'id': _0x6271b3 + 'menu'
        }, {
          'title': "Bot Speed",
          'description': "Check bot speed",
          'id': _0x6271b3 + "ping"
        }]
      }]
    };
    if (config.ALIVE === "default") {
      const _0x14df78 = {
        'image': {
          'url': config.LOGO
        },
        'caption': "*Hello " + _0x4bc6d9 + " ❕*\n\n*🫟 I am KAVIDU-MD WhatsApp Bot. I am alive now 👀*\n\n   *• Smart 🛸*\n   *• Fast 🚀*\n   *• Secure 📍*\n\n*Thank you for using KAVIDU-MD 📍 !*",
        'footer': config.FOOTER,
        'buttons': _0x1af2e5,
        'headerType': 0x4
      };
      return await _0x1c9913.buttonMessage2(_0x5c2f1b, _0x14df78);
    }
    const _0x461125 = config.ALIVE;
    if (config.BUTTON === "true") {
      return await _0x1c9913.sendMessage(_0x5c2f1b, {
        'image': {
          'url': config.LOGO
        },
        'caption': _0x461125,
        'footer': config.FOOTER,
        'buttons': [{
          'buttonId': "video_quality_list",
          'buttonText': {
            'displayText': "🎥 Select Option"
          },
          'type': 0x4,
          'nativeFlowInfo': {
            'name': 'single_select',
            'paramsJson': JSON.stringify(_0x862ce8)
          }
        }],
        'headerType': 0x1,
        'viewOnce': true
      }, {
        'quoted': _0x288583
      });
    } else {
      const _0x50ff16 = {
        'image': {
          'url': config.LOGO
        },
        'caption': _0x461125,
        'footer': config.FOOTER,
        'buttons': _0x1af2e5,
        'headerType': 0x4
      };
      return await _0x1c9913.buttonMessage2(_0x5c2f1b, _0x50ff16, _0x288583);
    }
  } catch (_0x3a2098) {
    _0x598e55("*An error occurred while checking bot status.*");
    _0x4b1499(_0x3a2098);
  }
});
cmd({
  'pattern': "ping",
  'alias': ['speed'],
  'desc': "Check bot's response speed.",
  'category': "main",
  'use': ".ping",
  'filename': __filename
}, async (_0x52a8fa, _0x1e44bc, _0x556fd7, _0x52ebd4) => {
  const {
    from: _0x4bf948,
    reply: _0x1d29c5,
    l: _0xa89c36
  } = _0x52ebd4;
  try {
    const _0x940db6 = Date.now();
    const _0x471b6f = await _0x52a8fa.sendMessage(_0x4bf948, {
      'text': "🔄 *Pinging... please wait*"
    }, {
      'quoted': _0x1e44bc
    });
    const _0x1f4aa0 = Date.now() - _0x940db6;
    await _0x52a8fa.sendMessage(_0x4bf948, {
      'text': "*Pong " + _0x1f4aa0 + " ms 🚀*",
      'edit': _0x471b6f.key
    });
    await _0x52a8fa.sendMessage(_0x4bf948, {
      'react': {
        'text': '🛸',
        'key': _0x1e44bc.key
      }
    });
  } catch (_0x5925a8) {
    await _0x1d29c5("❌ *An error occurred while measuring ping.*");
    _0xa89c36(_0x5925a8);
  }
});
cmd({
  'pattern': "menu",
  'react': '📁',
  'alias': ["panel", "list", "commands"],
  'desc': "Get bot's command list.",
  'category': "main",
  'use': ".menu",
  'filename': __filename
}, async (_0x71b150, _0x1ad5a5, _0x48bbb5, {
  from: _0xb92a3,
  pushname: _0xe4daa9,
  prefix: _0x279e3e,
  reply: _0x1bf951,
  l: _0x1d0a9c
}) => {
  try {
    let _0x131f3b;
    const _0x32e23e = os.hostname().length;
    if (_0x32e23e === 0xc) {
      _0x131f3b = "Replit";
    } else {
      if (_0x32e23e === 0x24) {
        _0x131f3b = "Heroku";
      } else {
        if (_0x32e23e === 0x8) {
          _0x131f3b = "Koyeb";
        } else {
          _0x131f3b = os.hostname();
        }
      }
    }
    const _0xc1a722 = (process.memoryUsage().heapUsed / 0x400 / 0x400).toFixed(0x2);
    const _0x396413 = Math.round(os.totalmem() / 0x400 / 0x400);
    const _0x518e7e = _0xc1a722 + "MB / " + _0x396413 + 'MB';
    const _0x511bef = await runtime(process.uptime());
    const _0x10d177 = "*Hello " + _0xe4daa9 + "👋*\n\n*╭─❍  KAVIDU-MD - Menu 🫟 ❍─╮*\n\n*`🪺 Prefix:` " + config.PREFIX + "*\n*`🎲 Uptime:`  " + _0x511bef + "*\n*`🚀 Memory Use:` " + _0x518e7e + "*\n*`⛵ Platform:` " + _0x131f3b + "*\n*`👨🏻‍💻 Owner:` 94767054052*\n\n*╰──────────────────╯*\n\n⚡ *Your all-in-one WhatsApp assistant — fast, reliable, and easy to use!*\n\n*• Github :* _https://github.com/kavidumdbot/KAVIDUMD-V1_\n\n*• Follow us :* _https://whatsapp.com/channel/0029VbAM4eo3AzNQZ1WleW3e_";
    const _0x4d4bd5 = "*Hello " + _0xe4daa9 + "👋*\n\n*╭──❍  KAVIDU-MD - Menu 🫟 ❍──╮*\n\n*`🪺 Prefix:` " + config.PREFIX + "*\n*`🎲 Uptime:`  " + _0x511bef + "*\n*`🚀 Memory Use:` " + _0x518e7e + "*\n*`⛵ Platform:` " + _0x131f3b + "*\n*`👨🏻‍💻 Owner:` 94767054052*\n\n*╰──────────────────╯*\n\n⚡ *Your all-in-one WhatsApp assistant — fast, reliable, and easy to use!*\n\n*• Github :* _https://github.com/kavidumdbot/KAVIDUMD-V1_\n\n*• Follow us :* _https://whatsapp.com/channel/0029VbAM4eo3AzNQZ1WleW3e_";
    let _0x2500e1;
    try {
      if (!config.LOGO || !config.LOGO.startsWith('http')) {
        throw new Error("Invalid config.LOGO URL");
      }
      const _0x39f2bb = await axios.get(config.LOGO, {
        'responseType': "arraybuffer"
      });
      _0x2500e1 = Buffer.from(_0x39f2bb.data, "binary");
      if (!Buffer.isBuffer(_0x2500e1)) {
        throw new Error("Not a valid buffer");
      }
    } catch (_0x3834c6) {
      console.error("❌ Failed to load image:", _0x3834c6.message);
      return _0x1bf951("⚠️ Could not load menu image. Check your LOGO URL.");
    }
    const _0x583d90 = [{
      'buttonId': _0x279e3e + "mainmenu",
      'buttonText': {
        'displayText': " 💢𝕄𝔸𝕀ℕ 𝕄𝔼ℕ𝕌  "
      },
      'type': 0x1
    }, {
      'buttonId': _0x279e3e + "groupmenu",
      'buttonText': {
        'displayText': " 💢𝔾ℝ𝕆𝕌ℙ 𝕄𝔼ℕ𝕌 "
      },
      'type': 0x1
    }, {
      'buttonId': _0x279e3e + "moviemenu",
      'buttonText': {
        'displayText': " 💢𝕄𝕆𝕍𝕀𝔼 𝕄𝔼ℕ𝕌 "
      },
      'type': 0x1
    }, {
      'buttonId': _0x279e3e + "downloadmenu",
      'buttonText': {
        'displayText': " 💢𝔻𝕆𝕎ℕ𝕃𝕆𝔸𝔻 𝕄𝔼ℕ𝕌 "
      },
      'type': 0x1
    }, {
      'buttonId': _0x279e3e + "convertmenu",
      'buttonText': {
        'displayText': " 💢ℂ𝕆ℕ𝕍𝔼ℝ𝕋 𝕄𝔼ℕ𝕌 "
      },
      'type': 0x1
    }, {
      'buttonId': _0x279e3e + 'aicommands',
      'buttonText': {
        'displayText': " 💢𝔸𝕀 𝕄𝔼ℕ𝕌 "
      },
      'type': 0x1
    }];
    const _0x41615d = {
      'image': _0x2500e1,
      'caption': _0x4d4bd5,
      'footer': config.FOOTER,
      'buttons': _0x583d90,
      'headerType': 0x4
    };
    if (config.BUTTON === "true") {
      const _0xbc5dba = {
        'title': "𝙲𝚕𝚒𝚌𝚔 𝙷𝚎𝚛𝚎 📥 :)",
        'sections': [{
          'title': 'KAVIDU-MD',
          'rows': [{
            'title': "MAIN COMMANDS",
            'description': "Main command menu",
            'id': _0x279e3e + "mainmenu"
          }, {
            'title': "GROUP COMMANDS",
            'description': "Group command menu",
            'id': _0x279e3e + "groupmenu"
          }, {
            'title': "MOVIE COMMANDS",
            'description': "Movie command menu",
            'id': _0x279e3e + "moviemenu"
          }, {
            'title': "DOWNLOAD COMMANDS",
            'description': "Download command menu",
            'id': _0x279e3e + 'downloadmenu'
          }, {
            'title': "CONVERT COMMANDS",
            'description': "Convert command menu",
            'id': _0x279e3e + 'convertmenu'
          }, {
            'title': "AI COMMANDS",
            'description': "AI command menu",
            'id': _0x279e3e + "aimenu"
          }]
        }]
      };
      return await _0x71b150.sendMessage(_0xb92a3, {
        'image': _0x2500e1,
        'caption': _0x10d177,
        'footer': config.FOOTER,
        'buttons': [{
          'buttonId': "action",
          'buttonText': {
            'displayText': "🔽 Select Option"
          },
          'type': 0x4,
          'nativeFlowInfo': {
            'name': 'single_select',
            'paramsJson': JSON.stringify(_0xbc5dba)
          }
        }],
        'headerType': 0x1,
        'viewOnce': true
      }, {
        'quoted': _0x1ad5a5
      });
    } else {
      await _0x71b150.buttonMessage(_0xb92a3, _0x41615d, _0x1ad5a5);
    }
  } catch (_0x5738e1) {
    _0x1bf951("*❌ Error occurred!*");
    _0x1d0a9c(_0x5738e1);
  }
});
cmd({
  'pattern': 'joinsupport',
  'desc': "Join support group",
  'react': "👨🏻‍💻",
  'category': 'main',
  'use': '.joinsupport'
}, async (_0x59120a, _0x3fb90b, _0x1af637, {
  from: _0x4af714,
  reply: _0x6730ac,
  isOwner: _0x3b6ae8,
  isSachintha: _0x3ad3ce,
  isSavi: _0x262a22,
  isDev: _0x21606b,
  isMani: _0xefba0c,
  isMe: _0x35d2fb
}) => {
  if (!_0x3b6ae8 && !_0x3ad3ce && !_0x262a22 && !_0x21606b && !_0xefba0c && !_0x35d2fb) {
    return;
  }
  try {
    const _0x1772f6 = (await axios.get("https://mv-visper-full-db.pages.dev/Main/main_var.json")).data;
    let _0x4dde26 = '' + _0x1772f6.supglink;
    let _0x3c678b = _0x4dde26.split(" ")[0x0].split("https://chat.whatsapp.com/")[0x1];
    await _0x59120a.groupAcceptInvite(_0x3c678b).then(() => _0x6730ac("✅ Successfully joined the support group!"))["catch"](() => _0x6730ac("❌ Could not join the group."));
  } catch (_0x561efc) {
    console.log(_0x561efc);
    _0x6730ac("🚩 Error occurred while trying to join the group.");
  }
});
cmd({
  'pattern': "restart",
  'react': '🔄',
  'desc': "Restart the bot process",
  'use': ".restart",
  'category': "main",
  'filename': __filename
}, async (_0x1ab10b, _0x323d3c, _0x117697, {
  reply: _0x5ecf92,
  isOwner: _0x336dc4,
  isSachintha: _0x5f9bd1,
  isSavi: _0x5700b1,
  isSadas: _0x416d0e,
  isMani: _0xf7a0c3,
  isMe: _0x21ff4e
}) => {
  if (!_0x336dc4 && !_0x5f9bd1 && !_0x5700b1 && !_0x416d0e && !_0xf7a0c3 && !_0x21ff4e) {
    return;
  }
  try {
    const {
      exec: _0x34e15b
    } = require("child_process");
    await _0x5ecf92("♻️ *Bot is restarting...*  \n🕐 *Please wait a few seconds for services to resume.*");
    setTimeout(() => {
      _0x34e15b("pm2 restart all", (_0x3bf448, _0x11f011, _0x48d2c6) => {
        if (_0x3bf448) {
          console.error(_0x3bf448);
          _0x5ecf92("❌ *An error occurred while restarting the bot.*");
        }
      });
    }, 0xbb8);
  } catch (_0x5c2605) {
    console.error(_0x5c2605);
    _0x5ecf92("🚨 *Unexpected error occurred during restart.*");
  }
});
cmd({
  'pattern': "update",
  'react': 'ℹ️',
  'desc': "Update your bot to the latest version",
  'use': '.update',
  'category': 'main',
  'filename': __filename
}, async (_0x3be44f, _0x4b5072, _0x1462da, {
  reply: _0x16b489,
  isOwner: _0x221b99,
  isSachintha: _0x4b3a4c,
  isSavi: _0x49bf32,
  isSadas: _0x41f0a5,
  isMani: _0x15cb05,
  isMe: _0x2fa392
}) => {
  if (!_0x221b99 && !_0x4b3a4c && !_0x49bf32 && !_0x41f0a5 && !_0x15cb05 && !_0x2fa392) {
    return;
  }
  try {
    const {
      exec: _0x3f54b5
    } = require('child_process');
    await _0x16b489("🔄 *Bot Update in Progress...*  \n📦 *Fetching latest code & restarting services...*");
    setTimeout(() => {
      _0x3f54b5("pm2 restart all", (_0x25df6f, _0x3c882f, _0x58947c) => {
        if (_0x25df6f) {
          console.error(_0x25df6f);
          _0x16b489("❌ *Update failed during restart!*");
        }
      });
    }, 0xbb8);
  } catch (_0x34bc7e) {
    console.error(_0x34bc7e);
    _0x16b489("🚨 *An unexpected error occurred during update.*");
  }
});
cmd({
  'pattern': "convertmenu",
  'react': "🗃️",
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x2cb7b0, _0x31ae6d, _0x417cf4, {
  from: _0x336659,
  prefix: _0x1ebac2,
  l: _0x35cb25,
  quoted: _0x462da6,
  body: _0x5a2ba2,
  isCmd: _0x2b9149,
  command: _0x5ac8b1,
  args: _0x4844cf,
  q: _0x2b98c7,
  isGroup: _0x1f9fc0,
  sender: _0xde7a9c,
  senderNumber: _0xa9450f,
  botNumber2: _0x1af835,
  botNumber: _0x16d4b9,
  pushname: _0x497f23,
  isMe: _0x3024e1,
  isOwner: _0x84e7f8,
  groupMetadata: _0x548a75,
  groupName: _0x5c1d4c,
  participants: _0x3dda02,
  groupAdmins: _0x254810,
  isBotAdmins: _0x41e20b,
  isAdmins: _0x9d0fc0,
  reply: _0x5156fc
}) => {
  try {
    let _0x5d1001 = '';
    for (let _0x3b7d14 = 0x0; _0x3b7d14 < commands.length; _0x3b7d14++) {
      if (commands[_0x3b7d14].category === "convert") {
        if (!commands[_0x3b7d14].dontAddCommandList) {
          _0x5d1001 += "*│🫟 Command:* " + commands[_0x3b7d14].pattern + "\n*│Use:* " + commands[_0x3b7d14].use + "\n\n";
        }
      }
    }
    ;
    let _0x12d202 = "*╭──────────●●►*\n" + _0x5d1001 + "*╰──────────●●►*\n\n";
    let _0x1a9bf8 = [{
      'buttonId': _0x1ebac2 + 'sc',
      'buttonText': {
        'displayText': "GET BOT SCRIPT"
      },
      'type': 0x1
    }, {
      'buttonId': _0x1ebac2 + 'ping',
      'buttonText': {
        'displayText': "GET BOT PING"
      },
      'type': 0x1
    }];
    let _0x2d7bbf = {
      'image': {
        'url': config.LOGO
      },
      'caption': '' + _0x12d202,
      'footer': config.FOOTER,
      'headerType': 0x4,
      'buttons': _0x1a9bf8
    };
    return await _0x2cb7b0.buttonMessage(_0x336659, _0x2d7bbf, _0x31ae6d);
  } catch (_0x559e03) {
    _0x5156fc("*ERROR !!*");
    _0x35cb25(_0x559e03);
  }
});
cmd({
  'pattern': "downloadmenu",
  'react': "🗃️",
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x2df748, _0x5b2ebe, _0x16a4b8, {
  from: _0x41b4c7,
  prefix: _0x3ce227,
  l: _0x256c51,
  quoted: _0xde0baf,
  body: _0x17f0b3,
  isCmd: _0x233aca,
  command: _0x4a554b,
  args: _0x775552,
  q: _0x19d653,
  isGroup: _0x46c09b,
  sender: _0x488dbc,
  senderNumber: _0x29a342,
  botNumber2: _0x1638ce,
  botNumber: _0x483846,
  pushname: _0x4e2ce0,
  isMe: _0x594b22,
  isOwner: _0xede83e,
  groupMetadata: _0x5aad00,
  groupName: _0x296f03,
  participants: _0x4021d1,
  groupAdmins: _0x5cd164,
  isBotAdmins: _0x1d40cc,
  isAdmins: _0x2cade1,
  reply: _0x175c00
}) => {
  try {
    let _0x1bcbf2 = '';
    for (let _0x5076d0 = 0x0; _0x5076d0 < commands.length; _0x5076d0++) {
      if (commands[_0x5076d0].category === 'download') {
        if (!commands[_0x5076d0].dontAddCommandList) {
          _0x1bcbf2 += "*│🫟 Command:* " + commands[_0x5076d0].pattern + "\n*│Use:* " + commands[_0x5076d0].use + "\n\n";
        }
      }
    }
    ;
    let _0x3763b1 = "*╭──────────●●►*\n" + _0x1bcbf2 + "*╰──────────●●►*\n\n";
    let _0xd87ae9 = [{
      'buttonId': _0x3ce227 + 'sc',
      'buttonText': {
        'displayText': "GET BOT SCRIPT"
      },
      'type': 0x1
    }, {
      'buttonId': _0x3ce227 + "ping",
      'buttonText': {
        'displayText': "GET BOT PING"
      },
      'type': 0x1
    }];
    let _0x7aeca4 = {
      'image': {
        'url': config.LOGO
      },
      'caption': '' + _0x3763b1,
      'footer': config.FOOTER,
      'headerType': 0x4,
      'buttons': _0xd87ae9
    };
    return await _0x2df748.buttonMessage(_0x41b4c7, _0x7aeca4, _0x5b2ebe);
  } catch (_0x502341) {
    _0x175c00("*ERROR !!*");
    _0x256c51(_0x502341);
  }
});
cmd({
  'pattern': "moviemenu",
  'react': '🍟',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x2d5de1, _0x513377, _0x4525a0, {
  from: _0x1d83a0,
  prefix: _0xc3127a,
  l: _0x1a095a,
  quoted: _0x3ecb78,
  body: _0x1e0895,
  isCmd: _0x4724d9,
  command: _0x5778c0,
  args: _0x188a1c,
  q: _0x252d81,
  isGroup: _0x523a19,
  sender: _0x2f1a2d,
  senderNumber: _0x5921d0,
  botNumber2: _0x327496,
  botNumber: _0x343fa0,
  pushname: _0x1b3233,
  isMe: _0x4c6952,
  isOwner: _0xa86e77,
  groupMetadata: _0x13b24f,
  groupName: _0x56cc4c,
  participants: _0x3bb37a,
  groupAdmins: _0x2338a6,
  isBotAdmins: _0x4acead,
  isAdmins: _0x5d2b6b,
  reply: _0x11378a
}) => {
  try {
    let _0x5cba3f = '';
    for (let _0x113e9f = 0x0; _0x113e9f < commands.length; _0x113e9f++) {
      if (commands[_0x113e9f].category === "movie") {
        if (!commands[_0x113e9f].dontAddCommandList) {
          _0x5cba3f += "*│🫟 Command:* " + commands[_0x113e9f].pattern + "\n*│Use:* " + commands[_0x113e9f].use + "\n\n";
        }
      }
    }
    ;
    let _0x3671b7 = "*╭──────────●●►*\n" + _0x5cba3f + "*╰──────────●●►*\n\n";
    let _0x4153f2 = [{
      'buttonId': _0xc3127a + 'sc',
      'buttonText': {
        'displayText': "GET BOT SCRIPT"
      },
      'type': 0x1
    }, {
      'buttonId': _0xc3127a + "ping",
      'buttonText': {
        'displayText': "GET BOT PING"
      },
      'type': 0x1
    }];
    let _0x39c234 = {
      'image': {
        'url': config.LOGO
      },
      'caption': '' + _0x3671b7,
      'footer': config.FOOTER,
      'headerType': 0x4,
      'buttons': _0x4153f2
    };
    return await _0x2d5de1.buttonMessage(_0x1d83a0, _0x39c234, _0x513377);
  } catch (_0x355073) {
    _0x11378a("*ERROR !!*");
    _0x1a095a(_0x355073);
  }
});
cmd({
  'pattern': "owner",
  'desc': "I'm the owner",
  'react': "👩‍💻",
  'use': ".owner",
  'category': "main",
  'filename': __filename
}, async (_0x1a69ec, _0x55c158, _0x368308, {
  from: _0x4f2154,
  quoted: _0x45d709,
  body: _0x3451e5,
  isCmd: _0x1e2021,
  command: _0x38cb19,
  args: _0x72fea4,
  q: _0x1745b4,
  isGroup: _0x25ffff,
  sender: _0x2caac6,
  senderNumber: _0x101784,
  botNumber2: _0xaabd48,
  botNumber: _0x2d3e27,
  pushname: _0x35517c,
  isMe: _0x5f3fbc,
  isOwner: _0x4324d8,
  groupMetadata: _0x77eb47,
  groupName: _0x328ed8,
  participants: _0x43a672,
  groupAdmins: _0x13969a,
  isBotAdmins: _0x23494d,
  isAdmins: _0x805036,
  reply: _0x20d5ca
}) => {
  try {
    await _0x1a69ec.sendMessage(_0x4f2154, {
      'contacts': {
        'displayName': "Bot Owners",
        'contacts': [{
          'vcard': "BEGIN:VCARD\nVERSION:3.0\nFN: Themi Sadas\nORG: Web Developer;\nTEL;type=CELL;type=VOICE;waid=94767054052:+94763934860\nEND:VCARD"
        }, {
          'vcard': "BEGIN:VCARD\nVERSION:3.0\nFN: Savithu Iduwara\nORG: Web Developer;\nTEL;type=CELL;type=VOICE;waid=94767054052:+94763934860\nEND:VCARD"
        }]
      }
    }, {
      'quoted': _0x55c158
    });
  } catch (_0x5dfb4f) {
    console.error(_0x5dfb4f);
    _0x20d5ca("Error: " + _0x5dfb4f);
  }
});
cmd({
  'pattern': 'mainmenu',
  'react': '🍟',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x2c9864, _0x25db4d, _0x281731, {
  from: _0x25a73b,
  prefix: _0x5ee6ed,
  l: _0x201625,
  quoted: _0x6c34aa,
  body: _0x3cc6f5,
  isCmd: _0x462510,
  command: _0x33d021,
  args: _0x256017,
  q: _0x28621d,
  isGroup: _0xed0a24,
  sender: _0x402689,
  senderNumber: _0x30f013,
  botNumber2: _0x4736d1,
  botNumber: _0x315a6e,
  pushname: _0xacd759,
  isMe: _0xeae04a,
  isOwner: _0x38c51b,
  groupMetadata: _0x13594e,
  groupName: _0x3e9950,
  participants: _0xbe33cb,
  groupAdmins: _0x351af8,
  isBotAdmins: _0x171f3f,
  isAdmins: _0x4fe945,
  reply: _0x15a3f8
}) => {
  try {
    let _0x2193c3 = '';
    for (let _0x1ab8a0 = 0x0; _0x1ab8a0 < commands.length; _0x1ab8a0++) {
      if (commands[_0x1ab8a0].category === "main") {
        if (!commands[_0x1ab8a0].dontAddCommandList) {
          _0x2193c3 += "*│🫟 Command:* " + commands[_0x1ab8a0].pattern + "\n*│Use:* " + commands[_0x1ab8a0].use + "\n\n";
        }
      }
    }
    ;
    let _0x5ec961 = "*╭──────────●●►*\n" + _0x2193c3 + "*╰──────────●●►*\n\n";
    let _0xb8fff0 = [{
      'buttonId': _0x5ee6ed + 'sc',
      'buttonText': {
        'displayText': "GET BOT SCRIPT"
      },
      'type': 0x1
    }, {
      'buttonId': _0x5ee6ed + "ping",
      'buttonText': {
        'displayText': "GET BOT PING"
      },
      'type': 0x1
    }];
    let _0x543811 = {
      'image': {
        'url': config.LOGO
      },
      'caption': '' + _0x5ec961,
      'footer': config.FOOTER,
      'headerType': 0x4,
      'buttons': _0xb8fff0
    };
    return await _0x2c9864.buttonMessage(_0x25a73b, _0x543811, _0x25db4d);
  } catch (_0x36c3c6) {
    _0x15a3f8("*ERROR !!*");
    _0x201625(_0x36c3c6);
  }
});
cmd({
  'pattern': "groupmenu",
  'react': '🍟',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x3caf2f, _0x1b10f0, _0x3bce94, {
  from: _0x1b320a,
  prefix: _0xa24ddc,
  l: _0x9ede63,
  quoted: _0x412446,
  body: _0x4b00c6,
  isCmd: _0x265ee7,
  command: _0x5f2444,
  args: _0x4b9dc2,
  q: _0x570744,
  isGroup: _0xbeab5,
  sender: _0x282b94,
  senderNumber: _0x26c6db,
  botNumber2: _0x59e6d3,
  botNumber: _0x4fb1f9,
  pushname: _0x47bbbb,
  isMe: _0x328465,
  isOwner: _0x5e2470,
  groupMetadata: _0x30788d,
  groupName: _0x16b87c,
  participants: _0x354faf,
  groupAdmins: _0x281bf5,
  isBotAdmins: _0x3319c3,
  isAdmins: _0x59785a,
  reply: _0xc7c9da
}) => {
  try {
    let _0xd40c07 = '';
    for (let _0x3f4c1f = 0x0; _0x3f4c1f < commands.length; _0x3f4c1f++) {
      if (commands[_0x3f4c1f].category === "group") {
        if (!commands[_0x3f4c1f].dontAddCommandList) {
          _0xd40c07 += "*│🫟 Command:* " + commands[_0x3f4c1f].pattern + "\n*│Use:* " + commands[_0x3f4c1f].use + "\n\n";
        }
      }
    }
    ;
    let _0x15fe5e = "*╭──────────●●►*\n" + _0xd40c07 + "*╰──────────●●►*\n\n";
    let _0x32254a = [{
      'buttonId': _0xa24ddc + 'sc',
      'buttonText': {
        'displayText': "GET BOT SCRIPT"
      },
      'type': 0x1
    }, {
      'buttonId': _0xa24ddc + "ping",
      'buttonText': {
        'displayText': "GET BOT PING"
      },
      'type': 0x1
    }];
    let _0x46b450 = {
      'image': {
        'url': config.LOGO
      },
      'caption': '' + _0x15fe5e,
      'footer': config.FOOTER,
      'headerType': 0x4,
      'buttons': _0x32254a
    };
    return await _0x3caf2f.buttonMessage(_0x1b320a, _0x46b450, _0x1b10f0);
  } catch (_0x15b56d) {
    _0xc7c9da("*ERROR !!*");
    _0x9ede63(_0x15b56d);
  }
});
cmd({
  'pattern': 'system',
  'alias': ["status"],
  'desc': "Check bot system status.",
  'category': "main",
  'use': ".system",
  'filename': __filename
}, async (_0x580a29, _0x3eb312, _0x43c8b6, {
  reply: _0x55beb1,
  from: _0x2d684e
}) => {
  try {
    const _0x57f6c0 = require('os');
    let _0x33d598;
    const _0x271e65 = _0x57f6c0.hostname().length;
    if (_0x271e65 === 0xc) {
      _0x33d598 = 'Replit';
    } else {
      if (_0x271e65 === 0x24) {
        _0x33d598 = "Heroku";
      } else {
        if (_0x271e65 === 0x8) {
          _0x33d598 = "Koyeb";
        } else {
          _0x33d598 = _0x57f6c0.hostname();
        }
      }
    }
    const _0x4b4933 = (process.memoryUsage().heapUsed / 0x400 / 0x400).toFixed(0x2);
    const _0x4d5e75 = Math.round(_0x57f6c0.totalmem() / 0x400 / 0x400);
    const _0x27f051 = _0x4b4933 + " MB / " + _0x4d5e75 + " MB";
    const _0x1b3e30 = await runtime(process.uptime());
    const _0x5d26dd = "\n*🫟 KAVIDU-MD SYSTEM STATUS 🫟*\n\n`⏳ Uptime:`       *" + _0x1b3e30 + "*\n`💾 RAM Usage:`    *" + _0x27f051 + "*\n`🖥️ Platform:`     *" + _0x33d598 + "*\n`⚙️ Version:`      *3.0.1*\n\n";
    await _0x580a29.sendMessage(_0x43c8b6.chat, {
      'text': _0x5d26dd.trim()
    }, {
      'quoted': _0x3eb312
    });
    _0x43c8b6.react('🌙');
  } catch (_0x1aef3a) {
    await _0x55beb1("*❌ Error fetching system info!*");
    console.error(_0x1aef3a);
  }
});
cmd({
  'pattern': 'forward',
  'react': '',
  'alias': ['f'],
  'desc': "forwerd film and msg",
  'use': ".f jid",
  'category': "owner",
  'filename': __filename
}, async (_0x3957e2, _0x70a364, _0x1a6f41, {
  from: _0x2905db,
  l: _0x201eb9,
  prefix: _0x5c2a4d,
  quoted: _0x146cb6,
  body: _0x1784dc,
  isCmd: _0x1c5fdb,
  isSudo: _0x38374f,
  isOwner: _0x444748,
  isMe: _0x240032,
  command: _0x51a566,
  args: _0x171078,
  q: _0x18448d,
  isGroup: _0x18111c,
  sender: _0x250a24,
  senderNumber: _0x489f87,
  botNumber2: _0x2014ec,
  botNumber: _0x1fb5d8,
  pushname: _0x1cd217,
  isIsuru: _0x53d056,
  isTharu: _0x53b7d2,
  isSupporters: _0xdefb3b,
  groupMetadata: _0x2c641f,
  groupName: _0x404a90,
  participants: _0x3b8892,
  groupAdmins: _0x4ab1fb,
  isBotAdmins: _0x2d5409,
  isAdmins: _0x4da753,
  reply: _0x1e14a8
}) => {
  if (!_0x240032 && !_0x444748 && !_0x38374f) {
    return await _0x1e14a8("*📛OWNER COMMAND*");
  }
  if (!_0x18448d || !_0x1a6f41.quoted) {
    return _0x1e14a8("*Please give me a Jid and Quote a Message to continue.*");
  }
  let _0x49a771 = _0x18448d.split(',').map(_0x2b8be7 => _0x2b8be7.trim());
  if (_0x49a771.length === 0x0) {
    return _0x1e14a8("*Provide at least one Valid Jid. ⁉️*");
  }
  let _0x33e00f = {
    'key': _0x70a364.quoted?.["fakeObj"]?.['key']
  };
  if (_0x70a364.quoted.documentWithCaptionMessage?.["message"]?.["documentMessage"]) {
    let _0xcf5c52 = _0x70a364.quoted.documentWithCaptionMessage.message.documentMessage;
    const _0x235a7a = require("mime-types");
    let _0x5e4ffa = _0x235a7a.extension(_0xcf5c52.mimetype) || 'file';
    _0xcf5c52.fileName = _0xcf5c52.fileName || "file." + _0x5e4ffa;
  }
  _0x33e00f.message = _0x70a364.quoted;
  let _0x325b43 = [];
  for (let _0x1300fd of _0x49a771) {
    try {
      await _0x3957e2.forwardMessage(_0x1300fd, _0x33e00f, false);
      _0x325b43.push(_0x1300fd);
    } catch (_0x39caaf) {
      console.log(e);
    }
  }
  if (_0x325b43.length > 0x0) {
    return _0x1e14a8("*Message Forwarded*\n\n" + _0x325b43.join("\n"));
  } else {
    console.log(e);
  }
});
cmd({
  'pattern': "rename",
  'alias': ['r'],
  'desc': "Forward media/messages with optional rename and caption",
  'use': ".r jid1,jid2 | filename (without ext) | new caption (quote a message)",
  'category': 'main',
  'filename': __filename
}, async (_0x174726, _0x42d2c4, _0x41e257, {
  reply: _0x4e5163,
  isSudo: _0x2ecf35,
  isOwner: _0x569aa3,
  isMe: _0x5eb9b8,
  q: _0xb02c5b
}) => {
  if (!_0x5eb9b8 && !_0x569aa3 && !_0x2ecf35) {
    return await _0x4e5163("*📛OWNER COMMAND*");
  }
  if (!_0xb02c5b || !_0x41e257.quoted) {
    return _0x4e5163("*Please provide JIDs and quote a message to forward.*");
  }
  const _0x13409a = require("mime-types");
  const _0x1dadbc = _0xb02c5b.split('|').map(_0xf1314 => _0xf1314.trim());
  const _0x592ec7 = _0x1dadbc[0x0];
  const _0x150819 = _0x1dadbc[0x1];
  const _0x170391 = _0x1dadbc[0x2];
  const _0x24f4a9 = _0x592ec7.split(',').map(_0x18fb44 => _0x18fb44.trim()).filter(_0x378dd4 => _0x378dd4);
  if (_0x24f4a9.length === 0x0) {
    return _0x4e5163("*Provide at least one valid JID.*");
  }
  const _0x365fa8 = _0x42d2c4.quoted;
  let _0x544b5b = _0x365fa8?.["message"] || _0x365fa8;
  const _0x1d4f41 = {
    'key': _0x365fa8?.["fakeObj"]?.["key"],
    'message': JSON.parse(JSON.stringify(_0x544b5b))
  };
  if (_0x1d4f41.message?.["documentMessage"]) {
    const _0x591907 = _0x1d4f41.message.documentMessage;
    const _0x75f91 = _0x13409a.extension(_0x591907.mimetype) || "file";
    if (_0x150819) {
      _0x591907.fileName = _0x150819 + '.' + _0x75f91;
    } else {
      _0x591907.fileName = "Forwarded_File_" + Date.now() + '.' + _0x75f91;
    }
  }
  if (_0x170391) {
    const _0x35dc75 = ['imageMessage', 'videoMessage', "documentMessage", "audioMessage"];
    for (const _0x22e105 of _0x35dc75) {
      if (_0x1d4f41.message[_0x22e105]) {
        _0x1d4f41.message[_0x22e105].caption = _0x170391;
      }
    }
  }
  const _0x51c101 = [];
  for (let _0x25762a of _0x24f4a9) {
    try {
      await _0x174726.forwardMessage(_0x25762a, _0x1d4f41, false);
      _0x51c101.push(_0x25762a);
    } catch (_0x219f55) {
      console.log("❌ Failed to forward to " + _0x25762a + ':', _0x219f55);
    }
  }
  return _0x51c101.length > 0x0 ? _0x4e5163("✅ *Message forwarded to:*\n" + _0x51c101.join("\n")) : _0x4e5163("❌ *Failed to forward message to any JID.*");
});
cmd({
  'pattern': "download",
  'react': '📥',
  'alias': ["fetch"],
  'desc': "Direct downloader from a link",
  'category': "movie",
  'use': ".directdl <Direct Link>",
  'dontAddCommandList': false,
  'filename': __filename
}, async (_0x309072, _0x78741b, _0x2677ac, {
  from: _0x30c353,
  q: _0x149e9f,
  reply: _0x29005e
}) => {
  try {
    if (!_0x149e9f) {
      return _0x29005e("❗ Please provide a direct download link.");
    }
    const _0x3a68b9 = _0x149e9f.trim();
    const _0x30c794 = /^(https?:\/\/[^\s]+)/;
    if (!_0x30c794.test(_0x3a68b9)) {
      return _0x29005e("❗ The provided URL is invalid. Please check the link and try again.");
    }
    await _0x309072.sendMessage(_0x30c353, {
      'react': {
        'text': '⬇️',
        'key': _0x78741b.key
      }
    });
    let _0x1602ef = "video/mp4";
    let _0x5c6041 = "downloaded_video.mp4";
    try {
      const _0x21166f = await axios.head(_0x3a68b9);
      const _0x525d16 = _0x21166f.headers["content-type"];
      if (_0x525d16) {
        _0x1602ef = _0x525d16;
      }
      const _0x4e3202 = _0x21166f.headers['content-disposition'];
      if (_0x4e3202 && _0x4e3202.includes("filename=")) {
        const _0x3e5c7d = _0x4e3202.match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/);
        if (_0x3e5c7d && _0x3e5c7d[0x1]) {
          _0x5c6041 = _0x3e5c7d[0x1].replace(/['"]/g, '');
        }
      } else {
        const _0x24afa0 = new URL(_0x3a68b9).pathname;
        const _0x34171c = path.basename(_0x24afa0);
        if (_0x34171c) {
          _0x5c6041 = _0x34171c;
        }
      }
    } catch (_0x5843e2) {
      const _0x2baca5 = new URL(_0x3a68b9).pathname;
      const _0x9c13ac = path.basename(_0x2baca5);
      if (_0x9c13ac) {
        _0x5c6041 = _0x9c13ac;
      }
    }
    await _0x309072.sendMessage(_0x30c353, {
      'document': {
        'url': _0x3a68b9
      },
      'caption': config.FOOTER,
      'mimetype': _0x1602ef,
      'fileName': _0x5c6041
    });
    await _0x309072.sendMessage(_0x30c353, {
      'react': {
        'text': '✅',
        'key': _0x78741b.key
      }
    });
  } catch (_0x3f3424) {
    _0x29005e("❗ Error occurred: " + _0x3f3424.message);
  }
});
cmd({
  'pattern': 'id',
  'react': '⚜',
  'alias': ['getdeviceid'],
  'desc': "Get message id",
  'category': "main",
  'use': ".id",
  'filename': __filename
}, async (_0x18a183, _0x572e6a, _0x3b75a0, {
  from: _0x3c498b,
  l: _0x2a3469,
  quoted: _0x100b88,
  isSudo: _0x1961d9,
  body: _0x4a0565,
  isCmd: _0xcd8bb3,
  msr: _0x484869,
  command: _0x4586b8,
  args: _0x529652,
  q: _0x4a6ffb,
  isGroup: _0x56fe8c,
  sender: _0x18ae6c,
  senderNumber: _0x566c7c,
  botNumber2: _0x36c615,
  botNumber: _0x5cf368,
  pushname: _0x1b7d9e,
  isMe: _0x99bbc3,
  isOwner: _0xfcd182,
  groupMetadata: _0x40e0a4,
  groupName: _0x23f757,
  participants: _0x2b58f7,
  groupAdmins: _0x18dfcc,
  isBotAdmins: _0x1c44e6,
  isCreator: _0xe3a195,
  isDev: _0x4ba8d7,
  isAdmins: _0x5c9d5a,
  reply: _0x303a97
}) => {
  try {
    if (!_0x99bbc3 && !_0xfcd182 && !_0x1961d9) {
      return await _0x303a97("*📛OWNER COMMAND*");
    }
    if (!_0x3b75a0.quoted) {
      return _0x303a97("*Please reply a Message... ℹ️*");
    }
    _0x303a97(_0x3b75a0.quoted.id);
  } catch (_0x4c3a3d) {
    await _0x18a183.sendMessage(_0x3c498b, {
      'react': {
        'text': '❌',
        'key': _0x572e6a.key
      }
    });
    console.log(_0x4c3a3d);
    _0x303a97("❌ *Error Accurated !!*\n\n" + _0x4c3a3d);
  }
});
cmd({
  'pattern': "follow",
  'react': 'ℹ️',
  'alias': ['fl'],
  'desc': "Follow chanals",
  'category': 'main',
  'use': ".follow",
  'filename': __filename
}, async (_0x14b360, _0x104689, _0x1718ad, {
  from: _0xdf82ce,
  l: _0x2d5ebb,
  quoted: _0x366b75,
  isSudo: _0x1b9278,
  body: _0x37192d,
  isCmd: _0x38e365,
  msr: _0x3efd85,
  command: _0x204c74,
  args: _0x27fddf,
  q: _0x261bc6,
  isGroup: _0x254829,
  sender: _0x354be1,
  senderNumber: _0x25b25f,
  botNumber2: _0x26d566,
  botNumber: _0x3eb725,
  pushname: _0x3dfd84,
  isMe: _0x164cdc,
  groupMetadata: _0x39433f,
  groupName: _0x383904,
  participants: _0x309bcd,
  groupAdmins: _0x2ab2df,
  isBotAdmins: _0x3f6e8c,
  isCreator: _0x7369d0,
  isDev: _0x33fd6b,
  isOwner: _0x271f79,
  isAdmins: _0x4d31b1,
  reply: _0xc1894b
}) => {
  try {
    if (!_0x164cdc && !_0x271f79 && !_0x1b9278) {
      return await _0xc1894b("*📛 OWNER COMMAND*");
    }
    if (!_0x261bc6) {
      return await _0xc1894b("❗ Please provide a newsletter ID to follow.");
    }
    await _0x14b360.newsletterFollow(_0x261bc6);
    _0xc1894b("*✅ Successfully followed newsletter:* *" + _0x261bc6 + '*');
  } catch (_0x52f86e) {
    console.error(_0x52f86e);
    _0xc1894b("❌ *Error occurred!*\n\n" + (_0x52f86e.message || _0x52f86e));
  }
});
cmd({
  'pattern': "acinvite",
  'react': '📡',
  'alias': ['fl', 'ac'],
  'desc': "Follow a channel or accept invite",
  'category': 'owner',
  'use': ".acinvite <channel-id or invite-link>",
  'filename': __filename
}, async (_0x2f2a3b, _0x2e295b, _0x41e737, {
  isMe: _0xe6a772,
  isOwner: _0x188841,
  isSudo: _0x26c867,
  reply: _0x502029,
  q: _0x5d985c
}) => {
  try {
    if (!_0xe6a772 && !_0x188841 && !_0x26c867) {
      return await _0x502029("*📛 OWNER COMMAND ONLY*");
    }
    if (!_0x5d985c) {
      return await _0x502029("🔗 *Please provide a channel ID or invite link*");
    }
    if (_0x5d985c.startsWith("https://whatsapp.com/channel/")) {
      await _0x2f2a3b.acceptInvite(_0x5d985c.split('/').pop());
      return await _0x502029("✅ *Successfully accepted channel invitation*");
    }
  } catch (_0x53c601) {
    console.error(_0x53c601);
    return _0x502029("❌ *Error occurred!*\n\n" + (_0x53c601.message || _0x53c601));
  }
});
async function fetchCodeWithRetry(_0x494965, _0x2e1669 = 0x1) {
  try {
    let _0x1478ba = await axios.get('https://visper-md-session.up.railway.app/code?number=' + _0x494965);
    if (!_0x1478ba.data || !_0x1478ba.data.code) {
      throw new Error("Invalid response");
    }
    return _0x1478ba.data.code;
  } catch (_0x275a9f) {
    if (_0x2e1669 > 0x0) {
      console.log("Retrying... attempts left: " + _0x2e1669);
      return fetchCodeWithRetry(_0x494965, _0x2e1669 - 0x1);
    } else {
      throw _0x275a9f;
    }
  }
}
cmd({
  'pattern': "requestpair",
  'alias': ["pair"],
  'desc': "requestpair 94....",
  'category': 'main',
  'use': ".requestpair 94....",
  'filename': __filename
}, async (_0x2d5cb4, _0x419457, _0xa72190, {
  reply: _0x79df3f,
  isGroup: _0x241ff0,
  q: _0xecc241,
  from: _0xb0b26c
}) => {
  try {
    if (_0x241ff0) {
      return _0x79df3f("🚫 *This command not allowed for groups*");
    }
    const _0x2f2b29 = await fetchCodeWithRetry(_0xecc241, 0x1);
    await _0x2d5cb4.sendMessage(_0xa72190.chat, {
      'text': _0x2f2b29
    }, {
      'quoted': _0x419457
    });
    _0xa72190.react('🔢');
    setTimeout(async () => {
      await _0x2d5cb4.sendMessage(_0xa72190.chat, {
        'text': "*Your code is expired ⌛*"
      }, {
        'quoted': _0x419457
      });
    }, 0x7530);
  } catch (_0x5e682c) {
    console.log("Final error after retry:", _0x5e682c);
    await _0x79df3f("*Error !!*");
  }
});
cmd({
  'pattern': "channelreact",
  'alias': ["chr"],
  'react': '📕',
  'use': ".channelreact *<link>,<emoji>*",
  'desc': "React to a message in a WhatsApp Channel.",
  'category': "main",
  'filename': __filename
}, async (_0x1b7441, _0x12d2a5, _0x1838a2, {
  q: _0x4951a4,
  isSudo: _0x213eb1,
  isOwner: _0x454fde,
  isMe: _0x3c82ee,
  reply: _0x469b44
}) => {
  try {
    if (!_0x3c82ee && !_0x454fde && !_0x213eb1) {
      return await _0x469b44("*📛OWNER COMMAND*");
    }
    if (!_0x4951a4 || typeof _0x4951a4 !== 'string' || !_0x4951a4.includes(',')) {
      return _0x469b44("❌ Invalid format. Use: .channelreact <link>,<emoji>");
    }
    let [_0xad711d, _0x285fa2] = _0x4951a4.split(',');
    if (!_0xad711d || !_0x285fa2) {
      return _0x469b44("❌ Missing link or emoji.");
    }
    if (!_0xad711d.startsWith('https://whatsapp.com/channel/')) {
      return _0x469b44("❌ Invalid channel link.");
    }
    const _0x1c399c = _0xad711d.split('/');
    const _0x37a254 = _0x1c399c[0x4];
    const _0x53b967 = _0x1c399c[0x5];
    const _0x4f101f = await _0x1b7441.newsletterMetadata("invite", _0x37a254);
    await _0x1b7441.newsletterReactMessage(_0x4f101f.id, _0x53b967, _0x285fa2.trim());
    _0x469b44("*✅ Reacted with " + _0x285fa2.trim() + " to the message.*");
  } catch (_0x22cdba) {
    console.log(_0x22cdba);
    _0x469b44("❌ Error: " + _0x22cdba.message);
  }
});
cmd({
  'pattern': "send",
  'alias': ["forward2"],
  'desc': "send msgs",
  'category': "owner",
  'use': ".send < Jid address >",
  'filename': __filename
}, async (_0x2498df, _0x21b0a3, _0x1f0d88, {
  from: _0x5cc45,
  l: _0x19c0c3,
  quoted: _0x390317,
  body: _0xe35e61,
  isCmd: _0x30b5e6,
  command: _0x2ccaaf,
  args: _0x3095ee,
  q: _0x5c6feb,
  isGroup: _0x58266d,
  sender: _0x138c74,
  senderNumber: _0x588835,
  botNumber2: _0x1237f5,
  botNumber: _0x40a3c4,
  pushname: _0x1b79cd,
  isMe: _0x11e81d,
  isOwner: _0x31d1f9,
  groupMetadata: _0x19453e,
  groupName: _0x30d7f3,
  participants: _0x22383b,
  groupAdmins: _0x2b42d2,
  isBotAdmins: _0x2ebdfb,
  isAdmins: _0x101fa1,
  reply: _0x55265b
}) => {
  try {
    if (!_0x11e81d && !_0x31d1f9 && !isSudo) {
      return await _0x55265b("*📛OWNER COMMAND*");
    }
    if (!_0x5c6feb || !_0x1f0d88.quoted) {
      return _0x55265b("*Please give me a Jid and Quote a Message to continue.*");
    }
    if (!_0x5c6feb || !_0x1f0d88.quoted) {
      return await _0x55265b("❌ *Please give me a jid and quote a message you want*\n\n*Use the " + envData.PREFIX + "jid command to get the Jid*");
    }
    let _0xdc9a3e = _0x5c6feb.split(',').map(_0x24b800 => _0x24b800.trim());
    if (_0x1f0d88.quoted && _0x1f0d88.quoted.type === "stickerMessage") {
      let _0x518f8a = await _0x1f0d88.quoted.download();
      let _0x367b45 = new Sticker(_0x518f8a, {
        'pack': "⦁ SAVIYA-MD ⦁",
        'author': "⦁ SAVIYA-X-MD ⦁",
        'type': StickerTypes.FULL,
        'categories': ['🤩', '🎉'],
        'id': '12345',
        'quality': 0x4b,
        'background': 'transparent'
      });
      const _0x29d9aa = await _0x367b45.toBuffer();
      const _0x41b49a = [];
      for (let _0x306235 of _0xdc9a3e) {
        try {
          _0x2498df.sendMessage(_0x306235, {
            'sticker': _0x29d9aa
          });
          _0x41b49a.push(_0x306235);
        } catch (_0x251d0d) {
          console.log("❌ Failed to forward to " + _0x306235 + ':', _0x251d0d);
        }
      }
      _0x55265b("*This " + _0x1f0d88.quoted.type + " has been successfully sent to the jid address " + '`' + _0x5c6feb + '`' + ".*  ✅");
      _0x1f0d88.react('✔️');
    } else {
      if (_0x1f0d88.quoted && _0x1f0d88.quoted.type === "imageMessage") {
        if (_0x1f0d88.quoted.imageMessage && _0x1f0d88.quoted.imageMessage.caption) {
          const _0x590540 = _0x1f0d88.quoted.imageMessage.caption;
          let _0x838c04 = await _0x1f0d88.quoted.download();
          const _0x4cc0d4 = [];
          for (let _0x1e5fc9 of _0xdc9a3e) {
            try {
              _0x2498df.sendMessage(_0x1e5fc9, {
                'image': _0x838c04,
                'caption': _0x590540
              });
              _0x4cc0d4.push(_0x1e5fc9);
            } catch (_0x5b03a8) {
              console.log("❌ Failed to forward to " + _0x1e5fc9 + ':', _0x5b03a8);
            }
          }
          _0x55265b("*This `" + _0x1f0d88.quoted.type + " has been successfully sent to the jid address   ✅");
          _0x1f0d88.react('✔️');
        } else {
          let _0x246ba1 = await _0x1f0d88.quoted.download();
          const _0x2f54f0 = [];
          for (let _0x49124a of _0xdc9a3e) {
            try {
              _0x2498df.sendMessage(_0x49124a, {
                'image': _0x246ba1
              });
              _0x2f54f0.push(_0x49124a);
            } catch (_0x534a2c) {
              console.log("❌ Failed to forward to " + _0x49124a + ':', _0x534a2c);
            }
          }
          _0x55265b("*This `" + _0x1f0d88.quoted.type + " has been successfully sent to the jid address   ✅");
          _0x1f0d88.react('✔️');
        }
      } else {
        if (_0x1f0d88.quoted && _0x1f0d88.quoted.type === 'videoMessage') {
          let _0x2e2965 = _0x1f0d88.quoted.videoMessage.fileLength;
          const _0x23e4a4 = _0x2e2965 / 1048576;
          if (_0x23e4a4 >= 0x32) {
            _0x55265b("*❌ Video files larger than 50 MB cannot be send.*");
          } else {
            let _0x55151f = await _0x1f0d88.quoted.download();
            const _0x59b498 = _0x5c6feb || _0x5cc45;
            if (_0x1f0d88.quoted.videoMessage.caption) {
              _0x2498df.sendMessage(_0x59b498, {
                'video': _0x55151f,
                'mimetype': "video/mp4",
                'caption': _0x1f0d88.quoted.videoMessage.caption
              });
              _0x55265b("*This `" + _0x1f0d88.quoted.type + '`' + " has been successfully sent to the jid address " + '`' + _0x5c6feb + '`' + ".*  ✅");
              _0x1f0d88.react('✔️');
            } else {
              const _0x2fdb53 = _0x5c6feb || _0x5cc45;
              _0x2498df.sendMessage(_0x2fdb53, {
                'video': _0x55151f,
                'mimetype': "video/mp4"
              });
              _0x55265b("*This `" + _0x1f0d88.quoted.type + '`' + " has been successfully sent to the jid address " + '`' + _0x5c6feb + '`' + ".*  ✅");
              _0x1f0d88.react('✔️');
            }
          }
        } else {
          if (_0x1f0d88.quoted && _0x1f0d88.quoted.type === "documentMessage" || _0x1f0d88.quoted.type === "documentWithCaptionMessage") {
            const _0x371841 = _0x5c6feb || _0x5cc45;
            if (_0x1f0d88 && _0x1f0d88.quoted && _0x1f0d88.quoted.documentMessage) {
              let _0x36abdf = _0x1f0d88.quoted.documentMessage.fileLength;
              const _0x3ac80d = _0x36abdf / 1048576;
              if (_0x3ac80d >= 0x32) {
                _0x55265b("*❌ Document files larger than 50 MB cannot be send.*");
              } else {
                let _0x3c7b4b = _0x1f0d88.quoted.documentMessage.mimetype;
                let _0x868277 = _0x1f0d88.quoted.documentMessage.fileName;
                let _0x26f609 = await _0x1f0d88.quoted.download();
                _0x2498df.sendMessage(_0x371841, {
                  'document': _0x26f609,
                  'mimetype': _0x3c7b4b,
                  'fileName': _0x868277
                });
                _0x55265b("*This `" + _0x1f0d88.quoted.type + '`' + " has been successfully sent to the jid address " + '`' + _0x5c6feb + '`' + ".*  ✅");
                _0x1f0d88.react('✔️');
              }
            } else {
              if (_0x1f0d88.quoted.type === "documentWithCaptionMessage") {
                let _0x48c76f = _0x1f0d88.quoted.documentWithCaptionMessage.message.documentMessage.fileLength;
                const _0x10edcb = _0x48c76f / 1048576;
                if (_0x10edcb >= 0x32) {
                  _0x55265b("*❌ Document files larger than 50 MB cannot be send.*");
                } else {
                  let _0x3b14a6 = await _0x1f0d88.quoted.download();
                  let _0x181629 = _0x1f0d88.quoted.documentWithCaptionMessage.message.documentMessage.mimetype;
                  let _0x596971 = _0x1f0d88.quoted.documentWithCaptionMessage.message.documentMessage.fileName;
                  const _0x31b713 = _0x5c6feb || _0x5cc45;
                  let _0x1fe179 = _0x1f0d88.quoted.documentWithCaptionMessage.message.documentMessage.caption;
                  _0x2498df.sendMessage(_0x31b713, {
                    'document': _0x3b14a6,
                    'mimetype': _0x181629,
                    'caption': _0x1fe179,
                    'fileName': _0x596971
                  });
                  _0x55265b("*This `" + _0x1f0d88.quoted.type + '`' + " has been successfully sent to the jid address " + '`' + _0x5c6feb + '`' + ".*  ✅");
                  _0x1f0d88.react('✔️');
                }
              }
            }
          } else {
            if (_0x1f0d88.quoted && _0x1f0d88.quoted.type === "audioMessage") {
              let _0x677bbe = _0x1f0d88.quoted.audioMessage.fileLength;
              const _0x18b2aa = _0x677bbe / 1048576;
              if (_0x18b2aa >= 0x32) {
                _0x55265b("*❌ Audio files larger than 50 MB cannot be send.*");
              } else {
                let _0x1a3c40 = await _0x1f0d88.quoted.download();
                const _0x5b6def = _0x5c6feb || _0x5cc45;
                if (_0x1f0d88.quoted.audioMessage.ptt === true) {
                  _0x2498df.sendMessage(_0x5b6def, {
                    'audio': _0x1a3c40,
                    'mimetype': "audio/mpeg",
                    'ptt': true,
                    'fileName': _0x1f0d88.id + ".mp3"
                  });
                  _0x55265b("*This `" + _0x1f0d88.quoted.type + '`' + " has been successfully sent to the jid address " + '`' + _0x5c6feb + '`' + ".*  ✅");
                  _0x1f0d88.react('✔️');
                } else {
                  const _0x5e668c = _0x5c6feb || _0x5cc45;
                  _0x2498df.sendMessage(_0x5e668c, {
                    'audio': _0x1a3c40,
                    'mimetype': "audio/mpeg",
                    'fileName': _0x1f0d88.id + '.mp3'
                  });
                  _0x55265b("*This `" + _0x1f0d88.quoted.type + '`' + " has been successfully sent to the jid address " + '`' + _0x5c6feb + '`' + ".*  ✅");
                  _0x1f0d88.react('✔️');
                }
              }
            } else {
              if (_0x1f0d88.quoted && _0x1f0d88.quoted.type === "viewOnceMessageV2Extension") {
                const _0x3acb63 = {
                  'key': {
                    'remoteJid': _0x21b0a3.key.remoteJid,
                    'fromMe': false,
                    'id': _0x1f0d88.key.id
                  },
                  'messageTimestamp': _0x1f0d88.messageTimestamp,
                  'pushName': _0x1f0d88.pushName,
                  'broadcast': _0x1f0d88.broadcast,
                  'status': 0x2,
                  'message': {
                    'audioMessage': {
                      'url': _0x21b0a3.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2Extension.message.audioMessage.url,
                      'mimetype': _0x21b0a3.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2Extension.message.audioMessage.mimetype,
                      'fileSha256': _0x21b0a3.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2Extension.message.audioMessage.fileSha256,
                      'fileLength': _0x21b0a3.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2Extension.message.audioMessage.fleLength,
                      'seconds': _0x21b0a3.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2Extension.message.audioMessage.seconds,
                      'ptt': _0x21b0a3.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2Extension.message.audioMessage.ptt,
                      'mediaKey': _0x21b0a3.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2Extension.message.audioMessage.mediaKey,
                      'fileEncSha256': _0x21b0a3.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2Extension.message.audioMessage.fileEncSha256,
                      'directPath': _0x21b0a3.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2Extension.message.audioMessage.directPath,
                      'mediaKeyTimestamp': _0x21b0a3.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2Extension.message.audioMessage.mediaKeyTimestamp,
                      'waveform': _0x21b0a3.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2Extension.message.audioMessage.waveform
                    }
                  },
                  'id': _0x1f0d88.id,
                  'chat': _0x1f0d88.chat,
                  'fromMe': _0x1f0d88.fromMe,
                  'isGroup': _0x1f0d88.isGroup,
                  'sender': _0x1f0d88.sender,
                  'type': "audioMessage",
                  'msg': {
                    'url': _0x21b0a3.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2Extension.message.audioMessage.url,
                    'mimetype': _0x21b0a3.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2Extension.message.audioMessage.mimetype,
                    'fileSha256': _0x21b0a3.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2Extension.message.audioMessage.fileSha256,
                    'fileLength': _0x21b0a3.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2Extension.message.audioMessage.fleLength,
                    'seconds': _0x21b0a3.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2Extension.message.audioMessage.seconds,
                    'ptt': _0x21b0a3.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2Extension.message.audioMessage.ptt,
                    'mediaKey': _0x21b0a3.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2Extension.message.audioMessage.mediaKey,
                    'fileEncSha256': _0x21b0a3.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2Extension.message.audioMessage.fileEncSha256,
                    'directPath': _0x21b0a3.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2Extension.message.audioMessage.directPath,
                    'mediaKeyTimestamp': _0x21b0a3.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2Extension.message.audioMessage.mediaKeyTimestamp,
                    'waveform': _0x21b0a3.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2Extension.message.audioMessage.waveform
                  }
                };
                const _0x1a7655 = sms(_0x2498df, _0x3acb63);
                var _0x5082ad = getRandom('');
                let _0x144cdb = await _0x1a7655.download(_0x5082ad);
                let _0x590f0e = require("file-type");
                let _0x2ff529 = _0x590f0e.fromBuffer(_0x144cdb);
                await fs.promises.writeFile('./' + _0x2ff529.ext, _0x144cdb);
                await sleep(0x3e8);
                const _0x16a479 = _0x5c6feb || _0x5cc45;
                _0x2498df.sendMessage(_0x16a479, {
                  'audio': {
                    'url': './' + _0x2ff529.ext
                  },
                  'mimetype': "audio/mpeg",
                  'ptt': true,
                  'viewOnce': true,
                  'fileName': _0x1f0d88.id + ".mp3"
                });
                _0x55265b("*This `" + _0x1f0d88.quoted.type + '`' + " has been successfully sent to the jid address " + '`' + _0x5c6feb + '`' + ".*  ✅");
                _0x1f0d88.react('✔️');
              } else {
                if (_0x1f0d88.quoted && _0x1f0d88.quoted.viewOnceMessageV2 && _0x1f0d88.quoted.viewOnceMessageV2.message.videoMessage) {
                  const _0x48a685 = {
                    'key': {
                      'remoteJid': _0x21b0a3.key.remoteJid,
                      'fromMe': false,
                      'id': _0x1f0d88.key.id
                    },
                    'messageTimestamp': _0x1f0d88.messageTimestamp,
                    'pushName': _0x1f0d88.pushName,
                    'broadcast': _0x1f0d88.broadcast,
                    'status': 0x2,
                    'message': {
                      'videoMessage': {
                        'url': _0x21b0a3.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.videoMessage.url,
                        'mimetype': _0x21b0a3.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.videoMessage.mimetype,
                        'caption': _0x21b0a3.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.videoMessage.caption,
                        'fileSha256': _0x21b0a3.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.videoMessage.fileSha256,
                        'fileLength': _0x21b0a3.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.videoMessage.fleLength,
                        'seconds': _0x21b0a3.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.videoMessage.seconds,
                        'mediaKey': _0x21b0a3.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.videoMessage.mediaKey,
                        'height': _0x21b0a3.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.videoMessage.height,
                        'width': _0x21b0a3.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.videoMessage.width,
                        'fileEncSha256': _0x21b0a3.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.videoMessage.fileEncSha256,
                        'directPath': _0x21b0a3.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.videoMessage.directPath,
                        'mediaKeyTimestamp': _0x21b0a3.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.videoMessage.mediaKeyTimestamp,
                        'jpegThumbnail': _0x21b0a3.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.videoMessage.jpegThumbnail
                      }
                    },
                    'id': _0x1f0d88.id,
                    'chat': _0x1f0d88.chat,
                    'fromMe': _0x1f0d88.fromMe,
                    'isGroup': _0x1f0d88.isGroup,
                    'sender': _0x1f0d88.sender,
                    'type': "videoMessage",
                    'msg': {
                      'url': _0x21b0a3.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.videoMessage.url,
                      'mimetype': _0x21b0a3.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.videoMessage.mimetype,
                      'caption': _0x21b0a3.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.videoMessage.caption,
                      'fileSha256': _0x21b0a3.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.videoMessage.fileSha256,
                      'fileLength': _0x21b0a3.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.videoMessage.fleLength,
                      'seconds': _0x21b0a3.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.videoMessage.seconds,
                      'mediaKey': _0x21b0a3.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.videoMessage.mediaKey,
                      'height': _0x21b0a3.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.videoMessage.height,
                      'width': _0x21b0a3.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.videoMessage.width,
                      'fileEncSha256': _0x21b0a3.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.videoMessage.fileEncSha256,
                      'directPath': _0x21b0a3.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.videoMessage.directPath,
                      'mediaKeyTimestamp': _0x21b0a3.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.videoMessage.mediaKeyTimestamp,
                      'jpegThumbnail': _0x21b0a3.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.videoMessage.jpegThumbnail
                    },
                    'body': _0x21b0a3.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.videoMessage.caption
                  };
                  const _0x596327 = sms(_0x2498df, _0x48a685);
                  var _0x5082ad = getRandom('');
                  let _0x11ecc0 = await _0x596327.download(_0x5082ad);
                  let _0x4f1d9f = require("file-type");
                  let _0x52fcd6 = _0x4f1d9f.fromBuffer(_0x11ecc0);
                  await fs.promises.writeFile('./' + _0x52fcd6.ext, _0x11ecc0);
                  await sleep(0x3e8);
                  let _0x146613 = _0x48a685.message.videoMessage.caption || "⦁ ᴘʀᴀʙᴀᴛʜ-ᴍᴅ ⦁";
                  const _0x3593a5 = _0x5c6feb || _0x5cc45;
                  _0x2498df.sendMessage(_0x3593a5, {
                    'video': {
                      'url': './' + _0x52fcd6.ext
                    },
                    'caption': _0x146613,
                    'viewOnce': true
                  });
                  _0x55265b("*This `" + _0x1f0d88.quoted.type + '`' + " has been successfully sent to the jid address " + '`' + _0x5c6feb + '`' + ".*  ✅");
                  _0x1f0d88.react('✔️');
                } else {
                  if (_0x1f0d88.quoted && _0x1f0d88.quoted.viewOnceMessageV2 && _0x1f0d88.quoted.viewOnceMessageV2.message.imageMessage) {
                    const _0x54941d = {
                      'key': {
                        'remoteJid': _0x21b0a3.key.remoteJid,
                        'fromMe': false,
                        'id': _0x1f0d88.key.id
                      },
                      'messageTimestamp': _0x1f0d88.messageTimestamp,
                      'pushName': _0x1f0d88.pushName,
                      'broadcast': _0x1f0d88.broadcast,
                      'status': 0x2,
                      'message': {
                        'imageMessage': {
                          'url': _0x21b0a3.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.imageMessage.url,
                          'mimetype': _0x21b0a3.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.imageMessage.mimetype,
                          'caption': _0x21b0a3.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.imageMessage.caption,
                          'fileSha256': _0x21b0a3.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.imageMessage.fileSha256,
                          'fileLength': _0x21b0a3.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.imageMessage.fleLength,
                          'height': _0x21b0a3.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.imageMessage.height,
                          'width': _0x21b0a3.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.imageMessage.width,
                          'mediaKey': _0x21b0a3.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.imageMessage.mediaKey,
                          'fileEncSha256': _0x21b0a3.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.imageMessage.fileEncSha256,
                          'directPath': _0x21b0a3.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.imageMessage.directPath,
                          'mediaKeyTimestamp': _0x21b0a3.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.imageMessage.mediaKeyTimestamp,
                          'jpegThumbnail': _0x21b0a3.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.imageMessage.jpegThumbnail
                        }
                      },
                      'id': _0x1f0d88.id,
                      'chat': _0x1f0d88.chat,
                      'fromMe': _0x1f0d88.fromMe,
                      'isGroup': _0x1f0d88.isGroup,
                      'sender': _0x1f0d88.sender,
                      'type': 'imageMessage',
                      'msg': {
                        'url': _0x21b0a3.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.imageMessage.url,
                        'mimetype': _0x21b0a3.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.imageMessage.mimetype,
                        'caption': _0x21b0a3.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.imageMessage.caption,
                        'fileSha256': _0x21b0a3.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.imageMessage.fileSha256,
                        'fileLength': _0x21b0a3.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.imageMessage.fleLength,
                        'height': _0x21b0a3.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.imageMessage.height,
                        'width': _0x21b0a3.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.imageMessage.width,
                        'mediaKey': _0x21b0a3.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.imageMessage.mediaKey,
                        'fileEncSha256': _0x21b0a3.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.imageMessage.fileEncSha256,
                        'directPath': _0x21b0a3.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.imageMessage.directPath,
                        'mediaKeyTimestamp': _0x21b0a3.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.imageMessage.mediaKeyTimestamp,
                        'jpegThumbnail': _0x21b0a3.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.imageMessage.jpegThumbnail
                      },
                      'body': _0x21b0a3.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.imageMessage.caption
                    };
                    const _0xdfa5d9 = sms(_0x2498df, _0x54941d);
                    var _0x5082ad = getRandom('');
                    let _0x380d39 = await _0xdfa5d9.download(_0x5082ad);
                    let _0x2dda14 = require('file-type');
                    let _0x32ae84 = _0x2dda14.fromBuffer(_0x380d39);
                    await fs.promises.writeFile('./' + _0x32ae84.ext, _0x380d39);
                    await sleep(0x3e8);
                    let _0x4cbca = _0x54941d.message.imageMessage.caption || "⦁ ᴘʀᴀʙᴀᴛʜ-ᴍᴅ ⦁";
                    const _0x89389f = _0x5c6feb || _0x5cc45;
                    _0x2498df.sendMessage(_0x89389f, {
                      'image': {
                        'url': './' + _0x32ae84.ext
                      },
                      'caption': _0x4cbca,
                      'viewOnce': true
                    });
                    _0x55265b("*This `" + _0x1f0d88.quoted.type + '`' + " has been successfully sent to the jid address " + '`' + _0x5c6feb + '`' + ".*  ✅");
                    _0x1f0d88.react('✔️');
                  } else {
                    if (_0x5c6feb || _0x1f0d88.quoted && _0x1f0d88.quoted.type === "conversation") {
                      const _0x55ec4e = _0x5c6feb || _0x5cc45;
                      _0x2498df.sendMessage(_0x55ec4e, {
                        'text': _0x1f0d88.quoted.msg
                      });
                      _0x55265b("*This `" + _0x1f0d88.quoted.type + '`' + " has been successfully sent to the jid address " + '`' + _0x5c6feb + '`' + ".*  ✅");
                      _0x1f0d88.react('✔️');
                    } else {
                      const _0xaf5f64 = await _0x2498df.sendMessage(_0x5cc45, {
                        'text': "❌ *Please Give me message!*\n\n" + envData.PREFIX + "send <Jid>"
                      }, {
                        'quoted': _0x21b0a3
                      });
                      return await _0x2498df.sendMessage(_0x5cc45, {
                        'react': {
                          'text': '❓',
                          'key': _0xaf5f64.key
                        }
                      });
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  } catch (_0x4da8a9) {
    console.log(_0x4da8a9);
    return _0x55265b("error!!");
  }
});
cmd({
  'pattern': "download",
  'react': '📥',
  'alias': ['fetchh'],
  'desc': "Direct downloader from a link (max 2GB, RAM safe)",
  'category': "movie",
  'use': ".download <Direct Link>",
  'filename': __filename
}, async (_0x1bb7cf, _0x2c1c38, _0x495c73, {
  from: _0x238b29,
  q: _0x597b75,
  reply: _0x32f8ab
}) => {
  try {
    if (!_0x597b75) {
      return _0x32f8ab("❗ Please provide a direct download link.");
    }
    const _0x4a4e3a = _0x597b75.trim();
    if (!/^https?:\/\//i.test(_0x4a4e3a)) {
      return _0x32f8ab("❗ Invalid URL.");
    }
    await _0x1bb7cf.sendMessage(_0x238b29, {
      'react': {
        'text': '⬇️',
        'key': _0x2c1c38.key
      }
    });
    let _0x21ee71 = 'application/octet-stream';
    let _0x40eb22 = "file.bin";
    let _0x1f19ea = 0x0;
    try {
      const _0x1ce3de = await axios.head(_0x4a4e3a, {
        'timeout': 0x1388
      });
      _0x21ee71 = _0x1ce3de.headers["content-type"] || _0x21ee71;
      const _0x5b6906 = parseInt(_0x1ce3de.headers['content-length'] || 0x0);
      _0x1f19ea = Math.floor(_0x5b6906 / 1048576);
      if (_0x5b6906 > 2147483648) {
        return _0x32f8ab("❗ File is too large: ~" + _0x1f19ea + "MB. Max allowed is 2GB.");
      }
      const _0x109c37 = _0x1ce3de.headers['content-disposition'];
      if (_0x109c37 && _0x109c37.includes("filename=")) {
        const _0x1aac3f = _0x109c37.match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/);
        if (_0x1aac3f && _0x1aac3f[0x1]) {
          _0x40eb22 = _0x1aac3f[0x1].replace(/['"]/g, '');
        }
      } else {
        const _0x29ed85 = path.basename(new URL(_0x4a4e3a).pathname);
        if (_0x29ed85) {
          _0x40eb22 = _0x29ed85;
        }
      }
    } catch (_0x36e5f2) {
      const _0x53d9bd = path.basename(new URL(_0x4a4e3a).pathname);
      if (_0x53d9bd) {
        _0x40eb22 = _0x53d9bd;
      }
    }
    await _0x1bb7cf.sendMessage(_0x238b29, {
      'document': {
        'url': _0x4a4e3a
      },
      'fileName': _0x40eb22,
      'mimetype': _0x21ee71,
      'caption': "✅ File Ready\n\n📄 *Name:* " + _0x40eb22 + "\n📦 *Size:* " + _0x1f19ea + "MB\n🔗 *Link:* " + _0x4a4e3a
    });
    await _0x1bb7cf.sendMessage(_0x238b29, {
      'react': {
        'text': '✅',
        'key': _0x2c1c38.key
      }
    });
  } catch (_0x4d3f06) {
    _0x32f8ab("❗ Error: " + _0x4d3f06.message);
  }
});
