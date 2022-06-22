import { User } from '../../models';
import db from '../../services'

export default () => async (req, res, next) => {
  const { confirm, id } = req.query;

  // select user and get code of confirmaion
  req.user = await db.findOne('User', User, {_id: id}, {confirmation: 1, status:1})

  if(req.user.status == 'Active')return res.status(400).send('acount already activated')
  if(req.user.status != 'Pending')return res.status(400).send('somthing wrond')

  const valid = await req.user.confirmation == confirm;

  if(valid){

    try {
      req.user = await db.findOneAndUpdate('User', User, {_id: id},{status: 'Active' , confirmation: ''})
      res.status(201).send('account actived')
    } catch (error) {
      res.status().send(error)
    }
    
  }else{
    res.send('code not valid or somthing wrong')
  }

}