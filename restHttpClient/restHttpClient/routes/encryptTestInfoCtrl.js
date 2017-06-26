module.exports = function (app) {

    const encryptorTestKey = process.env.encryptTestKey;
    
    //http://127.0.0.1:3000/encryptTestInfoCtrl/
    app.get('/encryptTestInfoCtrl/', function (req, res) {
        return res.send(200, encryptorTestKey);
    });




}