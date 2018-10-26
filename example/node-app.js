#!/usr/bin/env node

const Web3 = require('../index.js');
const web3 = new Web3();


const URL_PROVIDER = "http://jrpc.testnet.quarkchain.io:38391";
// const URL_PROVIDER = "http://192.168.1.103:38391";

const HASH  = "0x68fB978BF0e4c69bA338D4Fa5A4e5EAA88438AA819e189EC";
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




web3.setProvider(new web3.providers.HttpProvider(URL_PROVIDER));

console.log('init');



console.log("HASH: " + HASH);
console.log("TRUE: " + HASH);
console.log("----------------------------------------------------------------");
//
// var balance = web3.qkc.getBalance(HASH);
// console.log("balance:");
// console.log(balance);
// console.log("----------------------------------------------------------------");



// var getTransactionCount = web3.qkc.getTransactionCount(HASH);
// console.log("getTransactionCount:");
// console.log(getTransactionCount);
// console.log("----------------------------------------------------------------");



// var getAccountData = web3.qkc.getAccountData(HASH, TRUE);
// console.log("getAccountData:");
// console.log(getAccountData);
// console.log("----------------------------------------------------------------");
//@TODO NOT WORKING SERVER


var sendTransaction = web3.qkc.sendTransaction(TRANSACTION);
console.log("sendTransaction:");
console.log(sendTransaction);
console.log("----------------------------------------------------------------");






curl -X POST --data '{
"jsonrpc": "2.0",
    "method": "sendTransaction",
    "params": {
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
},
"id": 1
}'
