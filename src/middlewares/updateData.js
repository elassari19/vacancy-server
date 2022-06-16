
export default () => (req, res, next) => {

  // save the update item in req.update
  req.user = {
    ...req.user._doc,
    ...req.query
  };
  delete req.user.confirmation
  // ipass the combination of user and new update data
  //  for checking the validation of data
  // before update the item of user
  req.body = req.user

  next();
  
}