import express from "express";

import connectDB from "../db.js"; // Importing the database connection function
// AS EXPRESS is library and router is functionality of express thats why we are calling as express.router
import teacher_info from "../model/Teacher_profile.js"
import multer from "multer"

const teacher_route=express.Router()
const storage=multer.memoryStorage();
const upload=multer(storage)
// routes to access all teahers
// teacher_route.get("/professor", async (req, res) => {
//   const teachers = await teacher_info.find();
//   res.json(teachers);
// });
// routes/teacher_route.js
teacher_route.get("/professor", async (req, res) => {
  try {
    const { category } = req.query;
    let filter = {};

    if (category) {
      filter.Categoryname = { $regex: category, $options: "i" }; // case-insensitive, partial match
    }

    const professors = await teacher_info.find(filter);
    res.json(professors);
  } catch (err) {
    console.error("Error fetching professors:", err);
    res.status(500).json({ error: "Server error" });
  }
});
// ...existing code...
// teacher_route.get("/professor/:category?", async (req, res) => {
//   try {
//     const category = req.params.category || req.query.category;
//     let filter = {};

//     if (category) {
//       filter.Categoryname = { $regex: category, $options: "i" };
//     }

//     const professors = await teacher_info.find(filter);
//     res.json(professors);
//   } catch (err) {
//     console.error("Error fetching professors:", err);
//     res.status(500).json({ error: "Server error" });
//   }
// });
// ...existing code...




teacher_route.post("/add-teacher",upload.single('Image'),async (req,res)=>{
  const { name, degree, Designation, Categoryname } = req.body;
  const image_decode = req.file ? req.file.buffer.toString('base64') : null; // Convert image buffer to base64 string
  const mimeType = req.file ? req.file.mimetype : null; // Store MIME type
  try {
    const newTeacher = new teacher_info({
      name,
      mimeType,
      degree,
      Designation,
      Categoryname,
      Image:image_decode
    });
    await newTeacher.save();
    res.status(201).json({ message: "Teacher added successfully", teacher: newTeacher });
  } catch (error) {
    console.error("Error adding teacher:", error);
    res.status(500).json({ message: "Internal server error" });
  }
})

export default teacher_route;
