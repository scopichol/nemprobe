var nem = require("nem-sdk").default;
//~ var rBytes = nem.crypto.nacl.randomBytes(32);
//~ var rHex = nem.utils.convert.ua2hex(rBytes);
//~ var keyPair = nem.crypto.keyPair.create(rHex);
//~ console.log('secret',rHex)
//~ console.log('public',keyPair.publicKey.toString());
//~ console.log('testnet',nem.model.address.toAddress(keyPair.publicKey.toString(),  nem.model.network.data.testnet.id));
//~ console.log('mainnet',nem.model.address.toAddress(keyPair.publicKey.toString(),  nem.model.network.data.mainnet.id));
//~ console.log('mijin',nem.model.address.toAddress(keyPair.publicKey.toString(),  nem.model.network.data.mijin.id));

//~ // Single Sig
var privateKey1 = "2470537b32df9f09c5a78ef1504ef3b27176a09da1c84ff59446c66c5fd72816";
var pubKey1 = "2b854acf89952b52ffd2ebf64dd465ede31ceac471690f567627b46e8813dc1d"
var address1 = "TC6SDTFIDJMHR7YHGNJS4ZKA5Y2A36WQDSMDCDVJ";
var privateKey2 = "a1b4334d2bf1afa82cfd80e8dea7fab3450adb972598796b65d05d617158ad7f";
var pubKey2 = "5ef802db3b06fab115b55e55edc3a6322d37173da55b7ef7024c37ac5f4a1a38";
var address2 = "TBTPDJDR3ZMHMMIKUXPXJTQICBX3IFRRSV6PVFBE";
var privateKey = privateKey2;
var recipientPubKey = pubKey1;
var recipient = address1;

var amount = 1;
var message = "dev guide test transaction 2";
var nisURL = "http://localhost";
var nisPort = "7890";

//~ var endpoint = nem.model.objects.create("endpoint")(nisURL, nisPort);
console.log(nem.model.nodes.defaultTestnet, nem.model.nodes.defaultPort);
var endpoint = nem.model.objects.create("endpoint")(nem.model.nodes.defaultTestnet, nem.model.nodes.defaultPort);
var common = nem.model.objects.get("common");
common.privateKey = privateKey;

// Create variable to store our mosaic definitions, needed to calculate fees properly (already contains xem definition)
//~ var mosaicDefinitionMetaDataPair = nem.model.objects.get("mosaicDefinitionMetaDataPair");
//~ msgEnc = nem.crypto.helpers.encode(privateKey1,pubKey2,message);
//~ console.log('ENCODE',message);
//~ msgDec = nem.crypto.helpers.decode(privateKey2,pubKey1,message)
//~ console.log('DECODE',msgDec);

var transferTransaction = nem.model.objects.create("transferTransaction")(recipient, amount, message);
//~ var mosaicAttachment = nem.model.objects.create("mosaicAttachment")("dataspark", "st", 10000000);
//~ transferTransaction.mosaics.push(mosaicAttachment);
//~ transferTransaction.messageType = 2;
//~ transferTransaction.recipientPublicKey = recipientPubKey;
console.log('TRANSFERTRANSACTION',transferTransaction)
//~ var transactionEntity = nem.model.transactions.prepare("transferTransaction")(common, transferTransaction, nem.model.network.data.testnet.id)
//~ var transactionEntity = nem.model.transactions.prepare("mosaicTransferTransaction")(common, transferTransaction, nem.model.network.data.testnet.id)
//~ console.log('TRANSACTIONENTITY',transactionEntity);
//~ nem.model.transactions.send(common, transactionEntity, endpoint).then(function(res) {console.log("done");console.log(res);});

//~ nem.com.requests.namespace.mosaicDefinitions(endpoint, mosaicAttachment.mosaicId.namespaceId).then(function(res) {

	// Look for the mosaic definition(s) we want in the request response (Could use ["eur", "usd"] to return eur and usd mosaicDefinitionMetaDataPairs)
	//~ var neededDefinition = nem.utils.helpers.searchMosaicDefinitionArray(res.data, ["st"]);
	//~ console.log('NEEDEDDEFINITION',neededDefinition);
	// Get full name of mosaic to use as object key
	//~ var fullMosaicName  = nem.utils.format.mosaicIdToName(mosaicAttachment.mosaicId);

	// Check if the mosaic was found
	//~ if(undefined === neededDefinition[fullMosaicName]) return console.error("Mosaic not found !");

	// Set eur mosaic definition into mosaicDefinitionMetaDataPair
	//~ mosaicDefinitionMetaDataPair[fullMosaicName] = {};
	//~ mosaicDefinitionMetaDataPair[fullMosaicName].mosaicDefinition = neededDefinition[fullMosaicName];

	//~ // Prepare the transfer transaction object
	var transactionEntity = nem.model.transactions.prepare("transferTransaction")(common, transferTransaction, nem.model.network.data.testnet.id);
    console.log('TRANSACTIONENTITY',transactionEntity);
	// Serialize transfer transaction and announce
	//~ nem.model.transactions.send(common, transactionEntity, endpoint).then(function(res) {console.log("done");console.log(res);});
//~ }, 
//~ function(err) {
	//~ console.error(err);
//~ });












//~ var privateKey = "a1b4334d2bf1afa82cfd80e8dea7fab3450adb972598796b65d05d617158ad7f";
//~ var recipient = "TCKHSKMSEZR7BXUW6MH34QBQ7F3KZFMHMOJ7UG6L";
//~ var amount = 10;
//~ var message = "dev guide test multisig transaction";
//~ var nisURL = "http://localhost";
//~ var nisPort = "7890";
//~ var actual_sender={publicKey: "5ef802db3b06fab115b55e55edc3a6322d37173da55b7ef7024c37ac5f4a1a38"}

//~ // endpoint initialisation
//~ var endpoint = nem.model.objects.create("endpoint")(nisURL, nisPort);
//~ // transaction common data initialisation
//~ var common = nem.model.objects.get("common");
//~ common.privateKey = privateKey;

//~ // create transfer transaction object
//~ var transferTransaction = nem.model.objects.create("transferTransaction")(recipient, amount, message);
//~ transferTransaction.isMultisig= true;
//~ transferTransaction.multisigAccount=actual_sender


//~ // prepare transaction
//~ var transactionEntity = nem.model.transactions.prepare("transferTransaction")(common, transferTransaction, nem.model.network.data.testnet.id)
//~ // temporary nem-sdk fix
//~ console.log(transactionEntity);
//~ // sign and send to NIS
//~ nem.model.transactions.send(common, transactionEntity, endpoint).then(function(res) {console.log("done");console.log(res);});
//~ nem.model.transactions.send(common, transactionEntity, endpoint).then(function(res) {console.log("done");console.log(res);});

//~ var keyPair = nem.crypto.keyPair.create("2470537b32df9f09c5a78ef1504ef3b27176a09da1c84ff59446c66c5fd72816");
//~ console.log('public',keyPair.publicKey.toString());
//~ console.log('testnet',nem.model.address.toAddress(keyPair.publicKey.toString(),  nem.model.network.data.testnet.id));
