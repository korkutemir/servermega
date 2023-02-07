var fs = require('fs');
var path=require("path");
var http = require('http');
var https = require('https');
//var privateKey  = fs.readFileSync('openssl/private.key', 'utf8');
//var certificate = fs.readFileSync('openssl/selfsigned.crt', 'utf8');

//var credentials = {key: privateKey, cert: certificate};
var express = require('express');
//var cors=require("cors");
//var helmet=require("helmet");
//var rateLimit=require("express-rate-limit");
var app = express();

/*const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})*/

// Apply the rate limiting middleware to all requests
//app.use(limiter);

//app.use(express.static(`${__dirname}`));
//app.use("/static", express.static(__dirname + "/nodejs"));
app.use(express.static(path.join(__dirname, "assets")));
app.use(express.json());
//app.use(express.urlencoded());
app.use(express.urlencoded({ extended: false }));
//app.use(express.bodyParser());
//app.use(cookieParser());
//app.use(cors());
//app.options('*', cors());
//app.use(helmet());
//app.use(helmet({ contentSecurityPolicy: false, crossOriginEmbedderPolicy: false }));
/*app.use(helmet.xssFilter());
app.use(helmet.referrerPolicy());
app.use(helmet.permittedCrossDomainPolicies());
app.use(helmet.originAgentCluster());
app.use(helmet.noSniff());
app.use(helmet.ieNoOpen());
app.use(helmet.hsts());
app.use(helmet.hidePoweredBy());
app.use(helmet.frameguard());
app.use(helmet.expectCt());
app.use(helmet.dnsPrefetchControl());
app.use(helmet.contentSecurityPolicy()); */

app.use(function (req, res, next) {
    res.setHeader(
      'Content-Security-Policy-Report-Only',
      "default-src 'self'; font-src 'self'; img-src 'self' https://img.freepik.com/premium-vector/world-map-polygon-line-style-vector-design-illustration_4974-218.jpg; script-src 'self' https://cdnjs.cloudflare.com/ajax/libs/three.js/0.145.0/three.min.js , https://mamboleoo.be/learnThree/demos/OBJLoader.js; style-src 'self'; frame-src 'self'"
    );
    next();
  }); 

  app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE,ALL');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use((req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    next();
  });
  

var whitelist = ['http://192.168.1.166:8080', 'https://192.168.1.166:8443']
/*var corsOptions = {
     origin: (origin, callback) => {
          if (whitelist.indexOf(origin) !== -1)
               callback(null, true);
          else
              // callback(new Error("! ! !"));
              callback(null,true);
     }
} */

var corsOptions={
    origin:'*'
}
//var ip_1=192.168+"."+43.114;
//var ip_1=192.168+"."+56.1;
// your express configuration here

/*app.get('/about',cors(corsOptions),function(req,res) {
    res.sendFile( __dirname + "/" + "earth.html");
    console.log(req.socket.remoteAddress+ ","+req.connection.remoteAddress);
    console.log(req.params.id+","+req.app.get('views')+","+req.baseUrl+","+req.hostname+","+req.protocol);
    
}); */

app.get('/megagen',function(req,res,next) {
    res.sendFile( __dirname + "/uCard-Html" + "/index.html");
   // res.download('eko.pdf');
}); 

app.get('/proccess',function(req,res) {
    res.send({"name":process.pid});
});

app.get("/error",function(req,res) {
    res.status(500).send({ error: 'something blew up' });
});

app.get("/error2",function(req,res) {
    res.status(404).send({ error: 'something blew up' });
});

app.post("/send_server/:id",function(req,res) {
   // res.send({korkut:"emir"});
    console.log(req.body);

const MongoClient = require('mongodb').MongoClient;
//const URL = 'mongodb://localhost:27017';
const URL = 'mongodb+srv://megagen:megagen07@cluster0.p6cbt1r.mongodb.net/?authSource=admin';



MongoClient.connect(URL, (err, client) => {
  if (err) throw err;

  const db = client.db('megagen');

 
   var veriler_3=[req.body];


  db.collection('contact').insertMany(veriler_3, (err, result) => {
    if (err) throw err;
    console.log(result.insertedCount + ' kayıt eklendi.');
   // client.close();
  });

});

    
  
});

app.all("/delek/:id",function(req,res) {

  console.log(req.params);
  console.log(req.query);
});

var wiki=require("./wiki");

//app.use("/wiki",wiki);

app.get('/megagen2/:id',function(req,res,next) {
   // res.sendFile( __dirname + "/" + "pwa.html");
   // res.download('eko.pdf');

   console.log(req.query);

   var dizin_1=[];
   var dizin_2=[];
   var dizin_3=[];

   console.log(Object.keys(req.query).length);

   if(Object.keys(req.query).length !==0) {

    

    const MongoClient = require('mongodb').MongoClient;
  //  const URL = 'mongodb://localhost:27017';
    const URL = 'mongodb+srv://megagen:megagen07@cluster0.p6cbt1r.mongodb.net/?authSource=admin';

    
    if(req.query.membership=="pro") {
    
      
        
        MongoClient.connect(URL, (err, client) => {
          if (err) throw err;
        
          const db = client.db('megagen');
          let sorgu_pro = {membership:"pro"};
          let sorgu_premium = {membership:"premium"};
          let sorgu_free = {membership:"free"};
          var sorgu3=req.query;
          let sorgu_2={name:"Section"}
          db.collection('anyridge').find(sorgu_pro, { projection: { _id: 0 } }).toArray((err, result) => {
            if (err) throw err;
            console.log(result);
        
           // res.send(result);
        
           // client.close();

           dizin_1.push(result);
          });

          db.collection('anyridge').find(sorgu_premium, { projection: { _id: 0 } }).toArray((err, result) => {
            if (err) throw err;
            console.log(result);
        
           // res.send(result);
        
           // client.close();

           dizin_1.push(result);
          });

          db.collection('anyridge').find(sorgu_free, { projection: { _id: 0 } }).toArray((err, result) => {
            if (err) throw err;
            console.log(result);
        
          //  res.send(result);
        
           // client.close();

           dizin_1.push(result);

          // res.send(dizin_1);
          });

          db.collection('anyone').find(sorgu_pro, { projection: { _id: 0 } }).toArray((err, result) => {
            if (err) throw err;
            console.log(result);
        
          //  res.send(result);
        
           // client.close();

           dizin_2.push(result);

         //  res.send(dizin_1);
          });

          db.collection('anyone').find(sorgu_premium, { projection: { _id: 0 } }).toArray((err, result) => {
            if (err) throw err;
            console.log(result);
        
          //  res.send(result);
        
           // client.close();

           dizin_2.push(result);

         //  res.send(dizin_1);
          });

          db.collection('anyone').find(sorgu_free, { projection: { _id: 0 } }).toArray((err, result) => {
            if (err) throw err;
            console.log(result);
        
          //  res.send(result);
        
           // client.close();

           dizin_2.push(result);

         //  res.send({dizin_1,dizin_2});
          });

          db.collection('st').find(sorgu_pro, { projection: { _id: 0 } }).toArray((err, result) => {
            if (err) throw err;
            console.log(result);
        
          //  res.send(result);
        
           // client.close();

           dizin_3.push(result);

         //  res.send({dizin_1,dizin_2});
          });

          db.collection('st').find(sorgu_premium, { projection: { _id: 0 } }).toArray((err, result) => {
            if (err) throw err;
            console.log(result);
        
          //  res.send(result);
        
           // client.close();

           dizin_3.push(result);

         //  res.send({dizin_1,dizin_2});
          });

          db.collection('st').find(sorgu_free, { projection: { _id: 0 } }).toArray((err, result) => {
            if (err) throw err;
            console.log(result);
        
          //  res.send(result);
        
           // client.close();

           dizin_3.push(result);

           res.send({dizin_1,dizin_2,dizin_3});
          });

        
        
        }); 

    }

    else if(req.query.membership=="premium") {
        MongoClient.connect(URL, (err, client) => {
            if (err) throw err;
          
            const db = client.db('megagen');
            let sorgu_pro = {membership:"pro"};
            let sorgu_premium = {membership:"premium"};
            let sorgu_free = {membership:"free"};
            var sorgu3=req.query;
            let sorgu_2={name:"Section"}
            db.collection('anyridge').find(sorgu_premium, { projection: { _id: 0 } }).toArray((err, result) => {
              if (err) throw err;
              console.log(result);
          
             // res.send(result);
          
             // client.close();
  
             dizin_1.push(result);
            });
  
            db.collection('anyridge').find(sorgu_free, { projection: { _id: 0 } }).toArray((err, result) => {
              if (err) throw err;
              console.log(result);
          
             // res.send(result);
          
             // client.close();
  
             dizin_1.push(result);

            // res.send(dizin_1);
            });
  
            db.collection('anyone').find(sorgu_premium, { projection: { _id: 0 } }).toArray((err, result) => {
                if (err) throw err;
                console.log(result);
            
               // res.send(result);
            
               // client.close();
    
               dizin_2.push(result);
  
              // res.send(dizin_1);
              });

              db.collection('anyone').find(sorgu_free, { projection: { _id: 0 } }).toArray((err, result) => {
                if (err) throw err;
                console.log(result);
            
               // res.send(result);
            
               // client.close();
    
               dizin_2.push(result);
  
              // res.send(dizin_1);
              });

              db.collection('st').find(sorgu_premium, { projection: { _id: 0 } }).toArray((err, result) => {
                if (err) throw err;
                console.log(result);
            
               // res.send(result);
            
               // client.close();
    
               dizin_3.push(result);
  
              // res.send(dizin_1);
              });

              db.collection('st').find(sorgu_free, { projection: { _id: 0 } }).toArray((err, result) => {
                if (err) throw err;
                console.log(result);
            
               // res.send(result);
            
               // client.close();
    
               dizin_3.push(result);
  
               res.send({dizin_1,dizin_2,dizin_3});
              });
  
          
          
          }); 

    }

    else if(req.query.membership=="free") {

        MongoClient.connect(URL, (err, client) => {
            if (err) throw err;
          
            const db = client.db('megagen');
            let sorgu_pro = {membership:"pro"};
            let sorgu_premium = {membership:"premium"};
            let sorgu_free = {membership:"free"};
            var sorgu3=req.query;
            let sorgu_2={name:"Section"}
            db.collection('anyridge').find(sorgu_free, { projection: { _id: 0 } }).toArray((err, result) => {
              if (err) throw err;
              console.log(result);
          
             // res.send(result);
          
             // client.close();
  
             dizin_1.push(result);

             //res.send(dizin_1);
            });
  
            db.collection('anyone').find(sorgu_free, { projection: { _id: 0 } }).toArray((err, result) => {
                if (err) throw err;
                console.log(result);
            
               // res.send(result);
            
               // client.close();
    
               dizin_2.push(result);
  
               //res.send(dizin_1);
              });

              db.collection('st').find(sorgu_free, { projection: { _id: 0 } }).toArray((err, result) => {
                if (err) throw err;
                console.log(result);
            
               // res.send(result);
            
               // client.close();
    
               dizin_3.push(result);
  
               res.send({dizin_1,dizin_2,dizin_3});
              });
       
  
   
  
          
          
          }); 

    }

  
   }

   else {
       res.send("null");
   }
}); 

app.get('/notification', function(req, res) {
    const date = new Date();
    const message = {
      date: date.toLocaleString()
    }
    res.send(message)
  });

var httpServer = http.createServer(app);
//var httpsServer = https.createServer(credentials, app); 

/*httpsServer.listen(8443,ip_1,function() {
    console.log("server 8443");
}); */

httpServer.listen(8080,ip_1,function() {
    console.log("server 8080");
});

