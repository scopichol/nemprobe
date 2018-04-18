var nem = require("nem-sdk").default;

var privateKey1 = "2470537b32df9f09c5a78ef1504ef3b27176a09da1c84ff59446c66c5fd72816";
var pubKey1 = "2b854acf89952b52ffd2ebf64dd465ede31ceac471690f567627b46e8813dc1d"
var address1 = "TC6SDTFIDJMHR7YHGNJS4ZKA5Y2A36WQDSMDCDVJ";
var privateKey2 = "a1b4334d2bf1afa82cfd80e8dea7fab3450adb972598796b65d05d617158ad7f";
var pubKey2 = "5ef802db3b06fab115b55e55edc3a6322d37173da55b7ef7024c37ac5f4a1a38";
var address2 = "TBTPDJDR3ZMHMMIKUXPXJTQICBX3IFRRSV6PVFBE";
var endpoint = nem.model.objects.create("endpoint")(nem.model.nodes.defaultTestnet, nem.model.nodes.defaultPort);

var common = nem.model.objects.create("common")("", privateKey1);
//~ console.log(nem);
var fileContent = nem.crypto.js.enc.Utf8.parse("Apostille is awesome !!");
//~ console.log(endpoint);

var apostille = nem.model.apostille.create(common, "Test.txt", fileContent, "Test Apostille", nem.model.apostille.hashing["SHA256"], false, "", true, nem.model.network.data.testnet.id);
console.log(apostille);
//~ console.log('FILECONTENT', fileContent);
//~ nem.model.transactions.send(common, apostille.transaction, endpoint).then(function (res) {console.log('CREATE',res);});

var txHash = "b488c7874de5319dd1ccddcc7db954c81990171815e3e7bb8e54785c31a34e4b";

// Get the Apostille transaction from the chain
nem.com.requests.transaction.byHash(endpoint, txHash).then(function(res) {
	console.log('TX',res);
	console.log(nem.utils.format.hexToUtf8(res.transaction.message.payload));
	// Verify
  		if (nem.model.apostille.verify(fileContent, res.transaction)) {
    		console.log("Apostille is valid");
  		} else {
    		console.log("Apostille is invalid");
  		}
	}, function(err) {
  		console.log("Apostille is invalid");
  		console.log(err);
});
