var nem = require("nem-sdk").default;

var privateKey = "2470537b32df9f09c5a78ef1504ef3b27176a09da1c84ff59446c66c5fd72816";
var recipient = "TBTPDJDR3ZMHMMIKUXPXJTQICBX3IFRRSV6PVFBE";

var amount = 1;
var mosaicAmount = 16000000;
var message = "dev guide test mosaic transaction";

var endpoint = nem.model.objects.create("endpoint")(nem.model.nodes.defaultTestnet, nem.model.nodes.defaultPort);
var common = nem.model.objects.create("common")("", privateKey);

// Create variable to store our mosaic definitions, needed to calculate fees properly (already contains xem definition)
var mosaicDefinitionMetaDataPair = nem.model.objects.get("mosaicDefinitionMetaDataPair");

var transferTransaction = nem.model.objects.create("transferTransaction")(recipient, amount, message);
var mosaicAttachment = nem.model.objects.create("mosaicAttachment")("dataspark", "st",mosaicAmount);
transferTransaction.mosaics.push(mosaicAttachment);

nem.com.requests.namespace.mosaicDefinitions(endpoint, mosaicAttachment.mosaicId.namespaceId).then(function(res) {

	// Look for the mosaic definition(s) we want in the request response (Could use ["eur", "usd"] to return eur and usd mosaicDefinitionMetaDataPairs)
	var neededDefinition = nem.utils.helpers.searchMosaicDefinitionArray(res.data, ["st"]);
	// Get full name of mosaic to use as object key
	var fullMosaicName  = nem.utils.format.mosaicIdToName(mosaicAttachment.mosaicId);

	// Check if the mosaic was found
	if(undefined === neededDefinition[fullMosaicName]) return console.error("Mosaic not found !");

	// Set eur mosaic definition into mosaicDefinitionMetaDataPair
	mosaicDefinitionMetaDataPair[fullMosaicName] = {};
	mosaicDefinitionMetaDataPair[fullMosaicName].mosaicDefinition = neededDefinition[fullMosaicName];
                nem.com.requests.mosaic.supply(endpoint, fullMosaicName).then(function(res) {
                        mosaicDefinitionMetaDataPair[fullMosaicName].supply = res.supply;
                        // Prepare the transfer transaction object
						var transactionEntity = nem.model.transactions.prepare("mosaicTransferTransaction")(common, transferTransaction,mosaicDefinitionMetaDataPair, nem.model.network.data.testnet.id)
						console.log('TRANSACTIONENTITY',transactionEntity);
						// Serialize transfer transaction and announce
						nem.model.transactions.send(common, transactionEntity, endpoint).then(function(res) {console.log("done");console.log(res);});
                 }, function(err) {
                console.error(err);
                });
	
}, 
function(err) {
	console.error(err);
});
