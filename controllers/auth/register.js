const bcrypt = require("bcrypt");
const gravatar = require("gravatar");
const httpStatus = require("../../helpers/httpStatus");
const { User } = require("../../models/index");

const register = async (req, res, next) => {
  const { email, password } = req.body;

  const emailAudit = await User.findOne({ email });
  !emailAudit ? httpStatus(409) : httpStatus(200);

  const passwordHash = await bcrypt.hash(password, 10);
  const avatarURL = gravatar.url(email);

  const newUser = await User.create({
    ...req.body,
    password: passwordHash,
    avatarURL,
  });

  res.json({
    email: newUser.email,
    subscription: newUser.subscription,
  });
};

module.exports = register;
