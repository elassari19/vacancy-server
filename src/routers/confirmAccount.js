import {Router} from 'express'
import { verifyCode } from '../controllers/UserControl';

const router = Router()

module.exports = router.post('/confirm'
  ,verifyCode()
);
