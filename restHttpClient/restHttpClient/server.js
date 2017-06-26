var dotenv = require('dotenv').config();



var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");
var encryptor = require('simple-encryptor')(process.env.encryptTestKey);



var app = express();


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

var routes = require('./routes')(app);



var server = app.listen(3000, function () {
    console.log("Listening on port %s...", server.address().port);
});