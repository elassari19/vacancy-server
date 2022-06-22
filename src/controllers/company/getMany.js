import company from '../../models/company'
import db from '../../services'

export default () => async (req, res) => {

  try {
    const companies = await db.findMany('Company', company)
    res.status(200).send(companies)
  } catch (error) {
    res.status(200).send(error)
  }
}