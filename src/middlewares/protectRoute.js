const { User } = require("../models");
const { verifyToken } = require("../utils/token");

module.exports = () => async (req, res, next) => {

  if(!req.cookies.token){
    res.status(401).send('not authorized');
  }else{
    const {user_id} = verifyToken(req.cookies.token);

    if(user_id){
      req.user = await User.findOne({_id: user_id});
      next();
    }else{
      res.status(401).send('not authorized');
    }
  }
}