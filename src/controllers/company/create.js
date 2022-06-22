import company from '../../models/company'
import db from '../../services'

export default () => async (req, res) => {

  try {

    req.company = await db.findMany('Company', company, {$or: [{name: req.value.name}, {email: req.value.email}]}, {email: 1, name: 1})

    if(req.company.length > 0){
      return res.status(400).send('company already exist')
    }
    await db.createOne('Company', company, {...req.value, createdBy: req.user._id} )
    res.status(200).send('company created')

  } catch (error) {
   console.log(error)
   res.status(403).send('operation field') 
  }
}