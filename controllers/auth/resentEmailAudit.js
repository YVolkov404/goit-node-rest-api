const dotenv = require("dotenv");
const httpStatus = require("../../helpers/httpStatus");
const { uid } = require("uid");
const sendUserEmail = require("../../helpers/nodemailer");
const { User } = require("../../models/index");

dotenv.config();
const { BASE_URL } = process.env;

const resentEmailAudit = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  !user ? httpStatus(401) : httpStatus(200);

  user.verify ? httpStatus(401) : httpStatus(200);

  const emailAudit = {
    to: email,
    subject: "Check the resent email",
    html: `<a href="${BASE_URL}/users/verify/${user.verificationToken}">Check the resent email</a>`,
  };

  await sendUserEmail(emailAudit);

  res.json({ message: httpStatus(401) });
};

module.exports = resentEmailAudit;
