var express = require('express');
var app = express();
var cors = require('cors')
var router = require('./router')

app.use(router)
app.use(cors())


var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});