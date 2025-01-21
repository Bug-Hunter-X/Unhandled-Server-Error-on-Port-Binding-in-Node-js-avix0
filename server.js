const http = require('http');

const server = http.createServer((req, res) => {
  // Handle request here
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//This is a classic example of a Node.js bug related to asynchronous operations.
//In this code, the server.listen() call is asynchronous and returns immediately.
//If the server encounters an error, the callback function will not execute until after the server has started listening.
//This can lead to issues where the server fails to start and the error message is never logged to the console.

//The bug in this code is that the error handling is incomplete.
//In case the port 3000 is already used, the error is caught but there's no proper way of handling it.  It just silently fails.