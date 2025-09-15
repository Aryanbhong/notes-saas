import express from "express";
import Tenant from "../models/Tenant.js";
import { requireAuth } from "../middleware/auth.js";
import { requireRole } from "../middleware/roles.js";

const router = express.Router();

// upgrade a tenant - Only admin of the tenant can call
router.post("/:slug/upgrade", requireAuth, requireRole("admin"), async (req, res) => {
  try {
    // ensure slug matches caller's tenant
    const tenant = await Tenant.findOne({ slug: req.params.slug });
    if (!tenant) return res.status(404).json({ error: "Tenant not found" });
    if (tenant._id.toString() !== req.user.tenantId.toString()) return res.status(403).json({ error: "Cannot upgrade other tenant" });
    tenant.plan = "pro";
    await tenant.save();
    res.json({ success: true, plan: tenant.plan });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
