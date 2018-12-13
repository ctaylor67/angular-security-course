


import moment = require('moment');
const util = require('util');
const crypto = require('crypto');
import * as jwt from 'jsonwebtoken'; // https://github.com/auth0/node-jsonwebtoken - available on npm
import * as fs from 'fs';



export const randomBytes = util.promisify(crypto.randomBytes);

export const signJwt = util.promisify(jwt.sign);

// Can use OpenSSL to generate public and private RSA keys for production

const RSA_PRIVATE_KEY = fs.readFileSync('./demos/private.key');

const RSA_PUBLIC_KEY = fs.readFileSync('./demos/public.key');

const SESSION_DURATION = 240;

export async function createSessionToken(userId: string) {
  // First option {} is an empty payload in this example
  return signJwt({}, RSA_PRIVATE_KEY, {
    algorithm: 'RS256',
    expiresIn: 240,
    subject: userId
  });
}

export async function decodeJwt(token: string) {
  const payload = await jwt.verify(token, RSA_PUBLIC_KEY);
  console.log('decoded JWT payload:', payload);
  return payload;
}
