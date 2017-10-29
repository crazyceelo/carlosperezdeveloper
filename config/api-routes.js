
function routes(app,transporter) {
    app.post("/api-contact", function(req, res){
        // console.log(`Name: ${req.body.name}`);
        // console.log(`email: ${req.body.email}`);
        // console.log(`subject: ${req.body.subject}`);
        // console.log(`message: ${req.body.message}`);
        // console.log(`name: ${name}`);
        // console.log(`email: ${email}`);
        // console.log(`subject: ${subject}`);
        // console.log(`message: ${message}`);
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
                
                // preview only available when sending through an Ethereal account
                // console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

                // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
                // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
            }
        });
    });
};

module.exports = routes;



