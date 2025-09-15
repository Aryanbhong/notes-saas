import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/User.js";
import Tenant from "../models/Tenant.js";

const router = express.Router();

// // login
// router.post("/login", async (req, res) => {
//   const { email, password } = req.body;
//   const user = await User.findOne({ email });
//   console.log("ye wall")
//   if (!user) return res.status(401).json({ error: "Invalid credentials" });
//   const match = await bcrypt.compare(password, user.passwordHash);
//   console.log("password hass")
//   if (!match) return res.status(401).json({ error: "Invalid credentials password" });
//   const token = jwt.sign({ sub: user._id.toString(), tenantId: user.tenantId.toString() }, process.env.JWT_SECRET, { expiresIn: "8h" });
//   res.json({ token, role: user.role, tenantId: user.tenantId,
//   tenantSlug: user.tenantId.slug });
// });




router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // populate tenantId to get slug
  const user = await User.findOne({ email }).populate("tenantId");
  if (!user) return res.status(401).json({ error: "Invalid credentials" });

  const match = await bcrypt.compare(password, user.passwordHash);
  if (!match) return res.status(401).json({ error: "Invalid credentials" });

  const token = jwt.sign(
    { sub: user._id.toString(), tenantId: user.tenantId._id.toString() },
    process.env.JWT_SECRET,
    { expiresIn: "8h" }
  );

  res.json({
    token,
    role: user.role,
    tenantId: user.tenantId._id,
    tenantSlug: user.tenantId.slug, // now available
  });
});

export default router;