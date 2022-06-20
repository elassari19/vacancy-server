import { Router } from "express";
import { c_create, c_delete, c_get, c_getAll, c_update } from "../controllers/company";
import { isAuthenticate, joiValidateData } from '../middlewares'
import joiCompany from '../validation/joiCompany'

const router = Router();

router.post('/create', joiValidateData(joiCompany), c_create())
router.delete('/delete', c_delete())
router.get('id', c_get())
router.get('/', c_getAll())
router.put('/update', c_update())

export default router