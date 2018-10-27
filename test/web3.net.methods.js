var chai = require('chai');
var assert = chai.assert;
var Qkc3 = require('../index.js');
var qkc3 = new Qkc3();
var u = require('./helpers/test.utils.js');
var FakeHttpProvider = require('./helpers/FakeHttpProvider');

describe('qkc3.net', function() {
    describe('methods', function() {
        // set dummy providor, to prevent error
        qkc3.setProvider(new FakeHttpProvider());

        u.propertyExists(qkc3.net, 'listening');
        u.propertyExists(qkc3.net, 'peerCount');
    });
});
