var http  = require('http');
var fs    = require('fs');
var fileName = String(process.argv[2] || '').replace(/[^a-z0-9\.]/gi, '');
var quantityOfParagraphs = String(process.argv[3] || '').replace(/[^\d]/g, '');
const USAGE = 'uso Node loremipsum.js {nomeArquivo} {quantidadeParágrafos}';

if (!fileName || !quantityOfParagraphs) {
  return console.log(USAGE);
}

http.get('http://loripsum.net/api/' + quantityOfParagraphs, function(res) {
  var text = '';

  res.on('data', function(chunk) {
    text += chunk;
  });
  res.on('end', function() {
    fs.writeFile(filename, text, function() {
      console.log('Arquivo ' + filename + ' Ok!');
    });
  });

}).on('error', function(e) {
  console.log('Got Error: ' + e.message);
});
