var chai = require('chai');
var assert = chai.assert;
var Web3 = require('../index.js');
var qkc3 = new Web3();
var u = require('./helpers/test.utils.js');
var FakeHttpProvider = require('./helpers/FakeHttpProvider');

describe('qkc3.net', function() {
    describe('methods', function() {
        // set dummy providor, to prevent error
        qkc3.setProvider(new FakeHttpProvider());
        u.propertyExists(qkc3.personal, 'listAccounts');
        u.methodExists(qkc3.personal, 'newAccount');
        u.methodExists(qkc3.personal, 'unlockAccount');
    });
});
