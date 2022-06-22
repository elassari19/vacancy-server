import company from '../../models/company'
import db from '../../services'

export default () => async (req, res) => {
  try {

    const companies = await db.findOne('Company', company, {_id: req.query?.id})

    if(!companies?._id){
      return res.status(400).send('this company dosn´t exist')
    }

    res.status(200).send(companies)
  } catch (error) {
    res.status(200).send(error)
  }
}