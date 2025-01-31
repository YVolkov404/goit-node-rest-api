const express = require("express");
const validateBody = require("../../helpers/validateBody.js");
const {
  current,
  login,
  register,
  logout,
  avatar,
} = require("../../controllers/auth/index.js");
const auth = require("../../helpers/auth.js");
const { loginSchema, registerSchema } = require("../../models/index.js");
const uploads = require("../../helpers/uploads.js");

const authRouter = express.Router();

authRouter.get("/current", auth, current);

authRouter.post("/login", validateBody(loginSchema), login);

authRouter.post("/register", validateBody(registerSchema), register);

authRouter.post("/logout", auth, logout);

authRouter.patch("/avatars", auth, uploads.single("avatar"), avatar);

module.exports = authRouter;
