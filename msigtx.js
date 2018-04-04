var nem = require("nem-sdk").default;

var privateKey = "2470537b32df9f09c5a78ef1504ef3b27176a09da1c84ff59446c66c5fd72816";
var recipient = "TCKHSKMSEZR7BXUW6MH34QBQ7F3KZFMHMOJ7UG6L";
var amount = 3.3;
var message = "dev guide test multisig transaction";
var nisURL = "http://localhost";
var nisPort = "7890";
var actual_sender={publicKey: "8fd75ca94dd7e4916b13c8349e345ba90c2b9de85323edb0998aac94d89b971a"}

//~ var endpoint = nem.model.objects.create("endpoint")(nisURL, nisPort);
var endpoint = nem.model.objects.create("endpoint")(nem.model.nodes.defaultTestnet, nem.model.nodes.defaultPort);
var common = nem.model.objects.get("common");
common.privateKey = privateKey;
var transferTransaction = nem.model.objects.create("transferTransaction")(recipient, amount, message);
transferTransaction.isMultisig= true;
transferTransaction.multisigAccount=actual_sender

var transactionEntity = nem.model.transactions.prepare("transferTransaction")(common, transferTransaction, nem.model.network.data.testnet.id)
//~ nem.model.transactions.send(common, transactionEntity, endpoint).then(function(res) {console.log("done");console.log(res);});
nem.com.requests.account.transactions.unconfirmed(endpoint, "TBTPDJDR3ZMHMMIKUXPXJTQICBX3IFRRSV6PVFBE").then(function(res) {
    common.privateKey = "a1b4334d2bf1afa82cfd80e8dea7fab3450adb972598796b65d05d617158ad7f";
    var transactionMetaDataPair = res.data[0];
    var signTx = nem.model.objects.create("signatureTransaction")("TA7U5VQWBU42QYZ3L4ZDXXS6UGJ32KQ57LL4RNIX", transactionMetaDataPair.meta.data);
    var transactionEntity = nem.model.transactions.prepare("signatureTransaction")(common, signTx, nem.model.network.data.testnet.id);
    var secretPair = nem.crypto.keyPair.create(common.privateKey);
    var serialized = nem.utils.serialization.serializeTransaction(transactionEntity);
    var signature = secretPair.sign(serialized);
    var broadcastable = JSON.stringify({
                "data": nem.utils.convert.ua2hex(serialized),
                "signature": signature.toString()
            });
    nem.com.requests.transaction.announce(endpoint, broadcastable).then(function(res) {
        console.log("done");
        console.log(res);        
    });
});
//~ console.log(nem);