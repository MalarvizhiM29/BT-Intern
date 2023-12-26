const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {

  const parsedUrl = url.parse(req.url, true);

  const path = parsedUrl.pathname;

  res.setHeader('Content-Type', 'text/plain');


  if (path === '/') {
    res.end('Welcome to the homepage!');
  } else if (path === '/about') {
    res.end('About Us');
  } else if (path === '/contact') {
    res.end('Contact Us');
  } else {
    res.statusCode = 404;
    res.end('404 Not Found');
  }
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server running`);
});
