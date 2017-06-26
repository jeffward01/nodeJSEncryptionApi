module.exports = function (app) {

    var encryptor = require('simple-encryptor')(process.env.encryptTestKey);

    
    //http://127.0.0.1:3000/encryptCtrl/
    app.post('/encryptCtrl/', function (req, res) {
        var stringToEncrypt = req.body.encrpytString;
        console.log(stringToEncrypt);
        var encrypted = encryptor.encrypt(stringToEncrypt);
        return res.send(200, encrypted);
    });



}