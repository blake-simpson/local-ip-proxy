process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const ip = require('ip');
const proxy = require('express-http-proxy');
const app = require('express')();

const port = 8888;
const proxyHostname = process.argv[2];
const proxyURL = `https://${proxyHostname}/`;
const ipAddress = ip.address();
const serverURL = `http://${ipAddress}:${port}/`;

app.use(
  '/',
  proxy(proxyHostname, {
    https: true,

    userResDecorator: function(_proxyRes, proxyResData) {
      let html = proxyResData.toString('utf8');

      html = html.replace(new RegExp(proxyURL, 'g'), serverURL);

      return html;
    }
  })
);

app.listen(port);
console.log(`Proxying all traffic from ${serverURL} to ${proxyURL}`);
