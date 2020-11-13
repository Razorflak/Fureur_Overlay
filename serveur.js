const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var request = require('request');

var serveIndex = require('serve-index');
var http = require('http').Server(app);
app.use(express.static(__dirname + "/"))
app.get("*", (req, res) => {
	res.sendFile("preview.html", { root: __dirname }, (err) => {
	  res.end();
   
	  if (err) throw err;
	});
   });

const port = 3000;
http.listen(port, () => {
    console.log(`Server listening at ${port}`);
});