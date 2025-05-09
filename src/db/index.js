import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";



const connectDB= async()=>{
    try {
        const connectionInstance= await mongoose.connect(
            `${process.env.MONGODB_URI}${DB_NAME}`
            // "mongodb+srv://videotube:priyanshu123@videotube.vrr3n8g.mongodb.net/VideoTube"
        )
        console.log(`\n MonogoDB connected sucessfully  !! DB Host:${connectionInstance.connection.host}`)
    } catch (error) {
        console.log(`MONGODB FAILED connection : ${error}`)
        process.exit(1)
    }

}   

export default connectDB

