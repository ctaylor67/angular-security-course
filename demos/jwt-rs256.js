
var jwt = require('jsonwebtoken');
var fs = require('fs');


var privateKey = fs.readFileSync('./demos/private.key');

var payload = {
  name: 'Alice'
};


var token = jwt.sign(payload, privateKey, {
    algorithm: 'RS256',
    expiresIn: 120, // seconds
    subject: "1"
});


console.log('RSA 256 JWT\n\n',token);





