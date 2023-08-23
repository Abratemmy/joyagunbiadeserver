import mongoose from "mongoose";
import GwopBook from "../models/gwopBookModel.js";


export const getgwopBook = async (req, res) => {
    let { title } = req.params;
    const slug = title.split("-").join(" ")
    try {
        const book = await GwopBook.findOne({ title: slug });
        console.log("get a single book", book)
        res.status(200).json(book)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}



export const getgwopBooks = async (req, res) => {
    try {
        const book = await GwopBook.find();
        res.status(200).json(book)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const creategwopBook = async (req, res) => {
    const book = req.body;
    const newbook = new GwopBook(book)

    try {
        await newbook.save();
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const updateGwopBook = async (req, res) => {
    const { id: _id } = req.params;
    const book = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No book with that id');


    const updatedBook = await GwopBook.findByIdAndUpdate(_id, { ...book, _id }, { new: true });
    res.json(updatedBook);

}

export const deleteGwopBook = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No book with that id');

    await GwopBook.findByIdAndRemove(id);

    res.json({ message: "book deleted successfully" })

}
