const { joiSignin } = require("../joiValidation");
const { joiValidateData } = require("../middlewares");
const { User } = require("../models");
const { createToken, compareString } = require("../utils");
const { verifyToken } = require("../utils/token");

const router = require("express").Router();

module.exports = router.post('/signin'
  ,joiValidateData(joiSignin)
  ,async (req,res)=>{
    // already signed
    if(req.cookies.token){
      const {user_id} = verifyToken(req.cookies.token);

      if(user_id){
        req.user = await User.findOne({_id: user_id});
        res.cookie('token', createToken(user_id, '30d'));
        res.status(201).send('already signed');
      }
    }else{
      const {email , password} = req.body;
  
      const user = await User.findOne({email});
  
      if(await compareString(password, user.password)){
        
        res.cookie('token', createToken(user.id, '30d'));
        res.redirect('/api/v1')
      }else{
        res.send('email or password not correct')
      }
    }
  }
);
