import * as UserServices from "../../services/user.service"

export default () => async (req, res) => {

  if(req.query.password){
    req.query.password = await hashString(req.query.password);
  }

  try {
    req.user = await UserServices.findUserAndUpdate({_id: req.user._id}, req.query, {new: true});
    res.status(201).send('success update data')
  } catch (error) {
    res.status(400).send(error)
  }
}