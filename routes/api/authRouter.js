const express = require("express");
const validateBody = require("../../helpers/validateBody.js");
const {
  current,
  login,
  register,
  logout,
  avatar,
  emailAudit,
  resentEmailAudit,
} = require("../../controllers/auth/index.js");
const auth = require("../../helpers/auth.js");
const {
  loginSchema,
  registerSchema,
  emailAuditSchema,
} = require("../../models/index.js");
const uploads = require("../../helpers/uploads.js");

const authRouter = express.Router();

authRouter.get("/current", auth, current);

authRouter.post("/login", validateBody(loginSchema), login);

authRouter.post("/register", validateBody(registerSchema), register);

authRouter.post("/logout", auth, logout);

authRouter.patch("/avatars", auth, uploads.single("avatar"), avatar);

authRouter.get("/audit/:token", emailAudit);

authRouter.post("/audit", validateBody(emailAuditSchema), resentEmailAudit);

module.exports = authRouter;
