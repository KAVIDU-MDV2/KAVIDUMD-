const config = require("../config");
const {
  cmd,
  commands
} = require("../command");
const axios = require("axios");
const sharp = require('sharp');
const Seedr = require("seedr");
const {
  scrapercine,
  getDownloadLink
} = require("../lib/yts");
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
const fetch = (..._0x597555) => import("node-fetch").then(({
  default: _0x48aff4
}) => _0x48aff4(..._0x597555));
const {
  Buffer
} = require("buffer");
const download = require("../lib/yts");
const {
  sinhalasub_search,
  sinhalasub_info,
  sinhalasub_dl
} = require('../lib/sinhalasubli');
const {
  sinhalasubb_search,
  sinhalasubtv_info,
  sinhalasubtv_dl
} = require("../lib/sinhalasubtv");
const {
  sizeFormatter
} = require("human-readable");
cmd({
  'pattern': "sinhalasub",
  'react': '🔎',
  'category': "movie",
  'alias': ["sinhalasub"],
  'desc': "sinhalasub.lk movie search",
  'use': ".sinhalasub 2025",
  'filename': __filename
}, async (_0x4b12a6, _0x370112, _0x4c168d, {
  from: _0x38cc7c,
  q: _0x99fa36,
  prefix: _0x15eb2a,
  isPre: _0x37580b,
  isMe: _0x1ff9bb,
  isSudo: _0x5d2549,
  isOwner: _0x15c82f,
  reply: _0x5bb781
}) => {
  try {
    const _0x41eb0e = (await axios.get('https://mv-visper-full-db.pages.dev/Main/main_var.json')).data;
    const _0x17859c = _0x41eb0e.mvfree === "true";
    if (!_0x17859c && !_0x1ff9bb && !_0x37580b) {
      await _0x4b12a6.sendMessage(_0x38cc7c, {
        'react': {
          'text': '❌',
          'key': _0x4c168d.key
        }
      });
      return await _0x4b12a6.sendMessage(_0x38cc7c, {
        'text': "*`You are not a premium user⚠️`*\n\n*Send a message to one of the 2 numbers below and buy premium 🎉.*\n\n_Price : 200 LKR ✔️_\n\n*👨‍💻Contact us : 94757054054 , 94767054052*"
      }, {
        'quoted': _0x4c168d
      });
    }
    if (config.MV_BLOCK == "true" && !_0x1ff9bb && !_0x5d2549 && !_0x15c82f) {
      await _0x4b12a6.sendMessage(_0x38cc7c, {
        'react': {
          'text': '❌',
          'key': _0x4c168d.key
        }
      });
      return await _0x4b12a6.sendMessage(_0x38cc7c, {
        'text': "*This command currently only works for the Bot owner. To disable it for others, use the .settings command 👨‍🔧.*"
      }, {
        'quoted': _0x4c168d
      });
    }
    if (!_0x99fa36) {
      return await _0x5bb781("*please give me text !...*");
    }
    let _0xea3488 = await sinhalasub_search(_0x99fa36);
    if (_0xea3488.length === 0x0) {
      await _0x4b12a6.sendMessage(_0x38cc7c, {
        'react': {
          'text': '❌',
          'key': _0x4c168d.key
        }
      });
      return await _0x4b12a6.sendMessage(_0x38cc7c, {
        'text': "*No results found ❌*"
      }, {
        'quoted': _0x4c168d
      });
    }
    var _0xb5b702 = [];
    for (var _0x15cba6 = 0x0; _0x15cba6 < _0xea3488.length; _0x15cba6++) {
      _0xb5b702.push({
        'title': _0xea3488[_0x15cba6].Title.replace("Sinhala Subtitles | සිංහල උපසිරසි සමඟ", ''),
        'description': '',
        'rowId': _0x15eb2a + "sininfo " + _0xea3488[_0x15cba6].Link
      });
    }
    const _0x1b240e = [{
      'title': "sinhalasub.lk results",
      'rows': _0xb5b702
    }];
    const _0x21d362 = {
      'text': "_*SINHALASUB MOVIE SEARCH RESULTS 🎬*_\n\n*`Input :`* " + _0x99fa36,
      'footer': config.FOOTER,
      'title': "cinesubz.co results 🎬",
      'buttonText': "*Reply Below Number 🔢*",
      'sections': _0x1b240e
    };
    const _0x14b817 = "_*SINHALASUB MOVIE SEARCH RESULTS 🎬*_\n\n*`Input :`* " + _0x99fa36;
    const _0x1da1ae = _0xea3488.map((_0x2c155a, _0x113eaf) => {
      const _0x1e296e = ('' + _0xea3488[_0x113eaf].Title).replace(/WEBDL|WEB DL|BluRay HD|BluRay SD|BluRay FHD|Telegram BluRay SD|Telegram BluRay HD|Direct BluRay SD|Direct BluRay HD|Direct BluRay FHD|FHD|HD|SD|Telegram BluRay FHD/gi, '').trim() || "No info";
      return {
        'title': _0x1e296e,
        'id': _0x15eb2a + ("sininfo " + _0xea3488[_0x113eaf].Link)
      };
    });
    const _0x2f0e79 = {
      'title': "Choose a Movie :)",
      'sections': [{
        'title': "Available Links",
        'rows': _0x1da1ae
      }]
    };
    if (config.BUTTON === "true") {
      await _0x4b12a6.sendMessage(_0x38cc7c, {
        'image': {
          'url': config.LOGO
        },
        'caption': _0x14b817,
        'footer': config.FOOTER,
        'buttons': [{
          'buttonId': "download_list",
          'buttonText': {
            'displayText': "🎥 Select Option"
          },
          'type': 0x4,
          'nativeFlowInfo': {
            'name': "single_select",
            'paramsJson': JSON.stringify(_0x2f0e79)
          }
        }],
        'headerType': 0x1,
        'viewOnce': true
      }, {
        'quoted': _0x4c168d
      });
    } else {
      await _0x4b12a6.listMessage(_0x38cc7c, _0x21d362, _0x4c168d);
    }
  } catch (_0x21bc56) {
    _0x5bb781("🚫 *Error Accurated !!*\n\n" + _0x21bc56);
    console.log(_0x21bc56);
  }
});
cmd({
  'pattern': "sininfo",
  'alias': ["mdv"],
  'use': ".moviedl <url>",
  'react': '🎥',
  'desc': "download movies from sinhalasub.lk",
  'filename': __filename
}, async (_0x82ee28, _0x2f3c3a, _0x43143e, {
  from: _0x2b7b02,
  l: _0xe3c48f,
  quoted: _0x2e5686,
  body: _0x384926,
  isCmd: _0x3e0797,
  command: _0x1a4933,
  args: _0x417fae,
  q: _0x3c4b09,
  isGroup: _0x5b0e24,
  prefix: _0x142583,
  sender: _0x309cec,
  senderNumber: _0x3cc285,
  botNumber2: _0x320e72,
  botNumber: _0x527ee3,
  pushname: _0x415cca,
  isMe: _0x45f458,
  isOwner: _0x224b4c,
  groupMetadata: _0x5aace8,
  groupName: _0x37ba79,
  participants: _0x424da8,
  groupAdmins: _0x154620,
  isBotAdmins: _0x25c12f,
  isAdmins: _0x1a7eac,
  reply: _0x215411
}) => {
  try {
    if (!_0x3c4b09) {
      return _0x215411("🚩 *Please give me a url*");
    }
    let _0x3b2ce2 = await sinhalasub_info(_0x3c4b09);
    if (!_0x3c4b09 || !_0x3c4b09.includes("https://sinhalasub.lk/movies/")) {
      console.log("Invalid input:", _0x3c4b09);
      return await _0x215411("*❗ This is a TV series, please use .tv command.*");
    }
    if (_0x3b2ce2.length < 0x1) {
      return await _0x82ee28.sendMessage(_0x2b7b02, {
        'text': "🚩 *I couldn't find anything :(*"
      }, {
        'quoted': _0x2f3c3a
      });
    }
    var _0x441ab6 = [];
    _0x441ab6.push({
      'buttonId': _0x142583 + "daqt " + _0x3c4b09,
      'buttonText': {
        'displayText': "Send Details 💡"
      },
      'type': 0x1
    }, {
      'buttonId': _0x142583 + "ch " + _0x3c4b09,
      'buttonText': {
        'displayText': "Send Images 💡\n"
      },
      'type': 0x1
    });
    _0x3b2ce2.downloadLinks.map(_0x2541b9 => {
      _0x441ab6.push({
        'buttonId': _0x142583 + ("sindl " + _0x2541b9.link + '±' + _0x3b2ce2.images[0x1] + '±' + _0x3b2ce2.title + "\n\t\n\t*`[ " + _0x2541b9.quality + " ]`*"),
        'buttonText': {
          'displayText': _0x2541b9.size + " - " + _0x2541b9.quality
        },
        'type': 0x1
      });
    });
    const _0x2f1382 = "*☘️ 𝗧ɪᴛʟᴇ ➮* *_" + (_0x3b2ce2.title || 'N/A') + "_*\n\n*📅 𝗥ᴇʟᴇꜱᴇᴅ ᴅᴀᴛᴇ ➮* _" + (_0x3b2ce2.date || 'N/A') + "_\n*🌎 𝗖ᴏᴜɴᴛʀʏ ➮* _" + (_0x3b2ce2.country || "N/A") + "_\n*💃 𝗥ᴀᴛɪɴɢ ➮* _" + (_0x3b2ce2.rating || 'N/A') + "_\n*⏰ 𝗥ᴜɴᴛɪᴍᴇ ➮* _" + (_0x3b2ce2.duration || "N/A") + "_\n*💁‍♂️ 𝗦ᴜʙᴛɪᴛʟᴇ ʙʏ ➮* _" + (_0x3b2ce2.author || "N/A") + "_\n";
    const _0x282e26 = {
      'image': {
        'url': _0x3b2ce2.images[0x0] || images
      },
      'caption': _0x2f1382,
      'footer': config.FOOTER,
      'buttons': _0x441ab6,
      'headerType': 0x4
    };
    const _0x2636a5 = _0x3b2ce2.downloadLinks.map((_0x224559, _0x45b5e4) => {
      const _0x32a501 = (_0x224559.size + " - " + _0x224559.quality).replace(/WEBDL|WEB DL|BluRay HD|BluRay SD|BluRay FHD|Telegram BluRay SD|Telegram BluRay HD|Direct BluRay SD|Direct BluRay HD|Direct BluRay FHD|FHD|HD|SD|Telegram BluRay FHD/gi, '').trim() || "No info";
      return {
        'title': _0x32a501,
        'id': _0x142583 + ("sindl " + _0x224559.link + '±' + _0x3b2ce2.images[0x1] + '±' + _0x3b2ce2.title + "\n\t\n\t*`[ " + _0x224559.quality + " ]`*")
      };
    });
    const _0x22b798 = {
      'title': "🎬 Choose a download link :)",
      'sections': [{
        'title': "Available Links",
        'rows': _0x2636a5
      }]
    };
    if (config.BUTTON === "true") {
      await _0x82ee28.sendMessage(_0x2b7b02, {
        'image': {
          'url': _0x3b2ce2.images[0x0] || images
        },
        'caption': _0x2f1382,
        'footer': config.FOOTER,
        'buttons': [{
          'buttonId': _0x142583 + "daqt " + _0x3c4b09,
          'buttonText': {
            'displayText': "Details Send"
          },
          'type': 0x1
        }, {
          'buttonId': _0x142583 + "ch " + _0x3c4b09,
          'buttonText': {
            'displayText': "Images Send"
          },
          'type': 0x1
        }, {
          'buttonId': "download_list",
          'buttonText': {
            'displayText': "🎥 Select Option"
          },
          'type': 0x4,
          'nativeFlowInfo': {
            'name': "single_select",
            'paramsJson': JSON.stringify(_0x22b798)
          }
        }],
        'headerType': 0x1,
        'viewOnce': true
      }, {
        'quoted': _0x2f3c3a
      });
    } else {
      return await _0x82ee28.buttonMessage(_0x2b7b02, _0x282e26, _0x2f3c3a);
    }
  } catch (_0xd0c8b4) {
    _0x215411("🚫 *Error Accurated !!*\n\n" + _0xd0c8b4);
    console.log(_0xd0c8b4);
  }
});
cmd({
  'pattern': "sindl",
  'react': '⬇️',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x1a4092, _0x4fa9c1, _0x5e599, {
  from: _0x431c42,
  q: _0x10dbfa,
  isMe: _0x23d3c6,
  reply: _0xbd2ec2
}) => {
  try {
    const _0x360270 = _0x10dbfa.split('±')[0x0];
    const _0x410ee6 = _0x10dbfa.split('±')[0x1];
    const _0x6e4436 = _0x10dbfa.split('±')[0x2];
    if (_0x360270.includes("pixeldrain.com")) {
      return await _0xbd2ec2("Invalid url !!");
    }
    let _0xa27cdd = await sinhalasub_dl(_0x360270);
    const _0x9c67eb = _0xa27cdd.downloadLink.split("https://pixeldrain.com/u/")[0x1];
    const _0x2fe901 = "https://pixeldrain.com/api/file/" + _0x9c67eb;
    isUploading = true;
    const _0x3cfd63 = _0x2fe901.trim();
    const _0x3efb9f = '' + _0x410ee6;
    const _0x2cdb83 = {
      'document': {
        'url': _0x3cfd63
      },
      'caption': "*🎬 Name :* " + _0x6e4436 + "\n\n" + config.NAME,
      'mimetype': "video/mp4",
      'jpegThumbnail': await (await fetch(_0x3efb9f)).buffer(),
      'fileName': _0x6e4436 + ".mp4"
    };
    await _0x1a4092.sendMessage(_0x431c42, {
      'text': "*Uploading your movie..⬆️*"
    });
    await _0x1a4092.sendMessage(config.JID || _0x431c42, _0x2cdb83);
    await _0x1a4092.sendMessage(_0x431c42, {
      'react': {
        'text': '✔️',
        'key': _0x4fa9c1.key
      }
    });
    await _0x1a4092.sendMessage(_0x431c42, {
      'text': "*Movie send Successfull this JID " + config.JID + " ✔*"
    }, {
      'quoted': _0x4fa9c1
    });
  } catch (_0x535da9) {
    _0xbd2ec2("🚫 *Error Accurated !!*\n\n" + _0x535da9);
    console.log(_0x535da9);
  }
});
cmd({
  'pattern': "daqt",
  'alias': ["mdv"],
  'use': ".moviedl <url>",
  'react': '🎥',
  'desc': "download movies from sinhalasub.lk",
  'filename': __filename
}, async (_0x42f251, _0x3de362, _0x41a89c, {
  from: _0x44894a,
  l: _0x53d1ce,
  quoted: _0xf245a2,
  body: _0x4b8c0e,
  isCmd: _0x11fac9,
  command: _0x589019,
  args: _0x445cc0,
  q: _0x11cb63,
  isGroup: _0x2e792d,
  prefix: _0x3d87ab,
  sender: _0x2dfbd5,
  senderNumber: _0x3ebc43,
  botNumber2: _0x1474d3,
  botNumber: _0x41cb65,
  pushname: _0x2d4c1c,
  isMe: _0x304e11,
  isOwner: _0xf47a59,
  groupMetadata: _0x16859f,
  groupName: _0x516cb3,
  participants: _0x5d4a66,
  groupAdmins: _0x4743d3,
  isBotAdmins: _0x41d1a7,
  isAdmins: _0x2c058d,
  reply: _0xb3c49f
}) => {
  try {
    if (!_0x11cb63) {
      return _0xb3c49f("🚩 *Please give me a url*");
    }
    let _0x51d3ed = await sinhalasub_info(_0x11cb63);
    const _0x2d8843 = (await axios.get("https://mv-visper-full-db.pages.dev/Main/main_var.json")).data;
    const _0x47d11b = "*☘️ 𝗧ɪᴛʟᴇ ➮* *_" + (_0x51d3ed.title || "N/A") + "_*\n\n*📅 𝗥ᴇʟᴇꜱᴇᴅ ᴅᴀᴛᴇ ➮* _" + (_0x51d3ed.date || 'N/A') + "_\n*🌎 𝗖ᴏᴜɴᴛʀʏ ➮* _" + (_0x51d3ed.country || "N/A") + "_\n*💃 𝗥ᴀᴛɪɴɢ ➮* _" + (_0x51d3ed.rating || 'N/A') + "_\n*⏰ 𝗥ᴜɴᴛɪᴍᴇ ➮* _" + (_0x51d3ed.duration || "N/A") + "_\n*💁‍♂️ 𝗦ᴜʙᴛɪᴛʟᴇ ʙʏ ➮* _" + (_0x51d3ed.author || "N/A") + "_\n\n> 🌟 Follow us : *" + _0x2d8843.chlink + '*';
    await _0x42f251.sendMessage(config.JID || _0x44894a, {
      'image': {
        'url': _0x51d3ed.images[0x0] || images
      },
      'caption': _0x47d11b
    });
    await _0x42f251.sendMessage(_0x44894a, {
      'react': {
        'text': '✔️',
        'key': _0x3de362.key
      }
    });
  } catch (_0x3ceb2f) {
    console.error("Error fetching or sending", _0x3ceb2f);
    await _0x42f251.sendMessage(_0x44894a, "*Error fetching or sending *", {
      'quoted': _0x3de362
    });
  }
});
cmd({
  'pattern': "sinhalasubtv",
  'react': '🔎',
  'category': "movie",
  'alias': ["sinhalatv"],
  'desc': "sinhalasub.lk tv shows search",
  'use': ".sinhalasubtv 2025",
  'filename': __filename
}, async (_0xe0f122, _0x23f584, _0x3dfaed, {
  from: _0x23dbc5,
  q: _0x1244ca,
  prefix: _0x312a97,
  isPre: _0x46a22,
  isMe: _0x501c09,
  isSudo: _0x254760,
  isOwner: _0x312393,
  reply: _0xef3722
}) => {
  try {
    const _0x49049 = (await axios.get('https://mv-visper-full-db.pages.dev/Main/main_var.json')).data;
    const _0x101b74 = _0x49049.mvfree === "true";
    if (!_0x101b74 && !_0x501c09 && !_0x46a22) {
      await _0xe0f122.sendMessage(_0x23dbc5, {
        'react': {
          'text': '❌',
          'key': _0x3dfaed.key
        }
      });
      return await _0xe0f122.sendMessage(_0x23dbc5, {
        'text': "*`You are not a premium user⚠️`*\n\n*Send a message to one of the 2 numbers below and buy Lifetime premium 🎉.*\n\n_Price : 200 LKR ✔️_\n\n*👨‍💻Contact us : 0778500326 , 0722617699*"
      }, {
        'quoted': _0x3dfaed
      });
    }
    if (config.MV_BLOCK == "true" && !_0x501c09 && !_0x254760 && !_0x312393) {
      await _0xe0f122.sendMessage(_0x23dbc5, {
        'react': {
          'text': '❌',
          'key': _0x3dfaed.key
        }
      });
      return await _0xe0f122.sendMessage(_0x23dbc5, {
        'text': "*This command currently only works for the Bot owner. To disable it for others, use the .settings command 👨‍🔧.*"
      }, {
        'quoted': _0x3dfaed
      });
    }
    if (!_0x1244ca) {
      return await _0xef3722("*please give me text !..*");
    }
    let _0x5d9881 = await sinhalasubb_search(_0x1244ca);
    if (_0x5d9881.length === 0x0) {
      await _0xe0f122.sendMessage(_0x23dbc5, {
        'react': {
          'text': '❌',
          'key': _0x3dfaed.key
        }
      });
      return await _0xe0f122.sendMessage(_0x23dbc5, {
        'text': "*No results found ❌*"
      }, {
        'quoted': _0x3dfaed
      });
    }
    var _0x587504 = [];
    for (var _0xafbd37 = 0x0; _0xafbd37 < _0x5d9881.length; _0xafbd37++) {
      _0x587504.push({
        'title': _0x5d9881[_0xafbd37].Title.replace("Sinhala Subtitles | සිංහල උපසිරසි සමඟ", ''),
        'description': '',
        'rowId': _0x312a97 + "sintvinfo " + _0x5d9881[_0xafbd37].Link
      });
    }
    const _0x52610a = [{
      'title': "sinhalasub.lk results",
      'rows': _0x587504
    }];
    const _0x2c3b57 = {
      'text': "*_SINHALASUB TV SEARCH RESULTS 📺_*\n\n*`Input :`* " + _0x1244ca,
      'footer': config.FOOTER,
      'title': "sinhalasub.lk results 🎬",
      'buttonText': "*Reply Below Number 🔢*",
      'sections': _0x52610a
    };
    const _0x16754c = "*_SINHALASUB TV SEARCH RESULTS 📺_*\n\n*`Input :`* " + _0x1244ca;
    const _0x250eac = _0x5d9881.map((_0x201ebf, _0x5c674c) => {
      const _0x463acb = ('' + _0x5d9881[_0x5c674c].Title).replace(/WEBDL|WEB DL|BluRay HD|BluRay SD|BluRay FHD|Telegram BluRay SD|Telegram BluRay HD|Direct BluRay SD|Direct BluRay HD|Direct BluRay FHD|FHD|HD|SD|Telegram BluRay FHD/gi, '').trim() || "No info";
      return {
        'title': _0x463acb,
        'id': _0x312a97 + ("sintvinfo " + _0x5d9881[_0x5c674c].Link)
      };
    });
    const _0x4ddbdf = {
      'title': "Choose a Movie :)",
      'sections': [{
        'title': "Available Links",
        'rows': _0x250eac
      }]
    };
    if (config.BUTTON === "true") {
      await _0xe0f122.sendMessage(_0x23dbc5, {
        'image': {
          'url': config.LOGO
        },
        'caption': _0x16754c,
        'footer': config.FOOTER,
        'buttons': [{
          'buttonId': 'download_list',
          'buttonText': {
            'displayText': "🎥 Select Option"
          },
          'type': 0x4,
          'nativeFlowInfo': {
            'name': "single_select",
            'paramsJson': JSON.stringify(_0x4ddbdf)
          }
        }],
        'headerType': 0x1,
        'viewOnce': true
      }, {
        'quoted': _0x3dfaed
      });
    } else {
      await _0xe0f122.listMessage(_0x23dbc5, _0x2c3b57, _0x3dfaed);
    }
  } catch (_0x2d65bb) {
    _0xef3722("🚫 *Error Accurated !!*\n\n" + _0x2d65bb);
    console.log(_0x2d65bb);
  }
});
cmd({
  'pattern': 'sintvinfo',
  'alias': ['mdv'],
  'use': ".moviedl <url>",
  'react': '🎥',
  'desc': "download movies from sinhalasub.lk",
  'filename': __filename
}, async (_0x53631e, _0x2b571f, _0x4c73f6, {
  from: _0x3a4dfb,
  l: _0x360d4e,
  quoted: _0x5bf80e,
  body: _0x3cdd52,
  isCmd: _0x590b42,
  command: _0x4c25ff,
  args: _0x3ba672,
  q: _0x1fd2e6,
  isGroup: _0x288f35,
  prefix: _0x418b4e,
  sender: _0x17c40a,
  senderNumber: _0x1d56b5,
  botNumber2: _0x256f7b,
  botNumber: _0x4df873,
  pushname: _0x4ff2f4,
  isMe: _0xa2833d,
  isOwner: _0x2cec42,
  groupMetadata: _0x2946e6,
  groupName: _0x40f6a5,
  participants: _0x53d390,
  groupAdmins: _0x2f2c88,
  isBotAdmins: _0x2def10,
  isAdmins: _0xf1a868,
  reply: _0x336786
}) => {
  try {
    if (!_0x1fd2e6) {
      return _0x336786("🚩 *Please give me a url*");
    }
    if (!_0x1fd2e6 || !_0x1fd2e6.includes("https://sinhalasub.lk/tvshows/")) {
      console.log("Invalid input:", _0x1fd2e6);
      return await _0x336786("*❗ This is a movie, please use .mv command.*");
    }
    let _0x2f3881 = await sinhalasubtv_info(_0x1fd2e6);
    var _0x5d59b6 = [];
    _0x5d59b6.push({
      'buttonId': _0x418b4e + "dtaqt " + _0x1fd2e6,
      'buttonText': {
        'displayText': "Details send"
      },
      'type': 0x1
    });
    _0x2f3881.result.episodes.map(_0x2bb390 => {
      _0x5d59b6.push({
        'buttonId': _0x418b4e + ("sintvfirstdl " + _0x2bb390.episode_link + '+' + _0x2f3881.result.image[0x0]),
        'buttonText': {
          'displayText': '' + _0x2bb390.title
        },
        'type': 0x1
      });
    });
    const _0x54f5b3 = "*☘️ 𝗧ɪᴛʟᴇ ➮* *_" + (_0x2f3881.result.title || "N/A") + "_*\n\n*📅 𝗥ᴇʟᴇꜱᴇᴅ ᴅᴀᴛᴇ ➮* _" + (_0x2f3881.result.date || 'N/A') + "_\n*💃 𝗥ᴀᴛɪɴɢ ➮* _" + (_0x2f3881.result.imdb || 'N/A') + "_\n*💁‍♂️ 𝗦ᴜʙᴛɪᴛʟᴇ ʙʏ ➮* _" + (_0x2f3881.result.director || "N/A") + "_\n";
    const _0x4022ea = {
      'image': {
        'url': _0x2f3881.result.image[0x0] || images
      },
      'caption': _0x54f5b3,
      'footer': config.FOOTER,
      'buttons': _0x5d59b6,
      'headerType': 0x4
    };
    const _0x28ecab = _0x2f3881.result.episodes.map((_0x4eaaf1, _0x52e6b1) => {
      const _0x124b59 = ('' + _0x4eaaf1.title).replace(/WEBDL|WEB DL|BluRay HD|BluRay SD|BluRay FHD|Telegram BluRay SD|Telegram BluRay HD|Direct BluRay SD|Direct BluRay HD|Direct BluRay FHD|FHD|HD|SD|Telegram BluRay FHD/gi, '').trim() || "No info";
      return {
        'title': _0x124b59,
        'id': _0x418b4e + ("sintvfirstdl " + _0x4eaaf1.episode_link + '+' + _0x2f3881.result.image[0x0])
      };
    });
    const _0x2948f3 = {
      'title': "🎬 Choose a download link :)",
      'sections': [{
        'title': "Available Links",
        'rows': _0x28ecab
      }]
    };
    if (config.BUTTON === "true") {
      await _0x53631e.sendMessage(_0x3a4dfb, {
        'image': {
          'url': _0x2f3881.result.image[0x0] || images
        },
        'caption': _0x54f5b3,
        'footer': config.FOOTER,
        'buttons': [{
          'buttonId': _0x418b4e + "dtaqt " + _0x1fd2e6,
          'buttonText': {
            'displayText': "Details Send"
          },
          'type': 0x1
        }, {
          'buttonId': "download_list",
          'buttonText': {
            'displayText': "🎥 Select Option"
          },
          'type': 0x4,
          'nativeFlowInfo': {
            'name': "single_select",
            'paramsJson': JSON.stringify(_0x2948f3)
          }
        }],
        'headerType': 0x1,
        'viewOnce': true
      }, {
        'quoted': _0x2b571f
      });
    } else {
      return await _0x53631e.buttonMessage(_0x3a4dfb, _0x4022ea, _0x2b571f);
    }
  } catch (_0x593291) {
    _0x336786("🚫 *Error Accurated !!*\n\n" + _0x593291);
    console.log(_0x593291);
  }
});
cmd({
  'pattern': "sintvfirstdl",
  'react': '🎬',
  'alias': ['tv'],
  'desc': "Moive downloader",
  'filename': __filename
}, async (_0x2a4bcd, _0x129776, _0x4dbedd, {
  from: _0x1f897b,
  q: _0x2dadf0,
  prefix: _0x8ff32f,
  isMe: _0x52bfd8,
  reply: _0x14428f
}) => {
  try {
    if (!_0x2dadf0) {
      return await _0x14428f("*please give me text !..*");
    }
    const _0x2e2032 = _0x2dadf0.split('+')[0x0];
    const _0x11e50a = _0x2dadf0.split('+')[0x1];
    let _0x3259c4 = await sinhalasubtv_dl(_0x2e2032);
    if (_0x3259c4.length < 0x1) {
      return await _0x2a4bcd.sendMessage(_0x1f897b, {
        'text': N_FOUND
      }, {
        'quoted': _0x4dbedd
      });
    }
    var _0xb02578 = [];
    for (var _0x2e00a0 = 0x0; _0x2e00a0 < _0x3259c4.result.dl_links.length; _0x2e00a0++) {
      _0xb02578.push({
        'title': _0x3259c4.result.dl_links[_0x2e00a0].quality + " - " + _0x3259c4.result.dl_links[_0x2e00a0].size,
        'description': '',
        'rowId': _0x8ff32f + ("sintvdl " + _0x3259c4.result.dl_links[_0x2e00a0].link + '&' + _0x3259c4.result.title + '&' + _0x11e50a + '&' + _0x3259c4.result.dl_links[_0x2e00a0].quality)
      });
    }
    const _0x1411e4 = [{
      'title': '',
      'rows': _0xb02578
    }];
    const _0x5745f8 = {
      'text': "*🍟 Epishodes title :* _*" + _0x3259c4.result.title + '*_',
      'footer': config.FOOTER,
      'title': "_[cinesubz.co results 🎬]_",
      'buttonText': "*Reply below number 🔢*",
      'sections': _0x1411e4
    };
    const _0x36d877 = "*🍟 Epishodes title :* _*" + _0x3259c4.result.title + '*_';
    if (config.BUTTON === "true") {
      return await _0x2a4bcd.sendMessage(_0x1f897b, {
        'text': _0x36d877,
        'footer': config.FOOTER,
        'title': '',
        'buttonText': "📺 Select a quality",
        'sections': _0x1411e4
      }, {
        'quoted': _0x4dbedd
      });
    } else {
      await _0x2a4bcd.listMessage(_0x1f897b, _0x5745f8, _0x4dbedd);
    }
  } catch (_0x1505f4) {
    _0x14428f("🚫 *Error Accurated !!*\n\n" + _0x1505f4);
    console.log(_0x1505f4);
  }
});
cmd({
  'pattern': "sintvdl",
  'react': '⬇️',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x359971, _0x31c7bf, _0x503c4b, {
  from: _0x5cef25,
  q: _0x117379,
  isMe: _0x57cd9b,
  reply: _0x1560b2
}) => {
  if (isUploading) {
    return await _0x359971.sendMessage(_0x5cef25, {
      'text': "*A movie is already being uploaded. Please wait a while before uploading another one.* ⏳",
      'quoted': _0x31c7bf
    });
  }
  try {
    const _0x59c059 = _0x117379.split('&')[0x0];
    const _0x58cf20 = _0x117379.split('&')[0x1];
    const _0x320601 = _0x117379.split('&')[0x2];
    let _0x1d30b6 = '' + _0x59c059;
    const _0x1ad0a5 = _0x1d30b6.split("https://pixeldrain.com/u/")[0x1];
    const _0x2a6b65 = "https://pixeldrain.com/api/file/" + _0x1ad0a5;
    isUploading = true;
    const _0x2d4235 = _0x2a6b65.trim();
    const _0x1c894d = '' + _0x320601;
    const _0x4d1eb1 = {
      'document': {
        'url': _0x2d4235
      },
      'caption': "*🎬 Name :* " + _0x58cf20 + "\n\n" + config.NAME,
      'mimetype': "video/mp4",
      'jpegThumbnail': await (await fetch(_0x1c894d)).buffer(),
      'fileName': _0x58cf20 + ".mp4"
    };
    await _0x359971.sendMessage(_0x5cef25, {
      'text': "*Uploading your movie..⬆️*"
    });
    await _0x359971.sendMessage(config.JID || _0x5cef25, _0x4d1eb1);
    await _0x359971.sendMessage(_0x5cef25, {
      'react': {
        'text': '✔️',
        'key': _0x31c7bf.key
      }
    });
    await _0x359971.sendMessage(_0x5cef25, {
      'text': "*Movie send Successfull this JID " + config.JID + " ✔*"
    }, {
      'quoted': _0x31c7bf
    });
  } catch (_0x224fa2) {
    _0x1560b2("🚫 *Error Accurated !!*\n\n" + _0x224fa2);
    console.log(_0x224fa2);
  }
});
cmd({
  'pattern': 'dtaqt',
  'alias': ["mdv"],
  'use': ".moviedl <url>",
  'react': '🎥',
  'desc': "download movies from sinhalasub.lk",
  'filename': __filename
}, async (_0xd94a50, _0x195dbe, _0x2724c3, {
  from: _0x2170f6,
  l: _0x5a7b4d,
  quoted: _0x1513d1,
  body: _0x5078ac,
  isCmd: _0x45f0fc,
  command: _0x1d71e0,
  args: _0x2d37ae,
  q: _0x15c171,
  isGroup: _0xec5cee,
  prefix: _0x5b92a3,
  sender: _0x63fbec,
  senderNumber: _0x4f1b4d,
  botNumber2: _0x43e183,
  botNumber: _0x449e71,
  pushname: _0x3cb5b3,
  isMe: _0x55c180,
  isOwner: _0x31b0e9,
  groupMetadata: _0x17d25f,
  groupName: _0x11d838,
  participants: _0x2376f1,
  groupAdmins: _0x12d27a,
  isBotAdmins: _0x592809,
  isAdmins: _0x59cd93,
  reply: _0x27be18
}) => {
  try {
    if (!_0x15c171) {
      return _0x27be18("🚩 *Please give me a url*");
    }
    let _0x1266b7 = await sinhalasubtv_info(_0x15c171);
    const _0x115e52 = (await axios.get("https://mv-visper-full-db.pages.dev/Main/main_var.json")).data;
    const _0x491f2b = "*☘️ 𝗧ɪᴛʟᴇ ➮* *_" + (_0x1266b7.result.title || 'N/A') + "_*\n\n*📅 𝗥ᴇʟᴇꜱᴇᴅ ᴅᴀᴛᴇ ➮* _" + (_0x1266b7.result.date || 'N/A') + "_\n*💃 𝗥ᴀᴛɪɴɢ ➮* _" + (_0x1266b7.result.imdb || "N/A") + "_\n*💁‍♂️ 𝗦ᴜʙᴛɪᴛʟᴇ ʙʏ ➮* _" + _0x1266b7.result.director + "_\n\n> 🌟 Follow us : *" + _0x115e52.chlink + "*\n\n> _*VISPER MD MULTIDEVICE*_\n";
    await _0xd94a50.sendMessage(config.JID || _0x2170f6, {
      'image': {
        'url': _0x1266b7.result.image[0x0] || images
      },
      'caption': _0x491f2b
    });
    await _0xd94a50.sendMessage(_0x2170f6, {
      'react': {
        'text': '✔️',
        'key': _0x195dbe.key
      }
    });
  } catch (_0x3a6a41) {
    console.error("Error fetching or sending", _0x3a6a41);
    await _0xd94a50.sendMessage(_0x2170f6, "*Error fetching or sending *", {
      'quoted': _0x195dbe
    });
  }
});
cmd({
  'pattern': 'ch',
  'alias': ["mdv"],
  'use': ".moviedl <url>",
  'react': '🎥',
  'desc': "download movies from sinhalasub.lk",
  'filename': __filename
}, async (_0x11a760, _0x559466, _0x3dad7e, {
  from: _0x1d9407,
  l: _0x197e16,
  quoted: _0x5c1a7b,
  body: _0xcd0cd0,
  isCmd: _0x227b22,
  command: _0x1900d7,
  args: _0x3838a8,
  q: _0x5b0a7f,
  isGroup: _0xb31781,
  prefix: _0x3db3b8,
  sender: _0x3da18e,
  senderNumber: _0xf9fd3f,
  botNumber2: _0x4f5c68,
  botNumber: _0x51c580,
  pushname: _0x37ad00,
  isMe: _0x523e7d,
  isOwner: _0x413310,
  groupMetadata: _0x20eeb6,
  groupName: _0x3767c5,
  participants: _0x3da78e,
  groupAdmins: _0x54f122,
  isBotAdmins: _0x7c118c,
  isAdmins: _0x51a615,
  reply: _0x494eda
}) => {
  try {
    if (!_0x5b0a7f) {
      return _0x494eda("🚩 *Please give me a url*");
    }
    let _0x40857c = await sinhalasub_info(_0x5b0a7f);
    const _0x3a79fb = _0x40857c.images || [];
    _0x3a79fb.forEach(async _0x5c4eb7 => {
      await _0x11a760.sendMessage(_0x1d9407, {
        'image': {
          'url': _0x5c4eb7
        }
      }, {
        'quoted': _0x559466
      });
    });
    await _0x11a760.sendMessage(_0x1d9407, {
      'react': {
        'text': '✔️',
        'key': _0x559466.key
      }
    });
  } catch (_0x3cf64d) {
    console.error("Error fetching or sending", _0x3cf64d);
    await _0x11a760.sendMessage(_0x1d9407, "*Error fetching or sending *", {
      'quoted': _0x559466
    });
  }
});
