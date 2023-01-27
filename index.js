//require("dotenv").config();
const express = require('express');
const app = express();
var port=process.env.PORT || 3000;

var path=require('path');

app.use(express.static(path.join(__dirname, "assets")));

app.get('/', function (req, res) {

 // res.send('Merhaba Express');
  //res.send('<h1>Merhaba Express</h1>');
  res.sendFile( __dirname + "/" + "manifest.html");

});

app.get('/login', function (req, res) {

 // res.send('Merhaba Express');
  //res.send('<h1>Merhaba Express</h1>');
  res.sendFile( __dirname + "/" + "google2.html");

});

app.post('/', function (req, res) {
 // res.send('Merhaba Express');
  res.sendFile( __dirname + "/" + "earth.html");
});

app.listen(port, function () {
  console.log('Sunucu çalışıyor...');
});
