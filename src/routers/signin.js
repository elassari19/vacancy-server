const { joiSignin } = require("../joiValidation");
const { joiValidateData, protectRoute } = require("../middlewares");
const { User } = require("../models");
const { createToken, compareString } = require("../utils");
const { verifyToken } = require("../utils/token");

const router = require("express").Router();

module.exports = router.post('/signin'
  ,protectRoute()
  ,joiValidateData(joiSignin)
  ,async (req,res)=>{
  
    const {email , password} = req.body;

    const user = await User.findOne({email});

    if(await compareString(password, user.password)){
      
      res.cookie('token', createToken(user.id, '30d'));
      res.redirect('/api/v1')
    }else{
      res.send('email or password not correct')
    }
  }
);
