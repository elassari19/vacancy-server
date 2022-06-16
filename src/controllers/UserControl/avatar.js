import * as UserServices from "../../services/user.service"

export default () => async (req,res)=>{
  try {
    req.cloudinary = await UserServices.findUserAndUpdate({
      _id: req.user._id}, req.query.profile.avatar, {new: true
    });
    res.status(202).send(req.user.profile.avatar)
  } catch (error) {
    res.status(400).send(error)
  }

}