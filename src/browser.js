const Address = require('./ecc/src/address');
const Aes = require("./ecc/src/aes");
const brainKey = require("./ecc/src/BrainKey");
const hash = require("./ecc/src/hash");
const PrivateKey = require("./ecc/src/PrivateKey");
const PublicKey = require("./ecc/src/PublicKey");
const Signature = require("./ecc/src/signature");
const key = require("./ecc/src/KeyUtils");
const TransactionBuilder = require("./chain/src/TransactionBuilder");
const Login = require("./chain/src/AccountLogin");

const ChainStore = require("./chain/src/ChainStore");
const ChainTypes = require("./chain/src/ChainTypes");
const ObjectId = require("./chain/src/ObjectId");
const NumberUtils = require("./chain/src/NumberUtils");
const TransactionHelper = require("./chain/src/TransactionHelper");
const ChainValidation = require("./chain/src/ChainValidation");
const EmitterInstance = require("./chain/src/EmitterInstance");
const ws = require("./ws/cjs");
const ChainConfig = ws.ChainConfig;
const Apis = ws.Apis;

const decentjslib = {
    Address,
    Aes,
    hash,
    brainKey,
    PrivateKey,
    PublicKey,
    Signature,
    key,
    TransactionBuilder,
    Login,
    ChainStore,
    ChainTypes,
    ObjectId,
    NumberUtils,
    TransactionHelper,
    ChainValidation,
    EmitterInstance,
    ChainConfig,
    Apis
};

if (typeof window !== "undefined") {
    window.decentjslib = decentjslib;
  }
  
  if (typeof global !== "undefined") {
    global.decentjslib = decentjslib;
  }

module.exports = decentjslib;