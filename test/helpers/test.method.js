var chai = require('chai');
var assert = chai.assert;
var Qkc3 = require('../../index');

var FakeHttpProvider = require('./FakeHttpProvider');
var clone = function (object) { return JSON.parse(JSON.stringify(object)); };

var runTests = function (obj, method, tests) {

    var testName = obj ? 'qkc3.' + obj : 'web';

    describe(testName, function () {
        describe(method, function () {
            tests.forEach(function (test, index) {
                it('sync test: ' + index, function () {

                    // given
                    var provider = new FakeHttpProvider();
                    var qkc3 = new Qkc3(provider);
                    provider.injectResult(test.result);
                    provider.injectValidation(function (payload) {
                        assert.equal(payload.jsonrpc, '2.0');
                        assert.equal(payload.method, test.call);
                        assert.deepEqual(payload.params, test.formattedArgs);
                    });

                    var args = clone(test.args)

                    // when
                    if (obj) {
                        var result = qkc3[obj][method].apply(qkc3[obj], args);
                    } else {
                        var result = qkc3[method].apply(qkc3, args);
                    }
                    // when
                    //var result = (obj)
                        //? qkc3[obj][method].apply(null, test.args.slice(0))
                        //: qkc3[method].apply(null, test.args.slice(0));

                    // then
                    assert.deepEqual(test.formattedResult, result);
                });

                it('async test: ' + index, function (done) {

                    // given
                    var provider = new FakeHttpProvider();
                    var qkc3 = new Qkc3(provider);

                    provider.injectResult(test.result);
                    provider.injectValidation(function (payload) {
                        assert.equal(payload.jsonrpc, '2.0');
                        assert.equal(payload.method, test.call);
                        assert.deepEqual(payload.params, test.formattedArgs);
                    });

                    var args = clone(test.args);

                    // add callback
                    args.push(function (err, result) {
                        assert.deepEqual(test.formattedResult, result);
                        done();
                    });

                    // when
                    if (obj) {
                        qkc3[obj][method].apply(qkc3[obj], args);
                    } else {
                        qkc3[method].apply(qkc3, args);
                    }
                });
            });
        });
    });

};

module.exports = {
    runTests: runTests
}

