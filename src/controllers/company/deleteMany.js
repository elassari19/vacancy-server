import company from '../../models/company'
import db from '../../services'
import { cloudinaryDeleteFiles } from '../../utils'

export default () => async (req, res) => {

  try {

    const companies = await db.findMany('Company', company, {}, {avatar: 1, createdBy: 1})

    // destruct public_id from data
    const image_ids = companies.filter((items) => items['avatar'].public_id != undefined ).map((items) => items['avatar'].public_id)

    // delete files from cloud
    cloudinaryDeleteFiles(image_ids)

    // delete all companies created by this user from db

    try {
      await db.deleteMany('Company', company, {createdBy: req.user.id} )
    } catch (error) {
      res.status(400).send('somthing wrong')
    }
    res.status(200).send('all companies deleted')

  } catch (error) {
   console.log(error)
   res.status(403).send('field delete companies')
  }
}