import { User } from '../../models';
import db from '../../services'

export default () => async (req, res) => {
  try {
     req.user = await db.findOne('User', User, {_id: req.query?.id})
     res.status(200).send(req.user)
  } catch (error) {
    res.status(400).send(error)
  }
}