const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const routes = require("./config/api-routes");
const http = require ('http');
const nodemailer = require('nodemailer');
const request = require("request");

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
// Generate test SMTP service account from ethereal.email
// create gmail reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: 'solracias@gmail.com', // gmail user name.
        pass: 'kpsetqeqpezbrnee' // gmail pass key. not the actual password.
    }
});

// local Dependencies. passing variables to a different file.
// const api = require('./config/api-routes')(express,db,request,transporter);

// configure express to handle all api routes here.
// app.use('/api', api);

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
routes(app, transporter, request);

app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
})