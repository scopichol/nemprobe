var nem = require("nem-sdk").default;

var address = "TCM6B6OBBX2RGNJYG37YEMXE5CU2ZFJNEOQGKQAB";
var trxHash = "7d7257f660188777d63957285797ae44ae46eb0f9b16c0d98cf05a3dc93354fb";
var endpoint = nem.model.objects.create("endpoint")(nem.model.nodes.defaultTestnet, nem.model.nodes.defaultPort);
console.log('ENDPOINT',nem.utils.helpers.formatEndpoint(endpoint));

//~ console.log("LIB", nem.com.requests);

// http://bob.nem.ninja:8765/#/account/TCM6B6OBBX2RGNJYG37YEMXE5CU2ZFJNEOQGKQAB
// http://bigalice2.nem.ninja:7890/account/get?address=TCM6B6OBBX2RGNJYG37YEMXE5CU2ZFJNEOQGKQAB
nem.com.requests.account.data(endpoint, address).then(function(res) {console.log('ACCOUNT.DATA',res)});

// http://bigalice2.nem.ninja:7890/account/transfers/all?address=TCM6B6OBBX2RGNJYG37YEMXE5CU2ZFJNEOQGKQAB
nem.com.requests.account.transactions.all(endpoint, address).then(function(res) {
    console.log('TRANSACTIONS.ALL:',res.data.length); 
    res.data.forEach(function(trx, i, arr){console.log('TRX',trx);});
    });

// http://bigalice2.nem.ninja:7890/account/unconfirmedTransactions?address=TCM6B6OBBX2RGNJYG37YEMXE5CU2ZFJNEOQGKQAB
nem.com.requests.account.transactions.unconfirmed(endpoint, address).then(function(res) {
    console.log('UNCONFIRMED:',res.data.length);
    res.data.forEach(function(trx, i, arr){console.log('TRX',trx);});
    });

// http://bob.nem.ninja:8765/#/transfer/7d7257f660188777d63957285797ae44ae46eb0f9b16c0d98cf05a3dc93354fb    
// http://bigalice2.nem.ninja:7890/transaction/get?hash=7d7257f660188777d63957285797ae44ae46eb0f9b16c0d98cf05a3dc93354fb
nem.com.requests.transaction.byHash(endpoint, trxHash).then(function(res) {console.log('TRANSACTION',res);});

