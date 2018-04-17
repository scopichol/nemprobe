var nem = require("nem-sdk").default;

var privateKey1 = "2470537b32df9f09c5a78ef1504ef3b27176a09da1c84ff59446c66c5fd72816";
var pubKey1 = "2b854acf89952b52ffd2ebf64dd465ede31ceac471690f567627b46e8813dc1d"
var address1 = "TC6SDTFIDJMHR7YHGNJS4ZKA5Y2A36WQDSMDCDVJ";
var privateKey2 = "a1b4334d2bf1afa82cfd80e8dea7fab3450adb972598796b65d05d617158ad7f";
var pubKey2 = "5ef802db3b06fab115b55e55edc3a6322d37173da55b7ef7024c37ac5f4a1a38";
var address2 = "TBTPDJDR3ZMHMMIKUXPXJTQICBX3IFRRSV6PVFBE";
var privateKey3 = "bcd7e6d3f7aff6a9b867035de8b2d2eb5cc4a7454c6a9a0090fca74558290dc6";

var endpoint = nem.model.objects.create("endpoint")(nem.model.nodes.defaultTestnet, nem.model.nodes.defaultPort);
//~ console.log(nem.crypto.js);
var common = nem.model.objects.create("common")("", privateKey1);
//~ var common = nem.model.objects.get("common");
//~ common.privateKey = privateKey;
//~ // Simulate the file content
var fileContent = nem.crypto.js.enc.Utf8.parse('Apostille is awesome !');

// Create the Apostille
var apostille = nem.model.apostille.create(common, "testDoc.txt", fileContent, "Tag3", nem.model.apostille.hashing["SHA256"], false, null,true, nem.model.network.data.testnet.id);
console.log("APOSTILLE",apostille);
// Serialize transfer transaction and announce
//~ nem.model.transactions.send(common, apostille.transaction, endpoint).then(res => console.log("TX SUCCESS",res));

//~ var txHash = "c8f517a9d1b8f47b129f0cae80edfe3cbb40864ca608db9dcdce144678f404cc";
//~ // Get the Apostille transaction from the chain
//~ nem.com.requests.transaction.byHash(endpoint, txHash).then(function(res) {
  //~ // Verify
    //~ console.log('RES', res);
  //~ if (nem.model.apostille.verify(fileContent, res.transaction)) {
    //~ console.log("Apostille is valid");
  //~ } else {
    //~ console.log("Apostille is invalid");
  //~ }
//~ }, function(err) {
  //~ console.log("Apostille is invalid");
  //~ console.log(err);
//~ });