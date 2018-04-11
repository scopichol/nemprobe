var nem = require("nem-sdk").default;
var address = "TC6SDTFIDJMHR7YHGNJS4ZKA5Y2A36WQDSMDCDVJ";
var address2 = "TBTPDJDR3ZMHMMIKUXPXJTQICBX3IFRRSV6PVFBE";
var pubKey = "2b854acf89952b52ffd2ebf64dd465ede31ceac471690f567627b46e8813dc1d";
var nisURL = "http://localhost";
var nisPort = "7890";
pubKey = "8fd75ca94dd7e4916b13c8349e345ba90c2b9de85323edb0998aac94d89b971a";
//~ var endpoint = nem.model.objects.create("endpoint")(nisURL, nisPort);
var endpoint = nem.model.objects.create("endpoint")(nem.model.nodes.defaultTestnet, nem.model.nodes.defaultPort);

//~ console.log(nem.com.requests.account);

// https://nemproject.github.io/#requesting-the-account-data

// request account data by address
nem.com.requests.account.data(endpoint, "TAYYI46DZRS3N35TYMBP5WN7SQ2F7TE3XR6HRQJX").then(function(res) {console.log(res)});

// request account data from public key
//~ nem.com.requests.account.dataFromPublicKey(endpoint, pubKey).then(
    //~ function(res) {},
    //~ function(err) {},
    //~ );
//~ request account data by list of addresses
//~ nem.com.requests.account.batchData(endpoint, [address,address2]).then(function(res) {console.log(res)}); 

// request owned mosaics 
//~ nem.com.requests.account.namespaces.owned(endpoint, address).then(function(res) {console.log(res)});

// request owned mosaics 
//~ nem.com.requests.account.mosaics.owned(endpoint, address).then(function(res) {res.data.forEach(function(item,i,arr) {console.log(item)})});

// request mosaics definitions
//~ nem.com.requests.account.mosaics.definitions(endpoint, address).then(function(res) {console.log(res)});

// request transactions
// https://nemproject.github.io/#requesting-transaction-data-for-an-account
//~ nem.com.requests.account.transactions.incoming(endpoint, address).then(function(res) {console.log(res)});
//~ nem.com.requests.account.transactions.outgoing(endpoint, address).then(function(res) {console.log(res)});
//~ nem.com.requests.account.transactions.unconfirmed(endpoint, address).then(function(res) {console.log(res)});
//~ nem.com.requests.account.transactions.all(endpoint, address).then(function(res) {console.log(res)});

var bip39 = require('bip39');

var rBytes = nem.crypto.nacl.randomBytes(32);
var rHex = nem.utils.convert.ua2hex(rBytes);
var keyPair = nem.crypto.keyPair.create(rHex);

var mnemonic = bip39.entropyToMnemonic(rHex)
var pk = bip39.mnemonicToEntropy(mnemonic);
console.log(pk);

console.log('secret',rHex)
console.log('mnemonic', mnemonic);
console.log('public',keyPair.publicKey.toString());
console.log('testnet',nem.model.address.toAddress(keyPair.publicKey.toString(),  nem.model.network.data.testnet.id));
console.log('mainnet',nem.model.address.toAddress(keyPair.publicKey.toString(),  nem.model.network.data.mainnet.id));
console.log('mijin',nem.model.address.toAddress(keyPair.publicKey.toString(),  nem.model.network.data.mijin.id));
