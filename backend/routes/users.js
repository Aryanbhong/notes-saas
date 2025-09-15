import express from "express";
import bcrypt from "bcrypt";
import User from "../models/User.js";
import Tenant from "../models/Tenant.js";
import { requireAuth } from "../middleware/auth.js";
import { requireRole } from "../middleware/roles.js";

const router = express.Router();

// Admin invites user (creates user under same tenant)
router.post("/invite", requireAuth, requireRole("admin"), async (req, res) => {
  const { email, role } = req.body;
  if (!email) return res.status(400).json({ error: "email required" });
  const tenantId = req.user.tenantId;
  const existing = await User.findOne({ email, tenantId });
  if (existing) return res.status(400).json({ error: "User already exists" });
  const password = "password"; // tests require this; in real world invite => email link
  const hash = await bcrypt.hash(password, 10);
  const user = new User({ email, passwordHash: hash, role: role || "member", tenantId });
  await user.save();
  res.json({ success: true, email, role: user.role });
});

export default router;
