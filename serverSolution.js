const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

const port = 3000;

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use. Please choose a different port.`);
    process.exit(1); // Exit with an error code
  } else {
    console.error(`An unexpected error occurred: ${err.message}`);
    process.exit(1);
  }
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});