import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import notesRoutes from "./routes/notes.js";
import tenantsRoutes from "./routes/tenants.js";
import usersRoutes from "./routes/users.js";

dotenv.config();
const app = express();
app.use(cors({ origin: process.env.FRONTEND_URL || "*" }));
app.use(express.json());

// health
app.get("/health", (req, res) => res.json({ status: "ok" }));

// routes
app.use("/auth", authRoutes);
app.use("/notes", notesRoutes);
app.use("/tenants", tenantsRoutes);
app.use("/users", usersRoutes);

// connect and start
const PORT = process.env.PORT || 3000;
mongoose.connect(process.env.MONGODB_URI).then(()=> {
  console.log("Connected to MongoDB");
  app.listen(PORT, ()=> console.log(`Server listening on ${PORT}`));
}).catch(err => {
  console.error("MongoDB connect error:", err);
});
