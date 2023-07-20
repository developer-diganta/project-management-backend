// const app = require("./index");
// const axios = require("axios");

// const servers = [
//     "http://localhost:3100/",
//     "http://localhost:3200/"
// ]

// let current = 0;
// let server;
// server = servers[current];

// const handler = async (req,res) => {
//     console.log("!2123")
//     endPoint = req._parsedUrl.path;
//     console.log(req._parsedUrl)
    
//     console.log(endPoint)
//     try{
//         const response = await axios.post(server+endPoint,{
//             body:req.body
//         })
//         res.send(response)
//     }catch(error){
//         try{
//            server = servers[(current++)%2];
//            const response = await axios.post(server+endPoint,{
//             body:req.body
//         })
//         res.send(response)
//         }catch(error){
//             res.send(error)
//         }
//     }
// }


// app.get('*',handler).post('*',handler);

// const PORT =3000;

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });


const http = require('http');
const httpProxy = require('http-proxy');
const cors = require('cors');

const instances = [
  { target: 'http://localhost:3002' },
  { target: 'http://localhost:3001' },

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
