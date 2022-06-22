const nodemailer = require('nodemailer')

const sendEmail = async( email) => {

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.AUTH_EMAIL, // generated ethereal user
      pass: process.env.AUTH_PASSWORD, // generated ethereal password
    },
  });

  try {
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: process.env.AUTH_EMAIL, 
      to: email.to, 
      subject: email.subject, 
      text: email.text, 
      html: email.html 
    });
    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.log(error);  
  }
}

module.exports = sendEmail;