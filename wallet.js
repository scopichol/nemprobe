var nem = require("nem-sdk").default;

var walletName = "QuantumMechanicsBrain";

// Set a password/passphrase
var password = "Something another thing and something else";

// Create Brain wallet
var wallet = nem.model.wallet.createBrain(walletName, password, nem.model.network.data.testnet.id);

// Convert stringified wallet object to word array
var wordArray = nem.crypto.js.enc.Utf8.parse(JSON.stringify(wallet));

// Word array to base64
var base64 = nem.crypto.js.enc.Base64.stringify(wordArray);

console.log(wallet);
var decArray = nem.crypto.js.enc.Base64.parse(base64);
var strWallet = nem.crypto.js.enc.Utf8.stringify(decArray);
var reqWallet = JSON.parse(strWallet);
console.log(reqWallet);

// Create a common object
var common = nem.model.objects.create("common")(password, "");

// Get the wallet account to decrypt
var walletAccount = reqWallet.accounts['0'];

console.log('COMMON',common);
console.log('WALLETACCOUNT',walletAccount);
console.log('WALLET.ALGO',walletAccount.algo);
// Decrypt account private key 
nem.crypto.helpers.passwordToPrivatekey(common, walletAccount, walletAccount.algo);

// The common object now has a private key
console.log('COMMON PRIV',common)