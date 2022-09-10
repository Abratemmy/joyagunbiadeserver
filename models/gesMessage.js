import mongoose from "mongoose";
import Inc from "mongoose-sequence";
const AutoIncrement = Inc(mongoose); 

const gesSchema = mongoose.Schema({
    testimony: String,
    name:String,
    image:String,
    createdAt:{
       type:Date,
       default: new Date() 
    },
    // _id:Number
});

// gesSchema.plugin(AutoIncrement, {inc_field: '_id'});
const GesFeedback = mongoose.model("gesfeedback", gesSchema);

export default GesFeedback;