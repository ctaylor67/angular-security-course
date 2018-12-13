
var jwt = require('jsonwebtoken');
var fs = require('fs');


// verify an existing JWT
var existingToken = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWxpY2UiLCJpYXQiOjE1NDQ2Nzc0ODUsImV4cCI6MTU0NDY3NzYwNSwic3ViIjoiMSJ9.miynZZExHuWhCiNDrYKs6RR37asA4WHgl5PhXaooh24AHYH27kagwbxBVCc2MeU7cJZxixB4Rf-MFbEBGWeNWwbsyH9zb1tanuRDolPHoKFjb5CaLAgeATweJ9zBivZFjLU3veduzqK_gwY486agv308V1TdW7OakasAaxMWODby-nHYofxBxIJXhUSIUa6xR2SVne14jRkZmyMcWI4vYLO2FIBWqWnZT26x53iP2-4ladB9lGOhS8SZfAlfhU6A26j7hVyGRrJfe0MxbJNquXuKE1h6jSuEqgKjnk4BAU6NYIn1O51CfLMIAVTc4U1zzqbalzVxv0PWg0T0MKBsFg';


var publicKey = fs.readFileSync('./demos/public.key');


console.log("verifying");

const verify = jwt.verify(existingToken, publicKey);



console.log("Decoded JWT:", verify);

