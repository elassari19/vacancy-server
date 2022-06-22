import company from '../../models/company'
import db from '../../services'
import { cloudinaryDeleteFiles } from '../../utils'

export default () => async (req, res) => {

  try {

    req.company = await db.findById('Company', company, {_id: req.query.id})

    if(req.company?._id){

      if(req.company.createdBy != req.user._id){

        return res.status(400).send('delete company field')
      }

      await db.deleteOne('Company', company, {_id: req.query.id} )

      cloudinaryDeleteFiles(req.company._id)

      res.status(200).send('the company is deleted')

    }else{
      res.status(400).send('company dosn´t exist')
    }

  } catch (error) {
   console.log(error)
   res.status(403).send('operation field') 
  }
}