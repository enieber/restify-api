const server = require('./server');
const port = Number(process.env.SERVER_PORT) || 8080;

server.listen(port, function () {
  console.log('TooDoo API server listeninf on %j', server.address());
});
