var express           = require('express');
var methodOverride    = require('method-override');
var bodyParser        = require('body-parser');

var app = express();

app.use(methodOverride('X-HTTP-Method'));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(methodOverride('X-Method-Override'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true} ));

// Verifica url do favicon
app.use(function (req, res, next) {
  if(req.url === '/favicon.ico') {
    res.writeHead(200, {'content-type': 'image/x-icon'});
    res.end('');
  }else {
    next();
  }
});

//Rotas
app.get('/', require('./routes'));

//tratamento de erros
app.use(function (req, res, next) {
  var err = new error('Não encontrado');
  err.status(404);
});

app.use( function (err, req, res, netx) {
  res.status(err.status || 500).json( {err: err.message} );
});

//Server
module.exports = app;
