var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, respons  e) {
  var buf = fs.readFile('index.html');
  var res = buf.toString();
  response.send(res);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
