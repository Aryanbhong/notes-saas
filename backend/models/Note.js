import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
  title: { type: String, default: "" },
  body: { type: String, default: "" },
  tenantId: { type: mongoose.Schema.Types.ObjectId, ref: "Tenant", required: true },
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
}, { timestamps: true });

noteSchema.index({ tenantId: 1 });

export default mongoose.model("Note", noteSchema);

