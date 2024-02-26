const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const httpStatus = require("../../helpers/httpStatus");
const { User } = require("../../models/index");

dotenv.config();
const { SECRET_KEY } = process.env;

const login = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  !user ? httpStatus(401) : httpStatus(200);

  const passwordAudit = await bcrypt.compare(password, user.password);
  !passwordAudit ? httpStatus(401) : httpStatus(200);

  const payload = { id: user._id };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "48h" });
  await User.findByIdAndUpdate(user._id, { token });
  const { subscription } = user;

  res.json({ token, user: { email, subscription } });
};

module.exports = login;
