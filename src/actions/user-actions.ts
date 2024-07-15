"use server";
import connectDB from "@/database/connectDB";
import User from "@/database/models/User";

const addUser = async (formData: any) => {
    await connectDB();
    try {
        const user = await User.create(formData);
        if (user) {
            return { message: "success" };
        } else {
            return { message: "failed " };
        }
    } catch (error) {
        console.log(error);
        return ({ message: "error" });
    }
}

export default addUser;