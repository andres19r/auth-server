const { response } = require("express");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const { generateJWT } = require("../helpers/jwt");

const createUser = async (req, res = response) => {
  const { email, name, password } = req.body;

  try {
    // Verify the email
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        ok: false,
        msg: "The email is used by another user",
      });
    }

    // Create user from model
    const dbUser = new User(req.body);

    // Hash the password
    const salt = bcrypt.genSaltSync();
    dbUser.password = bcrypt.hashSync(password, salt);

    // Generate JWT
    const token = await generateJWT(dbUser.id, name);

    // Create user in DB
    await dbUser.save();

    // Generate successful response
    return res.status(201).json({
      ok: true,
      uuid: dbUser.id,
      name,
      email,
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Please, contact with your admin",
    });
  }
};

const loginUser = async (req, res = response) => {
  const { email, password } = req.body;

  try {
    const dbUser = await User.findOne({ email });
    if (!dbUser) {
      return res.status(400).json({
        ok: false,
        msg: "The email doesn't exist",
      });
    }

    // Confirm password match
    const validPassword = bcrypt.compareSync(password, dbUser.password);
    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: "The password is not valid",
      });
    }

    // Generate JWT
    const token = await generateJWT(dbUser.id, dbUser.name);

    // Response
    return res.json({
      ok: true,
      uuid: dbUser.id,
      name: dbUser.name,
      email: dbUser.email,
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Please, contact with your admin",
    });
  }
};

const revalidateToken = async (req, res) => {
  const { uuid } = req;

  // Read db
  const dbUser = await User.findById(uuid);

  // Generate JWT
  const token = await generateJWT(uuid, dbUser.name);

  return res.json({
    ok: true,
    uuid,
    name: dbUser.name,
    email: dbUser.email,
    token,
  });
};

module.exports = {
  createUser,
  loginUser,
  revalidateToken,
};
