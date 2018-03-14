"use strict"
var nodemailer = require('nodemailer');
var xoauth2 = require('xoauth2');
var smtpTransport = require('nodemailer-smtp-transport');

module.exports = function(data) {

    var recepientEmail = data.To;
    var subjectEmail = data.Subject;
    var emailBody = data.Message;

    var promise = new Promise(function(resolve, reject) {
        var Xml;
        var options;

        var smtpConfig = {
            transport: "SMTP",
            host: "smtp.gmail.com",
            //secureConnection: true,
            port:  587,
            //secure: true,
            // requiresAuth: true, // use SSL
            auth: {
                user: '', // email manager@demo.com
                pass: '' ///password
            },
            //secure:true,
            tls: {
                rejectUnauthorized: false
            },
            //debug:true,
        };

        // create reusable transporter object using the default SMTP transport
        var transporter = nodemailer.createTransport({
            service:'gmail',
            auth: {
                user: 'wasifshehzad063@gmail.com',
                pass: 'nulllllllll'
            }
        });

        // setup e-mail data with unicode symbols
        var mailOptions = {
            from: 'wasifshehzad063@gmail.com', // sender address
            to: "mustafabutt69@gmail.com", // list of receivers
            subject: "hi there", // Subject line'Welcome to ITBoost!'
            text: 'Hello world 🐴', // plaintext body
         //   html: emailBody

            // // html body
        };

        // verify connection configuration
        transporter.verify(function(error, success) {
            if (error) {

                console.log(error);
            } else {
                console.log('Server is ready to take our messages');
            }
        });
        // send mail with defined transport object
        transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
                console.log("Mail error");
                return console.log(error);
                reject(error);
            }
            console.log('Message sent: ' + info.response);
            resolve(info.response);
        });
        ////////////////////////////////////////////////////////
    });
    return promise;
};