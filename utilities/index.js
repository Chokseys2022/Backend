import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import bcrypt from 'bcrypt';

import UserModel from './models/User';

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/Backend_Blogs', { useNewUrlParser: true, useUnifiedTopology: true });

const UserSchema = new mongoose.Schema({
    email: String,
    password: String
});

const UserModel = mongoose.model("users", UserSchema);

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email: email });
        if (user) {
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (passwordMatch) {
                res.status(200).json({ message: "Login Success" });
            } else {
                res.status(401).json({ message: "Password is incorrect" });
            }
        } else {
            res.status(404).json({ message: "No record exists" });
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "An error occurred" });
    }
});

app.listen(3000, () => {
    console.log("Server is Running");
});
//----------------------------------------------END CODE---------------------------------------------//
//This is code for an experiment that did not work//