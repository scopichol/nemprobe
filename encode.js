var nem = require("nem-sdk").default;

var privateKey1 = "2470537b32df9f09c5a78ef1504ef3b27176a09da1c84ff59446c66c5fd72816";
var pubKey1 = "2b854acf89952b52ffd2ebf64dd465ede31ceac471690f567627b46e8813dc1d"
var address1 = "TC6SDTFIDJMHR7YHGNJS4ZKA5Y2A36WQDSMDCDVJ";
var privateKey2 = "a1b4334d2bf1afa82cfd80e8dea7fab3450adb972598796b65d05d617158ad7f";
var pubKey2 = "5ef802db3b06fab115b55e55edc3a6322d37173da55b7ef7024c37ac5f4a1a38";
var address2 = "TBTPDJDR3ZMHMMIKUXPXJTQICBX3IFRRSV6PVFBE";

var message = "dev guide test transaction 2";
var password = "password";

//~ console.log(nem);

console.log('MESSAGE',message);
msgEnc = nem.crypto.helpers.encode(privateKey1,pubKey2,message);
msgDec = nem.crypto.helpers.decode(privateKey2,pubKey1,msgEnc)
decodedString = nem.utils.format.hexToUtf8(msgDec);

console.log('DECODE',decodedString);

hexMessage = nem.utils.convert.utf8ToHex(message);
msgEnc = nem.crypto.helpers.encrypt(hexMessage,password);
msgDec = nem.crypto.helpers.decrypt(msgEnc)
decodedString = nem.utils.format.hexToUtf8(msgDec);

console.log('DECRYPT',decodedString);
