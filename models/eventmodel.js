import mongoose from "mongoose";
// import Inc from "mongoose-sequence";
// const AutoIncrement = Inc(mongoose); 

const eventSchema = mongoose.Schema({
    title: String,
    eventurl: String,
    startdate: String,
    location: String,

    createdAt: {
        type: Date,
        default: new Date()
    },
    // _id:Number
});

// gesSchema.plugin(AutoIncrement, {inc_field: '_id'});
const EventModel = mongoose.model("joyevent", eventSchema);

export default EventModel;