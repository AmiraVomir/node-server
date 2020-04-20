const http = require('http');
const db = require('./db');


const hostname = '127.0.0.1';
const port = '3000';


const server = http.createServer((req, res) => {
  db.picker((unlucky) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(unlucky);
  })
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});

console.log('This server works');