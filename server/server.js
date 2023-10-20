import express from "express";
import 'dotenv/config';
import mongoose from "mongoose";
import connectdb from "./src/service/mongoose.js";
import routesWorkouts from "./src/routes/workouts.js";

// Express app
const app = express();

// Mongoose
connectdb();
const db = mongoose.connection;
db.on("error", (error) => {
    console.error(error);
});
db.once("open", ()=> {
    console.log("Connected to Mongoose");
});

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use((req,res,next) => {
    console.log(req.path, req.method);
    next();
});

// Routes
app.use('/workouts',routesWorkouts);

// Listen 
app.listen(process.env.PORT, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}`);
});