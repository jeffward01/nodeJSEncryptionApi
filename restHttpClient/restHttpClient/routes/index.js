var fs = require('fs');

module.exports = function (app) {
    require('./testCtrl')(app);
    require('./encryptCtrl')(app);
    require('./encryptTestInfoCtrl')(app);
    require('./decryptCtrl')(app);
    
}

