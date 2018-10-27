var chai = require('chai');
var assert = chai.assert;
var Qkc3 = require('../index.js');
var qkc3 = new Qkc3();
var u = require('./helpers/test.utils.js');

describe('qkc3.shh', function() {
    describe('methods', function() {
        u.methodExists(qkc3.shh, 'version');
        u.methodExists(qkc3.shh, 'info');
        u.methodExists(qkc3.shh, 'setMaxMessageSize');
        u.methodExists(qkc3.shh, 'setMinPoW');
        u.methodExists(qkc3.shh, 'markTrustedPeer');
        u.methodExists(qkc3.shh, 'newKeyPair');
        u.methodExists(qkc3.shh, 'addPrivateKey');
        u.methodExists(qkc3.shh, 'deleteKeyPair');
        u.methodExists(qkc3.shh, 'hasKeyPair');
        u.methodExists(qkc3.shh, 'getPublicKey');
        u.methodExists(qkc3.shh, 'getPrivateKey');
        u.methodExists(qkc3.shh, 'newSymKey');
        u.methodExists(qkc3.shh, 'addSymKey');
        u.methodExists(qkc3.shh, 'generateSymKeyFromPassword');
        u.methodExists(qkc3.shh, 'hasSymKey');
        u.methodExists(qkc3.shh, 'getSymKey');
        u.methodExists(qkc3.shh, 'deleteSymKey');
        u.methodExists(qkc3.shh, 'newMessageFilter');
        u.methodExists(qkc3.shh, 'post');

    });
});

