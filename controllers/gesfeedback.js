import GesFeedback from "../models/gesMessage.js";
import mongoose from "mongoose";


export const getGesFeedback = async (req, res) => {
    try {
        const gesFeedback = await GesFeedback.find()

        res.status(200).json(gesFeedback)
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createGesFeedback = async (req, res) => {
    const gespost = req.body;
    const newGesPost = new GesFeedback(gespost)
    try {
        await newGesPost.save();
        res.status(201).json(newGesPost);
    } catch (error) {
        req.status(409).json({ message: error.message })
    }

}

export const updateGesFeedback = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');


    const updatedPost = await GesFeedback.findByIdAndUpdate(_id, { ...post, _id }, { new: true });
    res.json(updatedPost);

}

export const deleteGesFeedback = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

    await GesFeedback.findByIdAndRemove(id);

    res.json({ message: "post deleted successfully" })

}


