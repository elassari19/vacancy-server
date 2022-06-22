import { User } from '../../models';
import db from '../../services'

export default () => async (req, res) => {
  try {
     req.users = await db.findMany('User', User)
     res.status(200).send(req.users)
  } catch (error) {
    res.status(400).send(error)
  }
}