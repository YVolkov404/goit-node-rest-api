const httpStatus = require("../../helpers/httpStatus");
const { User } = require("../../models/index");

const emailAudit = async (req, res, next) => {
  const { verificationToken } = req.params;
  const user = await User.findOne({ verificationToken });

  !user ? httpStatus(401) : httpStatus(200);

  await User.findByIdAndUpdate(user._id, {
    verify: true,
    verificationToken: "",
  });

  res.json({ message: httpStatus(401) });
};

module.exports = emailAudit;
