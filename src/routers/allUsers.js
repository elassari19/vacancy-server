import { Router } from "express"
import { getAllUsers } from "../controllers/UserControl";
const router = Router();

export default router.get('/users'
  , getAllUsers()
);