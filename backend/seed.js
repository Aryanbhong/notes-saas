import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import Tenant from "./models/Tenant.js";
import User from "./models/User.js";

dotenv.config();
console.log("kuch to ho rha hai")
async function run() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("Connected");

  const acme = await Tenant.findOneAndUpdate({ slug: "acme" }, { name: "Acme", slug: "acme", plan: "free" }, { upsert: true, new: true });
  const globex = await Tenant.findOneAndUpdate({ slug: "globex" }, { name: "Globex", slug: "globex", plan: "free" }, { upsert: true, new: true });

  const passwordHash = await bcrypt.hash("password", 10);
  const users = [
    { email: "admin@acme.test", role: "admin", tenantId: acme._id },
    { email: "user@acme.test", role: "member", tenantId: acme._id },
    { email: "admin@globex.test", role: "admin", tenantId: globex._id },
    { email: "user@globex.test", role: "member", tenantId: globex._id }
  ];

  for (const u of users) {
    await User.findOneAndUpdate(
      { email: u.email, tenantId: u.tenantId },
      { ...u, passwordHash },
      { upsert: true, new: true }
    );
    console.log("Upserted", u.email);
  }

  console.log("Seed complete");
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
