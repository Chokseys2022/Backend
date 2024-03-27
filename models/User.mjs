import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email: String,
    password: String
});

const UserModel = mongoose.model("User", UserSchema);

export default UserModel;
//----------------------------------------------END CODE---------------------------------------------//
//This is code for an experiment that did not work//