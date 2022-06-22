import { User } from '../../models';
import db from '../../services'
import { hashString } from '../../utils';

export default () => async (req, res) => {
  const { confirmPassword, password, email } = req.value;

  req.user = await db.findOne('User', User, {email});

  if(req.user?._id){
    res.status(400).send(' user already exist');
  }else{

    if(password == confirmPassword){
      password = await hashString(password)
    }
    
    
    try {
      req.user = await db.findOneAndUpdate('User', User, {password});// create new user

      if(req.user._id){

        emailProps = {
          to: req.user.email,
          subject: "create new password",
          text: "please don't replay this email ",
          html: `<h1>Success create new password</h1>
          <div>
          <h2>Hello ${req.user.firstname} ${req.user.lastname}</h2>
          <p>email: ${req.user.email}</p>
          <p>password: ${confirmPassword}</p>
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