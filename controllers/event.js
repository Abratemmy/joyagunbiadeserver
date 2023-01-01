import EventModel from "../models/eventmodel.js";
import mongoose from "mongoose";


export const getEvents = async (req, res) => {
    try {
        const Event = await EventModel.find()

        res.status(200).json(Event)
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createEvent = async (req, res) => {
    const event = req.body;
    const newEvent = new EventModel(event)
    try {
        await newEvent.save();
        res.status(201).json(newEvent);
    } catch (error) {
        req.status(409).json({ message: error.message })
    }

}

export const updateEvent = async (req, res) => {
    const { id: _id } = req.params;
    const event = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No event with that id');


    const updatedEvent = await EventModel.findByIdAndUpdate(_id, { ...event, _id }, { new: true });
    res.json(updatedEvent);

}

export const deleteEvent = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No event with that id');

    await EventModel.findByIdAndRemove(id);

    res.json({ message: "event deleted successfully" })

}


