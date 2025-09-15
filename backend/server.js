
// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import dotenv from "dotenv";
// import authRoutes from "./routes/auth.js";
// import notesRoutes from "./routes/notes.js";
// import tenantsRoutes from "./routes/tenants.js";
// import usersRoutes from "./routes/users.js";

// dotenv.config();
// const app = express();

// // A function to connect to the database
// const connectDb = async () => {
//   if (mongoose.connection.readyState !== 1) { // Check if not already connected
//     try {
//       await mongoose.connect(process.env.MONGODB_URI);
//       console.log("Connected to MongoDB");
//     } catch (err) {
//       console.error("MongoDB connect error:", err);
//       // You can choose to throw an error or handle it as needed
//     }
//   }
// };

// app.use(cors({ origin: process.env.FRONTEND_URL || "*" }));
// app.use(express.json());

// // Middleware to ensure a database connection before handling requests
// app.use(async (req, res, next) => {
//   await connectDb();
//   next();
// });

// // health
// app.get("/health", (req, res) => res.json({ status: "ok" }));

// // routes
// app.use("/auth", authRoutes);
// app.use("/notes", notesRoutes);
// app.use("/tenants", tenantsRoutes);
// app.use("/users", usersRoutes);

// // Export the app for Vercel
// export default app;


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

// A function to connect to the database
const connectDb = async () => {
  if (mongoose.connection.readyState !== 1) { // Check if not already connected
    try {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log("✅ Connected to MongoDB");
    } catch (err) {
      console.error("❌ MongoDB connect error:", err);
    }
  }
};

app.use(cors({ origin: process.env.FRONTEND_URL || "*" }));
app.use(express.json());

// Middleware to ensure a database connection before handling requests
app.use(async (req, res, next) => {
  await connectDb();
  next();
});

// health
app.get("/health", (req, res) => res.json({ status: "ok" }));

// routes
app.use("/auth", authRoutes);
app.use("/notes", notesRoutes);
app.use("/tenants", tenantsRoutes);
app.use("/users", usersRoutes);

// ✅ Start the server (needed for Render)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
