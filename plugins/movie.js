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
const {
  x_search,
  x_info_dl
} = require("../lib/newm");
const cinesubz_tv = require('sadasytsearch');
const {
  cinesubz_info,
  cinesubz_tv_firstdl,
  cinesubz_tvshow_info
} = require("../lib/cineall");
const download = require("../lib/yts");
const {
  pirate_search,
  pirate_dl
} = require("../lib/pirates");
const {
  gettep,
  down
} = require("../lib/animeheaven");
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
  slanimeclub_search,
  slanimeclub_ep,
  slanimeclub_dl,
  slanimeclub_mv_search,
  slanime_mv_info
} = require("../lib/slanimeclub");
const {
  sizeFormatter
} = require("human-readable");
const {
  xfull_search,
  xfull_dl
} = require("../lib/plusmv");
const {
  search,
  getep,
  dl
} = require("darksadasyt-anime");
cmd({
  'pattern': 'mv',
  'react': '🔎',
  'alias': ["movie", "film", 'cinema'],
  'desc': "all movie search",
  'category': 'movie',
  'use': ".movie",
  'filename': __filename
}, async (_0x5cd0d3, _0x2c74a9, _0x440c2b, {
  from: _0x325a42,
  prefix: _0x19ea61,
  l: _0xb84e99,
  quoted: _0x5d2d95,
  q: _0x4e4926,
  isPre: _0x5f6ac5,
  isSudo: _0x483334,
  isOwner: _0x38ec2b,
  isMe: _0x137f29,
  reply: _0x282065
}) => {
  try {
    const _0x4eb19a = (await axios.get("https://mv-visper-full-db.pages.dev/Main/main_var.json")).data;
    const _0x58b7b7 = _0x4eb19a.mvfree === "true";
    if (!_0x58b7b7 && !_0x137f29 && !_0x5f6ac5) {
      await _0x5cd0d3.sendMessage(_0x325a42, {
        'react': {
          'text': '❌',
          'key': _0x2c74a9.key
        }
      });
      return await _0x5cd0d3.sendMessage(_0x325a42, {
        'text': "*`You are not a premium user⚠️`*\n\n*Send a message to one of the 2 numbers below and buy Lifetime premium 🎉.*\n\n_Price : 200 LKR ✔️_\n\n*👨‍💻Contact us : 0778500326 , 0722617699*"
      }, {
        'quoted': _0x2c74a9
      });
    }
    if (config.MV_BLOCK === 'true' && !_0x137f29 && !_0x483334 && !_0x38ec2b) {
      await _0x5cd0d3.sendMessage(_0x325a42, {
        'react': {
          'text': '❌',
          'key': _0x2c74a9.key
        }
      });
      return await _0x5cd0d3.sendMessage(_0x325a42, {
        'text': "*This command currently only works for the Bot owner. To disable it for others, use the .settings command 👨‍🔧.*"
      }, {
        'quoted': _0x2c74a9
      });
    }
    if (!_0x4e4926) {
      return await _0x282065("*Enter movie name..🎬*");
    }
    let _0x50f198;
    try {
      const _0x2d4e85 = await axios.get("https://mv-visper-full-db.pages.dev/Data/visper_main.jpeg", {
        'responseType': "arraybuffer"
      });
      _0x50f198 = Buffer.from(_0x2d4e85.data, "binary");
    } catch (_0x1e8173) {
      console.error("❌ Image load error:", _0x1e8173.message);
      return _0x282065("⚠️ Failed to load image for the movie search.");
    }
    const _0x5469af = "_*VISPER SEARCH SYSTEM 🎬*_\n\n*`Input :`* " + _0x4e4926 + "\n\n_*🌟 Select your preferred movie download site*_";
    const _0x404479 = {
      'title': "❯❯ Choose a movie source ❮❮",
      'sections': [{
        'title': "❯❯ Choose a movie source ❮❮",
        'rows': [{
          'title': "CINESUBZ Results 🍿",
          'id': _0x19ea61 + "cine " + _0x4e4926
        }, {
          'title': "SINHALASUB Results 🍿",
          'id': _0x19ea61 + "sinhalasub " + _0x4e4926
        }, {
          'title': "YTSMX Results 🍿",
          'id': _0x19ea61 + "ytsmx " + _0x4e4926
        }, {
          'title': "BAISCOPES Results 🍿",
          'id': _0x19ea61 + "baiscopes " + _0x4e4926
        }, {
          'title': "PUPILVIDEO Results 🍿",
          'id': _0x19ea61 + "pupilvideo " + _0x4e4926
        }, {
          'title': "ANIMEHEAVEN Results 🍿",
          'id': _0x19ea61 + "animeheaven " + _0x4e4926
        }, {
          'title': "1377 Results 🍿",
          'id': _0x19ea61 + "1377 " + _0x4e4926
        }, {
          'title': "18 PLUS Results 🍿",
          'id': _0x19ea61 + "sexfull " + _0x4e4926
        }, {
          'title': "PIRATE Results 🍿",
          'id': _0x19ea61 + "pirate " + _0x4e4926
        }, {
          'title': "SLANIME Results 🍿",
          'id': _0x19ea61 + "slanime " + _0x4e4926
        }]
      }]
    };
    if (config.BUTTON === "true") {
      return await _0x5cd0d3.sendMessage(_0x325a42, {
        'image': _0x50f198,
        'caption': _0x5469af,
        'footer': config.FOOTER,
        'buttons': [{
          'buttonId': "movie_menu_list",
          'buttonText': {
            'displayText': "🎥 Select Option"
          },
          'type': 0x4,
          'nativeFlowInfo': {
            'name': "single_select",
            'paramsJson': JSON.stringify(_0x404479)
          }
        }],
        'headerType': 0x1,
        'viewOnce': true
      }, {
        'quoted': _0x2c74a9
      });
    } else {
      const _0x10bb41 = [{
        'buttonId': _0x19ea61 + "cine " + _0x4e4926,
        'buttonText': {
          'displayText': "_CINESUBZ Results 🍿_"
        },
        'type': 0x1
      }, {
        'buttonId': _0x19ea61 + "sinhalasub " + _0x4e4926,
        'buttonText': {
          'displayText': "_SINHALASUB Results 🍿_"
        },
        'type': 0x1
      }, {
        'buttonId': _0x19ea61 + "ytsmx " + _0x4e4926,
        'buttonText': {
          'displayText': "_YTSMX Results 🍿_"
        },
        'type': 0x1
      }, {
        'buttonId': _0x19ea61 + "baiscopes " + _0x4e4926,
        'buttonText': {
          'displayText': "_BAISCOPES Results 🍿_"
        },
        'type': 0x1
      }, {
        'buttonId': _0x19ea61 + "pupilvideo " + _0x4e4926,
        'buttonText': {
          'displayText': "_PUPILVIDEO Results 🍿_"
        },
        'type': 0x1
      }, {
        'buttonId': _0x19ea61 + "animeheaven " + _0x4e4926,
        'buttonText': {
          'displayText': "_ANIMEHEAVEN Results 🍿_"
        },
        'type': 0x1
      }, {
        'buttonId': _0x19ea61 + "1377 " + _0x4e4926,
        'buttonText': {
          'displayText': "_1377 Results 🍿_"
        },
        'type': 0x1
      }, {
        'buttonId': _0x19ea61 + "sexfull " + _0x4e4926,
        'buttonText': {
          'displayText': "_18 PLUS Results 🍿_"
        },
        'type': 0x1
      }, {
        'buttonId': _0x19ea61 + "pirate " + _0x4e4926,
        'buttonText': {
          'displayText': "_PIRATE Results 🍿_"
        },
        'type': 0x1
      }, {
        'buttonId': _0x19ea61 + "slanime " + _0x4e4926,
        'buttonText': {
          'displayText': "_SLANIME Results 🍿_"
        },
        'type': 0x1
      }];
      const _0x183112 = {
        'image': {
          'url': "https://mv-visper-full-db.pages.dev/Data/visper_main.jpeg"
        },
        'caption': "_*VISPER SEARCH SYSTEM 🎬*_\n\n*`Input :`* " + _0x4e4926 + "\n\n_*🌟 Select you like movie download site*_",
        'footer': config.FOOTER,
        'buttons': _0x10bb41,
        'headerType': 0x4
      };
      return await _0x5cd0d3.buttonMessage2(_0x325a42, _0x183112, _0x2c74a9);
    }
  } catch (_0x3942b4) {
    _0x282065("*❌ Error occurred*");
    _0xb84e99(_0x3942b4);
  }
});
cmd({
  'pattern': 'tv',
  'react': '🔎',
  'alias': ["tvshows", "tvseries", "tvepishodes"],
  'desc': "All tv shows search",
  'use': ".tv squiad game",
  'category': "movie",
  'filename': __filename
}, async (_0x7d3cd5, _0x187cca, _0x2c6bd2, {
  from: _0x4d4d87,
  prefix: _0x5c98e0,
  l: _0x4a6851,
  isPre: _0x350d30,
  quoted: _0x2a2647,
  body: _0x3735d7,
  isCmd: _0x34844f,
  command: _0x39bddd,
  args: _0x2a4d5a,
  q: _0x2be1aa,
  isGroup: _0x425985,
  sender: _0x160855,
  senderNumber: _0x41d4c8,
  isSudo: _0x403f8d,
  botNumber2: _0x53d6fd,
  botNumber: _0x32b7f4,
  pushname: _0x2c3edd,
  isMe: _0x483a86,
  isOwner: _0x42168e,
  groupMetadata: _0x277445,
  groupName: _0x5573e8,
  participants: _0xf16a2a,
  groupAdmins: _0x3896c0,
  isBotAdmins: _0x1bed49,
  isAdmins: _0x335a20,
  reply: _0x593bba
}) => {
  try {
    const _0x353d39 = (await axios.get("https://mv-visper-full-db.pages.dev/Main/main_var.json")).data;
    const _0x6be5fe = _0x353d39.mvfree === 'true';
    if (!_0x6be5fe && !_0x483a86 && !_0x350d30) {
      await _0x7d3cd5.sendMessage(_0x4d4d87, {
        'react': {
          'text': '❌',
          'key': _0x187cca.key
        }
      });
      return await _0x7d3cd5.sendMessage(_0x4d4d87, {
        'text': "*`You are not a premium user⚠️`*\n\n*Send a message to one of the 2 numbers below and buy Lifetime premium 🎉.*\n\n_Price : 200 LKR ✔️_\n\n*👨‍💻Contact us : 0778500326 , 0722617699*"
      }, {
        'quoted': _0x187cca
      });
    }
    if (config.MV_BLOCK == "true" && !_0x483a86 && !_0x403f8d && !_0x42168e) {
      await _0x7d3cd5.sendMessage(_0x4d4d87, {
        'react': {
          'text': '❌',
          'key': _0x187cca.key
        }
      });
      return await _0x7d3cd5.sendMessage(_0x4d4d87, {
        'text': "*This command currently only works for the Bot owner. To disable it for others, use the .settings command 👨‍🔧.*"
      }, {
        'quoted': _0x187cca
      });
    }
    let _0x233745;
    try {
      const _0x5adbb7 = await axios.get('https://mv-visper-full-db.pages.dev/Data/visper_main.jpeg', {
        'responseType': "arraybuffer"
      });
      _0x233745 = Buffer.from(_0x5adbb7.data, 'binary');
    } catch (_0x26017a) {
      console.error("❌ Image load error:", _0x26017a.message);
      return _0x593bba("⚠️ Failed to load image for the movie search.");
    }
    if (!_0x2be1aa) {
      return await _0x593bba("*Enter tv shows name..🎬*");
    }
    const _0x42f9bf = [{
      'buttonId': _0x5c98e0 + "cinetv " + _0x2be1aa,
      'buttonText': {
        'displayText': "_CINESUBZ Results 📺_"
      },
      'type': 0x1
    }, {
      'buttonId': _0x5c98e0 + "sinhalasubtv " + _0x2be1aa,
      'buttonText': {
        'displayText': "_SINHALASUB Results 📺_"
      },
      'type': 0x1
    }, {
      'buttonId': _0x5c98e0 + "slanimetv " + _0x2be1aa,
      'buttonText': {
        'displayText': "_SLANIME Results 📺_"
      },
      'type': 0x1
    }];
    const _0xa8f1f5 = "_*VISPER SEARCH SYSTEM 📺*_\n\n*`Input :`* " + _0x2be1aa + " \n\n_*🌟 Select you like movie download site*_";
    const _0x183b61 = {
      'image': {
        'url': config.LOGO
      },
      'caption': _0xa8f1f5,
      'footer': config.FOOTER,
      'buttons': _0x42f9bf,
      'headerType': 0x4
    };
    const _0x2430e3 = {
      'title': "❯❯ Choose a tv source ❮❮",
      'sections': [{
        'title': "❯❯ Choose a tv source ❮❮",
        'rows': [{
          'title': "CINESUBZ Results 🍿",
          'id': _0x5c98e0 + "cinetv " + _0x2be1aa
        }, {
          'title': "SINHALASUB Results 🍿",
          'id': _0x5c98e0 + "sinhalasubtv " + _0x2be1aa
        }, {
          'title': "SLANIME Result 🍿",
          'id': _0x5c98e0 + "slanimetv " + _0x2be1aa
        }]
      }]
    };
    return config.BUTTON === 'true' ? await _0x7d3cd5.sendMessage(_0x4d4d87, {
      'image': _0x233745,
      'caption': _0xa8f1f5,
      'footer': config.FOOTER,
      'buttons': [{
        'buttonId': "tv_menu_list",
        'buttonText': {
          'displayText': "🎥 Select Option"
        },
        'type': 0x4,
        'nativeFlowInfo': {
          'name': "single_select",
          'paramsJson': JSON.stringify(_0x2430e3)
        }
      }],
      'headerType': 0x1,
      'viewOnce': true
    }, {
      'quoted': _0x187cca
    }) : await _0x7d3cd5.buttonMessage2(_0x4d4d87, _0x183b61, _0x187cca);
  } catch (_0x342acd) {
    _0x593bba("*Error !!*");
    _0x4a6851(_0x342acd);
  }
});
cmd({
  'pattern': "1377",
  'react': '🔎',
  'category': "movie",
  'alias': ['cinesubz'],
  'desc': "1377x movie search",
  'use': ".1377 2025",
  'filename': __filename
}, async (_0x2deae3, _0x559b28, _0x2c2936, {
  from: _0x5ea428,
  q: _0x4cb21c,
  prefix: _0x83c685,
  isSudo: _0x366f5d,
  isOwner: _0x4008f0,
  isPre: _0x39c9d6,
  isMe: _0x54c112,
  reply: _0x303699
}) => {
  try {
    const _0x4660c9 = (await axios.get("https://mv-visper-full-db.pages.dev/Main/main_var.json")).data;
    const _0xb4d5d = _0x4660c9.mvfree === "true";
    if (!_0xb4d5d && !_0x54c112 && !_0x39c9d6) {
      await _0x2deae3.sendMessage(_0x5ea428, {
        'react': {
          'text': '❌',
          'key': _0x2c2936.key
        }
      });
      return await _0x2deae3.sendMessage(_0x5ea428, {
        'text': "*`You are not a premium user⚠️`*\n\n*Send a message to one of the 2 numbers below and buy Lifetime premium 🎉.*\n\n_Price : 200 LKR ✔️_\n\n*👨‍💻Contact us : 0778500326 , 0722617699*"
      }, {
        'quoted': _0x2c2936
      });
    }
    if (config.MV_BLOCK == "true" && !_0x54c112 && !_0x366f5d && !_0x4008f0) {
      await _0x2deae3.sendMessage(_0x5ea428, {
        'react': {
          'text': '❌',
          'key': _0x2c2936.key
        }
      });
      return await _0x2deae3.sendMessage(_0x5ea428, {
        'text': "*This command currently only works for the Bot owner. To disable it for others, use the .settings command 👨‍🔧.*"
      }, {
        'quoted': _0x2c2936
      });
    }
    if (!_0x4cb21c) {
      return await _0x303699("*please give me text !..*");
    }
    const _0x235671 = await fetchJson("https://1337-x.vercel.app/search/" + _0x4cb21c);
    var _0x5af96b = [];
    for (var _0x255cf1 = 0x0; _0x255cf1 < _0x235671.length; _0x255cf1++) {
      _0x5af96b.push({
        'title': (_0x235671[_0x255cf1].title || "No result").replace("Sinhala Subtitles | සිංහල උපසිරැසි සමඟ", '').replace("Sinhala Subtitle | සිංහල උපසිරැසි සමඟ", ''),
        'description': '',
        'rowId': _0x83c685 + ("xt " + _0x235671[_0x255cf1].link + '&' + _0x235671[_0x255cf1].title)
      });
    }
    const _0x137913 = [{
      'title': "1377x.to results",
      'rows': _0x5af96b
    }];
    const _0x358dcf = {
      'text': "_*1377x MOVIE SEARCH RESULTS 🎬*_\n\n*`Input :`* " + _0x4cb21c,
      'footer': config.FOOTER,
      'title': "1377x.to results",
      'buttonText': "*Reply Below Number 🔢*",
      'sections': _0x137913
    };
    const _0x386dae = "_*1377x MOVIE SEARCH RESULTS 🎬*_\n\n*`Input :`* " + _0x4cb21c;
    const _0x7a5349 = _0x235671.map((_0x107853, _0x159110) => {
      const _0x70591d = ('' + _0x235671[_0x159110].title).replace(/WEBDL|WEB DL|BluRay HD|BluRay SD|BluRay FHD|Telegram BluRay SD|Telegram BluRay HD|Direct BluRay SD|Direct BluRay HD|Direct BluRay FHD|FHD|HD|SD|Telegram BluRay FHD/gi, '').trim() || "No info";
      return {
        'title': _0x70591d,
        'id': _0x83c685 + ("xt " + _0x235671[_0x159110].link + '&' + _0x235671[_0x159110].title)
      };
    });
    const _0x2ff4ce = {
      'title': "Choose a Movie :)",
      'sections': [{
        'title': "Available Links",
        'rows': _0x7a5349
      }]
    };
    if (config.BUTTON === "true") {
      await _0x2deae3.sendMessage(_0x5ea428, {
        'image': {
          'url': config.LOGO
        },
        'caption': _0x386dae,
        'footer': config.FOOTER,
        'buttons': [{
          'buttonId': "download_list",
          'buttonText': {
            'displayText': "🎥 Select Option"
          },
          'type': 0x4,
          'nativeFlowInfo': {
            'name': "single_select",
            'paramsJson': JSON.stringify(_0x2ff4ce)
          }
        }],
        'headerType': 0x1,
        'viewOnce': true
      }, {
        'quoted': _0x2c2936
      });
    } else {
      await _0x2deae3.listMessage(_0x5ea428, _0x358dcf, _0x2c2936);
    }
  } catch (_0xa9f171) {
    console.log(_0xa9f171);
    await _0x2deae3.sendMessage(_0x5ea428, {
      'text': "🚩 *Error !!*"
    }, {
      'quoted': _0x2c2936
    });
  }
});
cmd({
  'pattern': 'xt',
  'react': '⬇️',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x215e4e, _0x27dc3d, _0x21c6b9, {
  from: _0x5c253d,
  q: _0x5c3e60,
  reply: _0x1ce1ba
}) => {
  try {
    const _0x56f6d2 = _0x5c3e60.split('&')[0x0];
    const _0x58c9a5 = _0x5c3e60.split('&')[0x1];
    console.log(_0x56f6d2);
    const _0x1e0ae2 = config.SEEDR_MAIL;
    const _0x15bea4 = config.SEEDR_PASSWORD;
    if (!_0x1e0ae2 || _0x15bea4.length === 0x0) {
      await _0x215e4e.sendMessage(_0x5c253d, {
        'react': {
          'text': '❌',
          'key': _0x27dc3d.key
        }
      });
      return await _0x215e4e.sendMessage(_0x5c253d, {
        'text': "*Please add Seedr account mail and password ❗*\n\n_💁‍♂️ How to create a Seedr account :_\n\n*📍 Use these commands to add a Seedr account for the bot:*\n\n🧩 .setmail *Your Seedr account email*\n\n🧩 .setpassword *Your Seedr account password*"
      }, {
        'quoted': _0x27dc3d
      });
    }
    const _0xd48b2e = new Seedr();
    try {
      await _0xd48b2e.login(_0x1e0ae2, _0x15bea4);
    } catch (_0x43867e) {
      await _0x215e4e.sendMessage(_0x5c253d, {
        'react': {
          'text': '❌',
          'key': _0x27dc3d.key
        }
      });
      return await _0x215e4e.sendMessage(_0x5c253d, {
        'text': "*Can't login to Seedr. Try again ❌*"
      }, {
        'quoted': _0x27dc3d
      });
    }
    await _0x215e4e.sendMessage(_0x5c253d, {
      'text': "*Seedr account login sucssess ☑️*"
    });
    const _0x1c82a8 = await fetchJson("https://1337-x.vercel.app/info?url=" + _0x56f6d2);
    if (!_0x1c82a8 || !_0x1c82a8.dllink) {
      await _0x215e4e.sendMessage(_0x5c253d, {
        'text': "🚩 *Error: No download link found!*"
      }, {
        'quoted': _0x27dc3d
      });
      return;
    }
    const _0x3e1ec8 = '' + _0x1c82a8.dllink;
    const _0x5446dc = await _0xd48b2e.addMagnet(_0x3e1ec8);
    if (!_0x5446dc || !_0x5446dc.result) {
      throw new Error("Failed to add magnet URL.");
    }
    const _0x5ed367 = await _0xd48b2e.getVideos();
    if (!_0x5ed367 || _0x5ed367.length === 0x0) {
      throw new Error("No videos found for the provided magnet URL.");
    }
    for (const _0x28cd33 of _0x5ed367) {
      for (const _0x2680e1 of _0x28cd33) {
        try {
          const _0x5bb8a6 = await _0xd48b2e.getFile(_0x2680e1.id);
          const _0xd12b26 = _0x5bb8a6.url;
          if (!_0xd12b26 || typeof _0xd12b26 !== "string") {
            throw new Error("Invalid download link received.");
          }
          const _0x1a6065 = await fetch(_0xd12b26);
          if (!_0x1a6065.ok) {
            throw new Error("HTTP error! Status: " + _0x1a6065.status);
          }
          const _0x3d99b4 = await _0x1a6065.buffer();
          if (!_0x3d99b4 || _0x3d99b4.length === 0x0) {
            throw new Error("File buffer is empty or invalid.");
          }
          const _0x172af3 = _0x3d99b4.byteLength / 1048576;
          if (_0x172af3 > 0x7d0) {
            throw new Error("File size exceeds limit: " + _0x172af3.toFixed(0x2) + " MB.");
          }
          if (_0x2680e1.fid) {
            await _0xd48b2e.deleteFolder(_0x2680e1.fid);
          }
          await _0x215e4e.sendMessage(_0x5c253d, {
            'react': {
              'text': '⬆️',
              'key': _0x27dc3d.key
            }
          });
          await _0x215e4e.sendMessage(_0x5c253d, {
            'text': "*Uploading your movie..⬆️*"
          });
          await _0x215e4e.sendMessage(config.JID || _0x5c253d, {
            'document': _0x3d99b4,
            'mimetype': "video/mp4",
            'fileName': _0x58c9a5 + '.mp4',
            'caption': "*🎬 Name :* " + _0x58c9a5 + "\n\n" + config.NAME
          });
          await _0x215e4e.sendMessage(_0x5c253d, {
            'react': {
              'text': '✔️',
              'key': _0x27dc3d.key
            }
          });
          await _0x215e4e.sendMessage(_0x5c253d, {
            'text': "*Movie sent successfully to JID " + config.JID + " ✔*"
          }, {
            'quoted': _0x27dc3d
          });
        } catch (_0x1eeddd) {
          console.error("Error uploading file: " + _0x1eeddd.message);
          await _0x215e4e.sendMessage(_0x5c253d, {
            'text': "❌ Failed to upload file: " + _0x1eeddd.message
          }, {
            'quoted': _0x27dc3d
          });
        }
      }
    }
  } catch (_0x115e73) {
    await _0x215e4e.sendMessage(_0x5c253d, {
      'react': {
        'text': '❌',
        'key': _0x27dc3d.key
      }
    });
    console.error(_0x115e73);
    _0x1ce1ba("❌ *Error Occurred!!*\n\n" + _0x115e73.message);
  }
});
cmd({
  'pattern': 'baiscopes',
  'react': '🔎',
  'category': "movie",
  'desc': "Baiscopes.lk movie search",
  'use': ".baiscopes 2025",
  'filename': __filename
}, async (_0x38efbf, _0x533892, _0x33c644, {
  from: _0x3fdf05,
  isPre: _0x778ca,
  q: _0x56983d,
  prefix: _0x23ce10,
  isMe: _0x250d62,
  isSudo: _0x52d75d,
  isOwner: _0x686eb3,
  reply: _0x6e4cd4
}) => {
  try {
    const _0x1504e8 = (await axios.get("https://mv-visper-full-db.pages.dev/Main/main_var.json")).data;
    const _0x46ad81 = _0x1504e8.mvfree === 'true';
    if (!_0x46ad81 && !_0x250d62 && !_0x778ca) {
      await _0x38efbf.sendMessage(_0x3fdf05, {
        'react': {
          'text': '❌',
          'key': _0x33c644.key
        }
      });
      return await _0x38efbf.sendMessage(_0x3fdf05, {
        'text': "*`You are not a premium user⚠️`*\n\n*Send a message to one of the 2 numbers below and buy Lifetime premium 🎉.*\n\n_Price : 200 LKR ✔️_\n\n*👨‍💻Contact us : 0778500326 , 0722617699*"
      }, {
        'quoted': _0x33c644
      });
    }
    if (config.MV_BLOCK == 'true' && !_0x250d62 && !_0x52d75d && !_0x686eb3) {
      await _0x38efbf.sendMessage(_0x3fdf05, {
        'react': {
          'text': '❌',
          'key': _0x33c644.key
        }
      });
      return await _0x38efbf.sendMessage(_0x3fdf05, {
        'text': "*This command currently only works for the Bot owner. To disable it for others, use the .settings command 👨‍🔧.*"
      }, {
        'quoted': _0x33c644
      });
    }
    if (!_0x56983d) {
      return await _0x6e4cd4("*please give me text !..*");
    }
    let _0x5cbf47 = await fetchJson("https://darksadas-yt-baiscope-search.vercel.app/?query=" + _0x56983d);
    if (!_0x5cbf47 || !_0x5cbf47.data || _0x5cbf47.data.length === 0x0) {
      await _0x38efbf.sendMessage(_0x3fdf05, {
        'react': {
          'text': '❌',
          'key': _0x33c644.key
        }
      });
      return await _0x38efbf.sendMessage(_0x3fdf05, {
        'text': "*No results found ❌*"
      }, {
        'quoted': _0x33c644
      });
    }
    var _0x1a9bad = [];
    for (var _0x39a73e = 0x0; _0x39a73e < _0x5cbf47.data.length; _0x39a73e++) {
      _0x1a9bad.push({
        'title': _0x5cbf47.data[_0x39a73e].title,
        'description': '',
        'rowId': _0x23ce10 + ("bdl " + _0x5cbf47.data[_0x39a73e].link + '&' + _0x5cbf47.data[_0x39a73e].year)
      });
    }
    const _0x2d2250 = [{
      'title': "cinesubz.co results",
      'rows': _0x1a9bad
    }];
    const _0x41fb34 = {
      'text': "*_BAISCOPES MOVIE SEARCH RESULT 🎬_*\n\n*`Input :`* " + _0x56983d,
      'footer': config.FOOTER,
      'title': "cinesubz.co results",
      'buttonText': "*Reply Below Number 🔢*",
      'sections': _0x2d2250
    };
    const _0x54d568 = "*_BAISCOPES MOVIE SEARCH RESULT 🎬_*\n\n*`Input :`* " + _0x56983d;
    const _0x21c06c = _0x5cbf47.data.map((_0x33f0a9, _0x3109bc) => {
      const _0x4b0331 = ('' + _0x5cbf47.data[_0x3109bc].title).replace(/WEBDL|WEB DL|BluRay HD|BluRay SD|BluRay FHD|Telegram BluRay SD|Telegram BluRay HD|Direct BluRay SD|Direct BluRay HD|Direct BluRay FHD|FHD|HD|SD|Telegram BluRay FHD/gi, '').trim() || "No info";
      return {
        'title': _0x4b0331,
        'id': _0x23ce10 + ("bdl " + _0x5cbf47.data[_0x3109bc].link + '&' + _0x5cbf47.data[_0x3109bc].year)
      };
    });
    const _0x2812e2 = {
      'title': "Choose a Movie :)",
      'sections': [{
        'title': "Available Links",
        'rows': _0x21c06c
      }]
    };
    if (config.BUTTON === "true") {
      await _0x38efbf.sendMessage(_0x3fdf05, {
        'image': {
          'url': config.LOGO
        },
        'caption': _0x54d568,
        'footer': config.FOOTER,
        'buttons': [{
          'buttonId': "download_list",
          'buttonText': {
            'displayText': "🎥 Select Option"
          },
          'type': 0x4,
          'nativeFlowInfo': {
            'name': 'single_select',
            'paramsJson': JSON.stringify(_0x2812e2)
          }
        }],
        'headerType': 0x1,
        'viewOnce': true
      }, {
        'quoted': _0x33c644
      });
    } else {
      await _0x38efbf.listMessage(_0x3fdf05, _0x41fb34, _0x33c644);
    }
  } catch (_0x265129) {
    console.log(_0x265129);
    await _0x38efbf.sendMessage(_0x3fdf05, {
      'text': "🚩 *Error !!*"
    }, {
      'quoted': _0x33c644
    });
  }
});
cmd({
  'pattern': 'bdl',
  'react': '🎥',
  'desc': "moive downloader",
  'filename': __filename
}, async (_0x50784b, _0x45a0bc, _0x2de8d1, {
  from: _0x38c592,
  q: _0x2b52ca,
  isMe: _0x2eae65,
  isSudo: _0x540cab,
  isOwner: _0x7f58e8,
  prefix: _0x4eb2a9,
  reply: _0x3f2ed7
}) => {
  try {
    const _0x117514 = _0x2b52ca.split('&')[0x0];
    const _0x36a810 = _0x2b52ca.split('&')[0x1];
    let _0x214649 = await fetchJson("https://darksadas-yt-baiscope-info.vercel.app/?url=" + _0x117514 + '&apikey=pramashi');
    let _0x2c0eef = "*☘️ 𝗧ɪᴛʟᴇ ➮* *_" + (_0x214649.data.title || "N/A") + "_*\n\n*📅 𝗥ᴇʟᴇꜱᴇᴅ ᴅᴀᴛᴇ ➮* _" + (_0x214649.data.date || "N/A") + "_\n*💃 𝗥ᴀᴛɪɴɢ ➮* _" + (_0x214649.data.imdb || "N/A") + "_\n*⏰ 𝗥ᴜɴᴛɪᴍᴇ ➮* _" + (_0x214649.data.runtime || "N/A") + "_\n*💁‍♂️ 𝗦ᴜʙᴛɪᴛʟᴇ ʙʏ ➮* _" + (_0x214649.data.subtitle_author || 'N/A') + "_\n*🎭 𝗚ᴇɴᴀʀᴇꜱ ➮* " + (_0x214649.data.genres.join(", ") || "N/A") + "\n";
    if (_0x214649.length < 0x1) {
      return await _0x50784b.sendMessage(_0x38c592, {
        'text': "erro !"
      }, {
        'quoted': _0x2de8d1
      });
    }
    var _0x2166de = [];
    _0x2166de.push({
      'buttonId': _0x4eb2a9 + ("bdetails " + _0x117514 + '&' + _0x36a810),
      'buttonText': {
        'displayText': "Details send"
      },
      'type': 0x1
    });
    _0x214649.dl_links.map(_0x496ff3 => {
      _0x2166de.push({
        'buttonId': _0x4eb2a9 + ("cdl " + _0x36a810 + '±' + _0x496ff3.link + '±' + _0x214649.data.title + "\n\t\n\t*`[ " + _0x496ff3.quality + " ]`*"),
        'buttonText': {
          'displayText': _0x496ff3.size + " - " + _0x496ff3.quality
        },
        'type': 0x1
      });
    });
    const _0x2c88a1 = {
      'image': {
        'url': _0x36a810.replace('-150x150', '')
      },
      'caption': _0x2c0eef,
      'footer': config.FOOTER,
      'buttons': _0x2166de,
      'headerType': 0x4
    };
    const _0x29997e = _0x214649.dl_links.map((_0x20f916, _0x44a3b6) => {
      const _0x1c4d48 = (_0x20f916.size + " (" + _0x20f916.quality + ')').replace(/WEBDL|WEB DL|BluRay HD|BluRay SD|BluRay FHD|Telegram BluRay SD|Telegram BluRay HD|Direct BluRay SD|Direct BluRay HD|Direct BluRay FHD|FHD|HD|SD|Telegram BluRay FHD/gi, '').trim() || "No info";
      return {
        'title': _0x1c4d48,
        'id': _0x4eb2a9 + ("cdl " + _0x36a810 + '±' + _0x20f916.link + '±' + _0x214649.data.title + "\n\t\n\t*`[ " + _0x20f916.quality + " ]`*")
      };
    });
    const _0x531a10 = {
      'title': "🎬 Choose a download link :)",
      'sections': [{
        'title': "Available Links",
        'rows': _0x29997e
      }]
    };
    if (config.BUTTON === "true") {
      await _0x50784b.sendMessage(_0x38c592, {
        'image': {
          'url': _0x36a810.replace("-150x150", '')
        },
        'caption': _0x2c0eef,
        'footer': config.FOOTER,
        'buttons': [{
          'buttonId': _0x4eb2a9 + ("bdetails " + _0x117514 + '&' + _0x36a810),
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
            'paramsJson': JSON.stringify(_0x531a10)
          }
        }],
        'headerType': 0x1,
        'viewOnce': true
      }, {
        'quoted': _0x2de8d1
      });
    } else {
      return await _0x50784b.buttonMessage(_0x38c592, _0x2c88a1, _0x2de8d1);
    }
  } catch (_0x5bb4da) {
    console.log(_0x5bb4da);
    await _0x50784b.sendMessage(_0x38c592, {
      'text': "🚩 *Error !!*"
    }, {
      'quoted': _0x2de8d1
    });
  }
});
let isUploading = false;
cmd({
  'pattern': 'cdl',
  'react': '⬇️',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x1490ad, _0x1aef93, _0x349586, {
  from: _0x17c649,
  q: _0x718173,
  isMe: _0x44c862,
  reply: _0x2379d5
}) => {
  if (!_0x718173) {
    return await _0x2379d5("*Please provide a direct URL!*");
  }
  if (isUploading) {
    return await _0x1490ad.sendMessage(_0x17c649, {
      'text': "*A movie is already being uploaded. Please wait a while before uploading another one.* ⏳",
      'quoted': _0x1aef93
    });
  }
  try {
    isUploading = true;
    const _0x327667 = _0x718173.split('±')[0x0];
    const _0x1102b8 = _0x718173.split('±')[0x1];
    const _0x391756 = _0x718173.split('±')[0x2];
    let _0x30aaaf = await fetchJson('https://darksadas-yt-baiscope-dl.vercel.app/?url=' + _0x1102b8 + "&apikey=pramashi");
    if (!_0x30aaaf || !_0x30aaaf.data || !_0x30aaaf.data.dl_link) {
      throw new Error("No direct download link found. Try again...");
    }
    if (!_0x30aaaf.data.dl_link || !_0x30aaaf.data.dl_link.includes("https://drive.baiscopeslk")) {
      console.log("Invalid input:", _0x718173);
      return await _0x2379d5("*❗ Sorry, this download url is incorrect please choose another number*");
    }
    const _0x483c8d = _0x30aaaf.data.dl_link.trim();
    const _0x1c4a46 = '' + _0x327667;
    await _0x1490ad.sendMessage(_0x17c649, {
      'react': {
        'text': '⬆️',
        'key': _0x1aef93.key
      }
    });
    await _0x1490ad.sendMessage(_0x17c649, {
      'text': "*Uploading your movie..⬆️*"
    });
    await _0x1490ad.sendMessage(config.JID || _0x17c649, {
      'document': {
        'url': _0x483c8d
      },
      'caption': "*🎬 Name :* " + _0x391756 + "\n\n" + config.NAME,
      'mimetype': "video/mp4",
      'jpegThumbnail': await (await fetch(_0x1c4a46)).buffer(),
      'fileName': _0x391756 + '.mp4'
    });
    await _0x1490ad.sendMessage(_0x17c649, {
      'react': {
        'text': '✔️',
        'key': _0x1aef93.key
      }
    });
    await _0x1490ad.sendMessage(_0x17c649, {
      'text': "*Movie sent successfully to JID " + config.JID + " ✔*"
    }, {
      'quoted': _0x1aef93
    });
  } catch (_0x51efef) {
    console.error("Error fetching or sending:", _0x51efef);
    await _0x1490ad.sendMessage(_0x17c649, {
      'text': "*Erro fetching this moment retry now ❗*"
    }, {
      'quoted': _0x1aef93
    });
  } finally {
    isUploading = false;
  }
});
cmd({
  'pattern': 'bdetails',
  'react': '🎬',
  'desc': "Movie downloader",
  'filename': __filename
}, async (_0x236c1e, _0x2751cc, _0x2b3ef6, {
  from: _0x3043d1,
  q: _0x5aeac5,
  isMe: _0x3a293a,
  reply: _0x353897
}) => {
  try {
    if (!_0x5aeac5) {
      return await _0x353897("⚠️ *Please provide the movie URL and image URL separated by \"&\".*");
    }
    const [_0x2cabb7, _0x187cc0] = _0x5aeac5.split('&');
    if (!_0x2cabb7 || !_0x187cc0) {
      return await _0x353897("❌ *Invalid format! Example:*\n_bdetails https://movieurl.com&https://imageurl.com_");
    }
    let _0x30157e = await fetchJson("https://darksadas-yt-baiscope-info.vercel.app/?url=" + _0x2cabb7 + "&apikey=pramashi");
    let _0x4b9132 = (await axios.get("https://mv-visper-full-db.pages.dev/Main/main_var.json")).data;
    let _0x256b98 = "*☘️ 𝗧ɪᴛʟᴇ ➮* *_" + (_0x30157e.data.title || "N/A") + "_*\n\n*📅 𝗥ᴇʟᴇꜱᴇᴅ ᴅᴀᴛᴇ ➮* _" + (_0x30157e.data.date || "N/A") + "_\n*💃 𝗥ᴀᴛɪɴɢ ➮* _" + (_0x30157e.data.imdb || 'N/A') + "_\n*⏰ 𝗥ᴜɴᴛɪᴍᴇ ➮* _" + (_0x30157e.data.runtime || "N/A") + "_\n*💁‍♂️ 𝗦ᴜʙᴛɪᴛʟᴇ ʙʏ ➮* _" + (_0x30157e.data.subtitle_author || 'N/A') + "_\n*🎭 𝗚ᴇɴᴀʀᴇꜱ ➮* " + (_0x30157e.data.genres.join(", ") || "N/A") + "\n\n\n✨ *Follow us:* " + _0x4b9132.chlink;
    await _0x236c1e.sendMessage(config.JID || _0x3043d1, {
      'image': {
        'url': _0x187cc0.replace("-150x150", '')
      },
      'caption': _0x256b98
    });
    await _0x236c1e.sendMessage(_0x3043d1, {
      'react': {
        'text': '✅',
        'key': _0x2b3ef6.key
      }
    });
  } catch (_0x5ca9f1) {
    console.error("Error:", _0x5ca9f1);
    await _0x236c1e.sendMessage(_0x3043d1, "⚠️ *An error occurred. Please try again later.*", {
      'quoted': _0x2b3ef6
    });
  }
});
cmd({
  'pattern': "cine",
  'react': '🔎',
  'category': "movie",
  'alias': ["cinesubz"],
  'desc': "cinesubz.co movie search",
  'use': ".cine 2025",
  'filename': __filename
}, async (_0xeba2f, _0x49785a, _0x4872c3, {
  from: _0x4b04fd,
  q: _0x3708b4,
  prefix: _0x2ae55c,
  isPre: _0x48bc98,
  isSudo: _0x17822a,
  isOwner: _0x5cffcf,
  isMe: _0xb21f3f,
  reply: _0x25a249
}) => {
  try {
    const _0x2bf3e8 = (await axios.get("https://mv-visper-full-db.pages.dev/Main/main_var.json")).data;
    const _0x4ad370 = _0x2bf3e8.mvfree === "true";
    if (!_0x4ad370 && !_0xb21f3f && !_0x48bc98) {
      await _0xeba2f.sendMessage(_0x4b04fd, {
        'react': {
          'text': '❌',
          'key': _0x4872c3.key
        }
      });
      return await _0xeba2f.sendMessage(_0x4b04fd, {
        'text': "*`You are not a premium user⚠️`*\n\n*Send a message to one of the 2 numbers below and buy Lifetime premium 🎉.*\n\n_Price : 200 LKR ✔️_\n\n*👨‍💻Contact us : 0778500326 , 0722617699*"
      }, {
        'quoted': _0x4872c3
      });
    }
    if (config.MV_BLOCK === "true" && !_0xb21f3f && !_0x17822a && !_0x5cffcf) {
      await _0xeba2f.sendMessage(_0x4b04fd, {
        'react': {
          'text': '❌',
          'key': _0x4872c3.key
        }
      });
      return await _0xeba2f.sendMessage(_0x4b04fd, {
        'text': "*This command currently only works for the Bot owner. To disable it for others, use the .settings command 👨‍🔧.*"
      }, {
        'quoted': _0x4872c3
      });
    }
    if (!_0x3708b4) {
      return await _0x25a249("*Please give me a movie name 🎬*");
    }
    const _0x3f4a42 = await cinesubz_tv(_0x3708b4);
    if (!_0x3f4a42 || !_0x3f4a42.data || _0x3f4a42.data.length === 0x0) {
      await _0xeba2f.sendMessage(_0x4b04fd, {
        'react': {
          'text': '❌',
          'key': _0x4872c3.key
        }
      });
      return await _0xeba2f.sendMessage(_0x4b04fd, {
        'text': "*No results found ❌*"
      }, {
        'quoted': _0x4872c3
      });
    }
    var _0x40417c = [];
    for (var _0x44f093 = 0x0; _0x44f093 < _0x3f4a42.data.length; _0x44f093++) {
      _0x40417c.push({
        'title': (_0x3f4a42.data[_0x44f093].title || "No result").replace("Sinhala Subtitles | සිංහල උපසිරැසි සමඟ", '').replace("Sinhala Subtitle | සිංහල උපසිරැසි සමඟ", ''),
        'description': '',
        'rowId': _0x2ae55c + "cinedl " + _0x3f4a42.data[_0x44f093].link
      });
    }
    const _0x16a6b0 = [{
      'title': "cinesubz.co results",
      'rows': _0x40417c
    }];
    const _0x3c9599 = {
      'text': "_*CINESUBZ MOVIE SEARCH RESULTS 🎬*_\n\n*`Input :`* " + _0x3708b4,
      'footer': config.FOOTER,
      'title': "cinesubz.co results",
      'buttonText': "*Reply Below Number 🔢*",
      'sections': _0x16a6b0
    };
    const _0x1e19a4 = "_*CINESUBZ MOVIE SEARCH RESULTS 🎬*_ \n\n*`Input :`* " + _0x3708b4;
    const _0x2465e8 = _0x3f4a42.data.map((_0x6f4715, _0x1b9030) => {
      const _0x484fd5 = ('' + _0x3f4a42.data[_0x1b9030].title).replace(/WEBDL|WEB DL|BluRay HD|BluRay SD|BluRay FHD|Telegram BluRay SD|Telegram BluRay HD|Direct BluRay SD|Direct BluRay HD|Direct BluRay FHD|FHD|HD|SD|Telegram BluRay FHD/gi, '').trim() || "No info";
      return {
        'title': _0x484fd5,
        'id': _0x2ae55c + ("cinedl " + _0x3f4a42.data[_0x1b9030].link)
      };
    });
    const _0x408ea5 = {
      'title': "Choose a Movie :)",
      'sections': [{
        'title': "Available Links",
        'rows': _0x2465e8
      }]
    };
    if (config.BUTTON === "true") {
      await _0xeba2f.sendMessage(_0x4b04fd, {
        'image': {
          'url': config.LOGO
        },
        'caption': _0x1e19a4,
        'footer': config.FOOTER,
        'buttons': [{
          'buttonId': "download_list",
          'buttonText': {
            'displayText': "🎥 Select Option"
          },
          'type': 0x4,
          'nativeFlowInfo': {
            'name': 'single_select',
            'paramsJson': JSON.stringify(_0x408ea5)
          }
        }],
        'headerType': 0x1,
        'viewOnce': true
      }, {
        'quoted': _0x4872c3
      });
    } else {
      await _0xeba2f.listMessage(_0x4b04fd, _0x3c9599, _0x4872c3);
    }
  } catch (_0x199c79) {
    console.log(_0x199c79);
    await _0xeba2f.sendMessage(_0x4b04fd, {
      'text': "🚩 *Error !!*"
    }, {
      'quoted': _0x4872c3
    });
  }
});
cmd({
  'pattern': "cinedl",
  'react': '🎥',
  'desc': "moive downloader",
  'filename': __filename
}, async (_0x32875e, _0x464d33, _0x198305, {
  from: _0x527d35,
  q: _0x5e2f26,
  isMe: _0x4fb1aa,
  prefix: _0x330093,
  reply: _0x5e77ec
}) => {
  try {
    if (!_0x5e2f26 || !_0x5e2f26.includes("https://cinesubz.net/movies/")) {
      console.log("Invalid input:", _0x5e2f26);
      return await _0x5e77ec("*❗ This is a TV series, please use .tv command.*");
    }
    let _0x1b9e2f = await cinesubz_info(_0x5e2f26);
    console.log(cinesubz_info);
    let _0x438e93 = "*☘️ 𝗧ɪᴛʟᴇ ➮* *_" + (_0x1b9e2f.data.title || 'N/A') + "_*\n\n*📅 𝗥ᴇʟᴇꜱᴇᴅ ᴅᴀᴛᴇ ➮* _" + (_0x1b9e2f.data.date || "N/A") + "_\n*🌎 𝗖ᴏᴜɴᴛʀʏ ➮* _" + (_0x1b9e2f.data.country || "N/A") + "_\n*💃 𝗥ᴀᴛɪɴɢ ➮* _" + (_0x1b9e2f.data.imdb || "N/A") + "_\n*⏰ 𝗥ᴜɴᴛɪᴍᴇ ➮* _" + (_0x1b9e2f.data.runtime || "N/A") + "_\n*💁‍♂️ 𝗦ᴜʙᴛɪᴛʟᴇ ʙʏ ➮* _" + (_0x1b9e2f.data.subtitle_author || 'N/A') + "_\n*🎭 𝗚ᴇɴᴀʀᴇꜱ ➮* " + (_0x1b9e2f.data.genres.join(", ") || "N/A") + "\n";
    if (_0x1b9e2f.length < 0x1) {
      return await _0x32875e.sendMessage(_0x527d35, {
        'text': "erro !"
      }, {
        'quoted': _0x198305
      });
    }
    var _0x1d8002 = [];
    _0x1d8002.push({
      'buttonId': _0x330093 + "ctdetails " + _0x5e2f26,
      'buttonText': {
        'displayText': "Details Card\n"
      },
      'type': 0x1
    });
    _0x1b9e2f.dl_links.map(_0x5b556b => {
      _0x1d8002.push({
        'buttonId': _0x330093 + ("paka " + _0x1b9e2f.data.image + '±' + _0x5b556b.link + '±' + _0x1b9e2f.data.title + "\n\t\n\t*`[ " + _0x5b556b.quality + " ]`*"),
        'buttonText': {
          'displayText': (_0x5b556b.size + "  (" + _0x5b556b.quality + " )").replace("WEBDL", '').replace("WEB DL", '').replace("BluRay HD", '').replace("BluRay SD", '').replace("BluRay FHD", '').replace("Telegram BluRay SD", '').replace("Telegram BluRay HD", '').replace("Direct BluRay SD", '').replace("Direct BluRay HD", '').replace("Direct BluRay FHD", '').replace("FHD", '').replace('HD', '').replace('SD', '').replace("Telegram BluRay FHD", '')
        },
        'type': 0x1
      });
    });
    const _0xa1fefc = {
      'image': {
        'url': _0x1b9e2f.data.image.replace(/-\d+x\d+(?=\.jpg)/, '')
      },
      'caption': _0x438e93,
      'footer': config.FOOTER,
      'buttons': _0x1d8002,
      'headerType': 0x4
    };
    const _0x4610e6 = _0x1b9e2f.dl_links.map((_0x12194f, _0x436180) => {
      const _0x561bb2 = (_0x12194f.size + " (" + _0x12194f.quality + ')').replace(/WEBDL|WEB DL|BluRay HD|BluRay SD|BluRay FHD|Telegram BluRay SD|Telegram BluRay HD|Direct BluRay SD|Direct BluRay HD|Direct BluRay FHD|FHD|HD|SD|Telegram BluRay FHD/gi, '').trim() || "No info";
      return {
        'title': _0x561bb2,
        'id': _0x330093 + ("paka " + _0x1b9e2f.data.image + '±' + _0x12194f.link + '±' + _0x1b9e2f.data.title + "\n\t\n\t*`[ " + _0x12194f.quality + " ]`*")
      };
    });
    const _0x5a0df1 = {
      'title': "🎬 Choose a download link:",
      'sections': [{
        'title': "Available Links",
        'rows': _0x4610e6
      }]
    };
    if (config.BUTTON === "true") {
      await _0x32875e.sendMessage(_0x527d35, {
        'image': {
          'url': _0x1b9e2f.data.image.replace(/-\d+x\d+(?=\.jpg)/, '')
        },
        'caption': _0x438e93,
        'footer': config.FOOTER,
        'buttons': [{
          'buttonId': _0x330093 + "ctdetails " + _0x5e2f26,
          'buttonText': {
            'displayText': "Details Send"
          },
          'type': 0x1
        }, {
          'buttonId': 'download_list',
          'buttonText': {
            'displayText': "🎥 Select Option"
          },
          'type': 0x4,
          'nativeFlowInfo': {
            'name': 'single_select',
            'paramsJson': JSON.stringify(_0x5a0df1)
          }
        }],
        'headerType': 0x1,
        'viewOnce': true
      }, {
        'quoted': _0x198305
      });
    } else {
      return await _0x32875e.buttonMessage(_0x527d35, _0xa1fefc, _0x198305);
    }
  } catch (_0x5ce3f9) {
    console.log(_0x5ce3f9);
    await _0x32875e.sendMessage(_0x527d35, {
      'text': "🚩 *Error !!*"
    }, {
      'quoted': _0x198305
    });
  }
});
let isUploadingg = false;
cmd({
  'pattern': "paka",
  'react': '⬇️',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x217fbe, _0x4badc6, _0x1c8bc7, {
  from: _0x2b6432,
  q: _0x3da182,
  isMe: _0x264f45,
  reply: _0x128dc1
}) => {
  if (!_0x3da182) {
    return await _0x128dc1("*Please provide a direct URL!*");
  }
  if (isUploadingg) {
    return await _0x217fbe.sendMessage(_0x2b6432, {
      'text': "*A movie is already being uploaded. Please wait a while before uploading another one.* ⏳",
      'quoted': _0x4badc6
    });
  }
  let _0x20b774 = 0x0;
  isUploadingg = true;
  while (_0x20b774 < 0x3) {
    try {
      const _0x1cb326 = _0x3da182.split('±')[0x0];
      const _0x232047 = _0x3da182.split('±')[0x1];
      const _0x486761 = _0x3da182.split('±')[0x2];
      const _0x6fb741 = await download(_0x232047);
      if (!_0x6fb741) {
        throw new Error("No direct download link found. Try again...");
      }
      console.log(_0x6fb741);
      const _0x398664 = _0x6fb741.result.direct.trim();
      await _0x217fbe.sendMessage(_0x2b6432, {
        'react': {
          'text': '⬆️',
          'key': _0x4badc6.key
        }
      });
      const _0x36994a = await _0x217fbe.sendMessage(_0x2b6432, {
        'text': "*Uploading your movie..⬆️*"
      });
      await _0x217fbe.sendMessage(config.JID || _0x2b6432, {
        'document': {
          'url': _0x398664
        },
        'caption': "*🎬 Name :* " + _0x486761 + "\n\n" + config.NAME,
        'mimetype': "video/mp4",
        'jpegThumbnail': await (await fetch(_0x1cb326)).buffer(),
        'fileName': _0x486761 + '.mp4'
      });
      await _0x217fbe.sendMessage(_0x2b6432, {
        'delete': _0x36994a.key
      });
      await _0x217fbe.sendMessage(_0x2b6432, {
        'react': {
          'text': '✔️',
          'key': _0x4badc6.key
        }
      });
      await _0x217fbe.sendMessage(_0x2b6432, {
        'text': "*Movie sent successfully to JID " + config.JID + " ✔*"
      }, {
        'quoted': _0x4badc6
      });
      break;
    } catch (_0x554a98) {
      _0x20b774++;
      console.error("Attempt " + _0x20b774 + ": Error fetching or sending:", _0x554a98);
    }
  }
  if (_0x20b774 >= 0x3) {
    await _0x217fbe.sendMessage(_0x2b6432, {
      'text': "*Error fetching this moment. Please try again later ❗*"
    }, {
      'quoted': _0x4badc6
    });
  }
  isUploadingg = false;
});
cmd({
  'pattern': "ctdetails",
  'react': '🎥',
  'desc': "moive downloader",
  'filename': __filename
}, async (_0x3de236, _0x36fe9e, _0x50fa28, {
  from: _0x3c70e1,
  q: _0x2db186,
  isMe: _0x278665,
  reply: _0x86440c
}) => {
  try {
    if (!_0x2db186) {
      return await _0x86440c("*please give me text !..*");
    }
    let _0x5381e2 = await cinesubz_info(_0x2db186);
    const _0x4c8838 = (await axios.get("https://mv-visper-full-db.pages.dev/Main/main_var.json")).data;
    let _0x1ef7aa = "*☘️ 𝗧ɪᴛʟᴇ ➮* *_" + (_0x5381e2.data.title || "N/A") + "_*\n\n*📅 𝗥ᴇʟᴇꜱᴇᴅ ᴅᴀᴛᴇ ➮* _" + (_0x5381e2.data.date || "N/A") + "_\n*🌎 𝗖ᴏᴜɴᴛʀʏ ➮* _" + (_0x5381e2.data.country || "N/A") + "_\n*💃 𝗥ᴀᴛɪɴɢ ➮* _" + (_0x5381e2.data.imdb || 'N/A') + "_\n*⏰ 𝗥ᴜɴᴛɪᴍᴇ ➮* _" + (_0x5381e2.data.runtime || "N/A") + "_\n*💁‍♂️ 𝗦ᴜʙᴛɪᴛʟᴇ ʙʏ ➮* _" + (_0x5381e2.data.subtitle_author || "N/A") + "_\n*🎭 𝗚ᴇɴᴀʀᴇꜱ ➮* _" + (_0x5381e2.data.genres.join(", ") || 'N/A') + "_\n\n> 🌟 Follow us : *" + _0x4c8838.chlink + '*';
    await _0x3de236.sendMessage(config.JID || _0x3c70e1, {
      'image': {
        'url': _0x5381e2.data.image.replace(/-\d+x\d+(?=\.jpg)/, '')
      },
      'caption': _0x1ef7aa
    });
    await _0x3de236.sendMessage(_0x3c70e1, {
      'react': {
        'text': '✔️',
        'key': _0x50fa28.key
      }
    });
  } catch (_0x5167e0) {
    console.error("Error fetching or sending", _0x5167e0);
    await _0x3de236.sendMessage(_0x3c70e1, "*Error fetching or sending *", {
      'quoted': _0x50fa28
    });
  }
});
cmd({
  'pattern': 'pupilvideo',
  'react': '🔎',
  'category': "movie",
  'alias': ["sinhalafilm"],
  'desc': "pupilvideo.blogspot.com movie search",
  'use': ".pupilvideot ape",
  'filename': __filename
}, async (_0x2e8c7c, _0x4d9885, _0xd8f2e5, {
  from: _0x27dcf1,
  q: _0x302072,
  prefix: _0x14e3e0,
  isMe: _0x2ac941,
  isPre: _0x46e36b,
  isSudo: _0x545079,
  isOwner: _0x287a52,
  reply: _0x36e0f1
}) => {
  try {
    const _0x115b64 = (await axios.get('https://mv-visper-full-db.pages.dev/Main/main_var.json')).data;
    const _0x31eaa6 = _0x115b64.mvfree === "true";
    if (!_0x31eaa6 && !_0x2ac941 && !_0x46e36b) {
      await _0x2e8c7c.sendMessage(_0x27dcf1, {
        'react': {
          'text': '❌',
          'key': _0xd8f2e5.key
        }
      });
      return await _0x2e8c7c.sendMessage(_0x27dcf1, {
        'text': "*`You are not a premium user⚠️`*\n\n*Send a message to one of the 2 numbers below and buy Lifetime premium 🎉.*\n\n_Price : 200 LKR ✔️_\n\n*👨‍💻Contact us : 0778500326 , 0722617699*"
      }, {
        'quoted': _0xd8f2e5
      });
    }
    if (config.MV_BLOCK == "true" && !_0x2ac941 && !_0x545079 && !_0x287a52) {
      await _0x2e8c7c.sendMessage(_0x27dcf1, {
        'react': {
          'text': '❌',
          'key': _0xd8f2e5.key
        }
      });
      return await _0x2e8c7c.sendMessage(_0x27dcf1, {
        'text': "*This command currently only works for the Bot owner. To disable it for others, use the .settings command 👨‍🔧.*"
      }, {
        'quoted': _0xd8f2e5
      });
    }
    if (!_0x302072) {
      return await _0x36e0f1("*Please provide a movie name!*");
    }
    let _0x495071 = await fetchJson('https://darksadas-yt-new-movie-search.vercel.app/?url=' + _0x302072);
    if (!_0x495071 || !_0x495071.data || _0x495071.data.length === 0x0) {
      await _0x2e8c7c.sendMessage(_0x27dcf1, {
        'react': {
          'text': '❌',
          'key': _0xd8f2e5.key
        }
      });
      return await _0x2e8c7c.sendMessage(_0x27dcf1, {
        'text': "*No results found ❌*"
      }, {
        'quoted': _0xd8f2e5
      });
    }
    var _0xcf78eb = [];
    for (var _0x483af0 = 0x0; _0x483af0 < _0x495071.data.length; _0x483af0++) {
      _0xcf78eb.push({
        'title': _0x495071.data[_0x483af0].title,
        'description': '',
        'rowId': _0x14e3e0 + "newdl " + _0x495071.data[_0x483af0].link
      });
    }
    const _0x197cd2 = [{
      'title': "pupilvideo.blogspot.com results",
      'rows': _0xcf78eb
    }];
    const _0x235f05 = {
      'text': "_*🎬PUPILVIDEO MOVIE SEARCH RESULTS 🎬*_\n\n*Movie Search : " + _0x302072 + " 🔎*",
      'footer': config.FOOTER,
      'title': "Search Results 🎬",
      'buttonText': "*Reply Below Number 🔢*",
      'sections': _0x197cd2
    };
    const _0x5d0d2c = "_*🎬PUPILVIDEO MOVIE SEARCH RESULTS 🎬*_\n\n*Movie Search : " + _0x302072 + " 🔎*";
    const _0x1409ea = _0x495071.data.map((_0xfc40e6, _0x4051a8) => {
      const _0x2cae5a = ('' + _0x495071.data[_0x4051a8].title).replace(/WEBDL|WEB DL|BluRay HD|BluRay SD|BluRay FHD|Telegram BluRay SD|Telegram BluRay HD|Direct BluRay SD|Direct BluRay HD|Direct BluRay FHD|FHD|HD|SD|Telegram BluRay FHD/gi, '').trim() || "No info";
      return {
        'title': _0x2cae5a,
        'id': _0x14e3e0 + ("newdl " + _0x495071.data[_0x4051a8].link)
      };
    });
    const _0x12c53d = {
      'title': "Choose a Movie :)",
      'sections': [{
        'title': "Available Links",
        'rows': _0x1409ea
      }]
    };
    if (config.BUTTON === "true") {
      await _0x2e8c7c.sendMessage(_0x27dcf1, {
        'image': {
          'url': config.LOGO
        },
        'caption': _0x5d0d2c,
        'footer': config.FOOTER,
        'buttons': [{
          'buttonId': "download_list",
          'buttonText': {
            'displayText': "🎥 Select Option"
          },
          'type': 0x4,
          'nativeFlowInfo': {
            'name': "single_select",
            'paramsJson': JSON.stringify(_0x12c53d)
          }
        }],
        'headerType': 0x1,
        'viewOnce': true
      }, {
        'quoted': _0xd8f2e5
      });
    } else {
      await _0x2e8c7c.listMessage(_0x27dcf1, _0x235f05, _0xd8f2e5);
    }
  } catch (_0x4cc4c6) {
    console.log(_0x4cc4c6);
    await _0x2e8c7c.sendMessage(_0x27dcf1, {
      'text': "🚩 *Error occurred!!*"
    }, {
      'quoted': _0xd8f2e5
    });
  }
});
cmd({
  'pattern': "newdl",
  'react': '🎥',
  'desc': "moive downloader",
  'filename': __filename
}, async (_0x1c305d, _0x14d5e1, _0x334bb8, {
  from: _0x4dc8e1,
  q: _0x325e53,
  isMe: _0x446248,
  prefix: _0x18edde,
  reply: _0x468019
}) => {
  try {
    if (!_0x325e53) {
      return await _0x468019("*please give me text !..*");
    }
    let _0x54ff79 = await fetchJson("https://darksadasyt-new-mv-site-info.vercel.app/?url=" + _0x325e53);
    let _0x473aa8 = "*☘️ 𝗧ɪᴛʟᴇ ➮*  _" + (_0x54ff79.title || "N/A") + "_\n\n*📅 𝗥ᴇʟᴇꜱᴇᴅ ᴅᴀᴛᴇ ➮*  _" + (_0x54ff79.date || 'N/A') + "_\n*💁‍♂️ 𝗦ᴜʙᴛɪᴛʟᴇ ʙʏ ➮* _" + (_0x54ff79.subtitle_author || "N/A") + '_';
    if (_0x54ff79.downloadLinks.length < 0x1) {
      return await _0x1c305d.sendMessage(_0x4dc8e1, {
        'text': "erro !"
      }, {
        'quoted': _0x334bb8
      });
    }
    var _0x2b57a2 = [];
    _0x2b57a2.push({
      'buttonId': _0x18edde + "dubdet " + _0x325e53,
      'buttonText': {
        'displayText': "Details send"
      },
      'type': 0x1
    });
    _0x54ff79.downloadLinks.map(_0x5cbd11 => {
      _0x2b57a2.push({
        'buttonId': _0x18edde + ("ndll " + _0x54ff79.image + '±' + _0x5cbd11.link + '±' + _0x54ff79.title),
        'buttonText': {
          'displayText': '' + _0x5cbd11.title
        },
        'type': 0x1
      });
    });
    const _0x38039a = {
      'image': {
        'url': _0x54ff79.image
      },
      'caption': _0x473aa8,
      'footer': config.FOOTER,
      'buttons': _0x2b57a2,
      'headerType': 0x4
    };
    const _0x2bc6c1 = _0x54ff79.downloadLinks.map((_0x5768f8, _0x6779de) => {
      const _0x266592 = ('' + _0x5768f8.title).replace(/WEBDL|WEB DL|BluRay HD|BluRay SD|BluRay FHD|Telegram BluRay SD|Telegram BluRay HD|Direct BluRay SD|Direct BluRay HD|Direct BluRay FHD|FHD|HD|SD|Telegram BluRay FHD/gi, '').trim() || "No info";
      return {
        'title': _0x266592,
        'id': _0x18edde + ("ndll " + _0x54ff79.image + '±' + _0x5768f8.link + '±' + _0x54ff79.title)
      };
    });
    const _0x7d3538 = {
      'title': "🎬 Choose a download link :)",
      'sections': [{
        'title': "Available Links",
        'rows': _0x2bc6c1
      }]
    };
    if (config.BUTTON === "true") {
      await _0x1c305d.sendMessage(_0x4dc8e1, {
        'image': {
          'url': _0x54ff79.image
        },
        'caption': _0x473aa8,
        'footer': config.FOOTER,
        'buttons': [{
          'buttonId': _0x18edde + "dubdet " + _0x325e53,
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
            'paramsJson': JSON.stringify(_0x7d3538)
          }
        }],
        'headerType': 0x1,
        'viewOnce': true
      }, {
        'quoted': _0x334bb8
      });
    } else {
      return await _0x1c305d.buttonMessage(_0x4dc8e1, _0x38039a, _0x334bb8);
    }
  } catch (_0x431bc2) {
    console.log(_0x431bc2);
    await _0x1c305d.sendMessage(_0x4dc8e1, {
      'text': "🚩 *Error !!*"
    }, {
      'quoted': _0x334bb8
    });
  }
});
async function resizeImage(_0x9de23c, _0x135448, _0x3f318c) {
  try {
    return await sharp(_0x9de23c).resize(_0x135448, _0x3f318c).toBuffer();
  } catch (_0x556388) {
    console.error("Error resizing image:", _0x556388);
    return _0x9de23c;
  }
}
cmd({
  'pattern': 'ndll',
  'react': '⬇️',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x17b7bd, _0x18452a, _0x2ef87d, {
  from: _0x3747e2,
  q: _0x43a933,
  isMe: _0x72cb0f,
  reply: _0x35b07d
}) => {
  if (!_0x43a933) {
    return await _0x35b07d("*Please provide a direct URL!*");
  }
  try {
    await _0x17b7bd.sendMessage(_0x3747e2, {
      'text': "*Downloading your movie..⬇️*"
    }, {
      'quoted': _0x18452a
    });
    const _0x48c82b = _0x43a933.split('±')[0x0];
    const _0x200252 = _0x43a933.split('±')[0x1];
    const _0x58cd38 = _0x43a933.split('±')[0x2];
    const _0x572bf6 = _0x200252 + "&download=true";
    const _0x5242d4 = _0x572bf6.trim();
    const _0x14c085 = await fetch(_0x48c82b);
    const _0x38f8ec = await _0x14c085.buffer();
    const _0x2139bc = await resizeImage(_0x38f8ec, 0xc8, 0xc8);
    const _0x3ff374 = {
      'document': {
        'url': _0x5242d4
      },
      'caption': "*🎬 Name :* " + _0x58cd38 + "\n\n" + config.NAME,
      'jpegThumbnail': _0x2139bc,
      'mimetype': "video/mp4",
      'fileName': _0x58cd38 + ".mp4"
    };
    await _0x17b7bd.sendMessage(_0x3747e2, {
      'react': {
        'text': '⬆️',
        'key': _0x18452a.key
      }
    });
    await _0x17b7bd.sendMessage(_0x3747e2, {
      'text': "*Uploading your movie..⬆️*"
    }, {
      'quoted': _0x18452a
    });
    await _0x17b7bd.sendMessage(config.JID || _0x3747e2, _0x3ff374);
    await _0x17b7bd.sendMessage(_0x3747e2, {
      'react': {
        'text': '✔️',
        'key': _0x18452a.key
      }
    });
    await _0x17b7bd.sendMessage(_0x3747e2, {
      'text': "*Movie send Successfull this JID " + config.JID + " ✔*"
    }, {
      'quoted': _0x18452a
    });
  } catch (_0x3f0dd9) {
    console.error("Error fetching or sending", _0x3f0dd9);
    await _0x17b7bd.sendMessage(_0x3747e2, "*Error fetching or sending *", {
      'quoted': _0x18452a
    });
  }
});
cmd({
  'pattern': 'dubdet',
  'react': '🎥',
  'desc': "moive downloader",
  'filename': __filename
}, async (_0x54722d, _0x4512f8, _0x3b8cab, {
  from: _0x59e0ca,
  q: _0x1981e6,
  isMe: _0x489608,
  reply: _0xe732f4
}) => {
  try {
    if (!_0x1981e6) {
      return await _0xe732f4("*please give me text !..*");
    }
    let _0x288a97 = await fetchJson('https://darksadasyt-new-mv-site-info.vercel.app/?url=' + _0x1981e6);
    const _0x27a3af = (await axios.get("https://mv-visper-full-db.pages.dev/Main/main_var.json")).data;
    let _0x5cecad = "*☘️ 𝗧ɪᴛʟᴇ ➮*  _" + (_0x288a97.title || "N/A") + "_\n\n*📅 𝗥ᴇʟᴇꜱᴇᴅ ᴅᴀᴛᴇ ➮*  _" + (_0x288a97.date || "N/A") + "_\n*💁‍♂️ 𝗦ᴜʙᴛɪᴛʟᴇ ʙʏ ➮* _" + (_0x288a97.subtitle_author || "N/A") + "_\n\n> 🌟 Follow us : *" + _0x27a3af.chlink + "*\n\n> _*VISPER MD MULTIDEVICE*_\n";
    await _0x54722d.sendMessage(config.JID || _0x59e0ca, {
      'image': {
        'url': _0x288a97.image
      },
      'caption': _0x5cecad
    });
    await _0x54722d.sendMessage(_0x59e0ca, {
      'react': {
        'text': '✔️',
        'key': _0x3b8cab.key
      }
    });
  } catch (_0x2d01c8) {
    console.error("Error fetching or sending", _0x2d01c8);
    await _0x54722d.sendMessage(_0x59e0ca, "*Error fetching or sending *", {
      'quoted': _0x3b8cab
    });
  }
});
cmd({
  'pattern': "cinetv",
  'react': '🔎',
  'category': "movie",
  'alias': ["ctv"],
  'desc': "cinesubz.co tv shows search",
  'use': ".cinetv  2025",
  'filename': __filename
}, async (_0x26e8c3, _0x8b41d6, _0x4734a0, {
  from: _0x5174da,
  q: _0x27092c,
  prefix: _0x1c13d8,
  isMe: _0x2f4d82,
  isSudo: _0x1cb0ec,
  isPre: _0x24e476,
  isOwner: _0x2539d1,
  reply: _0x5c49c7
}) => {
  try {
    const _0x4f2460 = (await axios.get("https://mv-visper-full-db.pages.dev/Main/main_var.json")).data;
    const _0x56b8f7 = _0x4f2460.mvfree === "true";
    if (!_0x56b8f7 && !_0x2f4d82 && !_0x24e476) {
      await _0x26e8c3.sendMessage(_0x5174da, {
        'react': {
          'text': '❌',
          'key': _0x4734a0.key
        }
      });
      return await _0x26e8c3.sendMessage(_0x5174da, {
        'text': "*`You are not a premium user⚠️`*\n\n*Send a message to one of the 2 numbers below and buy Lifetime premium 🎉.*\n\n_Price : 200 LKR ✔️_\n\n*👨‍💻Contact us : 0778500326 , 0722617699*"
      }, {
        'quoted': _0x4734a0
      });
    }
    if (config.MV_BLOCK == 'true' && !_0x2f4d82 && !_0x1cb0ec && !_0x2539d1) {
      await _0x26e8c3.sendMessage(_0x5174da, {
        'react': {
          'text': '❌',
          'key': _0x4734a0.key
        }
      });
      return await _0x26e8c3.sendMessage(_0x5174da, {
        'text': "*This command currently only works for the Bot owner. To disable it for others, use the .settings command 👨‍🔧.*"
      }, {
        'quoted': _0x4734a0
      });
    }
    if (!_0x27092c) {
      return await _0x5c49c7("*please give me text !..*");
    }
    let _0x4a6c13 = await fetchJson('https://darksadas-yt-cinesubz-tv-search.vercel.app/?query=' + _0x27092c);
    if (!_0x4a6c13 || !_0x4a6c13.data || _0x4a6c13.data.length === 0x0) {
      await _0x26e8c3.sendMessage(_0x5174da, {
        'react': {
          'text': '❌',
          'key': _0x4734a0.key
        }
      });
      return await _0x26e8c3.sendMessage(_0x5174da, {
        'text': "*No results found ❌*"
      }, {
        'quoted': _0x4734a0
      });
    }
    var _0x8c8e7d = [];
    for (var _0x41c48a = 0x0; _0x41c48a < _0x4a6c13.data.length; _0x41c48a++) {
      _0x8c8e7d.push({
        'title': _0x4a6c13.data[_0x41c48a].title.replace("Sinhala Subtitles | සිංහල උපසිරැසි සමඟ", '').replace("Sinhala Subtitle | සිංහල උපසිරැසි සමඟ", '') || "Result not found",
        'description': '',
        'rowId': _0x1c13d8 + "cinetvdl " + _0x4a6c13.data[_0x41c48a].link
      });
    }
    const _0xbee07a = [{
      'title': "cinesubz.co results",
      'rows': _0x8c8e7d
    }];
    const _0x436667 = {
      'text': "_*CINESUBZ TV SHOWS RESULTS 📺*_\n\n*`Input :`* " + _0x27092c,
      'footer': config.FOOTER,
      'title': "cinesubz.co results",
      'buttonText': "*Reply Below Number 🔢*",
      'sections': _0xbee07a
    };
    const _0xf24444 = "_*CINESUBZ TV SHOWS RESULTS 📺*_\n\n*`Input :`* " + _0x27092c;
    const _0x893bd9 = _0x4a6c13.data.map((_0x4a8915, _0x3bc549) => {
      const _0x4dc824 = ('' + _0x4a6c13.data[_0x3bc549].title).replace(/WEBDL|WEB DL|BluRay HD|BluRay SD|BluRay FHD|Telegram BluRay SD|Telegram BluRay HD|Direct BluRay SD|Direct BluRay HD|Direct BluRay FHD|FHD|HD|SD|Telegram BluRay FHD/gi, '').trim() || "No info";
      return {
        'title': _0x4dc824,
        'id': _0x1c13d8 + ("cinetvdl " + _0x4a6c13.data[_0x3bc549].link)
      };
    });
    const _0x3b6699 = {
      'title': "Choose a Movie :)",
      'sections': [{
        'title': "Available Links",
        'rows': _0x893bd9
      }]
    };
    if (config.BUTTON === 'true') {
      await _0x26e8c3.sendMessage(_0x5174da, {
        'image': {
          'url': config.LOGO
        },
        'caption': _0xf24444,
        'footer': config.FOOTER,
        'buttons': [{
          'buttonId': "download_list",
          'buttonText': {
            'displayText': "🎥 Select Option"
          },
          'type': 0x4,
          'nativeFlowInfo': {
            'name': 'single_select',
            'paramsJson': JSON.stringify(_0x3b6699)
          }
        }],
        'headerType': 0x1,
        'viewOnce': true
      }, {
        'quoted': _0x4734a0
      });
    } else {
      await _0x26e8c3.listMessage(_0x5174da, _0x436667, _0x4734a0);
    }
  } catch (_0x14bc34) {
    console.log(_0x14bc34);
    await _0x26e8c3.sendMessage(_0x5174da, {
      'text': "🚩 *Error !!*"
    }, {
      'quoted': _0x4734a0
    });
  }
});
cmd({
  'pattern': "cinetvdl",
  'react': '🎥',
  'desc': "moive downloader",
  'filename': __filename
}, async (_0x3e1962, _0x2a20f7, _0x41211e, {
  from: _0x562de0,
  q: _0x4ebbc2,
  isMe: _0x30367e,
  prefix: _0x2fec6e,
  reply: _0x1a0b46
}) => {
  try {
    if (!_0x4ebbc2 || !_0x4ebbc2.includes('https://cinesubz.net/tvshows')) {
      console.log("Invalid input:", _0x4ebbc2);
      return await _0x1a0b46("*❗ This is a movie, please use .mv command.*");
    }
    let _0xcd4bd5 = await cinesubz_tvshow_info(_0x4ebbc2);
    let _0x565161 = "*☘️ 𝗧ɪᴛʟᴇ ➮* *_" + (_0xcd4bd5.data.title || 'N/A') + "_*\n\n*📅 𝗥ᴇʟᴇꜱᴇᴅ ᴅᴀᴛᴇ ➮* _" + (_0xcd4bd5.data.date || "N/A") + "_\n*🌎 𝗖ᴏᴜɴᴛʀʏ ➮* _" + (_0xcd4bd5.data.country || "N/A") + "_\n*💃 𝗥ᴀᴛɪɴɢ ➮* _" + (_0xcd4bd5.data.imdb || 'N/A') + "_\n*⏰ 𝗥ᴜɴᴛɪᴍᴇ ➮* _" + (_0xcd4bd5.data.runtime || "N/A") + "_\n*💁‍♂️ 𝗦ᴜʙᴛɪᴛʟᴇ ʙʏ ➮* _" + (_0xcd4bd5.data.director || "N/A") + "_\n*🎭 𝗚ᴇɴᴀʀᴇꜱ ➮* " + (_0xcd4bd5.data.category.join(", ") || 'N/A') + "\n";
    var _0x178337 = [];
    _0x178337.push({
      'buttonId': _0x2fec6e + "ctdetailss " + _0x4ebbc2,
      'buttonText': {
        'displayText': "Details Card"
      },
      'type': 0x1
    }, {
      'buttonId': _0x2fec6e + "dlc " + _0x4ebbc2,
      'buttonText': {
        'displayText': "All Epishodes Send\n"
      },
      'type': 0x1
    });
    _0xcd4bd5.data.episodes.map(_0x1a4a46 => {
      _0x178337.push({
        'buttonId': _0x2fec6e + ("cinefirstdl " + _0xcd4bd5.data.mainImage + '±' + _0x1a4a46.link + '±' + _0xcd4bd5.data.title + " *`" + _0x1a4a46.number + '`*'),
        'buttonText': {
          'displayText': '' + _0x1a4a46.number
        },
        'type': 0x1
      });
    });
    const _0x2cdd59 = {
      'image': {
        'url': _0xcd4bd5.data.mainImage.replace("-200x300", '')
      },
      'caption': _0x565161,
      'footer': config.FOOTER,
      'buttons': _0x178337,
      'headerType': 0x4
    };
    const _0x25dd9c = _0xcd4bd5.data.episodes.map((_0x2f56fd, _0x348ae4) => {
      const _0x2445a7 = ('' + _0x2f56fd.number).replace(/WEBDL|WEB DL|BluRay HD|BluRay SD|BluRay FHD|Telegram BluRay SD|Telegram BluRay HD|Direct BluRay SD|Direct BluRay HD|Direct BluRay FHD|FHD|HD|SD|Telegram BluRay FHD/gi, '').trim() || "No info";
      return {
        'title': _0x2445a7,
        'id': _0x2fec6e + ("cinefirstdl " + _0xcd4bd5.data.mainImage + '±' + _0x2f56fd.link + '±' + _0xcd4bd5.data.title + " *`" + _0x2f56fd.number + '`*')
      };
    });
    const _0x2e9278 = {
      'title': "🎬 Choose a download link :)",
      'sections': [{
        'title': "Available Links",
        'rows': _0x25dd9c
      }]
    };
    if (config.BUTTON === "true") {
      await _0x3e1962.sendMessage(_0x562de0, {
        'image': {
          'url': _0xcd4bd5.data.mainImage.replace("-200x300", '')
        },
        'caption': _0x565161,
        'footer': config.FOOTER,
        'buttons': [{
          'buttonId': _0x2fec6e + "ctdetailss " + _0x4ebbc2,
          'buttonText': {
            'displayText': "Details Send"
          },
          'type': 0x1
        }, {
          'buttonId': _0x2fec6e + "dlc " + _0x4ebbc2,
          'buttonText': {
            'displayText': "All Epishodes Send"
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
            'paramsJson': JSON.stringify(_0x2e9278)
          }
        }],
        'headerType': 0x1,
        'viewOnce': true
      }, {
        'quoted': _0x41211e
      });
    } else {
      return await _0x3e1962.buttonMessage(_0x562de0, _0x2cdd59, _0x41211e);
    }
  } catch (_0x53b9e2) {
    console.log(_0x53b9e2);
    await _0x3e1962.sendMessage(_0x562de0, {
      'text': "🚩 *Error !!*"
    }, {
      'quoted': _0x41211e
    });
  }
});
cmd({
  'pattern': 'cinefirstdl',
  'react': '🎬',
  'alias': ['tv'],
  'desc': "Movie downloader",
  'filename': __filename
}, async (_0xbdb83a, _0x316bfb, _0x3f3389, {
  from: _0x27078e,
  q: _0x5dfd62,
  prefix: _0x560f26,
  isMe: _0x12ae6d,
  reply: _0x28f0fd
}) => {
  try {
    if (!_0x5dfd62) {
      return await _0x28f0fd("*⚠️ Please provide a valid search query or URL.*");
    }
    console.log("[CINE-FIRSTDL] Query:", _0x5dfd62);
    const [_0x12b5ec, _0x4d5146, _0x2ad128] = _0x5dfd62.split('±');
    if (!_0x4d5146) {
      return await _0x28f0fd("*🚫 Invalid format. Expected \"link±imageURL\".*");
    }
    const _0x14323e = await cinesubz_tv_firstdl(_0x4d5146);
    if (!_0x14323e?.["dl_links"]?.['length']) {
      return await _0xbdb83a.sendMessage(_0x27078e, {
        'text': "*❌ No download links found!*"
      }, {
        'quoted': _0x3f3389
      });
    }
    const _0x4c34cf = _0x14323e.dl_links.map(_0x59285b => ({
      'title': _0x59285b.quality + " - " + _0x59285b.size,
      'description': '',
      'rowId': _0x560f26 + ("tvdll " + _0x12b5ec + '&' + _0x2ad128 + '&' + _0x59285b.direct_link)
    }));
    const _0x12e035 = [{
      'title': "🎥 Select your preferred quality below:",
      'rows': _0x4c34cf
    }];
    const _0x25d8d5 = "*🍿 Episode Title:* " + _0x2ad128 + "_*_\n\n*🔢 Choose a quality from the list below:*";
    if (config.BUTTON === "true") {
      return await _0xbdb83a.sendMessage(_0x27078e, {
        'text': _0x25d8d5,
        'footer': config.FOOTER,
        'title': "📺 Cinesubz.lk Download Options",
        'buttonText': "🎬 Select Quality",
        'sections': _0x12e035
      }, {
        'quoted': _0x3f3389
      });
    } else {
      const _0x1783e7 = {
        'text': _0x25d8d5,
        'footer': config.FOOTER,
        'title': "📺 Cinesubz.lk Download Options",
        'buttonText': "🔽 Tap to select quality",
        'sections': _0x12e035
      };
      return await _0xbdb83a.listMessage(_0x27078e, _0x1783e7, _0x3f3389);
    }
  } catch (_0x804bc9) {
    console.error("[CINE-FIRSTDL ERROR]", _0x804bc9);
    await _0x28f0fd("🚫 *An unexpected error occurred!*\n\n" + _0x804bc9.message || _0x804bc9);
  }
});
cmd({
  'pattern': 'tvdll',
  'react': '⬇️',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x39918d, _0x4667c4, _0x5ca607, {
  from: _0x2a4f6f,
  q: _0x2e19c8,
  isMe: _0x4d9596,
  reply: _0x5582d6
}) => {
  if (!_0x2e19c8) {
    return await _0x5582d6("*Please provide a direct URL!*");
  }
  try {
    console.log("Query:", _0x2e19c8);
    await _0x39918d.sendMessage(_0x2a4f6f, {
      'text': "*Downloading your movie..⬇️*"
    }, {
      'quoted': _0x4667c4
    });
    const [_0x27ff54, _0x2579d9, _0x532ce2] = _0x2e19c8.split('&');
    if (!_0x27ff54 || !_0x2579d9 || !_0x532ce2) {
      return await _0x5582d6("*Invalid format. Make sure all 3 parts are provided with `&` separator.*");
    }
    const _0x1fa479 = await download(_0x532ce2);
    console.log(_0x1fa479);
    const _0x3b707a = _0x1fa479.result.direct.trim();
    const _0x2efabf = _0x27ff54.trim();
    const _0x32dcf0 = await fetch(_0x2efabf);
    const _0x95dbe6 = await _0x32dcf0.buffer();
    const _0xe8acef = await resizeImage(_0x95dbe6, 0xc8, 0xc8);
    const _0x196c29 = {
      'document': {
        'url': _0x3b707a
      },
      'caption': "*🎬 Name :* " + _0x2579d9 + "\n\n" + config.NAME,
      'jpegThumbnail': _0xe8acef,
      'mimetype': "video/mp4",
      'fileName': _0x2579d9 + ".mp4"
    };
    await _0x39918d.sendMessage(_0x2a4f6f, {
      'react': {
        'text': '⬆️',
        'key': _0x4667c4.key
      }
    });
    await _0x39918d.sendMessage(_0x2a4f6f, {
      'text': "*Uploading your movie..⬆️*"
    }, {
      'quoted': _0x4667c4
    });
    await _0x39918d.sendMessage(config.JID || _0x2a4f6f, _0x196c29);
    await _0x39918d.sendMessage(_0x2a4f6f, {
      'react': {
        'text': '✔️',
        'key': _0x4667c4.key
      }
    });
    await _0x39918d.sendMessage(_0x2a4f6f, {
      'text': "*Movie sent successfully to JID:* " + (config.JID || _0x2a4f6f) + " ✔",
      'quoted': _0x4667c4
    });
  } catch (_0x19bbef) {
    console.error("❌ Error:", _0x19bbef);
    await _0x39918d.sendMessage(_0x2a4f6f, {
      'text': "*❌ Error fetching or sending.*"
    }, {
      'quoted': _0x4667c4
    });
  }
});
cmd({
  'pattern': 'dlc',
  'react': '⬇️',
  'filename': __filename
}, async (_0x18a6ad, _0x132031, _0x1ff96a, {
  from: _0x1b4c1e,
  q: _0x8b1f11,
  reply: _0x3f6009,
  prefix: _0x508f13
}) => {
  if (!_0x8b1f11) {
    return _0x3f6009("*කරුණාකර Cinesubz URL එකක් ලබා දෙන්න !*");
  }
  try {
    const _0x2e4a4c = await cinesubz_tvshow_info(_0x8b1f11);
    if (!_0x2e4a4c.data || !Array.isArray(_0x2e4a4c.data.episodes) || _0x2e4a4c.data.episodes.length === 0x0) {
      return _0x3f6009("❌ Episode එකක්වත් හමු නොවුණා.");
    }
    const _0x1439f3 = _0x2e4a4c.data.episodes;
    const _0x4f06c8 = _0x1439f3.map(_0x3b3500 => _0x3b3500.link).filter(Boolean);
    const _0x4d21e5 = _0x2e4a4c.data.title || "Cinesubz_Show";
    const _0x2a0d78 = await cinesubz_tv_firstdl(_0x4f06c8[0x0]);
    const _0x2210b5 = ["360", "480", "720", "1080"];
    const _0x1d049e = Object.values(_0x2a0d78.dl_links || {}).filter(_0x2d61e3 => _0x2210b5.some(_0x4c155e => _0x2d61e3.quality?.["toLowerCase"]()['includes'](_0x4c155e)));
    if (!_0x1d049e.length) {
      console.log("❌ No valid quality matches. Found:", _0x2a0d78.dl_links);
      return _0x3f6009("❌ Valid quality options not found.");
    }
    let _0x442830 = _0x1d049e.map(_0x2c8790 => ({
      'title': _0x2c8790.quality + " - " + (_0x2c8790.size || "Unknown Size"),
      'rowId': _0x508f13 + "dlcq " + _0x2c8790.quality + '|' + _0x8b1f11 + '|' + _0x4d21e5
    }));
    const _0x56cce2 = [{
      'title': "_🎬 Download Quality තෝරන්න_",
      'rows': _0x442830
    }];
    const _0x219b4c = {
      'text': "🎞 *" + _0x4d21e5 + "*\n.",
      'footer': config.FOOTER,
      'title': "📺 [Cinesubz Downloader]",
      'buttonText': "🔽 Quality තෝරන්න",
      'sections': _0x56cce2
    };
    const _0x4f85ac = "🎞 *" + _0x4d21e5 + "*\n";
    const _0x16308d = _0x1d049e.map((_0x168058, _0x3c1acb) => {
      const _0xf58c4a = (_0x168058.quality + " - " + (_0x168058.size || "Unknown Size")).replace(/WEBDL|WEB DL|BluRay HD|BluRay SD|BluRay FHD|Telegram BluRay SD|Telegram BluRay HD|Direct BluRay SD|Direct BluRay HD|Direct BluRay FHD|FHD|HD|SD|Telegram BluRay FHD/gi, '').trim() || "No info";
      return {
        'title': _0xf58c4a,
        'id': _0x508f13 + "dlcq " + _0x168058.quality + '|' + _0x8b1f11 + '|' + _0x4d21e5
      };
    });
    const _0x38e119 = {
      'title': "🎬 Choose a download quality :)",
      'sections': [{
        'title': "Available Links",
        'rows': _0x16308d
      }]
    };
    if (config.BUTTON === "true") {
      await _0x18a6ad.sendMessage(_0x1b4c1e, {
        'image': {
          'url': config.LOGO
        },
        'caption': _0x4f85ac,
        'footer': config.FOOTER,
        'buttons': [{
          'buttonId': "download_list",
          'buttonText': {
            'displayText': "🎥 Select Option"
          },
          'type': 0x4,
          'nativeFlowInfo': {
            'name': "single_select",
            'paramsJson': JSON.stringify(_0x38e119)
          }
        }],
        'headerType': 0x1,
        'viewOnce': true
      }, {
        'quoted': _0x132031
      });
    } else {
      await _0x18a6ad.listMessage(_0x1b4c1e, _0x219b4c, _0x132031);
    }
  } catch (_0x47a414) {
    console.error(_0x47a414);
    _0x3f6009("❌ දෝෂයක් හට ගැණිනි.");
  }
});
const {
  delay
} = require('@whiskeysockets/baileys');
cmd({
  'pattern': "dlcq",
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0xe7c53c, _0x9d4e81, _0x2cad04, {
  from: _0x523d68,
  q: _0x365a2d,
  reply: _0x34df94
}) => {
  if (!_0x365a2d.includes('|')) {
    return _0x34df94("❌ Invalid format. Use: .dlcq <quality>|<url>|<title>");
  }
  const [_0x28ad84, _0x436b17, _0xd7b847] = _0x365a2d.split('|');
  const _0x5d7915 = _0x436b17?.["trim"]();
  const _0xe2c1 = _0xd7b847?.["trim"]() || "Cinesubz";
  const _0x38bf48 = ["360", "480", "720", '1080'];
  const _0x6434e1 = _0x38bf48.some(_0x1bc927 => _0x28ad84.toLowerCase().includes(_0x1bc927));
  if (!_0x6434e1) {
    return _0x34df94("❌ Unsupported quality. Use 360, 480, 720, or 1080.");
  }
  try {
    const _0x485651 = await cinesubz_tvshow_info(_0x5d7915);
    const _0x4e0731 = _0x485651.data.episodes;
    const _0x479201 = _0x485651.data.mainImage || 'https://i.ibb.co/hcyQfwy/7a265c4eee41e2b7.jpg';
    if (!_0x4e0731 || !_0x4e0731.length) {
      return _0x34df94("❌ No episodes found for this link.");
    }
    await _0x34df94("*📥 Starting to download episodes in *" + _0x28ad84 + "* quality...*");
    for (let _0x442544 = 0x0; _0x442544 < _0x4e0731.length; _0x442544++) {
      const _0x56f834 = _0x4e0731[_0x442544];
      let _0x4599f6 = false;
      for (let _0x37315d = 0x1; _0x37315d <= 0x4; _0x37315d++) {
        try {
          const _0x5bd44a = await cinesubz_tv_firstdl(_0x56f834.link);
          const _0x302a01 = Object.values(_0x5bd44a.dl_links || {});
          const _0x3a4149 = _0x302a01.find(_0x12575f => _0x12575f.quality?.["toLowerCase"]()['includes'](_0x28ad84.toLowerCase()));
          if (!_0x3a4149) {
            throw new Error("Requested quality not available.");
          }
          const _0x39efb3 = await download(_0x3a4149.direct_link);
          const _0x244d22 = _0x39efb3?.["result"]?.["direct"];
          if (!_0x244d22 || !_0x244d22.startsWith("http")) {
            throw new Error("Invalid direct link");
          }
          const _0x5e1941 = await (await fetch(_0x56f834.image || _0x479201)).buffer();
          const _0x4fa3ff = _0x56f834.name || "Episode_" + (_0x442544 + 0x1);
          const _0x1b6788 = _0xe2c1.replace(/[^a-zA-Z0-9]/g, '_') + '_E' + (_0x442544 + 0x1) + ".mp4";
          await _0xe7c53c.sendMessage(config.JID || _0x523d68, {
            'document': {
              'url': _0x244d22
            },
            'caption': "*📺 Name: " + _0xe2c1 + "*\n*Episode " + _0x56f834.number + " - " + _0x4fa3ff + "*\n\n*`[ " + _0x28ad84 + " ]`*\n\n" + config.NAME,
            'jpegThumbnail': _0x5e1941,
            'mimetype': "video/mp4",
            'fileName': _0x1b6788
          });
          await delay(0xbb8);
          _0x4599f6 = true;
          break;
        } catch (_0x2714c8) {
          console.log("❌ Episode " + (_0x442544 + 0x1) + " Attempt " + _0x37315d + " Failed:", _0x2714c8.message);
          if (_0x37315d === 0x4) {
            await _0xe7c53c.sendMessage(_0x523d68, {
              'text': "⚠️ Failed to download Episode " + (_0x442544 + 0x1) + " after 4 attempts."
            }, {
              'quoted': _0x9d4e81
            });
          } else {
            await delay(0x7d0);
          }
        }
      }
    }
    await _0x34df94("*✅ All episodes have been processed.*");
  } catch (_0xac37a3) {
    console.error(_0xac37a3);
    _0x34df94("❌ An error occurred while processing your request.");
  }
});
cmd({
  'pattern': 'ctdetailss',
  'react': '🎥',
  'desc': "moive downloader",
  'filename': __filename
}, async (_0x10d11b, _0x265434, _0x385715, {
  from: _0x26004b,
  q: _0x3fc711,
  isMe: _0x5e8bd0,
  reply: _0x29b044
}) => {
  try {
    if (!_0x3fc711) {
      return await _0x29b044("*please give me text !..*");
    }
    let _0x29c3e0 = await fetchJson('https://darksadas-yt-cineszub-tv-shows.vercel.app/?url=' + _0x3fc711 + "&apikey=pramashi");
    const _0x49ef83 = (await axios.get("https://mv-visper-full-db.pages.dev/Main/main_var.json")).data;
    let _0x2ba954 = "*☘️ 𝗧ɪᴛʟᴇ ➮* *_" + (_0x29c3e0.data.title || "N/A") + "_*\n\n*📅 𝗥ᴇʟᴇꜱᴇᴅ ᴅᴀᴛᴇ ➮* _" + (_0x29c3e0.data.date || "N/A") + "_\n*🌎 𝗖ᴏᴜɴᴛʀʏ ➮* _" + (_0x29c3e0.data.country || "N/A") + "_\n*💃 𝗥ᴀᴛɪɴɢ ➮* _" + (_0x29c3e0.data.imdb || "N/A") + "_\n*⏰ 𝗥ᴜɴᴛɪᴍᴇ ➮* _" + (_0x29c3e0.data.runtime || 'N/A') + "_\n*💁‍♂️ 𝗦ᴜʙᴛɪᴛʟᴇ ʙʏ ➮* _" + (_0x29c3e0.data.subtitle_author || "N/A") + "_\n*🎭 𝗚ᴇɴᴀʀᴇꜱ ➮* " + (_0x29c3e0.data.genres.join(", ") || "N/A") + "\n\n> 🌟 Follow us : *" + _0x49ef83.chlink + '*';
    await _0x10d11b.sendMessage(config.JID || _0x26004b, {
      'image': {
        'url': _0x29c3e0.data.image.replace("-200x300", '')
      },
      'caption': _0x2ba954
    });
    await _0x10d11b.sendMessage(_0x26004b, {
      'react': {
        'text': '✔️',
        'key': _0x385715.key
      }
    });
  } catch (_0x52b0d3) {
    console.error("Error fetching or sending", _0x52b0d3);
    await _0x10d11b.sendMessage(_0x26004b, "*Error fetching or sending *", {
      'quoted': _0x385715
    });
  }
});
cmd({
  'pattern': "imdb",
  'alias': ["mvinfo", "filminfo"],
  'desc': "Fetch detailed information about a movie.",
  'category': "movie",
  'react': '🎬',
  'use': ".movieinfo < Movie Name >",
  'filename': __filename
}, async (_0x599709, _0x2755e9, _0x9ef018, {
  from: _0x5ecfea,
  quoted: _0x30b9ed,
  body: _0x31302d,
  isCmd: _0x15b05d,
  command: _0x22e158,
  args: _0x507f84,
  q: _0x39146d,
  msr: _0x5c5cb1,
  creator: _0x2fc799,
  isGroup: _0x10c81f,
  sender: _0xce19de,
  senderNumber: _0x11c156,
  botNumber2: _0x1fc766,
  botNumber: _0x37c39e,
  pushname: _0x3ad477,
  isMe: _0x47e97e,
  isOwner: _0x295362,
  groupMetadata: _0x1206dc,
  groupName: _0x187fc6,
  participants: _0x54a97d,
  groupAdmins: _0x1d61a6,
  isBotAdmins: _0x1a5526,
  isAdmins: _0x16cd72,
  reply: _0x4b3091
}) => {
  try {
    if (!_0x39146d) {
      return await _0x4b3091(_0x5c5cb1.giveme);
    }
    const _0x4d4706 = "http://www.omdbapi.com/?t=" + encodeURIComponent(_0x39146d) + '&apikey=76cb7f39';
    const _0x3db424 = await axios.get(_0x4d4706);
    const _0x19ea88 = _0x3db424.data;
    const _0x8ab47d = (await axios.get("https://mv-visper-full-db.pages.dev/Main/main_var.json")).data;
    const _0x32fc8c = "*☘️ 𝗧ɪᴛʟᴇ ➮* " + _0x19ea88.Title + "\n\n\n*📅 𝗥ᴇʟᴇꜱᴇᴅ ᴅᴀᴛᴇ ➮* " + _0x19ea88.Released + "\n*⏰ 𝗥ᴜɴᴛɪᴍᴇ ➮* " + _0x19ea88.Runtime + "\n*🎭 𝗚ᴇɴᴀʀᴇꜱ ➮* " + _0x19ea88.Genre + "\n*💁‍♂️ 𝗦ᴜʙᴛɪᴛʟᴇ ʙʏ ➮* " + _0x19ea88.Director + "\n*🌎 𝗖ᴏᴜɴᴛʀʏ ➮* " + _0x19ea88.Country + "\n*💃 𝗥ᴀᴛɪɴɢ ➮* " + _0x19ea88.imdbRating + "\n\n> 🌟 Follow us : *" + _0x8ab47d.chlink + '*';
    const _0x12752d = _0x19ea88.Poster && _0x19ea88.Poster !== "N/A" ? _0x19ea88.Poster : config.LOGO;
    await _0x599709.sendMessage(_0x5ecfea, {
      'image': {
        'url': _0x12752d
      },
      'caption': _0x32fc8c + "\n            \n           "
    });
  } catch (_0x582f4b) {
    await _0x599709.sendMessage(_0x5ecfea, {
      'react': {
        'text': '❌',
        'key': _0x2755e9.key
      }
    });
    console.log(_0x582f4b);
    _0x4b3091("❌ *Error Accurated !!*\n\n" + _0x582f4b);
  }
});
cmd({
  'pattern': "pirate",
  'react': '🔎',
  'category': "movie",
  'alias': ["pira"],
  'desc': "cinesubz.co movie search",
  'use': ".pirate 2025",
  'filename': __filename
}, async (_0x462814, _0x34814e, _0x270c09, {
  from: _0x41849b,
  q: _0x135d0a,
  prefix: _0xcb8f6e,
  isPre: _0x2afc1e,
  isSudo: _0x497734,
  isOwner: _0x44cedc,
  sender: _0x125653,
  isMe: _0x4051a0,
  reply: _0x2649a7
}) => {
  try {
    const _0x2fc373 = (await axios.get("https://mv-visper-full-db.pages.dev/Main/main_var.json")).data;
    const _0x4e4215 = _0x2fc373.mvfree === "true";
    if (!_0x4e4215 && !_0x4051a0 && !_0x2afc1e) {
      await _0x462814.sendMessage(_0x41849b, {
        'react': {
          'text': '❌',
          'key': _0x270c09.key
        }
      });
      return await _0x462814.sendMessage(_0x41849b, {
        'text': "*`You are not a premium user⚠️`*\n\n*Send a message to one of the 2 numbers below and buy Lifetime premium 🎉.*\n\n_Price : 200 LKR ✔️_\n\n*👨‍💻Contact us : 0778500326 , 0722617699*"
      }, {
        'quoted': _0x270c09
      });
    }
    if (config.MV_BLOCK == "true" && !_0x4051a0 && !_0x497734 && !_0x44cedc) {
      await _0x462814.sendMessage(_0x41849b, {
        'react': {
          'text': '❌',
          'key': _0x270c09.key
        }
      });
      return await _0x462814.sendMessage(_0x41849b, {
        'text': "*This command currently only works for the Bot owner. To disable it for others, use the .settings command 👨‍🔧.*"
      }, {
        'quoted': _0x270c09
      });
    }
    if (!_0x135d0a) {
      return await _0x2649a7("*please give me text !..*");
    }
    const _0x26c4af = await pirate_search(_0x135d0a);
    if (!_0x26c4af || !_0x26c4af.result || _0x26c4af.result.length === 0x0) {
      await _0x462814.sendMessage(_0x41849b, {
        'react': {
          'text': '❌',
          'key': _0x270c09.key
        }
      });
      return await _0x462814.sendMessage(_0x41849b, {
        'text': "*No results found ❌*"
      }, {
        'quoted': _0x270c09
      });
    }
    var _0x2a4862 = [];
    for (var _0x577e65 = 0x0; _0x577e65 < _0x26c4af.result.length; _0x577e65++) {
      _0x2a4862.push({
        'title': (_0x26c4af.result[_0x577e65].title || "No result").replace("Sinhala Subtitles", '').replace("Sinhala Subtitle | සිංහල උපසිරැසි සමඟ", ''),
        'description': '',
        'rowId': _0xcb8f6e + "pirateinfo " + _0x26c4af.result[_0x577e65].link
      });
    }
    const _0x8c1eef = [{
      'title': "pirate.lk results",
      'rows': _0x2a4862
    }];
    const _0x1ed00a = {
      'text': "_*PIRATE MOVIE SEARCH RESULTS 🎬*_\n\n*`Input :`* " + _0x135d0a,
      'footer': config.FOOTER,
      'title': "pirate.lk results",
      'buttonText': "*Reply Below Number 🔢*",
      'sections': _0x8c1eef
    };
    const _0x56bb63 = "_*PIRATE MOVIE SEARCH RESULTS 🎬*_\n\n*`Input :`* " + _0x135d0a;
    const _0x18f0e4 = _0x26c4af.result.map((_0x2197ea, _0x20e66f) => {
      const _0x1fa36a = ('' + _0x26c4af.result[_0x20e66f].title).replace(/WEBDL|WEB DL|BluRay HD|BluRay SD|BluRay FHD|Telegram BluRay SD|Telegram BluRay HD|Direct BluRay SD|Direct BluRay HD|Direct BluRay FHD|FHD|HD|SD|Telegram BluRay FHD/gi, '').trim() || "No info";
      return {
        'title': _0x1fa36a,
        'id': _0xcb8f6e + ("pirateinfo " + _0x26c4af.result[_0x20e66f].link)
      };
    });
    const _0xd4311e = {
      'title': "Choose a Movie :)",
      'sections': [{
        'title': "Available Links",
        'rows': _0x18f0e4
      }]
    };
    if (config.BUTTON === 'true') {
      await _0x462814.sendMessage(_0x41849b, {
        'image': {
          'url': config.LOGO
        },
        'caption': _0x56bb63,
        'footer': config.FOOTER,
        'buttons': [{
          'buttonId': "download_list",
          'buttonText': {
            'displayText': "🎥 Select Option"
          },
          'type': 0x4,
          'nativeFlowInfo': {
            'name': "single_select",
            'paramsJson': JSON.stringify(_0xd4311e)
          }
        }],
        'headerType': 0x1,
        'viewOnce': true
      }, {
        'quoted': _0x270c09
      });
    } else {
      await _0x462814.listMessage(_0x41849b, _0x1ed00a, _0x270c09);
    }
  } catch (_0x44c7a9) {
    console.log(_0x44c7a9);
    await _0x462814.sendMessage(_0x41849b, {
      'text': "🚩 *Error !!*"
    }, {
      'quoted': _0x270c09
    });
  }
});
cmd({
  'pattern': "pirateinfo",
  'react': '🎥',
  'desc': "moive downloader",
  'filename': __filename
}, async (_0x2bcf3e, _0x4e5a4a, _0x46e0c5, {
  from: _0x48e806,
  q: _0x194b53,
  isMe: _0x311361,
  prefix: _0x267e31,
  reply: _0x51afa4
}) => {
  try {
    if (!_0x194b53 || !_0x194b53.includes('https://pirate.lk/movies/')) {
      console.log("Invalid input:", _0x194b53);
      return await _0x51afa4("*❗ This is a TV series, please use .tv command.*");
    }
    let _0x1be038 = await pirate_dl(_0x194b53);
    let _0x32f4fc = "*☘️ 𝗧ɪᴛʟᴇ ➮* *_" + (_0x1be038.result.title || 'N/A') + "_*\n\n*📅 𝗥ᴇʟᴇꜱᴇᴅ ᴅᴀᴛᴇ ➮* _" + (_0x1be038.result.date || 'N/A') + "_\n*🌎 𝗖ᴏᴜɴᴛʀʏ ➮* _" + (_0x1be038.result.country || 'N/A') + "_\n*💃 𝗥ᴀᴛɪɴɢ ➮* _" + (_0x1be038.result.imdb || 'N/A') + "_\n*⏰ 𝗥ᴜɴᴛɪᴍᴇ ➮* _" + (_0x1be038.result.runtime || 'N/A') + "_\n*💁‍♂️ 𝗦ᴜʙᴛɪᴛʟᴇ ʙʏ ➮* _" + (_0x1be038.result.director || 'N/A') + "_\n\n";
    if (_0x1be038.length < 0x1) {
      return await _0x2bcf3e.sendMessage(_0x48e806, {
        'text': "erro !"
      }, {
        'quoted': _0x46e0c5
      });
    }
    var _0x2968a0 = [];
    _0x2968a0.push({
      'buttonId': _0x267e31 + "pidet " + _0x194b53,
      'buttonText': {
        'displayText': "Details Card\n"
      },
      'type': 0x1
    });
    _0x1be038.result.dl_links.map(_0x279517 => {
      _0x2968a0.push({
        'buttonId': _0x267e31 + ("piratedl " + _0x1be038.result.image + '±' + _0x279517.link + '±' + _0x1be038.result.title + "\n\t\n\t*`[ " + _0x279517.quality + " ]`*"),
        'buttonText': {
          'displayText': (_0x279517.size + "  (" + _0x279517.quality + " )").replace("WEBDL", '').replace("WEB DL", '').replace("BluRay HD", '').replace("BluRay SD", '').replace("BluRay FHD", '').replace("Telegram BluRay SD", '').replace("Telegram BluRay HD", '').replace("Direct BluRay SD", '').replace("Direct BluRay HD", '').replace("Direct BluRay FHD", '').replace('FHD', '').replace('HD', '').replace('SD', '').replace("Telegram BluRay FHD", '')
        },
        'type': 0x1
      });
    });
    const _0x2eef73 = {
      'image': {
        'url': _0x1be038.result.image.replace("-200x300", '')
      },
      'caption': _0x32f4fc,
      'footer': config.FOOTER,
      'buttons': _0x2968a0,
      'headerType': 0x4
    };
    const _0x53b0a8 = _0x1be038.result.dl_links.map((_0x4fb134, _0x4ef88f) => {
      const _0x2b847b = (_0x4fb134.size + "  (" + _0x4fb134.quality + " )").replace(/WEBDL|WEB DL|BluRay HD|BluRay SD|BluRay FHD|Telegram BluRay SD|Telegram BluRay HD|Direct BluRay SD|Direct BluRay HD|Direct BluRay FHD|FHD|HD|SD|Telegram BluRay FHD/gi, '').trim() || "No info";
      return {
        'title': _0x2b847b,
        'id': _0x267e31 + ("piratedl " + _0x1be038.result.image + '±' + _0x4fb134.link + '±' + _0x1be038.result.title + "\n\t\n\t*`[ " + _0x4fb134.quality + " ]`*")
      };
    });
    const _0x4e73ba = {
      'title': "🎬 Choose a download link :)",
      'sections': [{
        'title': "Available Links",
        'rows': _0x53b0a8
      }]
    };
    if (config.BUTTON === "true") {
      await _0x2bcf3e.sendMessage(_0x48e806, {
        'image': {
          'url': _0x1be038.result.image.replace("-200x300", '')
        },
        'caption': _0x32f4fc,
        'footer': config.FOOTER,
        'buttons': [{
          'buttonId': _0x267e31 + "pidet " + _0x194b53,
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
            'paramsJson': JSON.stringify(_0x4e73ba)
          }
        }],
        'headerType': 0x1,
        'viewOnce': true
      }, {
        'quoted': _0x46e0c5
      });
    } else {
      return await _0x2bcf3e.buttonMessage(_0x48e806, _0x2eef73, _0x46e0c5);
    }
  } catch (_0x533a34) {
    console.log(_0x533a34);
    await _0x2bcf3e.sendMessage(_0x48e806, {
      'text': "🚩 *Error !!*"
    }, {
      'quoted': _0x46e0c5
    });
  }
});
cmd({
  'pattern': 'piratedl',
  'react': '⬇️',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x3fff41, _0x43ef59, _0xf8078, {
  from: _0xb9948b,
  q: _0x31ccde,
  isMe: _0x2cd98a,
  reply: _0x2c8f65
}) => {
  try {
    if (!_0x31ccde) {
      return await _0x2c8f65("*Please provide a direct URL!*");
    }
    const [_0x342428, _0x4c6fa1, _0x49d764] = _0x31ccde.split('±');
    if (!_0x342428 || !_0x4c6fa1 || !_0x49d764) {
      return await _0x2c8f65("*Invalid format! Please provide input like: imageURL±pixelDrainURL±movieName*");
      return await _0x2c8f65("*❗ Sorry, This download url is incorrect. please send another number..*");
    }
    if (!_0x4c6fa1 || !_0x4c6fa1.includes('https://pixeldrain.com/u/')) {
      console.log("Invalid input:", _0x31ccde);
      return await _0x2c8f65("*❗ Sorry, This download url is incorrect. please send another number..*");
      await _0x3fff41.sendMessage(_0xb9948b, {
        'react': {
          'text': '❌',
          'key': _0x43ef59.key
        }
      });
    }
    const _0x222ed6 = _0x4c6fa1.split("https://pixeldrain.com/u/")[0x1];
    if (!_0x222ed6) {
      return await _0x2c8f65("*Invalid PixelDrain link!*");
    }
    const _0x166c11 = ('https://pixeldrain.com/api/file/' + _0x222ed6).trim();
    await _0x3fff41.sendMessage(_0xb9948b, {
      'react': {
        'text': '⬆️',
        'key': _0x43ef59.key
      }
    });
    const _0x4de8c7 = await _0x3fff41.sendMessage(_0xb9948b, {
      'text': "*Uploading your movie..⬆️*"
    });
    await _0x3fff41.sendMessage(config.JID || _0xb9948b, {
      'document': {
        'url': _0x166c11
      },
      'caption': "*🎬 Name :* " + _0x49d764 + "\n\n" + config.NAME,
      'mimetype': "video/mp4",
      'jpegThumbnail': await (await fetch(_0x342428)).buffer(),
      'fileName': _0x49d764 + ".mp4"
    });
    await _0x3fff41.sendMessage(_0xb9948b, {
      'delete': _0x4de8c7.key
    });
    await _0x3fff41.sendMessage(_0xb9948b, {
      'react': {
        'text': '✔️',
        'key': _0x43ef59.key
      }
    });
    await _0x3fff41.sendMessage(_0xb9948b, {
      'text': "*Movie sent successfully to JID " + config.JID + " ✔*"
    }, {
      'quoted': _0x43ef59
    });
  } catch (_0x5688dc) {
    console.error(_0x5688dc);
    await _0x3fff41.sendMessage(_0xb9948b, {
      'text': "🚩 *Error !!*"
    }, {
      'quoted': _0x43ef59
    });
  }
});
cmd({
  'pattern': 'pidet',
  'react': '🎥',
  'desc': "moive downloader",
  'filename': __filename
}, async (_0x381372, _0xa9adb7, _0x5cfdf1, {
  from: _0x42b2db,
  q: _0x48c892,
  isMe: _0x336e8c,
  reply: _0x5ef5eb
}) => {
  try {
    if (!_0x48c892) {
      return await _0x5ef5eb("*please give me text !..*");
    }
    let _0x5dc334 = await pirate_dl(_0x48c892);
    const _0x4102c4 = (await axios.get("https://mv-visper-full-db.pages.dev/Main/main_var.json")).data;
    let _0x46909d = "*☘️ 𝗧ɪᴛʟᴇ ➮* *_" + (_0x5dc334.result.title || "N/A") + "_*\n\n*📅 𝗥ᴇʟᴇꜱᴇᴅ ᴅᴀᴛᴇ ➮* _" + (_0x5dc334.result.date || 'N/A') + "_\n*🌎 𝗖ᴏᴜɴᴛʀʏ ➮* _" + (_0x5dc334.result.country || 'N/A') + "_\n*💃 𝗥ᴀᴛɪɴɢ ➮* _" + (_0x5dc334.result.imdb || 'N/A') + "_\n*⏰ 𝗥ᴜɴᴛɪᴍᴇ ➮* _" + (_0x5dc334.result.runtime || "N/A") + "_\n*💁‍♂️ 𝗦ᴜʙᴛɪᴛʟᴇ ʙʏ ➮* _" + (_0x5dc334.result.director || "N/A") + "_\n\n> 🌟 Follow us : *" + _0x4102c4.chlink + '*';
    await _0x381372.sendMessage(config.JID || _0x42b2db, {
      'image': {
        'url': _0x5dc334.result.image.replace("-200x300", '')
      },
      'caption': _0x46909d
    });
    await _0x381372.sendMessage(_0x42b2db, {
      'react': {
        'text': '✔️',
        'key': _0x5cfdf1.key
      }
    });
  } catch (_0x1e3e06) {
    console.error("Error fetching or sending", _0x1e3e06);
    await _0x381372.sendMessage(_0x42b2db, "*Error fetching or sending *", {
      'quoted': _0x5cfdf1
    });
  }
});
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
        'text': "*`You are not a premium user⚠️`*\n\n*Send a message to one of the 2 numbers below and buy Lifetime premium 🎉.*\n\n_Price : 200 LKR ✔️_\n\n*👨‍💻Contact us : 0778500326 , 0722617699*"
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
cmd({
  'pattern': "sexfull",
  'react': '🔎',
  'category': 'movie',
  'alias': ["sexmv"],
  'desc': "sexfullmovies.sbs movie search",
  'use': ".sexfull 2025",
  'filename': __filename
}, async (_0x4fbbba, _0x2421d9, _0x3f7a4e, {
  from: _0x4567c8,
  q: _0x2e5581,
  prefix: _0x221dca,
  isPre: _0x2299e1,
  isMe: _0x495052,
  isSudo: _0x13291a,
  isOwner: _0x48878c,
  reply: _0x251eae
}) => {
  try {
    const _0x1d9fc8 = (await axios.get("https://mv-visper-full-db.pages.dev/Main/main_var.json")).data;
    const _0x2b98ee = _0x1d9fc8.mvfree === 'true';
    if (!_0x2b98ee && !_0x495052 && !_0x2299e1) {
      await _0x4fbbba.sendMessage(_0x4567c8, {
        'react': {
          'text': '❌',
          'key': _0x3f7a4e.key
        }
      });
      return await _0x4fbbba.sendMessage(_0x4567c8, {
        'text': "*`You are not a premium user⚠️`*\n\n*Send a message to one of the 2 numbers below and buy Lifetime premium 🎉.*\n\n_Price : 200 LKR ✔️_\n\n*👨‍💻Contact us : 0778500326 , 0722617699*"
      }, {
        'quoted': _0x3f7a4e
      });
    }
    if (config.MV_BLOCK == "true" && !_0x495052 && !_0x13291a && !_0x48878c) {
      await _0x4fbbba.sendMessage(_0x4567c8, {
        'react': {
          'text': '❌',
          'key': _0x3f7a4e.key
        }
      });
      return await _0x4fbbba.sendMessage(_0x4567c8, {
        'text': "*This command currently only works for the Bot owner. To disable it for others, use the .settings command 👨‍🔧.*"
      }, {
        'quoted': _0x3f7a4e
      });
    }
    if (!_0x2e5581) {
      return await _0x251eae("*please give me text !..*");
    }
    const _0x18d8a3 = await xfull_search(_0x2e5581);
    if (!_0x18d8a3 || !_0x18d8a3.data || _0x18d8a3.data.length === 0x0) {
      await _0x4fbbba.sendMessage(_0x4567c8, {
        'react': {
          'text': '❌',
          'key': _0x3f7a4e.key
        }
      });
      return await _0x4fbbba.sendMessage(_0x4567c8, {
        'text': "*No results found ❌*"
      }, {
        'quoted': _0x3f7a4e
      });
    }
    var _0x541be8 = [];
    for (var _0x36f21f = 0x0; _0x36f21f < _0x18d8a3.data.length; _0x36f21f++) {
      _0x541be8.push({
        'title': (_0x18d8a3.data[_0x36f21f].title || "No result").replace("Sinhala Subtitles | සිංහල උපසිරැසි සමඟ", '').replace("Sinhala Subtitle | සිංහල උපසිරැසි සමඟ", ''),
        'description': '',
        'rowId': _0x221dca + "sexdl " + _0x18d8a3.data[_0x36f21f].link
      });
    }
    const _0x2bc5cc = [{
      'title': "sexfullmovies.sbs results",
      'rows': _0x541be8
    }];
    const _0x9be1ee = {
      'text': "_*SEXFULL MOVIE SEARCH RESULTS 🎬*_\n\n*`Input :`* " + _0x2e5581,
      'footer': config.FOOTER,
      'title': "sexfullmovies.sbs results",
      'buttonText': "*Reply Below Number 🔢*",
      'sections': _0x2bc5cc
    };
    const _0x14c408 = "_*SEXFULL MOVIE SEARCH RESULTS 🎬*_\n\n*`Input :`* " + _0x2e5581;
    const _0x2c6f25 = _0x18d8a3.data.map((_0x2db11f, _0x3ae546) => {
      const _0x2fa7b8 = ('' + _0x18d8a3.data[_0x3ae546].title).replace(/WEBDL|WEB DL|BluRay HD|BluRay SD|BluRay FHD|Telegram BluRay SD|Telegram BluRay HD|Direct BluRay SD|Direct BluRay HD|Direct BluRay FHD|FHD|HD|SD|Telegram BluRay FHD/gi, '').trim() || "No info";
      return {
        'title': _0x2fa7b8,
        'id': _0x221dca + ("sexdl " + _0x18d8a3.data[_0x3ae546].link)
      };
    });
    const _0x5a9302 = {
      'title': "Choose a Movie :)",
      'sections': [{
        'title': "Available Links",
        'rows': _0x2c6f25
      }]
    };
    if (config.BUTTON === "true") {
      await _0x4fbbba.sendMessage(_0x4567c8, {
        'image': {
          'url': config.LOGO
        },
        'caption': _0x14c408,
        'footer': config.FOOTER,
        'buttons': [{
          'buttonId': 'download_list',
          'buttonText': {
            'displayText': "🎥 Select Option"
          },
          'type': 0x4,
          'nativeFlowInfo': {
            'name': "single_select",
            'paramsJson': JSON.stringify(_0x5a9302)
          }
        }],
        'headerType': 0x1,
        'viewOnce': true
      }, {
        'quoted': _0x3f7a4e
      });
    } else {
      await _0x4fbbba.listMessage(_0x4567c8, _0x9be1ee, _0x3f7a4e);
    }
  } catch (_0x12eee2) {
    console.log(_0x12eee2);
    await _0x4fbbba.sendMessage(_0x4567c8, {
      'text': "🚩 *Error !!*"
    }, {
      'quoted': _0x3f7a4e
    });
  }
});
cmd({
  'pattern': "sexdl",
  'react': '🎥',
  'desc': "moive downloader",
  'filename': __filename
}, async (_0x6e89ef, _0x5799ef, _0x2ebaf1, {
  from: _0xff5943,
  q: _0x10d982,
  isMe: _0x3552f0,
  prefix: _0x15b39e,
  reply: _0x586583
}) => {
  try {
    let _0x235f7f = await xfull_dl(_0x10d982);
    let _0x38e7a0 = "*☘️ 𝗧ɪᴛʟᴇ ➮* *_" + (_0x235f7f.data.title || 'N/A') + "_*\n\n*📅 𝗥ᴇʟᴇꜱᴇᴅ ᴅᴀᴛᴇ ➮* _" + (_0x235f7f.data.date || "N/A") + "_\n*🌎 𝗖ᴏᴜɴᴛʀʏ ➮* _" + (_0x235f7f.data.country || 'N/A') + "_\n*💃 𝗥ᴀᴛɪɴɢ ➮* _" + (_0x235f7f.data.imdb || "N/A") + "_\n*⏰ 𝗥ᴜɴᴛɪᴍᴇ ➮* _" + (_0x235f7f.data.runtime || "N/A") + "_\n*💁‍♂️ 𝗦ᴜʙᴛɪᴛʟᴇ ʙʏ ➮* _" + (_0x235f7f.data.subtitle_author || "N/A") + "_\n*🎭 𝗚ᴇɴᴀʀᴇꜱ ➮* " + (_0x235f7f.data.genres.join(", ") || "N/A") + "\n";
    if (_0x235f7f.length < 0x1) {
      return await _0x6e89ef.sendMessage(_0xff5943, {
        'text': "erro !"
      }, {
        'quoted': _0x2ebaf1
      });
    }
    var _0x14e3f1 = [];
    _0x14e3f1.push({
      'buttonId': _0x15b39e + "ctdetails " + _0x10d982,
      'buttonText': {
        'displayText': "_Send Details_"
      },
      'type': 0x1
    }, {
      'buttonId': _0x15b39e + "ctdetails " + _0x10d982,
      'buttonText': {
        'displayText': "_Send Images_\n"
      },
      'type': 0x1
    });
    _0x235f7f.dl_links.map(_0x125d4f => {
      _0x14e3f1.push({
        'buttonId': _0x15b39e + ("sexdll " + _0x235f7f.data.image + '±' + _0x125d4f.link + '±' + _0x235f7f.data.title + "\n\t\n\t*`[ " + _0x125d4f.quality + " ]`*"),
        'buttonText': {
          'displayText': ('' + _0x125d4f.quality).replace("WEBDL", '').replace("WEB DL", '').replace("BluRay HD", '').replace("BluRay SD", '').replace("BluRay FHD", '').replace("Telegram BluRay SD", '').replace("Telegram BluRay HD", '').replace("Direct BluRay SD", '').replace("Direct BluRay HD", '').replace("Direct BluRay FHD", '').replace("FHD", '').replace('HD', '').replace('SD', '').replace("Telegram BluRay FHD", '')
        },
        'type': 0x1
      });
    });
    const _0x4b5e66 = {
      'image': {
        'url': _0x235f7f.data.image.replace("-200x300", '')
      },
      'caption': _0x38e7a0,
      'footer': config.FOOTER,
      'buttons': _0x14e3f1,
      'headerType': 0x4
    };
    const _0xd2efd0 = _0x235f7f.dl_links.map((_0x2331b3, _0x50021d) => {
      const _0x2fd815 = ('' + _0x2331b3.quality).replace(/WEBDL|WEB DL|BluRay HD|BluRay SD|BluRay FHD|Telegram BluRay SD|Telegram BluRay HD|Direct BluRay SD|Direct BluRay HD|Direct BluRay FHD|FHD|HD|SD|Telegram BluRay FHD/gi, '').trim() || "No info";
      return {
        'title': _0x2fd815,
        'id': _0x15b39e + ("sexdll " + _0x235f7f.data.image + '±' + _0x2331b3.link + '±' + _0x235f7f.data.title + "\n\t\n\t*`[ " + _0x2331b3.quality + " ]`*")
      };
    });
    const _0x3b29f9 = {
      'title': "🎬 Choose a download link :)",
      'sections': [{
        'title': "Available Links",
        'rows': _0xd2efd0
      }]
    };
    if (config.BUTTON === "true") {
      await _0x6e89ef.sendMessage(_0xff5943, {
        'image': {
          'url': _0x235f7f.data.image.replace('-200x300', '')
        },
        'caption': _0x38e7a0,
        'footer': config.FOOTER,
        'buttons': [{
          'buttonId': _0x15b39e + "dtaqt " + _0x10d982,
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
            'name': 'single_select',
            'paramsJson': JSON.stringify(_0x3b29f9)
          }
        }],
        'headerType': 0x1,
        'viewOnce': true
      }, {
        'quoted': _0x2ebaf1
      });
    } else {
      return await _0x6e89ef.buttonMessage(_0xff5943, _0x4b5e66, _0x2ebaf1);
    }
  } catch (_0x5d394a) {
    console.log(_0x5d394a);
    await _0x6e89ef.sendMessage(_0xff5943, {
      'text': "🚩 *Error !!*"
    }, {
      'quoted': _0x2ebaf1
    });
  }
});
let isUploadingggg = false;
cmd({
  'pattern': "sexdll",
  'react': '⬇️',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x2b0f50, _0xecc182, _0x21ca1f, {
  from: _0x4dc5f1,
  q: _0x5d9a08,
  isMe: _0x535edc,
  reply: _0x9c7f4e
}) => {
  if (!_0x5d9a08) {
    return await _0x9c7f4e("*Please provide a direct URL!*");
  }
  if (isUploadingggg) {
    return await _0x2b0f50.sendMessage(_0x4dc5f1, {
      'text': "*A movie is already being uploaded. Please wait a while before uploading another one.* ⏳",
      'quoted': _0xecc182
    });
  }
  try {
    isUploading = true;
    const _0x5d8514 = _0x5d9a08.split('±')[0x0];
    const _0x3d0fbd = _0x5d9a08.split('±')[0x1];
    const _0x664189 = _0x5d9a08.split('±')[0x2];
    const _0x3f96e8 = '' + _0x3d0fbd;
    const _0x3fb8bb = _0x3f96e8.trim();
    const _0x3b49ea = '' + _0x5d8514;
    await _0x2b0f50.sendMessage(_0x4dc5f1, {
      'react': {
        'text': '⬆️',
        'key': _0xecc182.key
      }
    });
    await _0x2b0f50.sendMessage(_0x4dc5f1, {
      'text': "*Uploading your movie..⬆️*"
    });
    await _0x2b0f50.sendMessage(config.JID || _0x4dc5f1, {
      'document': {
        'url': _0x3fb8bb
      },
      'caption': "*🎬 Name :* " + _0x664189 + "\n\n\n" + config.NAME,
      'mimetype': 'video/mp4',
      'jpegThumbnail': await (await fetch(_0x3b49ea)).buffer(),
      'fileName': _0x664189 + ".mp4"
    });
    await _0x2b0f50.sendMessage(_0x4dc5f1, {
      'react': {
        'text': '✔️',
        'key': _0xecc182.key
      }
    });
    await _0x2b0f50.sendMessage(_0x4dc5f1, {
      'text': "*Movie sent successfully to JID " + config.JID + " ✔*"
    }, {
      'quoted': _0xecc182
    });
  } catch (_0x4e0d5f) {
    console.error("Error fetching or sending:", _0x4e0d5f);
    await _0x2b0f50.sendMessage(_0x4dc5f1, {
      'text': "*Erro fetching this moment retry now ❗*"
    }, {
      'quoted': _0xecc182
    });
  } finally {
    isUploadingggg = false;
  }
});
cmd({
  'pattern': 'ytsmx',
  'react': '🔎',
  'category': "movie",
  'alias': ["cinesub"],
  'desc': "yts.mx movie search",
  'use': ".ytsmx 2025",
  'filename': __filename
}, async (_0x49e522, _0x4c419e, _0x4f2d41, {
  from: _0x4cf96d,
  q: _0x2992e2,
  prefix: _0x81331a,
  isMe: _0x3c1efe,
  isPre: _0x557a48,
  isSudo: _0x40ab7a,
  isOwner: _0x22ebc7,
  reply: _0x2751bb
}) => {
  try {
    const _0x45a6d0 = (await axios.get("https://mv-visper-full-db.pages.dev/Main/main_var.json")).data;
    const _0x5b62a7 = _0x45a6d0.mvfree === "true";
    if (!_0x5b62a7 && !_0x3c1efe && !_0x557a48) {
      await _0x49e522.sendMessage(_0x4cf96d, {
        'react': {
          'text': '❌',
          'key': _0x4f2d41.key
        }
      });
      return await _0x49e522.sendMessage(_0x4cf96d, {
        'text': "*`You are not a premium user⚠️`*\n\n*Send a message to one of the 2 numbers below and buy Lifetime premium 🎉.*\n\n_Price : 200 LKR ✔️_\n\n*👨‍💻Contact us : 0778500326 , 0722617699*"
      }, {
        'quoted': _0x4f2d41
      });
    }
    if (config.MV_BLOCK == "true" && !_0x3c1efe && !_0x40ab7a && !_0x22ebc7) {
      await _0x49e522.sendMessage(_0x4cf96d, {
        'react': {
          'text': '❌',
          'key': _0x4f2d41.key
        }
      });
      return await _0x49e522.sendMessage(_0x4cf96d, {
        'text': "*This command currently only works for the Bot owner. To disable it for others, use the .settings command 👨‍🔧.*"
      }, {
        'quoted': _0x4f2d41
      });
    }
    if (!_0x2992e2) {
      return await _0x2751bb("*please give me text! 👀*");
    }
    let _0x399c38 = await fetchJson('https://yts.mx/api/v2/list_movies.json?query_term=' + _0x2992e2);
    if (!_0x399c38.data || _0x399c38.data.movies.length < 0x1) {
      return await _0x49e522.sendMessage(_0x4cf96d, {
        'text': "🚫 *No movies found!*"
      }, {
        'quoted': _0x4f2d41
      });
    }
    var _0x56b23a = [];
    for (var _0x5d694b = 0x0; _0x5d694b < _0x399c38.data.movies.length; _0x5d694b++) {
      _0x56b23a.push({
        'title': _0x399c38.data.movies[_0x5d694b].title,
        'description': _0x399c38.data.movies[_0x5d694b].synopsis,
        'rowId': _0x81331a + "ytnx " + _0x399c38.data.movies[_0x5d694b].id
      });
    }
    const _0x12ca6b = [{
      'title': "ytsmx.mx results",
      'rows': _0x56b23a
    }];
    const _0xee0c26 = {
      'text': "_*YTSMX MOVIE SEARCH RESULT 🎬*_\n\n*`Input :`* " + _0x2992e2,
      'footer': config.FOOTER,
      'title': "ytsmx.mx results",
      'buttonText': "*Reply Below Number 🔢*",
      'sections': _0x12ca6b
    };
    const _0x298024 = "_*YTSMX MOVIE SEARCH RESULT 🎬*_\n\n*`Input :`* " + _0x2992e2;
    const _0x49efeb = _0x399c38.data.movies.map((_0x20d103, _0x1d7f6b) => {
      const _0x50ea6e = ('' + _0x399c38.data.movies[_0x1d7f6b].title).replace(/WEBDL|WEB DL|BluRay HD|BluRay SD|BluRay FHD|Telegram BluRay SD|Telegram BluRay HD|Direct BluRay SD|Direct BluRay HD|Direct BluRay FHD|FHD|HD|SD|Telegram BluRay FHD/gi, '').trim() || "No info";
      return {
        'title': _0x50ea6e,
        'id': _0x81331a + ("ytnx " + _0x399c38.data.movies[_0x1d7f6b].id)
      };
    });
    const _0x55668b = {
      'title': "Choose a Movie :)",
      'sections': [{
        'title': "Available Links",
        'rows': _0x49efeb
      }]
    };
    if (config.BUTTON === "true") {
      await _0x49e522.sendMessage(_0x4cf96d, {
        'image': {
          'url': config.LOGO
        },
        'caption': _0x298024,
        'footer': config.FOOTER,
        'buttons': [{
          'buttonId': "download_list",
          'buttonText': {
            'displayText': "🎥 Select Option"
          },
          'type': 0x4,
          'nativeFlowInfo': {
            'name': "single_select",
            'paramsJson': JSON.stringify(_0x55668b)
          }
        }],
        'headerType': 0x1,
        'viewOnce': true
      }, {
        'quoted': _0x4f2d41
      });
    } else {
      await _0x49e522.listMessage(_0x4cf96d, _0xee0c26, _0x4f2d41);
    }
  } catch (_0x504a5b) {
    console.log(_0x504a5b);
    await _0x49e522.sendMessage(_0x4cf96d, {
      'text': "🚩 *Error occurred while searching!*"
    }, {
      'quoted': _0x4f2d41
    });
  }
});
cmd({
  'pattern': "ytnx",
  'react': '🎥',
  'desc': "Movie downloader",
  'filename': __filename
}, async (_0x2d41dc, _0x23792c, _0x921126, {
  from: _0x4a3133,
  q: _0x2484f6,
  isMe: _0x1d45da,
  prefix: _0x5b25bb,
  reply: _0x2dbb94
}) => {
  try {
    if (!_0x2484f6) {
      return await _0x2dbb94("*Please provide the movie URL!*");
    }
    const _0xd6efd8 = "https://yts.mx/api/v2/movie_details.json?movie_id=" + _0x2484f6;
    let _0x3382a7 = await fetchJson(_0xd6efd8);
    if (!_0x3382a7.data || !_0x3382a7.data.movie) {
      return await _0x2d41dc.sendMessage(_0x4a3133, {
        'text': "🚫 *No movie details found!*"
      }, {
        'quoted': _0x921126
      });
    }
    let _0x32b6b1 = _0x3382a7.data.movie;
    let _0x5d0ede = "*☘️ 𝗧ɪᴛʟᴇ ➮* *_" + _0x32b6b1.title + "_*\n\n*📅 𝗥ᴇʟᴇꜱᴇᴅ ᴅᴀᴛᴇ ➮* _" + _0x32b6b1.year + "_\n*🌎 𝗖ᴏᴜɴᴛʀʏ ➮* _" + (_0x32b6b1.country || "N/A") + "_\n*💃 𝗥ᴀᴛɪɴɢ ➮* _" + (_0x32b6b1.rating || 'N/A') + "_\n*⏰ 𝗥ᴜɴᴛɪᴍᴇ ➮* _" + (_0x32b6b1.runtime || "N/A") + "_\n*🎭 𝗚ᴇɴᴀʀᴇꜱ ➮* _" + _0x32b6b1.genres.join(", ") + "_\n";
    if (_0x32b6b1.torrents.length < 0x1) {
      return await _0x2d41dc.sendMessage(_0x4a3133, {
        'text': "🚫 *No torrents available for this movie!*"
      }, {
        'quoted': _0x921126
      });
    }
    var _0x53e76d = [];
    _0x53e76d.push({
      'buttonId': _0x5b25bb + "ytsmxdet " + _0x32b6b1.id,
      'buttonText': {
        'displayText': "Details send"
      },
      'type': 0x1
    });
    _0x32b6b1.torrents.forEach(_0x8206ab => {
      _0x53e76d.push({
        'buttonId': _0x5b25bb + ("torren " + _0x32b6b1.small_cover_image + '±' + _0x8206ab.hash + '±' + _0x32b6b1.title + "\n\t\n\t*`[ " + _0x8206ab.quality + " ]`*"),
        'buttonText': {
          'displayText': _0x8206ab.size + " - " + _0x8206ab.quality
        },
        'type': 0x1
      });
    });
    const _0x4c8f2a = {
      'image': {
        'url': _0x32b6b1.large_cover_image
      },
      'caption': _0x5d0ede,
      'footer': config.FOOTER,
      'buttons': _0x53e76d,
      'headerType': 0x4
    };
    const _0x332001 = _0x32b6b1.torrents.map((_0x4ab9a9, _0x372ab6) => {
      const _0x42b23d = (_0x4ab9a9.size + " - " + _0x4ab9a9.quality).replace(/WEBDL|WEB DL|BluRay HD|BluRay SD|BluRay FHD|Telegram BluRay SD|Telegram BluRay HD|Direct BluRay SD|Direct BluRay HD|Direct BluRay FHD|FHD|HD|SD|Telegram BluRay FHD/gi, '').trim() || "No info";
      return {
        'title': _0x42b23d,
        'id': _0x5b25bb + ("torren " + _0x32b6b1.small_cover_image + '±' + _0x4ab9a9.hash + '±±' + _0x32b6b1.title + "\n\t\n\t*`[ " + _0x4ab9a9.quality + " ]`*")
      };
    });
    const _0x356528 = {
      'title': "🎬 Choose a download link :)",
      'sections': [{
        'title': "Available Links",
        'rows': _0x332001
      }]
    };
    if (config.BUTTON === "true") {
      await _0x2d41dc.sendMessage(_0x4a3133, {
        'image': {
          'url': _0x32b6b1.large_cover_image
        },
        'caption': _0x5d0ede,
        'footer': config.FOOTER,
        'buttons': [{
          'buttonId': _0x5b25bb + "ytsmxdet " + _0x32b6b1.id,
          'buttonText': {
            'displayText': "Details Send"
          },
          'type': 0x1
        }, {
          'buttonId': 'download_list',
          'buttonText': {
            'displayText': "🎥 Select Option"
          },
          'type': 0x4,
          'nativeFlowInfo': {
            'name': "single_select",
            'paramsJson': JSON.stringify(_0x356528)
          }
        }],
        'headerType': 0x1,
        'viewOnce': true
      }, {
        'quoted': _0x921126
      });
    } else {
      return await _0x2d41dc.buttonMessage(_0x4a3133, _0x4c8f2a, _0x921126);
    }
  } catch (_0x388e61) {
    console.log(_0x388e61);
    await _0x2d41dc.sendMessage(_0x4a3133, {
      'text': "🚩 *Error occurred while processing!*"
    }, {
      'quoted': _0x921126
    });
  }
});
cmd({
  'pattern': "torren",
  'react': '⬇️',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x9bd3da, _0x5aac11, _0x29f871, {
  from: _0xb137b6,
  q: _0x1f401d,
  reply: _0x32424a
}) => {
  try {
    const _0x2c0855 = _0x1f401d.split('±')[0x0];
    const _0x29b58b = _0x1f401d.split('±')[0x1];
    const _0x31bf2d = _0x1f401d.split('±')[0x2];
    const _0x22deab = config.SEEDR_MAIL;
    const _0x764578 = config.SEEDR_PASSWORD;
    if (!_0x22deab || _0x764578.length === 0x0) {
      await _0x9bd3da.sendMessage(_0xb137b6, {
        'react': {
          'text': '❌',
          'key': _0x5aac11.key
        }
      });
      return await _0x9bd3da.sendMessage(_0xb137b6, {
        'text': "*Please add Seedr account mail and password ❗*\n\n_💁‍♂️ How to create a Seedr account :_\n\n*📍 Use these commands to add a Seedr account for the bot:*\n\n🧩 .setmail *Your Seedr account email*\n\n🧩 .setpassword *Your Seedr account password*"
      }, {
        'quoted': _0x5aac11
      });
    }
    const _0x385a1f = new Seedr();
    try {
      await _0x385a1f.login(_0x22deab, _0x764578);
    } catch (_0x54f733) {
      await _0x9bd3da.sendMessage(_0xb137b6, {
        'react': {
          'text': '❌',
          'key': _0x5aac11.key
        }
      });
      return await _0x9bd3da.sendMessage(_0xb137b6, {
        'text': "*Can't login to Seedr. Try again ❌*"
      }, {
        'quoted': _0x5aac11
      });
    }
    await _0x9bd3da.sendMessage(_0xb137b6, {
      'text': "*Seedr account login sucssess ☑️*"
    });
    const _0x2b719a = 'magnet:?xt=urn:btih:' + _0x29b58b;
    const _0x3a09c9 = await _0x385a1f.addMagnet(_0x2b719a);
    if (!_0x3a09c9 || !_0x3a09c9.result) {
      throw new Error("Failed to add magnet URL.");
    }
    const _0x214996 = await _0x385a1f.getVideos();
    if (!_0x214996 || _0x214996.length === 0x0) {
      throw new Error("No videos found for the provided magnet URL.");
    }
    for (const _0x3bb7fd of _0x214996) {
      for (const _0x11080b of _0x3bb7fd) {
        try {
          const _0x1a5c18 = await _0x385a1f.getFile(_0x11080b.id);
          const _0x6f0938 = _0x1a5c18.url;
          if (!_0x6f0938 || typeof _0x6f0938 !== "string") {
            throw new Error("Invalid download link received.");
          }
          const _0x1b6b11 = '' + _0x2c0855;
          await _0x9bd3da.sendMessage(_0xb137b6, {
            'react': {
              'text': '⬆️',
              'key': _0x5aac11.key
            }
          });
          await _0x9bd3da.sendMessage(_0xb137b6, {
            'text': "*Uploading your movie..⬆️*"
          });
          await _0x9bd3da.sendMessage(config.JID || _0xb137b6, {
            'document': {
              'url': _0x6f0938
            },
            'mimetype': 'video/mp4',
            'fileName': _0x31bf2d + ".mp4",
            'jpegThumbnail': await (await fetch(_0x1b6b11)).buffer(),
            'caption': "*🎬 Name :* " + _0x31bf2d + "\n\n\n" + config.NAME
          });
          await _0x9bd3da.sendMessage(_0xb137b6, {
            'react': {
              'text': '✔️',
              'key': _0x5aac11.key
            }
          });
          await _0x9bd3da.sendMessage(_0xb137b6, {
            'text': "*Movie sent successfully to JID " + config.JID + " ✔*"
          }, {
            'quoted': _0x5aac11
          });
        } catch (_0x4d5a93) {
          console.error("Error uploading file: " + _0x4d5a93.message);
          await _0x9bd3da.sendMessage(_0xb137b6, {
            'text': "❌ Failed to upload file: " + _0x4d5a93.message
          }, {
            'quoted': _0x5aac11
          });
        }
      }
    }
  } catch (_0x3014fd) {
    await _0x9bd3da.sendMessage(_0xb137b6, {
      'react': {
        'text': '❌',
        'key': _0x5aac11.key
      }
    });
    console.error(_0x3014fd);
    _0x32424a("❌ *Error Occurred!!*\n\n" + _0x3014fd.message);
  }
});
cmd({
  'pattern': 'ytsmxdet',
  'react': '🎥',
  'desc': "moive downloader",
  'filename': __filename
}, async (_0x7bd60e, _0x10ceea, _0x293b5f, {
  from: _0x14e1d4,
  q: _0x3ebc3a,
  isMe: _0x5d9daf,
  reply: _0x41dd7c
}) => {
  try {
    if (!_0x3ebc3a) {
      return await _0x41dd7c("*please give me text !..*");
    }
    const _0x596c71 = "https://yts.mx/api/v2/movie_details.json?movie_id=" + _0x3ebc3a;
    let _0x325cf9 = await fetchJson(_0x596c71);
    if (!_0x325cf9.data || !_0x325cf9.data.movie) {
      return await _0x7bd60e.sendMessage(_0x14e1d4, {
        'text': "🚫 *No movie details found!*"
      }, {
        'quoted': _0x293b5f
      });
    }
    let _0x3e54cd = _0x325cf9.data.movie;
    const _0x25e775 = (await axios.get("https://mv-visper-full-db.pages.dev/Main/main_var.json")).data;
    let _0x17148f = "*☘️ 𝗧ɪᴛʟᴇ ➮* *_" + _0x3e54cd.title + "_*\n\n*📅 𝗥ᴇʟᴇꜱᴇᴅ ᴅᴀᴛᴇ ➮* _" + _0x3e54cd.year + "_\n*🌎 𝗖ᴏᴜɴᴛʀʏ ➮* _" + (_0x3e54cd.country || 'N/A') + "_\n*💃 𝗥ᴀᴛɪɴɢ ➮* _" + (_0x3e54cd.rating || "N/A") + "_\n*⏰ 𝗥ᴜɴᴛɪᴍᴇ ➮* _" + (_0x3e54cd.runtime || "N/A") + "_\n*🎭 𝗚ᴇɴᴀʀᴇꜱ ➮* _" + _0x3e54cd.genres.join(", ") + "_\n\n> 🌟 Follow us : *" + _0x25e775.chlink + '*';
    await _0x7bd60e.sendMessage(config.JID || _0x14e1d4, {
      'image': {
        'url': _0x3e54cd.large_cover_image
      },
      'caption': _0x17148f
    });
    await _0x7bd60e.sendMessage(_0x14e1d4, {
      'react': {
        'text': '✔️',
        'key': _0x293b5f.key
      }
    });
  } catch (_0x2bfefc) {
    console.error("Error fetching or sending", _0x2bfefc);
    await _0x7bd60e.sendMessage(_0x14e1d4, "*Error fetching or sending *", {
      'quoted': _0x293b5f
    });
  }
});
cmd({
  'pattern': 'animeheaven',
  'react': '🔎',
  'category': 'movie',
  'desc': "Animeheaven movie search",
  'use': ".animeheaven 2025",
  'filename': __filename
}, async (_0x4b6e83, _0x4a7a26, _0x53d37d, {
  from: _0x2ee9b1,
  q: _0x1292f3,
  prefix: _0x1d6d97,
  isMe: _0x1cf081,
  isSudo: _0x2c998a,
  isPre: _0x3ed6d8,
  isOwner: _0x52eebf,
  reply: _0x8729bc
}) => {
  try {
    const _0x15f693 = (await axios.get("https://mv-visper-full-db.pages.dev/Main/main_var.json")).data;
    const _0xff20de = _0x15f693.mvfree === "true";
    if (!_0xff20de && !_0x1cf081 && !_0x3ed6d8) {
      await _0x4b6e83.sendMessage(_0x2ee9b1, {
        'react': {
          'text': '❌',
          'key': _0x53d37d.key
        }
      });
      return await _0x4b6e83.sendMessage(_0x2ee9b1, {
        'text': "*`You are not a premium user⚠️`*\n\n*Send a message to one of the 2 numbers below and buy Lifetime premium 🎉.*\n\n_Price : 200 LKR ✔️_\n\n*👨‍💻Contact us : 0778500326 , 0722617699*"
      }, {
        'quoted': _0x53d37d
      });
    }
    if (config.MV_BLOCK == "true" && !_0x1cf081 && !_0x2c998a && !_0x52eebf) {
      await _0x4b6e83.sendMessage(_0x2ee9b1, {
        'react': {
          'text': '❌',
          'key': _0x53d37d.key
        }
      });
      return await _0x4b6e83.sendMessage(_0x2ee9b1, {
        'text': "*This command currently only works for the Bot owner. To disable it for others, use the .settings command 👨‍🔧.*"
      }, {
        'quoted': _0x53d37d
      });
    }
    if (!_0x1292f3) {
      return await _0x8729bc("*please give me text !..*");
    }
    let _0x3277da = await search(_0x1292f3);
    var _0x11342b = [];
    for (var _0x47d615 = 0x0; _0x47d615 < _0x3277da.length; _0x47d615++) {
      _0x11342b.push({
        'title': _0x3277da[_0x47d615].title,
        'description': '',
        'rowId': _0x1d6d97 + ("animeheinfo " + _0x3277da[_0x47d615].link)
      });
    }
    const _0x3abf69 = [{
      'title': "https://animeheaven.me results",
      'rows': _0x11342b
    }];
    const _0x3b0bb8 = {
      'text': "*_ANIMEHEAVEN MOVIE SEARCH RESULT 🎬_*\n\n*`Input :`* " + _0x1292f3,
      'footer': config.FOOTER,
      'title': "https://animeheaven.me results",
      'buttonText': "*Reply Below Number 🔢*",
      'sections': _0x3abf69
    };
    const _0x173a99 = "*_ANIMEHEAVEN MOVIE SEARCH RESULT 🎬_*\n\n*`Input :`* " + _0x1292f3;
    const _0x28caa9 = _0x3277da.map((_0x53922f, _0x162e96) => {
      const _0xff9a1e = ('' + _0x3277da[_0x162e96].title).replace(/WEBDL|WEB DL|BluRay HD|BluRay SD|BluRay FHD|Telegram BluRay SD|Telegram BluRay HD|Direct BluRay SD|Direct BluRay HD|Direct BluRay FHD|FHD|HD|SD|Telegram BluRay FHD/gi, '').trim() || "No info";
      return {
        'title': _0xff9a1e,
        'id': _0x1d6d97 + ("animeheinfo " + _0x3277da[_0x162e96].link)
      };
    });
    const _0x273b56 = {
      'title': "Choose a Movie :)",
      'sections': [{
        'title': "Available Links",
        'rows': _0x28caa9
      }]
    };
    if (config.BUTTON === 'true') {
      await _0x4b6e83.sendMessage(_0x2ee9b1, {
        'image': {
          'url': config.LOGO
        },
        'caption': _0x173a99,
        'footer': config.FOOTER,
        'buttons': [{
          'buttonId': "download_list",
          'buttonText': {
            'displayText': "🎥 Select Option"
          },
          'type': 0x4,
          'nativeFlowInfo': {
            'name': "single_select",
            'paramsJson': JSON.stringify(_0x273b56)
          }
        }],
        'headerType': 0x1,
        'viewOnce': true
      }, {
        'quoted': _0x53d37d
      });
    } else {
      await _0x4b6e83.listMessage(_0x2ee9b1, _0x3b0bb8, _0x53d37d);
    }
  } catch (_0x410bc2) {
    console.log(_0x410bc2);
    await _0x4b6e83.sendMessage(_0x2ee9b1, {
      'text': "🚩 *Error !!*"
    }, {
      'quoted': _0x53d37d
    });
  }
});
cmd({
  'pattern': 'animeheinfo',
  'react': '🎥',
  'desc': "moive downloader",
  'filename': __filename
}, async (_0x1b8743, _0xd6e355, _0x524446, {
  from: _0x206d43,
  q: _0x950096,
  isMe: _0x55606e,
  isSudo: _0x4e124f,
  isOwner: _0xba1d61,
  prefix: _0x321869,
  reply: _0x54d588
}) => {
  try {
    let _0x242a66 = await fetchJson("https://sadas-animeheaven-get-ep.vercel.app/api/episodes?url=" + _0x950096);
    let _0x1e2e70 = "*☘️ 𝗧ɪᴛʟᴇ ➮* *_" + (_0x242a66.info.title || "N/A") + "_*\n\n*📅 𝗥ᴇʟᴇꜱᴇᴅ ᴅᴀᴛᴇ ➮* _" + (_0x242a66.info.date || "N/A") + "_\n*💃 𝗥ᴀᴛɪɴɢ ➮* _" + (_0x242a66.info.imdb || 'N/A') + '_';
    if (_0x242a66.length < 0x1) {
      return await _0x1b8743.sendMessage(_0x206d43, {
        'text': "erro !"
      }, {
        'quoted': _0x524446
      });
    }
    var _0x732937 = [];
    _0x732937.push({
      'buttonId': _0x321869 + ("hed " + _0x950096),
      'buttonText': {
        'displayText': "Details send"
      },
      'type': 0x1
    });
    _0x242a66.episodes.map(_0x3f0e27 => {
      _0x732937.push({
        'buttonId': _0x321869 + ("directdlanime " + _0x242a66.info.image + '±' + _0x3f0e27.link + '±' + _0x242a66.info.title),
        'buttonText': {
          'displayText': '' + _0x3f0e27.episode
        },
        'type': 0x1
      });
    });
    const _0x4cec38 = {
      'image': {
        'url': _0x242a66.info.image
      },
      'caption': _0x1e2e70,
      'footer': config.FOOTER,
      'buttons': _0x732937,
      'headerType': 0x4
    };
    const _0x12fdbf = _0x242a66.episodes.map((_0x2cdf1a, _0x4ca53d) => {
      const _0x5651b0 = ('' + _0x2cdf1a.episode).replace(/WEBDL|WEB DL|BluRay HD|BluRay SD|BluRay FHD|Telegram BluRay SD|Telegram BluRay HD|Direct BluRay SD|Direct BluRay HD|Direct BluRay FHD|FHD|HD|SD|Telegram BluRay FHD/gi, '').trim() || "No info";
      return {
        'title': _0x5651b0,
        'id': _0x321869 + ("directdlanime " + _0x242a66.info.image + '±' + _0x2cdf1a.link + '±' + _0x242a66.info.title)
      };
    });
    const _0x43cfdf = {
      'title': "🎬 Choose a download link:",
      'sections': [{
        'title': "Available Links",
        'rows': _0x12fdbf
      }]
    };
    if (config.BUTTON === "true") {
      await _0x1b8743.sendMessage(_0x206d43, {
        'image': {
          'url': _0x242a66.info.image
        },
        'caption': _0x1e2e70,
        'footer': config.FOOTER,
        'buttons': [{
          'buttonId': _0x321869 + "hed " + _0x950096,
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
            'name': 'single_select',
            'paramsJson': JSON.stringify(_0x43cfdf)
          }
        }],
        'headerType': 0x1,
        'viewOnce': true
      }, {
        'quoted': _0x524446
      });
    } else {
      return await _0x1b8743.buttonMessage(_0x206d43, _0x4cec38, _0x524446);
    }
  } catch (_0x12156d) {
    console.log(_0x12156d);
    await _0x1b8743.sendMessage(_0x206d43, {
      'text': "🚩 *Error !!*"
    }, {
      'quoted': _0x524446
    });
  }
});
cmd({
  'pattern': "directdlanime",
  'react': '🍟',
  'alias': ['dn'],
  'desc': "Direct Downloader",
  'category': 'movie',
  'use': ".download < Direct Link >",
  'dontAddCommandList': false,
  'filename': __filename
}, async (_0x389c42, _0x1c0807, _0x4b3f4c, {
  from: _0x23b66a,
  q: _0x559a49,
  sender: _0x58c7e6,
  reply: _0x4615bb
}) => {
  try {
    const [_0x379faf, _0xb1e791, _0x16c6f8] = _0x559a49.split('±');
    if (!_0x379faf || !_0xb1e791 || !_0x16c6f8) {
      return _0x4615bb("❌ Format Error. Use: `image±link±title`");
    }
    const _0x2bf403 = _0xb1e791.split("id=")[0x1];
    if (!_0x2bf403) {
      return _0x4615bb("❗ Invalid link, missing ID.");
    }
    const _0x55d98f = await fetchJson("https://sadas-anime-dl.vercel.app/api/download-links?id=" + _0x2bf403);
    console.log(_0x55d98f);
    if (!_0x55d98f.downloadUrl || typeof _0x55d98f.downloadUrl !== 'string') {
      return _0x4615bb("❌ Download link not found or malformed from API.");
    }
    const _0x3bb7cc = _0x55d98f.downloadUrl.trim();
    const _0x55ab0e = /^(https?:\/\/[^\s]+)/;
    if (!_0x55ab0e.test(_0x3bb7cc)) {
      return _0x4615bb("❗ දීලා තියෙන URL එක වැරදි. කරුණාකර link එක හොඳින් බලන්න.");
    }
    await _0x389c42.sendMessage(_0x23b66a, {
      'react': {
        'text': '⬇️',
        'key': _0x1c0807.key
      }
    });
    const _0x44fd99 = await axios.get(_0x3bb7cc, {
      'headers': {
        'User-Agent': "Mozilla/5.0",
        'Accept': "*/*",
        'Referer': "https://animeheaven.me/",
        'Origin': 'https://animeheaven.me'
      }
    });
    await _0x389c42.sendMessage(config.JID || _0x23b66a, {
      'document': {
        'url': _0x44fd99.data
      },
      'fileName': _0x16c6f8 + ".mp4",
      'jpegThumbnail': await (await fetch(_0x379faf)).buffer(),
      'mimetype': 'video/mp4',
      'caption': "*🎬 Name :* " + _0x16c6f8 + "\n\n" + config.NAME
    });
    await _0x389c42.sendMessage(_0x23b66a, {
      'react': {
        'text': '✔️',
        'key': _0x1c0807.key
      }
    });
    await _0x389c42.sendMessage(_0x23b66a, {
      'text': "*Movie sent successfully to JID " + (config.JID || _0x23b66a) + " ✔*"
    }, {
      'quoted': _0x1c0807
    });
  } catch (_0x42bf17) {
    console.error(_0x42bf17);
    _0x4615bb("❗ Error downloading file: " + _0x42bf17.message);
  }
});
cmd({
  'pattern': "hed",
  'react': '🎥',
  'desc': "moive downloader",
  'filename': __filename
}, async (_0x68739b, _0x519008, _0x5936f9, {
  from: _0x2e2b99,
  q: _0x2731db,
  isMe: _0x184b2e,
  reply: _0x19414e
}) => {
  try {
    if (!_0x2731db) {
      return await _0x19414e("*please give me text !..*");
    }
    let _0x27fcdd = await getep(_0x2731db);
    const _0x5ef16f = (await axios.get("https://mv-visper-full-db.pages.dev/Main/main_var.json")).data;
    let _0x5720a3 = "*☘️ 𝗧ɪᴛʟᴇ ➮* *_" + (_0x27fcdd.result.title || "N/A") + "_*\n\n*📅 𝗥ᴇʟᴇꜱᴇᴅ ᴅᴀᴛᴇ ➮* _" + (_0x27fcdd.result.date || "N/A") + "_\n*💃 𝗥ᴀᴛɪɴɢ ➮* _" + (_0x27fcdd.result.imdb || "N/A") + "_\n\n> 🌟 Follow us : *" + _0x5ef16f.chlink + '*';
    await _0x68739b.sendMessage(config.JID || _0x2e2b99, {
      'image': {
        'url': _0x27fcdd.result.image
      },
      'caption': _0x5720a3
    });
    await _0x68739b.sendMessage(_0x2e2b99, {
      'react': {
        'text': '✔️',
        'key': _0x5936f9.key
      }
    });
  } catch (_0x3470d6) {
    console.error("Error fetching or sending", _0x3470d6);
    await _0x68739b.sendMessage(_0x2e2b99, "*Error fetching or sending *", {
      'quoted': _0x5936f9
    });
  }
});
cmd({
  'pattern': "slanimetv",
  'react': '🔎',
  'category': "movie",
  'alias': ["ctv"],
  'desc': "cinesubz.co tv shows search",
  'use': ".cinetv  2025",
  'filename': __filename
}, async (_0x285886, _0x2da7bd, _0x4a6b83, {
  from: _0x402893,
  q: _0xa6261e,
  prefix: _0x3dc581,
  isMe: _0x1c5f97,
  reply: _0x20790e
}) => {
  try {
    const _0x45a131 = (await axios.get('https://mv-visper-full-db.pages.dev/Main/main_var.json')).data;
    const _0x253e79 = _0x45a131.mvfree === "true";
    if (!_0x253e79 && !_0x1c5f97 && !isPre) {
      await _0x285886.sendMessage(_0x402893, {
        'react': {
          'text': '❌',
          'key': _0x4a6b83.key
        }
      });
      return await _0x285886.sendMessage(_0x402893, {
        'text': "*`You are not a premium user⚠️`*\n\n*Send a message to one of the 2 numbers below and buy Lifetime premium 🎉.*\n\n_Price : 200 LKR ✔️_\n\n*👨‍💻Contact us : 0778500326 , 0722617699*"
      }, {
        'quoted': _0x4a6b83
      });
    }
    if (config.MV_BLOCK == 'true' && !_0x1c5f97 && !isSudo && !isOwner) {
      await _0x285886.sendMessage(_0x402893, {
        'react': {
          'text': '❌',
          'key': _0x4a6b83.key
        }
      });
      return await _0x285886.sendMessage(_0x402893, {
        'text': "*This command currently only works for the Bot owner. To disable it for others, use the .settings command 👨‍🔧.*"
      }, {
        'quoted': _0x4a6b83
      });
    }
    if (!_0xa6261e) {
      return await _0x20790e("*please give me tv shows name !..*");
    }
    const _0x201019 = await slanimeclub_search(_0xa6261e);
    if (!_0x201019 || !_0x201019.data || _0x201019.data.length === 0x0) {
      await _0x285886.sendMessage(_0x402893, {
        'react': {
          'text': '❌',
          'key': _0x4a6b83.key
        }
      });
      return await _0x285886.sendMessage(_0x402893, {
        'text': "*No results found ❌*"
      }, {
        'quoted': _0x4a6b83
      });
    }
    var _0x31597b = [];
    for (var _0x50e430 = 0x0; _0x50e430 < _0x201019.data.length; _0x50e430++) {
      _0x31597b.push({
        'title': _0x201019.data[_0x50e430].title.replace("Sinhala Subtitles | සිංහල උපසිරැසි සමඟ", '').replace("Sinhala Subtitle | සිංහල උපසිරැසි සමඟ", '') || "Result not found",
        'description': '',
        'rowId': _0x3dc581 + "slanimeinfo " + _0x201019.data[_0x50e430].link
      });
    }
    const _0x1e87e3 = [{
      'title': "slanimeclub.co results",
      'rows': _0x31597b
    }];
    const _0x416c9e = {
      'text': "_*SLANIME TV SHOWS RESULTS 📺*_\n\n*`Input :`* " + _0xa6261e,
      'footer': config.FOOTER,
      'title': "slanimeclub.co results",
      'buttonText': "*Reply Below Number 🔢*",
      'sections': _0x1e87e3
    };
    const _0x3d00cd = "_*SLANIME TV SHOWS RESULTS 📺*_\n\n*`Input :` " + _0xa6261e;
    const _0x2bc4c7 = _0x201019.data.map((_0x51f4d5, _0x34fee9) => {
      const _0x3012ba = ('' + _0x201019.data[_0x34fee9].title).replace(/WEBDL|WEB DL|BluRay HD|BluRay SD|BluRay FHD|Telegram BluRay SD|Telegram BluRay HD|Direct BluRay SD|Direct BluRay HD|Direct BluRay FHD|FHD|HD|SD|Telegram BluRay FHD/gi, '').trim() || "No info";
      return {
        'title': _0x3012ba,
        'id': _0x3dc581 + ("slanimeinfo " + _0x201019.data[_0x34fee9].link)
      };
    });
    const _0x3491fb = {
      'title': "Choose a Movie :)",
      'sections': [{
        'title': "Available Links",
        'rows': _0x2bc4c7
      }]
    };
    if (config.BUTTON === "true") {
      await _0x285886.sendMessage(_0x402893, {
        'image': {
          'url': config.LOGO
        },
        'caption': _0x3d00cd,
        'footer': config.FOOTER,
        'buttons': [{
          'buttonId': "download_list",
          'buttonText': {
            'displayText': "🎥 Select Option"
          },
          'type': 0x4,
          'nativeFlowInfo': {
            'name': "single_select",
            'paramsJson': JSON.stringify(_0x3491fb)
          }
        }],
        'headerType': 0x1,
        'viewOnce': true
      }, {
        'quoted': _0x4a6b83
      });
    } else {
      await _0x285886.listMessage(_0x402893, _0x416c9e, _0x4a6b83);
    }
  } catch (_0x4a5da3) {
    console.log(_0x4a5da3);
    await _0x285886.sendMessage(_0x402893, {
      'text': "🚩 *Error !!*"
    }, {
      'quoted': _0x4a6b83
    });
  }
});
cmd({
  'pattern': "slanimeinfo",
  'react': '🎥',
  'desc': "moive downloader",
  'filename': __filename
}, async (_0x46c429, _0x1c804f, _0x258f3d, {
  from: _0x5b1c8c,
  q: _0x580174,
  isMe: _0x291dfe,
  prefix: _0x55bd3c,
  reply: _0x526de2
}) => {
  try {
    let _0x415277 = await slanimeclub_ep(_0x580174);
    console.log("Scraped Data:", _0x415277);
    let _0x17478b = "*🍟 Title :* _" + (_0x415277.title || "N/A") + "_\n\n*📅 First air date :* _" + (_0x415277.first_air_date || "N/A") + "_\n*📅 Last air date :* _" + (_0x415277.last_air_date || "N/A") + "_\n*🔢 Ep count :* _" + (_0x415277.episode_count || "N/A") + "_\n*🏆 Tmdb vote :* _" + (_0x415277.tmdbRate || "N/A") + "_\n*🥇Tmdb vote count :* _" + (_0x415277.tmdbVoteCount || "N/A") + "_\n*💁‍♂️ Director :* _" + (_0x415277.director || "N/A") + "_\n*🎭 Genres :* _" + (_0x415277.category || "N/A") + "_\n";
    if (_0x415277.length < 0x1) {
      return await _0x46c429.sendMessage(_0x5b1c8c, {
        'text': "erro !"
      }, {
        'quoted': _0x258f3d
      });
    }
    var _0x53c407 = [];
    _0x53c407.push({
      'buttonId': _0x55bd3c + "slanimedet " + _0x580174,
      'buttonText': {
        'displayText': "Send Details"
      },
      'type': 0x1
    });
    _0x415277.episodes.map(_0x317516 => {
      _0x53c407.push({
        'buttonId': _0x55bd3c + ("slanimedl " + _0x317516.link + '&' + _0x415277.title + '&' + _0x415277.mainImage + '&' + _0x317516.number),
        'buttonText': {
          'displayText': '' + _0x317516.number
        },
        'type': 0x1
      });
    });
    const _0x47fa7c = {
      'image': {
        'url': _0x415277.mainImage.replace("-200x300", '')
      },
      'caption': _0x17478b,
      'footer': config.FOOTER,
      'buttons': _0x53c407,
      'headerType': 0x4
    };
    const _0x228bc3 = _0x415277.episodes.map((_0x310915, _0x463d34) => {
      const _0x1c6c5e = ('' + _0x310915.number).replace(/WEBDL|WEB DL|BluRay HD|BluRay SD|BluRay FHD|Telegram BluRay SD|Telegram BluRay HD|Direct BluRay SD|Direct BluRay HD|Direct BluRay FHD|FHD|HD|SD|Telegram BluRay FHD/gi, '').trim() || "No info";
      return {
        'title': _0x1c6c5e,
        'id': _0x55bd3c + ("slanimedl " + _0x310915.link + '&' + _0x415277.title + '&' + _0x415277.mainImage + '&' + _0x310915.number)
      };
    });
    const _0x1ded87 = {
      'title': "🎬 Choose a epishodes",
      'sections': [{
        'title': "Available Links",
        'rows': _0x228bc3
      }]
    };
    if (config.BUTTON === "true") {
      await _0x46c429.sendMessage(_0x5b1c8c, {
        'image': {
          'url': _0x415277.mainImage.replace("-200x300", '')
        },
        'caption': _0x17478b,
        'footer': config.FOOTER,
        'buttons': [{
          'buttonId': _0x55bd3c + "slanimedet " + _0x580174,
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
            'name': 'single_select',
            'paramsJson': JSON.stringify(_0x1ded87)
          }
        }],
        'headerType': 0x1,
        'viewOnce': true
      }, {
        'quoted': _0x258f3d
      });
    } else {
      return await _0x46c429.buttonMessage(_0x5b1c8c, _0x47fa7c, _0x258f3d);
    }
  } catch (_0x2ab1ee) {
    console.log(_0x2ab1ee);
    await _0x46c429.sendMessage(_0x5b1c8c, {
      'text': "🚩 *Error !!*"
    }, {
      'quoted': _0x258f3d
    });
  }
});
async function resizeImage(_0x341fe9, _0x3b5e69, _0x1fdbb6) {
  try {
    return await sharp(_0x341fe9).resize(_0x3b5e69, _0x1fdbb6).toBuffer();
  } catch (_0x4e9c22) {
    console.error("Error resizing image:", _0x4e9c22);
    return _0x341fe9;
  }
}
async function GDriveDl(_0x3bf549) {
  let _0x69dbe5;
  let _0x4f92ff = {
    'error': true
  };
  if (!(_0x3bf549 && _0x3bf549.match(/drive\.google/i))) {
    return _0x4f92ff;
  }
  const _0x3cba2a = sizeFormatter({
    'std': "JEDEC",
    'decimalPlaces': 0x2,
    'keepTrailingZeroes': false,
    'render': (_0x5b6db8, _0xfc23f4) => _0x5b6db8 + " " + _0xfc23f4 + 'B'
  });
  try {
    _0x69dbe5 = (_0x3bf549.match(/\/?id=(.+)/i) || _0x3bf549.match(/\/d\/(.*?)\//))[0x1];
    if (!_0x69dbe5) {
      throw "ID Not Found";
    }
    _0x4f92ff = await fetch("https://drive.google.com/uc?id=" + _0x69dbe5 + '&authuser=0&export=download', {
      'method': 'post',
      'headers': {
        'accept-encoding': "gzip, deflate, br",
        'content-length': 0x0,
        'Content-Type': "application/x-www-form-urlencoded;charset=UTF-8",
        'origin': 'https://drive.google.com',
        'user-agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36",
        'x-client-data': "CKG1yQEIkbbJAQiitskBCMS2yQEIqZ3KAQioo8oBGLeYygE=",
        'x-drive-first-party': "DriveWebUi",
        'x-json-requested': "true"
      }
    });
    let {
      fileName: _0x939035,
      sizeBytes: _0x3b0dbe,
      downloadUrl: _0x25d27c
    } = JSON.parse((await _0x4f92ff.text()).slice(0x4));
    if (!_0x25d27c) {
      throw "Link Download Limit!";
    }
    let _0x1a0309 = await fetch(_0x25d27c);
    if (_0x1a0309.status !== 0xc8) {
      return _0x1a0309.statusText;
    }
    return {
      'downloadUrl': _0x25d27c,
      'fileName': _0x939035,
      'fileSize': _0x3cba2a(_0x3b0dbe),
      'mimetype': _0x1a0309.headers.get("content-type")
    };
  } catch (_0x1b1745) {
    console.log(_0x1b1745);
    return _0x4f92ff;
  }
}
cmd({
  'pattern': "slanimedl",
  'react': '🎥',
  'desc': "Movie downloader",
  'filename': __filename
}, async (_0x431c79, _0x33351a, _0x51786d, {
  from: _0x3fbbd1,
  q: _0x2166ea,
  reply: _0x45e983
}) => {
  try {
    if (!_0x2166ea) {
      return _0x45e983("Error: Missing required parameters.");
    }
    const _0x4c8397 = _0x2166ea.split('&');
    if (_0x4c8397.length < 0x4) {
      return _0x45e983("Error: Incorrect command format. Ensure you provide all required details.");
    }
    const [_0x467ee0, _0x53e581, _0x19dae4, _0x32e04a] = _0x4c8397;
    const _0x29c2a1 = await (await fetch(_0x19dae4)).buffer();
    const _0x46286 = await resizeImage(_0x29c2a1, 0xc8, 0xc8);
    const _0x142e46 = await slanimeclub_dl(_0x467ee0);
    if (!_0x142e46?.[0x0]?.["detailLink"]) {
      return _0x45e983("No valid download link found. Please check the URL.");
    }
    const _0x2bb691 = _0x142e46[0x0].detailLink.trim();
    await _0x431c79.sendMessage(_0x3fbbd1, {
      'react': {
        'text': '⬆️',
        'key': _0x51786d.key
      }
    });
    await _0x431c79.sendMessage(_0x3fbbd1, {
      'text': "*Uploading your movie..⬆️*"
    });
    let _0x2bd51d;
    if (_0x2bb691.startsWith("https://slanimeclub.co/")) {
      _0x2bd51d = _0x2bb691;
    } else {
      if (_0x2bb691.startsWith("https://drive.google.com/")) {
        const _0x28a36a = await GDriveDl(_0x2bb691);
        if (_0x28a36a.error) {
          return _0x45e983(_0x28a36a.error);
        }
        _0x2bd51d = _0x28a36a.downloadUrl;
      } else {
        return _0x45e983("Unsupported link type.");
      }
    }
    await _0x431c79.sendMessage(config.JID || _0x3fbbd1, {
      'document': {
        'url': _0x2bd51d
      },
      'caption': "*🎬 Name:* " + _0x53e581 + "\n*EP -* " + _0x32e04a + "\n\n" + config.NAME,
      'mimetype': 'video/mp4',
      'jpegThumbnail': _0x46286,
      'fileName': _0x53e581 + '.mp4'
    });
  } catch (_0xe52396) {
    console.error("Error occurred:", _0xe52396);
    await _0x431c79.sendMessage(_0x3fbbd1, {
      'text': "🚩 *Error !!*"
    }, {
      'quoted': _0x51786d
    });
  }
});
cmd({
  'pattern': "slanimedet",
  'react': '🎥',
  'desc': "moive downloader",
  'filename': __filename
}, async (_0x5429ae, _0x570e52, _0x45fc7c, {
  from: _0x1cafcc,
  q: _0x4f9ef7,
  isMe: _0x4675a4,
  reply: _0x1ca296
}) => {
  try {
    if (!_0x4f9ef7) {
      return await _0x1ca296("*please give me text !..*");
    }
    let _0x130896 = await slanimeclub_ep(_0x4f9ef7);
    const _0x55def0 = (await axios.get("https://mv-visper-full-db.pages.dev/Main/main_var.json")).data;
    let _0x2db6f1 = "*☘️ 𝗧ɪᴛʟᴇ ➮* *_" + (_0x130896.title || "N/A") + "_*\n\n*💃 𝗥ᴀᴛɪɴɢ ➮* _" + (_0x130896.tmdbRate || 'N/A') + "_\n*🎭 𝗚ᴇɴᴀʀᴇꜱ ➮* _" + (_0x130896.category.join(", ") || "N/A") + "_\n\n> 🌟 Follow us : *" + _0x55def0.chlink + '*';
    await _0x5429ae.sendMessage(config.JID || _0x1cafcc, {
      'image': {
        'url': _0x130896.mainImage.replace("-200x300", '')
      },
      'caption': _0x2db6f1
    });
    await _0x5429ae.sendMessage(_0x1cafcc, {
      'react': {
        'text': '✔️',
        'key': _0x45fc7c.key
      }
    });
  } catch (_0x24575b) {
    console.error("Error fetching or sending", _0x24575b);
    await _0x5429ae.sendMessage(_0x1cafcc, "*Error fetching or sending *", {
      'quoted': _0x45fc7c
    });
  }
});
