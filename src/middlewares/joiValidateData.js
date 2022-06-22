
export default (joiSchema) => (req, res, next) => {

  // validate req data
  const {error, value} = joiSchema.validate(req.body);
  
  if(error){

    console.log('error', error.details[0])
    res.send(error.details[0])

  }else{

    req.value = value;
    // console.log('req.value', req.value)
    next();
  }
}