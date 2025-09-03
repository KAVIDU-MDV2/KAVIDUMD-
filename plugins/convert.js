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
} = require('../lib/functions');
const config = require("../config");
const fs = require('fs');
const axios = require("axios");
const googleTTS = require("google-tts-api");
const {
  tmpdir
} = require('os');
const translate = require('translate-google-api');
const Crypto = require("crypto");
const imbb = require("darksadasyt-imgbb-scraper");
const fileType = require("file-type");
const {
  Sticker,
  createSticker,
  StickerTypes
} = require("wa-sticker-formatter");
const ffmpeg = require("fluent-ffmpeg");
const path = require("path");
var JavaScriptObfuscator = require("javascript-obfuscator");
async function videoToWebp(_0x14a8d4) {
  const _0x37525c = path.join(tmpdir(), Crypto.randomBytes(0x6).readUIntLE(0x0, 0x6).toString(0x24) + ".webp");
  const _0x43e896 = path.join(tmpdir(), Crypto.randomBytes(0x6).readUIntLE(0x0, 0x6).toString(0x24) + ".mp4");
  fs.writeFileSync(_0x43e896, _0x14a8d4);
  await new Promise((_0x325d70, _0x480b3f) => {
    ffmpeg(_0x43e896).on("error", _0x480b3f).on('end', () => _0x325d70(true)).addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse", "-loop", '0', '-ss', "00:00:00", '-t', "00:00:05", "-preset", "default", "-an", "-vsync", '0']).toFormat("webp").save(_0x37525c);
  });
  const _0x4bc5ad = fs.readFileSync(_0x37525c);
  fs.unlinkSync(_0x37525c);
  fs.unlinkSync(_0x43e896);
  return _0x4bc5ad;
}
function toAudio(_0x192e4a, _0x4e24db) {
  return ffmpeg(_0x192e4a, ["-vn", "-ac", '2', "-b:a", "128k", "-ar", '44100', '-f', 'mp3'], _0x4e24db, 'mp3');
}
function toPTT(_0x3fe1c4, _0x4ff3af) {
  return ffmpeg(_0x3fe1c4, ["-vn", "-c:a", "libopus", "-b:a", "128k", "-vbr", 'on', "-compression_level", '10'], _0x4ff3af, 'opus');
}
function toVideo(_0x1acdf1, _0xf68a97) {
  return ffmpeg(_0x1acdf1, ["-c:v", "libx264", "-c:a", "aac", "-ab", "128k", "-ar", "44100", "-crf", '32', "-preset", "slow"], _0xf68a97, "mp4");
}
cmd({
  'pattern': 'img2url',
  'react': '🔗',
  'alias': ["tourl", "imgurl", "telegraph", "imgtourl"],
  'desc': "Convert image to URL",
  'category': 'convert',
  'use': ".img2url <reply image>",
  'filename': __filename
}, async (_0x2e1035, _0x21ac7b, _0x416b64, {
  from: _0x47744d,
  l: _0x21573b,
  prefix: _0x37812b,
  quoted: _0x5137d9,
  body: _0x175cd8,
  isCmd: _0x45e020,
  command: _0x6c78e5,
  args: _0x4ecbb6,
  q: _0xfd663e,
  isGroup: _0x43c3fd,
  sender: _0x5d22a1,
  senderNumber: _0x30d294,
  botNumber2: _0x8d7032,
  botNumber: _0x57bdcc,
  pushname: _0x428f63,
  isMe: _0x48219e,
  isOwner: _0x35311e,
  groupMetadata: _0x5eae0c,
  groupName: _0x13c0f2,
  participants: _0x41e4c5,
  groupAdmins: _0x37a7ce,
  isBotAdmins: _0x238fbe,
  isAdmins: _0x156d01,
  reply: _0xa420db
}) => {
  try {
    const _0x2d2485 = _0x416b64.quoted ? _0x416b64.quoted.type === "imageMessage" || _0x416b64.quoted.type === "viewOnceMessage" && _0x416b64.quoted.msg.type === 'imageMessage' : false;
    if (_0x416b64.type === "imageMessage" || _0x2d2485) {
      const _0x5ae60f = getRandom('');
      let _0xcbb221 = _0x2d2485 ? await _0x416b64.quoted.download(_0x5ae60f) : await _0x416b64.download(_0x5ae60f);
      const _0x67e284 = await fileType.fromBuffer(_0xcbb221);
      await fs.promises.writeFile('./' + _0x67e284.ext, _0xcbb221);
      const _0x51a10d = await imbb('./' + _0x67e284.ext);
      await _0xa420db("*🎯Here is the image URL:* \n\n" + _0x51a10d);
    } else {
      return _0xa420db("Please reply to an image or send an image.");
    }
  } catch (_0x24e47a) {
    _0xa420db("Sorry, I couldn't process the image.");
    _0x21573b(_0x24e47a);
  }
});
cmd({
  'pattern': "sticker",
  'react': '🎭',
  'alias': ['s', "stic"],
  'desc': "Convert to sticker",
  'category': "convert",
  'use': ".sticker <Reply to image>",
  'filename': __filename
}, async (_0x53759b, _0x1ce15e, _0xd0c05a, {
  from: _0x24a8ec,
  l: _0x437447,
  quoted: _0x5582ac,
  body: _0x2cbe9d,
  isCmd: _0x5377ed,
  command: _0x3813f8,
  args: _0x5c9a58,
  q: _0x4665aa,
  isGroup: _0x31c4cd,
  sender: _0x8f4fd,
  senderNumber: _0x2f4aaa,
  botNumber2: _0x1aef90,
  botNumber: _0x45c2b0,
  pushname: _0x36eb45,
  isMe: _0x5e0ba5,
  isOwner: _0x260c02,
  groupMetadata: _0x45a29a,
  groupName: _0x41db8a,
  participants: _0x2b3bf5,
  groupAdmins: _0x1d2b3e,
  isBotAdmins: _0x3e9956,
  isAdmins: _0x2443f8,
  reply: _0x1a9bcc
}) => {
  try {
    const _0x370859 = _0xd0c05a.quoted ? _0xd0c05a.quoted.type === 'viewOnceMessage' : false;
    const _0x46083c = _0xd0c05a.quoted ? _0xd0c05a.quoted.type === "imageMessage" || (_0x370859 ? _0xd0c05a.quoted.msg.type === "imageMessage" : false) : false;
    const _0xf9fc9e = _0xd0c05a.quoted ? _0xd0c05a.quoted.type === 'stickerMessage' : false;
    if (_0xd0c05a.type === 'imageMessage' || _0x46083c) {
      var _0x30701a = getRandom('');
      if (_0x46083c) {
        await _0xd0c05a.quoted.download(_0x30701a);
      } else {
        await _0xd0c05a.download(_0x30701a);
      }
      let _0x40e2bf = new Sticker(_0x30701a + ".jpg", {
        'pack': _0x36eb45,
        'author': "KAVIDU-MD",
        'type': _0x4665aa.includes("--crop" || '-c') ? StickerTypes.CROPPED : StickerTypes.FULL,
        'categories': ['🤩', '🎉'],
        'id': "12345",
        'quality': 0x4b,
        'background': 'transparent'
      });
      const _0x4b6eed = await _0x40e2bf.toBuffer();
      return _0x53759b.sendMessage(_0x24a8ec, {
        'sticker': _0x4b6eed
      }, {
        'quoted': _0x1ce15e
      });
    } else {
      if (_0xf9fc9e) {
        var _0x1a5305 = getRandom('');
        await _0xd0c05a.quoted.download(_0x1a5305);
        let _0x1b674f = new Sticker(_0x1a5305 + ".webp", {
          'pack': _0x36eb45,
          'author': '',
          'type': _0x4665aa.includes("--crop" || '-c') ? StickerTypes.CROPPED : StickerTypes.FULL,
          'categories': ['🤩', '🎉'],
          'id': "12345",
          'quality': 0x4b,
          'background': "transparent"
        });
        const _0x1e39af = await _0x1b674f.toBuffer();
        return _0x53759b.sendMessage(_0x24a8ec, {
          'sticker': _0x1e39af
        }, {
          'quoted': _0x1ce15e
        });
      } else {
        return await _0x1a9bcc(imgmsg);
      }
    }
  } catch (_0x514a52) {
    _0x1a9bcc("*Error !!*");
    _0x437447(_0x514a52);
  }
});
cmd({
  'pattern': "attp",
  'react': '✨',
  'alias': ['texttogif'],
  'desc': "Text to convert sticker",
  'category': "convert",
  'use': ".attp HI",
  'filename': __filename
}, async (_0x5279ad, _0x5111d3, _0x4ca124, {
  from: _0x215bb6,
  l: _0x150f0f,
  quoted: _0x54cc43,
  body: _0x5e7d85,
  isCmd: _0x221ffd,
  command: _0x2b028d,
  args: _0x9aef14,
  q: _0x34c719,
  isGroup: _0x1c246b,
  sender: _0x573037,
  senderNumber: _0x2abba6,
  botNumber2: _0x455dc3,
  botNumber: _0x32fef2,
  pushname: _0x45d577,
  isMe: _0x272139,
  isOwner: _0x5c7b44,
  groupMetadata: _0x571670,
  groupName: _0x1c43e3,
  participants: _0x2f14de,
  groupAdmins: _0x114b41,
  isBotAdmins: _0x1943ec,
  isAdmins: _0x4403f2,
  reply: _0x244b90
}) => {
  try {
    if (!_0x34c719) {
      return await _0x244b90(imgmsg);
    }
    let _0x3fbaaa = await getBuffer('https://api-fix.onrender.com/api/maker/attp?text=' + _0x34c719);
    await _0x5279ad.sendMessage(_0x215bb6, {
      'sticker': await videoToWebp(_0x3fbaaa)
    }, {
      'quoted': _0x5111d3
    });
  } catch (_0x5023cc) {
    console.log(_0x5023cc);
  }
});
cmd({
  'pattern': "tts",
  'react': '❄️',
  'desc': "text to speech.",
  'category': 'convert',
  'filename': __filename,
  'use': ".tts hi"
}, async (_0xfa79bf, _0x16fbf7, _0x37bb9b, {
  from: _0x3e252e,
  quoted: _0x4b8287,
  body: _0x3ac53d,
  isCmd: _0x2c873e,
  command: _0x45d550,
  args: _0x154e93,
  q: _0x5be4f8,
  isGroup: _0x458df5,
  sender: _0x4391bd,
  senderNumber: _0x2218da,
  botNumber2: _0x49d27d,
  botNumber: _0xb9cb7e,
  pushname: _0x2867c8,
  isMe: _0x5cd60c,
  isOwner: _0x35aa31,
  groupMetadata: _0x20916a,
  groupName: _0x511766,
  participants: _0x268dd7,
  groupAdmins: _0x4fcf72,
  isBotAdmins: _0x22c1e5,
  isAdmins: _0x38cb59,
  reply: _0x2d5ab1
}) => {
  try {
    if (!_0x5be4f8) {
      return _0x37bb9b.reply("Please give me Sentence to change into audio.");
    }
    const _0x54042d = googleTTS.getAudioUrl(_0x5be4f8, {
      'lang': 'en',
      'slow': false,
      'host': "https://translate.google.com"
    });
    return _0xfa79bf.sendMessage(_0x37bb9b.chat, {
      'audio': {
        'url': _0x54042d
      },
      'mimetype': "audio/mpeg",
      'fileName': 'ttsCitelVoid.m4a'
    }, {
      'quoted': _0x16fbf7
    });
  } catch (_0x2db81c) {
    _0x2d5ab1("*Error !!*");
    l(_0x2db81c);
  }
});
cmd({
  'pattern': 'toptt',
  'react': '🔊',
  'alias': ['toaudio', "tomp3"],
  'desc': "convert to audio",
  'category': "convert",
  'use': ".toptt <Reply to video>",
  'filename': __filename
}, async (_0x4705a9, _0x36ad4c, _0xda4d2f, {
  from: _0x445038,
  l: _0x456821,
  quoted: _0x1ae22a,
  body: _0x2788c5,
  isCmd: _0x43f22f,
  command: _0x4c0857,
  args: _0x1cc9e4,
  q: _0x5a2210,
  isGroup: _0x16b5df,
  sender: _0x48d4cf,
  senderNumber: _0x3a9066,
  botNumber2: _0x2e23d9,
  botNumber: _0x33005e,
  pushname: _0x43651d,
  isMe: _0x273d74,
  isOwner: _0x5a9eae,
  groupMetadata: _0x96710e,
  groupName: _0x3c39b0,
  participants: _0x399329,
  groupAdmins: _0x4e4a79,
  isBotAdmins: _0x30cdce,
  isAdmins: _0x20e4d3,
  reply: _0x2958ea
}) => {
  try {
    let _0x25de03 = _0xda4d2f.quoted ? _0xda4d2f.quoted.type === "videoMessage" : _0xda4d2f ? _0xda4d2f.type === "videoMessage" : false;
    if (!_0x25de03) {
      return await _0x2958ea();
    }
    let _0xf6a2d5 = _0xda4d2f.quoted ? await _0xda4d2f.quoted.download() : await _0xda4d2f.download();
    let _0x4e5b11 = await ffmpeg(_0xf6a2d5, ["-vn", "-c:a", "libopus", "-b:a", "128k", "-vbr", 'on', "-compression_level", '10'], 'mp4', 'opus');
    let _0x470604 = await _0x4705a9.sendMessage(_0xda4d2f.chat, {
      'audio': _0x4e5b11.options,
      'mimetype': 'audio/mpeg'
    }, {
      'quoted': _0xda4d2f
    });
    await _0x4705a9.sendMessage(_0x445038, {
      'react': {
        'text': '🎼',
        'key': _0x470604.key
      }
    });
  } catch (_0x317568) {
    _0x2958ea("*Error !!*");
    _0x456821(_0x317568);
  }
});
cmd({
  'pattern': "boom",
  'desc': "forward msgs",
  'alias': ["bbb"],
  'category': "convert",
  'use': ".boom <jid> & <count>",
  'filename': __filename
}, async (_0x9644de, _0x3ef770, _0x4e74f1, {
  from: _0x329f52,
  l: _0x4c82e6,
  quoted: _0xa96b04,
  body: _0x296282,
  isCmd: _0x3914d0,
  command: _0x292eb3,
  args: _0x5a1345,
  q: _0x3f1698,
  isGroup: _0x528033,
  sender: _0x317034,
  senderNumber: _0x1e39a8,
  botNumber2: _0x5e65d7,
  botNumber: _0x3358bc,
  pushname: _0x232b4c,
  isMe: _0xb4d633,
  isOwner: _0x3e2dce,
  groupMetadata: _0xc2ec57,
  groupName: _0x1dddba,
  participants: _0x2bb356,
  groupAdmins: _0x35d1bf,
  isBotAdmins: _0x23a17c,
  isAdmins: _0x3cab0e,
  reply: _0x5c7ce4
}) => {
  if (!_0x3f1698 || !_0x4e74f1.quoted) {
    _0x5c7ce4("*Give me message ❌*");
  }
  const _0x3abf41 = _0x3f1698.split(" & ")[0x0];
  const _0x25f45d = _0x3f1698.split(" & ")[0x1];
  let _0x554c4d = 0x0;
  let _0x55c975;
  let _0xc1275d = {
    key: _0x3ef770.quoted?.["fakeObj"]?.["key"]
  };
  if (_0x3ef770.quoted?.['documentWithCaptionMessage']?.["message"]?.["documentMessage"]) {
    let _0x405d91 = _0x3ef770.quoted.documentWithCaptionMessage.message.documentMessage.mimetype;
    const _0x3ef57a = require("mime-types");
    let _0x462d0b = _0x3ef57a.extension(_0x405d91);
    _0x3ef770.quoted.documentWithCaptionMessage.message.documentMessage.fileName = (_0x55c975 ? _0x55c975 : _0x3ef770.quoted.documentWithCaptionMessage.message.documentMessage.caption) + '.' + _0x462d0b;
  }
  _0xc1275d.message = _0x3ef770.quoted;
  while (_0x554c4d < _0x25f45d) {
    _0x554c4d++;
  }
  return _0x5c7ce4("*👾 Boom sender to:*\n\n " + _0x3abf41);
});
cmd({
  'pattern': "readmore",
  'desc': "Readmore message",
  'category': "convert",
  'use': ".readmore < text >",
  'react': '📝',
  'filename': __filename
}, async (_0x587d41, _0x7d2e60, _0x2a2b9f, {
  from: _0x5fa876,
  quoted: _0x2a1dea,
  body: _0xbb87b9,
  isCmd: _0x2a332a,
  command: _0x49b48d,
  args: _0x7e8226,
  q: _0x1dd44b,
  isGroup: _0x5db01e,
  sender: _0x5c1dba
}) => {
  try {
    let _0x2f68dc = _0x1dd44b ? _0x1dd44b : "No text provided";
    let _0x8f8e5b = '​'.repeat(0xfa0);
    let _0x3fb510 = '' + _0x8f8e5b + _0x2f68dc;
    await _0x587d41.sendMessage(_0x5fa876, {
      'text': _0x3fb510
    }, {
      'quoted': _0x7d2e60
    });
    await _0x587d41.sendMessage(_0x5fa876, {
      'react': {
        'text': '',
        'key': _0x7d2e60.key
      }
    });
  } catch (_0x41a62e) {
    console.log(_0x41a62e);
    reply("Error: " + _0x41a62e.message);
  }
});
cmd({
  'pattern': "jsobfus",
  'desc': "Js code obfus.",
  'alias': ["encript", "obfus"],
  'react': '🫧',
  'use': ".jsobfus js code",
  'category': 'convert',
  'filename': __filename
}, async (_0x1ec9de, _0xbfe734, _0x2ae4a5, {
  from: _0x1dfc8f,
  q: _0x4ba578,
  args: _0x5db010,
  reply: _0x20ee32
}) => {
  try {
    var _0x368562 = JavaScriptObfuscator.obfuscate(_0x4ba578);
    _0x20ee32(_0x368562.getObfuscatedCode());
  } catch (_0x4d7fef) {
    console.error(_0x4d7fef);
    _0x20ee32("An error occurred: " + _0x4d7fef.message);
  }
});
cmd({
  'pattern': "translate",
  'alias': ['trt'],
  'react': '🌐',
  'desc': "Translate text to a specified language",
  'category': "convert",
  'use': ".translate <text> to <language>",
  'filename': __filename
}, async (_0x40f74c, _0x3f745f, _0x5314fc, {
  from: _0xcb1e44,
  reply: _0x239384,
  q: _0x40d44e
}) => {
  try {
    const [_0x40695b, _0x4b6ad3] = _0x40d44e.split(" to ");
    if (!_0x40695b || !_0x4b6ad3) {
      return await _0x239384(".trt How are you to si");
    }
    const _0x55685e = await translate(_0x40695b, {
      'to': _0x4b6ad3
    });
    await _0x239384("*⏩ Translated Text*\n\n" + _0x55685e);
  } catch (_0x4340f6) {
    console.error(_0x4340f6);
    _0x239384("An error occurred while translating the text. Please try again later.");
  }
});
cmd({
  'pattern': "gitclone",
  'alias': ["gitdl"],
  'react': '💫',
  'desc': "Download git repos",
  'category': "convert",
  'use': ".gitclone <repo link>",
  'filename': __filename
}, async (_0xb35b9e, _0x53c395, _0x1082bf, {
  from: _0x329a2c,
  l: _0x199999,
  quoted: _0x9b9c35,
  body: _0x94122e,
  isCmd: _0x517a03,
  command: _0x3a5d60,
  args: _0x3e04bd,
  q: _0x1eb366,
  isGroup: _0x2e0aa0,
  sender: _0x1da515,
  senderNumber: _0x352c3c,
  botNumber2: _0x4d9ef7,
  botNumber: _0x13717a,
  pushname: _0x147f99,
  isMe: _0x34d39f,
  isOwner: _0x465cce,
  groupMetadata: _0xb85536,
  groupName: _0x35adee,
  participants: _0x48da4d,
  groupAdmins: _0x296094,
  isBotAdmins: _0xa57cc8,
  isAdmins: _0x1c48ca,
  reply: _0x4e4632
}) => {
  try {
    if (!_0x1eb366) {
      return await _0x4e4632(needus);
    }
    let _0x3c46f7 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
    if (!_0x3c46f7.test(_0x1eb366)) {
      return _0x4e4632("🚩*Please Give Me Valid GitHub Repo Link!*");
    }
    let [, _0x37a02b, _0x4e6fe3] = _0x1eb366.match(_0x3c46f7) || [];
    _0x4e6fe3 = _0x4e6fe3.replace(/.git$/, '');
    let _0x4279ae = "https://api.github.com/repos/" + _0x37a02b + '/' + _0x4e6fe3 + '/zipball';
    let _0x5b99c5 = (await fetch(_0x4279ae, {
      'method': 'HEAD'
    })).headers.get("content-disposition").match(/attachment; filename=(.*)/)[0x1];
    let _0x4157e9 = config.FOOTER;
    await _0xb35b9e.sendMessage(_0x329a2c, {
      'document': {
        'url': _0x4279ae
      },
      'mimetype': "application/zip",
      'fileName': _0x5b99c5,
      'caption': _0x4157e9
    }, {
      'quoted': _0x53c395
    });
  } catch (_0x5ba76e) {
    _0x4e4632(cantf);
    console.log(_0x5ba76e);
  }
});
cmd({
  'pattern': "npm",
  'desc': "Search for a package on npm.",
  'react': '📦',
  'use': ".npm < name >",
  'category': "convert",
  'filename': __filename
}, async (_0xbd44d, _0x1e972c, _0x825da0, {
  from: _0x12171a,
  args: _0xeee3b2,
  reply: _0x3eca32
}) => {
  if (!_0xeee3b2.length) {
    return _0x3eca32("Please provide the name of the npm package you want to search for. Example: !npm express");
  }
  const _0x2b7f08 = _0xeee3b2.join(" ");
  const _0x3e99dc = 'https://registry.npmjs.org/' + encodeURIComponent(_0x2b7f08);
  try {
    let _0x5c9bbb = await fetch(_0x3e99dc);
    if (!_0x5c9bbb.ok) {
      throw new Error("Package not found or an error occurred.");
    }
    let _0xd0bf2 = await _0x5c9bbb.json();
    const _0xdb7312 = _0xd0bf2["dist-tags"].latest;
    const _0x2001c4 = _0xd0bf2.description || "No description available.";
    const _0x46a501 = "https://www.npmjs.com/package/" + _0x2b7f08;
    const _0x420f0e = _0xd0bf2.license || "Unknown";
    const _0x23b7f4 = _0xd0bf2.repository ? _0xd0bf2.repository.url || "Not available" : "Not available";
    let _0x355f11 = "\n*`🎯 KAVIDU NPM SEARCH 🎯`*\n\n*┌──────────────────*\n*├ 🦑 Npm name :* " + _0x2b7f08 + "\n*├ 💨 Description :* " + _0x2001c4 + "\n*├ ⏩ latest version :* " + _0xdb7312 + "\n*├ 📄 License :* " + _0x420f0e + "\n*├ 👨‍🔧 Repostory :* " + _0x23b7f4 + "\n*├ 🔗 Url :* " + _0x46a501 + "\n*└──────────────────*";
    await _0xbd44d.sendMessage(_0x12171a, {
      'text': _0x355f11
    }, {
      'quoted': _0x1e972c
    });
  } catch (_0x13d1e8) {
    console.error(_0x13d1e8);
    _0x3eca32("An error occurred: " + _0x13d1e8.message);
  }
});
cmd({
  'pattern': 'ss',
  'alias': ["webss"],
  'react': '💡',
  'desc': "web screenshot",
  'category': "convert",
  'use': ".ss <query>",
  'filename': __filename
}, async (_0x1e50e8, _0x500063, _0x4c0a97, {
  from: _0x4f880a,
  reply: _0x322acb,
  q: _0x426611
}) => {
  try {
    if (!_0x426611) {
      return await _0x322acb("Please provide a search query!");
    }
    const _0xfbbc2c = await axios.get('https://api.pikwy.com/?tkn=125&d=3000&u=' + encodeURIComponent(_0x426611) + "&fs=0&w=1280&h=1200&s=100&z=100&f=jpg&rt=jweb");
    await _0x1e50e8.sendMessage(_0x4f880a, {
      'image': {
        'url': _0xfbbc2c.data.iurl
      },
      'caption': config.FOOTER
    }, {
      'quoted': _0x500063
    });
  } catch (_0x3b7706) {
    console.error(_0x3b7706);
    _0x322acb("An error occurred while processing your request. Please try again later.");
  }
});
cmd({
  'pattern': 'vv',
  'react': '📍',
  'alias': ["retrive", 'viewonce'],
  'desc': "Fetch and resend a ViewOnce message content (image/video/voice).",
  'category': "misc",
  'use': "<query>",
  'filename': __filename
}, async (_0x176fb1, _0x46b087, _0x19470b, {
  from: _0x1cf628,
  reply: _0x1873fc
}) => {
  try {
    if (!_0x19470b.quoted) {
      return _0x1873fc("Please reply to a ViewOnce message.");
    }
    const _0x4b5c80 = _0x19470b.quoted.type;
    let _0x43b219;
    let _0x1d4df8;
    if (_0x4b5c80 === 'imageMessage') {
      _0x43b219 = 'jpg';
      _0x1d4df8 = "image";
    } else {
      if (_0x4b5c80 === "videoMessage") {
        _0x43b219 = "mp4";
        _0x1d4df8 = 'video';
      } else {
        if (_0x4b5c80 === "audioMessage") {
          _0x43b219 = 'mp3';
          _0x1d4df8 = "audio";
        } else {
          return _0x1873fc("Please reply to an image, video, or audio message 🔥.");
        }
      }
    }
    var _0x1cddfa = await _0x19470b.quoted.download();
    var _0x192eb9 = Date.now() + '.' + _0x43b219;
    fs.writeFileSync(_0x192eb9, _0x1cddfa);
    let _0x28f06c = {
      _0x1d4df8: fs.readFileSync(_0x192eb9)
    };
    await _0x176fb1.sendMessage(_0x19470b.chat, _0x28f06c);
    fs.unlinkSync(_0x192eb9);
  } catch (_0x4fff8b) {
    console.log("Error:", _0x4fff8b);
    _0x1873fc("An error occurred while fetching the ViewOnce message.", _0x4fff8b);
  }
});
