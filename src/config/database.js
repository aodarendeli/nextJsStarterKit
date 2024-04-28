import mongoose from "mongoose";
let connected = false;

const mongoDb = async () => {
    mongoose.set('strictQuery', true);
    if (connected == true) {
        console.log("mongo db connected");
    }
}

try {
    await mongoose.connect("mongodb+srv://aodarendeli1997:34Esentepe@cluster0.gl4x6bz.mongodb.net/propertyDb")
    connected = true;
    console.log("mongo db connect");
} catch (error) {
    console.log("ozgur", error);
}

export default mongoDb;