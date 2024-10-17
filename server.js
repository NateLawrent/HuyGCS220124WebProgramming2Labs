const http = require('http');

const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;

  if (req.url === '/student') {
    res.setHeader('Content-Type', 'text/plain');
    res.end('This is student Page\n');
  } else if (req.url === '/admin') {
    res.setHeader('Content-Type', 'text/plain');
    res.end('This is admin Page\n');
  } else if (req.url === '/data') {
    res.setHeader('Content-Type', 'application/json');
    const jsonResponse = {
      message: "Hello World JSON"
    };
    res.end(JSON.stringify(jsonResponse));
  } else {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Invalid Request!\n');
  }
});

server.listen(port, hostname, () => {
  console.log(`Node.js web server at port ${port} is running..`);
});
