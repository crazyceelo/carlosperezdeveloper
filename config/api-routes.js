
function routes(app,transporter,request) {
    app.post("/api-contact", function(req, res){
        // contact form values
        const name = req.body.name;
        const email = req.body.email;
        const subject = req.body.subject;
        const message = req.body.message;
        const captcha = req.body.captcha;
        const remoteip = req.connection.remoteip;

        const recaptchaURL = "https://www.google.com/recaptcha/api/siteverify";
        const gparams = {
            secret: "6Ld73DYUAAAAADGD-etNAN_pNJBWTpLkPM_H1Ipa",
            response: captcha,
            remoteip: remoteip
        }

        // setup email data with unicode symbols
        const mailOptions = {
            from: '"Portfolio inquiry" <solracias@gmail.com>', // sender address
            to: 'solracias@gmail.com', // list of receivers. use comma to separate
            replyTo: email.toString(),
            subject: subject.toString(), // subject line
            text: `Name: ${name.toString()} Email: ${email.toString()} Subject: ${subject.toString()} Message: ${message.toString()}`, // plain text body
            html: `<strong>Name: </strong> ${name.toString()}<br>
                <strong>Email: </strong> ${email.toString()}<br>
                <strong>Subject: </strong> ${subject.toString()}<br>
                <strong>Message: </strong> ${message.toString()}<br>` // html body
        };

        // send mail with defined transport object
        request({
            url:recaptchaURL,
            qs:gparams
        },(err, response, body)=> {
            body = JSON.parse(body);

            if(err){
                console.log(err);
            }
            else if (body.success){
                transporter.sendMail(mailOptions,(error, info)=>{
                    if(err){
                        console.log(err);
                        res.status(500).send();
                    }
                    else{
                        res.status(200).send();
                    }
                });
            }
            else{
                if(body["error-codes"][0] == "missing-input-response"){
                    res.status(400).send('Please check "I am not a robot"... ');
                }
                else{
                    res.status(500).send(body["error-codes"][0]);
                }
            }
        })
        // transporter.sendMail(mailOptions, (error, info) => {
        //     if (error){
        //         return console.log(error);
        //     }
        //     else {
        //         console.log('Message sent: ' + info.response);
        //     }
        // });
    });
    return app;
};

module.exports = routes;



