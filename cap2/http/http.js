"use strict";

var http = require('http');
var server = http.createServer(function (request, response) {
  response.writeHead(200, {'content-type': 'text/plain'});
  if(request.url === '/') {
    response.end('Hello, Rai');
  }else if(request.url === '/contato'){
    response.end('contato@raisiqueira.com');
  }else{
    response.end('Not found, 404');
  }
});

server.listen(1337, '127.0.0.1');
console.log('Server runnning at localhost:1337');
