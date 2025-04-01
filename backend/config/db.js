import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://gehanliyanage:root123@cluster0.dzeb728.mongodb.net/Project0').then(()=>console.log("DB Connected"));

}