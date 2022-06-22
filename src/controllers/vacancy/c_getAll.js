import { vacancy } from '../../models'
import db from '../../services'

export default () => async (req,res) => {

  try {
    const vacancies = await db.findMany('Vacancy', vacancy)
    res.status(200).send(vacancies.length>0?vacancies:'no vacancies exist')
  } catch (error) {
    console.log(error)
    res.status(400).send(error)
  }
}