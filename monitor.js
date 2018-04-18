var nem = require("nem-sdk").default;

// Create an endpoint object
//~ var endpoint = nem.model.objects.create("endpoint")(nem.model.nodes.defaultTestnet, nem.model.nodes.websocketPort);
var nisURL = "http://localhost";
var nisPort = "7890";

var endpoint = nem.model.objects.create("endpoint")(nisURL, nisPort);

// Address to subscribe
var address = "TAWC5PATBWWDNWEPBRCOY5CL4MLAHTRNGQWSGZ33";

// Create a connector object
var connector = nem.com.websockets.connector.create(endpoint, address);

console.log(endpoint);
// Connect using connector
connector.connect().then(function() {
  // If we are here we are connected
  console.log("Connected");
}, function (err) {
  // If we are here connection failed 10 times (1/s).
  console.log(err);
});