var nem = require("nem-sdk").default;
//~ var rBytes = nem.crypto.nacl.randomBytes(32);
//~ var rHex = nem.utils.convert.ua2hex(rBytes);
//~ var keyPair = nem.crypto.keyPair.create(rHex);
//~ console.log('secret',rHex)
//~ console.log('public',keyPair.publicKey.toString());
//~ console.log('testnet',nem.model.address.toAddress(keyPair.publicKey.toString(),  nem.model.network.data.testnet.id));
//~ console.log('mainnet',nem.model.address.toAddress(keyPair.publicKey.toString(),  nem.model.network.data.mainnet.id));
//~ console.log('mijin',nem.model.address.toAddress(keyPair.publicKey.toString(),  nem.model.network.data.mijin.id));

// Single Sig
//~ var privateKey = "a1b4334d2bf1afa82cfd80e8dea7fab3450adb972598796b65d05d617158ad7f";
//~ var recipient = "TCKHSKMSEZR7BXUW6MH34QBQ7F3KZFMHMOJ7UG6L";
//~ var amount = 2;
//~ var message = "dev guide test transaction";
//~ var nisURL = "http://localhost";
//~ var nisPort = "7890";

//~ var endpoint = nem.model.objects.create("endpoint")(nisURL, nisPort);
//~ var common = nem.model.objects.get("common");
//~ common.privateKey = privateKey;
//~ var transferTransaction = nem.model.objects.create("transferTransaction")(recipient, amount, message);
//~ var transactionEntity = nem.model.transactions.prepare("transferTransaction")(common, transferTransaction, nem.model.network.data.testnet.id)
//~ console.log(transactionEntity);
//~ nem.model.transactions.send(common, transactionEntity, endpoint).then(function(res) {console.log("done");console.log(res);});

var privateKey = "a1b4334d2bf1afa82cfd80e8dea7fab3450adb972598796b65d05d617158ad7f";
var recipient = "TCKHSKMSEZR7BXUW6MH34QBQ7F3KZFMHMOJ7UG6L";
var amount = 10;
var message = "dev guide test multisig transaction";
var nisURL = "http://localhost";
var nisPort = "7890";
var actual_sender={publicKey: "5ef802db3b06fab115b55e55edc3a6322d37173da55b7ef7024c37ac5f4a1a38"}

// endpoint initialisation
var endpoint = nem.model.objects.create("endpoint")(nisURL, nisPort);
// transaction common data initialisation
var common = nem.model.objects.get("common");
common.privateKey = privateKey;

// create transfer transaction object
var transferTransaction = nem.model.objects.create("transferTransaction")(recipient, amount, message);
transferTransaction.isMultisig= true;
transferTransaction.multisigAccount=actual_sender


// prepare transaction
var transactionEntity = nem.model.transactions.prepare("transferTransaction")(common, transferTransaction, nem.model.network.data.testnet.id)
// temporary nem-sdk fix
console.log(transactionEntity);
// sign and send to NIS
nem.model.transactions.send(common, transactionEntity, endpoint).then(function(res) {console.log("done");console.log(res);});
//~ nem.model.transactions.send(common, transactionEntity, endpoint).then(function(res) {console.log("done");console.log(res);});

var keyPair = nem.crypto.keyPair.create("2470537b32df9f09c5a78ef1504ef3b27176a09da1c84ff59446c66c5fd72816");
console.log('public',keyPair.publicKey.toString());
console.log('testnet',nem.model.address.toAddress(keyPair.publicKey.toString(),  nem.model.network.data.testnet.id));
