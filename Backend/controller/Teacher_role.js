import express from "express";
// import connectDB from "../db.js";
import teacher_info from "../model/Teacher_profile.js";
import multer from "multer";

const teacher_route = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

// GET all professors or filter by category (both cases handled here)
teacher_route.get("/professor{/:category}", async (req, res) => {
  try {
    const category = req.params.category || req.query.category;
    let filter = {};

    if (category) {
      filter.Categoryname = { $regex: category, $options: "i" }; // case-insensitive
    }
    const professors = await teacher_info.find(filter);
    res.json(professors);
  } catch (err) {
    console.error("Error fetching professors:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// POST new teacher
teacher_route.post("/add-teacher", upload.single("Image"), async (req, res) => {
  const { name, degree, Designation, Categoryname } = req.body;
  const image_decode = req.file ? req.file.buffer.toString("base64") : null;
  const mimeType = req.file ? req.file.mimetype : null;

  try {
    const newTeacher = new teacher_info({
      name,
      mimeType,
      degree,
      Designation,
      Categoryname,
      Image: image_decode,
    });
    await newTeacher.save();
    res
      .status(201)
      .json({ message: "Teacher added successfully", teacher: newTeacher });
  } catch (error) {
    console.error("Error adding teacher:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default teacher_route;
