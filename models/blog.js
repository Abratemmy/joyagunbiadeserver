import mongoose from "mongoose";
// import Inc from "mongoose-sequence";
// const AutoIncrement = Inc(mongoose); 

const blogSchema = mongoose.Schema({
    number: String,
    title: String,
    image: String,
    podcast: String,
    content: String,
    excerpt: String,
    createdAt: {
        type: Date,
        default: new Date()
    },
    // _id:Number
});

// gesSchema.plugin(AutoIncrement, {inc_field: '_id'});
const Blog = mongoose.model("joyblog", blogSchema);

export default Blog;