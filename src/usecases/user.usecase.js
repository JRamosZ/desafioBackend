const bcrypt = require("bcrypt");
const jwt = require("../lib/jwt.lib");
const User = require("../models/user.model");
const createError = require("http-errors");

const create = async (data) => {
  const saltRounds = 10;
  data.userPassword = await bcrypt.hash(data.userPassword, saltRounds);
  console.log(data.userPassword);
  const user = User.create(data);
  return user;
};

const login = async (email, password) => {
  // Validar que un usuario con ese correo exista
  const user = await User.findOne({ userEmail: email });
  // Falla correo
  if (!user) throw createError(400, "Invalid data");

  // Validar la password
  const isValidPassword = await bcrypt.compare(password, user.userPassword);
  if (!isValidPassword) throw createError(400, "Invalid data");

  // Si es la password y si es el correo regresamos token

  const token = jwt.sign({ id: user._id });
  return token;
};
module.exports = { create, login };
