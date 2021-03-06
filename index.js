const express = require ("express");
const bodyParser = require ("body-parser");

const app = express();
//to get and use html file
app.use(bodyParser.urlencoded({extended: true}));
app.get ("/ladder", function (req, res) {
  res.sendFile(__dirname + "/ladder.html")
});

app.post("/ladder", function (req,res){
  var num1 = Number(req.body.n1);
  var num2 = Number(req.body.n2);

  var result = Math.sqrt(Math.pow(num1,2) + (Math.pow(num2,2)));

  res.send("The Ladder is " + result +" feet long");

  app.get("/ladder", function(req,res){
    res.sendFile(__dirname + "/ladder.html");
  })
});

app.post("/ladder", function(req,res){
  var height = parseInt(req.body.height);
  var depth = parseInt (req.body.depth);

  var ladderlength = Math.sqrt(Math.pow(height,2) + (Math.pow(depth,2)));
  res.send ( "The Ladder is " + ladderlength.toFixed(0) + " feet long");

});


//app.listen(3000, function () {
//console.log ("server is running on port 3000")
//});
