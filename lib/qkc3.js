/*!
 * qkc3.js - Ethereum JavaScript API
 *
 * @license lgpl-3.0
 * @see https://github.com/ethereum/qkc3.js
*/

/*
 * This file is part of qkc3.js.
 *
 * qkc3.js is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * qkc3.js is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with qkc3.js.  If not, see <http://www.gnu.org/licenses/>.
 *
 * @file qkc3.js
 * @authors:
 *   Jeffrey Wilcke <jeff@ethdev.com>
 *   Marek Kotewicz <marek@ethdev.com>
 *   Marian Oancea <marian@ethdev.com>
 *   Fabian Vogelsteller <fabian@ethdev.com>
 *   Gav Wood <g@ethdev.com>
 * @date 2014
 */

var RequestManager = require('./qkc3/requestmanager');
var Iban = require('./qkc3/iban');
var Eth = require('./qkc3/methods/eth');
var Qkc = require('./qkc3/methods/qkc');
var DB = require('./qkc3/methods/db');
var Shh = require('./qkc3/methods/shh');
var Net = require('./qkc3/methods/net');
var Personal = require('./qkc3/methods/personal');
var Swarm = require('./qkc3/methods/swarm');
var Settings = require('./qkc3/settings');
var version = require('./version.json');
var utils = require('./utils/utils');
var sha3 = require('./utils/sha3');
var extend = require('./qkc3/extend');
var Batch = require('./qkc3/batch');
var Property = require('./qkc3/property');
var HttpProvider = require('./qkc3/httpprovider');
var IpcProvider = require('./qkc3/ipcprovider');
var BigNumber = require('bignumber.js');



function Qkc3 (provider) {
    this._requestManager = new RequestManager(provider);
    this.currentProvider = provider;
    this.eth = new Eth(this);
    this.qkc = new Qkc(this);
    this.db = new DB(this);
    this.shh = new Shh(this);
    this.net = new Net(this);
    this.personal = new Personal(this);
    this.bzz = new Swarm(this);
    this.settings = new Settings();
    this.version = {
        api: version.version
    };
    this.providers = {
        HttpProvider: HttpProvider,
        IpcProvider: IpcProvider
    };
    this._extend = extend(this);
    this._extend({
        properties: properties()
    });
}

// expose providers on the class
Qkc3.providers = {
    HttpProvider: HttpProvider,
    IpcProvider: IpcProvider
};

Qkc3.prototype.setProvider = function (provider) {
    this._requestManager.setProvider(provider);
    this.currentProvider = provider;
};

Qkc3.prototype.reset = function (keepIsSyncing) {
    this._requestManager.reset(keepIsSyncing);
    this.settings = new Settings();
};

Qkc3.prototype.BigNumber = BigNumber;
Qkc3.prototype.toHex = utils.toHex;
Qkc3.prototype.toAscii = utils.toAscii;
Qkc3.prototype.toUtf8 = utils.toUtf8;
Qkc3.prototype.fromAscii = utils.fromAscii;
Qkc3.prototype.fromUtf8 = utils.fromUtf8;
Qkc3.prototype.toDecimal = utils.toDecimal;
Qkc3.prototype.fromDecimal = utils.fromDecimal;
Qkc3.prototype.toBigNumber = utils.toBigNumber;
Qkc3.prototype.toWei = utils.toWei;
Qkc3.prototype.fromWei = utils.fromWei;
Qkc3.prototype.isAddress = utils.isAddress;
Qkc3.prototype.isChecksumAddress = utils.isChecksumAddress;
Qkc3.prototype.toChecksumAddress = utils.toChecksumAddress;
Qkc3.prototype.isIBAN = utils.isIBAN;
Qkc3.prototype.padLeft = utils.padLeft;
Qkc3.prototype.padRight = utils.padRight;


Qkc3.prototype.sha3 = function(string, options) {
    return '0x' + sha3(string, options);
};

/**
 * Transforms direct icap to address
 */
Qkc3.prototype.fromICAP = function (icap) {
    var iban = new Iban(icap);
    return iban.address();
};

var properties = function () {
    return [
        new Property({
            name: 'version.node',
            getter: 'Qkc3_clientVersion'
        }),
        new Property({
            name: 'version.network',
            getter: 'net_version',
            inputFormatter: utils.toDecimal
        }),
        new Property({
            name: 'version.ethereum',
            getter: 'eth_protocolVersion',
            inputFormatter: utils.toDecimal
        }),
        new Property({
            name: 'version.whisper',
            getter: 'shh_version',
            inputFormatter: utils.toDecimal
        })
    ];
};

Qkc3.prototype.isConnected = function(){
    return (this.currentProvider && this.currentProvider.isConnected());
};

Qkc3.prototype.createBatch = function () {
    return new Batch(this);
};

module.exports = Qkc3;

