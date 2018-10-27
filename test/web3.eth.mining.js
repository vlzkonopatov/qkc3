var chai = require('chai');
var assert = chai.assert;
var Qkc3 = require('../index');
var qkc3 = new Qkc3();
var FakeHttpProvider = require('./helpers/FakeHttpProvider');

var method = 'mining';

var tests = [{
    result: true,
    formattedResult: true,
    call: 'eth_'+ method
}];

describe('qkc3.eth', function () {
    describe(method, function () {
        tests.forEach(function (test, index) {
            it('property test: ' + index, function () {

                // given
                var provider = new FakeHttpProvider();
                qkc3.setProvider(provider);
                provider.injectResult(test.result);
                provider.injectValidation(function (payload) {
                    assert.equal(payload.jsonrpc, '2.0');
                    assert.equal(payload.method, test.call);
                    assert.deepEqual(payload.params, []);
                });

                // when
                var result = qkc3.eth[method];

                // then
                assert.deepEqual(test.formattedResult, result);
            });
        });
    });
});

