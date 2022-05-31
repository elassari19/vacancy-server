const { User } = require("../models");
const { verifyToken } = require("../utils/token");

module.exports = () => async (req, res, next) => {

  if(!req.cookies.token){
    next();
  }else{
    const {user_id} = verifyToken(req.cookies.token);

    if(user_id){
      req.user = await User.findOne({_id: user_id});
      res.redirect('/api/v1');
    }else{
      next();
    }
  }
}