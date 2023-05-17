require("dotenv").config();
var fs = require('fs');
var path=require("path");
var http = require('http');
var https = require('https');
var cors=require("cors");
var helmet=require("helmet");
var os=require("os");

var express = require('express');


var app = express();



//app.use(helmet());


//app.use(express.static(`${__dirname}`));
//app.use("/static", express.static(__dirname + "/nodejs"));
app.use(express.static(path.join(__dirname, "/")));
app.use(express.json());





app.use(express.urlencoded({ extended: false }));


/*app.use(function (req, res, next) {
    res.setHeader(
      'Content-Security-Policy-Report-Only',
      "default-src 'self'; font-src 'self'; img-src 'self' https://img.freepik.com/premium-vector/world-map-polygon-line-style-vector-design-illustration_4974-218.jpg; script-src 'self' https://cdnjs.cloudflare.com/ajax/libs/three.js/0.145.0/three.min.js , https://mamboleoo.be/learnThree/demos/OBJLoader.js; style-src 'self'; frame-src 'self'"
    );
    next();
  }); */

  app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE,ALL');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}); 

/*app.use(function(req,res,next){
  if(req.headers['x-forwarded-proto']!='https')
    res.redirect('https://emirkorkut.com'+req.url);
  else
    next() /* Continue to other routes if we're not redirecting */
//});

app.use((req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    next();
  });
  




app.get('/',function(req,res,next) {
    res.sendFile( __dirname + "/www/index.html");
   // res.download('eko.pdf');
}); 

app.get('/about',function(req,res,next) {
  res.sendFile( __dirname + "/www/aboutme.html");
 // res.download('eko.pdf');
});

app.get('/contact',function(req,res) {
   // res.send({"name":process.pid});
      res.sendFile( __dirname + "/www/contact.html");
});

app.get('/home-tr',function(req,res) {
  // res.send({"name":process.pid});
     res.sendFile( __dirname + "/www/index-tr.html");
});

app.get('/about-tr',function(req,res) {
  // res.send({"name":process.pid});
     res.sendFile( __dirname + "/www/aboutme-tr.html");
});

app.get('/contact-tr',function(req,res) {
  // res.send({"name":process.pid});
     res.sendFile( __dirname + "/www/contact-tr.html");
});

 app.get('/sitemap',function(req,res) {
  // res.send({"name":process.pid});
     res.sendFile( __dirname + "/www/sitemap.xml");
});
 var port=process.env.PORT || 8080;


var httpServer = http.createServer(app);
//var httpsServer = https.createServer(credentials, app); 

/*httpsServer.listen(8443,ip_1,function() {
    console.log("server 8443");
}); */

httpServer.listen(port,function() {
    console.log("server 8080");
});

