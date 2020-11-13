const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var request = require('request');

var serveIndex = require('serve-index');
var http = require('http').Server(app);
app.use(express.static(__dirname + "/"))
app.use('/', serveIndex(__dirname + '/'));

const port = 3000;
http.listen(port, () => {
    console.log(`Server listening at ${port}`);
});