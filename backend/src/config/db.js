import mongoose from "mongoose";

const connectDB = async () => {
    try {
        console.log("Connecting to MongoDB with URL:", process.env.MONGODB_URL);
        const conn = await mongoose.connect(process.env.MONGODB_URL);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`MongoDB connection failed: ${error}`);
        process.exit(1);
    }
};

export default connectDB;