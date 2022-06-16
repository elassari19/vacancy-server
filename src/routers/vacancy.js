import { Router } from "express";
import { c_create, c_delete, c_deleteAll, c_getAll, c_getOne, c_update } from "../controllers/vacancy";
import { isAuthenticate, joiValidateData } from "../middlewares";
import handelData from "../middlewares/handelData";
import joiVacancy from "../validation/joiVacancy";

const router = Router();

router.get('/', c_getOne())
router.get('/all',c_getAll())
router.post('/create', handelData('body'), joiValidateData(joiVacancy),c_create())
router.delete('/delete', c_delete())
router.delete('/delete_all', c_deleteAll())
router.put('/update', handelData('body'), c_update())

export default router