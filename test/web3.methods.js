var Qkc3 = require('../index.js');
var qkc3 = new Qkc3();
var u = require('./helpers/test.utils.js');
var FakeHttpProvider = require('./helpers/FakeHttpProvider');

describe('qkc3', function() {
    describe('methods', function () {
        // set dummy providor, to prevent error
        qkc3.setProvider(new FakeHttpProvider());

        u.methodExists(qkc3, 'sha3');
        u.methodExists(qkc3, 'toAscii');
        u.methodExists(qkc3, 'fromAscii');
        u.methodExists(qkc3, 'toDecimal');
        u.methodExists(qkc3, 'fromDecimal');
        u.methodExists(qkc3, 'fromWei');
        u.methodExists(qkc3, 'toWei');
        u.methodExists(qkc3, 'toBigNumber');
        u.methodExists(qkc3, 'isAddress');
        u.methodExists(qkc3, 'setProvider');
        u.methodExists(qkc3, 'reset');

        u.propertyExists(qkc3, 'providers');
        u.propertyExists(qkc3, 'eth');
        u.propertyExists(qkc3, 'db');
        u.propertyExists(qkc3, 'shh');
    });
});

