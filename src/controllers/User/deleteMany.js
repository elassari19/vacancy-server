import { User } from '../../models';
import db from '../../services'

export default () => async (req, res) => {
  try {
    await db.deleteMany('User', User)
    res.send('all users deleted')
  } catch (error) {
    res.status(400).send(error)
  }
}