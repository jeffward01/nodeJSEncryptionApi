module.exports = function (app) {

    var encryptor = require('simple-encryptor')(process.env.encryptTestKey);

    app.post('/decryptCtrl/', function (req, res) {
        var stringToDecrypt = req.body.encrpytedString;
        console.log(stringToDecrypt);
        if (stringToDecrypt != undefined) {

            var decrypted = encryptor.decrypt(stringToDecrypt);
            console.log('decrypted: %s', decrypted);
            return res.send(200, decrypted);
        } else {
            return res.send(400, "Please insert data");
        }
    });

}