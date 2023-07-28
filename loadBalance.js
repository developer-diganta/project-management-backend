require('dotenv').config();


const http = require('http');
const httpProxy = require('http-proxy');
const cors = require('cors');

const instances = [
  { target: `http://server_app:3001` },
  { target: 'http://server_app:3002' },
];

const proxy = httpProxy.createProxyServer();

let instanceIndex = 0;

const server = http.createServer((req, res) => {

  cors()(req, res, () => {
    const targetInstance = instances[instanceIndex];
    proxy.web(req, res, { target: targetInstance.target }, (err) => {
      console.error('Error while forwarding request to', targetInstance.target, ':', err.message);


      if (err && instanceIndex < instances.length - 1) {
        instanceIndex++;
        const nextTargetInstance = instances[instanceIndex];
        proxy.web(req, res, { target: nextTargetInstance.target }, (err) => {
          console.error('Error while forwarding request to', nextTargetInstance.target, ':', err.message);
          res.statusCode = 500;
          res.end('Something went wrong.');
        });
      } else {
        res.statusCode = 500;
        res.end('Something went wrong.');
      }
    });
  });
});

server.listen(3000, () => {
  console.log('Load balancer listening on port 3000');
});
