require("dotenv").config();
var fs = require('fs');
var path=require("path");
var http = require('http');
var https = require('https');
var cors=require("cors");
var helmet=require("helmet");
var os=require("os");
var nodemailer = require('nodemailer');

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
     res.sendFile( __dirname + "/sitemap.xml");
});

app.post('/mail/:id',function(req,res) {

    console.log(req.body);
    console.log(req.body.mail);
 
  var transporter = nodemailer.createTransport({
   host: "smtp.hostinger.com",
    //service:"yandex",
    secure:true, // TLS requires secureConnection to be false
    port: 465, // port for secure SMTP
    auth: {
      user: 'info@emirkorkut.com',
      pass: 'Antalya07@'
    }
  });
  
  var mailOptions = {
    from: 'info@emirkorkut.com',
    to: req.body.mail,
    subject: "E-KO feedback",
   // html : { path: 'www/mail.html' }
   // text: "emir"
   html:'<html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=no; "><link href="https://fonts.googleapis.com/css?family=Sarala:400,700|Hind+Vadodara:400,300,500,600,700|Open+Sans:400,800italic,800,700italic,700,600italic,600,400italic,300italic,300|Raleway:400,200,100,300,500,600,700,800,900|Montserrat:400,700|Playfair+Display:400,400italic,700,700italic,900,900italic|Lato:400,100italic,100,300,300italic,400italic,700,700italic,900,900italic|Merriweather:400,900italic,900,700italic,700,400italic,300italic,300|Nunito:400,700,300|Work+Sans:400,100,200,300,500,600,700,800,900" rel="stylesheet" type="text/css"><base target="_blank"><title>E-KO</title><style type="text/css">td[class].vadodara{font-family: "Vadodara", Arial, sans-serif !important}td[class].opensans{font-family: "Open Sans", Arial, sans-serif !important}td[class].raleway{font-family: "Raleway", Arial, sans-serif !important}td[class].rubik{font-family: "Rubik", Arial, sans-serif !important}td[class].montserrat{font-family: "Montserrat", Arial, sans-serif !important}td[class].hindvadodara{font-family: "Hind Vadodara", Arial, sans-serif !important}td[class].lato{font-family: "Lato", Arial, sans-serif !important}td[class].sarala{font-family: "Sarala", Arial, sans-serif !important}td[class].merriweather{font-family: "Merriweather", Arial, sans-serif !important}td[class].playfair{font-family: "Playfair Display", Arial, sans-serif !important}td[class].nunito{font-family: "Nunito", Arial, sans-serif !important}td[class].worksans{font-family: "Work Sans", Arial, sans-serif !important}div, p, a, li, td{-webkit-text-size-adjust:none;}*{-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;}td{word-break: break-word;}a{word-break: break-word; text-decoration: none; color: inherit;}body .ReadMsgBody{width: 100%; background-color:#012931;}body .ExternalClass{width: 100%; background-color:#012931;}body{width: 100%; height: 100%; background-color:#012931; margin:0; padding:0; -webkit-font-smoothing: antialiased;}html{background-color:#012931; width: 100%;}body p{padding: 0!important; margin-top: 0!important; margin-right: 0!important; margin-bottom: 0!important; margin-left: 0!important;}body img{user-drag: none; -moz-user-select: none; -webkit-user-drag: none;}body a.rotator img{-webkit-transition: all 1s ease-in-out;-moz-transition: all 1s ease-in-out; -o-transition: all 1s ease-in-out; -ms-transition: all 1s ease-in-out;}body a.rotator img:hover{-webkit-transform: rotate(360deg); -moz-transform: rotate(360deg); -o-transform: rotate(360deg);-ms-transform: rotate(360deg);}body .hover:hover{opacity:0.85;filter:alpha(opacity=85);}body .jump:hover{opacity:0.75; filter:alpha(opacity=75); padding-top: 10px!important;}body #logo110 img{width: 110px; height: auto;}body .avatar100 img{width: 100px; height: auto;}body .image55 img{width: 55px; height: auto;}body .icon24 img{width: 24px; margin-right:10px; height: auto;}#social{position: relative;left:-50px !important;}#img{position: relative;left:-60px !important;}#span{position: relative;top:-30px;left: 10px !important;padding-left: 10px !important; font-size: 27px; font-weight: 700; font-family: "Ubuntu", sans-serif; background: transparent !important; color:#ffffff; display: inline-block !important; width: 250% !important;}</style><style type="text/css">@media only screen and (max-width: 640px){body body{width:auto!important;}body table[class=full]{width: 100%!important; clear: both;}body table[class=mobile]{width: 100%!important; padding-left: 30px; padding-right: 30px; clear: both;background: #030404;}body table[class=fullCenter]{width: 100%!important; text-align: center!important; clear: both;}body td[class].fullCenter{width: 100%!important; text-align: center!important; clear: both;}body .erase{display: none;}body .buttonScale{float: none!important; text-align: center!important; display: inline-block!important; clear: both;}body td[class=pad20]{padding-left: 20px!important; padding-right: 20px!important; text-align: center!important; clear: both;}/*tbody{background: #121717;}*/#social{position: relative;left:-60px !important;}#span{position: relative;top:-30px;left:-15% !important;padding-left: 10px !important; font-size: 22px; font-weight: 700; font-family: "Ubuntu", sans-serif; background: transparent !important; color:#ffffff; width: 100% !important;}#img{position: relative;left:-40% !important;}}</style><style type="text/css">@media only screen and (max-width: 479px){body body{width:auto!important;}body table[class=full]{width: 100%!important; clear: both;}body table[class=mobile]{width: 100%!important; padding-left: 20px; padding-right: 20px; clear: both;background: #030404;}body table[class=fullCenter]{width: 100%!important; text-align: center!important; clear: both;}body td[class].fullCenter{width: 100%!important; text-align: center!important; clear: both;}body .erase{display: none;}body .buttonScale{float: none!important; text-align: center!important; display: inline-block!important; clear: both;}body td[class=pad20]{padding-left: 20px!important; padding-right: 20px!important; text-align: center!important; clear: both;}/* tbody{background: #121717;}*/#social{position: relative;left:-60px !important;}#span{position: relative;top:-30px;left:-15% !important;padding-left: 10px !important; font-size: 22px; font-weight: 700; font-family: "Ubuntu", sans-serif; background: transparent !important; color:#ffffff; width: 100% !important;}#img{position: relative;left:-40% !important;}}</style></head><body style="margin: 0; padding: 0;"><table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" class="full" bgcolor="#f4f5f6" style="background-color: #f4f5f6;"mc:repeatable="module2"><tbody style="background:#121717;"><tr><td align="center"><table class="mobile" align="center" border="0" width="100%" cellpadding="0" cellspacing="0"><tbody style="background:#121717;"><tr><td align="center"><table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="full" bgcolor="#ffffff" style="background-color: #ffffff;"><tbody style="background:#121717;"><tr><td width="100%" align="center"><table width="540" border="0" cellpadding="0" cellspacing="0" align="center" class="full"><tbody style="background:#121717;"><tr><td width="100%" height="20" style="font-size: 1px; line-height: 1px;">&nbsp;</td></tr><tr><td width="100%" valign="middle" align="center"><table width="110" border="0" cellpadding="0" cellspacing="0" align="left" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="fullCenter"><tbody ><tr><td height="50" valign="middle" align="center" width="100%" class="fullCenter" id="logo110" style="line-height: 1px;"><a href="#" id="img" style="text-decoration: none;"> <img src="https://emirkorkut.com/assets/images/icon6.png" style="height:60px; width:60px;" width="80" alt="" border="0" class="hover" mc:edit="1"></a><span id="span">EMIRKORKUT.COM</span></td></tr></tbody></table> <table width="350" border="0" cellpadding="0" cellspacing="0" align="right" style="text-align: right; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="fullCenter"><tbody><tr><td height="50" valign="middle" width="100%" style="font-family: Helvetica, Arial, sans-serif, "Open Sans"; color: #a0aebc; font-weight: 400; font-size: 13px; line-height: 24px;" class="opensans" mc:edit="2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href="#" style="text-decoration: none; color: #a0aebc;" class="underline">Web Sitesi</a></td></tr></tbody></table></td></tr><tr><td width="100%" height="20" style="font-size: 1px; line-height: 1px;">&nbsp;</td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table> </td></tr></table><table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" class="full" bgcolor="#f4f5f6" style="background-color: #f4f5f6;"mc:repeatable="module3"><tbody style="background:#121717;"><tr><td align="center"><table class="mobile" align="center" border="0" width="100%" cellpadding="0" cellspacing="0"><tbody><tr><td align="center"><table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="full" bgcolor="#012931" style="background-color: #012931;"><tbody><tr><td width="100%" align="center" style="background-image: url("https://emirkorkut.com/assets/images/header_bg.jpg") !important; -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover; background-position: center center; background-repeat: no-repeat;" background="https://emirkorkut.com/assets/images/header_bg.jpg"><table width="540" border="0" cellpadding="0" cellspacing="0" align="center" class="full"><tbody><tr><td width="100%" height="110" style="font-size: 1px; line-height: 1px;">&nbsp;</td></tr><tr><td width="100%" style="color: #ffffff; font-family: Helvetica, Arial, sans-serif, "Work Sans"; font-weight: 500; vertical-align: top; font-size: 28px; text-align: center; line-height: 34px; text-transform: uppercase;" class="pad20 worksans" mc:edit="3">OUR MISSION<br>YOUR VISION</td></tr><tr><td width="100%" height="80" style="font-size: 1px; line-height: 1px;">&nbsp;</td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table> </td></tr></table><table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" class="full" bgcolor="#f4f5f6" style="background-color: #f4f5f6;"mc:repeatable="module4"><tbody style="background:#121717;"><tr><td align="center"><table class="mobile" align="center" border="0" width="100%" cellpadding="0" cellspacing="0"><tbody style="background:#121717;"><tr><td align="center"><table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="full" bgcolor="#ffffff" style="background-color: #ffffff;"><tbody style="background:#121717;"><tr><td width="100%" align="center"><table width="500" border="0" cellpadding="0" cellspacing="0" align="center" class="full"><tbody><tr><td width="100%" height="50" style="font-size: 1px; line-height: 1px;">&nbsp;</td></tr><tr><td width="100%" height="20" style="font-size: 1px; line-height: 1px;">&nbsp;</td></tr><tr><td width="100%" style="color: #383d47; font-family: Helvetica, Arial, sans-serif, "Work Sans"; font-weight: 500; vertical-align: top; font-size: 28px; text-align: center; line-height: 34px;" class="fullCenter worksans" mc:edit="6">MERHABA</td></tr><tr><td width="100%" height="20" style="font-size: 1px; line-height: 1px;">&nbsp;</td></tr><tr><td width="100%" style="color: #747d8f; font-family: Helvetica, Arial, sans-serif, "Hind Vadodara"; font-weight: 400; vertical-align: top; font-size: 16px; text-align: center; line-height: 30px;" class="fullCenter hindvadodara" mc:edit="7">Mailiniz tarafımıza ulaşmıştır.<br>en kısa süre içerisinde geri dönüş sağlanacaktır.</td></tr><tr><td width="100%" height="25" style="font-size: 1px; line-height: 1px;">&nbsp;</td></tr><tr><td valign="middle" align="center"><table border="0" cellpadding="0" cellspacing="0" align="center" class="fullCenter"><tbody><tr> <td width="100%" align="center"> <table border="0" cellpadding="0" cellspacing="0" align="center" class="mcenter"> <tbody><tr><td align="center" height="40" style="border-radius: 50px; padding-left: 40px; padding-right: 40px; padding-bottom: 2px; font-weight: 400; font-family: Helvetica, Arial, sans-serif, "Montserrat"; color: #29bee9; font-size: 13px; border-width: 2px; border-style: solid; border-color: #29bee9; text-transform: uppercase;" class="montserrat" mc:edit="8"><a href="#" style="color: #29bee9; text-decoration: none; line-height: 6px;">Siteye Git</a></td></tr></tbody></table> </td></tr></tbody></table></td></tr><tr><td width="100%" height="80" style="font-size: 1px; line-height: 1px;">&nbsp;</td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table> </td></tr></table><table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" class="full" bgcolor="#f4f5f6" style="background-color: #f4f5f6;"mc:repeatable="module6"><tbody><tr><td align="center"><table class="mobile" align="center" border="0" width="100%" cellpadding="0" cellspacing="0"><tbody style="background:#121717;"><tr><td align="center"><table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="full"><tbody style="background:#121717;"><tr><td width="100%"><table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="full"><tbody style="background:#121717;"><tr><td width="100%" height="40" style="font-size: 1px; line-height: 1px;">&nbsp;</td></tr><tr><td width="100%" valign="middle" align="center"><table width="150" border="0" cellpadding="0" cellspacing="0" align="left" style="text-align: left; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="fullCenter"><tbody><tr><td height="40" valign="middle" width="100%" style="font-family: Helvetica, Arial, sans-serif, "Open Sans"; color: #383d47; font-weight: 400; font-size: 13px; line-height: 22px; text-align: left;" class="fullCenter opensans" mc:edit="11"><p style="color:#747d8f;">Copyright © 2023<a href="#" translate="no" style="color:#005BA4;"> EMIR KORKUT </a> All Rights Reserved. </p></td></tr></tbody></table><table width="70" border="0" cellpadding="0" cellspacing="0" align="left" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="erase"><tbody><tr><td width="100%" height="1" style="font-size: 1px; line-height: 1px;">&nbsp;</td></tr></tbody></table><table width="60" border="0" cellpadding="0" cellspacing="0" align="left" style="text-align: left; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="fullCenter"><tbody><tr><td width="100%" align="center" class="icon24"><table width="60" border="0" cellpadding="0" cellspacing="0" align="left" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; text-align: left;" class="buttonScale"><tbody id="social"><tr><td width="24" height="40"><a href="#" style="text-decoration: none;"><img src="https://emirkorkut.com/assets/images/social_icon1.png" width="24" alt="" border="0" mc:edit="12"></a></td><td width="10" height="40" style="font-size: 1px; line-height: 1px;">&nbsp;</td><td width="24"><a href="#" style="text-decoration: none;"><img src="https://emirkorkut.com/assets/images/social_icon2.png" width="24" alt="" border="0" mc:edit="13"></a></td><td width="10" height="40" style="font-size: 1px; line-height: 1px;">&nbsp;</td><td width="24"><a href="#" style="text-decoration: none;"><img src="https://emirkorkut.com/assets/images/instagram.png" width="24" alt="" border="0" mc:edit="13"></a></td><td width="10" height="40" style="font-size: 1px; line-height: 1px;">&nbsp;</td><td width="24"><a href="#" style="text-decoration: none;"><img src="https://emirkorkut.com/assets/images/linkedin.png" width="24" alt="" border="0" mc:edit="13"></a></td><td width="10" height="40" style="font-size: 1px; line-height: 1px;">&nbsp;</td><td width="24"><a href="#" style="text-decoration: none;"><img src="https://emirkorkut.com/assets/images/youtube.png" width="24" alt="" border="0" mc:edit="13"></a></td><td width="10" height="40" style="font-size: 1px; line-height: 1px;">&nbsp;</td><td width="24"><a href="#" style="text-decoration: none;"><img src="https://emirkorkut.com/assets/images/whatsapp.png" width="24" alt="" border="0" mc:edit="13"></a></td></tr></tbody></table></td></tr></tbody></table><table width="220" border="0" cellpadding="0" cellspacing="0" align="right" style="text-align: right; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="fullCenter"><tbody><tr><td height="40" valign="middle" width="100%" style="font-family: Helvetica, Arial, sans-serif, "Open Sans"; color: #9098a9; font-weight: 400; font-size: 13px; line-height: 22px; text-align: right;" class="fullCenter opensans" mc:edit="14"><a href="#" style="text-decoration: none; color: #9098a9;" class="underline">Hakkımda</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href="#" style="text-decoration: none; color: #9098a9;" class="underline">İletişim</a></td></tr></tbody></table></td></tr><tr><td width="100%" height="25" style="font-size: 1px; line-height: 1px;" class="h20">&nbsp;</td></tr><tr><td width="100%" height="1" style="font-size: 1px; line-height: 1px;">&nbsp;</td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table> </td></tr></table></body></html>'
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
        res.send(info.response);
    }
  });

});

app.use((req, res, next) => {
    res.status(404).sendFile( __dirname + "/www/error.html");
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

