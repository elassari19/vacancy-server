import { Router } from "express";

import vacancy from "./vacancy";
import user from "./user";
import company from "./company";

const router = Router();

router.use("/vacancy", vacancy);
router.use("/company", company);
router.use("/", user);

module.exports = router;
