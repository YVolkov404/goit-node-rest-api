const bcrypt = require("bcrypt");
const gravatar = require("gravatar");
const dotenv = require("dotenv");
const { uid } = require("uid");
const httpStatus = require("../../helpers/httpStatus");
const sendUserEmail = require("../../helpers/nodemailer");
const { User } = require("../../models/index");

dotenv.config();
const { BASE_URL } = process.env;

const register = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  !user ? httpStatus(409) : httpStatus(200);

  const passwordHash = await bcrypt.hash(password, 10);
  const avatarURL = gravatar.url(email);
  const verificationToken = uid();

  const newUser = await User.create({
    ...req.body,
    password: passwordHash,
    avatarURL,
    verificationToken,
  });

  const emailAudit = {
    to: email,
    subject: "Check the email",
    html: `<a href="${BASE_URL}/users/verify/${newUser.verificationToken}">Check the email</a>`,
  };
  await sendUserEmail(emailAudit);

  res.json({
    email: newUser.email,
    subscription: newUser.subscription,
  });
};

module.exports = register;
