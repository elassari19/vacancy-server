const { User } = require("../models")
const { sendEmail, hashString } = require('../utils');

module.exports = () => async (req, res, next) => {
  const { email, password } = req.value;

  const user = await User.findOne({email});

  if(user){
    res.status(402).send(' user already exist');
  }else{

    req.value = {
      ...req.value,
      confirmation: await hashString(email),// hashed email for confirmatioon
      password: await hashString(password)// hashed password
    }
    
    try {

      const setNewUser = await User.create(req.value);// create user in db
      
      if(setNewUser._id){
        const isSent = sendEmail(req.value);// send code verfication via email
        isSent && console.log(isSent)// sent success
      }

      req.user = setNewUser;
      next();

    } catch (error) {// issue
      res.send(error);
    }
  }
}
