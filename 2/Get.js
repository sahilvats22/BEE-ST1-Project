
var express=require("express");
var app=express();
const https=require("http");
const bodyParser=require("body-parser")
var send;



app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.urlencode({extended :false}))


  app.get("/",(req,res)=>{
    const url="http://localhost:9094/show";
   https.get(url,(response)=>{
     response.on("data",(d)=>{
      var final_data=d;
       res.send("<h1>"+final_data+"</h1>")
    

     })
   });

  });
app.listen(8099,(req,res)=>{
  console.log("Server is running on port 8099")
});
