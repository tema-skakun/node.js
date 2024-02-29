// const Logger = require('./log');
//
// const logger = new Logger();
//
// logger.on('some_event', (args) => {
//   const { id, text } = args;
//   console.log(id, text);
// });
//
// logger.log('User Logged!');

const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log('Server request');
  console.log(req.url, req.method);

  res.setHeader('Content-Type', 'text/html');
  // res.setHeader('Content-Type', 'application/json');

  // const data = JSON.stringify([
  //   { name: 'Tommy', age: 35 },
  //   { name: 'Arthur', age: 40 },
  // ]);

  res.write('<head><link rel="stylesheet" href="#"></head>');
  res.write('<h1>Hello world!</h1>');
  res.write('<p>My name is Artem</p>');

  res.end();
});

server.listen(PORT, 'localhost', (error) => {
  error ? console.log(error) : console.log(`listening port ${PORT}`);
});
