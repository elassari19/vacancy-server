import { User } from '../../models';
import db from '../../services'

export default () => async (req, res) => {

  if(req.query.password){
    req.query.password = await hashString(req.query.password);
  }

  try {
    req.user = await db.findOneAndUpdate('User', User, {_id: req.user._id}, req.body);
    res.status(201).send('success update data')
  } catch (error) {
    res.status(400).send(error)
  }
}