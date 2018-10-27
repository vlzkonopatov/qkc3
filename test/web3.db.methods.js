var chai = require('chai');
var assert = chai.assert;
var Web3 = require('../index.js');
var qkc3 = new Web3();
var u = require('./helpers/test.utils.js');

describe('qkc3.db', function() {
    describe('methods', function() {
        u.methodExists(qkc3.db, 'putHex');
        u.methodExists(qkc3.db, 'getHex');
        u.methodExists(qkc3.db, 'putString');
        u.methodExists(qkc3.db, 'getString');
    });
});

