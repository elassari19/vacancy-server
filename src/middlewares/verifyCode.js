const { User } = require("../models");

module.exports = () => async (req, res, next) => {
  const { confirm } = req.query;
console.log(confirm)
  try {
      const valid = await req.user.confirmation == confirm;

      if(valid){
        const update = await User.findOneAndUpdate(
          {_id: req.user.id},
          {status: 'Active' , confirmation: 0},
          {new: true}
        );
        if(update) {
          req.user = update
          next();
        }
      }else{
        res.send('code not valid or somthing wrong')
      }
  } catch (error) {
    console.log('error', error)
    res.status(401).send('confirmation field')
  }
}