import db from '../services'

export default (collectiom, schema) => async (req, res , next) => {

  if(req.method == 'PUT' && req.query.id){

    try {

      const data = await db.findOne( collectiom, schema, {_id: req.query.id}, {updatedAt: 0, createdAt: 0, __v: 0})

      req.data = {
        ...data._doc,
        ...req.body
      }
    } catch (error) {
      
      res.status(409).send('company dosn´t exist')
    }
  }

  if(req.method == 'POST' && req.body){

    req.data = req.body
  }

  console.log('is handled')
  next()
}