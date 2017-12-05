"use strict";

var Address = require('./ecc/src/address');
var Aes = require("./ecc/src/aes");
var brainKey = require("./ecc/src/BrainKey");
var hash = require("./ecc/src/hash");
var PrivateKey = require("./ecc/src/PrivateKey");
var PublicKey = require("./ecc/src/PublicKey");
var Signature = require("./ecc/src/signature");
var key = require("./ecc/src/KeyUtils");
var TransactionBuilder = require("./chain/src/TransactionBuilder");
var Login = require("./chain/src/AccountLogin");

var ChainStore = require("./chain/src/ChainStore");
var ChainTypes = require("./chain/src/ChainTypes");
var ObjectId = require("./chain/src/ObjectId");
var NumberUtils = require("./chain/src/NumberUtils");
var TransactionHelper = require("./chain/src/TransactionHelper");
var ChainValidation = require("./chain/src/ChainValidation");
var EmitterInstance = require("./chain/src/EmitterInstance");
var ws = require("./ws/cjs");
var ChainConfig = ws.ChainConfig;
var Apis = ws.Apis;

var decentjslib = {
    Address: Address,
    Aes: Aes,
    hash: hash,
    brainKey: brainKey,
    PrivateKey: PrivateKey,
    PublicKey: PublicKey,
    Signature: Signature,
    key: key,
    TransactionBuilder: TransactionBuilder,
    Login: Login,
    ChainStore: ChainStore,
    ChainTypes: ChainTypes,
    ObjectId: ObjectId,
    NumberUtils: NumberUtils,
    TransactionHelper: TransactionHelper,
    ChainValidation: ChainValidation,
    EmitterInstance: EmitterInstance,
    ChainConfig: ChainConfig,
    Apis: Apis
};

if (typeof window !== "undefined") {
    window.decentjslib = decentjslib;
}

if (typeof global !== "undefined") {
    global.decentjslib = decentjslib;
}

module.exports = decentjslib;