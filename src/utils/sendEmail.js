const nodemailer = require('nodemailer')

const sendEmail = async( user) => {

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
      from: process.env.AUTH_EMAIL, // sender address
      to: user.email, // list of recepient
      subject: "verify your email", // Subject line
      text: "please don't replay this email ", // plain text body
      html: `<h1>Email Confirmation</h1>
      <h2>Hello ${user.firstname} ${user.lastname}</h2>
      <p>Thank you for subscribing. Please confirm your email by clicking on the following link</p>
      <a href="http://${process.env.API_URL}/confirm?id=${user._id}&confirm=${user.confirmation}" >CLICK TO VIREFY EAMIL </a>
      </div>`, // html body
    });
    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.log(error);  
  }
}

module.exports = sendEmail;