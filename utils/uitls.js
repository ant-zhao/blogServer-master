const nodemailer = require('nodemailer');

exports.SendEmail =  (toEmail, subject, html) => {
    return new Promise((resolve, reject)=>{
        let smtpConfig = {
            host: 'smtp.163.com',
            port: 465,
            secure: true, // use SSL
            auth: {
                user: 'junzhaojie@163.com',
                pass: 'q5211314'
            }
        }
        let transporter = nodemailer.createTransport(smtpConfig);
        let mailOptions = {
            from: 'junzhaojie@163.com', // sender address
            to: toEmail, // list of receivers
            subject: subject, // Subject line
            //text: 'Hello world ?', // plaintext body
            html: html // html body
        };
        transporter.sendMail(mailOptions, function(error, info){
            if(error){
                return resolve(false)
            }else{
                return resolve(true)
            }
        });
    })
}