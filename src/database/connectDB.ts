import mongoose from "mongoose";

const connectDB = async () => {
    const connectionString = "mongodb+srv://codenamew6p:0123@cluster0.tqd6h2w.mongodb.net/";

    mongoose.connect(connectionString)
        .then(() => console.log("Database connection established"))
        .catch((error: any) => console.log(error));
};

export default connectDB;