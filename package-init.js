/* jshint ignore:start */


// Browser environment
if(typeof window !== 'undefined') {
    Qkc3 = (typeof window.Qkc3 !== 'undefined') ? window.Qkc3 : require('qkc3');
    BigNumber = (typeof window.BigNumber !== 'undefined') ? window.BigNumber : require('bignumber.js');
}


// Node environment
if(typeof global !== 'undefined') {
    Qkc3 = (typeof global.Qkc3 !== 'undefined') ? global.Qkc3 : require('qkc3');
    BigNumber = (typeof global.BigNumber !== 'undefined') ? global.BigNumber : require('bignumber.js');
}

/* jshint ignore:end */
