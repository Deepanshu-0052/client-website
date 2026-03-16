import express from "express";
import Message from "../models/Message.js";

const router = express.Router();


// CREATE MESSAGE
router.post("/",async(req,res)=>{

    try{

        const newMessage = new Message(req.body)

        await newMessage.save()

        res.json({message:"Message saved"})

    }catch(error){
        res.status(500).json(error)
    }

})


// GET ALL MESSAGES
router.get("/",async(req,res)=>{

    try{

        const messages = await Message.find().sort({createdAt:-1})

        res.json(messages)

    }catch(error){
        res.status(500).json(error)
    }

})


// DELETE MESSAGE
router.delete("/:id",async(req,res)=>{

    try{

        await Message.findByIdAndDelete(req.params.id)

        res.json({message:"Message deleted"})

    }catch(error){
        res.status(500).json(error)
    }

})

export default router