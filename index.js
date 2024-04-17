import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import gesfeedback from "./routes/gesfeedback.js";
import gwop from "./routes/gwops.js";
import blog from "./routes/blog.js";
import joyevent from "./routes/event.js"
import gwopResources from './routes/gwopBook.js'
import mailchimp from '@mailchimp/mailchimp_marketing'


const app = express();
dotenv.config()

mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_API_SERVER,
});

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

app.post('/addSubscriber', async (req, res) => {
    const { email } = req.body;

    try {
        const response = await mailchimp.lists.addListMember(
            process.env.MAILCHIMP_AUDIENCE_ID,
            {
                email_address: email,
                status: 'subscribed',
            }
        )
        res.status(200).send(response);
        // console.log(response)
    } catch (error) {
        res
            .status(500)
            .send(JSON.stringify({ error: JSON.parse(error.response.text) }));
        console.log(error.message);
    }
})


const PORT = process.env.PORT || 5000


mongoose.set('strictQuery', false);
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port : ${PORT}`)))
    .catch((err) => console.log(err.message));
