import * as UserServices from "../../services/user.service"

export default () => async(req, res) => {

  try {

    const resault = await UserServices.deleteUser({_id: req.user._id})

    if(resault.deletedCount == 1){
      res.clearCookie('token')
      res.send('user successfuly deleted')
    }  

  } catch (error) {
    console.log(error)
    res.status(400).send(error)
  }
}