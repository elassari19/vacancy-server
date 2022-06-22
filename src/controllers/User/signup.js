import { User } from '../../models';
import db from '../../services'
import { hashString, sendEmail } from "../../utils";

export default () => async (req, res) => {
  const { email, password } = req.value;

  req.user = await db.findOne('User', User, {email});

  if(req.user?._id){
    res.status(400).send(' user already exist');
  }else{

    req.value = await {
      ...req.value,
      confirmation: await hashString(email),// hashed email for confirmatioon
      password: await hashString(password)// hashed password
    } 
    
    try {
      req.user = await db.createOne(req.value);// create new user

      if(req.user._id){

        emailProps = {
          to: req.user.email,
          subject: "verify your email",
          text: "please don't replay this email ",
          html: `<h1>Email Confirmation</h1>
          <div>
          <h2>Hello ${req.user.firstname} ${req.user.lastname}</h2>
          <p>Thank you for subscribing. Please confirm your email by clicking on the following link</p>
          <a href="http://${process.env.API_URL}/confirm?id=${req.user._id}&confirm=${req.user.confirmation}" >CLICK TO VIREFY EAMIL </a>
          </div>`,
        }

        const isSent = sendEmail(emailProps);// send code verfication via email
        isSent && console.log(isSent)// sent success
      }
      res.status(201).send(req.user)

    } catch (error) {// issue
      console.log(error)
      res.status(400).send(error);
    }
  }
}