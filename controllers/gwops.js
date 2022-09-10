import mongoose from "mongoose";
import GwopFeedback from "../models/gwopMessage.js";


export const getGwops = async(req, res) => {
    try {
        const gwopMessages =await GwopFeedback.find();
        res.status(200).json(gwopMessages)
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}

export const createGwop = async(req, res) => {
    const post = req.body;
    const newPost = new GwopFeedback(post)

    try {
        await newPost.save();
    } catch (error) {
        res.status(409).json({ message: error.message})
    }
}

export const updateGwop = async(req, res) => {
    const { id: _id } = req.params;
    const post = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');


    const updatedPost = await GwopFeedback.findByIdAndUpdate(_id, {...post, _id }, {new: true});
    res.json(updatedPost);

}

export const deleteGwop = async(req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

    await GwopFeedback.findByIdAndRemove(id);

    res.json({ message: "post deleted successfully"})

}
