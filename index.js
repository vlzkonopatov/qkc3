var Qkc3 = require('./lib/qkc3');

// dont override global variable
if (typeof window !== 'undefined' && typeof window.Qkc3 === 'undefined') {
    window.Qkc3 = Qkc3;
}

module.exports = Qkc3;
