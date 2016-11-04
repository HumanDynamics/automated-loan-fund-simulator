var paypal = require('paypal-rest-sdk');

// https://github.com/paypal/PayPal-node-SDK/blob/master/samples/configure.js
paypal.configure({
  'mode': 'sandbox', //sandbox or live
  'client_id': process.env.PAYPAL_CLIENT_ID || 'EBWKjlELKMYqRNQ6sYvFo64FtaRLRR5BdHEESmha49TM',
  'client_secret': process.env.PAYPAL_CLIENT_SECRET  || 'EO422dn3gQLgDbuwqTjzrFgFtaRLRR5BdHEESmha49TM'
});

console.log(paypal);