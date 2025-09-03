const axios = require("axios");
async function ApiReq(_0x423bc3, _0x44047e) {
  try {
    const _0x68522 = await axios.post(_0x44047e, _0x423bc3, {
      'headers': {
        'Content-Type': "application/json",
        'User-Agent': "PostmanRuntime/7.42.2"
      }
    });
    return _0x68522;
  } catch (_0xb9d453) {
    console.error("Error making the request:", _0xb9d453);
  }
}
async function download(_0xb224) {
  try {
    const _0xa9f90f = {
      'direct': true
    };
    let _0x32d352 = _0xb224;
    const _0x4c377b = [["https://google.com/server5/1:/", "https://drive2.cscloud12.online/server5/"], ['https://google.com/server4/1:/', "https://drive2.cscloud12.online/server4/"], ["https://google.com/server3/1:/", "https://drive2.cscloud12.online/server3/"], ["https://google.com/server21/1:/", "https://drive2.cscloud12.online/server2/"], ["https://google.com/server22/1:/", "https://drive2.cscloud12.online/server2/"], ["https://google.com/server23/1:/", 'https://drive2.cscloud12.online/server2/'], ["https://google.com/server11/1:/", "https://drive2.cscloud12.online/server1/"], ['https://google.com/server12/1:/', "https://drive2.cscloud12.online/server1/"], ["https://google.com/server13/1:/", "https://drive2.cscloud12.online/server1/"]];
    for (const [_0x499a4b, _0x3582ba] of _0x4c377b) {
      if (_0xb224.includes(_0x499a4b)) {
        _0x32d352 = _0xb224.replace(_0x499a4b, _0x3582ba);
        break;
      }
    }
    const _0x24b6b0 = [[".mp4?bot=cscloud2bot&code=", "?ext=mp4&bot=cscloud2bot&code="], [".mp4", "?ext=mp4"], ['.mkv?bot=cscloud2bot&code=', "?ext=mkv&bot=cscloud2bot&code="], [".mkv", "?ext=mkv"], ['.zip', "?ext=zip"]];
    for (const [_0x1bc10f, _0x123f4c] of _0x24b6b0) {
      if (_0x32d352.includes(_0x1bc10f)) {
        _0x32d352 = _0x32d352.replace(_0x1bc10f, _0x123f4c);
      }
    }
    const _0x5e3ca5 = await ApiReq(_0xa9f90f, _0x32d352);
    const _0x4650aa = {
      'result': {
        'direct': _0x5e3ca5.data.url
      }
    };
    return _0x4650aa;
  } catch (_0x563b86) {
    console.error({
      'status': false,
      'error': _0x563b86.message
    });
    return {
      'status': false,
      'error': _0x563b86.message
    };
  }
}
module.exports = download;
