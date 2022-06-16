
export default (from) => (req, res , next) => {

  if(from == 'query'){
    req.data = {
      ...req.data._doc,
      ...req.query
    }
  }else if(from == 'body'){
    req.data = {
      // ...req.data._doc,
      ...req.body
    }
  }else if(from == 'params'){
    req.data = {
      ...req.data._doc,
      ...req.params
    }
  }

  req.body = req.data

  next()
}