"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = __importDefault(require("commander"));
var api_1 = require("@polkadot/api");
var wsProvider = new api_1.WsProvider('ws://localhost:9944');
var util_crypto_1 = require("@polkadot/util-crypto");
var util_crypto_2 = require("@polkadot/util-crypto");
var UNIT = BigInt(1000000000000000);
function signAndSendWaitFinalized(signer, tx) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    tx.signAndSend(signer, function (result) {
                        if (result.status.isInBlock) {
                            console.log("Write in block: " + result.status.asInBlock);
                        }
                        if (result.status.isFinalized) {
                            console.log("Finalized in: " + result.status.asFinalized);
                            resolve(result);
                        }
                        if (result.status.isDropped ||
                            result.status.isInvalid ||
                            result.status.isUsurped) {
                            console.error('ERROR: Transaction could not be finalized.');
                            reject(result);
                        }
                    });
                })];
        });
    });
}
function queryBalance(api, address) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, now, _b, nonce, balance;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, Promise.all([
                        api.query.timestamp.now(),
                        api.query.system.account(address)
                    ])];
                case 1:
                    _a = _c.sent(), now = _a[0], _b = _a[1], nonce = _b.nonce, balance = _b.data;
                    console.log(now + ": " + address + " balance of " + balance.free + " and a nonce of " + nonce);
                    return [2 /*return*/];
            }
        });
    });
}
function start() {
    return __awaiter(this, void 0, void 0, function () {
        var keyring, alice, bob, dave, addresses, threshold, ss58Prefix, multisigAddr, api, tx1, tx2, tx3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, util_crypto_2.cryptoWaitReady()];
                case 1:
                    _a.sent();
                    keyring = new api_1.Keyring();
                    alice = keyring.addFromUri('//Alice', { name: 'Alice' }, 'sr25519');
                    bob = keyring.addFromUri('//Bob', { name: 'Bob' }, 'sr25519');
                    dave = keyring.addFromUri('//Dave', { name: 'Dave' }, 'sr25519');
                    addresses = [alice.address, bob.address, dave.address];
                    threshold = 2;
                    ss58Prefix = 42;
                    multisigAddr = util_crypto_1.encodeMultiAddress(addresses, threshold, ss58Prefix);
                    console.log('Multisig address generation info');
                    console.log("Addresses: " + addresses.join(' '));
                    console.log("Threshold: " + threshold);
                    console.log("Multisig Address (SS58: " + ss58Prefix + "): " + multisigAddr);
                    return [4 /*yield*/, api_1.ApiPromise.create({ provider: wsProvider })];
                case 2:
                    api = _a.sent();
                    console.log(api.genesisHash.toHex());
                    tx1 = api.tx.balances.transfer(multisigAddr, BigInt(10) * UNIT);
                    return [4 /*yield*/, signAndSendWaitFinalized(alice, tx1)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, queryBalance(api, multisigAddr)];
                case 4:
                    _a.sent();
                    tx2 = api.tx.balances.transfer(multisigAddr, BigInt(20) * UNIT);
                    return [4 /*yield*/, signAndSendWaitFinalized(bob, tx2)];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, queryBalance(api, multisigAddr)];
                case 6:
                    _a.sent();
                    tx3 = api.tx.balances.transfer(dave.address, BigInt(100) * UNIT);
                    return [4 /*yield*/, signAndSendWaitFinalized(alice, tx3)];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, queryBalance(api, dave.address)];
                case 8:
                    _a.sent();
                    process.exit(0);
                    return [2 /*return*/];
            }
        });
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    commander_1.default.command("start").action(start);
                    return [4 /*yield*/, commander_1.default.parseAsync(process.argv)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
//main().catch(console.error).finally(() => process.exit());
main().catch(console.error);
