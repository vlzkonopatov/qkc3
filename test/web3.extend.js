var chai = require('chai');
var assert = chai.assert;
var FakeHttpProvider = require('./helpers/FakeHttpProvider');
var Qkc3 = require('../lib/Qkc3');
var Qkc3 = new Qkc3();


var tests = [{
    properties: [new Qkc3._extend.Property({
        name: 'gasPrice',
        getter: 'eth_gasPrice',
        outputFormatter: Qkc3._extend.formatters.outputBigNumberFormatter
    })]
},{
    methods: [new Qkc3._extend.Method({
        name: 'getBalance',
        call: 'eth_getBalance',
        params: 2,
        inputFormatter: [Qkc3._extend.utils.toAddress, Qkc3._extend.formatters.inputDefaultBlockNumberFormatter],
        outputFormatter: Qkc3._extend.formatters.outputBigNumberFormatter
    })]
},{
    property: 'admin',
    properties: [new Qkc3._extend.Property({
        name: 'gasPrice',
        getter: 'eth_gasPrice',
        outputFormatter: Qkc3._extend.formatters.outputBigNumberFormatter
    })],
    methods: [new Qkc3._extend.Method({
        name: 'getBalance',
        call: 'eth_getBalance',
        params: 2,
        inputFormatter: [Qkc3._extend.utils.toAddress, Qkc3._extend.formatters.inputDefaultBlockNumberFormatter],
        outputFormatter: Qkc3._extend.formatters.outputBigNumberFormatter
    })]
}];

describe('Qkc3', function () {
    describe('_extend', function () {
        tests.forEach(function (test, index) {
            it('test no: ' + index, function () {
                Qkc3._extend(test);


                if(test.properties)
                    test.properties.forEach(function(property){

                        var provider = new FakeHttpProvider();
                        Qkc3.setProvider(provider);
                        provider.injectResult('');
                        provider.injectValidation(function (payload) {
                            assert.equal(payload.jsonrpc, '2.0');
                            assert.equal(payload.method, property.getter);
                        });

                        if(test.property) {
                            assert.isObject(Qkc3[test.property][property.name]);
                            assert.isFunction(Qkc3[test.property]['get'+ property.name.charAt(0).toUpperCase() + property.name.slice(1)]);
                        } else {
                            assert.isObject(Qkc3[property.name]);
                            assert.isFunction(Qkc3['get'+ property.name.charAt(0).toUpperCase() + property.name.slice(1)]);
                        }
                    });

                if(test.methods)
                    test.methods.forEach(function(property){
                        if(test.property)
                            assert.isFunction(Qkc3[test.property][property.name]);
                        else
                            assert.isFunction(Qkc3[property.name]);
                    });

            });
        });
    });
});

