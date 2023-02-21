var fs = require('fs');
var path=require("path");
var http = require('http');
var https = require('https');

var express = require('express');
const fileUpload = require('express-fileupload');


var app = express();


//app.use(express.static(`${__dirname}`));
//app.use("/static", express.static(__dirname + "/nodejs"));
app.use(express.static(path.join(__dirname, "assets")));
app.use(express.json());

app.use(fileUpload());




app.use(express.urlencoded({ extended: false }));


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
  

app.post('/upload', function(req, res) {
  let sampleFile;
  let uploadPath;

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  sampleFile = req.files.sampleFile;
  uploadPath = 'https://localhost:8080/js/images/' + sampleFile.name;

  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv(uploadPath, function(err) {
    if (err)
      return res.status(500).send(err);

    res.send('File uploaded!');
  });
});



app.get('/',function(req,res,next) {
    res.sendFile( __dirname + "/www/index.html");
   // res.download('eko.pdf');
}); 

app.get('/megagen-content',function(req,res,next) {
  res.sendFile( __dirname + "/www/products_server3.html");
 // res.download('eko.pdf');
});

app.get('/megagen-admin',function(req,res,next) {
  res.sendFile( __dirname + "/www/index-1.html");
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

          db.collection('st').find(sorgu_free, { projection: { _id: 0 } }).toArray(async (err, result) => {
            if (err) throw err;
            console.log(result);
        
          //  res.send(result);
        
           // client.close();

          await dizin_3.push(result);

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


app.post("/send_server2/:id",function(req,res) {
  // res.send({korkut:"emir"});
   console.log(req.body);

const MongoClient = require('mongodb').MongoClient;
//const URL = 'mongodb://localhost:27017';
 const URL = 'mongodb+srv://megagen:megagen07@cluster0.p6cbt1r.mongodb.net/?authSource=admin';


MongoClient.connect(URL, (err, client) => {
 if (err) throw err;

 const db = client.db('megagen');


  var veriler_3=[req.body];

  console.log(req.body.group);

  

 db.collection(req.body.group).insertMany(veriler_3, (err, result) => {
   if (err) throw err;
   console.log(result.insertedCount + ' kayıt eklendi.');
  // client.close();
 });

});

   
 
});


app.post("/delete_server2/:id",function(req,res) {
    // res.send({korkut:"emir"});
     console.log(req.body);
     console.log(new Date().toLocaleTimeString());
  
  
     const MongoClient = require('mongodb').MongoClient;
//const URL = 'mongodb://localhost:27017';
 const URL = 'mongodb+srv://megagen:megagen07@cluster0.p6cbt1r.mongodb.net/?authSource=admin';


MongoClient.connect(URL, (err, client) => {
 if (err) throw err;

 const db = client.db('megagen');


  var veriler_3=[req.body];

  console.log(req.body.group);

  for(var i=1;i<=veriler_3.length;i++) {
      console.log(i);
  }

 db.collection(req.body.group).deleteOne(req.body, (err, result) => {
   if (err) throw err;
   console.log(' model deleted.');
  // client.close();
 });

});
   
  });


app.get('/notification', function(req, res) {
    const date = new Date();
    const message = {
      date: date.toLocaleString()
    }
    res.send(message)
  });


  app.get('/megagen-uuid/:id',function(req,res,next) {
    // res.sendFile( __dirname + "/" + "pwa.html");
    // res.download('eko.pdf');
 
    console.log(req.query);
    console.log(req.query.desktop_uuid);


 
    var dizin_1=[];
    var dizin_2=[];
    var dizin_3=[];
 
    console.log(Object.keys(req.query).length);
 
    if(Object.keys(req.query).length !==0) {
 
     
 
     const MongoClient = require('mongodb').MongoClient;
   //  const URL = 'mongodb://localhost:27017';
     const URL = 'mongodb+srv://megagen:megagen07@cluster0.p6cbt1r.mongodb.net/?authSource=admin';
 
     MongoClient.connect(URL,(err,client)=> {
      if(err) throw err;
      const db = client.db('megagen');
      db.collection('deviceid').find(req.query.deviceid, { projection: { _id: 0 } }).toArray((err, result) => {
        if (err) throw err;
        console.log("RESULT :"+result[0].username);

        console.log(result.length);
      for(var i=0;i<=result.length;i++) {
         
          console.log(result[i].username);
          console.log(i);
          if(result[i].desktop_uuid==req.query.desktop_uuid) {
            
      device();
          }
        }
    
     
      });
     });
     
    function  device() {
     
       
         
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
 
           db.collection('st').find(sorgu_free, { projection: { _id: 0 } }).toArray(async (err, result) => {
             if (err) throw err;
             console.log(result);
         
           //  res.send(result);
         
            // client.close();
 
           await dizin_3.push(result);
 
            res.send({dizin_1,dizin_2,dizin_3});
           });
 
         
         
         }); 
 
     }
 
  
 

 
   
    }
 
   
 }); 


var httpServer = http.createServer(app);
//var httpsServer = https.createServer(credentials, app); 

/*httpsServer.listen(8443,ip_1,function() {
    console.log("server 8443");
}); */

httpServer.listen(8080,function() {
    console.log("server 8080");
});

