const router = require("express").Router();
const { findUser, verifyCode } = require("../middlewares");

module.exports = router.post('/confirm'
  ,findUser()
  ,verifyCode()
  ,async (req,res)=>{
    res.status(200).send(req.user.status);
});
