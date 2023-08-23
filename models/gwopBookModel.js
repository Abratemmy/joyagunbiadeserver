import mongoose from "mongoose";

const gwopBookSchema = mongoose.Schema({
    title: String,
    image: String,
    author: String,
    content: String,
    link: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const GwopBook = mongoose.model("gwopBook", gwopBookSchema);

export default GwopBook;