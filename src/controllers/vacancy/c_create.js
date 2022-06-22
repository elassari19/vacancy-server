import { vacancy } from '../../models'
import db from '../../services'

export default () => async (req,res) => {
  // console.log('create', req.value)
  req.value = {
    ...req.value,
    createdBy: req.user?._id,
  }

  try {

    await db.createOne('Vacancy', vacancy, req.value)
    res.status(200).send('created success')
  } catch (error) {

    console.log(error)
    res.status(400).send(error)
  }
}