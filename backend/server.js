import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import messageRoutes from "./routes/messageRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

// API routes
app.use("/api", messageRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("Backend is running successfully 🚀");
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});