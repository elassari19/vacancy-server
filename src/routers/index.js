import { Router } from "express"
// import signup from "./signup"
// import confirmAccount from "./confirmAccount"
// import signout from "./signout"
// import signin from "./signin"
// import updateProfile from "./updateProfile"
// import updateAvatar from "./updateAvatar"
// import deleteUser from "./deleteUser"
// import allUsers from "./allUsers"
// import deleteAllUsers from "./deleteAllUsers"
import vacancy from "./vacancy"
import userRoute from "./userRoute"
import company from "./company";

const router = Router();

router.use('/', userRoute);
router.use('/vacancy', vacancy)
router.use('/company', company)


module.exports = router