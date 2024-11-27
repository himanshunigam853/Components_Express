// const mongoose = require('mongoose');
// const dbConnect = async()=>{
//     if(!process.env.Mongo_URI){
//         console.log('error');
//         process.exit(1);
//     }
//     try {
//         const conn = await mongoose.connect(process.env.Mongo_URI);
//         console.log(`Database Connect ${conn.connection.host}`);
//     } catch (error) {
//         console.log("DB not connected")
//     }
// }

// module.exports=dbConnect;

const mongoose = require('mongoose');
// db connection
const connectDB=async()=>{
    if(!process.env.MONGO_URI){
        console.error('Error:MONGO_URI is defined in .env');
        process.exit(1);
    }
    try{
        const conn=await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDb connected:${conn.connection.host}`);
    }catch(error){
        console.error(`Database connection :${error.message}`);
    }
};

module.exports=connectDB;