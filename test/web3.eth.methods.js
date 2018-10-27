var chai = require('chai');
var assert = chai.assert;
var Qkc3 = require('../index.js');
var qkc3 = new Qkc3();
var u = require('./helpers/test.utils.js');
var FakeHttpProvider = require('./helpers/FakeHttpProvider');

describe('qkc3.eth', function() {
    describe('methods', function() {
        // set dummy providor, to prevent error
        qkc3.setProvider(new FakeHttpProvider());

        u.methodExists(qkc3.eth, 'getBalance');
        u.methodExists(qkc3.eth, 'getStorageAt');
        u.methodExists(qkc3.eth, 'getTransactionCount');
        u.methodExists(qkc3.eth, 'getCode');
        u.methodExists(qkc3.eth, 'sendTransaction');
        u.methodExists(qkc3.eth, 'call');
        u.methodExists(qkc3.eth, 'getBlock');
        u.methodExists(qkc3.eth, 'getTransaction');
        u.methodExists(qkc3.eth, 'getUncle');
        u.methodExists(qkc3.eth, 'getCompilers');
        u.methodExists(qkc3.eth.compile, 'lll');
        u.methodExists(qkc3.eth.compile, 'solidity');
        u.methodExists(qkc3.eth.compile, 'serpent');
        u.methodExists(qkc3.eth, 'getBlockTransactionCount');
        u.methodExists(qkc3.eth, 'getBlockUncleCount');
        u.methodExists(qkc3.eth, 'filter');
        u.methodExists(qkc3.eth, 'contract');

        u.propertyExists(qkc3.eth, 'coinbase');
        u.propertyExists(qkc3.eth, 'mining');
        u.propertyExists(qkc3.eth, 'gasPrice');
        u.propertyExists(qkc3.eth, 'accounts');
        u.propertyExists(qkc3.eth, 'defaultBlock');
        u.propertyExists(qkc3.eth, 'blockNumber');
        u.propertyExists(qkc3.eth, 'protocolVersion');
    });
});

