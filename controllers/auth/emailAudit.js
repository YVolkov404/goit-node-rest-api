const httpStatus = require("../../helpers/httpStatus");
const { User } = require("../../models/index");

const emailAudit = async (req, res, next) => {
  const { tokenAudit } = req.params;
  const user = await User.findOne({ tokenAudit });

  !user ? httpStatus(401) : httpStatus(200);

  await User.findByIdAndUpdate(user._id, {
    audit: true,
    token: "",
  });

  res.json({ message: httpStatus(401) });
};

module.exports = emailAudit;
