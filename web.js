var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, respons  e) {
  var res = readFile('index.html');
  response.send(res);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

var readFile = function(filename) {
  var buf = fs.readFileSync(filename);
  var res = buf.toString();
  return res;
};

//console.log(readFile('index.html'));
