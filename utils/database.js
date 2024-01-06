import mongoose from "mongoose";

let isConnected = false;

export const connectDB = async () => {
    mongoose.set("strictQuery", true)

    if (isConnected) {
        console.log("Already connected")
        return;
    }
    try {
        mongoose.connect(process.env.MONGO_URI, {
            dbName: "todo"
        })
        isConnected = true;
        console.log("connection successful")
    } catch (error) {
        console.log("error: " + error)
    }

}