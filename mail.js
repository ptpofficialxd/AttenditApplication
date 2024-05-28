class MailSender {
  constructor(to, sub, msg) {
      this.mailfrom = 'attenditapplication@hotmail.com'; // Your Hotmail email address
      this.tomail = to;
      this.sub = sub;
      this.message = msg;
      this.nodemailer = require('nodemailer');
      this.hotmail = this.nodemailer.createTransport({
          host: 'smtp.office365.com',
          port: 587,
          secure: false, // TLS requires secure: false
          auth: {
              user: 'attenditapplication@hotmail.com', // Your Hotmail email address
              pass: 'attendit753951' // Your Hotmail password
          }
      });
      console.log('MailSender instance created');
  }

  send() {
      console.log("Sending mail");
      var mailOptions = {
          from: this.mailfrom,
          to: this.tomail,
          subject: this.sub,
          html: this.message,
      };

      this.hotmail.sendMail(mailOptions, function (error, info) {
          if (error) {
              console.log("Error sending email:", error);
          } else {
              console.log('Email sent: ' + info.response);
          }
      });
  }
}

module.exports = MailSender;
