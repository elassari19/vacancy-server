import { User } from '../../models';
import db from '../../services'
import { compareString, createToken } from "../../utils";
import { verifyToken } from "../../utils/token";

export default () => async (req,res)=>{

  if(!req.cookies.token){
    const {email , password} = req.body;

    req.user = await db.findOne('User', User, {email: email}, {_id:1,password:1, status: 1});

    if(!req.user._id) return res.status(409).send('acount not exist')

    if(await compareString(password, req.user?.password)){

      if(req.user.status != 'Active')res.status(400).send('account not active')

      res.cookie('token', createToken(req.user.id, '30d'));
      res.redirect('/api/v1')
    }else{
      res.send('email or password not correct')
    }

  }else{

    const {user_id} = verifyToken(req.cookies.token);

    if(user_id){

      req.user = await db.findById('User', User, user_id);

      res.cookie('token', createToken(user_id, '30d'));
      res.status(200).send('already signed');
    }else{
      res.status(409).send('somthing wrong')
    }
  }
}
