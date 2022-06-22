import { vacancy } from '../../models'
import db from '../../services'

export default () => async (req,res) => {

  try {

    const vacancies = await db.findOne('Vacancy', vacancy, {_id: req.query.id})
    res.status(200).send(vacancies?._id?vacancies:'vacancies dosn´t exist')
  } catch (error) {

    console.log(error)
    res.status(400).send(error)
  }
}