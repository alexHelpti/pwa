const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
};

https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end('Hello, world!');
}).listen(8000);