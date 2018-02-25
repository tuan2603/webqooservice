var express = require("express");
var Request = require("request");
var app = express();
app.use(express.static("public"));
app.set("view engine","ejs");
app.set("views","./views");

var port = process.env.PORT || 3000;

var bodyParser = require('body-parser');
// create application/json parser
var jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// POST /login gets urlencoded bodies
app.post('/login', urlencodedParser, function (req, res) {
  if (!req.body) return res.sendStatus(400)
  res.send('welcome, ' + req.body.username)
});

// POST /api/users gets JSON bodies
app.post('/api/users', jsonParser, function (req, res) {
  if (!req.body) return res.sendStatus(400)
  // create user in req.body
  var name = req.body.username;
  var pass = req.body.password;
  res.send("username: "+name+", password: " + pass)
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.listen(port, function() {
  console.log('running my app on PORT: ' + port);
});
//view trang chu

var a = [];
app.get("/",function(req, res){
  res.render("index",{"users":a})
})

app.get('/hello',function(req,res){
  res.send("hello")
});



Request.get("http://5.189.151.166/get_services_main_screen", (error, response, body) => {
    if(error) {
        return console.dir(error);
    }
      //res.render("index", JSON.parse(body));
  //console.dir(JSON.parse(body));
  //console.dir(JSON.stringify(body));
  var i = 0;

    var json = JSON.parse(body);
    for(var myKey in json) {
      var json2 = json[myKey];

        for(var myKey2 in json2) {
          if (i < 1) {
            var json3 = json2[myKey2];

           a.push(json3);
           //i++;
          }
       }
   }

   for (var myKey2 in a) {
      console.dir(a[myKey2]);
   }

});


Request.post({
    "headers": { "content-type": "application/json" },
    "url": "http://httpbin.org/post",
    "body": JSON.stringify({
        "firstname": "Nic",
        "lastname": "Raboy"
    })
}, (error, response, body) => {
    if(error) {
        return console.dir(error);
    }
    //console.dir(JSON.parse(body));
});
