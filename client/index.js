/* eslint-disable no-unused-vars */
import mongoose from "mongoose";
import dotenv from "dotenv";


// database connection
export const mongoDB = () => {
    // mongoose.connect(process.env.MONGO_URL)
    mongoose.connect(process.env.MONGO_URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .then(() => {
        console.log("MongoDb database is connected!");
    })
    .catch((error) => {
        console.log(error);
    });
}