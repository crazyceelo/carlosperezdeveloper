var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var routes = require("./config/api-routes");
var http = require ('http');

// Server configuration
var app = express();
var PORT = process.env.PORT || 3000;

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));

app.use(express.static("public"));

// nodemailer configuration settings
    // code

// MongoDB configuration
// mongoose.connect("mongodb://localhost/personal-trainer-app");
var uriString = 
process.env.MONGOLAB_URI ||
process.env.MONGOHQ_URL ||
"mongodb://localhost/carlosperezdeveloper";

mongoose.connect(uriString, function(err, res){
    if (err){
        console.log("error connecting to: " + uriString +". "+ err);
    }
    else{
        console.log("succeeded connected to: " + uriString);
    }
});


var db = mongoose.connection;

db.on("error", function(error){
    console.log("Mongoose Error: ", error);
});

db.once("open", function(){
    console.log("Mongoose connection successful.");
})

// this is for api-routes
// routes(app);

app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
})