#!/usr/bin/env node

const Qkc3 = require('../index.js');
const qkc3 = new Qkc3();


const URL_PROVIDER = "http://jrpc.testnet.quarkchain.io:38391";
// const URL_PROVIDER = "http://192.168.1.103:38391";

const HASH  = "0x68fB978BF0e4c69bA338D4Fa5A4e5EAA88438AA819e189EC";
const TRANSACTION_ID  = "0xf6ad8a1096ec8e11a922149e456a28b66cdb2bc6f64198b76f17d526db4e476c18f9ba2c";
const TRUE  = true;
const TRANSACTION  = {
    "nonce": "0x4",
    "gasPrice": "0x2540be400",
    "gas": "0x7530",
    "value": "0xde0b6b3a7640000",
    "data": "0x",
    "fromFullShardId": "0x19e189ec",
    "toFullShardId": "0x18f9ba2c",
    "networkId": "0x3",
    "to": "0x283B50c1326F5C09BA792cc0Ad6C08b5035a36711",
    "v": "0x1a",
    "r": "0x293d59ef8705e34585d646f5899530d52a2d39b312fd061607036152e5fcf589",
    "s": "0x98d2e479720cee2be165703dd97085765adc65b18ed8d9dfbf3d6d7e7fe5a6e"
};




qkc3.setProvider(new qkc3.providers.HttpProvider(URL_PROVIDER));

console.log('init');



console.log("HASH: " + HASH);
console.log("TRUE: " + TRUE);
console.log("----------------------------------------------------------------");

var balance = qkc3.qkc.getBalance(HASH);
console.log("balance:");
console.log(balance);
console.log("----------------------------------------------------------------");


var getTransactionCount = qkc3.qkc.getTransactionCount(HASH);
console.log("getTransactionCount:");
console.log(getTransactionCount);
console.log("----------------------------------------------------------------");

var getCode = qkc3.qkc.getCode(HASH);
console.log("getCode:");
console.log(getCode);
console.log("----------------------------------------------------------------");

var getTransactionReceipt = qkc3.qkc.getTransactionReceipt(TRANSACTION_ID);
console.log("getTransactionReceipt:");
console.log(getTransactionReceipt);
console.log("----------------------------------------------------------------");

/*  @TODO NOT WORKING SERVER
var getAccountData = qkc3.qkc.getAccountData(HASH, TRUE);
console.log("getAccountData:");
console.log(getAccountData);
console.log("----------------------------------------------------------------");*/

/*  @TODO NOT WORKING SERVER
var sendTransaction = qkc3.qkc.sendTransaction(TRANSACTION);
console.log("sendTransaction:");
console.log(sendTransaction);
console.log("----------------------------------------------------------------"); */


/*  @TODO NOT WORKING SERVER
var call = qkc3.qkc.call(TRANSACTION);
console.log("call:");
console.log(call);
console.log("----------------------------------------------------------------"); */



// curl -X POST --data '{
// "jsonrpc": "2.0",
//     "method": "sendTransaction",
//     "params": {
//     "nonce": "0x4",
//         "gasPrice": "0x2540be400",
//         "gas": "0x7530",
//         "value": "0xde0b6b3a7640000",
//         "data": "0x",
//         "fromFullShardId": "0x19e189ec",
//         "toFullShardId": "0x18f9ba2c",
//         "networkId": "0x3",
//         "to": "0x283B50c1326F5C09BA792cc0Ad6C08b5035a36711",
//         "v": "0x1a",
//         "r": "0x293d59ef8705e34585d646f5899530d52a2d39b312fd061607036152e5fcf589",
//         "s": "0x98d2e479720cee2be165703dd97085765adc65b18ed8d9dfbf3d6d7e7fe5a6e"
// },
// "id": 1
// }' http://jrpc.testnet.quarkchain.io:38391
