
module.exports = (joiSchema) => (req, res, next) => {

  // validate req data
  const {error, value} = joiSchema.validate(req.body);
  
  if(error){
    res.send(error.details[0].message)
  }else{
    req.value = value;
    next();
  }
}