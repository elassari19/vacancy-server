const { sendEmail, createToken, hashString } = require('../utils');
 const {User} = require('../models');

 module.exports = () => async (req, res) => {

  const { email, password } = req.value;
  
  const findUser = await User.findOne({email});// check user in database
console.log(findUser)
  if(findUser){// user exist
    res.status(400).send({msg: 'email already ixests'});

  }else{// user not exist
console.log(1)
    const data = {
      confirmation: await hashString(email),// hashed email for confirmatioon
      password: await hashString(password)// hashed password
    }

    const userData = {
      ...req.value, // push body data
      ...data
    };

    try {

      const user = await User.create(userData);// create user in db

      if(user._id){
        const isSent = sendEmail(user);// send code verfication via email
        isSent && console.log(isSent)// sent success
      }

      // // create new token
      // const token = createToken(user._id, '15m');

      // // save user token
      // user.token = token;
      // // set cookie to browser
      // res.cookie('access-token',token).status(201).send(user);

    } catch (error) {// issue
      res.send(error);
    }
  }      
}
