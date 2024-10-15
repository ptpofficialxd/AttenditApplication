class MailSender {
    constructor(to, sub, msg) {
        try {
            this.mailfrom = 'attenditapplication@gmail.com'; // Your email address
            this.tomail = to;
            this.sub = sub;
            this.message = msg;
            this.nodemailer = require('nodemailer');
            this.gmail = this.nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 587,
                secure: false, // TLS requires secure: false
                auth: {
                    user: 'attenditapplication@gmail.com', // Your email address
                    pass: 'ajfsmkuavodpnecc' // Your password
                }
            });
            console.log('MailSender instance created');
        } catch (error) {
            console.error('Error creating MailSender instance:', error);
            throw new Error('Failed to create MailSender instance');
        }
    }

  send() {
      console.log("Sending mail");
      var mailOptions = {
          from: this.mailfrom,
          to: this.tomail,
          subject: this.sub,
          html: this.message,
      };

      this.gmail.sendMail(mailOptions, function (error, info) {
          if (error) {
              console.log("Error sending email:", error);
          } else {
              console.log('Email sent: ' + info.response);
          }
      });
  }
}

module.exports = MailSender;