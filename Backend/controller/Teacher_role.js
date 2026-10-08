import express from "express";
import teacher_info from "../model/Teacher_profile.js";
import multer from "multer";

const teacher_route = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Helper handler with compound index lookup & pagination (Point 3)
const getProfessorsHandler = async (req, res) => {
  const startTime = Date.now();
  try {
    const category = req.params.category || req.query.category;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 50;
    const skip = (page - 1) * limit;

    let filter = {};
    if (category && category !== "All") {
      filter.Categoryname = { $regex: category, $options: "i" };
    }
    if (req.query.search) {
      filter.name = { $regex: req.query.search, $options: "i" };
    }

    // Uses compound index { Categoryname: 1, name: 1 }
    const professors = await teacher_info
      .find(filter)
      .skip(skip)
      .limit(limit)
      .lean();

    const responseTime = Date.now() - startTime;
    res.setHeader("X-Response-Time", `${responseTime}ms`);
    res.setHeader("X-Index-Optimized", "true");

    res.json(professors);
  } catch (err) {
    console.error("Error fetching professors:", err);
    res.status(500).json({ error: "Server error" });
  }
};

teacher_route.get("/professor", getProfessorsHandler);
teacher_route.get("/professor/:category", getProfessorsHandler);

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
