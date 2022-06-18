import { Router } from "express"
import { avatar, controlSignin, controlSignout, controlSignup, deleteAcount, getAllUsers, updateprofile, verifyCode } from "../controllers/UserControl"
import { isAuthenticate, joiValidateData, updateData, uploadFiles } from "../middlewares"
import { joiSignin, joiSignup } from "../validation"

const router = Router()

router.post('/update'
  ,isAuthenticate()
  ,updateData()
  ,joiValidateData(joiSignup)
  ,updateprofile()
)

router.post('/upload'
  ,isAuthenticate()
  ,uploadFiles()
  ,joiValidateData(joiSignup)
  ,avatar()
)

router.post('/signup'
  ,joiValidateData(joiSignup) // validation of req.body
  ,controlSignup()
)

router.get('/signout'
  ,isAuthenticate()
  ,controlSignout()
)

router.post('/signin'
 ,joiValidateData(joiSignin)
 ,controlSignin()
)

router.delete('/delete'
  ,isAuthenticate()
  ,deleteAcount()
)

router.delete('/deleteAll', async (req, res) => {
  try {
    await User.deleteMany()
    res.send('all users deleted')
  } catch (error) {
    res.status(400).send(error)
  }
})

router.post('/confirm'
  ,verifyCode()
)

router.get('/user'
  , (req, res) => { res.send('get one user') }
)

router.get('/users'
  , getAllUsers()
)

router.get('/forget'
  , (req, res) => { res.send('forget password') }
)

export default router