const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const httpStatus = require("../../helpers/httpStatus");
const { User } = require("../../models/index");

dotenv.config();
const { SECRET_KEY } = process.env;

const login = async (req, res) => {
  const { email, password } = req.body;

  const emailAudit = await User.findOne({ email });
  !emailAudit ? httpStatus(401) : httpStatus(200);

  const passwordAudit = await bcrypt.compare(password, emailAudit.password);
  !passwordAudit ? httpStatus(401) : httpStatus(200);

  const payload = { id: emailAudit._id };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "48h" });
  await User.findByIdAndUpdate(emailAudit._id, { token });

  res.json({ token });
};

module.exports = login;
