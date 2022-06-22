import { User } from "../models"
import db from '../services'
import { verifyToken } from "../utils/token"
export default () => async (req, res, next) => {

  if(!req.cookies.token){

    res.status(401).send('not authorized');
  }else{

    const {user_id} = verifyToken(req.cookies.token);

    if(user_id){

      req.user = await db.findOne('User', User, {_id: user_id}, {createdAt:0, updatedAt:0,__v:0,passwor:0});
      next();
    }else{
      
      res.status(401).send('not authorized');
    }
  }
}