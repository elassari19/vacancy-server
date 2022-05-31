const jwt = require('jsonwebtoken')

const createToken = (id, expier) => {
  
  return jwt.sign({ user_id: id },
    process.env.JWT_SECRET,
    {
      expiresIn: expier,
  });
}

const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
}

module.exports = {
  createToken,
  verifyToken,
};