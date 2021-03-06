var express = require('express');
var parser = require('body-parser');
var app = express();
var path = require("path");
app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(express.static('client/build'));

var MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost:27017/library", function(err, client){
  if(err){
    return console.log(err);
  }

  db = client.db("library");
  console.log("connected to DB");

  app.listen(3000, function(){
    console.log("Listening on port 3000");
  });
});

app.get('/', function(req, res){
  res.sendFile(__dirname + '/client/build/index.html');
});

app.get("/library", function(req, res){
  db.collection("books").find().toArray(function(err, results){
    if(err){
      console.log(err);
    }
    res.json(results);
  })
});

app.post("/library", function(req, res){
  db.collection("books").save(req.body, function(err, result){
    if(err){
      return console.log(err);
    }
    console.log("saved to db");
    res.redirect("/");
  });
});

app.post("/library/delete", function(req, res){
  db.collection('books').remove();
  res.redirect("/");
})


//
// filmRouter.get('/:id', function(req, res){
//   res.json(films[req.params.id])
// });
