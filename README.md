# nodeJSEncryptionApi
A Simple Encryption API using node.js


To Use

Encrypt a string:
POST
127.0.0.1:3000/encryptCtrl/
body JSON data: {"encrpytString":"This is my secret string"}

Decrypt a string:
POST
127.0.0.1:3000/decryptCtrl/
{"encrpytedString":"c2714113031e71e2b6d95effd776d3d5659079a0e37038db50a6193df593fceaafe5aab7efb0603ae1e05249db599c850dPbFYEPMMHcYnMWwVDkq0v2n4hruf2cB5NKdXP4Yro"}

Get Encryption Key
GET
127.0.0.1:3000/encryptTestInfoCtrl/


