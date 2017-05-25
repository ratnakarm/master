var fs = require('fs');
var file = __dirname + '/users.json';
var http = require ('http');
var server = http.createServer(function (req, res){
  res.writeHead(200, {'Content-Type': 'application/json'});
  fs.createReadStream(file, 'utf8').pipe(res);
});
server.listen(8000);