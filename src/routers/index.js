import { Router } from "express"

import vacancy from "./vacancy"
import user from "./user"
import company from "./company";

const router = Router();

router.use('/', user);
router.use('/vacancy', vacancy)
router.use('/company', company)


module.exports = router