const config = require("../config");
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
var {
  updateCMDStore,
  isbtnID,
  getCMDStore,
  getCmdForCmdId,
  connectdb,
  input,
  get,
  updb,
  updfb
} = require('../lib/database');
let BOTOW = '';
if (config.LANG === 'SI') {
  BOTOW = "*ඔබ Bot හි හිමිකරු හෝ උපපරිපාලකයෙකු නොවේ !*";
} else {
  BOTOW = "*You are not the bot's owner or moderator !*";
}
cmd({
  'pattern': 'settings',
  'alias': ["setting", "botsetting"],
  'category': 'owner',
  'use': ".settings",
  'filename': __filename
}, async (_0x39adca, _0x13d588, _0x152230, {
  from: _0x2f49c6,
  l: _0xa93aae,
  quoted: _0x1bd670,
  body: _0x86460d,
  isCmd: _0x59dbb2,
  command: _0x196fc0,
  args: _0x5e146,
  prefix: _0x352c08,
  q: _0x5efb2e,
  isSudo: _0x467c07,
  isGroup: _0x475401,
  sender: _0x22689c,
  senderNumber: _0x53c126,
  botNumber2: _0x47bf9a,
  botNumber: _0x4b7bfb,
  pushname: _0x14d080,
  isMe: _0x279606,
  isOwner: _0x21c902,
  groupMetadata: _0x4f4248,
  groupName: _0x306a79,
  participants: _0xfe02df,
  groupAdmins: _0x38f99b,
  isBotAdmins: _0x4b7f2c,
  isAdmins: _0x1712be,
  reply: _0x4a19d6
}) => {
  try {
    if (!_0x279606 && !_0x467c07) {
      return await _0x4a19d6("*OWNER COMMAND ⛔*");
    }
    const _0xfd8daf = [{
      'title': "`👉 WORK_TYPE 👈`",
      'rows': [{
        'title': "_PUBLIC ✔️_",
        'rowId': _0x352c08 + "work_type public"
      }, {
        'title': "_PRIVATE ✔️_",
        'rowId': _0x352c08 + "work_type private"
      }, {
        'title': "_ONLY GROUP ✔️_",
        'rowId': _0x352c08 + "work_type only_group"
      }, {
        'title': "_INBOX ✔️_",
        'rowId': _0x352c08 + "work_type inbox"
      }]
    }, {
      'title': "`👉 AUTO_STATUS_READ 👈`",
      'rows': [{
        'title': "_ON ✔️_",
        'rowId': _0x352c08 + "autos on"
      }, {
        'title': "_OFF ❌_",
        'rowId': _0x352c08 + "autos off"
      }]
    }, {
      'title': "`👉 AUTO_MSG_READ 👈`",
      'rows': [{
        'title': "_ON ✔️_",
        'rowId': _0x352c08 + "autoread on"
      }, {
        'title': "_OFF ❌_",
        'rowId': _0x352c08 + "autoread off"
      }]
    }, {
      'title': "`👉 AUTO_RECORDING 👈`",
      'rows': [{
        'title': "_ON ✔️_",
        'rowId': _0x352c08 + "autorec on"
      }, {
        'title': "_OFF ❌_",
        'rowId': _0x352c08 + "autorec off"
      }]
    }, {
      'title': "`👉 AUTO_TYPING 👈`",
      'rows': [{
        'title': "_ON ✔️_",
        'rowId': _0x352c08 + "autotyping on"
      }, {
        'title': "_OFF ❌_",
        'rowId': _0x352c08 + "autotyping off"
      }]
    }, {
      'title': "`👉 READ_ONLY_COMMANDS 👈`",
      'rows': [{
        'title': "_ON ✔️_",
        'rowId': _0x352c08 + "ronly on"
      }, {
        'title': "_OFF ❌_",
        'rowId': _0x352c08 + "ronly off"
      }]
    }, {
      'title': "`👉 AUTO_BLOCK 👈`",
      'rows': [{
        'title': "_ON ✔️_",
        'rowId': _0x352c08 + "autoblock on"
      }, {
        'title': "_OFF ❌_",
        'rowId': _0x352c08 + "autoblock off"
      }]
    }, {
      'title': "`👉 ANTI_CALL 👈`",
      'rows': [{
        'title': "_ON ✔️_",
        'rowId': _0x352c08 + "anticall on"
      }, {
        'title': "_OFF ❌_",
        'rowId': _0x352c08 + "anticall off"
      }]
    }, {
      'title': "`👉 AUTO_REACT 👈`",
      'rows': [{
        'title': "_ON ✔️_",
        'rowId': _0x352c08 + "autoreact on"
      }, {
        'title': "_OFF ❌_",
        'rowId': _0x352c08 + "autoreact off"
      }]
    }, {
      'title': "`👉 AI_CHAT 👈`",
      'rows': [{
        'title': "_ON ✔️_",
        'rowId': _0x352c08 + "chatbot on"
      }, {
        'title': "_OFF ❌_",
        'rowId': _0x352c08 + "chatbot off"
      }]
    }, {
      'title': "`👉 ANTI_DELETE 👈`",
      'rows': [{
        'title': "_ON ✔️_",
        'rowId': _0x352c08 + "antdel on"
      }, {
        'title': "_OFF ❌_",
        'rowId': _0x352c08 + "antdel off"
      }]
    }, {
      'title': "`👉 ANTI_LINK 👈`",
      'rows': [{
        'title': "_ON ✔️_",
        'rowId': _0x352c08 + "antilink on"
      }, {
        'title': "_OFF ❌_",
        'rowId': _0x352c08 + "antilink off"
      }]
    }, {
      'title': "`👉 ANTILINK_ACTION 👈`",
      'rows': [{
        'title': "_Delete ✔️_",
        'rowId': _0x352c08 + "antilinkaction delete"
      }, {
        'title': "_Delete & Remove ✔️_",
        'rowId': _0x352c08 + "antilinkaction remove"
      }]
    }, {
      'title': "`👉 ANTIBAD_ACTION 👈`",
      'rows': [{
        'title': "_Delete ✔️_",
        'rowId': _0x352c08 + "antibadaction delete"
      }, {
        'title': "_Delete & Remove ✔️_",
        'rowId': _0x352c08 + "antibadaction remove"
      }]
    }, {
      'title': "`👉 ANTI_BOT 👈`",
      'rows': [{
        'title': "_ON ✔️_",
        'rowId': _0x352c08 + "antibot on"
      }, {
        'title': "_OFF ❌_",
        'rowId': _0x352c08 + "antibot off"
      }]
    }, {
      'title': "`👉 ANTI_BAD 👈`",
      'rows': [{
        'title': "_ON ✔️_",
        'rowId': _0x352c08 + "antibad on"
      }, {
        'title': "_OFF ❌_",
        'rowId': _0x352c08 + "antibad off"
      }]
    }, {
      'title': "`👉 XNXX_BLOCK 👈`",
      'rows': [{
        'title': "_ON ✔️_",
        'rowId': _0x352c08 + "xblock on"
      }, {
        'title': "_OFF ❌_",
        'rowId': _0x352c08 + "xblock off"
      }]
    }, {
      'title': "`👉 MOVIE_BLOCK 👈`",
      'rows': [{
        'title': "_ON ✔️_",
        'rowId': _0x352c08 + "mvblock on"
      }, {
        'title': "_OFF ❌_",
        'rowId': _0x352c08 + "mvblock off"
      }]
    }, {
      'title': "`👉 ALWAYS_ONLINE 👈`",
      'rows': [{
        'title': "_ON ✔️_",
        'rowId': _0x352c08 + "alo off"
      }, {
        'title': "_OFF ❌_",
        'rowId': _0x352c08 + "alo on"
      }]
    }, {
      'title': "`👉 AUTO_VOICE 👈`",
      'rows': [{
        'title': "_ON ✔️_",
        'rowId': _0x352c08 + "autovoice on"
      }, {
        'title': "_OFF ❌_",
        'rowId': _0x352c08 + "autovoice off"
      }]
    }];
    const _0x3106fe = {
      'text': "*_⚙️ KAVIDU-MD SETTINGS INFO ⚙️_*\n\n",
      'footer': config.FOOTER,
      'title': '',
      'buttonText': "*🔢 Reply below number*",
      'sections': _0xfd8daf
    };
    const _0x178ed1 = {
      'title': "❯❯ Choose a setting to toggle ❮❮",
      'sections': [{
        'title': "General Settings ⚙️",
        'rows': [{
          'title': "Work Type - Public",
          'description': "Bot works for all users",
          'id': _0x352c08 + "work_type public"
        }, {
          'title': "Work Type - Private",
          'description': "Only owner can use",
          'id': _0x352c08 + "work_type private"
        }, {
          'title': "Work Type - Group Only",
          'description': "Responds in groups only",
          'id': _0x352c08 + "work_type only_group"
        }, {
          'title': "Work Type - Inbox",
          'description': "Responds in private chats only",
          'id': _0x352c08 + "work_type inbox"
        }]
      }, {
        'title': "Automation 🤖",
        'rows': [{
          'title': "Auto Read Status - ON",
          'description': "Mark status as seen",
          'id': _0x352c08 + "autos on"
        }, {
          'title': "Auto Read Status - OFF",
          'description': "Don't mark status as seen",
          'id': _0x352c08 + "autos off"
        }, {
          'title': "Auto Message Read - ON",
          'description': "Marks messages as read",
          'id': _0x352c08 + "autoread on"
        }, {
          'title': "Auto Message Read - OFF",
          'description': "Disables auto read",
          'id': _0x352c08 + "autoread off"
        }, {
          'title': "Auto Typing - ON",
          'description': "Shows typing animation",
          'id': _0x352c08 + "autotyping on"
        }, {
          'title': "Auto Typing - OFF",
          'description': "Disables typing animation",
          'id': _0x352c08 + "autotyping off"
        }, {
          'title': "Auto Recording - ON",
          'description': "Shows recording animation",
          'id': _0x352c08 + "autorec on"
        }, {
          'title': "Auto Recording - OFF",
          'description': "Disables recording animation",
          'id': _0x352c08 + "autorec off"
        }]
      }, {
        'title': "Security & Filters 🛡️",
        'rows': [{
          'title': "Anti Link - ON",
          'description': "Blocks group links",
          'id': _0x352c08 + "antilink on"
        }, {
          'title': "Anti Link - OFF",
          'description': "Allows links",
          'id': _0x352c08 + "antilink off"
        }, {
          'title': "Anti Link Action- delete",
          'description': "Antilink action delete",
          'id': _0x352c08 + "antilinkaction delete"
        }, {
          'title': "Anti Link Action- remove",
          'description': "Antilink action remove",
          'id': _0x352c08 + "antilinkaction remove"
        }, {
          'title': "Anti Bad Words - ON",
          'description': "Detects and warns",
          'id': _0x352c08 + "antibad on"
        }, {
          'title': "Anti Bad Words - OFF",
          'description': "Disables bad word check",
          'id': _0x352c08 + "antibad off"
        }, {
          'title': "Anti Bad Action - delete",
          'description': "Antibad action",
          'id': _0x352c08 + "antibadaction delete"
        }, {
          'title': "Anti Bad Action - remove",
          'description': "Antibad action",
          'id': _0x352c08 + "antibadaction remove"
        }, {
          'title': "Anti Call - ON",
          'description': "Blocks calls automatically",
          'id': _0x352c08 + "anticall on"
        }, {
          'title': "Anti Call - OFF",
          'description': "Allows calls",
          'id': _0x352c08 + "anticall off"
        }]
      }, {
        'title': "Fun & Extras 🎭",
        'rows': [{
          'title': "AI Chat - ON",
          'description': "Enable chatbot in groups",
          'id': _0x352c08 + "chatbot on"
        }, {
          'title': "AI Chat - OFF",
          'description': "Disable chatbot",
          'id': _0x352c08 + "chatbot off"
        }, {
          'title': "Auto React - ON",
          'description': "Auto reacts to messages",
          'id': _0x352c08 + "autoreact on"
        }, {
          'title': "Auto React - OFF",
          'description': "Disables auto react",
          'id': _0x352c08 + "autoreact off"
        }, {
          'title': "Always Online - ON",
          'description': "Always shows online",
          'id': _0x352c08 + "alo on"
        }, {
          'title': "Always Online - OFF",
          'description': "Shows real status",
          'id': _0x352c08 + "alo off"
        }]
      }]
    };
    if (config.BUTTON === 'true') {
      return await _0x39adca.sendMessage(_0x2f49c6, {
        'image': {
          'url': config.LOGO
        },
        'caption': "*_⚙️ KAVIDU-MD SETTINGS INFO ⚙️_*",
        'footer': config.FOOTER,
        'buttons': [{
          'buttonId': "Video quality list",
          'buttonText': {
            'displayText': "🎥 Select Option"
          },
          'type': 0x4,
          'nativeFlowInfo': {
            'name': "single_select",
            'paramsJson': JSON.stringify(_0x178ed1)
          }
        }],
        'headerType': 0x1,
        'viewOnce': true
      }, {
        'quoted': _0x13d588
      });
    } else if (config.BUTTON === "false") {
      await _0x39adca.listMessage(_0x2f49c6, _0x3106fe, _0x13d588);
    }
    _0x152230.react('⚒️');
  } catch (_0x42f72c) {
    _0x4a19d6("*Error !!*");
    _0xa93aae(_0x42f72c);
  }
});
cmd({
  'pattern': "lang",
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x110ec3, _0x2b7796, _0x53b3ab, {
  from: _0x58bc60,
  l: _0x2dd900,
  quoted: _0x101d87,
  body: _0x4b7cac,
  isCmd: _0x37d298,
  command: _0x44dd33,
  args: _0x462427,
  q: _0xff062d,
  isGroup: _0x248d94,
  sender: _0x356a9d,
  senderNumber: _0xb65f02,
  botNumber2: _0x417e18,
  botNumber: _0x55994a,
  pushname: _0x5ab70f,
  isMe: _0x513833,
  isOwner: _0x5b7524,
  groupMetadata: _0x10f473,
  groupName: _0x3a7a97,
  participants: _0x194678,
  groupAdmins: _0x1fc1ff,
  isBotAdmins: _0x5ecffd,
  isAdmins: _0x45c93b,
  reply: _0x1334fc
}) => {
  try {
    if (!_0x513833) {
      return await _0x1334fc(BOTOW);
    }
    let _0x2608c9 = await get("LANG");
    if (_0x2608c9 === _0xff062d) {
      await input('LANG', _0xff062d);
    }
    await _0x1334fc("*Language updated: " + _0xff062d + '*');
  } catch (_0x58c6c8) {
    _0x1334fc("*Error !!*");
    _0x2dd900(_0x58c6c8);
  }
});
cmd({
  'pattern': "work_type",
  'react': '🔁',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x5eebf3, _0x57222f, _0x1d1e0c, {
  from: _0x1cc674,
  l: _0x20bb8e,
  quoted: _0x130ac6,
  body: _0x822027,
  isCmd: _0x40cc73,
  command: _0x5dad96,
  args: _0x1c4473,
  q: _0x448ed1,
  msr: _0x53e7c6,
  isGroup: _0x688478,
  isSudo: _0x35f9af,
  sender: _0xef620,
  senderNumber: _0x489923,
  botNumber2: _0x4f0269,
  botNumber: _0x2ea6f9,
  pushname: _0xb657cd,
  isMe: _0x2843d5,
  isOwner: _0x4c7bb0,
  isDev: _0x484efc,
  isCreator: _0xbde525,
  groupMetadata: _0x143eb9,
  groupName: _0x2d6300,
  participants: _0x35959c,
  groupAdmins: _0x183bce,
  isBotAdmins: _0x3eba41,
  isAdmins: _0x469d46,
  reply: _0x1fb627
}) => {
  try {
    if (!_0x35f9af && !_0x4c7bb0 && !_0x2843d5) {
      return await _0x1fb627("*OWNER COMMAND ⛔*");
    }
    if (!_0x448ed1) {
      return;
    }
    if (_0x448ed1 === 'private') {
      let _0x28ae42 = await get('WORK_TYPE');
      if (_0x28ae42 === _0x448ed1) {
        return await _0x1fb627("*All ready worktype PRIVATE🧐*");
      }
      await input("WORK_TYPE", _0x448ed1);
      await _0x1fb627("*🌐 WORK_TYPE  - PRIVATE*");
      await _0x5eebf3.sendMessage(_0x1cc674, {
        'react': {
          'text': '✔',
          'key': _0x57222f.key
        }
      });
    } else {
      if (_0x448ed1 === 'only_group') {
        let _0x571de4 = await get('WORK_TYPE');
        if (_0x571de4 === _0x448ed1) {
          return await _0x1fb627("*All ready worktype ONLY_GROUP🧐*");
        }
        await input('WORK_TYPE', _0x448ed1);
        await _0x1fb627("*🌐 WORK_TYPE  - ONLY_GROUP*");
        await _0x5eebf3.sendMessage(_0x1cc674, {
          'react': {
            'text': '✔',
            'key': _0x57222f.key
          }
        });
      } else {
        if (_0x448ed1 === "public") {
          let _0x18ff96 = await get("WORK_TYPE");
          if (_0x18ff96 === _0x448ed1) {
            return await _0x1fb627("*All ready worktype PUBLIC🧐*");
          }
          await input("WORK_TYPE", _0x448ed1);
          await _0x1fb627("*🌐 WORK_TYPE  - PUBLIC*");
          await _0x5eebf3.sendMessage(_0x1cc674, {
            'react': {
              'text': '✔',
              'key': _0x57222f.key
            }
          });
        } else {
          if (_0x448ed1 === 'inbox') {
            let _0x46be64 = await get("WORK_TYPE");
            if (_0x46be64 === _0x448ed1) {
              return await _0x1fb627("*All ready worktype INBOX🧐*");
            }
            await input("WORK_TYPE", _0x448ed1);
            await _0x1fb627("*🌐 WORK_TYPE  - INBOX*");
            await _0x5eebf3.sendMessage(_0x1cc674, {
              'react': {
                'text': '✔',
                'key': _0x57222f.key
              }
            });
          } else {
            const _0x30de29 = await _0x5eebf3.sendMessage(_0x1cc674, {
              'text': _0x53e7c6.valid_con
            }, {
              'quoted': _0x57222f
            });
            await _0x5eebf3.sendMessage(_0x1cc674, {
              'react': {
                'text': '❓',
                'key': _0x30de29.key
              }
            });
          }
        }
      }
    }
  } catch (_0x4bccb0) {
    await _0x5eebf3.sendMessage(_0x1cc674, {
      'react': {
        'text': '❌',
        'key': _0x57222f.key
      }
    });
    console.log(_0x4bccb0);
    _0x1fb627("Error !!\n\n*" + _0x4bccb0 + '*');
  }
});
cmd({
  'pattern': "valuseremove",
  'react': "🗑️",
  'desc': "Remove domain/link string from VALUSE list",
  'category': 'owner',
  'filename': __filename
}, async (_0x488a48, _0x52904b, _0x4e5ac3, {
  from: _0x55a8c7,
  isMe: _0xa3c64e,
  isOwner: _0x2caa98,
  q: _0x4ece7c,
  reply: _0x244b59
}) => {
  try {
    if (!_0xa3c64e && !_0x2caa98) {
      return await _0x244b59("*OWNER COMMAND ⛔*");
    }
    if (!_0x4ece7c) {
      return await _0x244b59("*Please provide a domain/link to remove, e.g., youtube.com*");
    }
    const _0x462ee2 = _0x4ece7c.trim().toLowerCase();
    let _0x3baf37 = await get("VALUSE");
    if (!Array.isArray(_0x3baf37)) {
      _0x3baf37 = [];
    }
    if (!_0x3baf37.includes(_0x462ee2)) {
      return await _0x244b59('*' + _0x462ee2 + " is not in VALUSE list ❌*");
    }
    _0x3baf37 = _0x3baf37.filter(_0x5f337b => _0x5f337b !== _0x462ee2);
    await input("VALUSE", _0x3baf37);
    await _0x244b59("✅ Removed *" + _0x462ee2 + "* from VALUSE list.");
    await _0x488a48.sendMessage(_0x55a8c7, {
      'react': {
        'text': '✔',
        'key': _0x52904b.key
      }
    });
  } catch (_0x334e3c) {
    console.error(_0x334e3c);
    await _0x488a48.sendMessage(_0x55a8c7, {
      'react': {
        'text': '❌',
        'key': _0x52904b.key
      }
    });
    await _0x244b59("❌ *Error occurred !!*\n\n" + _0x334e3c);
  }
});
cmd({
  'pattern': 'antibadaction',
  'react': '⚙️',
  'filename': __filename,
  'desc': "Set ANTI_LINK / ANTI_BAD action: delete, remove, both",
  'dontAddCommandList': true
}, async (_0x4fd0b8, _0x121592, _0x2d3757, {
  from: _0x263cc6,
  q: _0x7c37a0,
  isSudo: _0x520294,
  isOwner: _0x346405,
  isMe: _0x348b70,
  reply: _0x152898
}) => {
  try {
    if (!_0x520294 && !_0x346405 && !_0x348b70) {
      return await _0x152898("*OWNER COMMAND ⛔*");
    }
    if (!_0x7c37a0) {
      return await _0x152898("*Please provide an action type: delete / remove / both*");
    }
    const _0x44bd93 = ['delete', 'remove', "both"];
    const _0x3ac3dc = _0x7c37a0.toLowerCase();
    if (!_0x44bd93.includes(_0x3ac3dc)) {
      return await _0x152898("*Invalid action type ❌*\n\nUse one of:\n- delete\n- remove\n- both");
    }
    let _0x595845 = await get("ACTION");
    if (_0x595845 === _0x3ac3dc) {
      return await _0x152898("*Already set to: " + _0x3ac3dc.toUpperCase() + " 🧐*");
    }
    await input("ACTION", _0x3ac3dc);
    await _0x152898("*✅ ACTION set to: " + _0x3ac3dc.toUpperCase() + '*');
    await _0x4fd0b8.sendMessage(_0x263cc6, {
      'react': {
        'text': '✔',
        'key': _0x121592.key
      }
    });
  } catch (_0x4e9a50) {
    console.log(_0x4e9a50);
    await _0x4fd0b8.sendMessage(_0x263cc6, {
      'react': {
        'text': '❌',
        'key': _0x121592.key
      }
    });
    await _0x152898("Error !!\n\n*" + _0x4e9a50 + '*');
  }
});
cmd({
  'pattern': 'antilinkaction',
  'react': '⚙️',
  'filename': __filename,
  'desc': "Set ANTI_LINK / ANTI_BAD action: delete, remove, both",
  'dontAddCommandList': true
}, async (_0xc2a22c, _0x3f13c4, _0xc0a0da, {
  from: _0x12f934,
  q: _0x4b109b,
  isSudo: _0x974913,
  isOwner: _0x1cfd18,
  isMe: _0x2ff8db,
  reply: _0x4a2136
}) => {
  try {
    if (!_0x974913 && !_0x1cfd18 && !_0x2ff8db) {
      return await _0x4a2136("*OWNER COMMAND ⛔*");
    }
    if (!_0x4b109b) {
      return await _0x4a2136("*Please provide an action type: delete / remove / both*");
    }
    const _0x9dc2e6 = ["delete", 'remove', "both"];
    const _0x1e5174 = _0x4b109b.toLowerCase();
    if (!_0x9dc2e6.includes(_0x1e5174)) {
      return await _0x4a2136("*Invalid action type ❌*\n\nUse one of:\n- delete\n- remove\n- both");
    }
    let _0xcb7e46 = await get("ANTILINK_ACTION");
    if (_0xcb7e46 === _0x1e5174) {
      return await _0x4a2136("*Already set to: " + _0x1e5174.toUpperCase() + " 🧐*");
    }
    await input('ANTILINK_ACTION', _0x1e5174);
    await _0x4a2136("*✅ ACTION set to: " + _0x1e5174.toUpperCase() + '*');
    await _0xc2a22c.sendMessage(_0x12f934, {
      'react': {
        'text': '✔',
        'key': _0x3f13c4.key
      }
    });
  } catch (_0x3158fa) {
    console.log(_0x3158fa);
    await _0xc2a22c.sendMessage(_0x12f934, {
      'react': {
        'text': '❌',
        'key': _0x3f13c4.key
      }
    });
    await _0x4a2136("Error !!\n\n*" + _0x3158fa + '*');
  }
});
cmd({
  'pattern': 'valuses',
  'react': '🔗',
  'desc': "Add domain/link string to VALUSE list",
  'category': "owner",
  'filename': __filename
}, async (_0x33d13e, _0x2f2a3d, _0x3e491c, {
  from: _0x784a2f,
  isMe: _0x116981,
  isOwner: _0x1271e9,
  q: _0x42753a,
  reply: _0x32eaad
}) => {
  try {
    if (!_0x116981 && !_0x1271e9) {
      return await _0x32eaad("*OWNER COMMAND ⛔*");
    }
    if (!_0x42753a) {
      return await _0x32eaad("*Please provide a domain/link to add, e.g., youtube.com*");
    }
    const _0x2b8567 = _0x42753a.trim().toLowerCase();
    let _0x40db2f = await get("VALUSE");
    if (!Array.isArray(_0x40db2f)) {
      _0x40db2f = [];
    }
    if (_0x40db2f.includes(_0x2b8567)) {
      return await _0x32eaad('*' + _0x2b8567 + " is already in VALUSE list ✅*");
    }
    _0x40db2f.push(_0x2b8567);
    await input("VALUSE", _0x40db2f);
    await _0x32eaad("*✅ Added " + _0x2b8567 + " to VALUSE list.*");
    await _0x33d13e.sendMessage(_0x784a2f, {
      'react': {
        'text': '✔',
        'key': _0x2f2a3d.key
      }
    });
  } catch (_0x2b205a) {
    console.error(_0x2b205a);
    await _0x33d13e.sendMessage(_0x784a2f, {
      'react': {
        'text': '❌',
        'key': _0x2f2a3d.key
      }
    });
    await _0x32eaad("❌ *Error occurred !!*\n\n" + _0x2b205a);
  }
});
cmd({
  'pattern': 'sudo',
  'react': "👨🏻‍🔧",
  'alias': ["set", "aaddsudo"],
  'desc': "Add user to SUDO from replied message.",
  'category': "owner",
  'use': ".asetsudo (reply to a message)",
  'filename': __filename
}, async (_0x44249c, _0x343416, _0x1a66b7, {
  from: _0x43106c,
  isMe: _0x22cf38,
  isSudo: _0x23d0d6,
  isGroup: _0x91cff0,
  reply: _0x56285d
}) => {
  try {
    if (!_0x22cf38 && !_0x23d0d6) {
      return await _0x56285d("*OWNER COMMAND ⛔*");
    }
    if (!_0x91cff0) {
      return await _0x56285d("*Group command only 🧑‍🤝‍🧑*");
    }
    const _0xdb1b44 = _0x1a66b7.quoted && _0x1a66b7.quoted.participant;
    if (!_0xdb1b44) {
      return await _0x56285d("*Please reply to a user's message ❔*");
    }
    const _0x15b03f = _0x1a66b7.quoted.participant;
    const _0xc83666 = await get("SUDO");
    if (_0xc83666.includes(_0x15b03f)) {
      return await _0x56285d("*User already in SUDO list ✅*");
    }
    _0xc83666.push(_0x15b03f);
    await input("SUDO", _0xc83666);
    await _0x56285d("✅ *SUDO added:* " + _0x15b03f);
    await _0x44249c.sendMessage(_0x43106c, {
      'react': {
        'text': '✔',
        'key': _0x343416.key
      }
    });
  } catch (_0x3d8ab9) {
    console.error(_0x3d8ab9);
    await _0x44249c.sendMessage(_0x43106c, {
      'react': {
        'text': '❌',
        'key': _0x343416.key
      }
    });
    await _0x56285d("❌ *Error occurred !!*\n\n" + _0x3d8ab9);
  }
});
cmd({
  'pattern': "asetsudo",
  'react': "👨🏻‍🔧",
  'alias': ["set", "aaddsudo"],
  'desc': "Set moderator using number.",
  'category': "owner",
  'use': ".setsudo 947XXXXXXXX",
  'filename': __filename
}, async (_0xa987e4, _0x28e9c2, _0x4ac9c7, {
  from: _0x59121a,
  args: _0x4e5e6f,
  isMe: _0x4a2ece,
  isSudo: _0x17bb00,
  reply: _0x373578
}) => {
  try {
    if (!_0x4a2ece && !_0x17bb00) {
      return await _0x373578("*OWNER COMMAND ⛔*");
    }
    if (!_0x4e5e6f[0x0]) {
      return await _0x373578("*Please provide a number ❔*");
    }
    let _0x24525f = _0x4e5e6f[0x0].replace(/[^0-9]/g, '');
    if (_0x24525f.length < 0x7) {
      return await _0x373578("*Invalid number format ❌*");
    }
    let _0x44ea7f = _0x24525f + "@s.whatsapp.net";
    const _0x13d572 = async _0x1c60aa => {
      let _0x28d881 = await get(_0x1c60aa);
      return _0x28d881.includes(_0x44ea7f);
    };
    if (await _0x13d572("SUDO")) {
      return await _0x373578("*User already in the SUDO list 😼*");
    }
    let _0x320ff9 = await get("SUDO");
    _0x320ff9.push(_0x44ea7f);
    await input("SUDO", _0x320ff9);
    await _0x373578("*✅ SUDO added:* " + _0x44ea7f);
    await _0xa987e4.sendMessage(_0x59121a, {
      'react': {
        'text': '✔',
        'key': _0x28e9c2.key
      }
    });
  } catch (_0x501085) {
    console.error(_0x501085);
    await _0xa987e4.sendMessage(_0x59121a, {
      'react': {
        'text': '❌',
        'key': _0x28e9c2.key
      }
    });
    await _0x373578("❌ *Error occurred !!*\n\n" + _0x501085);
  }
});
cmd({
  'pattern': 'setsudo',
  'react': "👨🏻‍🔧",
  'alias': ["set", 'addsudo'],
  'desc': "Set moderator.",
  'category': 'owner',
  'use': ".setsudo",
  'filename': __filename
}, async (_0x5df68f, _0x2bcea7, _0x384bce, {
  from: _0x3f58e0,
  l: _0x89cf34,
  quoted: _0x1b672b,
  body: _0x4a7692,
  isCmd: _0x3f78de,
  command: _0x67488d,
  args: _0x82e714,
  q: _0x3e99a1,
  msr: _0x3dc262,
  creator: _0x398ef1,
  isGroup: _0x850ed4,
  sender: _0x302ff1,
  senderNumber: _0x542882,
  botNumber2: _0x30e387,
  botNumber: _0x2331ce,
  pushname: _0x1b99b7,
  isMe: _0x210df4,
  isOwner: _0x2f408f,
  groupMetadata: _0x31ca4b,
  isDev: _0xfb7e6b,
  groupName: _0x115da5,
  participants: _0x253376,
  groupAdmins: _0x4b8eda,
  isBotAdmins: _0x33515a,
  isAdmins: _0x3397ba,
  reply: _0x5c031b
}) => {
  try {
    if (!_0x210df4 && !isSudo) {
      return await _0x5c031b("*OWNER COMMAND ⛔*");
    }
    const _0x4d25d2 = _0x384bce.mentionUser[0x0];
    if (!_0x4d25d2) {
      return await _0x5c031b("*Please mention user ❔*");
    }
    const _0x18a867 = async _0x5bff3b => {
      let _0x5f3e1c = await get(_0x5bff3b);
      for (let _0x3e0d7f = 0x0; _0x3e0d7f < _0x5f3e1c.length; _0x3e0d7f++) {
        if (_0x5f3e1c[_0x3e0d7f] === _0x4d25d2) {
          return true;
        }
      }
      return false;
    };
    if (await _0x18a867("SUDO")) {
      return await _0x5c031b("*You are allready added moderater list😾*");
    }
    let _0x1be309 = await get('SUDO');
    _0x1be309.push(_0x4d25d2);
    await input('SUDO', _0x1be309);
    await _0x5c031b("*Moderater Add Successfull ✅*");
    await _0x5df68f.sendMessage(_0x3f58e0, {
      'react': {
        'text': '✔',
        'key': _0x2bcea7.key
      }
    });
  } catch (_0xe9c9df) {
    await _0x5df68f.sendMessage(_0x3f58e0, {
      'react': {
        'text': '❌',
        'key': _0x2bcea7.key
      }
    });
    console.log(_0xe9c9df);
    _0x5c031b("❌ *Error Accurated !!*\n\n" + _0xe9c9df);
  }
});
cmd({
  'pattern': 'delsudo',
  'alias': ["rsudo", "removesudo"],
  'react': "👨🏻‍🔧",
  'desc': "Remove moderater.",
  'category': "owner",
  'use': ".delsudo",
  'filename': __filename
}, async (_0x263646, _0x1a5c02, _0x347a05, {
  from: _0xa51b48,
  l: _0xeccd73,
  quoted: _0x3eda1a,
  body: _0xf9bf38,
  isCmd: _0x36216e,
  command: _0x2ed56b,
  args: _0x455a9f,
  q: _0x5cb27c,
  msr: _0x31a4e3,
  creator: _0x38649c,
  isGroup: _0x2cdfad,
  sender: _0x172fef,
  senderNumber: _0x9c2b17,
  botNumber2: _0x1fb181,
  botNumber: _0x4d75f1,
  pushname: _0x333911,
  isMe: _0x128f3a,
  isOwner: _0x50d5b6,
  groupMetadata: _0x39aeff,
  isDev: _0x31b1f7,
  groupName: _0x42b7e7,
  participants: _0x2173cb,
  groupAdmins: _0x47c007,
  isBotAdmins: _0x50014d,
  isAdmins: _0x3aaac2,
  reply: _0x38b3ed
}) => {
  try {
    if (!_0x128f3a && !isSudo) {
      return await _0x38b3ed("*OWNER COMMAND ⛔*");
    }
    const _0x4e203f = _0x347a05.mentionUser[0x0];
    if (!_0x4e203f) {
      return await _0x38b3ed("*Please mention user ❔*");
    }
    const _0x5dbdd6 = async _0x2c8120 => {
      let _0x13b72f = await get(_0x2c8120);
      for (let _0x2ec4c5 = 0x0; _0x2ec4c5 < _0x13b72f.length; _0x2ec4c5++) {
        if (_0x13b72f[_0x2ec4c5] === _0x4e203f) {
          return true;
        }
      }
      return false;
    };
    if (!(await _0x5dbdd6("SUDO"))) {
      return await _0x38b3ed("*You are not a moderater 🧐*");
    }
    const _0x636ee4 = await get('SUDO');
    const _0x502a06 = _0x347a05.mentionUser[0x0] ? _0x347a05.mentionUser[0x0] : _0xa51b48;
    const _0x5e503b = _0x636ee4.indexOf(_0x502a06);
    if (_0x5e503b !== -0x1) {
      _0x636ee4.splice(_0x5e503b, 0x1);
    }
    await input("SUDO", _0x636ee4);
    await _0x38b3ed("*Moderater Delete Successfull ✅*");
    await _0x263646.sendMessage(_0xa51b48, {
      'react': {
        'text': '✔',
        'key': _0x1a5c02.key
      }
    });
  } catch (_0x21d1d0) {
    await _0x263646.sendMessage(_0xa51b48, {
      'react': {
        'text': '❌',
        'key': _0x1a5c02.key
      }
    });
    console.log(_0x21d1d0);
    _0x38b3ed("❌ *Error Accurated !!*\n\n" + _0x21d1d0);
  }
});
cmd({
  'pattern': "delallsudo",
  'alias': ["rasudo", "removeallsudo"],
  'react': "👨🏻‍🔧",
  'desc': "Remove ALL Moderaters",
  'category': "owner",
  'use': ".delallsudo",
  'filename': __filename
}, async (_0x2232b4, _0x5bf7e8, _0x14c4d6, {
  from: _0x24911d,
  l: _0x21b04d,
  quoted: _0xb63b6c,
  body: _0x53a072,
  isCmd: _0x570582,
  command: _0x273572,
  args: _0x272093,
  q: _0x2466fa,
  msr: _0x2e3b1a,
  creator: _0x21a6bf,
  isGroup: _0x40902b,
  sender: _0x627e2e,
  senderNumber: _0x2b489c,
  botNumber2: _0x354d8c,
  botNumber: _0x314e71,
  pushname: _0x12cb32,
  isMe: _0x53c2f5,
  isOwner: _0x28f50c,
  groupMetadata: _0x29e678,
  isDev: _0x4879ba,
  groupName: _0x445f5c,
  participants: _0x52a0a4,
  groupAdmins: _0x104404,
  isBotAdmins: _0x33e04a,
  isAdmins: _0x6192be,
  reply: _0x5506ae
}) => {
  try {
    if (!_0x53c2f5 && !isSudo) {
      return await _0x5506ae("*OWNER COMMAND ⛔*");
    }
    const _0xfb0f55 = [];
    await input("SUDO", _0xfb0f55);
    await _0x5506ae("*All Moderater remove ✅*");
    await _0x2232b4.sendMessage(_0x24911d, {
      'react': {
        'text': '✔',
        'key': _0x5bf7e8.key
      }
    });
  } catch (_0x3b15da) {
    await _0x2232b4.sendMessage(_0x24911d, {
      'react': {
        'text': '❌',
        'key': _0x5bf7e8.key
      }
    });
    console.log(_0x3b15da);
    _0x5506ae("❌ *Error Accurated !!*\n\n" + _0x3b15da);
  }
});
cmd({
  'pattern': "ban",
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x483d3e, _0x254b4d, _0x4f12fd, {
  from: _0x490f0d,
  l: _0x32832d,
  quoted: _0x4ea2ba,
  body: _0x1db5d1,
  isCmd: _0x4335ce,
  command: _0x2cafac,
  args: _0x1283ec,
  q: _0x167ecb,
  isGroup: _0x2f052d,
  isSudo: _0x2f4cc7,
  sender: _0x443c00,
  senderNumber: _0x46090d,
  botNumber2: _0x16c888,
  botNumber: _0x2ae8b9,
  pushname: _0x415907,
  isMe: _0x5bcb48,
  isOwner: _0x195406,
  groupMetadata: _0x208b8a,
  groupName: _0x3bca6f,
  participants: _0x5537df,
  groupAdmins: _0x569d0c,
  isBotAdmins: _0x5ae94d,
  isAdmins: _0x4b4f29,
  reply: _0x3ff3c5
}) => {
  try {
    if (!_0x5bcb48 && !_0x2f4cc7) {
      return await _0x3ff3c5("*OWNER COMMAND ⛔*");
    }
    const _0xa8bbd4 = async _0x307acf => {
      let _0x11f67c = await get(_0x307acf);
      for (let _0x3ecdfd = 0x0; _0x3ecdfd < _0x11f67c.length; _0x3ecdfd++) {
        if (_0x11f67c[_0x3ecdfd] === _0x490f0d) {
          return true;
        }
      }
      return false;
    };
    if (_0x167ecb === 'on') {
      if (await _0xa8bbd4("JID_BLOCK")) {
        return _0x3ff3c5("*This settings all ready updated ☑️*");
      }
      let _0x2b48c1 = await get("JID_BLOCK");
      _0x2b48c1.push(_0x490f0d);
      await input("JID_BLOCK", _0x2b48c1);
      await _0x3ff3c5("*Sucssessfully banned this chat ✔️*");
    } else {
      if (!(await _0xa8bbd4('JID_BLOCK'))) {
        return _0x3ff3c5("*This settings all ready updated ☑️*");
      }
      const _0x5e3bd4 = await get('JID_BLOCK');
      const _0x2ee4ee = _0x5e3bd4.indexOf(_0x490f0d);
      if (_0x2ee4ee !== -0x1) {
        _0x5e3bd4.splice(_0x2ee4ee, 0x1);
      }
      await input("JID_BLOCK", _0x5e3bd4);
      await _0x3ff3c5("*Sucssessfully unbanned this chat ❌*");
    }
  } catch (_0x1b2c6f) {
    _0x3ff3c5("*Error !!*");
    _0x32832d(_0x1b2c6f);
  }
});
cmd({
  'alias': ['apply'],
  'filename': __filename
}, async (_0x4ad9af, _0x41eaf8, _0x4e084c, {
  from: _0x48e3c7,
  l: _0x1d0f05,
  quoted: _0x58ba2c,
  prefix: _0x2142f5,
  body: _0x1d94db,
  isCmd: _0x4cfab1,
  command: _0x43ecc3,
  args: _0x5876dc,
  q: _0x171729,
  isSudo: _0xefc4aa,
  isGroup: _0x47ebf1,
  sender: _0x12648c,
  senderNumber: _0xae0a60,
  botNumber2: _0x18ad40,
  botNumber: _0x54957c,
  pushname: _0x2919da,
  isMe: _0x27dbd5,
  isOwner: _0x1154c9,
  groupMetadata: _0x26eb39,
  groupName: _0x4c7a39,
  participants: _0x5e9c8d,
  groupAdmins: _0x5a967d,
  isBotAdmins: _0x4644ba,
  isAdmins: _0x2f49d2,
  reply: _0x4d4073
}) => {
  try {
    if (!_0x27dbd5 && !_0xefc4aa) {
      return await _0x4d4073("*OWNER COMMAND ⛔*");
    }
    let _0x372a41 = "*`↔️ KAVIDU-MD CHANGE DATABASE INFO ↔️`*\n\n*┌──────────────────┐*\n*├ 🔮Input :* " + _0x171729 + "\n*└──────────────────┘*";
    const _0x2bb4a2 = [{
      'buttonId': _0x2142f5 + "setprefix " + _0x171729,
      'buttonText': {
        'displayText': "_*Change bot prefix*_"
      },
      'type': 0x1
    }, {
      'buttonId': _0x2142f5 + "setalive " + _0x171729,
      'buttonText': {
        'displayText': "_*Change bot alive*_"
      },
      'type': 0x1
    }, {
      'buttonId': _0x2142f5 + "setowner " + _0x171729,
      'buttonText': {
        'displayText': "_*Change bot owner*_"
      },
      'type': 0x1
    }, {
      'buttonId': _0x2142f5 + "setmvfooter " + _0x171729,
      'buttonText': {
        'displayText': "_*Change bot movie footer*_"
      },
      'type': 0x1
    }, {
      'buttonId': _0x2142f5 + "setmail " + _0x171729,
      'buttonText': {
        'displayText': "_*Add seedr account mail*_"
      },
      'type': 0x1
    }, {
      'buttonId': _0x2142f5 + "setpassword " + _0x171729,
      'buttonText': {
        'displayText': "_*Add seedr account password*_"
      },
      'type': 0x1
    }, {
      'buttonId': _0x2142f5 + "asetsudo " + _0x171729,
      'buttonText': {
        'displayText': "_*Change bot sudo numbers*_"
      },
      'type': 0x1
    }, {
      'buttonId': _0x2142f5 + "valuses " + _0x171729,
      'buttonText': {
        'displayText': "_*Antilink values add*_"
      },
      'type': 0x1
    }, {
      'buttonId': _0x2142f5 + "removevaluses " + _0x171729,
      'buttonText': {
        'displayText': "_*Antilink values remove*_"
      },
      'type': 0x1
    }, {
      'buttonId': _0x2142f5 + 'resetdb',
      'buttonText': {
        'displayText': "_*Reset database*_"
      },
      'type': 0x1
    }];
    const _0x4f2bcb = {
      'image': {
        'url': config.LOGO
      },
      'caption': _0x372a41,
      'footer': config.FOOTER,
      'buttons': _0x2bb4a2,
      'headerType': 0x1
    };
    if (config.BUTTON === "true") {
      const _0x6c44b7 = {
        'title': "Change Database :)",
        'sections': [{
          'title': "KAVIDU-MD-DATABASE-INFO",
          'rows': [{
            'title': "Change bot prefix",
            'description': '',
            'id': _0x2142f5 + "setprefix " + _0x171729
          }, {
            'title': "Change bot alive",
            'description': '',
            'id': _0x2142f5 + "setalive " + _0x171729
          }, {
            'title': "Change bot owner",
            'description': '',
            'id': _0x2142f5 + "setowner " + _0x171729
          }, {
            'title': "Change bot movie footer",
            'description': '',
            'id': _0x2142f5 + "setmvfooter " + _0x171729
          }, {
            'title': "Add seedr account mail",
            'description': '',
            'id': _0x2142f5 + "setmail " + _0x171729
          }, {
            'title': "Add seedr account password",
            'description': '',
            'id': _0x2142f5 + "setpassword " + _0x171729
          }, {
            'title': "Change bot sudo numbers",
            'description': '',
            'id': _0x2142f5 + "asetsudo " + _0x171729
          }, {
            'title': "Antilink values add",
            'description': '',
            'id': _0x2142f5 + "valuses " + _0x171729
          }, {
            'title': "Antilink values remove",
            'description': '',
            'id': _0x2142f5 + "removevaluses " + _0x171729
          }, {
            'title': "Reset database",
            'description': '',
            'id': _0x2142f5 + "resetdb"
          }]
        }]
      };
      return await _0x4ad9af.sendMessage(_0x48e3c7, {
        'image': {
          'url': config.LOGO
        },
        'caption': _0x372a41,
        'footer': config.FOOTER,
        'buttons': [{
          'buttonId': "action",
          'buttonText': {
            'displayText': "🔽 Select Option"
          },
          'type': 0x4,
          'nativeFlowInfo': {
            'name': "single_select",
            'paramsJson': JSON.stringify(_0x6c44b7)
          }
        }],
        'headerType': 0x1,
        'viewOnce': true
      }, {
        'quoted': _0x41eaf8
      });
    } else {
      return await _0x4ad9af.buttonMessage(_0x48e3c7, _0x4f2bcb, _0x41eaf8);
    }
  } catch (_0x91b9ab) {
    _0x4d4073(N_FOUND);
    _0x1d0f05(_0x91b9ab);
  }
});
cmd({
  'pattern': "autovoice",
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x5a677f, _0x3bff58, _0xf0f326, {
  from: _0x2b2aa2,
  l: _0x3c13b9,
  quoted: _0x344a76,
  body: _0x2a502b,
  isCmd: _0xa9c5bb,
  command: _0x3fc51e,
  args: _0x2e4d1b,
  q: _0x5212e1,
  isGroup: _0x323362,
  isSudo: _0x5ed985,
  sender: _0x3d2f58,
  senderNumber: _0x1a41e3,
  botNumber2: _0x3e55f4,
  botNumber: _0x247640,
  pushname: _0x3f9b32,
  isMe: _0x2fb8e7,
  isOwner: _0x17b934,
  groupMetadata: _0x2df5e3,
  groupName: _0x989daf,
  participants: _0x303166,
  groupAdmins: _0x2c253d,
  isBotAdmins: _0x2cb2d9,
  isAdmins: _0x440294,
  reply: _0x1e4e24
}) => {
  try {
    if (!_0x2fb8e7 && !_0x5ed985) {
      return await _0x1e4e24("*OWNER COMMAND ⛔*");
    }
    if (_0x5212e1 === 'on') {
      let _0x90c723 = await get("AUTO_VOICE");
      if (_0x90c723 === true) {
        return _0x1e4e24("*This settings all ready updated ☑️*");
      }
      await input('AUTO_VOICE', true);
      await _0x1e4e24("*AUTO_VOICE ➜ true ✅*");
    } else {
      let _0x58ffa6 = await get("AUTO_VOICE");
      if (_0x58ffa6 === false) {
        return _0x1e4e24("*This settings all ready updated ☑️*");
      }
      await input("AUTO_VOICE", false);
      await _0x1e4e24("*AUTO_VOICE ➜ false ❌*");
    }
  } catch (_0x488c37) {
    _0x1e4e24("*Error !!*");
    _0x3c13b9(_0x488c37);
  }
});
cmd({
  'pattern': "button",
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x1a1880, _0x41f3f9, _0x49ed9c, {
  from: _0x3d54e1,
  l: _0x4ea70b,
  quoted: _0xeb5eab,
  body: _0x57b3d6,
  isCmd: _0x443203,
  command: _0x4a8fcf,
  args: _0xe664e7,
  q: _0x7f1d08,
  isGroup: _0x53d924,
  isSudo: _0x598928,
  sender: _0x2bd84b,
  senderNumber: _0x303d49,
  botNumber2: _0x5c0a25,
  botNumber: _0x4bac94,
  pushname: _0x257bcf,
  isMe: _0x19616c,
  isOwner: _0x30b21e,
  groupMetadata: _0x4b6e19,
  groupName: _0x479ee8,
  participants: _0x3f287,
  groupAdmins: _0x1ca635,
  isBotAdmins: _0x510046,
  isAdmins: _0x2ae436,
  reply: _0x34daa6
}) => {
  try {
    if (!_0x19616c && !_0x598928) {
      return await _0x34daa6("*OWNER COMMAND ⛔*");
    }
    if (_0x7f1d08 === 'on') {
      let _0x305444 = await get("BUTTON");
      if (_0x305444 === true) {
        return _0x34daa6("*This settings all ready updated ☑️*");
      }
      await input("BUTTON", true);
      await _0x34daa6("*BUTTON ➜ true ✅*");
    } else {
      let _0x48266f = await get("BUTTON");
      if (_0x48266f === false) {
        return _0x34daa6("*This settings all ready updated ☑️*");
      }
      await input("BUTTON", false);
      await _0x34daa6("*BUTTON ➜ false ❌*");
    }
  } catch (_0x221bfb) {
    _0x34daa6("*Error !!*");
    _0x4ea70b(_0x221bfb);
  }
});
cmd({
  'pattern': "mvblock",
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x27a421, _0x3d7026, _0xe953a9, {
  from: _0x580e15,
  l: _0x5b83a4,
  quoted: _0x2d4ef9,
  body: _0x1d3c42,
  isCmd: _0x2f1380,
  command: _0xcf5418,
  args: _0x5ca13a,
  q: _0x24e82e,
  isGroup: _0x59c74c,
  isSudo: _0x45c593,
  sender: _0xb6abe1,
  senderNumber: _0x5d1f9d,
  botNumber2: _0x10501a,
  botNumber: _0x2e7bef,
  pushname: _0x11be8e,
  isMe: _0x2384a0,
  isOwner: _0x5a6b3f,
  groupMetadata: _0x32a786,
  groupName: _0x56bc19,
  participants: _0x3d95b0,
  groupAdmins: _0x5d287a,
  isBotAdmins: _0x79ef58,
  isAdmins: _0x2f4b6d,
  reply: _0x3ce3c0
}) => {
  try {
    if (!_0x2384a0 && !_0x45c593) {
      return await _0x3ce3c0("*OWNER COMMAND ⛔*");
    }
    if (_0x24e82e === 'on') {
      let _0x1fcb18 = await get("MV_BLOCK");
      if (_0x1fcb18 === true) {
        return _0x3ce3c0("*This settings all ready updated ☑️*");
      }
      await input('MV_BLOCK', true);
      await _0x3ce3c0("*MV_BLOCK ➜ true ✅*");
    } else {
      let _0x1bdfba = await get("MV_BLOCK");
      if (_0x1bdfba === false) {
        return _0x3ce3c0("*This settings all ready updated ☑️*");
      }
      await input('MV_BLOCK', false);
      await _0x3ce3c0("*MV_BLOCK ➜ false ❌*");
    }
  } catch (_0x3279cc) {
    _0x3ce3c0("*Error !!*");
    _0x5b83a4(_0x3279cc);
  }
});
cmd({
  'pattern': "antilink",
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0xef820c, _0x5cfd5d, _0x1bfdc8, {
  from: _0xc441f4,
  l: _0x194134,
  quoted: _0x2ea0fe,
  body: _0x473dcc,
  isCmd: _0x2ad1a4,
  command: _0x327feb,
  args: _0x547d7b,
  q: _0x58d80b,
  isGroup: _0x39724d,
  isSudo: _0xd53eef,
  sender: _0x8423e,
  senderNumber: _0x992515,
  botNumber2: _0x594265,
  botNumber: _0x39da4b,
  pushname: _0x41cfff,
  isMe: _0x14f991,
  isOwner: _0x502299,
  groupMetadata: _0x18a65f,
  groupName: _0x421098,
  participants: _0xb6c9cb,
  groupAdmins: _0x49eb95,
  isBotAdmins: _0x200757,
  isAdmins: _0x47c0f8,
  reply: _0x590d6f
}) => {
  try {
    if (!_0x14f991 && !_0xd53eef) {
      return await _0x590d6f("*OWNER COMMAND ⛔*");
    }
    if (_0x58d80b === 'on') {
      let _0x325ddc = await get("ANTI_LINK");
      if (_0x325ddc === true) {
        return _0x590d6f("*This settings all ready updated ☑️*");
      }
      await input("ANTI_LINK", true);
      await _0x590d6f("*ANTI_LINK ➜ true ✅*");
    } else {
      let _0x3af097 = await get('ANTI_LINK');
      if (_0x3af097 === false) {
        return _0x590d6f("*This settings all ready updated ☑️*");
      }
      await input('ANTI_LINK', false);
      await _0x590d6f("*ANTI_LINK ➜ false ❌*");
    }
  } catch (_0x1d24a0) {
    _0x590d6f("*Error !!*");
    _0x194134(_0x1d24a0);
  }
});
cmd({
  'pattern': "antdel",
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x167587, _0xb22a80, _0x58bcd1, {
  from: _0x2687fa,
  l: _0x138529,
  quoted: _0x1303ae,
  body: _0x310ec7,
  isCmd: _0x1d7ecf,
  command: _0x42b302,
  args: _0x30583d,
  q: _0x35a562,
  isGroup: _0x841710,
  isSudo: _0x24acc3,
  sender: _0x2a7c13,
  senderNumber: _0x709739,
  botNumber2: _0x58c318,
  botNumber: _0x1fe733,
  pushname: _0x41c1c8,
  isMe: _0xc1910d,
  isOwner: _0x2b7d77,
  groupMetadata: _0x1c88c5,
  groupName: _0x500ddd,
  participants: _0x485f18,
  groupAdmins: _0x3188e7,
  isBotAdmins: _0x2b25ad,
  isAdmins: _0x2e38c5,
  reply: _0x4ee34b
}) => {
  try {
    if (!_0xc1910d && !_0x24acc3) {
      return await _0x4ee34b("*OWNER COMMAND ⛔*");
    }
    if (_0x35a562 === 'on') {
      let _0x4a1ff0 = await get("ANTI_DELETE");
      if (_0x4a1ff0 === true) {
        return _0x4ee34b("*This settings all ready updated ☑️*");
      }
      await input('ANTI_DELETE', true);
      await _0x4ee34b("*ANTI_DELETE ➜ true ✅*");
    } else {
      let _0x647820 = await get("ANTI_DELETE");
      if (_0x647820 === false) {
        return _0x4ee34b("*This settings all ready updated ☑️*");
      }
      await input('ANTI_DELETE', false);
      await _0x4ee34b("*ANTI_DELETE ➜ false ❌*");
    }
  } catch (_0x248233) {
    _0x4ee34b("*Error !!*");
    _0x138529(_0x248233);
  }
});
cmd({
  'pattern': "xblock",
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x521564, _0x528dd8, _0x44fe28, {
  from: _0x15d354,
  l: _0x3730b7,
  quoted: _0xae260a,
  body: _0x13055a,
  isCmd: _0x3b80a0,
  command: _0x1514f2,
  args: _0x4bbb5f,
  q: _0x4ee789,
  isGroup: _0x11ac1e,
  isSudo: _0x5087fb,
  sender: _0x9c358e,
  senderNumber: _0x331b39,
  botNumber2: _0x1c7293,
  botNumber: _0x591a4f,
  pushname: _0x32d45f,
  isMe: _0x2b29f7,
  isOwner: _0x2d98ba,
  groupMetadata: _0x18a38a,
  groupName: _0x5d3909,
  participants: _0x75e7a0,
  groupAdmins: _0x36e790,
  isBotAdmins: _0x326eca,
  isAdmins: _0x4c6e48,
  reply: _0x2c6152
}) => {
  try {
    if (!_0x2b29f7 && !_0x5087fb) {
      return await _0x2c6152("*OWNER COMMAND ⛔*");
    }
    if (_0x4ee789 === 'on') {
      let _0x486569 = await get("XNXX_BLOCK");
      if (_0x486569 === true) {
        return _0x2c6152("*This settings all ready updated ☑️*");
      }
      await input('XNXX_BLOCK', true);
      await _0x2c6152("*XNXX_BLOCK ➜ true ✅*");
    } else {
      let _0x3c750b = await get("XNXX_BLOCK");
      if (_0x3c750b === false) {
        return _0x2c6152("*This settings all ready updated ☑️*");
      }
      await input("XNXX_BLOCK", false);
      await _0x2c6152("*XNXX_BLOCK ➜ false ❌*");
    }
  } catch (_0x177873) {
    _0x2c6152("*Error !!*");
    _0x3730b7(_0x177873);
  }
});
cmd({
  'pattern': "alo",
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x3f3077, _0x167849, _0x49af84, {
  from: _0x259161,
  l: _0x4f63dd,
  quoted: _0x1090ce,
  body: _0x623f63,
  isCmd: _0x1c79c3,
  command: _0xbf9a52,
  args: _0x34337f,
  q: _0x2d25b5,
  isGroup: _0x1abd71,
  isSudo: _0xa8f2f4,
  sender: _0x3ae36e,
  senderNumber: _0x431361,
  botNumber2: _0x43a277,
  botNumber: _0x2dda4f,
  pushname: _0x3582bf,
  isMe: _0x521be1,
  isOwner: _0x789dba,
  groupMetadata: _0x309668,
  groupName: _0x16183e,
  participants: _0x1f41b8,
  groupAdmins: _0x2a7a5b,
  isBotAdmins: _0x5d30af,
  isAdmins: _0x222ade,
  reply: _0x29d2b7
}) => {
  try {
    if (!_0x521be1 && !_0xa8f2f4) {
      return await _0x29d2b7("*OWNER COMMAND ⛔*");
    }
    if (_0x2d25b5 === 'on') {
      let _0xa89c2e = await get("ALLWAYS_OFFLINE");
      if (_0xa89c2e === true) {
        return _0x29d2b7("*This settings all ready updated ☑️*");
      }
      await input('ALLWAYS_OFFLINE', true);
      await _0x29d2b7("*ALLWAYS_OFFLINE ➜ true ✅*");
    } else {
      let _0x5eb74a = await get('ALLWAYS_OFFLINE');
      if (_0x5eb74a === false) {
        return _0x29d2b7("*This settings all ready updated ☑️*");
      }
      await input("ALLWAYS_OFFLINE", false);
      await _0x29d2b7("*ALLWAYS_OFFLINE ➜ false ❌*");
    }
  } catch (_0x5c920b) {
    _0x29d2b7("*Error !!*");
    _0x4f63dd(_0x5c920b);
  }
});
cmd({
  'pattern': "chatbot",
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x52de2c, _0x2c685e, _0x29a3bc, {
  from: _0x44d37e,
  l: _0x13b3f0,
  quoted: _0x57137b,
  body: _0x39da11,
  isCmd: _0x2fe5b9,
  command: _0x3d8d38,
  args: _0x1a065e,
  q: _0x3c512a,
  isGroup: _0x505ab8,
  isSudo: _0x3d59c1,
  sender: _0x39c293,
  senderNumber: _0x4d3082,
  botNumber2: _0x2947cd,
  botNumber: _0x38cd10,
  pushname: _0x16f2ae,
  isMe: _0x177125,
  isOwner: _0x314e21,
  groupMetadata: _0x550775,
  groupName: _0x522700,
  participants: _0x849366,
  groupAdmins: _0x4cf3b1,
  isBotAdmins: _0x486f9b,
  isAdmins: _0x131273,
  reply: _0x23e283
}) => {
  try {
    if (!_0x177125 && !_0x3d59c1) {
      return await _0x23e283("*OWNER COMMAND ⛔*");
    }
    if (_0x3c512a === 'on') {
      let _0x5685bb = await get("CHAT_BOT");
      if (_0x5685bb === true) {
        return _0x23e283("*This settings all ready updated ☑️*");
      }
      await input("CHAT_BOT", true);
      await _0x23e283("*AI_CHAT ➜ true ✅*");
    } else {
      let _0x3d76f5 = await get('CHAT_BOT');
      if (_0x3d76f5 === false) {
        return _0x23e283("*This settings all ready updated ☑️*");
      }
      await input("CHAT_BOT", false);
      await _0x23e283("*AI_CHAT ➜ false ❌*");
    }
  } catch (_0x43b43a) {
    _0x23e283("*Error !!*");
    _0x13b3f0(_0x43b43a);
  }
});
cmd({
  'pattern': 'antibot',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x5a5d6b, _0x1bfb42, _0x6c3ce9, {
  from: _0x4a646e,
  l: _0x16e568,
  quoted: _0x1488bd,
  body: _0x3ea2d9,
  isCmd: _0x261c24,
  command: _0x2e91b7,
  args: _0x420b4f,
  q: _0x58a475,
  isGroup: _0x511689,
  isSudo: _0x573b31,
  sender: _0x365f42,
  senderNumber: _0x342f93,
  botNumber2: _0x3676eb,
  botNumber: _0x2e492f,
  pushname: _0x1ae833,
  isMe: _0x484faa,
  isOwner: _0x3a54ef,
  groupMetadata: _0xa1622a,
  groupName: _0xb623a8,
  participants: _0x593e7e,
  groupAdmins: _0x163878,
  isBotAdmins: _0x3f7600,
  isAdmins: _0x433665,
  reply: _0x5681c1
}) => {
  try {
    if (!_0x484faa && !_0x573b31) {
      return await _0x5681c1("*OWNER COMMAND ⛔*");
    }
    if (_0x58a475 === 'on') {
      let _0x5f5c4c = await get("ANTI_BOT");
      if (_0x5f5c4c === true) {
        return _0x5681c1("*This settings all ready updated ☑️*");
      }
      await input('ANTI_BOT', true);
      await _0x5681c1("*💁‍♂️ ANTI_BOT ➨* on");
    } else {
      let _0x47a701 = await get("ANTI_BOT");
      if (_0x47a701 === false) {
        return _0x5681c1("*This settings all ready updated ☑️*");
      }
      await input("ANTI_BOT", false);
      await _0x5681c1("*💁‍♂️ ANTI_BOT ➨* off");
    }
  } catch (_0xcd11ad) {
    _0x5681c1("*Error !!*");
    _0x16e568(_0xcd11ad);
  }
});
cmd({
  'pattern': "antibad",
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x38db6b, _0x11893f, _0x3859f8, {
  from: _0x1abde2,
  l: _0xc0fa8c,
  quoted: _0x3785da,
  body: _0x2c0302,
  isCmd: _0x3e08df,
  command: _0x147818,
  args: _0x4869f5,
  q: _0x3c5a46,
  isGroup: _0x4703c2,
  isSudo: _0x122fbd,
  sender: _0x12cead,
  senderNumber: _0x31c429,
  botNumber2: _0x43262c,
  botNumber: _0x1c653a,
  pushname: _0x54a25e,
  isMe: _0x3b1b9f,
  isOwner: _0x34a4eb,
  groupMetadata: _0x1c2787,
  groupName: _0x9b1189,
  participants: _0x164725,
  groupAdmins: _0x504b8f,
  isBotAdmins: _0x24118d,
  isAdmins: _0x351744,
  reply: _0x1190c7
}) => {
  try {
    if (!_0x3b1b9f && !_0x122fbd) {
      return await _0x1190c7("*OWNER COMMAND ⛔*");
    }
    if (_0x3c5a46 === 'on') {
      let _0x2758c2 = await get("ANTI_BAD");
      if (_0x2758c2 === true) {
        return _0x1190c7("*This settings all ready updated ☑️*");
      }
      await input("ANTI_BAD", true);
      await _0x1190c7("*💁‍♂️ ANTI_BAD ➨* on");
    } else {
      let _0x28c081 = await get("ANTI_BAD");
      if (_0x28c081 === false) {
        return _0x1190c7("*This settings all ready updated ☑️*");
      }
      await input("ANTI_BAD", false);
      await _0x1190c7("*💁‍♂️ ANTI_BAD ➨* off");
    }
  } catch (_0x310947) {
    _0x1190c7("*Error !!*");
    _0xc0fa8c(_0x310947);
  }
});
cmd({
  'pattern': "onlygroup",
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x5498aa, _0x36ae07, _0x42e49b, {
  from: _0x358426,
  l: _0xa9d72a,
  quoted: _0x1ac7bf,
  body: _0x2e87d1,
  isCmd: _0x596ee1,
  command: _0xdff7c1,
  args: _0x2118bd,
  q: _0x507ac7,
  isGroup: _0x3621c5,
  isSudo: _0x41f8f9,
  sender: _0x37f379,
  senderNumber: _0x5b2910,
  botNumber2: _0x4ec3ab,
  botNumber: _0x2d8400,
  pushname: _0x59a5eb,
  isMe: _0x4b8f89,
  isOwner: _0x428009,
  groupMetadata: _0x3a6bea,
  groupName: _0x34994d,
  participants: _0xad3726,
  groupAdmins: _0x2d31b0,
  isBotAdmins: _0x5848a7,
  isAdmins: _0xdc5530,
  reply: _0x14b1a0
}) => {
  try {
    if (!_0x4b8f89 && !_0x41f8f9) {
      return await _0x14b1a0("*OWNER COMMAND ⛔*");
    }
    if (_0x507ac7 === 'on') {
      let _0xd4ecbd = await get("ONLY_GROUP");
      if (_0xd4ecbd === true) {
        return _0x14b1a0("*This settings all ready updated ☑️*");
      }
      await input("ONLY_GROUP", true);
      await _0x14b1a0("*💁‍♂️ ONLY_GROUP ➨* on");
    } else {
      let _0x4bcb7a = await get("ONLY_GROUP");
      if (_0x4bcb7a === false) {
        return _0x14b1a0("*This settings all ready updated ☑️*");
      }
      await input("ONLY_GROUP", false);
      await _0x14b1a0("*💁‍♂️ ONLY_GROUP ➨* off");
    }
  } catch (_0x1511ae) {
    _0x14b1a0("*Error !!*");
    _0xa9d72a(_0x1511ae);
  }
});
cmd({
  'pattern': "autoreact",
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x578c70, _0x1ed60a, _0x27de83, {
  from: _0x3be75d,
  l: _0x505e60,
  quoted: _0x1c54d6,
  body: _0x27e359,
  isCmd: _0x38bca2,
  command: _0x594ff7,
  args: _0x1a932,
  q: _0x109921,
  isSudo: _0x52fbab,
  isGroup: _0x1130a4,
  sender: _0x2041d6,
  senderNumber: _0x442922,
  botNumber2: _0x5272f7,
  botNumber: _0x23f915,
  pushname: _0x239c31,
  isMe: _0xd2ee4b,
  isOwner: _0x3c45d7,
  groupMetadata: _0x91e948,
  groupName: _0x421ed0,
  participants: _0x5c5011,
  groupAdmins: _0xf5c17,
  isBotAdmins: _0x126bcf,
  isAdmins: _0x236669,
  reply: _0x51f88e
}) => {
  try {
    if (!_0xd2ee4b && !_0x52fbab) {
      return await _0x51f88e("*OWNER COMMAND ⛔*");
    }
    if (_0x109921 === 'on') {
      let _0x11a13f = await get("AUTO_REACT");
      if (_0x11a13f === true) {
        return _0x51f88e("*This settings all ready updated ☑️*");
      }
      await input('AUTO_REACT', true);
      await _0x51f88e("*💁‍♂️ AUTO_REACT ➨* on");
    } else {
      let _0x3b9e80 = await get("AUTO_REACT");
      if (_0x3b9e80 === false) {
        return _0x51f88e("*This settings all ready updated ☑️*");
      }
      await input("AUTO_REACT", false);
      await _0x51f88e("*💁‍♂️ AUTO_REACT ➨* off");
    }
  } catch (_0x4525a3) {
    _0x51f88e("*Error !!*");
    _0x505e60(_0x4525a3);
  }
});
cmd({
  'pattern': 'pv',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x1a3776, _0x41a938, _0x4d13bb, {
  from: _0x1d667e,
  l: _0x243cf7,
  quoted: _0x19d79d,
  body: _0x59a164,
  isCmd: _0x34ad66,
  command: _0x465f76,
  args: _0x25a223,
  q: _0xf89f1f,
  isSudo: _0x587d0f,
  isGroup: _0x39f984,
  sender: _0x565cf6,
  senderNumber: _0x25aa2d,
  botNumber2: _0x543b98,
  botNumber: _0x535a22,
  pushname: _0x584910,
  isMe: _0x43fed1,
  isOwner: _0x41a70b,
  groupMetadata: _0x531bab,
  groupName: _0x50d07f,
  participants: _0x13c983,
  groupAdmins: _0x3cd4d3,
  isBotAdmins: _0x470fb1,
  isAdmins: _0x4f79e0,
  reply: _0x54c1d5
}) => {
  try {
    if (!_0x43fed1 && !_0x587d0f) {
      return await _0x54c1d5("*OWNER COMMAND ⛔*");
    }
    if (_0xf89f1f === 'on') {
      let _0x4c1a88 = await get("PRIVATE");
      if (_0x4c1a88 === true) {
        return _0x54c1d5("*This settings all ready updated ☑️*");
      }
      await input("PRIVATE", true);
      await _0x54c1d5("*💁‍♂️ MODE ➨* private");
    } else {
      let _0x1f5058 = await get("PRIVATE");
      if (_0x1f5058 === false) {
        return _0x54c1d5("*This settings all ready updated ☑️*");
      }
      await input("PRIVATE", false);
      await _0x54c1d5("*💁‍♂️ MODE ➨* public");
    }
  } catch (_0x969ed7) {
    _0x54c1d5("*Error !!*");
    _0x243cf7(_0x969ed7);
  }
});
cmd({
  'pattern': "anticall",
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x3ed3a3, _0x3b2cd8, _0x4e33a8, {
  from: _0x5e6436,
  l: _0x504219,
  quoted: _0x232e89,
  body: _0x5d5c35,
  isCmd: _0xa74550,
  command: _0x18ae41,
  args: _0x4b787e,
  q: _0x4f6d61,
  isGroup: _0x4aecd4,
  isSudo: _0x46fbeb,
  sender: _0x3f20be,
  senderNumber: _0x1b9c1e,
  botNumber2: _0x2c82d4,
  botNumber: _0x48b8de,
  pushname: _0x26afd9,
  isMe: _0x358186,
  isOwner: _0x333452,
  groupMetadata: _0xf8261d,
  groupName: _0x181b64,
  participants: _0x18beee,
  groupAdmins: _0x35553e,
  isBotAdmins: _0x329148,
  isAdmins: _0x4a3462,
  reply: _0x5cd4b9
}) => {
  try {
    if (!_0x358186 && !_0x46fbeb) {
      return await _0x5cd4b9("*OWNER COMMAND ⛔*");
    }
    if (_0x4f6d61 === 'on') {
      let _0x222fd3 = await get("ANTI_CALL");
      if (_0x222fd3 === true) {
        return _0x5cd4b9("*This settings all ready updated ☑️*");
      }
      await input("ANTI_CALL", true);
      await _0x5cd4b9("*💁‍♂️ ANTI_CALL ➨* on");
    } else {
      let _0x1669e5 = await get('ANTI_CALL');
      if (_0x1669e5 === false) {
        return _0x5cd4b9("*This settings all ready updated ☑️*");
      }
      await input("ANTI_CALL", false);
      await _0x5cd4b9("*💁‍♂️ ANTI_CALL ➨* off");
    }
  } catch (_0x5de4eb) {
    _0x5cd4b9("*Error !!*");
    _0x504219(_0x5de4eb);
  }
});
cmd({
  'pattern': "autoblock",
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x1fae42, _0x4d9ce3, _0x5f12b0, {
  from: _0x55b333,
  l: _0x2cbfea,
  quoted: _0xaed895,
  body: _0x14c410,
  isCmd: _0x264dec,
  command: _0x1a7c07,
  args: _0x26b5d5,
  q: _0x1b3909,
  isGroup: _0x368ab2,
  isSudo: _0x5357a5,
  sender: _0x2ed85f,
  senderNumber: _0x59dec0,
  botNumber2: _0x3c34c3,
  botNumber: _0x17658d,
  pushname: _0x39b4ab,
  isMe: _0x3f9f4e,
  isOwner: _0x2d8c75,
  groupMetadata: _0x29da3c,
  groupName: _0x5ad2ea,
  participants: _0x8e2b20,
  groupAdmins: _0x3c8d3f,
  isBotAdmins: _0x455e46,
  isAdmins: _0x1ceef6,
  reply: _0x42925f
}) => {
  try {
    if (!_0x3f9f4e && !_0x5357a5) {
      return await _0x42925f("*OWNER COMMAND ⛔*");
    }
    if (_0x1b3909 === 'on') {
      let _0x2ae13a = await get("AUTO_BLOCK");
      if (_0x2ae13a === true) {
        return _0x42925f("*This settings all ready updated ☑️*");
      }
      await input("AUTO_BLOCK", true);
      await _0x42925f("*💁‍♂️ AUTO_BLOCK ➨* on");
    } else {
      let _0x514b91 = await get("AUTO_BLOCK");
      if (_0x514b91 === false) {
        return _0x42925f("*This settings all ready updated ☑️*");
      }
      await input("AUTO_BLOCK", false);
      await _0x42925f("*💁‍♂️ AUTO_BLOCK ➨* off");
    }
  } catch (_0x1de7fb) {
    _0x42925f("*Error !!*");
    _0x2cbfea(_0x1de7fb);
  }
});
cmd({
  'pattern': "setmvsize",
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x16a9bc, _0x2c24f7, _0x4096f3, {
  from: _0x4162ef,
  l: _0x928742,
  quoted: _0x1989c7,
  body: _0x179fa9,
  isCmd: _0x43b7aa,
  command: _0x1c44cc,
  args: _0x20e555,
  q: _0x25d60d,
  isGroup: _0x49ab4a,
  isSudo: _0x3b3ba8,
  sender: _0x45b692,
  senderNumber: _0x38bad8,
  botNumber2: _0x47f985,
  botNumber: _0x49ef03,
  pushname: _0x58e99d,
  isMe: _0x393840,
  isOwner: _0x52a6a6,
  groupMetadata: _0xcc11d7,
  groupName: _0x48a1cc,
  participants: _0x101b5e,
  groupAdmins: _0x2442e0,
  isBotAdmins: _0x211c7d,
  isAdmins: _0x1fbc7e,
  reply: _0x3bea0f
}) => {
  try {
    if (!_0x393840 && !_0x3b3ba8) {
      return await _0x3bea0f("*OWNER COMMAND ⛔*");
    }
    let _0x58519e = await get("MV_SIZE");
    if (_0x58519e === _0x25d60d) {
      return _0x3bea0f("*This settings all ready updated ☑️*");
    }
    await input("MV_SIZE", _0x25d60d);
    await _0x3bea0f("*Done: " + _0x25d60d + '*');
  } catch (_0x28a341) {
    _0x3bea0f("*Error !!*");
    _0x928742(_0x28a341);
  }
});
cmd({
  'pattern': "lang",
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x5317b8, _0x517aa5, _0x40d5ed, {
  from: _0x5bc28f,
  l: _0x14836e,
  quoted: _0x2fe7c6,
  body: _0x2157de,
  isCmd: _0x1e414d,
  command: _0x49e0b3,
  args: _0x1f99b8,
  q: _0x5101e9,
  isGroup: _0x242366,
  isSudo: _0x3b93c0,
  sender: _0x54bece,
  senderNumber: _0x45d6ae,
  botNumber2: _0x47f607,
  botNumber: _0x43052c,
  pushname: _0x16688d,
  isMe: _0x1c0b97,
  isOwner: _0x28f523,
  groupMetadata: _0x3492be,
  groupName: _0x7c3e2d,
  participants: _0x1f244c,
  groupAdmins: _0x58f36f,
  isBotAdmins: _0x30f8c0,
  isAdmins: _0x2cf461,
  reply: _0x44bcdc
}) => {
  try {
    if (!_0x1c0b97 && !_0x3b93c0) {
      return await _0x44bcdc("*OWNER COMMAND ⛔*");
    }
    let _0x25e17a = await get("LANG");
    if (_0x25e17a === _0x5101e9) {
      return _0x44bcdc("*This settings all ready updated ☑️*");
    }
    await input("LANG", _0x5101e9);
    await _0x44bcdc("*Language updated: " + _0x5101e9 + '*');
  } catch (_0x11cce0) {
    _0x44bcdc("*Error !!*");
    _0x14836e(_0x11cce0);
  }
});
cmd({
  'pattern': "uploadsz",
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x516303, _0x2bc03e, _0x2a3b6e, {
  from: _0x4b562a,
  l: _0x5b8310,
  quoted: _0x4cf409,
  body: _0x27a128,
  isCmd: _0x490472,
  command: _0x5dbd8a,
  args: _0x360347,
  q: _0x6707ae,
  isGroup: _0x534a6c,
  isSudo: _0x566df1,
  sender: _0x174949,
  senderNumber: _0x592d67,
  botNumber2: _0x46aedd,
  botNumber: _0x57f56c,
  pushname: _0x45f94e,
  isMe: _0x23b9f6,
  isOwner: _0x1aa552,
  groupMetadata: _0xce13b8,
  groupName: _0x3298a7,
  participants: _0x3a15d6,
  groupAdmins: _0x377bf7,
  isBotAdmins: _0x4ea84b,
  isAdmins: _0x17f704,
  reply: _0x90eedd
}) => {
  try {
    if (!_0x23b9f6) {
      return await _0x90eedd(BOTOW);
    }
    let _0x4d090a = await get("MAX_SIZE");
    if (_0x4d090a === Number(_0x6707ae)) {
      return await _0x90eedd(alredy);
    }
    await input("MAX_SIZE", Number(_0x6707ae));
    await _0x90eedd("*Max upload size updated: " + _0x6707ae + '*');
  } catch (_0x557e1f) {
    _0x90eedd("*Error !!*");
    _0x5b8310(_0x557e1f);
  }
});
cmd({
  'pattern': "alivemg",
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x1b4d54, _0x10324a, _0x3ce476, {
  from: _0xb9b2b2,
  l: _0x1ccfeb,
  quoted: _0x281041,
  body: _0x5234c8,
  isCmd: _0x9e614c,
  command: _0x5da39c,
  args: _0x5b53c0,
  q: _0x4343f8,
  isGroup: _0x1a3a71,
  isSudo: _0x164c9c,
  sender: _0x5fb7d6,
  senderNumber: _0x114c7c,
  botNumber2: _0x11efad,
  botNumber: _0x16f918,
  pushname: _0x2fde42,
  isMe: _0x2c645f,
  isOwner: _0x4a69df,
  groupMetadata: _0x455972,
  groupName: _0x3c13e1,
  participants: _0x44a17e,
  groupAdmins: _0x5ba3f8,
  isBotAdmins: _0x3cbf91,
  isAdmins: _0x39b06a,
  reply: _0xa667d9
}) => {
  try {
    if (!_0x2c645f && !_0x164c9c) {
      return await _0xa667d9("*OWNER COMMAND ⛔*");
    }
    let _0x4ef7f5 = await get("ALIVE");
    if (_0x4ef7f5 === _0x4343f8) {
      return _0xa667d9("*This settings all ready updated ☑️*");
    }
    await input('ALIVE', _0x4343f8);
    await _0xa667d9("*Alive massage updated:* " + _0x4343f8);
  } catch (_0x5d119b) {
    _0xa667d9("*Error !!*");
    _0x1ccfeb(_0x5d119b);
  }
});
cmd({
  'pattern': "active",
  'category': 'movie',
  'desc': "Active to jid",
  'filename': __filename
}, async (_0x408670, _0xa5aad3, _0x2ab372, {
  from: _0x370ab0,
  l: _0x4b2b25,
  quoted: _0x424288,
  body: _0x4c6bdf,
  isCmd: _0x117c22,
  command: _0x21bc80,
  args: _0x5b4b78,
  q: _0x5c5c82,
  isGroup: _0x40264e,
  isSudo: _0x5a2177,
  sender: _0x1f545d,
  senderNumber: _0x116e95,
  botNumber2: _0x344cf8,
  botNumber: _0x1be8c0,
  pushname: _0x560e4c,
  isMe: _0x16518d,
  isOwner: _0x90f0a0,
  groupMetadata: _0x2809e3,
  groupName: _0x4c5c9e,
  participants: _0x5590aa,
  groupAdmins: _0x20d3a7,
  isBotAdmins: _0xa3cdfc,
  isAdmins: _0x580de8,
  reply: _0x2a8d7c
}) => {
  try {
    if (!_0x5c5c82 || !_0x5c5c82.includes('@')) {
      console.log("Invalid input:", _0x5c5c82);
      return await _0x2a8d7c("*❗ Invalid input example : .active 94787318729@s.whatsapp.net or .active 120363387559195313@g.us*");
    }
    if (!_0x16518d && !_0x5a2177) {
      return await _0x2a8d7c("*OWNER COMMAND ⛔*");
    }
    let _0x36301d = await get("JID");
    if (_0x36301d === _0x5c5c82) {
      return _0x2a8d7c("*This settings all ready updated ☑️*");
    }
    await input("JID", _0x5c5c82);
    await _0x2a8d7c("*Activated this jid : " + _0x5c5c82 + " 🟢*");
  } catch (_0x4701ae) {
    _0x2a8d7c("*Error !!*");
    _0x4b2b25(_0x4701ae);
  }
});
cmd({
  'pattern': "setmvfooter",
  'category': 'movie',
  'desc': "Active to jid",
  'filename': __filename
}, async (_0x552bdf, _0x337c88, _0x15bfe7, {
  from: _0x3b4304,
  l: _0x2aafec,
  quoted: _0x40f9e6,
  body: _0x4c291f,
  isCmd: _0x3e5674,
  command: _0x1c60db,
  args: _0x122b60,
  q: _0x430f08,
  isGroup: _0x315668,
  isSudo: _0x3fa3b6,
  sender: _0x21b78f,
  senderNumber: _0x10b626,
  botNumber2: _0x4f67aa,
  botNumber: _0x412cbb,
  pushname: _0x385750,
  isMe: _0x5b5db3,
  isOwner: _0x31a3da,
  groupMetadata: _0x2e3aa6,
  groupName: _0x59f05a,
  participants: _0x17e66c,
  groupAdmins: _0x451997,
  isBotAdmins: _0x3e4715,
  isAdmins: _0x129852,
  reply: _0x179b00
}) => {
  try {
    if (!_0x5b5db3 && !_0x3fa3b6) {
      return await _0x179b00("*OWNER COMMAND ⛔*");
    }
    let _0xe0ebf5 = await get("NAME");
    if (_0xe0ebf5 === _0x430f08) {
      return _0x179b00("*This settings all ready updated ☑️*");
    }
    await input("NAME", _0x430f08);
    await _0x179b00("*MOVIE FOOTER SET : " + _0x430f08 + " 🟢*");
  } catch (_0xc8ddad) {
    _0x179b00("*Error !!*");
    _0x2aafec(_0xc8ddad);
  }
});
cmd({
  'pattern': "setowner",
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0xe48abe, _0x1370f6, _0xb0f65c, {
  from: _0x576885,
  l: _0x840360,
  quoted: _0x53f17f,
  body: _0x29dd8a,
  isCmd: _0x30a61b,
  command: _0x54402f,
  args: _0x5ce564,
  q: _0x50527a,
  isSudo: _0x446b23,
  isGroup: _0x43ec4d,
  sender: _0x52f233,
  senderNumber: _0x428d60,
  botNumber2: _0x445f9b,
  botNumber: _0x257720,
  pushname: _0x48467b,
  isMe: _0x1d214d,
  isOwner: _0x3e2b2b,
  groupMetadata: _0x175360,
  groupName: _0x29566a,
  participants: _0x191b52,
  groupAdmins: _0x5a6a4a,
  isBotAdmins: _0x4d3ec4,
  isAdmins: _0x394628,
  reply: _0x5831a5
}) => {
  try {
    if (!_0x1d214d && !_0x446b23) {
      return await _0x5831a5("*OWNER COMMAND ⛔*");
    }
    let _0x34cf16 = await get("OWNER_NUMBER");
    if (_0x34cf16 === _0x50527a) {
      return;
    }
    await input("OWNER_NUMBER", _0x50527a);
    await _0x5831a5("*OWNER_NUMBER:* " + _0x50527a);
  } catch (_0x45d263) {
    _0x5831a5("*Error !!*");
    _0x840360(_0x45d263);
  }
});
cmd({
  'pattern': "setmail",
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x2e6538, _0x5cafbb, _0x2da470, {
  from: _0x153db3,
  l: _0xc26c9c,
  quoted: _0x19df31,
  body: _0x11c476,
  isCmd: _0x579ca9,
  command: _0x257cad,
  args: _0x43cb18,
  q: _0x2f024b,
  isSudo: _0x384c09,
  isGroup: _0xf84d45,
  sender: _0x56baae,
  senderNumber: _0x162bb5,
  botNumber2: _0x3e6131,
  botNumber: _0x29fa0f,
  pushname: _0x1b37bb,
  isMe: _0x1bf8dc,
  isOwner: _0x396ceb,
  groupMetadata: _0x4486f8,
  groupName: _0x96b5b1,
  participants: _0xf64be4,
  groupAdmins: _0x59a53e,
  isBotAdmins: _0x1768c5,
  isAdmins: _0x333cc6,
  reply: _0x555c30
}) => {
  try {
    if (!_0x1bf8dc && !_0x384c09) {
      return await _0x555c30("*OWNER COMMAND ⛔*");
    }
    let _0x5e104b = await get("SEEDR_MAIL");
    if (_0x5e104b === _0x2f024b) {
      return;
    }
    await input("SEEDR_MAIL", _0x2f024b);
    await _0x555c30("*Seedr account mail added sucssess full✅*");
  } catch (_0x22d341) {
    _0x555c30("*Error !!*");
    _0xc26c9c(_0x22d341);
  }
});
cmd({
  'pattern': "setpassword",
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x2caea9, _0x35b71f, _0x5ca341, {
  from: _0x2801b0,
  l: _0x21b354,
  quoted: _0x293208,
  body: _0x3685bf,
  isCmd: _0x556491,
  command: _0x37627a,
  args: _0x27bbad,
  q: _0x2978e0,
  isSudo: _0x60701c,
  isGroup: _0x14a9f5,
  sender: _0x4207e8,
  senderNumber: _0x2d2908,
  botNumber2: _0xb6501f,
  botNumber: _0x174272,
  pushname: _0x4c5791,
  isMe: _0x29fefe,
  isOwner: _0x58139b,
  groupMetadata: _0x31abcd,
  groupName: _0x29e53f,
  participants: _0x343abb,
  groupAdmins: _0x155f1c,
  isBotAdmins: _0x35ea87,
  isAdmins: _0x2b47e2,
  reply: _0x594dfe
}) => {
  try {
    if (!_0x29fefe && !_0x60701c) {
      return await _0x594dfe("*OWNER COMMAND ⛔*");
    }
    let _0x53a4d7 = await get('SEEDR_PASSWORD');
    if (_0x53a4d7 === _0x2978e0) {
      return;
    }
    await input("SEEDR_PASSWORD", _0x2978e0);
    await _0x594dfe("*Seedr account password added sucssess full✅*");
  } catch (_0x3eea65) {
    _0x594dfe("*Error !!*");
    _0x21b354(_0x3eea65);
  }
});
cmd({
  'pattern': "setsudo",
  'react': "👨🏻‍🔧",
  'alias': ['set', "addsudo"],
  'desc': "Set moderator.",
  'category': 'owner',
  'use': ".setsudo",
  'filename': __filename
}, async (_0x40d1e7, _0x25d9c0, _0x1153e8, {
  from: _0x386da6,
  l: _0x5b4540,
  quoted: _0x108fb1,
  body: _0x13752e,
  isCmd: _0x3ed8a2,
  command: _0x3334e1,
  args: _0x132960,
  q: _0x1c65fb,
  msr: _0x5ddd2b,
  creator: _0x6127f5,
  isGroup: _0x4faaab,
  sender: _0x2de77f,
  senderNumber: _0x388084,
  botNumber2: _0x28dc30,
  botNumber: _0x2458fa,
  pushname: _0x274ef6,
  isMe: _0x112195,
  isOwner: _0x4caf46,
  groupMetadata: _0x5a6e03,
  isDev: _0x2c8bcc,
  groupName: _0x29ed1a,
  participants: _0xdf31ef,
  groupAdmins: _0x515c76,
  isBotAdmins: _0x468ac6,
  isAdmins: _0x43398c,
  reply: _0xcdee7b
}) => {
  try {
    if (!_0x112195) {
      return await _0xcdee7b("*OWNER COMMAND ⛔*");
    }
    const _0xf4c25a = _0x1153e8.mentionUser[0x0];
    if (!_0xf4c25a) {
      return;
    }
    const _0x25d597 = async _0x2bf16a => {
      let _0x39e5dc = await get(_0x2bf16a);
      for (let _0x8b3437 = 0x0; _0x8b3437 < _0x39e5dc.length; _0x8b3437++) {
        if (_0x39e5dc[_0x8b3437] === _0xf4c25a) {
          return true;
        }
      }
      return false;
    };
    if (await _0x25d597("SUDO")) {
      return;
    }
    let _0x4cd024 = await get("SUDO");
    _0x4cd024.push(_0xf4c25a);
    await input("SUDO", _0x4cd024);
    await _0xcdee7b("*Successful added Moderater list ✅*");
    await _0x40d1e7.sendMessage(_0x386da6, {
      'react': {
        'text': '✔',
        'key': _0x25d9c0.key
      }
    });
  } catch (_0x520b09) {
    await _0x40d1e7.sendMessage(_0x386da6, {
      'react': {
        'text': '❌',
        'key': _0x25d9c0.key
      }
    });
    console.log(_0x520b09);
    _0xcdee7b("❌ *Error Accurated !!*\n\n" + _0x520b09);
  }
});
cmd({
  'pattern': "setlogo",
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x5ae333, _0x196872, _0x27aef1, {
  from: _0x52fe5e,
  l: _0xe7e254,
  quoted: _0x480fbe,
  body: _0x543c08,
  isCmd: _0xa07698,
  command: _0x5674c5,
  args: _0x1ca9da,
  isSudo: _0x454c8f,
  q: _0x4a0fe9,
  isGroup: _0x57ec4d,
  sender: _0x19e2f9,
  senderNumber: _0x8be60e,
  botNumber2: _0x36d0a8,
  botNumber: _0x1a6a9f,
  pushname: _0x3cc5cb,
  isMe: _0x470802,
  isOwner: _0x2283c6,
  groupMetadata: _0x322d57,
  groupName: _0xfcebe6,
  participants: _0x4fe4d,
  groupAdmins: _0x2a592f,
  isBotAdmins: _0x5e9777,
  isAdmins: _0x2f3c6f,
  reply: _0x3f19f5
}) => {
  try {
    if (!_0x470802 && !_0x454c8f) {
      return await _0x3f19f5("*OWNER COMMAND ⛔*");
    }
    let _0x27d218 = await get("LOGO");
    if (_0x27d218 === _0x4a0fe9) {
      return;
    }
    await input("LOGO", _0x4a0fe9);
    await _0x3f19f5("*Logo updated: " + _0x4a0fe9 + '*');
  } catch (_0x40d3eb) {
    _0x3f19f5("*Error !!*");
    _0xe7e254(_0x40d3eb);
  }
});
var needus = '';
if (config.LANG === 'SI') {
  needus = "එය දත්ත සමුදාය නැවත සකසයි.";
} else {
  needus = "It resets database.";
}
cmd({
  'pattern': "resetdb",
  'desc': needus,
  'category': 'owner',
  'use': '.resetdb',
  'filename': __filename
}, async (_0x5ca1f2, _0x309018, _0x298e90, {
  from: _0x5051c7,
  l: _0x12cb42,
  quoted: _0x5f0bba,
  body: _0x4f4f3a,
  isCmd: _0x5a9e18,
  command: _0x3b61db,
  isSudo: _0x2d9644,
  args: _0x50440e,
  q: _0x2b90c9,
  isGroup: _0x48affe,
  sender: _0xfe392,
  senderNumber: _0x21245b,
  botNumber2: _0x453bb7,
  botNumber: _0x123c93,
  pushname: _0x56d154,
  isMe: _0xfae4ce,
  isOwner: _0x65b621,
  groupMetadata: _0x52ca0f,
  groupName: _0x10f458,
  participants: _0x404c9a,
  groupAdmins: _0x2c75b8,
  isBotAdmins: _0x1b57dc,
  isAdmins: _0xe7475b,
  reply: _0x580d1c
}) => {
  try {
    if (!_0xfae4ce) {
      return;
    }
    await updfb();
    return _0x580d1c("*Database reseted ✅*");
  } catch (_0x23a3d6) {
    _0x580d1c(cantf);
    _0x12cb42(_0x23a3d6);
  }
});
cmd({
  'pattern': "autotyping",
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x34b5e7, _0x1c6743, _0x2294ad, {
  from: _0x5ceb66,
  l: _0x2db922,
  quoted: _0x364dd7,
  body: _0x26cc88,
  isCmd: _0x195b66,
  command: _0xf73026,
  args: _0x52becd,
  q: _0x3de7be,
  isSudo: _0x41734a,
  isGroup: _0x21e1d0,
  sender: _0x1c5584,
  senderNumber: _0x19f9e0,
  botNumber2: _0x2844b9,
  botNumber: _0x5a6ad1,
  pushname: _0x51d018,
  isMe: _0x141327,
  isOwner: _0x349cc5,
  groupMetadata: _0x26390e,
  groupName: _0x52ce3f,
  participants: _0x28e1be,
  groupAdmins: _0x28c74d,
  isBotAdmins: _0x502ae5,
  isAdmins: _0xb09a8a,
  reply: _0x5b4b82
}) => {
  try {
    if (!_0x141327 && !_0x41734a) {
      return await _0x5b4b82("*OWNER COMMAND ⛔*");
    }
    if (_0x3de7be === 'on') {
      let _0x1196f2 = await get('AUTO_TYPING');
      if (_0x1196f2 === true) {
        return;
      }
      await input('AUTO_TYPING', true);
      await _0x5b4b82("*AUTO_TYPING updated: " + _0x3de7be + '*');
    } else {
      let _0x483c30 = await get("AUTO_TYPING");
      if (_0x483c30 === false) {
        return;
      }
      await input("AUTO_TYPING", false);
      await _0x5b4b82("*AUTO_TYPING updated: " + _0x3de7be + '*');
    }
  } catch (_0x49cd81) {
    _0x5b4b82("*Error !!*");
    _0x2db922(_0x49cd81);
  }
});
cmd({
  'pattern': 'autorec',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x243f8c, _0x277c9d, _0x474331, {
  from: _0x17e26d,
  l: _0x21586b,
  quoted: _0x20fe9b,
  body: _0x58ae16,
  isCmd: _0x4eaaaf,
  command: _0x1da08f,
  args: _0x36218c,
  isSudo: _0x4a4e2e,
  q: _0x5a8ca8,
  isGroup: _0x2612ce,
  sender: _0x5dda46,
  senderNumber: _0x4af30c,
  botNumber2: _0x3da0f3,
  botNumber: _0x5e1722,
  pushname: _0x3fea63,
  isMe: _0x461b45,
  isOwner: _0x36a8ff,
  groupMetadata: _0xe3b430,
  groupName: _0x1aafdc,
  participants: _0x5edee5,
  groupAdmins: _0x4addab,
  isBotAdmins: _0xdac9a1,
  isAdmins: _0x3c31e8,
  reply: _0xc21bde
}) => {
  try {
    if (!_0x461b45 && !_0x4a4e2e) {
      return await _0xc21bde("*OWNER COMMAND ⛔*");
    }
    if (_0x5a8ca8 === 'on') {
      let _0x355108 = await get("AUTO_RECORDING");
      if (_0x355108 === true) {
        return;
      }
      await input("AUTO_RECORDING", true);
      await _0xc21bde("*💁‍♂️ AUTO_RECORDING ➨* on");
    } else {
      let _0x5c90b3 = await get("AUTO_RECORDING");
      if (_0x5c90b3 === false) {
        return;
      }
      await input("AUTO_RECORDING", false);
      await _0xc21bde("*💁‍♂️ AUTO_RECORDING ➨* off");
    }
  } catch (_0x270623) {
    _0xc21bde("*Error !!*");
    _0x21586b(_0x270623);
  }
});
cmd({
  'pattern': "autos",
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x4c4b49, _0x2e6843, _0x159f4a, {
  from: _0x5adf17,
  l: _0x266c02,
  quoted: _0x285dcf,
  body: _0x25cbb2,
  isCmd: _0x48855f,
  command: _0x23e165,
  isSudo: _0x34059d,
  args: _0x336c11,
  q: _0xff9ee9,
  isGroup: _0x66b16a,
  sender: _0x57e608,
  senderNumber: _0x35d6b0,
  botNumber2: _0x453b25,
  botNumber: _0x544fdf,
  pushname: _0x3d648c,
  isMe: _0x228dc8,
  isOwner: _0x55c07e,
  groupMetadata: _0x4a6662,
  groupName: _0x3ae49b,
  participants: _0x1a57e2,
  groupAdmins: _0x6dd271,
  isBotAdmins: _0x27f25b,
  isAdmins: _0x28050a,
  reply: _0x3bc457
}) => {
  try {
    if (!_0x228dc8 && !_0x34059d) {
      return await _0x3bc457("*OWNER COMMAND ⛔*");
    }
    if (_0xff9ee9 === 'on') {
      let _0x3fd472 = await get("AUTO_READ_STATUS");
      if (_0x3fd472 === true) {
        return;
      }
      await input('AUTO_READ_STATUS', true);
      await _0x3bc457("*💁‍♂️ AUTO_READ_STATUS ➨* on");
    } else {
      let _0x6e596b = await get('STATUS_VIEW');
      if (_0x6e596b === false) {
        return;
      }
      await input("AUTO_READ_STATUS", false);
      await _0x3bc457("*💁‍♂️ AUTO_READ_STATUS ➨* off");
    }
  } catch (_0x1756ae) {
    _0x3bc457("*Error !!*");
    _0x266c02(_0x1756ae);
  }
});
cmd({
  'pattern': "setprefix",
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x342b8c, _0x134dbb, _0x372a5c, {
  from: _0x50c4d8,
  l: _0x403402,
  quoted: _0x546195,
  body: _0x313ec4,
  isCmd: _0x11f96b,
  command: _0x16a265,
  args: _0x154c2c,
  q: _0x51ea52,
  isSudo: _0x4f7ad0,
  isGroup: _0x261958,
  sender: _0x1a0906,
  senderNumber: _0x265e10,
  botNumber2: _0x387c02,
  botNumber: _0x2cb0d5,
  pushname: _0x2d8a11,
  isMe: _0x44ca5c,
  isOwner: _0x3bbf4c,
  groupMetadata: _0x33b5b1,
  groupName: _0x3eb892,
  participants: _0x37e275,
  groupAdmins: _0x5d3378,
  isBotAdmins: _0x33671f,
  isAdmins: _0x39d309,
  reply: _0x48b9ae
}) => {
  try {
    if (!_0x44ca5c && !_0x4f7ad0) {
      return await _0x48b9ae("*OWNER COMMAND ⛔*");
    }
    let _0x15ac08 = await get("PREFIX");
    if (_0x15ac08 === _0x51ea52) {
      return;
    }
    await input("PREFIX", _0x51ea52);
    await _0x48b9ae("*PREFIX UPDATED*");
  } catch (_0x3185d9) {
    _0x48b9ae("*Error !!*");
    _0x403402(_0x3185d9);
  }
});
cmd({
  'pattern': "autoread",
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x4441db, _0x56dd35, _0x234fe4, {
  from: _0x348eda,
  l: _0x368cb9,
  quoted: _0x563365,
  body: _0x174a0f,
  isCmd: _0x2292cd,
  isSudo: _0x141271,
  command: _0x2845a8,
  args: _0x32b567,
  q: _0x34f90a,
  isGroup: _0x2e9414,
  sender: _0x5d0c18,
  senderNumber: _0x52da4a,
  botNumber2: _0x2a7c53,
  botNumber: _0x4564d0,
  pushname: _0x32ea14,
  isMe: _0x22c830,
  isOwner: _0x106bad,
  groupMetadata: _0x33f7dd,
  groupName: _0x3a8fc3,
  participants: _0x1f876c,
  groupAdmins: _0x316344,
  isBotAdmins: _0x42e82d,
  isAdmins: _0x2bc5ac,
  reply: _0x13583
}) => {
  try {
    if (!_0x22c830 && !_0x141271) {
      return await _0x13583("*OWNER COMMAND ⛔*");
    }
    if (_0x34f90a === 'on') {
      let _0x2f4098 = await get("AUTO_MSG_READ");
      if (_0x2f4098 === true) {
        return;
      }
      await input("AUTO_MSG_READ", true);
      await _0x13583("*AUTO_MSG_READ updated: " + _0x34f90a + '*');
    } else {
      let _0x4ad0e2 = await get("AUTO_MSG_READ");
      if (_0x4ad0e2 === false) {
        return;
      }
      await input("AUTO_MSG_READ", false);
      await _0x13583("*AUTO_MSG_READ updated: " + _0x34f90a + '*');
    }
  } catch (_0x1f1e18) {
    _0x13583("*Error !!*");
    _0x368cb9(_0x1f1e18);
  }
});
cmd({
  'pattern': "ronly",
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x117c04, _0x4308ec, _0x10ffac, {
  from: _0x454644,
  l: _0x4547a2,
  quoted: _0x1c050,
  body: _0x4f6500,
  isCmd: _0x2ffcc5,
  isSudo: _0x5691e9,
  command: _0x4dab70,
  args: _0x1d581c,
  q: _0x5a60eb,
  isGroup: _0xcf3db1,
  sender: _0x5ae4f2,
  senderNumber: _0x48ac6d,
  botNumber2: _0x84c282,
  botNumber: _0x351338,
  pushname: _0xfd5a69,
  isMe: _0x93b881,
  isOwner: _0x267696,
  groupMetadata: _0x27a9c,
  groupName: _0x272315,
  participants: _0x97ddc7,
  groupAdmins: _0x323b11,
  isBotAdmins: _0x324d47,
  isAdmins: _0x458cd9,
  reply: _0x4a9cd7
}) => {
  try {
    if (!_0x93b881 && !_0x5691e9) {
      return await _0x4a9cd7("*OWNER COMMAND ⛔*");
    }
    if (_0x5a60eb === 'on') {
      let _0x51c57d = await get("CMD_ONLY_READ");
      if (_0x51c57d === true) {
        return;
      }
      await input("CMD_ONLY_READ", true);
      await _0x4a9cd7("*CMD_ONLY_READ updated: " + _0x5a60eb + '*');
    } else {
      let _0x407e4f = await get("CMD_ONLY_READ");
      if (_0x407e4f === false) {
        return;
      }
      await input("CMD_ONLY_READ", false);
      await _0x4a9cd7("*CMD_ONLY_READ updated: " + _0x5a60eb + '*');
    }
  } catch (_0x4fb36d) {
    _0x4a9cd7("*Error !!*");
    _0x4547a2(_0x4fb36d);
  }
});
