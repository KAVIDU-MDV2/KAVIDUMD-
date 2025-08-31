const mongoose = require("mongoose");
const fs = require('fs');
const path = require('path');
const config = require("../config");
const databaseFolder = path.join(__dirname, 'database');
if (!fs.existsSync(databaseFolder)) {
  fs.mkdirSync(databaseFolder);
}
const settingsSchema = new mongoose.Schema({
  'OWNER_NUMBER': {
    'type': String,
    'default': "94767054052"
  },
  'MV_SIZE': {
    'type': String,
    'default': '0'
  },
  'NAME': {
    'type': String,
    'default': ''
  },
  'JID': {
    'type': String,
    'default': ''
  },
  'SEEDR_MAIL': {
    'type': String,
    'default': ''
  },
  'SEEDR_PASSWORD': {
    'type': String,
    'default': ''
  },
  'LANG': {
    'type': String,
    'default': 'SI'
  },
  'SUDO': {
    'type': [String],
    'default': []
  },
  'JID_BLOCK': {
    'type': [String],
    'default': []
  },
  'ANTI_BAD': {
    'type': [String],
    'default': []
  },
  'MAX_SIZE': {
    'type': Number,
    'default': 0x96
  },
  'ANTI_CALL': {
    'type': String,
    'default': "false"
  },
  'AUTO_READ_STATUS': {
    'type': String,
    'default': "false"
  },
  'AUTO_BLOCK': {
    'type': String,
    'default': 'false'
  },
  'AUTO_STICKER': {
    'type': String,
    'default': "false"
  },
  'AUTO_VOICE': {
    'type': String,
    'default': "false"
  },
  'AUTO_REACT': {
    'type': String,
    'default': "false"
  },
  'CMD_ONLY_READ': {
    'type': String,
    'default': "true"
  },
  'WORK_TYPE': {
    'type': String,
    'default': "private"
  },
  'XNXX_BLOCK': {
    'type': String,
    'default': "true"
  },
  'AUTO_MSG_READ': {
    'type': String,
    'default': "false"
  },
  'AUTO_TYPING': {
    'type': String,
    'default': "false"
  },
  'AUTO_RECORDING': {
    'type': String,
    'default': 'false'
  },
  'AUTO_WELCOME_LEAVE': {
    'type': [String],
    'default': []
  },
  'ANTI_LINK': {
    'type': String,
    'default': 'false'
  },
  'ANTI_BOT': {
    'type': String,
    'default': "false"
  },
  'ALIVE': {
    'type': String,
    'default': "default"
  },
  'PREFIX': {
    'type': String,
    'default': '.'
  },
  'CHAT_BOT': {
    'type': String,
    'default': "false"
  },
  'ALLWAYS_OFFLINE': {
    'type': String,
    'default': 'false'
  },
  'MV_BLOCK': {
    'type': String,
    'default': "true"
  },
  'BUTTON': {
    'type': String,
    'default': "false"
  },
  'ACTION': {
    'type': String,
    'default': "delete"
  },
  'ANTILINK_ACTION': {
    'type': String,
    'default': "delete"
  },
  'VALUSE': {
    'type': [String],
    'default': []
  },
  'LOGO': {
    'type': String,
    'default': "https://i.ibb.co/FbnCYJ8L/0305d42f67533821.jpg"
  },
  'ANTI_DELETE': {
    'type': String,
    'default': 'off'
  },
  'AUTO_VOICE': {
    'type': String,
    'default': "false"
  },
  'LEAVE_MSG': {
    'type': String,
    'default': ''
  }
});
const Settings = mongoose.model(config.SESSION_ID, settingsSchema);
async function connectdb() {
  try {
    await mongoose.connect('mongodb+srv://ARmfHjXz:YiSbuJIMvWfjA95M@us-east-1.ufsuw.mongodb.net/Sadasnew');
    console.log("Database connected 🛢️");
    const _0xebb694 = await Settings.countDocuments();
    if (_0xebb694 === 0x0) {
      await initializeSettings();
    }
  } catch (_0x10bbe6) {
    console.error(" ├ Database connection error:", _0x10bbe6);
  }
}
async function initializeSettings() {
  const _0x386998 = new Settings();
  await _0x386998.save();
  console.log("Settings initialized ✅");
}
async function updateCMDStore(_0x2ed74d, _0x4a75c9) {
  try {
    const _0x26c310 = path.join(databaseFolder, "data.json");
    const _0xba8617 = fs.existsSync(_0x26c310) ? await readJsonFile(_0x26c310) : [];
    _0xba8617.push({
      [_0x2ed74d]: _0x4a75c9
    });
    await writeJsonFile(_0x26c310, _0xba8617);
    return true;
  } catch (_0x536a56) {
    console.log("Error updating command store:", _0x536a56);
    return false;
  }
}
async function isbtnID(_0x174a66) {
  try {
    const _0x346488 = path.join(databaseFolder, "data.json");
    const _0x5e89fc = fs.existsSync(_0x346488) ? await readJsonFile(_0x346488) : [];
    return _0x5e89fc.some(_0x1ad5e5 => _0x1ad5e5[_0x174a66]);
  } catch (_0x232fcd) {
    return false;
  }
}
async function getCMDStore(_0x591aee) {
  try {
    const _0x71e7d7 = path.join(databaseFolder, "data.json");
    const _0x2e067e = fs.existsSync(_0x71e7d7) ? await readJsonFile(_0x71e7d7) : [];
    const _0x12240a = _0x2e067e.find(_0x64f1ef => _0x64f1ef[_0x591aee]);
    return _0x12240a ? _0x12240a[_0x591aee] : null;
  } catch (_0x4cd96d) {
    console.log("Error retrieving command store:", _0x4cd96d);
    return null;
  }
}
async function input(_0x4819cd, _0x1e0486) {
  const _0x5121a2 = await Settings.findOne();
  if (_0x5121a2 && _0x4819cd in _0x5121a2) {
    _0x5121a2[_0x4819cd] = _0x1e0486;
    await _0x5121a2.save();
  }
}
async function get(_0xbae62) {
  const _0x3183fc = await Settings.findOne();
  return _0x3183fc ? _0x3183fc[_0xbae62] : null;
}
async function updb() {
  const _0x21219 = await Settings.findOne();
  Object.assign(config, _0x21219.toObject());
  console.log("Database updated ✅");
}
async function updfb() {
  await resetSettings();
  console.log("Database reset and initialized ✅");
}
async function upresbtn() {
  await writeJsonFile(path.join(databaseFolder, 'data.json'), []);
  console.log(" ├ Command store reset ✅");
}
function getCmdForCmdId(_0x291701, _0x5e5bd8) {
  const _0x3b7b5b = _0x291701.find(_0x1fa287 => _0x1fa287.cmdId === _0x5e5bd8);
  return _0x3b7b5b ? _0x3b7b5b.cmd : null;
}
async function resetSettings() {
  await Settings.deleteMany();
  await initializeSettings();
}
async function readJsonFile(_0x3737b8) {
  return new Promise((_0x51a2e2, _0x5b79e2) => {
    fs.readFile(_0x3737b8, 'utf8', (_0x33a13f, _0x39955b) => {
      if (_0x33a13f) {
        _0x5b79e2(_0x33a13f);
      } else {
        _0x51a2e2(JSON.parse(_0x39955b));
      }
    });
  });
}
async function getalls() {
  const _0x2d6614 = await Settings.findOne();
  return _0x2d6614 ? _0x2d6614.toJSON() : null;
}
async function writeJsonFile(_0x1f1de6, _0x18d902) {
  return new Promise((_0x467e7e, _0x525cdd) => {
    fs.writeFile(_0x1f1de6, JSON.stringify(_0x18d902, null, 0x2), _0x387b05 => {
      if (_0x387b05) {
        _0x525cdd(_0x387b05);
      } else {
        _0x467e7e(true);
      }
    });
  });
}
connectdb()['catch'](console.error);
module.exports = {
  'updateCMDStore': updateCMDStore,
  'isbtnID': isbtnID,
  'getCMDStore': getCMDStore,
  'input': input,
  'get': get,
  'getalls': getalls,
  'updb': updb,
  'updfb': updfb,
  'upresbtn': upresbtn,
  'getCmdForCmdId': getCmdForCmdId,
  'connectdb': connectdb
};
