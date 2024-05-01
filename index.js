import crypto from "crypto";
const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
    modulusLength: 2048,
});
let data = Buffer.from("heyy!!");

//encrypy with private
let sign = crypto.sign('SHA256', data, publicKey);
let Verify = crypto.verify('SHA256', data, privateKey, sign);
console.log(`Is signature verified? ${Verify}`);

// encrypt with public
let sign2 = crypto.publicEncrypt(publicKey,data);
let verify = crypto.privateDecrypt(privateKey, sign2);
console.log(`Is signature verified? ${verify}`);