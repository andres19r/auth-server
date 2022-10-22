const { response } = require("express");
const jwt = require('jsonwebtoken');

const validateJWT = (req, res = response, next) => {
  const token = req.header('x-token');
  if (!token) {
    return res.status(401).json({
      ok: false,
      msg: 'Token error'
    })
  }

  try {
    const { uuid, name } = jwt.verify(token, process.env.SECRET_JWT_SEED);
    req.uuid = uuid;
    req.name = name;
  } catch (error) {
    return res.status(401).json({
      ok: false,
      msg: 'Invalid Token'
    })
  }

  // OK!
  next();
}

module.exports = {
  validateJWT
}
