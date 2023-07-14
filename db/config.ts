import mongoose from "mongoose";

export const connect = async(): Promise<void> => {
    try {
        await mongoose.connect("mongodb+srv://valpas312:41667229Vv@cluster0.naob6w4.mongodb.net/?retryWrites=true&w=majority")
        console.log(">>> DB is connected");
    } catch (error) {
        console.error(error);
        throw new Error(">>> Error to connect to DB");
    }
};