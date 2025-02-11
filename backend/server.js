require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ FIX CORS: Allow requests from your frontend
const allowedOrigins = ["https://blog-site-psi-one.vercel.app"]; // Your frontend domain

app.use(
  cors({
    origin: allowedOrigins, // Allow only frontend
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Import Routes
const postRoutes = require("./routes/posts");
app.use("/api/posts", postRoutes);

// Default Route
app.get("/", (req, res) => {
  res.send("🚀 Backend is Running!");
});

// **EXPORT APP for Vercel**
module.exports = app;
