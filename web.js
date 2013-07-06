var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    "use strict";
    var res = readFile('index.html');
    response.send(res);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
    "use strict";
    console.log("Listening on " + port);
});

var readFile = function(filename) {
    "use strict";
    var buf = fs.readFileSync(filename);
    var res = buf.toString();
    return res;
};

//console.log(readFile('index.html'));
