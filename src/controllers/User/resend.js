import { User } from "../../models";
import db from "../../services";
import { sendEmail } from "../../utils";

export default () => async (req, res) => {
  const { email } = req.body;

  req.user = await db.findOne(
    "User",
    User,
    { email },
    {
      _id: 1,
      email: 1,
      firstname: 1,
      lastname: 1,
      confirmation: 1,
    }
  );

  if (!req.user?._id) {
    return res
      .status(203)
      .send({ success: false, message: "Email account not found!" });
  }

  if (req.user._id) {
    const emailProps = {
      to: req.user.email,
      subject: "verify your email",
      text: "please don't replay this email ",
      html: `<h1>Email Confirmation</h1>
      <div>
      <h2>Hello ${req.user.firstname} ${req.user.lastname}</h2>
      <p>Thank you for subscribing. Please confirm your email by clicking on the following link</p>
      <a href="http://${process.env.CLIENT_URL}/confirmation?id=${req.user._id}&confirm=${req.user.confirmation}" >CLICK TO VIREFY EAMIL </a>
      </div>`,
    };

    try {
      const isSent = sendEmail(emailProps); // send code verfication via email
      isSent && console.log(isSent); // sent success
      res
        .status(201)
        .send({ success: true, message: "successfuly send message" });
    } catch (error) {
      res.status(400).send(error);
    }
  }
};
