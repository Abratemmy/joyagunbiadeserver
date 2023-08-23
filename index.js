import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import gesfeedback from "./routes/gesfeedback.js";
import gwop from "./routes/gwops.js";
import blog from "./routes/blog.js";
import joyevent from "./routes/event.js"
import gwopResources from './routes/gwopBook.js'
import dotenv from "dotenv"


const app = express();
dotenv.config()

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());


app.use('/gesfeedback', gesfeedback);
app.use('/gwopfeedback', gwop);
app.use('/blog', blog);
app.use('/event', joyevent);
app.use('/gwop_resources', gwopResources)

app.get('/', (req, res) => {
    res.send("Hello Joy")
})



const PORT = process.env.PORT || 5000

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port : ${PORT}`)))
    .catch((err) => console.log(err.message));
