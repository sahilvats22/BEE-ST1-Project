var express = require("express");
var app = express();
const https = require("https");
const bodyParser = require("body-parser");
var send;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname))
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/formg.html");
});
app.post("/addapi", function (req, res) {
  var fullname = req.body.fullname;
  var email = req.body.email;
  var address = req.body.address;
  var totalmarks = req.body.totalmarks;
  var Average = req.body.Average;
  var Grade = req.body.Grade;

  send = {
    fullname: fullname,
    email: email,
    address: address,
    totalmarks: totalmarks,
    Average: Average,
    Grade: Grade,
  };
  console.log(send);
  res.send("ADD DATA");
});
app.get("/show", function (req, res) {
  res.send(send);
});
app.listen(9094);
