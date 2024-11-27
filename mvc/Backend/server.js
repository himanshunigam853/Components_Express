const express =require('express');
const app=express();
const dotenv=require('dotenv');
const connectDB=require('./config/db')


// Load environment var from .env files
dotenv.config();

// connect Database
connectDB();

const router = require("./Router/userRouter")
app.use('/love',router)

// Define a PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})