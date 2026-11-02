
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error("MONGODB_URI is missing from .env");
  process.exit(1);
}

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
  })
);

app.use(express.json({ limit: "100kb" }));
app.use("/api/products", productRoutes);

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "ELNOR API is running",
  });
});

async function startServer() {
  try {
    await mongoose.connect(MONGODB_URI, {
      serverSelectionTimeoutMS: 5000,
    });

    console.log("Connected to ELNOR MongoDB");

    app.listen(PORT, "127.0.0.1", () => {
      console.log(`ELNOR API running at http://127.0.0.1:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start ELNOR backend:", error.message);
    process.exit(1);
  }
}

startServer();
