//Imports
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Blog from "./models/blogSchema.mjs";
import blogData from "./utilities/data.js";
import UserModel from "./models/User.mjs";
import cors from "cors";

//Configurations
dotenv.config(); //load env variables from .env file
const app = express(); //create an express server
const PORT = process.env.PORT || 3000; //define port

// Connect to MongoDB
(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
})();

//Middleware
app.use(express.json()); //parse JSON
app.use(express.urlencoded({ extended: true })); // parse URL-encoded bodies
app.use(cors());

//---------------------
//Creating all routes
//---------------------

// Seeding blog route
app.get("/seeds/blogData", async (req, res) => {
  try {
    console.log("Seeding blogs..."); // Log message indicating the seeding process has started
    await Blog.deleteMany({}); // delete existing blogs
    await Blog.create(blogData); // create new blogs from seed data
    console.log("Blogs seeded successfully."); // Log message indicating the seeding process has completed
    res.send(`Blog Database Seeded`);
  } catch (error) {
    console.error("Error seeding blogs:", error);
    res.status(500).send("Error seeding blogs");
  }
});

//CREATE route
app.post("/blogData", async (req, res) => {
  try {
    let newBlog = new Blog(req.body);
    await newBlog.save(); //save new blog to db
    res.json(newBlog);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

//READ route
app.get("/blogData", async (req, res) => {
  try {
    const allBlogs = await Blog.find({}); //retrieve all blogs from db
    res.json(allBlogs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

//UPDATE route
app.put("/blogData/:id", async (req, res) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    }); // Update blog

    res.json(updatedBlog);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

//DELETE route
app.delete("/:id", async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id); //delete blog by id

    res.status(200).json({ msg: "Item in blogs schema deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

//Error handling middleware
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).send("Server Error");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//----------------------------------------------END CODE---------------------------------------------//
