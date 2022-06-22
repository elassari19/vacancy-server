import * as UserServices from "../../services/user.service"
import { hashString, sendEmail } from "../../utils";

export default () => async (req, res) => {
  const { email, password } = req.value;

  req.user = await UserServices.findOneUser({email});

  if(req.user?._id){
    res.status(400).send(' user already exist');
  }else{

    req.value = await {
      ...req.value,
      confirmation: await hashString(email),// hashed email for confirmatioon
      password: await hashString(password)// hashed password
    } 
    
    try {
      req.user = await UserServices.createUser(req.value);// create new user

      if(req.user._id){
        const isSent = sendEmail(req.value);// send code verfication via email
        isSent && console.log(isSent)// sent success
      }
      res.status(201).send(req.user)

    } catch (error) {// issue
      console.log(error)
      res.status(400).send(error);
    }
  }
}