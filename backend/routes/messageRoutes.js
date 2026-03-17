import express from "express";
import Message from "../models/Message.js";

const router = express.Router();

// GET all messages
router.get("/messages", async (req, res) => {
  try {
    const messages = await Message.find();
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST message
router.post("/messages", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newMessage = new Message({
      name,
      email,
      message,
    });

    await newMessage.save();

    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE message
router.delete("/messages/:id", async (req, res) => {
  try {
    await Message.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;