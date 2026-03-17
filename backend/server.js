import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import messageRoutes from "./routes/messageRoutes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API routes
app.use("/api", messageRoutes);

// Serve React build files
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "client/build")));

// Catch-all: send React index.html for any route not starting with /api
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log("MongoDB connection error:", err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});