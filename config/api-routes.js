
function routes(app,transporter) {
    app.post("/api-contact", function(req, res){
        const name = req.body.name;
        const email = req.body.email;
        const subject = req.body.subject;
        const message = req.body.message;
        

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
        transporter.sendMail(mailOptions, (error, info) => {
            if (error){
                return console.log(error);
            }
            else {
                console.log('Message sent: ' + info.response);
            }
        });
    });
};

module.exports = routes;



