const { User } = require("../models");

module.exports = () => async (req, res, next) => {
  const { id } = req.query;
  console.log(id)

  try {
    const user = await User.findById(id);
    if(!user){
      res.status(401).send('this user not exist');
    }else{
      req.user = user;
      next();
    }
  }catch(error){
    res.status(500).send(error)
  }
}