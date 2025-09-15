import express from "express";
import Note from "../models/Note.js";
import Tenant from "../models/Tenant.js";
import { requireAuth } from "../middleware/auth.js";

const router = express.Router();

// Create note
router.post("/", requireAuth, async (req, res) => {
  try {
    const tenant = req.tenant;
    // enforce free plan limit
    if (tenant.plan === "free") {
      const count = await Note.countDocuments({ tenantId: tenant._id });
      if (count >= 3) return res.status(403).json({ error: "Free plan note limit reached" });
    }
    const note = new Note({
      title: req.body.title || "",
      body: req.body.body || "",
      tenantId: tenant._id,
      ownerId: req.user._id
    });
    await note.save();
    res.status(201).json(note);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// List notes (for tenant)
router.get("/", requireAuth, async (req, res) => {
  const notes = await Note.find({ tenantId: req.tenant._id }).sort({ createdAt: -1 });
  res.json(notes);
});

// Get single note (tenant isolation)
router.get("/:id", requireAuth, async (req, res) => {
  const note = await Note.findOne({ _id: req.params.id, tenantId: req.tenant._id });
  if (!note) return res.status(404).json({ error: "Not found" });
  res.json(note);
});

// Update note
router.put("/:id", requireAuth, async (req, res) => {
  const note = await Note.findOneAndUpdate(
    { _id: req.params.id, tenantId: req.tenant._id },
    { title: req.body.title, body: req.body.body },
    { new: true }
  );
  if (!note) return res.status(404).json({ error: "Not found" });
  res.json(note);
});

// Delete
router.delete("/:id", requireAuth, async (req, res) => {
  const note = await Note.findOneAndDelete({ _id: req.params.id, tenantId: req.tenant._id });
  if (!note) return res.status(404).json({ error: "Not found" });
  res.json({ success: true });
});

export default router;
