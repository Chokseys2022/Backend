import mongoose from "mongoose";

//define blog schema
const blogSchema = new mongoose.Schema({
  //topic of blog
  topic: {
    type: String,
    required: [true, "Topic is required"],
    enum: ["family", "fitness", "reflection", "food"],
  },
  //blog title
  title: { type: String, required: [true, "Title is required"] },
  //actual blog content
  content: { type: String, required: [true, "Content is required"] },
  //date blog is created
  entryDate: { type: Date, default: Date.now },
  author: { type: String, required: [true, "Content is required"] },
  
});

export default mongoose.model("Blog", blogSchema);

// schemas:
//_id
// title
//subject or topic or content
//author name
//tags , eg: reflection, dance, family, nutrition, menatal and emotional health,
//date created
