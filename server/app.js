import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import  {config}  from 'dotenv';
import dotenv from 'dotenv';



// import from files
import reportRouter from './routes/index.js'
import { mongoDB } from './database/index.js'



//creates a new instance of an Express application
const app = express();
app.use(cors());

//setting up config.env file so that we can use content of it
// config({
//     path: ".env"
// })
dotenv.config();

//connecting server and database, just call this func^
mongoDB();


// <------------ middlewares ------------> 

//we'll be sending data in json format, that's why it is required to use this middleware
app.use(express.json());

//we'll be using dynamic routes, in order to read the data from url we have to use this
app.use(express.urlencoded({ extended: true }));

//set 'credentials: true' to pass --> headers, cookies, etc to browser/frontend
app.use(cors({
    origin: 'https://localhost:3000',
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}))
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

// route splitting
app.use("/api/data", reportRouter)

// <-----------------------------------------------------------------------> 





//it is a test route just to see our server is working
app.get("/", (req, res) => {
    return res.send()
})

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 9000;

//function is used to bind and listen to the connections on the specified host and port
app.listen(PORT, (req, res) => {
    console.log(`Server is active on Port ${PORT}`)
})