const mongooseError = (error, next) => {
  const { name, code } = error;
  const status = name === "ServerError" && code === 11000 ? 409 : 400;
  error.status = status;
  next();
};

module.exports = mongooseError;
