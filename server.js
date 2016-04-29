const restify = require('restify');
const bunyan = require('bunyan');
const options = {
  name: 'TooDoo Api'
};

const server = restify.createServer(options);

server.on('after', restify.auditLogger({
  log: bunyan.createLogger({
    name: 'audit',
    stream: process.stdout
  })
}));

module.exports = server;

require('./routes');
