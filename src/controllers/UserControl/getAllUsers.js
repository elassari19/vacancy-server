import * as UserServices from '../../services/user.service'

export default () => async (req, res) => {
  try {
     req.users = await UserServices.getAllUsers({email:1})
     res.status(200).send(req.users)
  } catch (error) {
    res.status(400).send(error)
  }
}