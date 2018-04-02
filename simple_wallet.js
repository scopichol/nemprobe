var nem = require("nem-sdk").default;

// Set a wallet name
var walletName = "QuantumMechanicsPRNG";

// Set a password
var password = "Something";

// Create PRNG wallet
var wallet = nem.model.wallet.createPRNG(walletName, password, nem.model.network.data.testnet.id);

console.log(wallet);

// Create a common object
var common = nem.model.objects.create("common")("Something1", "");

// Get the wallet account to decrypt
var walletAccount = wallet.accounts['0'];

// Decrypt account private key 
nem.crypto.helpers.passwordToPrivatekey(common, walletAccount, walletAccount.algo);

// The common object now has a private key
console.log('COMMON', common)


