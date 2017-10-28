var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var routes = require("./config/api-routes");
var http = require ('http');
const nodemailer = require('nodemailer');

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
nodemailer.createTestAccount((err, account) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: 'solracias@gmail.com', // generate ethereal user
            pass: 'kpsetqeqpezbrnee' // generated ethereal password
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"john Doe" <solracias123@gmail.com>', // sender address
        to: 'solracias@gmail.com', // list of receivers. use comma to separate
        subject: 'test email', // subject line
        text: 'Hello world!', // plain text body
        html: '<b>Hellow world! and stuff</b>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error){
            return console.log(error);
        }
        else {
            console.log('Message sent: ' + info.response);
            
            // preview only available when sending through an Ethereal account
            // console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        }
    });
});

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