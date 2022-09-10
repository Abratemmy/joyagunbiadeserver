import mongoose from "mongoose";
import Inc from "mongoose-sequence";

const AutoIncrement = Inc(mongoose); 

const gwopSchema = mongoose.Schema({
    testimony: String,
    name:String,
    image:String,
    location:String,
    createdAt:{
       type:Date,
       default: new Date() 
    }
});
gwopSchema.plugin(AutoIncrement, {inc_field: 'id'});
const GwopFeedback = mongoose.model("gwopfeedback", gwopSchema);

export default GwopFeedback;