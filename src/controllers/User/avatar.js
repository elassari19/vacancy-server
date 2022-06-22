import { User } from '../../models';
import db from '../../services'

export default () => async (req,res)=>{
  try {
    req.cloudinary = await db.findOneAndUpdate('User', User, {_id: req.user._id}, req.query.profile.avatar);
    res.status(202).send(req.user.profile.avatar)
  } catch (error) {
    res.status(400).send(error)
  }

}