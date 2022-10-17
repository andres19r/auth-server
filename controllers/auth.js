const { response } = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');

const createUser = async (req, res = response) => {
  const { email, name, password } = req.body;

  try {
    // Verify the email
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        ok: false,
        msg: 'The email is used by another user'
      });
    }

    // Create user from model
    const dbUser = new User(req.body);

    // Hash the password
    const salt = bcrypt.genSaltSync();
    dbUser.password = bcrypt.hashSync(password, salt);

    // Generate JWT

    // Create user in DB
    await dbUser.save();

    // Generate successful response
    return res.status(201).json({
      ok: true,
      uuid: dbUser.id,
      name
    })

  } catch(error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: 'Please, contact with your admin'
    })
  }
}

const loginUser = (req, res = response) => {
  const { email, password } = req.body;

  return res.json({
    ok: true,
    msg: 'User login /'
  })
}

const revalidateToken = (req, res) => {
  return res.json({
    ok: true,
    msg: 'Renew'
  })
}

module.exports = {
  createUser,
  loginUser,
  revalidateToken
}
