const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const httpStatus = require("../helpers/httpStatus.js");
const { User } = require("../models/index.js");

dotenv.config();
const { SECRET_KEY } = process.env;

const auth = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");

  bearer !== "Bearer" ? httpStatus(401) : httpStatus(200);

  try {
    const { id } = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(id);

    !user || !user.token || user.token !== token
      ? httpStatus(401)
      : httpStatus(200);

    req.user = user;
    next();
  } catch (error) {
    next(httpStatus(401));
  }
};

module.exports = auth;
