import express from 'express';
import tasks from './routers/tasks.js';
import dotenv from 'dotenv'
import connectDb from './db/connectdb.js'
import { notFound } from './middleware/not_found.js';
import cors from 'cors'

dotenv.config()

const app = express();

// middleware
app.use(express.json());
app.use(cors())

// use tasks router
app.use('/api/v1/tasks', tasks);
app.use(notFound)

const connectAndListen = async () => {
    try {
        await connectDb(process.env.MONGO_DB_URI)
        app.listen(process.env.PORT || 3000, () => {
            console.log(`App is listening on port ${process.env.PORT || 3000}`);
        });

    } catch (error) {
        console.log(error, "\n Problem occurs")
    }
}


connectAndListen()