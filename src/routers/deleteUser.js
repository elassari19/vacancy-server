const { protectRoute } = require("../middlewares");
const { User } = require("../models");
const router = require("express").Router();

module.exports = router.post('/delete'
  ,protectRoute()
  , async(req, res) => {

    try {

      const resault = await User.deleteOne({_id: req.user._id})
      resault.deletedCount == 1 && res.send('user successfuly deleted')  

    } catch (error) {
      res.send(error)
    }
});